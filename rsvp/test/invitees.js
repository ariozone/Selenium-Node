const { rsvp } = require("../../config.json")
const { Browser, By, Key, until } = require("selenium-webdriver")
const { suite } = require("selenium-webdriver/testing")
const assert = require("assert")

const url = rsvp

suite(function(env) {
  describe("RSVP site", function() {
    // In order to use the await keyword, we need to indicate this function is
    // asynchronous. We do that by adding the async keyword before the
    // function keyword.
    it("has invitee list", async function() {
      this.timeout(5000)
      // Calling build() to build a driver still returns a promise. But instead
      // of calling then() on that promise, we can place the await keyword right
      // before the call that returns the promise. JavaScript will pause the
      // execution of the asynchronous function, and wait for the promise to
      // resolve. When it does, await will return the resolved promise's value,
      // that is, the new driver object. We then assign that object to a variable
      // named driver.
      let driver = await env.builder().build()
      // Same idea here. get() still returns a promise, but typing await before
      // the call pauses execution until the page is retrieved and the promise
      // is resolved. In this case, we don't need to assign the promise's value
      // anywhere.
      await driver.get(url)
      // Another promise, another await keyword. When it resolves, the returned
      // list of elements is assigned to the elements variable.
      let elements = await driver.findElements(By.id("invitedList"))
      // Now we can check the list of elements to ensure it's not empty.
      assert(elements.length > 0)
      // Finally, we can tell the driver to close the browser.
      driver.quit()
    })
  })
})
