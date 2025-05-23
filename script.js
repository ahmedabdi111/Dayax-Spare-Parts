document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { name: "Engine", price: "$500" },
    { name: "Gearbox", price: "$350" },
    { name: "Brake Pads", price: "$40" },
    { name: "Alternator", price: "$120" },
    { name: "Radiator", price: "$90" },
    { name: "Fuel Pump", price: "$75" },
    { name: "Shock Absorbers", price: "$150" },
    { name: "Steering Wheel", price: "$60" }
  ];

  const productList = document.getElementById('productList');

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');
    productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p>`;
    productList.appendChild(productDiv);
  });
});
