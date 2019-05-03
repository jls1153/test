console.log('Hello, Jim!');
/*
 * A command line application for generating powers of two
 * from 2^0 through 2^32.
 */

console.log('Generate powers of 2:');
for (var x = 1, i = 0; i <= 32; i += 1) {
    console.log(x);
    x += x;
}
