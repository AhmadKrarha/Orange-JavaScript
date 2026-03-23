// A system logs user events, but the data became too large due to repeated consecutive actions. The company wants to compress the logs by grouping consecutive identical events and counting how many times they occurred.
// [
//   { event:"click", time:1 },
//   { event:"click", time:2 },
//   { event:"scroll", time:3 },
//   { event:"scroll", time:4 },
//   { event:"click", time:5 }
// ]
// Transform the data into:
// [
//   { event:"click", count:2 },
//   { event:"scroll", count:2 },
//   { event:"click", count:1 }
// ]
function  TransformData(arr)
{
    let myarr = [];
    for(let i = 0 ; i < arr.length;i++)
    {   let count = 1 ;
        let Event = arr[i].event;
       while(  i != arr.length -1 &&arr[i].event === arr[i+1].event && arr[i].time + 1 === arr[i+1].time)
        {
                count++;
                i++;
        }
        myarr.push({event: Event , count: count});
    }
    console.log(myarr);
}
// A finance system records daily expenses. The management wants to know if there is a continuous period where the total expense equals a specific target.

// [1,4,20,3,10,5],target=33
// Return the start and end indices of the subarray
// If not found → return `-1`
function findExpenses(arr,target)
{
    for(let i = 0 ; i < arr.length ; i++)
    {
        let start = i;
        let sum = 0 ;
        
        while(sum < target)
        {
            sum += arr[i];
            if(sum == target)
               { console.log([start,i])
                   break;
               }
               i++
        }
        i = start;
    }
}
function stockMarket(arr){
    let  whenTobuy = 0;
    let  whenToSell = 0; 

    for(let i = 0 ; i < arr.length ; i++)
    {
        let lowest = arr[i];
        if(arr[i] < lowest)
            lowest = arr[i];
    }
    whenTobuy = lowest;
    for(let i = whenTobuy ; i < arr.length ; i++)
    {
        if(arr[i] >= whenTobuy )
            whenToSell = arr[i];
    }
    console.log(whenTobuy,whenToSell);

}

// A user browsing log is recorded. You need to find the longest continuous period where no value is repeated.
function longestUniquePeriod(arr) {
    let Mymap = new Map();
    let left = 0;
    let maxLength = 0;
    let maxStart = 0;
    let maxEnd = 0;

    for (let right = 0; right < arr.length; right++) {
        let currentVal = arr[right];

        if (Mymap.has(currentVal) && Mymap.get(currentVal) >= left) {
            left = Mymap.get(currentVal) + 1;
        }
        
        Mymap.set(currentVal, right);
        
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            maxStart = left;
            maxEnd = right;
        }
    }
    for (let i = maxStart; i <= maxEnd; i++) {
        console.log("Index " + i + ": " + arr[i]);
    }
      return maxLength;
}
//Each number should be replaced by the product of all other numbers in the array (excluding itself). Division is not allowed.
function productExcludeSelf(arr) {
    let n = arr.length;
    let leftArray = new Array(n);
    let rightArray = new Array(n);
    let result = [];

    let leftAcc = 1;
    for (let i = 0; i < n; i++) {
        leftArray[i] = leftAcc;
        leftAcc *= arr[i];
    }
    let rightAcc = 1;
    for (let i = n - 1; i >= 0; i--) {
        rightArray[i] = rightAcc;
        rightAcc *= arr[i];
    }
    for (let i = 0; i < n; i++) {
        result.push(leftArray[i] * rightArray[i]);
    }
    console.log(result);
}

//spiral Matrix
function spiralMatrix(arr) {
    if (!arr.length || !arr[0].length) return []; 

    let result = [];
    let top = 0;
    let bottom = arr.length - 1;
    let left = 0;
    let right = arr[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(arr[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result.push(arr[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(arr[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(arr[i][left]);
            }
            left++;
        }
    }
    return result; 
}
// Minimum Window subarray
function muinmumWindowSubArry(arr,target) {                                                              // incomplete attempt

    let targetMap = new Map();
    let left = 0;
    let right = 0;
    let minLength = arr.length ;
    let minLeft = 0;
    let minRight = 0;

    for (let i = 0; i < arr.target; i++) {    // here where i fill the map with the target element so i can compare with it later  
        let count = 1;
        if (!targetMap.has(target[i])) {
            targetMap.set(target[i], count);
        } else {
            targetMap.set(target[i], targetMap.get(target[i]) + 1);
        }
    }

}

//You are playing a game where each position tells you how many steps to move. You need to detect if you will get stuck in an infinite loop.

function hasCycle(arr)
 {
    let currentIndex = 0;
    let visited = new Set();
    while (currentIndex >= 0 && currentIndex < arr.length) {
                if (visited.has(currentIndex)) {
            return true; 
        }
        visited.add(currentIndex);
        currentIndex += arr[currentIndex];
    }
    return false;
}