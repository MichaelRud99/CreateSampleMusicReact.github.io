const validationText = (value) => {
    if (value === "" || value === undefined) {
       return false;
    }
    const re =
       /^[`'а-яА-ЯёЁa-zA-Z0-9\s]+[`а-яА-ЯёЁa-zA-Z0-9]{1}$/;
    const valid = re.test(value);
    return valid;
 };
 
 export default validationText;