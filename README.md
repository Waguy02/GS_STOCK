# GS_STOCK (Beta Version)

**GS_STOCK** is a professional web-based inventory management system. The application is built using an **Angular** frontend and a **Node.js/Express** backend, utilizing a **RESTful API** for seamless communication.

[Image of MEAN stack architecture diagram]

---

## 🚀 Features

* **Product Management:** Efficiently track items, categories, and stock levels.
* **Order Management:** Streamline the procurement and fulfillment process.
* **Sales System:** Integrated point-of-sale functionality for real-time transactions.
* **Statistics & Analytics:** Data-driven insights into sales performance and trends.
* **User & Contact Management:** Centralized database for clients, suppliers, and system users.

---

# GS_STOCK Application Specification

## 1. Overview
**GS_STOCK** is a Stock Management System built using a **Node.js** backend with **Express.js** and **MongoDB** (via Mongoose). It manages inventory, sales, product sourcing (commands), partners (customers/providers), and payments.

## 2. Technical Architecture
*   **Runtime Environment**: Node.js
*   **Web Framework**: Express.js
*   **Database**: MongoDB
*   **ORM**: Mongoose
*   **Frontend**: Angular (indicated by \`www/\` folder structure with \`runtime.js\`, \`polyfills.js\`, \`main.js\`)

## 3. Data Models (Entities)

The system is built around the following core entities:

### 3.1 Stock Management
*   **Category**: Grouping for products.
    *   \`name\`: String (Required)
    *   \`description\`: String (Required)
    *   \`status\`: Boolean (active/inactive)
*   **Product**: The base item definitions.
    *   \`name\`: String
    *   \`unit_price\`: Number
    *   \`description\`: String
    *   \`category\`: Reference to **Category**
    *   \`status\`: Boolean
*   **ProductClass**: Represents a specific batch or variation of a product in stock.
    *   \`label\`: String
    *   \`unit_price\`: String/Number
    *   \`quantity\`: Number (Current stock level)
    *   \`product\`: Reference to **Product**
    *   \`date_intrance\`: Date (Date added to stock)
    *   \`status\`: Boolean

### 3.2 Partners
*   **Customer**: Usage for Sales.
    *   \`name\`: String
    *   \`status\`: Boolean
*   **Provider**: Usage for Product Commands (Sourcing).
    *   \`name\`: String
    *   \`status\`: Boolean

### 3.3 Operations (Sales & Commands)
*   **ProductCommand** (Purchase Order): An order placed to a provider.
    *   \`date_initiating\`: Date
    *   \`date_finalizing\`: Date
    *   \`amount\`: Number (Total value)
    *   \`provider\`: Reference to **Provider**
    *   \`manager\`: Reference to **Manager** (Who created it)
    *   \`payment_status\`: Boolean (Paid or not)
    *   \`status\`: Boolean
*   **ProductCommandUnit**: Line items for a Product Command.
    *   \`quantity\`: String/Number
    *   \`unit_price\`: Number
    *   \`product_class\`: Reference to **ProductClass**
    *   \`product_command\`: Reference to **ProductCommand**
    *   \`date_delivrance\`: Date
    *   \`status\`: Boolean
*   **Sale**: A transaction with a customer.
    *   \`date_initiating\`: Date
    *   \`date_finalizing\`: Date
    *   \`amount\`: Number (Total sale value)
    *   \`amount_payment\`: Number (Amount paid so far)
    *   \`customer\`: Reference to **Customer**
    *   \`manager\`: Reference to **Manager**
    *   \`payment_status\`: Boolean
    *   \`status\`: Boolean
*   **SaleUnit**: Line items for a Sale.
    *   \`quantity\`: String/Number
    *   \`unit_price\`: Number
    *   \`product_class\`: Reference to **ProductClass**
    *   \`sale\`: Reference to **Sale**
    *   \`date_delivrance\`: Date
    *   \`status\`: Boolean

### 3.4 Financial
*   **Payment**: Records of financial transactions.
    *   \`date\`: Date
    *   \`amount\`: Number
    *   \`product_command\`: Reference to **ProductCommand** (if creating an expense)
    *   \`sale\`: Reference to **Sale** (if receiving income)
    *   \`manager\`: Reference to **Manager**
    *   \`status\`: Boolean

### 3.5 Administration & Access Control
*   **Manager**: Staff members who perform operations.
    *   \`name\`: String
    *   \`password\`: String
    *   \`status\`: Boolean
*   **User**: Generic user profile (likely for broader system access or different role types).
    *   \`name\`, \`password\`, \`adresse\`, \`sexe\`, \`date_naissance\`, \`niveau\`
*   **UserGroup**: Associates Users with Groups (Many-to-Many relationship).
    *   \`user\`: Reference to **User**
    *   \`group\`: Reference to **Group** (implied model)

## 4. Entity Relationship Diagram (ERD)

\`\`\`mermaid
erDiagram
    Category ||--|{ Product : "classifies"
    Product ||--|{ ProductClass : "has instances"
    
    Provider ||--|{ ProductCommand : "supplies"
    Manager ||--|{ ProductCommand : "manages"
    ProductCommand ||--|{ ProductCommandUnit : "contains"
    ProductClass ||--|{ ProductCommandUnit : "stocked via"
    
    Customer ||--|{ Sale : "purchases"
    Manager ||--|{ Sale : "facilitates"
    Sale ||--|{ SaleUnit : "contains"
    ProductClass ||--|{ SaleUnit : "sold from"
    
    Sale ||--|{ Payment : "is paid by"
    ProductCommand ||--|{ Payment : "paid for"
    Manager ||--|{ Payment : "processes"
    
    User ||--|{ UserGroup : "belongs to"
\`\`\`

## 5. API Specification

The application exposes the following RESTful endpoints (based on \`server.js\`):

### Stock Resources
*   \`GET/POST/PUT/DELETE /stock/category\` - Manage product categories
*   \`GET/POST/PUT/DELETE /stock/product\` - Manage product definitions
*   \`GET/POST/PUT/DELETE /stock/product_class\` - Manage stock batches

### Partner Resources
*   \`GET/POST/PUT/DELETE /partners/customer\` - Manage customers
*   \`GET/POST/PUT/DELETE /partners/provider\` - Manage providers

### Operation Resources
*   \`GET/POST/PUT/DELETE /stock_operations/product_command\` - Manage purchase orders
*   \`GET/POST/PUT/DELETE /stock_operations/product_command_unit\` - Manage purchase order items
*   \`GET/POST/PUT/DELETE /stock_operations/sale\` - Manage sales transactions
*   \`GET/POST/PUT/DELETE /stock_operations/sale_unit\` - Manage sale items

### Financial & Management Resources
*   \`GET/POST/PUT/DELETE /payment/payment\` - Manage payments
*   \`GET/POST/PUT/DELETE /management/manager\` - Manage staff/managers

### Static Assets
*   Hosted at \`/\` serving the Angular application from \`www/index.html\`.


  

## 🛠 Installation & Usage

### Prerequisites
* **Node.js:** v11.0.0 or higher

### Setup
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Waguy02/GS_STOCK.git](https://github.com/Waguy02/GS_STOCK.git)
   cd GS_STOCK
2. Start the server:

```bash
node server.js --HOST 127.0.0.1
```
Access the application: Open your browser and navigate to: http://localhost:5000

📧 Contact
For support, feedback, or further details, please contact: Guy Waffo - guywaffo@gmail.
