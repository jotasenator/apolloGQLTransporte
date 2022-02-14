const { GuaguasList, ChoferList} = require("./fakeData")
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
        },
        choferes:()=>{
            return ChoferList;
        },
        chofer:(parent,args)=>{
            const id = args.id;
            const chofer = _.find(ChoferList,{id:Number(id)});
            return chofer
        },
     
    },
}

module.exports = {resolvers}