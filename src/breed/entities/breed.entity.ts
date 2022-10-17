import { Cat } from 'src/cat/entities/cat.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  VersionColumn,
  OneToMany,
  Entity,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Breed {
  @PrimaryGeneratedColumn()
  id: string;

  @VersionColumn()
  version: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
