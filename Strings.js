function concatination()
{
    let hello = "Hello";
    let World = "World";

    console.log(hello + " " + World);
}
function stringlegth()
{
    let var1 = "Javascript";
    console.log(var1.length);
}
function acessFirstCharacter()
{
    let var1 = "Programming";
    console.log(var1.at(0));
}
function extractPartOfString()
{
let variable = " coding is fun";
console.log(variable.slice(0,6));
}
function replaceCharacters()
{
    let cat = " cat";
    console.log(cat.replace('a','e'));
}
function Upper()
{
    let variable = " my name ";
    console.log(variable.toUpperCase())
}
function splitString()
{
    let str = "apple,bananna,orange";
    str.split(',');
}
function joinArray()
{
    let array = ["hello " , "world"];
    console.log(array.join(" "));
}
function removeExtraSpace()
{
    let variable = " hello world ";
    console.log(variable.trim());
}
function checkForWord()
{
    let variable = "hello world";
    console.log(variable.includes("world"));
}
function reverseString()
{
    let variable = "hello ";
    console.log(variable.split("").reverse().join(""));
}
function countCharacterOcurrence(c)
{
    let variable = "hello world";
    
    let array = variable.split("");
    let count = 0 ;
    for(let i = 0 ; i < array.length ; i++){
         if( i.toUpperCase == c.toUpperCase)
            count++;
        }
    console.log(count);
}
function palindromeCheck( str)
{
    console.log(str.split("").reverse().join("") === str);
}
function allToUpper(str)
{
    let array  = str.split(" ");
     for(let i  = array.length ; i>= 0 ; i--)
        array[i].toUpperCase;

return array;  

}
function formatNumber()
{

}
function extractNumbersfromString(str)
{
    let array = [];
    for(let i = 0 ; i < str.length ; i ++)
        if(Number(i))
            array.push(i);
}
function emailValidation(email)
{
    console.log(str.includes("@gmail.com"));
}
function replaceWord(str)
{
    console.log(str.replaceAll("bad" , "good"));
}
function removeDuplicate(str)
{
    let array = str.split("");
    for(let i  = 0 ; i < array.length ; i++)
        if(array[i] == array[i+1])
            array[i].delete();
            

let str = array.join(" ");
console.log(str);

}
function sortCharacter(str)
{       
    let array = str.split("");
    array.sort();
    console.log(array.join(""));
}
function checkForAnagram(str1,str2)
{
    if(fstr1.length != str2,length)
        return false;

    for(let i = 0 ; i < str1.length ; i++)
    {
        if(!str2.includes(str1[i]));
            return false;
    }
    return true;
}
function reverseWord(str)
{
console.log(str.split(" ").reverse().join(" "));
}
function longestWord(str)
{
    let array = str.split(" ");
    let longestWord = array[0];
    for(let i = 0 ; i < array.length ; i++)
    {
        if(array[i].length > longestWord.length)
            longestWord = array[i];
    }
    console.log(longestWord);
}
function AdvancePalindrome(str)
{
   let noComma = str.split(",").join("");
   let noSpace = noComma.split(" ").join("");
   let noExiclamation =noSpace.replace("!", "");
   let finalResult = noExiclamation.split("").reverse().join("").toLowerCase();
   console.log(noSpace === finalResult);
}
function characterFrequncy(str)
{
    let count = {}
    str.split("").forEach(char => {counts[char] = (counts[char] || 0) + 1;});
    console.log(count);
}   
function replaceVowelsWithNumbers(str)
{
 let array = str.split("");
for(let i = 0 ; i < array.length ; i++)
{
   switch(array[i].toLowerCase())
   {
    case "a":
        array[i] = 1;
        break;
    case "e":
        array[i]=2;
        break;
    case "i":
        array[i]=3;
        break;
    case "o":
        array[i]=4;
        break;
    case "u":
        array[i]=5;
        break;
   }
}
str = array.join("");
console.log(str);
}
function startWith(str)
{
    console.log(str.startsWith("java"));
}
function endWith(str)
{
    console.log(str.endsWith("png"));
}
function repeatt(str){
    console.log(str.repeat(3));
}
function findIndex(str)
{
    console.log(str.indexOf("o"));
}