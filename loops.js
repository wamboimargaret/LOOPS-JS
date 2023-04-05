//Write a function that accepts an array of strings and console.logs each element using a for loopfu
function loopArr(arr){
    for(let i = 0; i < arr.length; i++){
     console.log(arr[i]);
    }

}
let arr = ["Java","Kotlin","Python","JavaScript"];
loopArr(arr)


//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiply(num){
    num.forEach(element =>{
 console.log(element*2);
 })
 }
 let num = [3,6,9,12,15];
 multiply(num);


//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
//let nums = [2,4,6,8,3,12,]
function numArray(nums){
    const fourItems = num.slice(0, 4).map(number => number * 8);
    const twoItems = num.slice(-2).map(number => number + 5);
    const combined = [...fourItems, ...twoItems];
    console.log(combined);
}
let nums = [2,4,6,8,3,12,];
numArray(nums);
  
//Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];

function whileLoopArray(arrNum) {
    let i = 0;
    while (i < arrNum.length) {
      if (i === 4) {
        break;
      }
      console.log(arrNum[i]);
      i++;
    }
}
whileLoopArray(arrNum);

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']

function arrstring(fruits){ 
for (let i = 0; i < fruits.length; i++){
    if(i===2){
        continue;
    }
    console.log(fruits[i])
}

}

arrstring(fruits)


