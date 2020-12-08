import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return this.movieRepository.save({
      ...createMovieDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  findAll() {
    return this.movieRepository.find();
  }

  findOne(id: string) {
    return this.movieRepository.findOneOrFail(id);
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    await this.movieRepository.update(id, {
      ...updateMovieDto,
      updatedAt: new Date(),
    });
    return this.movieRepository.findOneOrFail(id);
  }

  async remove(id: string) {
    const movie = await this.movieRepository.findOneOrFail(id);
    await this.movieRepository.delete(id);

    return movie;
  }
}
