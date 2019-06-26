const { Browser, By, Key, until } = require("selenium-webdriver")
const { rsvp: url } = require("../../config.json")

class RsvpPage {
  constructor(driver) {
    this.driver = driver

    this.locators = {
      invitedList: By.id("invitedList"),
      registrationForm: By.id("registrar"),
      invitees: By.css("#invitedList li")
    }
  }

  // This method will load the page. It will use whatever driver object we pass into the constructor.
  open() {
    this.driver.get(url)
  }
}

// We need to set the values that will be returned when this module is required from another module.
// We'll set it up to return the RsvpPage class.
module.exports = RsvpPage
