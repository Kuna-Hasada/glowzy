// Sample product data
const products = {
  men: {
    jacket: [
      {
        img: "./assets/image/men/jacket/jacket--01.png",
        name: "Leather Jacket",
        price: 1999,
        color: "Black",
        material: "Pure Leather",
        desc: "Premium leather jacket with soft inner lining.",
      },
      {
        img: "./assets/image/men/jacket/jacket--02.png",
        name: "Denim Jacket",
        price: 1499,
        color: "Blue",
        material: "Denim 350 GSM",
        desc: "Classic denim jacket for casual wear.",
      },
      {
        img: "./assets/image/men/jacket/jacket--03.png",
        name: "Winter Jacket",
        price: 2499,
        color: "Grey",
        material: "Winter Fleece",
        desc: "Warm winter jacket with insulation.",
      },
      {
        img: "./assets/image/men/jacket/jacket--04.png",
        name: "Winter Jacket",
        price: 2399,
        color: "Blue",
        material: "Winter Fleece",
        desc: "Heavy-duty winter jacket.",
      },
      {
        img: "./assets/image/men/jacket/jacket--05.png",
        name: "Winter Jacket",
        price: 2199,
        color: "Black",
        material: "Polyester Shell",
        desc: "Lightweight yet warm winter jacket.",
      },
      {
        img: "./assets/image/men/jacket/jacket--06.png",
        name: "Winter Jacket",
        price: 2299,
        color: "Olive",
        material: "Thermal Lining",
        desc: "Winter jacket for extreme cold.",
      },
      {
        img: "./assets/image/men/jacket/jacket--07.png",
        name: "Winter Jacket",
        price: 2499,
        color: "Brown",
        material: "Fleece 400 GSM",
        desc: "Stylish brown winter jacket.",
      },
      {
        img: "./assets/image/men/jacket/jacket--08.png",
        name: "Winter Jacket",
        price: 1999,
        color: "Grey",
        material: "Puffer Material",
        desc: "Lightweight winter puffer jacket.",
      },
      {
        img: "./assets/image/men/jacket/jacket--09.png",
        name: "Winter Jacket",
        price: 2599,
        color: "Navy",
        material: "Soft Shell",
        desc: "Premium soft shell winter jacket.",
      },
      {
        img: "./assets/image/men/jacket/jacket--10.png",
        name: "Winter Jacket",
        price: 2299,
        color: "Black",
        material: "Insulated",
        desc: "Warm jacket perfect for cold weather.",
      },
    ],

    tshirt: [
      {
        img: "./assets/image/men/t-shirts/t-shirt-11.png",
        name: "T-shirt",
        price: 599,
        color: "Black",
        material: "Bio-Wash Cotton 180 GSM",
        desc: "Soft and breathable cotton t-shirt.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-12.png",
        name: "T-shirt",
        price: 499,
        color: "White",
        material: "Cotton 160 GSM",
        desc: "Regular fit classic tee.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-13.png",
        name: "T-shirt",
        price: 550,
        color: "Grey",
        material: "210 GSM Premium Cotton",
        desc: "High-quality premium T-shirt.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-14.png",
        name: "T-shirt",
        price: 520,
        color: "Yellow",
        material: "Cotton",
        desc: "Comfortable everyday wear.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-15.png",
        name: "T-shirt",
        price: 650,
        color: "Green",
        material: "Heavy 250 GSM",
        desc: "Oversized heavy-weight t-shirt.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-16.png",
        name: "T-shirt",
        price: 499,
        color: "Blue",
        material: "Cotton",
        desc: "Classic casual tee.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-17.png",
        name: "T-shirt",
        price: 599,
        color: "White",
        material: "180 GSM Cotton",
        desc: "Soft premium cotton.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-18.png",
        name: "T-shirt",
        price: 579,
        color: "Black",
        material: "Cotton",
        desc: "Comfortable & long-lasting fabric.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-19.png",
        name: "T-shirt",
        price: 560,
        color: "Brown",
        material: "190 GSM",
        desc: "Trendy color with durable stitching.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-20.png",
        name: "T-shirt",
        price: 570,
        color: "Grey",
        material: "Cotton Blend",
        desc: "Modern and stylish daily wear.",
      },

      {
        img: "./assets/image/men/t-shirts/t-shirt-01.png",
        name: "White T-shirt",
        price: 520,
        color: "White",
        material: "Bio-Wash Cotton",
        desc: "Pure white premium tee.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-02.png",
        name: "Red T-shirt",
        price: 530,
        color: "Red",
        material: "Cotton",
        desc: "Bold red classic tee.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-03.png",
        name: "T-shirt",
        price: 499,
        color: "Blue",
        material: "Cotton",
        desc: "Soft, breathable everyday tee.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-04.png",
        name: "T-shirt",
        price: 520,
        color: "Black",
        material: "Cotton",
        desc: "Comfortable regular-fit t-shirt.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-05.png",
        name: "T-shirt",
        price: 550,
        color: "Green",
        material: "190 GSM",
        desc: "Stylish and durable.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-06.png",
        name: "T-shirt",
        price: 540,
        color: "Grey",
        material: "Cotton Blend",
        desc: "Premium comfort wear.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-07.png",
        name: "T-shirt",
        price: 530,
        color: "Blue",
        material: "Cotton",
        desc: "Soft & smooth fabric.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-08.png",
        name: "T-shirt",
        price: 560,
        color: "Black",
        material: "Cotton",
        desc: "Classic black tee.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-09.png",
        name: "T-shirt",
        price: 540,
        color: "Cream",
        material: "Cotton",
        desc: "Soft pastel shade for casual wear.",
      },
      {
        img: "./assets/image/men/t-shirts/t-shirt-10.png",
        name: "T-shirt",
        price: 510,
        color: "Brown",
        material: "Cotton",
        desc: "Earth-tone smooth fabric.",
      },
    ],

    jeans: [
      {
        img: "./assets/image/men/jeans/jeans-01.png",
        name: "Blue Jeans",
        price: 1199,
        color: "Blue",
        material: "Stretch Denim",
        desc: "Slim fit stretchable denim.",
      },
      {
        img: "./assets/image/men/jeans/jeans-02.png",
        name: "Slim Fit Jeans",
        price: 1299,
        color: "Navy",
        material: "Denim",
        desc: "Smart-fit premium denim.",
      },
      {
        img: "./assets/image/men/jeans/jeans-03.png",
        name: "Slim Fit Jeans",
        price: 1499,
        color: "Light Blue",
        material: "Washed Denim",
        desc: "Washed denim for a modern look.",
      },
      {
        img: "./assets/image/men/jeans/jeans-04.png",
        name: "Slim Fit Jeans",
        price: 1399,
        color: "Blue",
        material: "Soft Denim",
        desc: "Stylish faded jeans.",
      },
      {
        img: "./assets/image/men/jeans/jeans-05.png",
        name: "Slim Fit Jeans",
        price: 1199,
        color: "Black",
        material: "Denim",
        desc: "Casual black jeans.",
      },
      {
        img: "./assets/image/men/jeans/jeans-06.png",
        name: "Slim Fit Jeans",
        price: 1299,
        color: "Grey",
        material: "Stretch Denim",
        desc: "Flexible and durable denim.",
      },
      {
        img: "./assets/image/men/jeans/jeans-07.png",
        name: "Slim Fit Jeans",
        price: 1499,
        color: "Blue",
        material: "Denim 12oz",
        desc: "Strong and durable jeans.",
      },
      {
        img: "./assets/image/men/jeans/jeans-08.png",
        name: "Slim Fit Jeans",
        price: 1399,
        color: "Black",
        material: "Soft Denim",
        desc: "Smooth texture quality.",
      },
      {
        img: "./assets/image/men/jeans/jeans-09.png",
        name: "Slim Fit Jeans",
        price: 1499,
        color: "Navy",
        material: "Stretchable Denim",
        desc: "Premium stretch denim.",
      },
      {
        img: "./assets/image/men/jeans/jeans-10.png",
        name: "Slim Fit Jeans",
        price: 1599,
        color: "Blue",
        material: "Heavy Denim",
        desc: "Premium classic denim.",
      },
    ],

    hoodie: [
      {
        img: "./assets/image/men/hoodies/hoodie-01.png",
        name: "Hoodie",
        price: 899,
        color: "Red",
        material: "Fleece 280 GSM",
        desc: "Warm and stylish hoodie.",
      },
      {
        img: "./assets/image/men/hoodies/hoodie-02.png",
        name: "Hoodie",
        price: 999,
        color: "Golden",
        material: "Fleece",
        desc: "Comfortable premium hoodie.",
      },
      {
        img: "./assets/image/men/hoodies/hoodie-03.png",
        name: "Hoodie",
        price: 999,
        color: "Golden",
        material: "Fleece",
        desc: "Premium design hoodie.",
      },
      {
        img: "./assets/image/men/hoodies/hoodie-04.png",
        name: "Hoodie",
        price: 1099,
        color: "Golden",
        material: "Fleece",
        desc: "Soft inner lining.",
      },
      {
        img: "./assets/image/men/hoodies/hoodie-05.png",
        name: "Hoodie",
        price: 999,
        color: "Golden",
        material: "Fleece",
        desc: "Cozy winter wear.",
      },
      {
        img: "./assets/image/men/hoodies/hoodie-06.png",
        name: "Hoodie",
        price: 950,
        color: "Golden",
        material: "Fleece",
        desc: "Warm hoodie.",
      },
      {
        img: "./assets/image/men/hoodies/hoodie-07.png",
        name: "Hoodie",
        price: 970,
        color: "Golden",
        material: "Fleece",
        desc: "Soft and warm hoodie.",
      },
      {
        img: "./assets/image/men/hoodies/hoodie-08.png",
        name: "Hoodie",
        price: 999,
        color: "Golden",
        material: "Fleece",
        desc: "Everyday winter hoodie.",
      },
      {
        img: "./assets/image/men/hoodies/hoodie-09.png",
        name: "Hoodie",
        price: 1050,
        color: "Golden",
        material: "Fleece",
        desc: "Best for cold weather.",
      },
      {
        img: "./assets/image/men/hoodies/hoodie.png",
        name: "Hoodie",
        price: 1090,
        color: "Golden",
        material: "Fleece",
        desc: "Stylish winter wear.",
      },
    ],

    shoe: [
      {
        img: "./assets/image/men/shoes/shoe-01.png",
        name: "Sneakers",
        price: 1599,
        color: "Red",
        material: "Mesh + Rubber",
        desc: "Lightweight everyday sneakers.",
      },
      {
        img: "./assets/image/men/shoes/shoe-02.png",
        name: "Sneakers",
        price: 1699,
        color: "Gold",
        material: "Synthetic",
        desc: "Trendy stylish sneakers.",
      },
      {
        img: "./assets/image/men/shoes/shoe-03.png",
        name: "Sneakers",
        price: 1799,
        color: "Gold",
        material: "Synthetic Leather",
        desc: "Premium golden sneakers.",
      },
      {
        img: "./assets/image/men/shoes/shoe-04.png",
        name: "Sneakers",
        price: 1499,
        color: "Gold",
        material: "Foam Comfort",
        desc: "Comfortable daily wear.",
      },
      {
        img: "./assets/image/men/shoes/shoe-05.png",
        name: "Sneakers",
        price: 1599,
        color: "Gold",
        material: "Mesh",
        desc: "Stylish lightweight shoes.",
      },
      {
        img: "./assets/image/men/shoes/shoe-06.png",
        name: "Sneakers",
        price: 1499,
        color: "Gold",
        material: "Mesh",
        desc: "Breathable soft sneakers.",
      },
      {
        img: "./assets/image/men/shoes/shoe-07.png",
        name: "Sneakers",
        price: 1790,
        color: "Gold",
        material: "Soft Touch",
        desc: "Premium comfort shoes.",
      },
      {
        img: "./assets/image/men/shoes/shoe-08.png",
        name: "Sneakers",
        price: 1690,
        color: "Gold",
        material: "Synthetic Blend",
        desc: "Casual golden shoes.",
      },
      {
        img: "./assets/image/men/shoes/shoe-09.png",
        name: "Sneakers",
        price: 1599,
        color: "Gold",
        material: "Rubber Sole",
        desc: "Durable and stylish.",
      },
      {
        img: "./assets/image/men/shoes/shoe-10.png",
        name: "Sneakers",
        price: 1799,
        color: "Gold",
        material: "Foam Sole",
        desc: "Super soft comfort wear.",
      },
    ],
  },

  women: {
    handbag: [
      {
        img: "./assets/image/women/bags/bag--01.png",
        name: "Leather Handbag",
        price: 1299,
        color: "Brown",
        material: "PU Leather",
        desc: "Elegant premium handbag.",
      },
      {
        img: "./assets/image/women/bags/bag--02.png",
        name: "Sling Bag",
        price: 899,
        color: "Black",
        material: "Soft Leather",
        desc: "Stylish sling bag for women.",
      },
      {
        img: "./assets/image/women/bags/bag-03.png",
        name: "Sling Bag",
        price: 899,
        color: "Cream",
        material: "Leather",
        desc: "Trendy cream sling bag.",
      },
      {
        img: "./assets/image/women/bags/bag-04.png",
        name: "Sling Bag",
        price: 950,
        color: "White",
        material: "Soft Material",
        desc: "Elegant everyday sling.",
      },
      {
        img: "./assets/image/women/bags/bag-05.png",
        name: "Sling Bag",
        price: 999,
        color: "Brown",
        material: "Leather",
        desc: "Classic leather sling.",
      },
      {
        img: "./assets/image/women/bags/bag-06.png",
        name: "Sling Bag",
        price: 899,
        color: "Black",
        material: "PU Leather",
        desc: "Perfect daily-use sling.",
      },
      {
        img: "./assets/image/women/bags/bag-07.png",
        name: "Sling Bag",
        price: 999,
        color: "Brown",
        material: "Pure Leather",
        desc: "Premium handcrafted sling.",
      },
      {
        img: "./assets/image/women/bags/bag-08.png",
        name: "Sling Bag",
        price: 1050,
        color: "White",
        material: "Soft PU",
        desc: "Modern stylish sling bag.",
      },
    ],

    heels: [
      {
        img: "./assets/image/women/heels/heel-01.png",
        name: "Red Heels",
        price: 1599,
        color: "Red",
        material: "Synthetic",
        desc: "Stylish red heels for parties.",
      },
      {
        img: "./assets/image/women/heels/heel-02.png",
        name: "Golden Heels",
        price: 1699,
        color: "Gold",
        material: "Shimmer Material",
        desc: "Premium golden heels.",
      },
      {
        img: "./assets/image/women/heels/heel-03.png",
        name: "Golden Heels",
        price: 1499,
        color: "Gold",
        material: "Synthetic",
        desc: "Elegant golden footwear.",
      },
      {
        img: "./assets/image/women/heels/heel-04.png",
        name: "Golden Heels",
        price: 1799,
        color: "Gold",
        material: "Shining Fabric",
        desc: "Perfect for festive wear.",
      },
      {
        img: "./assets/image/women/heels/heel-05.png",
        name: "Golden Heels",
        price: 1599,
        color: "Gold",
        material: "Soft Fabric",
        desc: "Trendy comfortable heels.",
      },
      {
        img: "./assets/image/women/heels/heel-06.png",
        name: "Golden Heels",
        price: 1690,
        color: "Gold",
        material: "Synthetic",
        desc: "Durable and stylish.",
      },
      {
        img: "./assets/image/women/heels/heel-07.png",
        name: "Golden Heels",
        price: 1650,
        color: "Gold",
        material: "Synthetic",
        desc: "Comfortable stylish heels.",
      },
      {
        img: "./assets/image/women/heels/heel-08.png",
        name: "Golden Heels",
        price: 1790,
        color: "Gold",
        material: "Shiny Material",
        desc: "Party wear heels.",
      },
      {
        img: "./assets/image/women/heels/heel-09.png",
        name: "Golden Heels",
        price: 1499,
        color: "Gold",
        material: "Soft",
        desc: "Lightweight and trendy.",
      },
      {
        img: "./assets/image/women/heels/heel-10.png",
        name: "Golden Heels",
        price: 1899,
        color: "Gold",
        material: "Metallic Fabric",
        desc: "Premium designer heels.",
      },
    ],

    kurti: [
      {
        img: "./assets/image/women/kurties/kurti-01.png",
        name: "Kurti",
        price: 899,
        color: "Red",
        material: "Cotton",
        desc: "Soft and traditional kurti.",
      },
      {
        img: "./assets/image/women/kurties/kurti-02.png",
        name: "Kurti",
        price: 999,
        color: "Gold",
        material: "Rayon",
        desc: "Modern festive kurti.",
      },
      {
        img: "./assets/image/women/kurties/kurti-03.png",
        name: "Kurti",
        price: 1099,
        color: "Pink",
        material: "Cotton",
        desc: "Comfortable daily kurti.",
      },
      {
        img: "./assets/image/women/kurties/kurti-04.png",
        name: "Kurti",
        price: 999,
        color: "Blue",
        material: "Rayon",
        desc: "Stylish party wear.",
      },
      {
        img: "./assets/image/women/kurties/kurti-05.png",
        name: "Kurti",
        price: 1199,
        color: "Green",
        material: "Soft Cotton",
        desc: "Trendy ethnic kurti.",
      },
      {
        img: "./assets/image/women/kurties/kurti-06.png",
        name: "Kurti",
        price: 1050,
        color: "Grey",
        material: "Rayon",
        desc: "Lightweight and comfortable.",
      },
      {
        img: "./assets/image/women/kurties/kurti-07.png",
        name: "Kurti",
        price: 1150,
        color: "Yellow",
        material: "Cotton",
        desc: "Summer-friendly kurti.",
      },
      {
        img: "./assets/image/women/kurties/kurti-08.png",
        name: "Kurti",
        price: 999,
        color: "Green",
        material: "Cotton",
        desc: "Elegant ethnic wear.",
      },
      {
        img: "./assets/image/women/kurties/kurti-09.png",
        name: "Kurti",
        price: 1099,
        color: "Brown",
        material: "Rayon",
        desc: "Soft and breathable.",
      },
      {
        img: "./assets/image/women/kurties/kurti-10.png",
        name: "Kurti",
        price: 990,
        color: "Blue",
        material: "Cotton Blend",
        desc: "Light and stylish kurti.",
      },
    ],

    hoodie: [
      {
        img: "./assets/image/women/hoodies/hoodie-01.png",
        name: "Hoodie",
        price: 899,
        color: "Red",
        material: "Fleece",
        desc: "Warm and comfortable hoodie.",
      },
      {
        img: "./assets/image/women/hoodies/hoodie-02.png",
        name: "Hoodie",
        price: 999,
        color: "Golden",
        material: "Fleece",
        desc: "Premium fleece hoodie.",
      },
      {
        img: "./assets/image/women/hoodies/hoodie-03.png",
        name: "Hoodie",
        price: 950,
        color: "Golden",
        material: "Soft Fleece",
        desc: "Cozy fashionable hoodie.",
      },
      {
        img: "./assets/image/women/hoodies/hoodie-04.png",
        name: "Hoodie",
        price: 999,
        color: "Golden",
        material: "Fleece",
        desc: "Classic warm hoodie.",
      },
      {
        img: "./assets/image/women/hoodies/hoodie-05.png",
        name: "Hoodie",
        price: 1090,
        color: "Golden",
        material: "Fleece",
        desc: "Best winter protection.",
      },
      {
        img: "./assets/image/women/hoodies/hoodie-06.png",
        name: "Hoodie",
        price: 1000,
        color: "Golden",
        material: "Fleece",
        desc: "Winter fashion hoodie.",
      },
      {
        img: "./assets/image/women/hoodies/hoodie-07.png",
        name: "Hoodie",
        price: 1050,
        color: "Golden",
        material: "Fleece",
        desc: "Soft & premium hoodie.",
      },
      {
        img: "./assets/image/women/hoodies/hoodie-08.png",
        name: "Hoodie",
        price: 950,
        color: "Golden",
        material: "Soft Fleece",
        desc: "Daily wear warm hoodie.",
      },
      {
        img: "./assets/image/women/hoodies/hoodie-09.png",
        name: "Hoodie",
        price: 999,
        color: "Golden",
        material: "Fleece",
        desc: "Trendy hoodie.",
      },
      {
        img: "./assets/image/women/hoodies/hoodie-10.png",
        name: "Hoodie",
        price: 1099,
        color: "Golden",
        material: "Fleece",
        desc: "Classic premium hoodie.",
      },
    ],

    cargo: [
      {
        img: "./assets/image/women/cargos/cargo-01.png",
        name: "Cargo Pants",
        price: 1299,
        color: "Black",
        material: "Cotton",
        desc: "Trendy cargo pants for women.",
      },
      {
        img: "./assets/image/women/cargos/cargo-02.png",
        name: "Cargo Pants",
        price: 1399,
        color: "Brown",
        material: "Soft Cotton",
        desc: "Stylish brown cargo.",
      },
      {
        img: "./assets/image/women/cargos/cargo-03.png",
        name: "Cargo Pants",
        price: 1290,
        color: "Olive",
        material: "Cotton",
        desc: "Comfortable olive cargo.",
      },
      {
        img: "./assets/image/women/cargos/cargo-04.png",
        name: "Cargo Pants",
        price: 1390,
        color: "Black",
        material: "Cotton",
        desc: "Modern slim-fit cargo.",
      },
      {
        img: "./assets/image/women/cargos/cargo-05.png",
        name: "Cargo Pants",
        price: 1499,
        color: "Grey",
        material: "Soft Fabric",
        desc: "Trendy grey cargo.",
      },
      {
        img: "./assets/image/women/cargos/cargo-06.png",
        name: "Cargo Pants",
        price: 1299,
        color: "Green",
        material: "Cotton",
        desc: "Stylish evergreen cargo.",
      },
      {
        img: "./assets/image/women/cargos/cargo-07.png",
        name: "Cargo Pants",
        price: 1499,
        color: "Cream",
        material: "Cotton",
        desc: "Trendy cream cargo pants.",
      },
      {
        img: "./assets/image/women/cargos/cargo-08.png",
        name: "Cargo Pants",
        price: 1390,
        color: "Olive",
        material: "Cotton",
        desc: "Comfort fit olive cargo.",
      },
      {
        img: "./assets/image/women/cargos/cargo-09.png",
        name: "Cargo Pants",
        price: 1490,
        color: "Blue",
        material: "Denim Cargo",
        desc: "Modern denim cargo pants.",
      },
      {
        img: "./assets/image/women/cargos/cargo-10.png",
        name: "Cargo Pants",
        price: 1590,
        color: "Black",
        material: "Soft Cotton",
        desc: "Premium cargo pants.",
      },
    ],
  },
};

