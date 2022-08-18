const initial = {
   data: [],
};

export default function reducer(state = initial, action) {
   switch (action.type) {
      case "WRITE_DATA": {

         return { ...state, data: action.payload};
      }

      default:
         return state;
   }
}
