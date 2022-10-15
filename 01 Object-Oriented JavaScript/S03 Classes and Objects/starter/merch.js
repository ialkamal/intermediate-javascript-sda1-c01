//Factory Function
function winterSport(nameArg, descriptionArg, rulesArg) {
  return {
    //properties
    name: nameArg,
    description: descriptionArg,
    rules: rulesArg,

    //methods
    addRule: function (rule) {
      this.rules.push(rule);
    },
    removeRule: function () {
      this.rules.pop();
    },
  };
}

const iceHockey = winterSport(
  "Ice Hockey",
  "Players striking a puck with at stick",
  ["There should be a large field with two goals"]
);

//Module Design Pattern
function winterSport1(nameArg, descriptionArg, rulesArg) {
  //private
  let name = nameArg;

  return {
    //properties
    description: descriptionArg,
    rules: rulesArg,

    //methods
    addRule: function (rule) {
      this.rules.push(rule);
    },
    removeRule: function () {
      this.rules.pop();
    },

    //
    getName: function () {
      return name;
    },
    setName: function (nameArg) {
      name = nameArg;
    },
  };
}

//Revealing Module Design Pattern
function winterSport2(nameArg, descriptionArg, rulesArg) {
  //private variables
  let name = nameArg;

  //private methods
  let addRule = function (rule) {
    this.rules.push(rule);
  };
  let removeRule = function () {
    this.rules.pop();
  };

  return {
    //properties
    description: descriptionArg,
    rules: rulesArg,

    //Methods
    addRule,
    removeRule,
    getName: function () {
      return name;
    },
    setName: function (nameArg) {
      name = nameArg;
    },
  };
}

//-------------

const products = [];

class Merch {
  #name;
  #quantity;

  //Default Values

  // constructor(nameArg, skuArg, productionDateArg, imageURLArg ="Default link", quantityArg=100) {
  //   this.#name = nameArg;
  //   this.sku = skuArg;
  //   this.productionDate = productionDateArg;
  //   this.#quantity = quantityArg;
  //   this.imageURL = imageURLArg;
  // }

  // constructor({nameArg, skuArg, productionDateArg, imageURLArg ="Default link", quantityArg=100}) {
  //   this.#name = nameArg;
  //   this.sku = skuArg;
  //   this.productionDate = productionDateArg;
  //   this.#quantity = quantityArg;
  //   this.imageURL = imageURLArg;
  // }

  //Constructor

  constructor(nameArg, skuArg, productionDateArg, quantityArg, imageURLArg) {
    this.#name = nameArg;
    this.sku = skuArg;
    this.productionDate = productionDateArg;
    this.#quantity = quantityArg;
    this.imageURL = imageURLArg;
  }

  //name setters and getters
  set name(_name) {
    if (_name !== "") this.#name = _name;
    else console.log("Name can't be empty!");
  }

  get name() {
    return this.#name;
  }

  //quantity setters and getters
  set quantity(_qty) {
    if (typeof _qty === "number" && _qty >= 0) this.#quantity = _qty;
    else console.log("Error in setting quantity!");
  }

  get quantity() {
    return this.#quantity;
  }

  //Methods

  increaseQty(value) {
    if (typeof value === "number") this.#quantity += value;
    else console.log("Can't increase quantity.");
  }

  decreaseQty(value) {
    if (typeof value === "number" && this.#quantity >= value)
      this.#quantity -= value;
    else console.log("Can't decrease quantity.");
  }
}

const toy = new Merch("Panda", 1234, 2029, 100, "");

class Toy extends Merch {
  constructor(
    nameArg,
    skuArg,
    productionDateArg,
    quantityArg,
    imageURLArg,
    descriptionArg,
    widthArg,
    heightArg,
    depthArg
  ) {
    super(nameArg, skuArg, productionDateArg, quantityArg, imageURLArg);
    this.description = descriptionArg;
    this.width = widthArg;
    this.height = heightArg;
    this.depth = depthArg;
  }

  static volume(obj) {
    return obj.width * obj.height * obj.depth;
  }

  calculateShipping() {
    return Toy.volume(this) * 100;
  }

