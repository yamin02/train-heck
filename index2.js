const puppeteer = require('puppeteer-core');

(async () => {
 const browser = await puppeteer.launch({ executablePath: '/usr/bin/chromium' , headless : false  } );
//   const browser = await puppeteer.launch();
  const page = await browser.newPage();
await page.goto('https://eticket.railway.gov.bd/login/en')
//   await page.goto('https://eticket.railway.gov.bd/booking/train/search?fromcity=Dhaka&tocity=Chittagong&doj=18-Apr-2022&class=AC_S');
//   await page.screenshot({ path: 'example.png' });
await page.type('#mobile_number' , '01818672900')
await page.type('#password','chandanpura');
await page.click('.login-form-submit-btn');
await page.waitForTimeout(5000);

await page.goto('https://eticket.railway.gov.bd/booking/train/search?fromcity=Dhaka&tocity=Chittagong&doj=18-Apr-2022&class=AC_S');
await page.waitForTimeout(5000);
await page.click('.seats-button');
await page.waitForTimeout(10000);

await page.evaluate(() =>{
    var p = document.getElementsByClassName('seat') ;
    chooseSeat(p[61]);
})
await page.waitForTimeout(10000);
await browser.close();
console.log('hocche two')
})();