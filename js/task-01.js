const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

for (let i = 0; i < categoriesItems.length; i++) {
  const item = categoriesItems[i];
  const categoryTitle = item.firstElementChild.textContent;
  const categoryItems = item.lastElementChild.children;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Number of items: ${categoryItems.length}`);
}
