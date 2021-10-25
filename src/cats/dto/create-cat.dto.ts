import { ApiProperty } from '@nestjs/swagger';


export class CreateCatDto {
  @ApiProperty({ description: 'ID' })
  readonly id: number;
  @ApiProperty({ description: '이름' })
  readonly name: string;
  @ApiProperty({ description: '나이' })
  readonly age: number;
  @ApiProperty({ description: '품종' })
  readonly breed: string;
}