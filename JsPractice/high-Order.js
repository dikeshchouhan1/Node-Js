const arr=[1,2,3,4,5]


//map
const ans=arr.map(nums=>nums*2);
console.log(ans);

// filter 
const ans1 =arr.filter(nums=> nums%2===0);
console.log(ans1)

//reduce
const sum=arr.reduce((acc,curr)=>acc+curr,0)
console.log(sum)


const users = [
  { name: "Dikesh", age: 22 },
  { name: "Amit", age: 25 },
  { name: "Ravi", age: 20 }
];


const names=users.map(index=>index.name);
console.log(names)


const adults =users.filter(index=>index.age>20)
console.log(adults)

const totalage=users.reduce((acc,curr)=>acc+curr.age,0)
console.log(totalage)

const result = arr
  .map(n => n * n)
  .filter(n => n > 20);

console.log(result);


const ans3=arr.forEach((value,index)=>[
    console.log(index,value)
])