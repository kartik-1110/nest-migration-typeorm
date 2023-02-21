import { User } from "src/users/entities/user.entity";
import { MigrationInterface, QueryRunner } from "typeorm"

export class test1676890233674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const productRepo = queryRunner.connection.getRepository(User);

        await productRepo.insert([
            {
                id: 1,
                name: 'User 1',
                email: "User1@gmail.com"
            },
            {
                id: 2,
                name: 'User 2',
                email: "User2@gmail.com"
            },
            {
                id: 3,
                name: 'User 3',
                email: "User3@gmail.com"
            },
            {
                id: 4,
                name: 'User 4',
                email: "User4@gmail.com"
            }
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
