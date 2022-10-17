import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  VersionColumn,
  Entity,
} from 'typeorm';

@Entity()
export class Bounty {
  @PrimaryGeneratedColumn()
  id: string;

  @VersionColumn()
  version: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @Column()
  reward: number;

  @Column()
  contact: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
