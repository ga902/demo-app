import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRoleTable1764419856327 implements MigrationInterface {
    name = 'CreateRoleTable1764419856327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "role_name" character varying(20) NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