  generateSound() {
    return "Hi, I'm a nice Toy!";
  }
}

class Bear extends Toy {
  generateSound() {
    return "I'm a cute little bear!";
  }
}

const pandaBear = new Bear(
  "Big Panda",
  1,
  2029,
  100,
  "./images/panda.jpg",
  "This is a lovely panda bear first introduced in the 2022 Beijing Winter Olympics",
  10,
  25,
  15
);

products.push(pandaBear);

const seaBear = new Bear(
  "Sea Bear",
  2,
  2028,
  50,
  "./images/bear.jpg",
  "This is a lovely sea bear first introduced in the 2010 Vancouver Winter Olympics",
  12,
  17,
  10
);

products.push(seaBear);

//Class definiton using Constructor Functions

function MerchOld(
  nameArg,
  skuArg,
  productionDateArg,
  quantityArg,
  imageURLArg
) {
  this.storedName = nameArg;
  this.sku = skuArg;
  this.productionDate = productionDateArg;
  this.quantity = quantityArg;
  this.imageURL = imageURLArg;

  Object.defineProperties(MerchOld.prototype, {
    name: {
      configurable: true,
      get: function () {
        return this.storedName;
      },
      set: function (_name) {
        if (_name !== "") this.storedName = _name;
        else console.log("Name can't be empty!");
      },
    },
  });
}

MerchOld.prototype.increaseQty = function (value) {
  if (typeof value === "number") this.quantity += value;
  else console.log("Can't increase quantity.");
};

MerchOld.prototype.decreaseQty = function (value) {
  if (typeof value === "number" && this.quantity >= value)
    this.quantity -= value;
  else console.log("Can't decrease quantity.");
};

function Clothing(
  nameArg,
  skuArg,
  productionDateArg,
  quantityArg,
  imageURLArg,
  sizeArg,
  colorArg,
  descriptionArg
) {
  MerchOld.call(
    this,
    nameArg,
    skuArg,
    productionDateArg,
    quantityArg,
    imageURLArg
  );
  this.size = sizeArg;
  this.color = colorArg;
  this.description = descriptionArg;
}

Clothing.prototype = MerchOld.prototype;

Clothing.prototype.getBestColor = function () {
  return ["Red", "Blue", "Green"][Math.floor(Math.random() * 3)];
};

const gloves = new Clothing(
  "Red Gloves",
  3,
  2021,
  20,
  "./images/gloves.jpg",
  ["S", "M", "L"],
  ["Red", "Blue", "Green"],
  "Warm fuzzy gloves"
);
products.push(gloves);

const tshirt = new Clothing(
  "T Shirt",
  4,
  2025,
  55,
  "./images/tshirt.jpg",
  ["S", "M", "L"],
  ["Red", "Blue", "Green"],
  "Excellent cotton"
);
products.push(tshirt);

const shirt = new Clothing(
  "Shirt",
  5,
  2028,
  10,
  "./images/shirt.jpg",
  ["S", "M", "L"],
  ["Red", "Blue", "Green"],
  "Very Fuzzy Shirt"
);
products.push(shirt);

const hat = new Clothing(
  "Hat",
  5,
  2020,
  105,
  "./images/hat.jpg",
  ["S", "M", "L"],
  ["Red", "White", "Green"],
  "Winter hat that is very warm"
);
products.push(hat);

const merch_listing = document.getElementById("merch");

products.forEach((product) => {
  const node = document.createElement("div");
  node.className = "listing";
  node.style.width = "300px";
  node.style.backgroundColor = "white";
  const img = document.createElement("img");
  img.src = product.imageURL;
  img.style.width = "200px";
  const ul = document.createElement("ul");
  if (product instanceof Merch) {
    ul.innerHTML = `<li>Name: ${product.name}</li><li>SKU: ${product.sku}</li><li>Description: ${product.description}</li><li>Date: ${product.productionDate}</li><li>Quantity: ${product.quantity}</li>`;
  } else if (product instanceof MerchOld) {
    ul.innerHTML = `<li>Name: ${product.name}</li><li>SKU: ${
      product.sku
    }</li><li>Description: ${product.description}</li><li>Date: ${
      product.productionDate
    }</li><li>Quantity: ${
      product.quantity
    }</li><li>My Fav Color: ${product.getBestColor()}</li>`;
  }

  node.appendChild(img);
  node.appendChild(ul);
  merch_listing.appendChild(node);
});