// GET ELEMENTS
const productModal = document.getElementById("productModal");
const closeBtn = productModal.querySelector(".custom-close");

// OPEN MODAL FUNCTION
document.addEventListener("click", (e) => {
  const card = e.target.closest(".product-card");
  if (!card) return;

  const prod = JSON.parse(card.dataset.product);

  document.getElementById("modalImg").src = prod.img;
  document.getElementById("modalTitle").textContent = prod.name;
  document.getElementById("modalGsm").textContent =
    prod.gsm ?? "275 GSM Jersey";
  document.getElementById("modalColor").textContent = prod.color ?? "White";
  document.getElementById("modalPrice").textContent = prod.price
    ? `$${prod.price}`
    : "$35";
  document.getElementById("modalDesc").textContent =
    prod.desc ?? "This is one of our best-selling products.";

  // Show modal
  productModal.classList.add("show");
});

// CLOSE MODAL
closeBtn.addEventListener("click", () => {
  productModal.classList.remove("show");
});

// OPTIONAL: Close when clicking outside modal content
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) {
    productModal.classList.remove("show");
  }
});

//

//
// When switching tabs (MEN <-> WOMEN), clear product list + reset modal
document.querySelectorAll('[data-bs-toggle="tab"]').forEach((tab) => {
  tab.addEventListener("shown.bs.tab", () => {
    // CLEAR PRODUCT LIST
    document.getElementById("product-list").innerHTML = "";
    document.getElementById("product-title").textContent = "";

    // RESET MODAL CONTENT
    document.getElementById("modalImg").src = "";
    document.getElementById("modalTitle").textContent = "";
    document.getElementById("modalGsm").textContent = "";
    document.getElementById("modalColor").textContent = "";
    document.getElementById("modalPrice").textContent = "";
    document.getElementById("modalDesc").textContent = "";

    // FORCE CLOSE THE MODAL if open
    productModal.classList.remove("show");
  });
});

