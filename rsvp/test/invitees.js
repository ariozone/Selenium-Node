const { rsvp } = require("../../config.json")
const { Browser, By, Key, until } = require("selenium-webdriver")
const { suite } = require("selenium-webdriver/testing")
const assert = require("assert")

const url = rsvp

suite(function(env) {
  describe("RSVP site", function() {
    let driver
    before(async function() {
      this.timeout(3000)
      driver = await env.builder().build()
      await driver.get(url)
    })
    it("has invitee list", async function() {
      const elements = await driver.findElements(By.id("invitedList"))
      assert(elements.length > 0)
    })

    it("has registration form", async function() {
      const elements = await driver.findElements(By.id("registrar"))
      assert(elements.length > 0)
    })
    after(async function() {
      driver.quit()
    })
  })
})
