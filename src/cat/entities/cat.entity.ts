import { Expose, Transform } from 'class-transformer';
import { Bounty } from 'src/bounty/entities/bounty.entity';
import { Breed } from 'src/breed/entities/breed.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  VersionColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: string;

  @VersionColumn()
  version: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @ManyToMany(() => Bounty)
  @JoinTable()
  bouties: Bounty[];

  @ManyToOne(() => Breed, (Breed) => Breed, {
    eager: true,
  })
  @JoinColumn()
  breed: Breed;
}
