import {
  getCategories,
  getCategoryAndProducts,
  getProductById,
} from "./data.js";

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

export async function categoryPage(context) {
  const paths = context.req.url.split("/");
  const categoryId = paths.at(-1);

  const { category, products } = await getCategoryAndProducts(categoryId);

  return layout(/*html*/ `
    <div class="catprods">
      <header class="catprods__header">
        <nav class="catprods__nav">
          <a href="/">&lt; Volver</a>
        </nav>
        <h1 class="catprods__title textH1">
          ${category.title}
        </h1>
      </header>
      <main class="catprods-body">
        ${products
          .map(
            (p) => /*html*/ `
          <a class="catprods__prod" href="/productos/${p.id}">
            <img class="catprods__prod-img" src="${p.imgURL}" alt="" />
            <div class="catprods__prod-texts">
              <div class="catprods__prod-title">
                ${p.name}
              </div>
              <div class="catprods__prod-subtitle">
                ${p.subtitle}
              </div>
            </div>
            <div class="catprods__prod-price">
              $${p.price}
            </div>
          </a>
        `
          )
          .join("")}
      </main>
    </div>
  `);
}

export async function productPage(context) {
  const paths = context.req.url.split("/");
  const productId = paths.at(-1);
  const productData = await getProductById(productId);

  return layout(/*html*/ `
    <div class="prod">
      <header class="prod__header">
        <nav class="prod__nav">
          <a onclick="history.back()">&lt; Volver</a>
        </nav>
      </header>
      <main class="prod-body">
        <h1 class="prod__title textH1">
          ${productData.name}
        </h1>
        <h2 class="prod__subtitle">
          ${productData.name}
        </h2>
        <img class="prod__image" src="${productData.imgURL}"/>
        <p class="prod__price">
          $${productData.price}
        </p>
      </main>
    </div>
  `);
}
