export const ADD=(productId)=>{
    return{
        type:"ADD",
        payload:{
            id:productId
        }
    }
}
export const REMOVE=(productId)=>{
    return{
        type:"REMOVE",
        payload:{
            id:productId
        }
    }
}