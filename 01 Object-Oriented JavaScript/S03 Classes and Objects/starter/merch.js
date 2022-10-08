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

class Merch {
  #name;
  #quantity;

  constructor(nameArg, skuArg, productionDateArg, quantityArg, imageURLArg) {
    this.#name = nameArg;
    this.sku = skuArg;
    this.productionDate = productionDateArg;
    this.#quantity = quantityArg;
    this.imageURL = imageURLArg;
  }

  get getName() {
    return this.#name;
  }

  set setName(_name) {
    if (_name !== "") this.#name = _name;
    else console.log("Name can't be empty!");
  }

  set setQuantity(_qty) {
    if (typeof _qty === "number" && _qty >= 0) this.#quantity = _qty;
    else console.log("Error in setting quantity!");
  }

  get getQuantity() {
    return this.#quantity;
  }

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