//

// Accordion functionality
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Toggle active class
    item.classList.toggle("active");

    // If you want only one open at a time, uncomment below:
    // accordionItems.forEach(other => {
    //   if(other !== item) other.classList.remove("active");
    // });
  });
});

// for button add to cart and buy now
const addToCartBtn = document.getElementById("addToCartBtn");
const buyNowBtn = document.getElementById("buyNowBtn");

addToCartBtn.addEventListener("click", () => {
    alert(`${document.getElementById("modalTitle").textContent} added to cart!`);
    // Here you can add real cart functionality
});

buyNowBtn.addEventListener("click", () => {
    alert(`Proceed to buy ${document.getElementById("modalTitle").textContent}`);
    // Redirect to checkout page if needed
});



//

// Select menu items
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    const category = item.querySelector("p").textContent.toLowerCase();
    const isMenTab = item.closest("#home-tab-pane") !== null;
    const gender = isMenTab ? "men" : "women";

    const productList = document.getElementById("product-list");
    const productTitle = document.getElementById("product-title");

    productList.innerHTML = ""; // Clear previous items
    productTitle.textContent =
      category.charAt(0).toUpperCase() + category.slice(1);

    const selectedProducts = products[gender][category] || [];

    if (selectedProducts.length === 0) {
      productList.innerHTML = "<p>No products found.</p>";
      return;
    }

    selectedProducts.forEach((prod) => {
      const col = document.createElement("div");

      // Bootstrap grid columns (Bento responsive)
      col.className = "col-6 col-md-4 col-lg-3 p-2";

      col.innerHTML = `
  <div class="card product-card h-150 p-2 shadow-sm rounded-4 overflow-hidden"
       data-product='${JSON.stringify(prod)}'>
      <img src="${
        prod.img
      }" class="card-img-top object-fit-cover" style="height: 250px;">
      <div class="card-body text-center">
        <p class="card-text fw-semibold m-0">${prod.name}</p>
      </div>
  </div>
`;

      document.getElementById("product-list").appendChild(col);
    });
  });
});
