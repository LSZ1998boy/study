let a = 'abcd e';
// 有无空格的区别
console.log(a.split('')); // 逐个元素分割，空格也被分割为一个元素
console.log(a.split(' ')); // 以空格分隔
console.log(a.split('', 3)); // 可以选择返回元素的个数
// 也可以用 符号 或正则表达式分割
console.log("2:3:4:5".split(":")); //[ '2', '3', '4', '5' ]
console.log("|a|b|c".split("|")); //[ '', 'a', 'b', 'c' ]
