# bamazon (Customer View and Manager View)
Bamazon is an Amazon-like store-front application that allows a customer to view and buy products and a manager to maintain product inventory. 
It is composed of 2 main applications: bamazonCustomer.js and bamazonManager.js. The product records are stored and maintained in an SQL Database (MySQL). They can both display the Item ID, Product Name, and Price of each item.  The Manager view(bamazonManager.js) has extra functions that enables the user to view and edit a product's inventory level or add an new product. 
## Technology Used
* Node.js
* inquirer (npm)
* console.table (npm)
* mysql (npm)
* MySQL Workbench (SQL Database)

## Resources
* Javascript: bamazonCustomer.js, bamazonManager.js

## Get Started
* Clone repository
```
$ git clone https://github.com/rfenix3/bamazon.git
```
* Install node module
```
$ node install
```
* Install npm
```
$ npm install inquirer --save
$ npm install mysql --save
$ npm install console.table --save
```
* Run Javascript Program on Node
```
$ node bamazonCustomer.js
```
* Sample Screen Capture
```
===============================================================================================

                             WELCOME TO BAMAZON
			     (CUSTOMER Interface)
 -----------------------------------------------------------------------------------------------
 item_id  product_name                                                                 price
 -------  ---------------------------------------------------------------------------  ------
 1        3-Button USB Wired Mouse (Black)                                             6.94
 2        Wireless Mouse with Nano Receiver (MGR0975)                                  9.49
 3        Backpack for Laptops Up To 17"                                               29.99
 4        Mid-Back Mesh Chair                                                          62.99
 5        LED Desk Lamp Fugetek FT-L798, 5-Level Dimmer, Touch Control Panel (Black)   23.99
 6        100 Watt Equivalent, Daylight, Non-Dimmable, A21 LED Light Bulb, 6-pack      19.99
 7        Foscam 720P HD WiFi NVR Security System (Pre-installed 1TB HDD) - 4 Cameras  349.99
 8        Honeywell HT-900 TurboForce Air Circulator Fan, Black                        11.96
 9        Extra Large 79" x 40"! Kids Carpet Playmat Rug City Life                     29.99
 10       Large Wall Clock Silent & Non-Ticking - Indoor/Outdoor                       14.99

 ? Enter the Item ID of the product you would like to buy or press [ctrl]+[c] to exit: 2
 ? how many units of the product you would like to buy? 4
 +---------------------------------------------------------------------------------------------
 <<< Yes you can buy this! >>>

       Your order: 4 Wireless Mouse with Nano Receiver (MGR0975).
       Total cost: 4 x 9.49 = $ 37.96

 +-------------------------------------------------------------------------------------+

  ? Confirm Order: Yes

 +-------------------------------------------------------------------------------------+

        You were charged $37.96 for 4--Wireless Mouse with Nano Receiver (MGR0975).
	Thank you for your order.  Your order will shipment soon!
								
+-------------------------------------------------------------------------------------+
```

