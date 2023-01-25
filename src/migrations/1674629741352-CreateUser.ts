import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1674629741352 implements MigrationInterface {
    name = 'CreateUser1674629741352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Usuario\` (\`idUser\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`senha\` varchar(255) NOT NULL, \`criadoEm\` datetime NOT NULL, \`atualizadoEm\` datetime NOT NULL, PRIMARY KEY (\`idUser\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Usuario\``);
    }

}
