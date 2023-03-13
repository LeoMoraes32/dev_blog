import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePost1678393968210 implements MigrationInterface {
    name = 'CreatePost1678393968210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Publicacao\` (\`idPost\` int NOT NULL AUTO_INCREMENT, \`titulo\` varchar(255) NOT NULL, \`conteudo\` varchar(255) NOT NULL, \`criadoEm\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`atualizadoEm\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`idUser\` int NULL, UNIQUE INDEX \`REL_6393aed0927c7ea5866d4f5210\` (\`idUser\`), PRIMARY KEY (\`idPost\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Publicacao\` ADD CONSTRAINT \`FK_6393aed0927c7ea5866d4f5210b\` FOREIGN KEY (\`idUser\`) REFERENCES \`Usuario\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Publicacao\` DROP FOREIGN KEY \`FK_6393aed0927c7ea5866d4f5210b\``);
        await queryRunner.query(`DROP INDEX \`REL_6393aed0927c7ea5866d4f5210\` ON \`Publicacao\``);
        await queryRunner.query(`DROP TABLE \`Publicacao\``);
    }

}
