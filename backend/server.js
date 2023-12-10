const app = require("./app") ;
require("dotenv").config({path:"backend/config/config.env"}) ;
const PORT = process.env.PORT || 3001 ;



app.listen(PORT,()=>{
    console.log(`Server has started on https://localhost:${PORT}`)
})