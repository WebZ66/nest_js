import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//通过@Controller控制路由
@Controller('get')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
