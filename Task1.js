function calculater( )
{
    let num1 , num2 , result , operation ; 
    num1 = parseInt( prompt( 'Enter First Number' ) );
    num2 = parseInt( prompt( 'Enter Second Number' ) );
    operation = prompt( 'Enter Operation' );
    switch( operation )
    {
        case '+' :
            result = num1 + num2;
            break;
        case '-' :
            result = num1 - num2;
            break;
        case '*' :
            result = num1 * num2;
            break;
        case '/' :
            result = num1 / num2;
            break;
        default :
            result = 'Invalid Operation';
    }
    console.log( result );
}
function marks()
{
    let mark = 0 ;
    mark = parseFloat(prompt(" enter your mark so i can evaluate it : "));
    if( mark>=90 && mark<=100)
    {
        Document.write("your grade is A+");
    }
    else if(mark>=80 && mark<90)
    {
        Document.write("your grade is A");
    }
    else if(mark>=70 && mark<80)
    {
        Document.write("your grade is B");
    }
    else if(mark>=60 && mark<70)
    {
        Document.write("your grade is C");
    }
    else if(mark>=50 && mark<60)
    {
        Document.write("your grade is D");
    }
    else
    {
        Document.write("Fail");
    }
}
function circleArea()
{
    const pi = 3.14;
    let radius = parseFloat(prompt("Enter the radius of the circle : "));
    let area = pi * radius ** 2;
    console.log("The area of the circle is : " + area);
}
function simpleCondition()
{

    let x = parseInt(prompt("Enter the value of x:"));
    let y = parseInt(prompt("Enter the value of y:")); 

    if (x > y)
    {
        alert("Hello World");
        console.log("Hello World");
        document.body.innerHTML = "Hello World";
    }
    else
    {
        alert("Goodbye");
        console.log("Goodbye");
        document.body.innerHTML = "Goodbye";
    }
}
function typeConvertion()
{
    let num1 , num2 ;
    num1 = prompt( 'Enter First Number' ) ;
    num2 =  prompt( 'Enter Second Number' ) ;
   
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(  " Addition  = " + num1 + num2 );
    document.write( "Addition  = " + num1 + num2 );
   
    console.log( " Multiplication  = " + num1 * num2 );
    document.write ( "  Multiplication  = " + num1 * num2 );
}
function userInfo()
{
    let name = prompt("Enter your name : ");
    let age = prompt("Enter your age : ");
    let city = prompt("Enter your city : ");
    console.log("hello my name is " + name + " and i am " + age + " years old and i live in " + city);
    document.write("hello my name is " + name + " and i am " + age + " years old and i live in " + city);
    document.alert("hello my name is " + name + " and i am " + age + " years old and i live in " + city);
}
function evenOrOdd()
{
    let num = parseInt(prompt("Enter a number: "));
    if (num % 2 === 0) {
        alert(num + " is even");
    } 
    else {
        alert(num + " is odd");
    }
}
function ageCategory()
{
    let age = parseInt(prompt("Enter your age: "));
    if (age >= 0 && age < 13) {
        alert("You are a child");
        console.log("You are a child");
    } 
    else if (age >= 13 && age <= 19) {
        alert("You are a teenager");
        console.log("You are a teenager");
    } 
    else if( age >= 20 && age <= 59) {
        alert("You are an adult");
        console.log("You are an adult");
    } 
    else {
        alert("You are a senior");
        console.log("You are a senior");
    }
}
function simpleLogInSystem()
{
    let username = prompt("Enter your username: ");
    let password = parseInt(prompt("Enter your password: "));
    if (username === "admin" && password === 1234) {
        alert("You are logged in");
        console.log("You are logged in");
    } 
    else {
        alert("Invalid username or password");
        console.log("Invalid username or password");
    }
}
