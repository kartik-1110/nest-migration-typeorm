import { DataSource } from 'typeorm';
import { Seeder, runSeeder, SeederFactoryManager } from 'typeorm-extension'
import CreateUser from './create-user.seed';

/* This is the main seeder which runs all the seeders */ 
export class MainSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        await runSeeder(dataSource, CreateUser)
    }

}