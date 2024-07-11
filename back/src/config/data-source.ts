import {DataSource} from "typeorm";
import {Usser} from "../entity/userEntity";
import {Credential} from "../entity/credentialEntity";
import {Turn} from "../entity/turnEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Ageofultron123.",
    database: "demo",
    //dropSchema:true,
    synchronize: true,
    logging: false,//datos de la bd en consola
    entities: [Usser, Credential, Turn],
    subscribers: [],
    migrations: [],
});
export const dataBaseUser = AppDataSource.getRepository(Usser);
export const dataBaseCredential = AppDataSource.getRepository(Credential);
export const dataBaseTurn = AppDataSource.getRepository(Turn);