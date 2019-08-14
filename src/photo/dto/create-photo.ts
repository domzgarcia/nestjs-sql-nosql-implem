import { IsInt, IsString, IsBoolean, IsNumber, IsBooleanString } from 'class-validator';

export class CreatePhotoDto {
  // @IsInt()
  readonly id: number;
  // @IsString()
  readonly name: string;
  // @IsString()
  readonly description: string;
  // @IsString()
  readonly filename: string;
  // @IsInt()
  readonly views: number;
  // @IsBoolean()
  readonly isPublished: number; // boolean
}
