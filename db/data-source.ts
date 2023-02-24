import { User } from "../src/users/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from 'typeorm-extension'
import { MainSeeder } from "./seeds/mainSeeder.seed";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Profile } from "../src/profile/entities/profile.entity";


/* Datasource options is used to configure postgtres with typeorm */ 
export const dataSourceOptions: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'migration',
    /* used for seeding */ 
    entities: ["src/**/entities/*.entity{.js,.ts}"],
    /* used for migration */ 
    // entities: ['dist/**/*.entity.js'],
    /* testing */ 
    // entities: ["{src,dist}/**/**/*.entity{.js,.ts}"],
    migrations: ['dist/db/migrations/*.js'],
    seeds: [MainSeeder]
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource