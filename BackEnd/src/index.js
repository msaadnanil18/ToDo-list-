

import dotenv from "dotenv"
import { app } from "./app.js"


dotenv.config({
    path:'./.env'
})

app.listen(process.env.PORT || 6000, () => {
    console.log(`server is ready: ${process.env.PORT}`)

})