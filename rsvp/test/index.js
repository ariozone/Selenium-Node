const selenium = require("selenium-webdriver")
const driver = new selenium.Builder().forBrowser("chrome").build()
const { url1: url } = require("../../config.json")
const By = selenium.By

driver.get(url)

//Using explicit xpath to find element
// const inputField = driver.findElement(
//   By.xpath("/html/body/div/header/form/input")
// )

async function getAsynchronously() {
  // const form = driver.findElement(By.id("registrar"))
  // form.findElement(By.css("input")).sendKeys("Ario")
  // form.findElement(By.css("button")).click()
  try {
    const header = driver.findElement(By.css("h1"))
    const text = await header.getText()
    console.log(text)
  } catch (error) {
    console.error(error)
  }
}
getAsynchronously()

// driver.close()
