const selenium = require("selenium-webdriver")
const By = selenium.By
const driver = new selenium.Builder().forBrowser("chrome").build()
const { url1: url } = require("../../config.json")
const invitees = require("./test-data")()

driver.get(url)

const locators = {
  inviteeForm: By.id("registrar"),
  inviteeNameField: By.name("name"),
  formSubmit: By.css("button"),
  toggleVisiblity: By.css(".main > div input")
}

async function addInvitee(name) {
  driver.findElement(locators.inviteeNameField).sendKeys(name)
  // driver.findElement(locators.inviteeForm)
  await driver.findElement(locators.formSubmit).click()
}
function toggleVisiblity() {
  driver.findElement(locators.toggleVisiblity).click()
}

invitees.forEach(invitee => addInvitee(invitee))

// toggleVisiblity()

// driver.close()
