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
  for(let i=0; i<array.length; i++){
    if(array[i].includes('$') || array[i].includes('$eq') || array[i].includes("$ne") || array[i].includes('$gt')){
      return false;
    }
  }
  return true;
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
      if(checkString([name,lastName,email,password,gender,role]) === false){
        res.status(400).json({error:'invalid format!'});
      }
      else{
        next();
      }
    }
  }
}

const checkLogin = function(req,res,next){
  const {email,password} = req.body;
  if(!email || !password){
    res.status(400).json({error:'empty fields!'});
  }
  else{
    if(typeof(email) !== 'string' || typeof(password) !== 'string'){
      res.status(400).json({error:'invalid fromat!'});
    }
    else{
      if(checkString([email,password]) === false){
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
    checkRegister,
    checkLogin
  };