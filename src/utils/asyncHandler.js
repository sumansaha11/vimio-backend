const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
        await Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
    }
};

export { asyncHandler };







// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

// export {asyncHandler}