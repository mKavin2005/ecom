const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    // const token = req.header('Authencation').replace("Bearer"," ")
    const token = req.header("Authorization").split(" ")[1];
    if(!token) return res.status(401).json({error: "Token required"});
    try{
        const decoded = jwt.verify(token, "secret_key");
        req.user = decoded.user;
        next();
    }catch(err){
            res.status(401).json({error: "Invalid Token"});
    }
};

module.exports = auth;