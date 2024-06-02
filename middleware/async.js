const asyncWrapper = (fn) => {
    return async (req,res,next) => {
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error)
        }
        // console.log("-----------");
        // console.log(req.url);
        // console.log(req.method);
    }
}

module.exports = asyncWrapper