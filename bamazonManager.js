
// import the password file; Created a password file so that the password will not be visible in this file/code.
var theDbPassword = require("./dbPw.js");
var newDbPassword = theDbPassword.userPassword;

var mysql = require("mysql");
var inquirer = require("inquirer");
var constant = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  // Your password from password file
  password: newDbPassword.user_password,
  database: "bamazon"
});
connection.connect(function(err) {
	if (err) throw err;
  	console.log("=============================================================================================== \n");
	console.log("                             WELCOME TO BAMAZON                                               ");
	console.log("                             (MANAGER Interface)                                              ");
	console.log("-----------------------------------------------------------------------------------------------");
	bamazonManager();
});


function addStock (id, addQty){
    /***
     * addStock modifies the stock_quantity of a given id
     */
    var addInventoryQuery = "Update products SET stock_quantity = ? where item_id = ?";
    connection.query(addInventoryQuery,[addQty, id],function(err, res){
        if(err){
            console.log(err);
        } else {
            if (res.affectedRows === 0) {
                console.log("Invalid Input... please try again.");
                bamazonManager();
            } else {
                console.log("update successful!.");
                viewProducts();
            }
        }
    })
};


function addInventory() {
	// assign prompt variable
    var whichItem = [{
        type: 'input',
        name: 'item',
        message: 'Enter the id of the product: ',
        validate: function(value){
            if(isNaN(value) == false){
                return true;
            }else{
                return false;
            }
        	}
        },
        {
            type: 'input',
            name: 'addQty',
            message: 'Enter how many more you like to all: ',
            validate: function(value){
                if(isNaN(value) == false){
                    return true;
                }else{
                    return false;
                }
            }
        }

    ];

    inquirer.prompt(whichItem).then(function (answer) {
     	addStock(answer.item, answer.addQty);
    });
};


function bamazonManager() {
	// UI Banner
  	inquirer.prompt({
      	name: "managerChoice",
      	type: "list",
      	message: "MANAGER PRODUCTS MAINTENANCE MENU",
      	choices: ["VIEW Products for Sale", "VIEW Low Inventory", "ADD to Inventory", "ADD New Product", "EXIT"]
    })
    .then(function(answer) {
      // Create Switch case to handle selection
      	console.log("Check input: " + answer.managerChoice + ".");
		switch (answer.managerChoice) {
    		case "VIEW Products for Sale":
    			viewProducts();
    			break;
		    case "VIEW Low Inventory":
		    	viewLowInventory();
    			break;
		    case "ADD to Inventory":
		    	addInventory();
    			break;
		    case "ADD New Product":
    			console.log("Add new product");
    			break;
		    case "EXIT":
    			connection.end();
    			break;
        	default: 
        		console.log("Error did not go into the 4 cases.");
    			break;
		};
  		//connection.end();
    });
};


//     connection.query(addInventoryQuery, [{stock_quantity: newQty},{item_id:itemId}], 
//     	function(err, results){
// 		if (err) throw err;
// 		// prints in table format.
// 		console.table("\n",results);
// 		// runs bamazonManager Menu
// 		bamazonManager();
//     });
// };



function viewProducts() {
	// assign viewQuery to variable
    var viewQuery = "SELECT item_id, product_name, price, stock_quantity from products"
    connection.query(viewQuery, function(err, results){
		if (err) throw err;
		// prints in table format.
		console.table("\n",results);
		// runs bamazonManager Menu
		bamazonManager();
    });
};

function viewLowInventory() {
	// assign viewQuery to variable
    var lowQuery = "SELECT item_id, product_name, price, stock_quantity from products where stock_quantity < 10"
    connection.query(lowQuery, function(err, results){
		if (err) throw err;
		if (results.length == 0){
			console.log("There are no items with less than 10 units left in their inventory.")
		};
		// prints in table format.
		console.table("\n",results);
		// runs bamazonManager Menu
		bamazonManager();
    });
};


//var addItem = 'INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?,?,?,?)';