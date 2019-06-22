const selenium = require("selenium-webdriver")
const By = selenium.By
const driver = new selenium.Builder().forBrowser("chrome").build()
const { url } = require("../../config.json")

driver.get(url)

const locators = {
  inviteeForm: By.id("registrar"),
  inviteeNameField: By.name("name"),
  formSubmit: By.css("button"),
  toggleVisiblity: By.css(".main > div input"),
  removeButtonForInvitee: invitee =>
    By.xpath(`//span[text()= "${invitee}"]/../button[last()]`)
}

function addInvitee(name) {
  driver.findElement(locators.inviteeNameField).sendKeys(name)
  driver.findElement(locators.inviteeForm)
  driver.findElement(locators.formSubmit).click()
}
function toggleVisiblity() {
  driver
    .findElement(locators.toggleVisiblity)
    .click()
    .catch()
}

function removeInvitee(invitee) {
  driver.findElement(locators.removeButtonForInvitee(invitee)).click()
}

const invitees = [
  "Gonzalo Torres del Fierro",
  "Shadd Anderson",
  "George Aparece",
  "Shadab Khan",
  "Joseph Michael Casey",
  "Jennifer Nordell",
  "Faisal Albinali",
  "Taron Foxworth",
  "David Riesz",
  "Maicej Torbus",
  "Martin Luckett",
  "Joel Bardsley",
  "Reuben Varzea",
  "Ken Alger",
  "Amrit Pandey",
  "Rafal Rudzinski",
  "Brian Lynch",
  "Lupe Camacho",
  "Luke Fiji",
  "Sean Christensen",
  "Philip Graf",
  "Mike Norman",
  "Michael Hulet",
  "Brent Suggs"
]

invitees.forEach(invitee => addInvitee(invitee))
removeInvitee("Shadd Anderson")

// toggleVisiblity()

// driver.close()
