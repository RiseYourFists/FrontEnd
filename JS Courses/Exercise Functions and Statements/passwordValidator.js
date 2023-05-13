function validatePassword(password){
    let lenValidation = isValidLen(password);
    let charValidation = isValidChars(password);
    let digitValidation = hasTwoOrMoreDigits(password);
    let errors = [];
  
    if(lenValidation !== true){errors.push(lenValidation)}
    if(charValidation !== true){errors.push(charValidation)}
    if(digitValidation !== true){errors.push(digitValidation)}
  
    if(errors.length > 0){
      errors.forEach(msg => {
        console.log(msg);
      });
      return;
    }
  
    console.log('Password is valid');
  
    function isValidLen(input){
      let len = input.length;
  
      if(len >= 6 && len <= 10){
        return true;
      }
  
      return "Password must be between 6 and 10 characters";
    }
  
    function isValidChars(input){
      const regex = /^[a-zA-Z0-9]+$/;
      if(regex.test(input)){
        return true;
      }
      return "Password must consist only of letters and digits";
    }
      
    function hasTwoOrMoreDigits(input){
        const regex = /\d\D*\d/;
        if(regex.test(input)){
          return true;
        }
        return "Password must have at least 2 digits";
    }
      
}
  
validatePassword('MyPass3');