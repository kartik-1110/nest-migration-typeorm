import { DataSource } from 'typeorm';
import { Seeder, runSeeder, SeederFactoryManager } from 'typeorm-extension'
import CreateUser from './create-user.seed';

export class MainSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        await runSeeder(dataSource, CreateUser)
    }

}