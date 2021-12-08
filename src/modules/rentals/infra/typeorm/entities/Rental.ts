import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity()
export class Rental {
  @PrimaryColumn()
  id: string;

  @Column()
  car_id: string;

  @Column()
  user_id: string;

  @Column({ default: 'now()' })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column()
  expected_return_date: Date;

  @Column({ nullable: true })
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
