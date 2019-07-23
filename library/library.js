const webdriver = require("selenium-webdriver")
const By = webdriver.By
const until = webdriver.until
const driver = new webdriver.Builder().forBrowser("chrome").build()
const { library_app: url } = require("../config.json")

driver.get("https://google.com")
