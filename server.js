var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const Schema = require('./schema');

let outbreaks = [];
 
// Construct a schema, using GraphQL schema language
var schema = new Schema().createSchema();


// The root provides a resolver function for each API endpoint
var root = {
  health: () => {
    return "Healthy"
  },
  addOutbreak: ({outbreak}) => {
    outbreaks.push(outbreak);
    return outbreak;
  },
  listOutbreaks: () => {
    let output = [];
    outbreaks.forEach(outbreak => {
      output.push(outbreak);
    })
    return output;
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
