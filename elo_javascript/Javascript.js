



let num = 21;

let array_1 = [2, 3, 5, 7,
	11, 13, 17, 19,
	23, 29,
	31, 37,
	41, 43, 47,
	53, 59,
	61, 67,
	71, 73, 79,
	83, 89,
	97]

let txt = false;
function fun(value, index, array) {
	txt = txt || num === value;
}

array_1.forEach(fun);
console.log(txt);

function isPrimeNumber(num) {
	let array_1 = [2, 3, 5, 7,
		11, 13, 17, 19,
		23, 29,
		31, 37,
		41, 43, 47,
		53, 59,
		61, 67,
		71, 73, 79,
		83, 89,
		97]

	let txt = false;
	function fun(value, index, array) {
		txt = txt || num === value;
	}

	array_1.forEach(fun);
	console.log(txt);
}

isPrimeNumber(5)

1215

// Presentation Error	62907
// Accepted	58430
// Compile Error	57931
// Wrong Answer	35377
// Runtime Error	704
// Time Limit Exceeded	496
// Output Limit Exceeded	288
// Runtime Error	196
// System Error	52
// Waiting	39
// Memory Limit Exceeded	30

// Presentation Error
// Runtime Error
// Wrong Answer
// Compile Error
http://noi.openjudge.cn/ch0101/02/submit/

let a = require('http');
let b = a.split(" ")
console.log(b[1])

let a = process.stdin.resume();
let b = a.split(" ")
console.log(b[1])


// Include Modules
// To include a module, use the require() function with the name of the module:

// var http = require('http');
// Now your application has access to the HTTP module, and is able to create a server:

http.createServer(
	function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end('Hello World!');
	}
).listen(8080);
req == require
res == response

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var arr = [];
process.stdin.on('data', function (data) {
	var number = data.slice(0, -1);
	if (number == 'end') {
		process.stdin.emit('end');
	} else {
		arr.push(number);
	}
});
process.stdin.on('end', function () {
	console.log(arr);
});

function add(a, b) {
	return a + b
}


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on('line', function (line) {
	const tokens = line.split(' ');
	console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});

https://ac.nowcoder.com/acm/contest/5652/
A + B


let a = require('http');
let b = a.split(" ")
console.log(b[1])

n = prompt()
// a = if (n > 0) 5 else 4

// if else , 格式，多重嵌套格式
// if (false) console.log(2)
// console.log(3)

// console.log 里面的所有符号要加引号！！！！
// + " " +

// let n = +prompt(),
// arr = []
// for (let i = 0; i < n; i++) 
// arr.push(+prompt())
// console.log( (eval(arr.join('+')) / n).toFixed(2) )

// 	No NOT use eval()
// Executing JavaScript from a string is an BIG security risk.

// With eval(), malicious code can run inside your application without permission.

// With eval(), third - party code can see the scope of your application, whitch can lead to possible attacks.
//Fibonacci
var x = 0;
var y = 1;
var z;
var fib = []; // Initialize array!
fib[0] = 0;
fib[1] = 1;

for (i = 2; i <= 10; i++) {
	console.log(x + y);
	fib[i] = x + y;
	x = y;
	z = y;
}

//yangl
var N = Number(prompt('灯数'))
var M = Number(prompt('人数'))
for (n = 1; n <= N; n++) { //第n个灯
	var k = 1 //表示灯开关，1开，-1关
	for (m = 1; m <= M; m++) { //第m个人，若灯的编号为这个人的倍数，即
		if (n % m == 0) {
			k *= -1
		}
	}
	if (k == -1) {
		alert(n)
	}
}

//44:第n小的质数
var n = Number(prompt())
var x = 1
var a = 0
for (i = 1; ; i++) { //i迭代每一个自然数
	x = 1
	for (k = 1; k < i; k++) {
		if (i % k == 0) {
			x++
		}
	}
	if (x == 2) {
		a++
	}
	if (a == n) {
		break   // a为计数器，当a等于输入n时，得到第n小质数i
	}
}
console.log(i)
//这个思路也太乱了而且运行速度慢

// 平方和公式,迭代自己,n正整数
function sumOfSquare(n) {
	if (n % 1 != 0 || n < 0) { return "Error,need positive integers" }
	if (n == 0) { return 0 }
	else return (sumOfSquare(n - 1) + n * n)
}
// return (sumOfSquare(n-1) + n*n)
// 当n=0在if里面时，等价于 if (false),所以最后
// return (sumOfSquare(0-1) + 0*0) 
// "****"+0 == "****0"
// if(0) console.log(0)
// else console.log(1) // if false,1

