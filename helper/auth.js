const jwt = require("jsonwebtoken");

function verifyToken  (req,res, next) {

    const token = req.body.token || req.query.token || req.headers["token"];
    console.log("Token - ", token);
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        console.log('verification decord', decoded );
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports =  { verifyToken } 