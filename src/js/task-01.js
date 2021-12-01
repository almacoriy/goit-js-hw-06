console.log(
  `Number of categories: ${
    document.querySelector("#categories").children.length
  }`
);

const getTitleAndNumbersEl = document
  .querySelectorAll(".item")
  .forEach((element) => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
  });
