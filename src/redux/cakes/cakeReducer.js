const { BUY_CAKE } = require("./cakeTypes")

const initialState = {
  numOfCakes: 10,
}

const cakeReducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE:
      if(state.numOfCakes > 0){
        return {...state,
          numOfCakes : state.numOfCakes - 1}
      }else{
        alert('No stock Availale');
      }
    default:
      return state
  }
}

export default cakeReducer