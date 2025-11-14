


  // Sample product data
  const products = {
    men: {
      jacket: [
        { img: "./assets/image/men/jacket/jacket--01.png", name: "Leather Jacket" },
        { img: "./assets/image/men/jacket/jacket--02.png", name: "Denim Jacket" },
        { img: "./assets/image/men/jacket/jacket--03.png", name: "Winter Jacket" },
        { img: "./assets/image/men/jacket/jacket--04.png", name: "Winter Jacket" },
        { img: "./assets/image/men/jacket/jacket--05.png", name: "Winter Jacket" },
        { img: "./assets/image/men/jacket/jacket--06.png", name: "Winter Jacket" },
        { img: "./assets/image/men/jacket/jacket--07.png", name: "Winter Jacket" },
        { img: "./assets/image/men/jacket/jacket--08.png", name: "Winter Jacket" },
        { img: "./assets/image/men/jacket/jacket--09.png", name: "Winter Jacket" },
        { img: "./assets/image/men/jacket/jacket--10.png", name: "Winter Jacket" },
      ],
      tshirt: [
        { img: "./assets/image/men/t-shirts/t-shirt-11.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-12.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-13.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-14.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-15.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-16.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-17.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-18.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-19.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-20.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-01.png", name: "White T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-02.png", name: "red T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-03.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-04.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-05.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-06.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-07.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-08.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-09.png", name: "T-shirt" },
        { img: "./assets/image/men/t-shirts/t-shirt-10.png", name: "T-shirt" },
        
      ],
      jeans: [
        { img: "./assets/image/men/jeans/jeans-01.png", name: "Blue Jeans" },
        { img: "./assets/image/men/jeans/jeans-02.png", name: "Slim Fit Jeans" },
        { img: "./assets/image/men/jeans/jeans-03.png", name: "Slim Fit Jeans" },
        { img: "./assets/image/men/jeans/jeans-04.png", name: "Slim Fit Jeans" },
        { img: "./assets/image/men/jeans/jeans-05.png", name: "Slim Fit Jeans" },
        { img: "./assets/image/men/jeans/jeans-06.png", name: "Slim Fit Jeans" },
        { img: "./assets/image/men/jeans/jeans-07.png", name: "Slim Fit Jeans" },
        { img: "./assets/image/men/jeans/jeans-08.png", name: "Slim Fit Jeans" },
        { img: "./assets/image/men/jeans/jeans-09.png", name: "Slim Fit Jeans" },
        { img: "./assets/image/men/jeans/jeans-10.png", name: "Slim Fit Jeans" },
      ],
      hoodie: [
        { img: "./assets/image/men/hoodies/hoodie-01.png", name: "Red Heels" },
        { img: "./assets/image/men/hoodies/hoodie-02.png", name: "Golden Heels" },
        { img: "./assets/image/men/hoodies/hoodie-03.png", name: "Golden Heels" },
        { img: "./assets/image/men/hoodies/hoodie-04.png", name: "Golden Heels" },
        { img: "./assets/image/men/hoodies/hoodie-05.png", name: "Golden Heels" },
        { img: "./assets/image/men/hoodies/hoodie-06.png", name: "Golden Heels" },
        { img: "./assets/image/men/hoodies/hoodie-07.png", name: "Golden Heels" },
        { img: "./assets/image/men/hoodies/hoodie-08.png", name: "Golden Heels" },
        { img: "./assets/image/men/hoodies/hoodie-09.png", name: "Golden Heels" },
        { img: "./assets/image/men/hoodies/hoodie.png", name: "Golden Heels" },
      ],
      shoe: [
        { img: "./assets/image/men/shoes/shoe-01.png", name: "Red Heels" },
        { img: "./assets/image/men/shoes/shoe-02.png", name: "Golden Heels" },
        { img: "./assets/image/men/shoes/shoe-03.png", name: "Golden Heels" },
        { img: "./assets/image/men/shoes/shoe-04.png", name: "Golden Heels" },
        { img: "./assets/image/men/shoes/shoe-05.png", name: "Golden Heels" },
        { img: "./assets/image/men/shoes/shoe-06.png", name: "Golden Heels" },
        { img: "./assets/image/men/shoes/shoe-07.png", name: "Golden Heels" },
        { img: "./assets/image/men/shoes/shoe-08.png", name: "Golden Heels" },
        { img: "./assets/image/men/shoes/shoe-09.png", name: "Golden Heels" },
        { img: "./assets/image/men/shoes/shoe-10.png", name: "Golden Heels" },
      ],
    },
    women: {
      handbag: [
        { img: "./assets/image/women/bags/bag--01.png", name: "Leather Handbag" },
        { img: "./assets/image/women/bags/bag--02.png", name: "Sling Bag" },
        { img: "./assets/image/women/bags/bag-03.png", name: "Sling Bag" },
        { img: "./assets/image/women/bags/bag-04.png", name: "Sling Bag" },
        { img: "./assets/image/women/bags/bag-05.png", name: "Sling Bag" },
        { img: "./assets/image/women/bags/bag-06.png", name: "Sling Bag" },
        { img: "./assets/image/women/bags/bag-07.png", name: "Sling Bag" },
        { img: "./assets/image/women/bags/bag-08.png", name: "Sling Bag" },
      ],
      heels: [
        { img: "./assets/image/women/heels/heel-01.png", name: "Red Heels" },
        { img: "./assets/image/women/heels/heel-02.png", name: "Golden Heels" },
        { img: "./assets/image/women/heels/heel-03.png", name: "Golden Heels" },
        { img: "./assets/image/women/heels/heel-04.png", name: "Golden Heels" },
        { img: "./assets/image/women/heels/heel-05.png", name: "Golden Heels" },
        { img: "./assets/image/women/heels/heel-06.png", name: "Golden Heels" },
        { img: "./assets/image/women/heels/heel-07.png", name: "Golden Heels" },
        { img: "./assets/image/women/heels/heel-08.png", name: "Golden Heels" },
        { img: "./assets/image/women/heels/heel-09.png", name: "Golden Heels" },
        { img: "./assets/image/women/heels/heel-10.png", name: "Golden Heels" },
      ],
      kurti: [
        { img: "./assets/image/women/kurties/kurti-01.png", name: "Red Heels" },
        { img: "./assets/image/women/kurties/kurti-02.png", name: "Golden Heels" },
        { img: "./assets/image/women/kurties/kurti-03.png", name: "Golden Heels" },
        { img: "./assets/image/women/kurties/kurti-04.png", name: "Golden Heels" },
        { img: "./assets/image/women/kurties/kurti-05.png", name: "Golden Heels" },
        { img: "./assets/image/women/kurties/kurti-06.png", name: "Golden Heels" },
        { img: "./assets/image/women/kurties/kurti-07.png", name: "Golden Heels" },
        { img: "./assets/image/women/kurties/kurti-08.png", name: "Golden Heels" },
        { img: "./assets/image/women/kurties/kurti-09.png", name: "Golden Heels" },
        { img: "./assets/image/women/kurties/kurti-10.png", name: "Golden Heels" },
      ],
      hoodie: [
        { img: "./assets/image/women/hoodies/hoodie-01.png", name: "Red Heels" },
        { img: "./assets/image/women/hoodies/hoodie-02.png", name: "Golden Heels" },
        { img: "./assets/image/women/hoodies/hoodie-03.png", name: "Golden Heels" },
        { img: "./assets/image/women/hoodies/hoodie-04.png", name: "Golden Heels" },
        { img: "./assets/image/women/hoodies/hoodie-05.png", name: "Golden Heels" },
        { img: "./assets/image/women/hoodies/hoodie-06.png", name: "Golden Heels" },
        { img: "./assets/image/women/hoodies/hoodie-07.png", name: "Golden Heels" },
        { img: "./assets/image/women/hoodies/hoodie-08.png", name: "Golden Heels" },
        { img: "./assets/image/women/hoodies/hoodie-09.png", name: "Golden Heels" },
        { img: "./assets/image/women/hoodies/hoodie-10.png", name: "Golden Heels" },
      ],
      cargo: [
        { img: "./assets/image/women/cargos/cargo-01.png", name: "Red Heels" },
        { img: "./assets/image/women/cargos/cargo-02.png", name: "Golden Heels" },
        { img: "./assets/image/women/cargos/cargo-03.png", name: "Golden Heels" },
        { img: "./assets/image/women/cargos/cargo-04.png", name: "Golden Heels" },
        { img: "./assets/image/women/cargos/cargo-05.png", name: "Golden Heels" },
        { img: "./assets/image/women/cargos/cargo-06.png", name: "Golden Heels" },
        { img: "./assets/image/women/cargos/cargo-07.png", name: "Golden Heels" },
        { img: "./assets/image/women/cargos/cargo-08.png", name: "Golden Heels" },
        { img: "./assets/image/women/cargos/cargo-09.png", name: "Golden Heels" },
        { img: "./assets/image/women/cargos/cargo-10.png", name: "Golden Heels" },
      ],
    },
  };

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
    <div class="card h-150 p-2 shadow-sm rounded-4 overflow-hidden">
      <img src="${prod.img}" 
           class="card-img-top object-fit-cover" 
           style="height: 250px;" 
           alt="${prod.name}">
      <div class="card-body text-center">
        <p class="card-text fw-semibold m-0">${prod.name}</p>
      </div>
    </div>
  `;

  document.getElementById("product-list").appendChild(col);
});

    });
  });
