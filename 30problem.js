function countFrom1to10() { //1
 do{
    let i = 1;
    console.log(i);
    if( i === 10){
        break;
    }
    document.write("-");

 }while( i <= 10);
}
function sumFrom0To30()                       //2
{
    let sum = 0;
    for(let i = 0; i <= 30; i++){
        sum += i;
    }
    console.log(sum);
}
function evenNumbersFrom1To50()                     //3
{
    for(let i = 1; i <= 50; i++){
        if(i % 2 === 0){
            document.write(i);
        }
    }
}
function countFrom10To1()                              //4
{
    for(let i = 10; i >= 1; i--){
        document.write(i);
    }
}
function patternPrint()                              //5
{
    for (let i  = 4 ; i >= 0 ; i --)
    {
        let A = "A";
        let B = 65;
        for(let j = 0 ; j <= i ; j++ )
        {
            console.log(A);  
        }
        console.log(String.fromCharCode(B));
        B++;
        document.write("<br>");
    }
}

function patternPrint2()                              //6
{
    for (let i  = 1 ; i >= 5 ; i++)
    {
        for(let j = 1 ; j >= 5 ; j++ )
        {
            console.log(i);
        }
       console.log(j);
        document.write("<br>");
    }
}
function diagonalyPrint()                                        //7
{
    for (let i  = 0 ; i <= 4 ; i++)
    {
        for(let j = 0 ; j <= 4 ; j++ )
        {
            console.log(0);
            if(i === j)
            {
                console.log(i);
            }
        }
        document.write("<br>");
    }
}
function factorial(n)                                               //8
 {
    if (n === 0) 
    {           
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
function Fibonnanci()                                            //9
{
    let prev = 0;
    let next = 1;
    for(let i = 0 ; i <= 10 ; i++)
    {
        console.log(prev);
        let temp = next;
        next = prev + next;
        prev = temp;
    }
}
function countOccurence(c)                                    //10
{
    let count = 0;
    for(let i = 0 ; i < c.length ; i++)
    {
        if(c[i] === 'c' || c[i] === 'C')
        {
            count++;
        }
    }
    console.log(count);
}
function multiplicationTable()                              //11
{
    for(let i = 1 ; i <= 5 ; i++)
    {
        for(let j = 1 ; j <= 5 ; j++)
        {
            console.log("${i} * ${j} = ${i * j}");
        }
        document.write("<br>");
    }
}
function floydTriangle()                                  //12
{
  let count = 1;
    for(let i = 1 ; i <= 20 ; i++)
    {
        for(let j = 1 ; j <= i ; j++)
        {
            console.log(count);
             count++;
        }
        document.write("<br>");
    }
}
function divisibleBy7()                                       //13
{
    for(let i = 1 ; i <= 100 ; i++)
    {
        if(i % 7 === 0)
        {
            console.log(i);
        }
    }
}
function sumOddNumbers()                                     //14
{
    let sum = 0;
    for(let i = 1 ; i <= 100 ; i++)
    {
        if(i % 2 !== 0)
        {
            sum += i;
        }
    }
    console.log(sum);
}
function squareNumbers()                                          //15
{
    for(let i = 1 ; i <= 10 ; i++)
    {
        console.log(i * i);
    }
}

function triangleNumber20()                                        //20
{
    for(let i = 1 ; i <= 5 ; i ++ )
    {
        for(let j = 1 ; j <= i ; j++)
    {
        console.log(i);
    }
    document.write("<br>");
    }
}
function triangle17()                                                    //17                                          
{
    for(let i = 1 ; i <= 5 ; i++)
    {
        for(let j = 1 ; j <= i ; j++)
        {
            console.log("*");
        }
        document.write("<br>")
    }
}
function FizzBuzz()                                                          // 16
{
    for(let i = 1 ; i <=30 ; i++)
    {
        if(i%3 == 0)
        { 
            console.log(i + " Fizz");
        }
           else if(i%5 == 0)
        { 
            console.log(i + " Buzz");
        }
           else if(i % 3 == 0 && i % 5 == 0)
        { 
            console.log(i + " FizzBuzz");
        }
    }
}
function reverseTriangel18()                                                  //18
{
    for(let i = 1 ; i <=5 ; i++)
    {
        for(let j = 5  ; j >= i ; j--)
        {
            console.log("*");
        }
        document.write("<br>");
    }
}
function triangle19()                                                                //19
{
    for(let i = 1 ; i <= 5 ; i++)
    {
        for(let j = 1; j <= i ; j++)
        {
            console.log(j);
        }
        document.write("<br>");
    }
}
function sumEqualf5()                                         // 21
{
    for (let i = 1; i <= 200; i++)
        {
        let sum = 0;
        let temp = i; 

        while (temp > 0)
            {
            sum += temp % 10;        
            temp = Math.floor(temp / 10); 
        }
        if (sum === 5) {
            console.log(i);
        }
    }
}
function compare2digit()                                        //22
{
    for(let i = 1 ; i < 100 ; i++)
    {
        let temp = i;
        let last = temp % 10;
        temp /= 10;
        temp = Math.floor(temp);
        if (temp > last)
            {console.log(i);}
    }
}


function equalDigit()                                              // 23
{
     for(let i = 1 ; i < 100 ; i++)
    {
        let temp = i;
        let last = temp % 10;
        temp /= 10;
        temp = Math.floor(temp);
        if (temp == last)
            {console.log(i);}
    }
}
function DivisibleByProduct()                                         // 24
{
    for(let i = 1 ; i < 300 ; i++)
    {
       
        let digitProduct = 1;
        let temp = i; 
        let hasZero = false;
       
        while (temp > 0)
        {
            let last = temp % 10;
            if (last === 0) 
            {
            hasZero = true;
            break;
            }
            digitProduct *= last; 
            temp = Math.floor(temp / 10);
        }
                if (!hasZero && i % digitProduct === 0) 
                console.log(i);
                    
    }
}
function digitSumEqualDigitMul()                              //25
{
    for(let i = 0 ; i < 100 ; i++)
    {
        let temp = i;
        let last = temp % 10;
        temp = Math.floor(temp/10);
       
            if( temp + last  === temp * last)
                console.log(i);
    }
}

function reverseNum()                                                  //26
{
    let numbers = "";
    let last ;
    for( let i = 1 ; i < 500 ; i++)
    {
         let num = i;
        while(num > 0)
        {
            last = num % 10;
            num = Math.floor( num / 10);
            numbers += last;
        }    
        if(parseInt(numbers) %3  == 0)
        {
            console.log(i);
        }
        numbers = "";
    }
}
function diffrenceIs2()                                                 //27
{
    for(let i = 1 ; i < 200 ; i++)
    {
        let temp = i;
        let last = temp % 10;
        temp = Math.floor(temp/10);
        if(Math.abs(last - temp) === 2)
        {
            console.log(i);
        }
    }
}
function DigitsINascending() {                                        //28
    for (let i = 1; i < 500; i++) {
        let temp = i;
        let isAscending = true; 

        let rightDigit = temp % 10;
        temp = Math.floor(temp / 10);

        while (temp > 0) {
            let leftDigit = temp % 10;

            if (leftDigit >= rightDigit) {
                isAscending = false;
                break; 
            }
            rightDigit = leftDigit;
            temp = Math.floor(temp / 10);
        }
        if(isAscending){
            console.log(i);}
        
    }
}
function DigitsINDescending() {                                        //29
    for (let i = 1; i < 500; i++) {
        let temp = i;
        let isDescending = true;

        let rightDigit = temp % 10;
        temp = Math.floor(temp / 10);

        while (temp > 0) {
            let leftDigit = temp % 10; 

            if (leftDigit <= rightDigit) {
                isDescending = false;
                break;
            }
            rightDigit = leftDigit;
            temp = Math.floor(temp / 10);
        }

        if (isDescending) {
            console.log(i);
        }
    }
}
function twoDigitSum() {                                                                  //30
    for (let i = 1; i < 300; i++) {
        let temp = i;
        let last = temp % 10;
        temp = Math.floor(temp / 10);

        let Sum = 0; 

        while (temp > 0) {
            let leftDigit = temp % 10;
            runningSum += leftDigit; 
            temp = Math.floor(temp / 10);
        }
        if (Sum === last && i > 9) {
            console.log(i);
        }
    }
}
//Write a program that prints **numbers between 1 and 200 where the sum of digits is greater than 10**.
function sumMoreThan10()
{
    for(let i = 10 ; i < 200 ; i++)
    {
        let temp = i;
        let last = temp % 10;
        temp = Math.floor(temp/10);
        let sum = 0;
        sum+=last; 
        while(temp > 0)
        {
            last = temp %10;
            temp = Math.floor(temp/10);
            sum+=last;
        }
        if(sum > 10)
        {
            console.log(i);
        }
    }
}
//Write a program that prints **numbers between 1 and 500 whose digit sum is a prime number**.
function digitSumPrime()
{
    for(let i = 1 ; i < 500 ; i++)
    {
        let temp = i;
        let last = temp % 10;
        temp = Math.floor(temp/10);
        let sum = 0;
        sum+=last; 
        while(temp > 0)
        {
            last = temp %10;
            temp = Math.floor(temp/10);
            sum+=last;
        }
        if(isPrime(sum))
        {
            console.log(i);
        }
    }
}
//Write a program that prints numbers between 1 and 300 that contain exactly two digits equal to each other.
function twoDigitEqual()
{
    for(let i = 1 ; i < 300 ; i++)
    {
        let temp = i;
        let last = temp % 10;
        temp = Math.floor(temp/10);
        while(temp > 0)
        {
            let left = temp %10;
            temp = Math.floor(temp/10);
            if(left == last)
            {
                console.log(i);
            }
            last = left;
            
        }
    }
}
//Write a program that prints numbers from 1 to 300 that are divisible by the product of their digits.
function DivisibelByproduct()
{
    for(let i = 1 ; i < 300 ; i++)
    {
        










    }
}
