import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1675188222195 implements MigrationInterface {
    name = 'CreateUser1675188222195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Usuario\` (\`idUser\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`senha\` varchar(255) NOT NULL, \`criadoEm\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`atualizadoEm\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`idUser\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Usuario\``);
    }

}
