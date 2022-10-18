let id: number= 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, true, "Hello"]

let person: [number, string, boolean] = [1, "Nick", true]
//Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Octa'],
    [3, 'Richard']

]

//Union
let pid: string | number
pid = '22'

//Enum defines a set of named constants
enum Direction1{
    //Automatically Sets first entry as 0
    Up, //If this was set to one all others would be +1 to the one before, so Down would be 2 and Left 3, etc.
    Down,
    Left,
    Right,

}

//Objects
const user:{
    id: number,
    name: string,
} = {
    id: 1,
    name: 'Nicolas',
}

// Type Assertion
//Tell compiler to treat entity as a different type
let cid: any = 1
//let customerid = <number>cid
let customerid = cid as number

// Functions
function addNum(x: number, y: number):number{
    return x + y
}

//console.log(addNum(1,2)) Result = 3

function log(message: string | number): void{
    console.log(message)
}

//Interfaces are specific structures for objects OR functions
interface userInterface{
    id: number,
    name: string,
    age?: number, //makes optional
} 
const user1: userInterface = {
    id: 1,
    name: 'John'
}