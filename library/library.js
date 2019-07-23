const webdriver = require("selenium-webdriver")
require("chromedriver")
const By = webdriver.By
const until = webdriver.until
const { library_app: url } = require("../config.json")
const driver = new webdriver.Builder().forBrowser("chrome").build()

driver.get(url)
driver.findElement(By.css("input")).sendKeys("user@domain.com")
driver
  .findElement(By.css(".btn-lg"))
  .getText()
  .then(txt => {
    console.log(txt)
  })
driver.findElements(By.css("nav li")).then(elements => {
  elements.map(element =>
    element.getText().then(txt => {
      console.log(txt)
    })
  )
})
