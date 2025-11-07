


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
        { img: "./assets/image/w-heels1.png", name: "Red Heels" },
        { img: "./assets/image/w-heels2.png", name: "Golden Heels" },
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
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "14rem";
        card.innerHTML = `
          <img src="${prod.img}" class="card-img-top" alt="${prod.name}">
          <div class="card-body text-center">
            <p class="card-text">${prod.name}</p>
          </div>
        `;
        productList.appendChild(card);
      });
    });
  });
