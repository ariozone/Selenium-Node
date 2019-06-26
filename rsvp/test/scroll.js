const { Browser, By, Key, until } = require("selenium-webdriver")
const { suite } = require("selenium-webdriver/testing")
const { scroll_magic: url } = require("../../config.json")
const assert = require("assert")

suite(env => {
  describe("Infinite scroll demo", () => {
    let driver
    let page

    before(async () => {
      driver = await env.builder().build()
      page = driver.get(url)
    })
    after(async () => {
      driver.quit()
    })
  })
})
