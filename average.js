#! /usr/bin/node

/*
 * A command line script to write the average of its two
 * command line arguments, which will be treated as numbers.
 * Example:
 *
 *     average 84 22
 */
var x = +process.argv[2];
var y = +process.argv[3];
console.log((x + y) / 2);
