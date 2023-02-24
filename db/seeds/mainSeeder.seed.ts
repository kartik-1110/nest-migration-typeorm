import { DataSource } from 'typeorm';
import { Seeder, runSeeders, SeederFactoryManager } from 'typeorm-extension'
import CreateProfile from './create-profile.seed';
import CreateUser from './create-user.seed';

/* This is the main seeder which runs all the seeders */ 
export class MainSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        await runSeeders(dataSource, {seeds: [CreateUser, CreateProfile]})
    }

}