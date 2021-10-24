import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({default: ''})
  bio: string;

  @Column({default: ''})
  image: string;

  @Column()
  password: string;

  @CreateDateColumn({type : 'date'})
  create_date: Date;

  @UpdateDateColumn({type : 'date', nullable : true})
  update_date:Date;

  @Column({type : 'date', nullable : true})
  last_login_date:Date;
}