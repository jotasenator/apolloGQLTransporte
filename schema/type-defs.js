const {gql} = require("apollo-server");

const typeDefs = gql`
    type Guagua{
        id:ID!
        number:Int!
        brand:String!
        capacity:Int!
        drivers:[String!]!
        terminal:String!
        
    }

    

    type Query{
        guaguas:[Guagua!]!
        guagua(id:ID!):Guagua!
        
    }

   
 `;

 module.exports = {typeDefs};