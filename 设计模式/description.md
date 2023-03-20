# 设计模式学习

## 反模式: 正确设计模式的错误应用

## 创建型设计模式：
创建型设计模式专注处理对象创建机制，以适合给定情况的方式来创建对象

### Constructor 构造器模式
可以简单理解为在创建对象时默认执行一系列操作的模式
未使用设计模式代码
```
const VW_GTI = {} // const Car = new Object(); 
VW_GTI.name = 'Golf GTI'
VW_GTI.version = '2021'
VW_GTI.manufacturers = 'VW'
VW_GTI.show = function () { alert(this.name) }

const AMG_A45 = {}
AMG_A45.name = 'A45'
AMG_A45.version = '2021'
AMG_A45.manufacturers = 'Benz_AMG'
AMG_A45.show = function () { alert(this.name) }
```
在经过该设计模式包装后代码
```
function Car(name, version, manufacturer) {
	this.name = name
	this.version = version
	this.manufacturer = manufacturer
	this.show = () => alert(this.name)
}

const VW_GTI = Car('Golf GTI', '2021', 'VW')
const AMG_A45 = Car('A45', '2021', 'BENZ_AMG')
```
### Singleton 单例模式
### Observer 观察者模式
结构型设计模式：

行为设计模式： 