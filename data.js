import products from "./products.json" assert { type: "json" };
import categories from "./categories.json" assert { type: "json" };

/**
 * Download data from the specified URL.
 *
 * @async
 * @return {Promise<{id:string, title:string}[]>} The data from the URL.
 */

export async function getCategories() {
  return categories;
}
