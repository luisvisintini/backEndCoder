import ProductManager from "./ProductManager.js";

const env = async () => {
  const productManager = new ProductManager();

  const product1 = {
    title: "Test product",
    description: "Description of test product",
    price: 200,
    code: "SKU1000",
    stock: 10,
  }

  const product2 = {
    title: "Test product",
  }

  const product3 = {
    title: "Test product",
    description: "Description of test product",
    price: 200,
    thumbnail: "No image",
    code: "SKU1000",
    stock: 10,
  }

  const product4 = {
    title: "Test product 2",
    description: "Description of test product 2",
    price: 500,
    thumbnail: "No image",
    code: "SKU2000",
    stock: 8,
  }

  const product5 = {
    title: "Test product 3",
    description: "Description of test product 3",
    price: 1500,
    thumbnail: "No image",
    code: "SKU3000",
    stock: 6,
  }


  /* ======== TESTS ======== */
  await productManager.getProducts(); // []

  await productManager.addProduct(product1) // Required fields
  await productManager.addProduct(product2) // Required fields
  await productManager.addProduct(product3) // OK
  await productManager.addProduct(product4) // OK
  await productManager.addProduct(product5) // OK

  await productManager.getProducts(); // Get all products

  await productManager.addProduct(product5)

  await productManager.getProductById(15); // Not found
  await productManager.getProductById(1);
  await productManager.getProductById(3);
  await productManager.getProductById(25); // Not found

  await productManager.updateProduct(2, "description", "This product was recently updated");
  await productManager.updateProduct(4, "stock", 20);
  await productManager.updateProduct(1, "Price", 1200);

  await productManager.getProductById(2);

  await productManager.deleteProduct(3);
  await productManager.deleteProduct(2);
  await productManager.deleteProduct(1); // Delete all products

  await productManager.addProduct(product4)
  await productManager.addProduct(product5) 

  await productManager.getProductById(3); // Get product by id

  await productManager.getProducts(); // Final list
};

env();

// FOR VIEW IN CONSOLE TYPE IN TERMINAL: node index.js
// Luis Visintini