import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Profile } from '../../src/profile/entities/profile.entity';

export default class CreateProfile implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    console.log('hit:::testing');

    const profileRepository = dataSource.getRepository(Profile);

    const profileData = {
      image1: 'tiger',
    };

    const newProfile = await profileRepository.create(profileData);
    await profileRepository.save(newProfile);
  }
}
