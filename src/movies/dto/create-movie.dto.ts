import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({ required: true, maxLength: 255 })
  title: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: true })
  picture: string;

  @ApiProperty({ required: true, minimum: 1 })
  duration: number;

  @ApiProperty({ required: true, minimum: 0 })
  stars: number;

  @ApiProperty({ required: true, default: new Date() })
  releaseDate: Date;
}
