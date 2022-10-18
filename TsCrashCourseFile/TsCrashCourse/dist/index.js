"use strict";
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
let person = [1, "Nick", true];
//Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Octa'],
    [3, 'Richard']
];
//Union
let pid;
pid = '22';
//Enum defines a set of named constants
var Direction1;
(function (Direction1) {
    //Automatically Sets first entry as 0
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
//Objects
const user = {
    id: 1,
    name: 'Nicolas',
};
// Type Assertion
//Tell compiler to treat entity as a different type
let cid = 1;
//let customerid = <number>cid
let customerid = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
//console.log(addNum(1,2)) Result = 3
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
