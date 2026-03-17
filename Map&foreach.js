function doubleTheVlue(arr){
   return arr.map(Element => Element * 2 )
}
 function numbersToStrings(arr){
    return arr.map(Element => Element.toString());
}
function upperCaseNames(arr){
    return arr.map(Element => Element.toUpperCase());
}
function addFive(arr){
    return arr.map(Element => Element+5);
}
function getNames(arr)
{
    return arr.map(Element => Element.name)
}
function wordLengths(arr)
{
    return arr.map(item => item.length)
}
function valTimesIndex(arr){
    return arr.map((Element,index) => Element * index);
}
function makeUsernames(arr){
    return arr.map(Element => "@" + Element.username);
}
function squareNumbers(arr){
    return arr.map(Element => Element * Element);
}
functionfirstLetters(arr){
    return arr.map(Element => Element[0]);
}
function sumNumbers(arr)
{
  let sum = 0;
  arr.forEach(Element => sum += Element);
  return sum;
}
function countEven(arr) {
    let sumEven = 0;
    arr.forEach((Element, index) => {
        if (index % 2 == 0) {
            sumEven += Element;
        }
    });
    return sumEven;
}
function timesTen(arr)
{
    return arr.map(Element=> Element* 10 );
}
function addAdult(arr) {
  return arr.map(person => {
    return {...person,adult: person.age >= 18};});
}
function addTax(arr)
{
    return arr.map(Element => Element*1.1);
}
function countBig(arr){
  let count = 0;
  arr.forEach(item => { if(item > 50)
    count++;
   });
   return count;
}
function labelNumbers(arr){
    return arr.map(item => "Number :" + item);
}
function productNames(arr){
    return arr.map(element => element.product);
}
function addIndex(arr){
    return arr.map((Element,index) => Element + index);
}
function isEvenArray(arr){
    return arr.map(Element => Element % 2 == 0);
}
