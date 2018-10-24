class VendingMachine{
    constructor(){
        this.loanAmount = 0, /* Loan amount is actually assigned at bottom of code */
        this.funds = 10, /* You're starting balance */
        this.useLoan = false, /* If this is set to true. Purchases will be deducted from your Loan rather than your balance*/
        this.maintenance = false,  /* When set to true, this will cause a maintenance screen to appear */
        this.mathVisual = true; /* When this is set to true, a visual example of each purchase will be presented. */
    }
}

/* List of items available in our vending machine */
let options = [
      {
          "coke": {
              "productName": "Coke",
              "productPrice": 2.55,
              "productDesc": "A delightful beverage to fease the mood.",
              "productCode": "a100",
              "category": "beverage"
          },
          "pepsi": {
              "productName": "Pepsi",
              "productPrice": 1.25,
              "productDesc": "A delightful beverage to fease the mood.",
              "productCode": "a101",
              "category": "beverage"
          },
          "nestea": {
              "productName": "Nestea",
              "productPrice": 1.25,
              "productDesc": "A delightful beverage to fease the mood.",
              "productCode": "a102",
              "category": "beverage"
          },
          "sprite": {
              "productName": "Sprite",
              "productPrice": 1.25,
              "productDesc": "A delightful beverage to fease the mood.",
              "productCode": "a103",
              "category": "beverage"
          },
          "gingerale": {
              "productName": "Ginger ale",
              "productPrice": 1.25,
              "productDesc": "A delightful beverage to fease the mood.",
              "productCode": "a104",
              "category": "beverage"
          },
          "lays": {
              "productName": "Lays",
              "productPrice": 2.50,
              "productDesc": "Enjoy the delicious taste of these chips",
              "productCode": "a105",
              "category": "chips"
          },
          "doritos": {
              "productName": "Doritos",
              "productPrice": 2.50,
              "productDesc": "Enjoy the delicious taste of these chips",
              "productCode": "a106",
              "category": "chips"
          },
          "reese": {
              "productName": "Reese",
              "productPrice": 3.15,
              "productDesc": "Feast your mouth on this",
              "productCode": "a107",
              "category": "chocolate"
          },
          "snickers": {
              "productName": "Snickers",
              "productPrice": 3.15,
              "productDesc": "Your not yourself when your hungry",
              "productCode": "a108",
              "category": "chocolate"
          },
          "jellybeans": {
              "productName": "Jelly Beans",
              "productPrice": 2.85,
              "productDesc": "Cavities await!",
              "productCode": "a109",
              "category": "candy"
          },
          "candystick": {
              "productName": "Candy Sticks",
              "productPrice": 1.00,
              "productDesc": "Cavities await!",
              "productCode": "a110",
              "category": "candy"
          },
          "cottoncandy": {
              "productName": "Cotton Candy",
              "productPrice": 1.00,
              "productDesc": "Cavities await!",
              "productCode": "a111",
              "category": "candy"
          }
    }
];

/* Function to store variables related to the user */
VendingMachine.prototype.user = function(){
    console.log(`Money: $${this.funds}`);
    this.loanInfo();
}

/* Information about ongoing loans are displayed with this func */
VendingMachine.prototype.loanInfo = function(){
    if(this.loanAmount <= 0){
        console.log(`Loan Status: %cNo Pending Loan.`,`color:green`);
    }else{
        if(this.useLoan==true){
            this.funds = this.loanAmount;
            console.log(`Loan Amount: %c$${this.loanAmount}`,'color:green;');
        }else{
            console.log(`Loan Amount: %c$${this.loanAmount}`,'color:green;');
        }
    }
}

VendingMachine.prototype.takeLoan = function(amount){
    this.loanAmount = amount;
}

