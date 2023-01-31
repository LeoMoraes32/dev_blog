import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('healthcheck')
export class AppController {
  @Get()
  public async healthcheck(@Res() res: Response) {
    console.log('deu bom');
    return res.status(HttpStatus.OK).send('Tudo Okay');
  }
}
