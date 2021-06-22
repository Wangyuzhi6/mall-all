const dev =require('./webpack.dev.js')
const prod=require('./webpack.prod.js')
module.exports=process.NODE_DEV==='production' ? prod :dev