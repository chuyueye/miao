



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