//https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
function test_prime1(n) {

	if (n === 1) {
		return false;
	}
	else if (n === 2) {
		return true;
	} else {
		for (let x = 2; x * x <= n; x++) {
			if (n % x === 0) {
				return false;
			}
		}
		return true;
	}
}
// new testment
function test_prime2(n) {
	// let array = new Array()
	// array[0] = 0
	let array = [2, 3, 5, 7] //,11,13,17,19,23
	if (n === 1) {
		return false;
	}
	else if (n === 2 || n === 3 || n === 5 || n === 7) {
		return true;
	} else {
		// for (let x = 2; x*x <= n; x++) {
		// 	if (n % x === 0) {
		// 		return false;
		// 	}
		// }
		// for (let i = 1; i <= array.length - 1; x++) {

		// }
		// return true;
	}
}
// function newPrimeArray(n)
// 创建一个质数小于等于n的质数数组
console.log(test_prime(37));

// function newPrimeArray(n) { // n>=2
// 	let array = [2]
// 	if (n = 2) 
// }

function isPrime(num) {
	for (var i = 2; i * i <= num; i++)
		if (num % i === 0) return false;
	return num > 1; // 1 时不是素数
}
function primeArray(n) {
	let array = []
	for (let i = 2; i <= n; i++)
		if (isPrime(i)) { array.push(i) }
	return array
}

1221
function factorial(n) {
	if (n == 1) return 1
	else return factorial(n - 1) * n
}
function qiao7(n) {
	n = n.toString()
	if (n % 7 == 0) return true
	for (i = 0; i < n.length; i++) {
		if (n[i] == 7) return true
	}
	return false
}

function fibb(n) {
	// 1,1,2,3,5,8
	if (n == 1 || n == 2) { return 1 }
	if (n > 35) { return "error\n n too large! try other function" }
	return fibb(n - 1) + fibb(n - 2) // n>30 后太慢，cpu吃不消
	//应该用数组迭代而不是自身迭代
}
// "\n" 必须在console.log里面
function fibonacci(n, y) {
	// var i;
	var fib = []; // Initialize array!
	fib[0] = 0;
	fib[1] = 1;
	for (i = 2; i <= n; i++) {
		// Next fibonacci number = previous + one before previous
		// Translated to JavaScript:
		fib[i] = fib[i - 2] + fib[i - 1];
		// console.log(fib[i]);
	}
	if (y == "y") console.log(fib)
	return fib[n]
}
// 局部绑定覆盖全局绑定
let a = 1
{
	let a = 2
	console.log(a)
	a = 3
	console.log(a)
}
console.log(a)
// 2
// 3
// 1
// adblock.fullimg
{Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': 'img[class=""fullimg]' is not a valid selector.
    at HTMLDocument.querySelectorAll(<anonymous>)
	at chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/adblock-datacollection-contentscript.js:53:42
	}
	for (const element of document.querySelectorAll(selector)) {
	// Only consider selectors that actually have an effect on the
	// computed styles, and aren't overridden by rules with higher
	// priority, or haven't been circumvented in a different way.
	if (getComputedStyle(element).display === 'none') {
		matchSelectors.push(selector)
	}
}}
//</anonymous>)
	// 1222

	// 1223

	// 1224

	function fibonacci(n) {
		let sqrt5 = Math.sqrt(5)
		let a = (1 + sqrt5) ** n
		let b = (1 - sqrt5) ** n
		return (a - b) / sqrt5
	}
	fibonacci(5)
	function repeatConsoleLog(n) {
		for (let i = 0; i < n; i++) {
			console.log(i)
		}
	}
	repeatConsoleLog(5)
	function test(n) {
		var x = 5
	}
	test()

	//1225

	function sqrt(n) {
		let a = 0
		let b = 0 //n == a*a +b
		for (i = 0; i * i < n; i++) { }
		if (i * i == n) { return i }
		else a = (i - 1), b = n - a * a;
		// console.log(a, b) // will be used in debug 
		let sqrt = a + b / a
		let cishu = 15 // 迭代15次，精度,以后可修改
		for (let i = 0; i < cishu; i++) {
			sqrt = a + b / (a + sqrt)
		}
		return sqrt
	}
	// 递归次数？还是循环？
	// declare一个递归用函数
	// function sqrtab(a, b) {
	// 	return a + b / a
	// }

	// console.clear()
	// for(let i = 1;i<=50;i=i+1){
	//     console.log(
	//         (i+1)/2-Math.sqrt(i)
	//     )
	// }
	// i>1时 差单调递增
	// 二分法算square root
	function sqrt(n) {
		let left = 0
		let right = n
		let mid = (left + right) / 2
		while (mid * mid) {

		}
	}
}

