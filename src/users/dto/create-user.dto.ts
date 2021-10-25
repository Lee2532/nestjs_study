import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ 
    description: '이름',
    example: 'admin',
    required:false
   })
  readonly username: string;

  @ApiProperty({ 
    description: '이메일',
    example: "admin@admin.com"    
   })
  readonly email: string;

  @ApiProperty({ 
    description: '비밀번호',
    example: "1234"    
   })  
  readonly password: string;
}