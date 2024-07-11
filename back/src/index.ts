import {PORT} from "./config/envs";
import app from "./server";
import "reflect-metadata";
import {AppDataSource} from "./config/data-source";
const Puerto: number = Number(PORT) || 3004;

AppDataSource.initialize()
.then((res) =>{
    console.log("connecting to DataBase");
    app.listen(Puerto, ()=>{//coreegir PORT
        console.log( `server listening on port ${Puerto}`)
    });
});
