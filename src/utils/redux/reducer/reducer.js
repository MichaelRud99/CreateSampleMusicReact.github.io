const initial = {
   data: [],
};

export default function reducer(state = initial, action) {
   // eslint-disable-next-line default-case
   switch (action.type) {
      case "WRITE_DATA": {
         return { ...state, data: action.payload };
      }

      default:
         return state;
   }
}
