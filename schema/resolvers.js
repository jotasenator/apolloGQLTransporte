const { GuaguasList} = require("./fakeData")
const _ = require("lodash")



const resolvers = {
    Query:{
        guaguas:()=>{
             return GuaguasList;
        },      
        guagua:(parent,args)=>{
            const id = args.id;
            const guagua = _.find(GuaguasList,{id:Number(id)});
            return guagua
        }
     
    },
    
}

module.exports = {resolvers}