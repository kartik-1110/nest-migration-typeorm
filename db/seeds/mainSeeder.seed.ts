import { DataSource } from 'typeorm';
import { Seeder, runSeeders } from 'typeorm-extension';
import CreateProfile from './create-profile.seed';
import CreateUser from './create-user.seed';

/* This is the main seeder which runs all the seeders */
export class MainSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    await runSeeders(dataSource, { seeds: [CreateUser, CreateProfile] });
  }
}
