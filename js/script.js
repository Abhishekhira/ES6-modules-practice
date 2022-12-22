console.log("file is attached");

//map is another kind of data structure in javascript it is very similar to object the main difference is in map ,it allow key of any type

//methods of map are

//creating map

let first =new Map();
//setting properties of map
 
first.set("name","abhishek")
.set("phone",12345678)
.set("id",1)

//getting properties from the object
let value=first.get("name")

//check if properties exist in map
console.log(first.has("name"))


first.set({first:1,
second:2},"hiiii")

console.log(first);


///iteration over map
for (const entry of first.entries()) {
  console.log(entry )
}
//map from object.entries() method


let obj={
    name:'john',
    age:20
}

let second=new Map(Object.entries(obj));
console.log(second);

let prices=Object.fromEntries([
    ['orange',1],
    ["mango",2]
])



console.log(prices)


//map from existing object
let obj2=Object.fromEntries(first.entries());      
console.log(obj2)  


//set 

//adding value in set


let firstSet=new Set(["apple","mango"]);

// firstSet.add('john')

console.log(firstSet);


console.log(firstSet.keys())//return iterable object
console.log(firstSet.values())

firstSet.delete("apple");
// console.log(firstSet);
// console.log(Error())

// let a;
// let b=null;
// console.log(a==b)

//try and catch use to handle errors in javascript but its limitation is that it not work or scheduled code;

setTimeout(()=>{
    console.log("hii setTimeout is called")
},1000)


    setTimeout(()=>{
        try {
            console.log(rahul)
            
        } catch (error) {
            console.log(error)
        }
    },100)


setTimeout(()=>{
    console.log("2nd setTimeout is called")
},2000)
setTimeout(()=>{
    console.log("3rd setTimeout is called")
},3000)

