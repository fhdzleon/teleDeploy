const unknownEndpoint = (_request, reponse) => {
  reponse.status(400).send({ error: "Unknown route" });
};

const errorHandler = (error, request, response, next) => {
  if (error.name === "ValidatorError") {
    return response.status(400).json({ error: error.message });
  }
  if (error.name === "CastError") {
    return response.status(400).json({ error: error.message });
  }
  if (error.name === "JsonWebTokenError") {
    return response.status(400).json({ error: error.message });
  }
  if (error.name === "TokenExpiredError") {
    return response.status(401).json({
      error: "token expired",
    });
  }

  next(error);
};

const checkString = function(array){
  let flag = true
  for(let i=0; i<array.length; i++){
    if(array[i].includes('=') || array[i].includes(';') || array[i].includes("'") || array[i].includes('"')){
      flag = false;
    }
  }
  return flag;
}
const checkRegister = function(req,res,next){
  const {name,lastName,email,password,phone,gender,role} = req.body;
  if(!name || !lastName || !email || !password || !phone || !gender || !role){
    res.status(400).json({error:'empty fields!'});
  }
  else{
    if(typeof(phone) !== 'number' || typeof(name) !== 'string' || typeof(lastName) !== 'string' || typeof(email) !== 'string' || typeof(password) !== 'string'){
      res.status(400).json({error:'invalid format!'});
    }
    else{
      const verifyValues = checkString([name,lastName,email,password,gender,role]);
      if(verifyValues === false){
        res.status(400).json({error:'invalid format!'});
      }
      else{
        next();
      }
    }
  }
}

module.exports = {
    unknownEndpoint,
    errorHandler,
    checkRegister
  };