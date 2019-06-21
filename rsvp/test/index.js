const selenium = require("selenium-webdriver")
const driver = new selenium.Builder().forBrowser("chrome").build()
const { url1: url } = require("../../config.json")
const By = selenium.By

driver.get(url)

const inputField = driver.findElement(
  By.xpath("/html/body/div/header/form/input")
)

inputField.sendKeys("Found this element with an explicit xpath")

// driver.close()