//1229
function indexOf(array, value) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value)
			return i
	}
	return -1
}

// 0114, page 59
let log = console.log  // shortcut

function repeat(n) {
	return (action) => {
		for (let i = 0; i < n; i++) {   // i = 0,1,2,3,4
			action(i)
		}
	}
}                 // get any funcion that do (action) n times

let repeat5 = repeat(5) //get 5 action function
repeat5(console.log)

/// 0116
/// 上述函数修改，对数组foreach
/// 
[1, 2, 3].forEach(() => !)
[1, 2, 3].forEach((f) => console.log(!f))

//0118

let rabbit = {};
let speak = (line) => {
	console.log(
		`The ${this.type} rabbit says ${line}`
	)
}

let whiteRabbit = {
	type: "white",
	speak
}
whiteRabbit.speak("line")

var chuyueye = () => {
	return {     // an object
		chunk: chunk
	}
}() // auto calling // Uncaught SyntaxError: Unexpected token '('

var chuyueye = function () {
	return {     // an object
		chunk: chunk
	}
}() // auto calling // Uncaught ReferenceError: chunk is not defined

function fun(n, o) {
	console.log(o)
	return {
		fun: function (m) {
			return fun(m, n);
		}
	}
}

//0122

str = `num,name,score
1,张三,78
2,李四,89
3,五王,87
4,赵六,67`

let parseCsv = (csvStr) => {
	let lines = csvStr.split('\n')
	let firstline = lines.shift()

	let headers = firstline.split(',')
	console.log(lines, firstline, headers)
	var result = []
}
parseCsv(str)


let str = "ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=a&oq=a&rsv_pq=a13403160011dc53&rsv_t=657fAJtWz8DZmrjd%2B8iYlErIdH9hvBPAfcphH0J0oklAsHi6Tkj4iB2z6eY&rqlang=cn&rsv_dl=tb&rsv_enter=1&rsv_sug2=0&rsv_btype=t&inputT=414&rsv_sug4=414"

let parseBaiduUrl = function (srt) {
	let pairs = srt.split('&')
	let obj = {}
	pairs.forEach(
		function (pair) {
			let parts = pair.split('=')
			// let key = parts[0]
			// let value = parts[1]
			// obj[key] = value
			obj[parts[0]] = parts[1]
		}
	)
	return obj
}(str)

{
	"ie": "utf-8",
		"f": "8",
			"rsv_bp": "1",
				"tn": "baidu",
					"wd": "a",
						"oq": "a",
							"rsv_pq": "a13403160011dc53",
								"rsv_t": "657fAJtWz8DZmrjd%2B8iYlErIdH9hvBPAfcphH0J0oklAsHi6Tkj4iB2z6eY",
									"rqlang": "cn",
										"rsv_dl": "tb",
											"rsv_enter": "1",
												"rsv_sug2": "0",
													"rsv_btype": "t",
														"inputT": "414",
															"rsv_sug4": "414"
}

let f = function () {
	return function () {

		return function () {


			return 2
		}
	}
}
f()()()

// 0123

function qw(aa, bb) {
	console.log(aa);
	console.log(bb)
}
qw(, 1)
// Uncaught SyntaxError: Unexpected token ','

let dog = {
	name: "旺财",
	sayName() {
		console.log("我是" + this.name)
	}
}
dog.sayName()
let cat = {
	name: "miaomiao",

}
cat.sayName = dog.sayName
cat.sayName()

let fun = dog.sayName.bind(cat)

// 0124
function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {          // test() IS TRUE
			passed.push(element);
		}
	}
	return passed;
}

SCRIPTS.filter(s => s.direction == "ttb");
SCRIPTS.filter(s => s.living);

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]

map(SCRIPTS.filter(s => !s.living), s => s.name);
SCRIPTS.filter(s => !s.living).map(s => s.name);

// 0125




class HashTable2 {

	constructor() {
		this.mapKeys = Array(32)
		this.mapVals = Array(32)
	}

	// 通过映射的key计算出一个整数
	// 期望的目标是对不同的字符串都计算出不同的值
	hashCode(key) {
		var hash = 131313131
		var seed = 131
		for (var i = 0; i < key.length; i++) {
			hash = (((hash * seed) >>> 0) + key.charCodeAt(i)) >>> 0
		}
		return hash % this.mapKeys.length
	}
	set(key, val) {
		var idx = this.hashCode(key)
		this.mapKeys[idx] = key
		this.mapVals[idx] = val
		return this
	}
	get(key) {
		var idx = this.hashCode(key)
		return this.mapVals[idx]
	}
	has(key) {
		var idx = this.hashCode(key)
		if (this.mapKeys[idx] !== undefined) {
			return true
		} else {
			return false
		}
	}
	delete(key) {
		var idx = this.hashCode(key)
		delete this.mapKeys[idx]
		delete this.mapVals[idx]
	}
}


