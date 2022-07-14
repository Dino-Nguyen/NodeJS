// const loging = () => {
//     const time =new Date()
//     console.log("new req at " +  time.toLocaleTimeString())
// }
const loggerMdw = (req, res, next) => {
    const time =new Date()
    console.log("new req at logger " +  time.toLocaleTimeString())
    next()
}
module.exports = loggerMdw