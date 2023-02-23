import { MigrationInterface, QueryRunner } from "typeorm";

export class demo1677142300199 implements MigrationInterface {
    name = 'demo1677142300199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "picture" ADD "url" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "picture" DROP COLUMN "url"`);
    }

}