class HashTable {
	constructor() {
		this.maps = Array(32).fill(null)
	}

	// 通过映射的key计算出一个整数
	// 期望的目标是对不同的字符串都计算出不同的值
	hashCode(key) {
		var hash = 131313131
		var seed = 131
		for (var i = 0; i < key.length; i++) {
			hash = (((hash * seed) >>> 0) + key.charCodeAt(i)) >>> 0
		}
		return hash % this.maps.length
	}
	set(key, val) {
		var idx = this.hashCode(key)
		if (this.maps[idx] === null) {
			var node = {
				key: key,
				val: val,
				next: null,
			}
			this.maps[idx] = node
		} else {
			var p = this.maps[idx]
			while (p) {
				if (p.key === key) {
					p.val = val
					return this
				}
				p = p.next
			}
			var node = {
				key: key,
				val: val,
				next: this.maps[idx],
			}
			this.maps[idx] = node
		}
		return this
	}
	get(key) {
		var idx = this.hashCode(key)
		var p = this.maps[idx]
		while (p) {
			if (p.key === key) {
				return p.val
			}
			p = p.next
		}
		return undefined
	}
	has(key) {
		var idx = this.hashCode(key)
		var p = this.maps[idx]
		while (p) {
			if (p.key === key) {
				return true
			}
			p = p.next
		}
		return false
	}
	delete(key) {
		var idx = this.hashCode(key)
		var p = this.maps[idx]
		if (p.key === key) {
			this.maps[idx] = p.next
			return this
		}
		while (p.next) {
			if (p.next.key == key) {
				p.next = p.next.next
				break
			}
			p = p.next
		}
		return this
	}
}

// 0214

describe("validatePIN", function () {
	it("should return False for pins with length other than 4 or 6", function () {
		Test.assertEquals(validatePIN("1"), false, "Wrong output for '1'")
		Test.assertEquals(validatePIN("12"), false, "Wrong output for '12'")
		Test.assertEquals(validatePIN("123"), false, "Wrong output for '123'")
		Test.assertEquals(validatePIN("12345"), false, "Wrong output for '12345'")
		Test.assertEquals(validatePIN("1234567"), false, "Wrong output for '1234567'")
		Test.assertEquals(validatePIN("-1234"), false, "Wrong output for '-1234'")
		Test.assertEquals(validatePIN("1.234"), false, "Wrong output for '1.234'")
		Test.assertEquals(validatePIN("-1.234"), false, "Wrong output for '-1.234'")
		Test.assertEquals(validatePIN("00000000"), false, "Wrong output for '00000000'")
	});

	it("should return False for pins which contain characters other than digits", function () {
		Test.assertEquals(validatePIN("a234"), false, "Wrong output for 'a234'")
		Test.assertEquals(validatePIN(".234"), false, "Wrong output for '.234'")
	});

	it("should return True for valid pins", function () {
		Test.assertEquals(validatePIN("1234"), true, "Wrong output for '1234'");
		Test.assertEquals(validatePIN("0000"), true, "Wrong output for '0000'");
		Test.assertEquals(validatePIN("1111"), true, "Wrong output for '1111'");
		Test.assertEquals(validatePIN("123456"), true, "Wrong output for '123456'");
		Test.assertEquals(validatePIN("098765"), true, "Wrong output for '098765'");
		Test.assertEquals(validatePIN("000000"), true, "Wrong output for '000000'");
		Test.assertEquals(validatePIN("123456"), true, "Wrong output for '123456'");
		Test.assertEquals(validatePIN("090909"), true, "Wrong output for '090909'");
	});
});

//0218
let re = /fo((.(.))(..))/d
let reabfo = re.exec('abfoabcdefg')


// 0220
setTimeout(
	function () {
		alert('Time');          // 把函数引用(函数表达式)传给函数
	}, 1000
)

setTimeout(alert('Time'), 1000) // 不能把函数调用传给函数。

function setTimer(doneMessage, n) {
	setTimeout(() => {
		alert(doneMessage)
	}, n);
	doneMessage = 'Ouch'
}
setTimer('Cookies are done!',1000)

function setTimer(doneMessage, n) {
	
		alert(doneMessage);

	doneMessage = 'Ouch'
}
setTimer('Cookies are done!',1000)






