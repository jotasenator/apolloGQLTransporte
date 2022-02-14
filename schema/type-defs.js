const {gql} = require("apollo-server");

const typeDefs = gql`
    type Guagua{
        id:ID!
        number:Int!
        brand:String!
        model:String!
        capacity:Int!
        drivers:[String!]!
        terminal:String!        
    }

    type Chofer{
        id:ID!
        name:String!
        experience_time:Int!
        shift:String!
    }

    type Terminal{
        id:ID!
        name:String!
        place:String!
        capacity:Int!
    }

    

    

    type Query{
        guaguas:[Guagua!]!
        guagua(id:ID!):Guagua!
        choferes:[Chofer!]!
        chofer(id:ID!):Chofer!
        terminales:[Terminal!]!
        terminal(id:ID!):Terminal!
        
    }

   
 `;

 module.exports = {typeDefs};