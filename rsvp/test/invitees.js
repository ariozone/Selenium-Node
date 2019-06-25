const { rsvp } = require("../../config.json")
const { Browser, By, Key, until } = require("selenium-webdriver")
const { suite } = require("selenium-webdriver/testing")
const assert = require("assert")

// We set up this sample app on a public web server for your convenience.
// But when you're testing your own apps, you'll probably want to install it on the same
// computer where you're running your tests, so that you can connect to "localhost"
// and not have your tests slowed down by network delays.
const url =
  "https://treehouse-projects.github.io/selenium-webdriver-intermediate/waits/app/index.html"

suite(function(env) {
  describe("RSVP site", function() {
    it("has invitee list", function() {
      // env passed in from suite() is an object that can build web driver instances
      env
        .builder()
        .build()
        // We won't get the driver back right away. Instead, we get a PROMISE
        // that we'll EVENTUALLY get a driver. We need to call then() on
        // this promise, and pass it a callback function that will be called when
        // the driver is available.
        // This uses JavaScript's arrow function syntax. If you're not familiar
        // with this notation, see below.
        .then(driver => {
          // Get the webpage. Since we have to send a network request
          // for the page, again, this is something that won't complete right
          // away.
          driver
            .get(url)
            // Again, returns a promise we need to call then() on.
            // We pass then() a function that will be called once the page
            // is retrieved.
            .then(() => driver.findElements(By.id("invitedList")))
            // findElements() returns ANOTHER promise. When the list of
            // matching elements is found, we test that it's not empty.
            .then(elements => assert(elements.length > 0))
            // Finally, we need to tell WebDriver to exit, so it doesn't
            // leave an open browser cluttering our desktop.
            .then(() => driver.quit())
        })
    })
  })
})
