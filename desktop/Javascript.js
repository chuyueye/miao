



let num = 21;

let array_1 = [2,3,5,7,
11,13,17,19,
23,29,
31,37,
41,43,47,
53,59,
61,67,
71,73,79,
83,89,
97]

let txt = false;
function fun(value,index,array){
	txt = txt || num === value;
}

array_1.forEach(fun);
console.log(txt);

function isPrimeNumber(num) {
			let array_1 = [2,3,5,7,
		11,13,17,19,
		23,29,
		31,37,
		41,43,47,
		53,59,
		61,67,
		71,73,79,
		83,89,
		97]

		let txt = false;
		function fun(value,index,array){
			txt = txt || num === value;
		}

		array_1.forEach(fun);
		console.log(txt);
}

isPrimeNumber(5)

1215

Presentation Error	62907
Accepted	58430
Compile Error	57931
Wrong Answer	35377
Runtime Error	704
Time Limit Exceeded	496
Output Limit Exceeded	288
Runtime Error	196
System Error	52
Waiting	39
Memory Limit Exceeded	30

Presentation Error
Runtime Error
Wrong Answer
Compile Error
http://noi.openjudge.cn/ch0101/02/submit/

let a = require('http');
let b = a.split(" ")
console.log(b[1])

let a = process.stdin.resume();
let b = a.split(" ")
console.log(b[1])


Include Modules
To include a module, use the require() function with the name of the module:

var http = require('http');
Now your application has access to the HTTP module, and is able to create a server:

http.createServer(
  function (req, res) 
  	{
  	res.writeHead(200, {'Content-Type': 'text/html'});
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

function add(a,b){
    return a+b
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
A+B


let a = require('http');
let b = a.split(" ")
console.log(b[1])

n = prompt()
a = if (n>0) 5 else 4

if else ,格式，多重嵌套格式
if (false) console.log(2)
console.log(3)

console.log 里面的所有符号要加引号！！！！
+ " " +

	// let n = +prompt(),
	// arr = []
	// for (let i = 0; i < n; i++) 
	// arr.push(+prompt())
	// console.log( (eval(arr.join('+')) / n).toFixed(2) )

No NOT use eval()
Executing JavaScript from a string is an BIG security risk.

With eval(), malicious code can run inside your application without permission.

With eval(), third-party code can see the scope of your application, whitch can lead to possible attacks.