//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

//string
let myString: string="Hello";
console.log("The value of myString is: "+myString);

//number
let myNumber: number = 5;
console.log("The value of myNumber is: "+myNumber);

//arrays
let myArray: number[] = [1,2,3];
for(let i=0;i<myArray.length;i++){
    console.log("The value of item "+(i+1)+" is "+myArray[i]);
}

let myArray2: Array<number> = [1,2,3];
myArray.forEach(function(item){
    console.log("The value is "+item);
})

//any
let unKnown:any = "Whatever we want";
console.log("The value of unKnown is "+unKnown);
