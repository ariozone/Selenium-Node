const { Browser, By, Key, until } = require("selenium-webdriver")
const { scroll_magic: url } = require("../../config.json")

class ScrollPage {
  constructor(driver) {
    this.driver = driver
    locators = {}
  }

  open() {
    this.driver.get(url)
  }
}
module.exports = ScrollPage
