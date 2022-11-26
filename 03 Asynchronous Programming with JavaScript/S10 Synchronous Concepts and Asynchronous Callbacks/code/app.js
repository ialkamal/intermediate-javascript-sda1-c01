require("dotenv").config();
const puppeteer = require("puppeteer");

const url =
  "https://www.noon.com/saudi-en/mobiles-bestsellers-sa/?sort%5Bby%5D=popularity&sort%5Bdir%5D=desc";

const viewport = { width: 1280, height: 5000 };

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    page.setViewport(viewport);
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
    );

    //Scraping best selling mobile phones on noon

    await page.goto(url, { waitUntil: "networkidle0", timeout: 0 });
    //await page.screenshot({ path: "products.png" });

    let products = await page.$$eval(
      ".sc-2e5fceb-7.iFjxuh.grid > span",
      (spans) => {
        return spans.map((el) => {
          const src = Array.from(el.querySelectorAll("img"))[3].src;

          const name = el
            .querySelector('[data-qa="product-name"]')
            .getAttribute("title");

          const currency = el.querySelector(".currency").textContent;
          const amount = el.querySelector(".amount").textContent;

          return { name, src, currency, amount };
        });
      }
    );

    console.log(products);

    // html template to print pdf

    const template = ((items) => {
      return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Bestselling Mobiles on Noon!</title>
        </head>
        <body>
          <h1>Bestselling Mobiles on Noon!</h1>
          <br/>
          <section>
          ${items
            .map((item) => {
              return `
              <div>
              <h4>${item.name}</h4>
              <img src=${item.src} width="150px"/>
              <p>${item.currency} ${new Intl.NumberFormat().format(
                item.amount
              )}</p>
              </div>
              `;
            })
            .join("")}
          </section>
        </body>
      </html>
      `;
    })(products);

    page = await browser.newPage();
    await page.setContent(template, { waitUntil: "load" });

    await page.pdf({
      format: "A4",
      path: `${__dirname}/mobiles.pdf`,
      margin: {
        top: "20px",
        left: "20px",
        right: "20px",
        bottom: "20px",
      },
    });

    browser.close();
  } catch (err) {
    console.log("There was an error: ", err);
  }
})();
