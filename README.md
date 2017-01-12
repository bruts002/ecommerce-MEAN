# E-Commerce

Rewriting my ecommerce webapp to be on the *M*EAN stack. 
**MySQL**    - Keeping this the same, no reason to abandon the relational database for MongoDB
**Express**  - Node framework for building apps
**Angular2** - Front-end framework
**Node**     - Server

#TODO: Instructions for installing MySQL and database `ecom`

To start developing:
1. Run `npm install` from root folder
2. `cd client/`
3. `npm install`
4. `cd ../`
5. `nodemon` This will start the live-server (It will restart whenever a file is saved)
6. Run `npm start` from `client` folder
7. Open to `http://localhost:3000/` with your favorite browser

The nodemon will serve to port 3000 by default and the TypeScript server will serve to 3001.
You will only be able to see the app from port 3000.
*There is no `index.html` file in the `client` folder thus causing errors*