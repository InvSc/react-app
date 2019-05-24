// let const

// {
//     let name = 'immoc'
// }
// console.log(name)
// const name =  'imooc'
// name = 'woniu'
// console.log(name)





//string
// name = 'imooc'
// course = 'React开发App'
// console.log('hello ' + name + ', course is ' + course)
// console.log(`hello ${name}, course is ${course}`)//先进的es6写法
//
// console.log(
//     `
//     dasdasdas
//     dasd
//     sda
//     `
// )//反引号支持多行字符串




// function hello(name) {
// //     console.log(`hello ${name}`)
// //
// // }
// // const hello1 = (name)=>{
// //     console.log(`hello ${name}`)
// // }
// //
// // hello('imooc')
// // hello1('imooc')


// setTimeout(()=>{
//     console.log('xxx')
// },1000)

// const double = x=>x*2//函数体只有一个表达式可以简写
// console.log(double(5))

// function function_name(argument) {
//  	// body...
//  } hello = (name='imooc')=>{
// 	console.log(`hello ${name}!`)
// }
// hello()
// hello('woniu')
// 
// 

// function hello(name1,name2){
// 	console.log(name1,name2)
// }
// let arr = ['imooc','woniu']
// // hello.apply(null,arr)
// hello(...arr)


//object

// const obj = {name:'imooc', course:'React开发App'}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// const name = 'imooc'
// const obj = {
// 	name,
// 	[name]:'hello',// 这个name的写法称为计算属性
// 	hello:function(){

// 	},
// 	hello1(){

// 	}//function可以直接省略
// }
// // obj[name] = 'hello imooc'
// console.log(obj)
// 
// 
// const obj1 = {name:'imooc', course:'React开发App'}
// const obj2 = {type:'IT', name:'woniu'}
// console.log({...obj1, ...obj2, date:'2017'})
//第二个name会把第一个覆盖掉
//
//
//
// 解构赋值


// const arr = ['hello', 'imooc']

// let arg1 = arr[0]
// let arg2 = arr[1]

// let [arg1,arg2] = arr
// console.log(arg1, '|', arg2)

// const obj = {name:'imooc', course:'React开发App'}
// const {name, course} = obj
// console.log(name, '|', course)
// 
// 
// 类
// 
// class MyApp{
// 	constructor(){
// 		this.name = 'imooc'
// 	}
// 	sayHello(){
// 		console.log(`hello ${this.name}!`)
// 	}
// }

// const app = new MyApp()
// app.sayHello()
// 
// 
// 
// 
/*set：是一个集合，类似于数组，与数组的主要区别是没有重复的元素。主要的作用可以进行去重。
 * 重点:一个属性，四个方法
 1、size属性：返回set数组的长度，类似于lenght
 2、四个方法：add,delete,clear,has*/
 
// let set =new Set([1,2,3,4,1]);
// console.log(set.size); //4
// //添加元素
// set.add(7);  
// console.log(set); // {1, 2, 3, 4, 7}
// //删除数组中的某个元素
// set.delete(3);
// console.log(set); // {1, 2, 4, 7}
// //检测数组中是否含有某个元素，返回值为布尔
// console.log(set.has(2)); //true
// //清空数组
// set.clear();
// console.log(set) //{}




// let obj={a:1};
// const map = new Map([
//     ['name','java'],
//     ['feel','今天天气贼好'],
//     ['jieguo','适合看帅哥'],
//     [obj,'是!']
// ]);
// //{"name" => "java", "feel" => "今天天气贼好", "jieguo" => "适合看帅哥", {…} => "是!"}
// console.log(map);  
 
    /*Map与Object的区别
     1、Map的size属性可以直接获取键值对个数
     2、两者都是对应的keys-value键值对，
        但是Object的keys只能是字符串或者 Symbols，
        Map的key可以是任意值，比如数组、对象等*/
 
 
    /*map方法：
         1、size：返回键值对长度
         2、set:设置键值对
         3、get:获取对应的value值
         4、delete:删除对应的键值对
         5、clear:清空map
         6、has:查看是否有对应的键值对，返回值为布尔*/
 
    // 对应代码：
// console.log(map.size);   //4    
// map.set('shia','怎么了');   //设置键值对
// console.log(map.get('shia')); //返回对应的value值
// console.log(map.delete('shia'));
// console.log(map.has('shia'));
// console.log(map.has(obj));
// map.clear()
// console.log(map);
// 
// 
// 
// 
// import * as mod1 from './moudle1.js';
// console.log(mod1)
// console.log(name)
// sayHello()

// 数组
// let arr;
// arr = [1, 2, 3];
// // 映射新数组
// console.log(arr.map(function (v) {
//     return v**2
// }));
// console.log(arr.map(value => value * 2));
// // 遍历数组
// [1, 2, 3].forEach((function (value) {
//     console.log(value)
// }));
//
// //
// console.log([1, 2, 3, 4].every(value => value > 2 ));
// console.log([1, 2, 3, 4].some(value => value > 2 ));
// console.log([1, 2, 3, 4].filter(value => value > 2 ));
//
//
// let arr1 = [{name:'feel', age:18}, {name:'rocket', age:1}];
// console.log([1, 2, 3].indexOf(2));
// let arr2 = [1, 2, 3];
// let arr3 = [4, 5, 6];
// console.log([...arr2, ...arr3]);
//
// // 数组去重
// let arr4 = [1, 2, 4, 4, 2];
// console.log([...new Set(arr4)]);