VendingMachine.prototype.makePurchase = function(code,price){
    if(this.maintenance){
        return true;
    } else{
      let successMsg = 'color:green;font-weight:bold;',
          errorMsg = 'color:red;font-weight:bold;';
        
      for(let y = 0; y < options.length; y++){
          let obj = options[y];
          for(let item in obj){
              if(obj.hasOwnProperty(item)){
                  let getCode = obj[item];
                  if(getCode.productCode == code && getCode.productPrice == price){
                      if(this.funds){
                          if(this.funds>=getCode.productPrice){
                              console.log(`\n%cYou purchased a ${getCode.productName} for $${getCode.productPrice}`,`${successMsg}`);
                              console.log(`Current Balance: $${this.funds}`);
                              console.log(`Item Price: $${getCode.productPrice}`);
                              console.log(`Calculation: ${this.funds} - ${getCode.productPrice} =`, (this.funds - getCode.productPrice));

                              if(this.mathVisual){
                                function visualization(balance,cost){
                                    let drawing;
                                    let fullCost;
                                    let lines = 7;
                                    let finalSum;
                                    let sym;
                                    
                                    for(var j = 0; j<balance+1; j++){
                                        drawing = j;
                                        for(var y = 0; y<Math.round(getCode.productPrice+1); y++){
                                            fullCost = y;
                                        }
                                        for(var x = 0; x < lines - 1; x++){
                                            let symbol = "-".repeat(lines);
                                            sym = symbol;
                                            drawing = " "+drawing;
                                            fullCost = " "+fullCost;
                                            finalSum = " "+drawing-fullCost;
                                        }
                                    }

                                    console.log(`\n%cFormula Visualization`,`padding:0.2%;color:blue;font-size:14px;font-size:bold;text-decoration:underline;`);
                                    console.log(`%c${drawing}\n-\n${fullCost}\n${sym}\n${finalSum}\n\n`,`font-style:italic;;color:blue;font-size:14px;`);
                                }
                                visualization(this.funds);
                                console.log(`New Balance: $${this.funds - getCode.productPrice} ~ `, `Rounded: ${Math.round(this.funds -= getCode.productPrice)}`);
                              }
                              else{
                                console.log(`New Balance: $${this.funds - getCode.productPrice} ~ `, `Rounded: ${Math.round(this.funds -= getCode.productPrice)}`);
                                console.log(`-------------------------------------`);
                                let sum = (this.funds - getCode.productPrice);
                              }
                          }
                          if(this.funds==0){
                              console.log(`%cYou do not have money to purchase a ${getCode.productName} for $${getCode.productPrice}`,`${errorMsg}`);
                              console.log(`Current Balance: $${this.funds}`);
                              console.log(`Item Cost: $${getCode.productPrice}`);
                          }
                      } else if(this.loanAmount>0){
                          console.log(`%cYou purchased a ${getCode.productName} with your loan balance.`,`${successMsg}`);
                          let loanSum = (this.loanAmount - getCode.productPrice);
                          console.log(`%cYou now owe the bank $${loanSum}`,`${errorMsg}`);
                          this.loanAmount - getCode.productPrice;
                          console.log(`${this.loanAmount}`);
                      }
                  }
              } else{
                  return false;
              }
           }
        }
    }
}

VendingMachine.prototype.outOfOrder = function(msg){
    if(this.maintenance){
        console.log(``);
        msg = `This vending machine is currently down for maintenance`;
        console.log(`%c ${msg} !`,`color:red;font-size:18px;border:1px solid red;padding:1% 5% 1% 1%;font-family:Calibri;border-style:dotted;`);
        console.log(``);
    } else{
        return true;
    }
}

VendingMachine.prototype.search = function(code){
    let newItem = [];

    for(let x = 0; x < options.length; x++){
        let myObj = options[x];
        for(var key in myObj){
            if(typeof Object){
                let item = myObj[key];
                if(item["productCode"] == code || item["productCode"].toUpperCase() == code){
                    newItem.push(item);
                }
                else if(item.hasOwnProperty("category")){
                    if(item.category==code){
                        console.log(`\nInformation For Product By Category: %c${code}`, `color:green;font-weight:bold;text-transform:uppercase;`, `${JSON.stringify(item, undefined, 2)}`);
                    }
                }
            }
        }
    }

    let gett = newItem.filter(function(item){
        newItem = item;
        console.log(`\nInformation For Product By Code: %c${code}`, `color:green;font-weight:bold;text-transform:uppercase;`, `${JSON.stringify(newItem, undefined, 2)}`);
    });
}

let vender = new VendingMachine();
vender.outOfOrder();
vender.user();
vender.takeLoan(52);

vender.search("chocolate");
vender.search("A101");

vender.makePurchase("a100", 2.55); 
