class VendingMachine{
    constructor(){
        this.maintenance = false;
    }
}

/* List of items available in our vending machine */
let opt = [
  {productName: "Coke", productPrice: 2.55, productDesc: "A delightful beverage to fease the mood.", productCode: "a100", category: "beverage"},
  {productName: "pepsi", productPrice: 1.25, productDesc: "A delightful beverage to fease the mood.", productCode: "a101", category: "beverage"},
  {productName: "nestea", productPrice: 1.25, productDesc: "A delightful beverage to fease the mood.", productCode: "a102", category: "beverage"},
  {productName: "sprite", productPrice: 1.25, productDesc: "A delightful beverage to fease the mood.", productCode: "a103", category: "beverage"},
  {productName: "gingerale", productPrice: 1.25, productDesc: "A delightful beverage to fease the mood.", productCode: "a104", category: "beverage"},
  {productName: "lays", productPrice: 2.50, productDesc: "Enjoy the delicious taste of these chips.", productCode: "a105", category: "chips"},
  {productName: "doritos", productPrice: 1.25, productDesc: "Enjoy the delicious taste of these chips.", productCode: "a106", category: "chips"},
  {productName: "reese", productPrice: 3.15, productDesc: "Feast your mouth on this.", productCode: "a107", category: "chocolate"},
  {productName: "snickers", productPrice: 3.15, productDesc: "Your not yourself when your hungry.", productCode: "a108", category: "chocolate"},
  {productName: "jellybeans", productPrice: 2.85, productDesc: "Cavities await!", productCode: "a109", category: "candy"},
  {productName: "candystick", productPrice: 1.00, productDesc: "Cavities await!", productCode: "a110", category: "candy"},
  {productName: "cottoncandy", productPrice: 1.00, productDesc: "Cavities await!", productCode: "a111", category: "candy"},
];


VendingMachine.prototype.makePurchase = function(code,price){
    /* Checks if the machine is under maintenance before allowing purchases */
    if(this.maintenance){
        return true;
    } else{
      /* Purchasing Process */
      var val = opt.find(item => {
          if(item.productCode.includes(code)){
            if(item.productCode == code && item.productPrice == price){ 
                console.log(`You made a purchase of ${item.productName}`);
            }
            else{
                console.log("Invalid Code");
            }
          }
      });
    }
  }

/* Puts the machine in maintenance mode */
VendingMachine.prototype.outOfOrder = function(msg){
    if(this.maintenance){
        console.log(``);
        msg = `This vending machine is currently down for maintenance`;
        console.log(`%c ${msg} !`,`color:red;font-size:18px;border:1px solid red;padding:1% 5% 1% 1%;font-family:Calibri;border-style:dotted;`);
        console.log(``);
    }
}

/* We can search for items using the Product Category Name */
VendingMachine.prototype.search = function(code){
    if(this.maintenance){
        return true;
    } else{
    var searching = opt.find(val => {
        if(val.productCode.includes(code)){
            console.log(val);
        } else if(val.category.includes(code)){
            console.log(val);
        }
    });
  }
}

/* We initialize a new vending machine ! */
let vender = new VendingMachine();
vender.outOfOrder(); //This stays uncommented because it is checking if this.maintenace variable is set to true/falsee

/* Find items by Product Code or Category */
vender.search("beverage");
vender.search("a105");

/* Purchase items */
vender.makePurchase("a100", 2.55); //Make purchases of anything by simply using the productCode & price (if this is what you wanted). otherwise, the price could be omitted
