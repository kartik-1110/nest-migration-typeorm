import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './seeds/mainSeeder.seed';

/* Datasource options is used to configure postgtres with typeorm */
export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'migration',
  entities: ['src/**/entities/*.entity{.js,.ts}'],
  migrations: ['dist/db/migrations/*.js'],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
