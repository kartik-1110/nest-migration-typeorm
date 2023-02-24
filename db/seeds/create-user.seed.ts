import { User } from '../../src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export default class CreateUser implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    console.log('hit:::testing');

    const userRepository = dataSource.getRepository(User);

    const userData = {
      name: 'Test 999',
      email: 'test999@gmail.com',
      role: 'USER',
    };

    const newUser = await userRepository.create(userData);
    await userRepository.save(newUser);
  }
}
