import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  picture: string;

  @Column()
  duration: number;

  @Column({ type: 'float' })
  stars: number;

  @Column()
  releaseDate: Date;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
