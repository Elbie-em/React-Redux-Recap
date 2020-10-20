const { BUY_ICECREAM } = require("./iceCreamTypes");

const initialState = {
  numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
         if(state.numOfIceCreams > 0 ) {
           return {
             ...state, numOfIceCreams: state.numOfIceCreams - 1
           }
         }else{
           alert('Out of Stock')
           return state
         }
    default:
     return state
  }

}

export default iceCreamReducer;