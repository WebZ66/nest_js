class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
}
/* class B {
  a: any
  constructor() {
    this.a = new A().name
  }
}

class C {
  a: any
  constructor() {
    this.a = new A().name
  }
} */
/* 创建 B、C必须依赖A类，这是高耦合的，所以就出现了IOC、DI依赖注入，解决高耦合问题 */

class D {
  name: string
  constructor(name: string) {
    this.name = name
  }
}
/* 创建一个容器来收集引用 */
class Container {
  mo: any
  constructor() {
    this.mo = {}
  }
  provide(key: string, mo: any) {
    this.mo[key] = mo
  }
  get(key: string) {
    return this.mo[key]
  }
}

const mo = new Container()
mo.provide('a', new A('a'))
mo.provide('c', new A('c'))

class B {
  a: any
  c: any
  constructor(mo: Container) {
    this.a = mo.get('a')
    this.c = mo.get('c')
  }
}
