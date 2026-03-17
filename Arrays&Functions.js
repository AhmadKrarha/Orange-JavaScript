function firstAnsLast(array)
{
console.log(array.slice(0,1).concat(array.slice(-1)))
}
function removeMiddle(array)
{
    let middleItem = Math.floor(array.length/2);
    array.splice(middleItem,1);
    console.log( array);
}
function swapFirstLast(arr)
{
    let temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    console.log(arr);
}
function insertAtMiddle(arr,value)
{
    let middleItem = Math.floor(arr.length/2);
    arr.splice(middleItem,0,value);
    console.log(arr);
}
function duplicateArray(arr)
{
    console.log(arr.concat(arr));
}
function removeDuplicates(arr)
{
    let uniqueArr = [];
    for(let i = 0 ; i < arr.length ; i++)
    {
        if(!uniqueArr.includes(arr[i]))
            uniqueArr.push(arr[i]);
    }
    console.log(uniqueArr);
}
function findSecondLargest(arr)
{
    let largest = arr.Math(...arr);
    let secoundLargest = 0 ;
    for(let i = 0 ; i < arr.length ; i++)
    {   
        if(arr[i] > secoundLargest && arr[i] < largest )
            secoundLargest = arr[i];

    }
    console.log(secoundLargest)
}
function findSecondSmallest(arr)
{
    arr.sort(function(a,b){return a - b});
    console.log(arr[1]);
}
function removeGreaterThan(arr,value)
{
    let newArray = [];
    for(let i  = 0 ; i < arr.length;i++)
    {
        if(!(arr[i] >= value))
            newArray.push(arr[i]);
    }
    console.log(newArray);
}
function remonveLessThan(arr,value)
{
    let result = arr.filter(checkValue);
    console.log(result)
function checkValue(num) 
{
    return num >= value;
}
}
function countOccurrences(arr,value)
{
    let count = 0 ;
    let result = arr.filter(checkFrequency);
    console.log(` the ${value} has ocurred this time : ${count}`);

    function checkFrequency(num)
    {
          if (num == value)
            count++;
        return count;
    }
}
function arrayIntersection(arr1,arr2)
{
   
    let intersctionArray = arr1.filter(item =>{ return arr2.includes(item)} )
    console.log(intersctionArray);
}
function arrayDifference(arr1,arr2)
{
    let differnceArray = arr1.filter(item =>{ return !arr2.includes(item)} )
    console.log(differnceArray);
}
function uniqueMerge(arr1,arr2)
{
    for(let i = 0 ; i < arr2.length ; i++)
    {
        if(!(arr1.includes(arr2[i])))
            arr1.push(arr2[i]);
    }
    console.log(arr1);
}
function removeNrgativeNumbers(arr)
{
    let result = arr.filter(item => {return item >= 0} );
    console.log(result);
}
function wordsLongerThan(arr,length)
{
    let result = arr.filter(item => { return item.length > length} );
    console.log(result);
}
function countLetterInWords(arr, letter) {
    const wordsWithLetter = arr.filter(word => word.includes(letter));
    console.log(wordsWithLetter.length);
}
function removeShortWords(arr,length)
{
    let result = arr.filter(word => word.length > length)
    console.log(result);
}
function findLongestWord(arr)
{
    let result = arr.sort((a,b) => b.length - a.length)[0]
    console.log(result);
}
function findShortestWord(arr){

    let result = arr.sort((a,b) => a.length - b.length)[0]
    console.log(result);    
}
function sortByLength(arr)
{
    let result = arr.sort((a,b) => a.length - b.length);
    console.log(result);
}
function removeEverySecond(arr) {
    let result = arr.filter((item, index) => {
        return index % 2 == 0; 
    });
    console.log(result);
}
function sumEvenNumbers(arr)
{
    let sumEven = arr.reduce((acc , curr ) => {
         if(curr %2 == 0)
            return acc + curr;
        else
        {
            return acc;
        }
    } , 0)
    console.log(sumEven);
}
function sumOddIndex(arr){

    let count = 0;
    let sumOdd = arr.filter((item ,index) =>{
        if(index % 2 != 0 )
            return count+=item;
    })
    console.log(count);
}
function reverseWithoutReverse(arr){
    let result = []
 for (let i = 0; i < arr.length; i++) {
        result.unshift(arr[i]);}
    console.log(result);
}
function findMissingNumber(arr){
   let missing ;
   arr.sort(); 
   for(let i = 0 ; i < arr.length ; i++)
    {
        if(arr.includes(i+1) == false)
            missing = i+1;
    }
    console.log(missing)
}
function pairSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let neededNum = target - currentNum;
        if (arr.includes(neededNum)) {
            return [currentNum, neededNum];
        }
    }
}
function rotateArray(arr, steps) {
    // 1. Handle cases where steps is larger than the array length
    // (e.g., rotating 5 items by 6 steps is the same as rotating by 1)
    let n = steps % arr.length;

    // 2. Slice the "back" part (the elements that move to the front)
    // .slice(-n) is a shortcut to get the last 'n' elements
    let backPart = arr.slice(-n);

    // 3. Slice the "front" part (the elements that move to the back)
    // .slice(0, -n) gets everything EXCEPT the last 'n' elements
    let frontPart = arr.slice(0, arr.length - n);

    // 4. Concat them in the NEW order: [Back] + [Front]
    let result = backPart.concat(frontPart);

    console.log(result);
}
function chunkArray(arr, size) {
    let result = [];

    // We start at 0, but we JUMP by the chunk size each time
    for (let i = 0; i < arr.length; i += size) {
        // Slice from the current index to (current index + size)
        let chunk = arr.slice(i, i + size);
        
        // Push that small array into our big result array
        result.push(chunk);
    }

    console.log(result);
}
function groupByLength(arr) {
    let result = {}; // 1. Start with an empty object

    for (let word of arr) {
        let len = word.length; // 2. Get the length (the key)

        // 3. Check if this length already exists in our object
        if (!result[len]) {
            result[len] = []; // 4. If not, create an empty array for it
        }

        // 5. Push the word into the array for that specific length
        result[len].push(word);
    }

    console.log(result);
}

groupByLength(["hi", "cat", "dog", "apple"]);