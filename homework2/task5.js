// 1
const result1 = [1, 2, 3] + {};
console.log(result1); // 1,2,3[object Object]

// Result:  1,2,3[object Object]

// Reason for result:
// The result of [1, 2, 3] + {} is the concatenation of an array with empty empty object is like converting them to a string.
// The Addition of the array and object also means: String([1, 2, 3]) + String({})
// which result to '1,2,3[object Object]'

// 2
const result2 = 1 + "3" - 2;
console.log(result2); // 11

// Result:  11

// Reason for result:
// In javascript, using Addition(+) Arithmetic operator with a string will concat the string with an value, even if it is a number.
// Therefore: 1 + "3" = "13"
// Then using Subtraction(-) Arithmetic operator with a string with number will convert it to a number an calculate it.
// Therefore: "13" - 2 = 11

// 3
const result3 = 1 + ("3" - 2);
console.log(result3); // 2

// Result:  2

// Reason for result:
// By default javascript uses the Mathematics formula BODMAS
// BODMAS is an acronym and it stands for Bracket, Order, Division, Multiplication, Addition, and Subtraction.
// Therefore: Bracket () comes first for calculation
// Then using Subtraction(-) Arithmetic operator with a string with number will convert it to a number an calculate it.
// Therefore: "3" - 2 = 1
// Then: 1 + 1 = 2

//4
const result4 = NaN === NaN;
console.log(result4); // false

// Result:  false

// Reason for result:
// In JavaScript, NaN is short for "Not-a-Number". In JavaScript, NaN is a number that is not a legal number.
// The isNaN() method returns true if the value parsed in the method is not a number.
// Because Not a Number is not a number, and is not equal to anything, including Not a Number.
// Therefore:  Although either side of NaN===NaN contains the same value and their type is Number but they are not same. According to ECMA-262, either side of == or === contains NaN then it will result false value.

//5
const o = { a: 1 };
const result5 = o + 1;
console.log(result5); // [object Object]1

// Result:  [object Object]1

// Reason for result:
// The variable o contains an object with a key and value, In javascript, using Addition(+) Arithmetic operator with an object will convert it to a string and concat it with any value after it, even if it is a number.
// Therefore: String({a:1}) = [object Object]
// Then: [object Object] + 1 = [object Object]1

//6
const result6 = [1, 2, 3] + ‘a’;
console.log(result6);
// SyntaxError: Invalid or unexpected token

// Result:  SyntaxError: Invalid or unexpected token

// Reason for result:
// In javascript, ‘’ (Apostrophe) is different from '' (single quote) and `` (backtick)
// In javascript only Single quote, double quote & Backtick are supported to wrap a character for string.
// Therefore: [1, 2, 3] + ‘a’ will result to a Syntax Error
// Instead: It should be [1, 2, 3] + "a";
// With result concatenating both as str with will equals to:  1,2,3a

//7
const result7 = undefined + 1;
console.log(result7); // NaN

// Result:  NaN

// Reason for result:
// For example When you do "undefined" + 1 you concatenate the String "undefined" with 1   resulting in the string "undefined1"
// But undefined is like an unexpected absence of a value (never set)
// Therefore the addition of undefined with a number will result as NaN, since it is not a number

//8
const result8 = 2 / 0;
console.log(result8); // Infinity

// Result:  Infinity

// Reason for result:
// Because that is how Floating-point arithmetic is defined
// In Mathematic it is not possible for a number to be divided by zero, it is either undefined or Infinity,
//  2/0 can be seen as 1/x , where x tends to zero (from the right)
// Therefore in Javascript any Number/0 will result to Infinity.

//9
const result9 = 0 / 0;
console.log(result9); // NaN

// Result:  NaN

// Reason for result:
// Because that is how Floating-point arithmetic is defined
// In Mathematic it is not possible for Zero(0) to divide itself.
// And 0/0 has no reasonable interpretation at all,
// 0/0 may really be 1e-500/1e-600, or 1e-600/1e-500, or many other ratios of very small values.
//The actual ratio could be anything, so there is no meaningful numerical answer, hence the result should be a NaN.

//10
const ob = {
  a: 1,
  toString() {
    return this.a;
  },
};

const result10 = ob + 1;
console.log(result10); // 2

// Result:  2

// Reason for result:
// this keyword bind a attribute, since the contains a function with a return statement. the value is being called when the object is call with the function.
// For example ob.toString() = 1;
// Therefore: ob = { a: 1, toString: [Function: toString] }
// Since ob has an object which returns a number, the value bind to this keyword will be returned, then Addition(+) Arithmetic operator get the returned value and calculate or concatinate depending on the two values
// If it was { a: "1", toString: [Function: toString] } + 1 , it will return the result as 11, because there is a string to concatenate.

// Therefore:{ a: 1, toString: [Function: toString] } + 1
// Then: 1 + 1 = 2;
