const By = require("selenium-webdriver").By
const { rsvp } = require("../../config.json")

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
    this.driver.get(rsvp)
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
}

class Invitee {
  constructor(element) {
    this.element = element
    this.locators = {
      removeButton: By.css("button:last-child"),
      confirmedCheckbox: By.css("input[type='checkbox']"),
      editButton: By.css("button:first-of-type"),
      textInput: By.css("input[type='text']")
    }
  }
  remove() {
    this.element.findElement(this.locators.removeButton).click()
  }

  toggleConfirmation() {
    this.element.findElement(this.locators.confirmedCheckbox).click()
  }

  editName(name) {
    const editButton = this.element.findElement(this.locators.editButton)
    editButton.click()
    const inputField = this.element.findElement(this.locators.textInput)
    inputField.clear()
    inputField.sendKeys(name)
    editButton.click()
  }
}
module.exports = HomePage
