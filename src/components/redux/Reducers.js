import {products} from './products';

const Reducers=(cart=[],action)=>{

    if(action.type ==="ADD"){
    let tempCart=products;

    const alreadyAdded=cart.find((e)=>e.id===action.payload.id)?true:false
    console.log("alreadyAdded",alreadyAdded);
    if(alreadyAdded){
      let tempCart=cart;
      console.log("s",cart);
      let qty=tempCart.map((item)=>{
        if(item.id===action.payload.id){
            return{...item,quantity:item.quantity+1}
        }
       return item
      })
      return qty

    }
    else{
      var filteredCart=tempCart.filter((item)=>item.id === action.payload.id);
      if(filteredCart.length>0){
              return [...cart,action.payload]
          }
      else
          {
              return cart
          }

    }
    }

    if(action.type==="REMOVE"){
      return cart.filter((item)=>item.id !== action.payload.id);
   
    }
    if(action.type==="INCREASE"){
      let tempCart=cart;
      console.log("s",cart);
      let qty=tempCart.map((item)=>{
        if(item.id===action.payload.id){
            return{...item,quantity:item.quantity+1}
        }
       return item
      })
      return qty
    }
    if(action.type==="DECREASE"){
        let tempCart=cart;
        console.log("s",cart);
        let qty=tempCart.map((item)=>{
          if(item.id===action.payload.id){
            if(item.quantity>1){
                return{...item,quantity:item.quantity-1}
            }
          }
         return item
        })
        return qty
      }
    return cart
}
export default Reducers;