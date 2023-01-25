import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('Usuario')
class UserEntity {
  @PrimaryColumn({ name: 'idUser', type: 'int' })
  @Generated('increment')
  idUser: number;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'senha', nullable: false })
  password: string;

  @Column({ name: 'criadoEm' })
  created_at: Date;

  @Column({ name: 'atualizadoEm' })
  updated_at: Date;
}
export { UserEntity };
