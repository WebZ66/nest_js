import { Injectable } from '@nestjs/common';

/* service主要来写业务逻辑 */
@Injectable()
export class AppService {
  getHello(): string {
    return '帅气!';
  }
  getXiaoMan(): string {
    return '小满';
  }
}
