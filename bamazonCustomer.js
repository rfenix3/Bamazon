
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
  runBamazonInterface();
});

function runBamazonInterface() {
	// UI Banner
	console.log("=============================================================================================== \n");
	console.log("                             WELCOME TO BAMAZON                                               ");
	console.log("                            (CUSTOMER Interface)                                              ");
	console.log("-----------------------------------------------------------------------------------------------");
	// query the database for all products available
	connection.query("SELECT item_id, product_name, price FROM products", function(err, results){
		if (err) throw err;
		console.table(results);
		inquirer.prompt([
        {
        	name: "userId",
          	type: "input",
         	message: "Enter the Item ID of the product you would like to buy or press [ctrl]+[c] to exit:",
        	validate: function(value){
            	if(isNaN(value) == false){
                	return true;
            	} else {
                	return false;
            	}
        	}         	
        },
        {
          	name: "userQty",
          	type: "input",
          	message: "how many units of the product you would like to buy?",
        	validate: function(value){
            	if(isNaN(value) == false){
                	return true;
            	} else {
                	return false;
            	}
        	}         	
        }
      	])
      	.then(function(answer) {
            // Set the responses (userId and userQty) to corresponding variables
    		var userItem = answer.userId;
    		var userQty = answer.userQty;
        	connection.query('SELECT * FROM products WHERE ?',
        		{item_id: answer.userId}, 
            	function(err, results){
            		if (err) throw err;
        			//If the amount requested is greater than the amount in stock.
            		if (userQty > results[0].stock_quantity){
                		console.log("\n <<< Sorry.  There aren't enough in the inventory for that quantity.  Try again. >>>");
                		// close connection and exit program
						connection.end();
            		} 
            		// else they may buy it
            		else {
            			var totalCost = userQty * results[0].price
            			var newQty = results[0].stock_quantity - userQty;
            			var itemId = results[0].item_id;
            			console.log("\n    +-------------------------------------------------------------------------------------+");
            			console.log("\n      <<< Yes you can buy this! >>>");  			
	           			console.log("\n      Your order: " + userQty + " " + results[0].product_name + ".");
	           			console.log("      Total cost: " + userQty + " x " + results[0].price + " = $ " + totalCost);
            			console.log("\n    +-------------------------------------------------------------------------------------+\n");
 
						// Here we create a basic text prompt to cofirm the order.
						inquirer
						.prompt([
    				    	{
      							type: "confirm",
      							message: "Confirm Order:",
      							name: "confirmOrder",
      							default: true
					    	}
    					])
    					.then(function(confirmResponse) {
    					// If the inquirerResponse confirms, we proceed with the order and update the DB table.
					    	if (confirmResponse.confirmOrder) {
      							// update the quantity		
      							connection.query('UPDATE products SET ? where ?', 
      								[{stock_quantity: newQty}, {item_id:itemId}], 
      								function(err, res) {
      									if (err) throw err;
      									//console.log(res.message);
            							console.log("\n    +-------------------------------------------------------------------------------------+");
										console.log("\n      You were charged $" + totalCost + " for " + userQty + "--" + results[0].product_name + ".");
										console.log("      Thank you for your order.  Your order will shipment soon!");
            							console.log("\n    +-------------------------------------------------------------------------------------+");
            							connection.end();
      								}      							
      							);
      						}
    						else {
   								console.log("\n    +-------------------------------------------------------------------------------------+");
      							console.log("\n      Your orders has been cancelled.  You are directed back to the main interface. ");
   								console.log("\n    +-------------------------------------------------------------------------------------+");
      							runBamazonInterface();
    						};
						});
            		};
            	}
            )
        });
	});
};


// Improvement list:
// 1. Validate if item_id selected is valid.  If not valid, ask to enter a valid item_id

