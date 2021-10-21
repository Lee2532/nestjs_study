import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
  getHello(): string {
    let os = require('os');
    let osname:string;
    if (os.type() == 'Darwin'){
      osname = 'mac';
    }
    else if (os.type() == 'Linux'){
      osname = 'linux';      
    }
    else if (os.type() == 'Windows_NT'){
      osname = 'Windows';      
    }
    else{
      osname = undefined
    }
    
    return `Hello ${osname} World!`;
  }
}
