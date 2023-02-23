import { User } from "../src/users/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from 'typeorm-extension'
import { MainSeeder } from "./seeds/mainSeeder.seed";

/* Datasource options is used to configure postgtres with typeorm */ 
export const dataSourceOptions: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'migration',
    entities: ["src/**/entities/*.entity{.js,.ts}"],
    migrations: [__dirname + '/db/migrations/*.js'],
    /* TODO: To be implemented with factories */ 
    // factories: ["./factories/*.factory{.js,.ts}"],
    seeds: [MainSeeder]
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource