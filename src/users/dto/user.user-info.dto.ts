import { ApiProperty } from '@nestjs/swagger';

export class UserInfoDto {
  @ApiProperty({ 
    description: '이름',
    example: 'admin',
    required:false
   })
  readonly username: string;

  @ApiProperty({ 
    description: '비밀번호',
    example: "admin"    
   })  
  readonly password: string;

}