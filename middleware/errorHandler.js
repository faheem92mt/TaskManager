const errorHandlerMiddleware = (err,req,res,next)=> {
    return res.status(500).json({error:"Enter the name & Don't leave the field blank!"})
}

module.exports = errorHandlerMiddleware