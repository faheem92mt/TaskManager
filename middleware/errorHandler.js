const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err,req,res,next)=> {
    // console.log(err);
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({message: err.message})    
    }
    return res.status(500).json({message: 'something went wrong, please try again'})    
    // return res.status(500).json({error:"Enter the name & Don't leave the field blank!"})
}

module.exports = errorHandlerMiddleware