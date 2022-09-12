class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class ProductDatabase {
    constructor() {
      this.data = [new Product(101, "Default1", 1001), new Product(102, "Default2", 1002)];
    }
  
    addRecord(row) {
      this.data.push(row);
    }
  
    findRecord(id) {
      this.data.find((row) => row.id == id);
    }
  
    removeRecord(id) {
      for (const key in this.data) {
        if (this.data[key].id == id) {
          this.data.splice(key, 1);
          return;
        }
      }
      throw "Record not found to remove";
    }
  
    updateRecord(id, name, price) {
      for (const key in this.data) {
        if (this.data[key].id == id) {
          this.data[key].name = name;
          this.data[key].price = price;
          return
        }
      }
    }
  }