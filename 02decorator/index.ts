import axios from 'axios'
const Get = (url: string) => {
  //定义装饰器工厂，因为方法装饰器第一个参数是原型对象，第二个是方法名，第三个是描述符，不支持用户自己传入数据
  //装饰器工厂本质上是函数柯里化。第一个函数接受传的参数，第二个函数才是装饰器函数
  console.log('第一个函数')
  return (target: any, key: any, descriptor: PropertyDescriptor) => {}
}

class Controller {
  constructor() {}

  @Get('http://localhost:9000')
  getList(res: any, status: any) {
    console.log(res)
  }
}
