function VendingMachine(){
    console.log(this.boot = `Welcome to Vender Deluxe !`);
    this.loanAmount = 0; /* Loan amount is actually assigned at bottom of code */
    this.funds = 10; /* You're starting balance */
    this.useLoan = false; /* If this is set to true. Purchases will be deducted from your Loan rather than your balance*/
    this.maintenance = false; /* When set to true, this will cause a maintenance screen to appear */
    this.mathVisual = true; /* When this is set to true, a visual example of each purchase will be presented. */
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
              "productName": "Doritos",
              "productPrice": 3.15,
              "productDesc": "Feast your mouth on this",
              "productCode": "a107",
              "category": "chocolate"
          },
          "snickers": {
              "productName": "Jelly Beans",
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
        console.log(`Loan Status: %cNo Pending Loan.\n`,`color:green`);
    }else{
        if(this.useLoan==true){
            this.funds = this.loanAmount;
            console.log(`Loan Amount: %c$${this.loanAmount}`,'color:green;');
        }else{
            console.log(`Loan Amount: %c$${this.loanAmount}`,'color:green;');
        }
    }
}

/* Distributes the loan amount to your loan balance */
VendingMachine.prototype.takeLoan = function(amount){
    this.loanAmount = amount;
}

/* Oh boy, here goes a lot of explanation */
VendingMachine.prototype.makePurchase = function(code,price){
    /* Checks if the machine is under maintenance before allowing purchases */
    if(this.maintenance){
        return true;
    } else{
      /* Friendly messages to warn the user about important events */
      let successMsg = 'color:green;font-weight:bold;',
          errorMsg = 'color:red;font-weight:bold;';

      /* We begin looping through our options menu */
      for(let y = 0; y < options.length; y++){
          let obj = options[y];
          /* After reaching our destination, we loop further down the object tree */
          for(let item in obj){
              if(obj.hasOwnProperty(item)){
                  let getCode = obj[item];
                  /* We validate wether the code entered is equivalent to an item in our system */
                  if(getCode.productCode == code){
                      /* Once the item is confirmed, we check if our person has funds */
                      if(this.funds){
                          /* Checking if the funds is either the minimum amount required or greater */
                          if(this.funds>=getCode.productPrice){
                              console.log(`\n%cYou purchased a ${getCode.productName} for $${getCode.productPrice}`,`${successMsg}`);
                              console.log(`Current Balance: $${this.funds}`);
                              console.log(`Item Price: $${getCode.productPrice}`);
                              console.log(`Calculation: ${this.funds} - ${getCode.productPrice} =`, (this.funds - getCode.productPrice));

                              /* We create a simple math visualization to articulate the calculations occuring */
                              if(this.mathVisual){
                                /* Balance = funds & cost = itemCost */
                                function visualization(balance,cost){
                                    let drawing;
                                    let fullCost;
                                    /* This line will draw out the appropriate amount of lines in correlation with our numbers */
                                    let lines = 7;
                                    let finalSum;
                                    let sym;

                                    /* We loop through each of the balances.
                                       Sure this could be omitted but I have a
                                       reason for using loops */
                                    for(var j = 0; j<balance+1; j++){
                                        drawing = j;
                                        for(var y = 0; y<Math.round(getCode.productPrice+1); y++){
                                            fullCost = y;
                                        }
                                        for(var x = 0; x < lines - 1; x++){
                                            let symbol = "-".repeat(lines);
                                            sym = symbol;
                                            /* Because we are nested within an array, we can print out the
                                            minimum amount of empty spaces required in order to draw out
                                            our board appropriately | Spaces = Indentation for our values */
                                            drawing = " "+drawing;
                                            fullCost = " "+fullCost;
                                            finalSum = " "+drawing-fullCost;
                                        }
                                    }
                                    /* Messy looking outputs for our information. Cant use classes in console.log (or can you) */
                                    console.log(`\n%cFormula Visualization`,`padding:0.2%;color:blue;font-size:14px;font-size:bold;text-decoration:underline;`);
                                    console.log(`%c${drawing}\n-\n${fullCost}\n${sym}\n${finalSum}\n\n`,`font-style:italic;;color:blue;font-size:14px;`);
                                }
                                visualization(this.funds);
                                console.log(`New Balance: $${this.funds -= getCode.productPrice} ~ `, `Rounded: ${Math.round((this.funds -= getCode.productPrice % getCode.productPrice))}`);
                              }
                              else{
                                console.log(`New Balance: $${this.funds -= getCode.productPrice} ~ `, `Rounded: ${Math.round((this.funds -= getCode.productPrice % getCode.productPrice))}`);
                                console.log(`-------------------------------------`);
                                let sum = (this.funds - getCode.productPrice);
                              }
                          }
                          /* If our user is indeed broke, you will be told */
                          if(this.funds==0){
                              console.log(`%cYou do not have money to purchase a ${getCode.productName} for $${getCode.productPrice}`,`${errorMsg}`);
                              console.log(`Current Balance: $${this.funds}`);
                              console.log(`Item Cost: $${getCode.productPrice}`);
                          }
                        /* If the user has a loan amount available, you are able to use it to make purchases granted the arguments above reflect such*/
                      } else if(this.loanAmount>0){
                          console.log(`%cYou purchased a ${getCode.productName} with your loan balance.`,`${successMsg}`);
                          let loanSum = (this.loanAmount - getCode.productPrice);
                          console.log(`%cYou now owe the bank $${loanSum}`,`${errorMsg}`);
                          this.loanAmount -= getCode.productPrice;
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

/* Puts the machine in maintenance mode */
VendingMachine.prototype.outOfOrder = function(msg){
    let getStatus = this.maintenance;
    if(this.maintenance){
        msg = message = "\nThis vending machine is currently down for maintenance";
        console.log(msg);
    } else{
        return true;
    }
}

/* We can search for items using the productCode */
VendingMachine.prototype.search = function(arr,code){
    let newItem = [];

    /* Same old same old, loops, and what not */
    for(let x = 0; x < arr.length; x++){
        let myObj = arr[x];
        for(var key in myObj){
            if(typeof Object){
                let item = myObj[key];
                if(item["productCode"] == code){
                    newItem.push(item);
                }
            }
        }
    }

    /* We use the array.filter function to retrieve information */
    let gett = newItem.filter(function(item){
        // newItem = item.productName; /* Grab specific item Name */
        newItem = item;
        console.log(`\nInformation For Product Code: %c${code}`, `color:green;font-weight:bold;text-transform:uppercase;`, `${JSON.stringify(newItem, undefined, 2)}`);
    });
}

/* This is used for searching for items by their category */
VendingMachine.prototype.byCategory = function(arr,val){
    let catInfo = [];

    for(let x = 0; x < arr.length; x++){
        let obj = arr[x];
        for(let key in obj){
            let item = obj[key];
            if(item.hasOwnProperty("category")){
                if(item.category==val){
                    console.log(item);
                }
            }
        }
    }
}

/* We initialize a new vending machine ! */
let vender = new VendingMachine();
vender.outOfOrder(); //This stays uncommented because it is checking if this.maintenace variable is set to true/falsee
vender.takeLoan(50); //You can specify the amount of money to give yourself. How nice.
vender.user(); //Print out our users information
// VendingMachine.getItem("Chips");

let searchByCode = vender.search(options,"a100"); //The second parameter takes in the productCode
let searchByCat = vender.byCategory(options,"chips"); //The second parameter takes in the productCategory
vender.makePurchase("a100"); //Make purchases of anything by simply using the productCode
