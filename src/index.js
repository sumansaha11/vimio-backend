import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
});

var port;
connectDB()
.then(() => {

    app.on("error", (error) => {
        console.log("ERROR! : ",error);
        throw error;
    })

    app.listen(port = process.env.PORT || 3000, () => {
        console.log(`\nServer is running at PORT: http://localhost:${port}\n`)
    })
})
.catch((err) => {
    console.log("MongoDB connection Failed! : ",err);
})