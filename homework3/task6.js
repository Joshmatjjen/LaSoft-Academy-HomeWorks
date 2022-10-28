let a = 2;
let b = a++;
let c = ++a;

console.log(a); // 4
// Result: 4
// Reason:
// Variable "a" was declared for a postfix increment and prefix increment before the console.log(a),
// Therefore:  when variable "a" was declared it was 2,
// after adding  ++a it becomes a + 1,  2 + 1 = 3, it was incremented but have not return the value to variable b;
// Then:  ++a also increment a+1 which is 3 + 1 = 4

console.log(b); // 2
// Result: 2
// Reason:
//  Variable "b" was declared for a postfix increment, which increment for variable "a" before the console.log(b),
// but does not return the value back to the new variable "b",
// Therefore: a++ means variable a still hold it's previous value of "a" and have not return the new incremented value to variable "b" after incrementing
// Then: b =  ++a also a = 2;

console.log(c);

// Result: 4
// Reason:
// Variable "c" was declared for a prefix increment, which takes all the increment for variable "a" and then return it back to the newly declared variable,
// Therefore: ++a  take all the new incremented value to variable "a" & "b" , and after incrementing it return it back variable "c"
// Then: a = 2 , a++ = 3,  c = ++a (3 + 1), c  = 4;
