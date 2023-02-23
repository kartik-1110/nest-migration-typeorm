import { User } from "src/users/entities/user.entity";
import { MigrationInterface, QueryRunner } from "typeorm"

export class demo11676962919610 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const productRepo = queryRunner.connection.getRepository(User);

        await productRepo.insert([
            {
                name: 'User 101',
                email: "User101@gmail.com",
                role: "USER"
            },
            {
                name: 'User 202',
                email: "User202@gmail.com",
                role: "USER"
            },
            {
                name: 'User 303',
                email: "User303@gmail.com",
                role: "USER"
            },
            {
                name: 'User 404',
                email: "User404@gmail.com",
                role: "ADMIN"
            },
            {
                name: 'User 5555',
                email: "User4555@gmail.com",
                role: "ADMIN"
            }
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
