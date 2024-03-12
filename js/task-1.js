let items = document.getElementsByClassName('item');

console.log(`Number of categories: ${items.length}`);
for (let item of items) {
  let heading = item.getElementsByTagName('h2').item(0).innerHTML;
  let elements = item.getElementsByTagName('li').length;
  // let text = heading.innerHTML;
  console.log(`Category: ${heading} \nElements: ${elements}`);
}
