import { DataSource, DataSourceOptions } from "typeorm";
import {SeederOptions} from 'typeorm-extension'
import { MainSeeder } from "./seeds/mainSeeder.seed";

export const dataSourceOptions: DataSourceOptions & SeederOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'migration',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    seeds: [MainSeeder]
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource