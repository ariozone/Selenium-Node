const selenium = require("selenium-webdriver")
const driver = new selenium.Builder().forBrowser("chrome").build()
const { url1: url } = require("../../config.json")
const By = selenium.By

driver.get(url)

//Using explicit xpath to find element
// const inputField = driver.findElement(
//   By.xpath("/html/body/div/header/form/input")
// )

async function findInput() {
  const form = driver.findElement(By.id("registrar"))
  try {
    const fieldName = await form.getTagName()
    console.log(fieldName)
  } catch (error) {
    console.error(error)
  }
}
findInput()

// driver.close()
