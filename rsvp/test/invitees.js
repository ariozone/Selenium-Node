const { Browser, By, Key, until } = require("selenium-webdriver")
const { suite } = require("selenium-webdriver/testing")
const assert = require("assert")
// Load the RsvpPage class.
const RsvpPage = require("../pages/rsvp.js")

suite(function(env) {
  describe("RSVP site", async function() {
    let driver
    let page

    before(async function() {
      driver = await env.builder().build()
      page = new RsvpPage(driver)
      await page.open()
    })

    it("has invitee list", async function() {
      const elements = await driver.findElements(page.locators.invitedList)
      assert(elements.length > 0)
    })

    it("has registration form", async function() {
      const elements = await driver.findElements(page.locators.registrationForm)
      assert(elements.length > 0)
    })

    it("loads existing invitations", async function() {
      const list = await driver.findElement(page.locators.invitedList)
      console.log(list)
      await driver.wait(until.elementLocated(page.locators.invitees))

      const text = await list.getText()

      assert(text.includes("Craig Dennis"))
    })

    after(async function() {
      driver.quit()
    })
  })
})
