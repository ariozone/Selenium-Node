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
        By.xpath(`//span[text() = "${invitee}"]/../button[last()]`),
      inviteeByName: name => By.xpath(`//span[text() = "${name}"]/..`)
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

  findInviteeByName(name) {
    const el = this.driver.findElement(this.locators.inviteeByName(name))
    return new Invitee(el)
  }

  toggleVisiblity() {
    this.driver
      .findElement(this.locators.toggleVisiblity)
      .click()
      .catch()
  }

  // removeInvitee(invitee) {
  //   this.driver
  //     .findElement(this.locators.removeButtonForInvitee(invitee))
  //     .click()
  // }
}

class Invitee {
  constructor(element) {
    this.element = element
    this.locators = {
      removeButton: By.css("button:last-child"),
      confirmedCheckbox: By.css("input[type='checkbox']")
    }
  }
  remove() {
    this.element.findElement(this.locators.removeButton).click()
  }

  toggleConfirmation() {
    this.element.findElement(this.locators.confirmedCheckbox).click()
  }
}
module.exports = HomePage
