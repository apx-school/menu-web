import products from "./products.js";
import categories from "./categories.js";

/**
 * Download data from the specified URL.
 *
 * @async
 * @return {Promise<{id:string, title:string}[]>} The data from the URL.
 */

export async function getCategories() {
  return categories;
}

export async function getCategoryById(id) {
  const allCategories = await getCategories();
  return allCategories?.find((c) => c.id === id);
}

export async function getProducts() {
  return products;
}

export async function getProductsByCategoryId(categoryId) {
  const allProducts = await getProducts();
  return allProducts.filter((p) => p.categories.includes(categoryId));
}

export async function getProductById(id) {
  const allProducts = await getProducts();
  return allProducts.find((p) => p.id === id);
}

export async function getCategoryAndProducts(categoryId) {
  const category = await getCategoryById(categoryId);
  const products = await getProductsByCategoryId(categoryId);

  return {
    category,
    products,
  };
}
