import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1685623326970 implements MigrationInterface {
    name = 'CreateTableUser1685623326970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(127) NOT NULL, "email" character varying(127) NOT NULL, "password" character varying(60) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(11) NOT NULL, "birthdate" character varying(8) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
