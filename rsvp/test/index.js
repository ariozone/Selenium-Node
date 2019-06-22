const selenium = require("selenium-webdriver")
const driver = new selenium.Builder().forBrowser("chrome").build()
const { url1: url } = require("../../config.json")
const By = selenium.By

driver.get(url)

//Using explicit xpath to find element
// const inputField = driver.findElement(
//   By.xpath("/html/body/div/header/form/input")
// )

// async function findInput() {
//   const form = driver.findElement(By.id("registrar"))
//   try {
//     const fieldName = await form.getTagName()
//     const fieldSize = await form.getRect()
//     console.log(fieldName)
//     console.dir(fieldSize)
//   } catch (error) {
//     console.error(error)
//   }
// }
// findInput()

const form = driver.findElement(By.id("registrar"))
form.findElement(By.css("input")).sendKeys("Ario")
form.findElement(By.css("button")).click()

// driver.close()
