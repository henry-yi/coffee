# Perfectly Ground Work Orders
## Description of Architecture

1. Frontend developed with Angular 6, supported by Bootstrap for responsive grid layout. 
2. Backend server developed with node.js/Express and Sequelize
3. Postgres Database with a simple work_orders table.

## Description of Tradeoffs
From a architectural standpoint, I decided to create 2 main components for Angular, headerComponent, and the tableComponent. Since the Create Order Button is aligned with the Header, I kept it there even though its a tradeoff losing out easier integration with the TableComponent.

Spent too much time working with Postgres, could've maybe spent less time configuring a MySQL database but wanted to try something less familiar.

Initially planned on using 3rd party library for modal, but opted for spinning up a simpler one utilizing Angular Component Factory. Slightly complicated, but more control with using Angular to toggle modal.

## Description of How to Run Locally
1. Unzip files into a directory.
2. In command line tool, change directory to "coffee" and run "npm install". Do the same with coffee-server.
3. Setup a postgres database.
    ex SQL:
  
CREATE TABLE public.work_orders
(
    coffee character(256) COLLATE pg_catalog."default" NOT NULL,
    brew_method character(256) COLLATE pg_catalog."default" NOT NULL,
    number_of_cases integer NOT NULL,
    packets_per_case integer NOT NULL,
    ship_date date NOT NULL,
    order_number integer NOT NULL,
    priority boolean NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    id integer NOT NULL DEFAULT nextval('work_orders_id_seq'::regclass)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.work_orders
    OWNER to postgres;    
4. run 'npm start' on coffee-server.
5. run 'ng serve -o' on coffee.
6. Navigate to localhost:4200 if browser did not automatically open a new tab.

## Description of Deployment and Production Readiness
Production Readiness: Due to time limits, I've not been able to complete a few last steps asked for this coding challenge. Unit Tests, Integration tests are missing, as well as key functionality such as pagination and table updates on creating new work orders.

Deployment process:
The simplest deployment process would be to build the angular app, using external libraries like webpack, or as simple as running 'ng build --prod' and moving the dist folder to the node.js server application. The server should then be deployed to a hosted site, such as AWS, Heroku, etc.
