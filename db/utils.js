//importing the connection
import connection from "./index";

//will aceept string or object with configuration values
//will return a promise that either resolves with the result from the database or rejects with an error
//Returns the result of a sql query
const query = (qryStr, values) => {
  return new Promise((resolve, reject) => {
    connection.query(qryStr, values, (err, results) => {
      if (err) reject(err);
      resolve(results); //the results values can be acceesed by .then or await. The actual results from the query
    });
  });
};

//exporting query function
export default query;
