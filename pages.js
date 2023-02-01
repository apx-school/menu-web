import { getCategories } from "./data.js";

export function layout(content) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/index.css" />
  </head>
  <body>
    ${content}
  </body>
  </html>`;
}

export async function laHome() {
  const categories = await getCategories();

  return layout(`
    <div class="cat">
      <div class="cat__header">
      Header
      </div>
      <div class="cat__list">
        ${categories
          .map(
            (c) => `
           <div class="cat__item">
            <img class="cat__img" src=${c.imgUrl} alt="" />
            <div class="cat__item-texts">
              <div class="cat__item-title">
                ${c.title}
              </div>  
              <div class="cat__item-subtitle">
                ${c.subtitle}
              </div>  
            </div>
           </div>
        `
          )
          .join("")}
      </div>           
    </div>
  `);
}

export async function categoryPage(categoryId) {}
