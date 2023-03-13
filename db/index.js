//this where we will create the connnection and export the connection to our database based on those configration variables
import config from "../config";
import mysql from "mysql";

//will aceept string or object with configuration values
//will return a promise that either resolves with the result from the database or rejects with an error
const connection = mysql.createPool(config.mysql); //will pass in the enviroment variables

export default connection;
