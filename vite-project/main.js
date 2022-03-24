const items = [
  {
    name: "trbles",
    image: "sdfge",
    price:" eafa",
    
  },
];

function all() {
  items.forEach((item) =>
    DOMSelectors.gallery.insertAdjacentHTML(
      "afterbegin",
      `<div class="box">
      <h2>${item.name}</h2>
      <img class= "image" src="${item.image}">
      <p>$${item.price}</p></div>`
    )
  );
}
