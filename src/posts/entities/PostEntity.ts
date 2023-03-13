import { UserEntity } from 'src/users/entities/UserEntity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Publicacao')
class PostEntity {
  @PrimaryColumn({ name: 'idPost', type: 'int' })
  @Generated('increment')
  idPost: number;

  @Column({ name: 'titulo', nullable: false })
  title: string;

  @Column({ name: 'conteudo', nullable: false })
  body: string;

  @CreateDateColumn({ name: 'criadoEm' })
  created_at: Date;

  @UpdateDateColumn({ name: 'atualizadoEm' })
  updated_at: Date;

  @OneToOne(() => UserEntity, (user) => user.idUser)
  @JoinColumn({ name: 'idUser', referencedColumnName: 'idUser' })
  userId: UserEntity;
}
export { PostEntity };
