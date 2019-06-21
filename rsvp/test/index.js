const selenium = require("selenium-webdriver")
const driver = new selenium.Builder().forBrowser("chrome").build()
const { url1: url } = require("../../config.json")
driver.get(url)
