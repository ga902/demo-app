import { DataSource } from "typeorm";


export const AppDataSource =new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"postgres",
    database:"user_data",
    entities: ["src/**/*.entity.ts", "src/**/*.entity.js"],
    migrations:["src/migration/**/*.ts"],
    synchronize:true
}) 