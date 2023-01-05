import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('healthcheck')
export class AppController {
  @Get()
  public async healthcheck(@Res() res: Response) {
    return res.status(HttpStatus.OK).send();
  }
}
