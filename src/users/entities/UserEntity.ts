import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Usuario')
class UserEntity {
  @PrimaryColumn({ name: 'idUser', type: 'int' })
  @Generated('increment')
  idUser: number;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'senha', nullable: false })
  password: string;

  @CreateDateColumn({ name: 'criadoEm' })
  created_at: Date;

  @UpdateDateColumn({ name: 'atualizadoEm' })
  updated_at: Date;
}
export { UserEntity };
