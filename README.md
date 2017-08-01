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
* Customer View Sample Run (Screen Capture)
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

 ? Enter the Item ID of the product you would like to buy or press [ctrl]+[c] to exit: **2**
 ? how many units of the product you would like to buy? **4**
 +---------------------------------------------------------------------------------------------
 <<< Yes you can buy this! >>>

       Your order: 4 Wireless Mouse with Nano Receiver (MGR0975).
       Total cost: 4 x 9.49 = $ 37.96

 +-------------------------------------------------------------------------------------+

  ? Confirm Order: **Yes**

 +-------------------------------------------------------------------------------------+

        You were charged $37.96 for 4--Wireless Mouse with Nano Receiver (MGR0975).
	Thank you for your order.  Your order will shipment soon!
								
+-------------------------------------------------------------------------------------+
```
* Manager View Menu Screen Capture
```
===============================================================================================

                             WELCOME TO BAMAZON
                             (MANAGER Interface)
 ------------------------------------------------------------------------------------------------
 ? MANAGER PRODUCTS MAINTENANCE MENU (Use arrow keys)
 ** > VIEW Products for Sale **
    VIEW Low Inventory
    ADD to Inventory
    ADD New Product
    EXIT
```
* Manager View Sample Run (Screen Capture)
```
 $ node bamazonManager.js
 ===============================================================================================

                             WELCOME TO BAMAZON
			     (MANAGER Interface)
 -----------------------------------------------------------------------------------------------
 ? MANAGER PRODUCTS MAINTENANCE MENU **VIEW Products for Sale**


 --------------------------------------------------------------------------------------------------------------------------------------
  item_id  product_name                                                                 department_name           price   stock_quantity
 -------  ---------------------------------------------------------------------------  ------------------------  ------  --------------
  1        3-Button USB Wired Mouse (Black)                                             Electronics               6.94    81
  2        Wireless Mouse with Nano Receiver (MGR0975)                                  Electronics               9.49    93
  3        Backpack for Laptops Up To 17"                                               Electronics               29.99   9
  4        Mid-Back Mesh Chair                                                          Office Products           62.99   10
  5        LED Desk Lamp Fugetek FT-L798, 5-Level Dimmer, Touch Control Panel (Black)   Office Products           23.99   10
  6        100 Watt Equivalent, Daylight, Non-Dimmable, A21 LED Light Bulb, 6-pack      Tools & Home Improvement  19.99   200
  7        Foscam 720P HD WiFi NVR Security System (Pre-installed 1TB HDD) - 4 Cameras  Tools & Home Improvement  349.99  20
  8        Honeywell HT-900 TurboForce Air Circulator Fan, Black                        Tools & Home Improvement  11.96   16
  9        Extra Large 79" x 40"! Kids Carpet Playmat Rug City Life                     Home & Kitchen            29.99   38
  10       Large Wall Clock Silent & Non-Ticking - Indoor/Outdoor                       Home & Kitchen            14.99   24

 ? MANAGER PRODUCTS MAINTENANCE MENU **VIEW Low Inventory**


  --------------------------------------------------------------
  item_id  product_name                    price  stock_quantity
  -------  ------------------------------  -----  --------------
  3        Backpack for Laptops Up To 17"  29.99  9

  ? MANAGER PRODUCTS MAINTENANCE MENU **ADD to Inventory**
  
  ? Enter the id of the product:  **3**
  ? Enter how many more you like to add:  **12**
  *update successful!*


  --------------------------------------------------------------------------------------------------------------------------------------
  item_id  product_name                                                                 department_name           price   stock_quantity
  -------  ---------------------------------------------------------------------------  ------------------------  ------  --------------
  1        3-Button USB Wired Mouse (Black)                                             Electronics               6.94    81
  2        Wireless Mouse with Nano Receiver (MGR0975)                                  Electronics               9.49    93
  3        Backpack for Laptops Up To 17"                                               Electronics               29.99   12
  4        Mid-Back Mesh Chair                                                          Office Products           62.99   10
  5        LED Desk Lamp Fugetek FT-L798, 5-Level Dimmer, Touch Control Panel (Black)   Office Products           23.99   10
  6        100 Watt Equivalent, Daylight, Non-Dimmable, A21 LED Light Bulb, 6-pack      Tools & Home Improvement  19.99   200
  7        Foscam 720P HD WiFi NVR Security System (Pre-installed 1TB HDD) - 4 Cameras  Tools & Home Improvement  349.99  20
  8        Honeywell HT-900 TurboForce Air Circulator Fan, Black                        Tools & Home Improvement  11.96   16
  9        Extra Large 79" x 40"! Kids Carpet Playmat Rug City Life                     Home & Kitchen            29.99   38
  10       Large Wall Clock Silent & Non-Ticking - Indoor/Outdoor                       Home & Kitchen            14.99   24

  ? MANAGER PRODUCTS MAINTENANCE MENU **ADD New Product**
  
  ? Enter product name:  **Atlanta Ref Magnet**
  ? Enter department:  **Home & Kitchen**
  ? Enter product price:  **3.50**
  ? Enter product quantity:  **12**
  *Add new product successful!*


 --------------------------------------------------------------------------------------------------------------------------------------
 item_id  product_name                                                                 department_name           price   stock_quantity
 -------  ---------------------------------------------------------------------------  ------------------------  ------  --------------
 1        3-Button USB Wired Mouse (Black)                                             Electronics               6.94    81
 2        Wireless Mouse with Nano Receiver (MGR0975)                                  Electronics               9.49    93
 3        Backpack for Laptops Up To 17"                                               Electronics               29.99   12
 4        Mid-Back Mesh Chair                                                          Office Products           62.99   10
 5        LED Desk Lamp Fugetek FT-L798, 5-Level Dimmer, Touch Control Panel (Black)   Office Products           23.99   10
 6        100 Watt Equivalent, Daylight, Non-Dimmable, A21 LED Light Bulb, 6-pack      Tools & Home Improvement  19.99   200
 7        Foscam 720P HD WiFi NVR Security System (Pre-installed 1TB HDD) - 4 Cameras  Tools & Home Improvement  349.99  20
 8        Honeywell HT-900 TurboForce Air Circulator Fan, Black                        Tools & Home Improvement  11.96   16
 9        Extra Large 79" x 40"! Kids Carpet Playmat Rug City Life                     Home & Kitchen            29.99   38
 10       Large Wall Clock Silent & Non-Ticking - Indoor/Outdoor                       Home & Kitchen            14.99   24
 11       *Atlanta Ref Magnet                                                           Home & Kitchen            3.5     12*

 ? MANAGER PRODUCTS MAINTENANCE MENU **EXIT**
 
```

