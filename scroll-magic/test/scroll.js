const { Browser, By, Key, until } = require("selenium-webdriver")
const { suite } = require("selenium-webdriver/testing")
const ScrollPage = require("../pages/scroll")

const assert = require("assert")

suite(env => {
  describe("Infinite scroll demo", () => {
    let driver
    let page

    before(async () => {
      driver = await env.builder().build()
      page = ScrollPage.open()
    })
    after(async () => {
      driver.quit()
    })
  })
})
