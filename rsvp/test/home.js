const By = require("selenium-webdriver").By
const { url: url } = require("../../config.json")

class HomePage {
  constructor(driver) {
    this.driver = driver
    this.locators = {
      inviteeForm: By.id("registrar"),
      inviteeNameField: By.name("name"),
      formSubmit: By.css("button"),
      toggleVisiblity: By.css(".main > div input"),
      removeButtonForInvitee: invitee =>
        By.xpath(`//span[text()= "${invitee}"]/../button[last()]`)
    }
  }

  open() {
    this.driver.get(url)
  }

  addInvitee(name) {
    this.driver.findElement(this.locators.inviteeNameField).sendKeys(name)
    this.driver.findElement(this.locators.inviteeForm)
    this.driver.findElement(this.locators.formSubmit).click()
  }
  toggleVisiblity() {
    this.driver
      .findElement(this.locators.toggleVisiblity)
      .click()
      .catch()
  }

  removeInvitee(invitee) {
    this.driver
      .findElement(this.locators.removeButtonForInvitee(invitee))
      .click()
  }
}

module.exports = HomePage
