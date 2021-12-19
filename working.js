//  * https://www.youtube.com/watch?v=IvaJ5n5xFqU

const puppeteer = require('puppeteer')
const fs = require('fs-extra');


(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 25 })
  const page = await browser.newPage()
  await page.goto('https://www.strava.com/login')

  await page.click('.btn-accept-cookie-banner')

  await page.type('#email', 'theorlbooth@googlemail.com')
  await page.type('#password', 'StRaVa3693')

  await Promise.all([
    page.waitForNavigation(),
    page.click('#login-button')
  ])

  await page.goto('https://www.strava.com/athlete/training')

  await page.select('#activity_type', 'Run')

  await page.waitForFunction(() => document.querySelectorAll('#search-results tbody tr').length >= 3)
  await page.waitForTimeout(1000)

  await fs.writeFile('run.csv', 'date,time,distance\n')

  function cleanDistance(distance) {
    const clean = distance.replace(/(\r\n|\n|\r)/gm, '')
    return clean.substring(0, clean.indexOf('<'))
  }

  function cleanDate(date) {
    return date.split(' ').pop()
  }

  const cleanedData = []

  for (let i = 0; i < 2; i++) {

    const rows = await page.evaluate(() =>
      Array.from(document.querySelectorAll('tbody > tr')).map(row => [
        row.querySelector('td:nth-child(2)').innerHTML,
        row.querySelector('td:nth-child(4)').innerHTML,
        row.querySelector('td:nth-child(5)').innerHTML
      ]))

    const requiredRows = []
    for (let i = 0; i < rows.length; i++) {
      if (i % 2 === 0) {
        requiredRows.push(rows[i])
      }
    }
    
    requiredRows.forEach(row => {
      const newArray = []
      newArray.push(cleanDate(row[0]))
      newArray.push(row[1])
      newArray.push(cleanDistance(row[2]))
      cleanedData.push(newArray)
    })

    await page.click('.next_page')
    
    await page.waitForFunction(() => document.querySelectorAll('#search-results tbody tr').length >= 3)
    await page.waitForTimeout(1000)
  }

  for (const x of cleanedData) {
    await fs.appendFile('run.csv', `${x[0]},${x[1]},${x[2]}\n`)
  }

  console.log('done')

  await browser.close()
})()