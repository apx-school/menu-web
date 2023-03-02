import { getCategories } from "./data.js";

export function layout(content) {
  return /*html*/ `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menú web</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/index.css" />
  </head>
  <body>
    ${content}
  </body>
  </html>`;
}

export async function laHome() {
  const categories = await getCategories();

  return layout(/*html*/ `
    <div class="cat">
      <div class="cat__header">
        Menú
      </div>
      <div class="cat__list">
        ${categories
          .map(
            (c) => `
           <a class="cat__item" href="/categorias/${c.id}"> 
            <img class="cat__img" src=${c.imgUrl} alt="" />
            <div class="cat__item-texts">
              <div class="cat__item-title">
                ${c.title}
              </div>  
              <div class="cat__item-subtitle">
                ${c.subtitle}
              </div>  
            </div>
           </a>
        `
          )
          .join("")}
      </div>           
    </div>
  `);
}

export async function categoryPage(categoryId) {
  return layout(/*html*/ `
    <div class="catpage">
      Categoría x    
    </div>
  `);
}
