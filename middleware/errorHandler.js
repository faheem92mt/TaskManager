const errorHandlerMiddleware = (err,req,res,next)=> {
    console.log(err);
    return res.status(500).json({message: err.message})
    // return res.status(500).json({error:"Enter the name & Don't leave the field blank!"})
}

module.exports = errorHandlerMiddleware