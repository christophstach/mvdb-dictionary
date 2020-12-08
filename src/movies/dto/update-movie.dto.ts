import { ApiProperty } from '@nestjs/swagger';

export class UpdateMovieDto {
  @ApiProperty({ required: false, maxLength: 255 })
  title: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  picture: string;

  @ApiProperty({ required: false, minimum: 1 })
  duration: number;

  @ApiProperty({ required: false, minimum: 0 })
  stars: number;

  @ApiProperty({ required: false, default: new Date() })
  releaseDate: Date;
}
