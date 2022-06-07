const editValidation = (editValue, originValue) => {
   if (editValue === undefined) {
      editValue = originValue;
   }
   return editValue;
};

export default editValidation;
