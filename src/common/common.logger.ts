import { Request, Response, NextFunction } from 'express';
import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import { Get } from '@nestjs/common';

export function logger(req: Request, res: Response, next: NextFunction) {
  
  console.log('log start')
  
  
  console.log('log end');
  next();
};