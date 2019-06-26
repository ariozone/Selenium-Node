const { suite } = require("selenium-webdriver/testing")
const assert = require("assert")
// Load the RsvpPage class.
const RsvpPage = require("../pages/rsvp.js")

suite(function(env) {
  describe("RSVP site", async function() {
    let driver
    // Define a variable to hold the page object here so that it stays in scope
    // for all our tests as well.
    let page

    before(async function() {
      driver = await env.builder().build()
      // Create a new page object that will use our driver object.
      // Store it in the page variable.
      page = new RsvpPage(driver)
      // Instead of calling driver.get() ourselves, we'll let the page object
      // load the page for us.
      await page.open()
    })

    it("has invitee list", async function() {
      // Use the locator from the page object instead.
      const elements = await driver.findElements(page.locators.invitedList)
      assert(elements.length > 0)
    })

    it("has registration form", async function() {
      // Use the locator from the page object instead.
      const elements = await driver.findElements(page.locators.registrationForm)
      assert(elements.length > 0)
    })

    // We'll add a test with a description saying the page "loads existing invitations".
    // We'll set up the test in another asynchronous function.
    it("loads existing invitations", async function() {
      // We'll call our driver object's findElements() method. Notice that's "findElements"
      // PLURAL, not singular - we expect to find multiple matching elements, so this will
      // return an array of elements. We'll pass findElements() the invitees locator from
      // our page object, which is set up to find all the "li" elements inside the element
      // with an ID of "invitedList". findElements() returns a promise, soWe use the "await"
      // keyword to wait for the promise to resolve, and we store the resulting array in
      // the "invitees" variable.
      await driver.manage().setTimeouts({ implicit: 3000 })
      let invitees = await driver.findElements(page.locators.invitees)
      // Now, we need to test whether the invitees list loaded correctly. Each element
      // contains the invitee's name. So I'm going to access the second invitee element,
      // and get its text using the getText() method. As always, this returns a promise,
      // so I'll get its resolved value using "await".
      let text = await invitees[1].getText()
      // Finally, we need the test itself. I'm going to assert that the element text
      // includes the string "Craig Dennis".
      assert(text.includes("Craig Dennis"))
    })

    after(async function() {
      driver.quit()
    })
  })
})
