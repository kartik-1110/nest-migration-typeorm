import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension'

export default class CreateUser implements Seeder {
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    const userRepository = dataSource.getRepository(User)

    const userData = {
      name: "Test User",
      email: "test@gmail.com"
    }

    const newUser = userRepository.create(userData)
    await userRepository.save(newUser)
  }

}