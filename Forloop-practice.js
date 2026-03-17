function countFrom1to10() {
 do{
    let i = 1;
    console.log(i);
    if( i === 10){
        break;
    }
    document.write("-");

 }while( i <= 10);
}
function sumFrom0To30()
{
    let sum = 0;
    for(let i = 0; i <= 30; i++){
        sum += i;
    }
    console.log(sum);
}
function evenNumbersFrom1To50()
{
    for(let i = 1; i <= 50; i++){
        if(i % 2 === 0){
            document.write(i);
        }
    }
}
function countFrom10To1()
{
    for(let i = 10; i >= 1; i--){
        document.write(i);
    }
}
function patternPrint()
{
    for (let i  = 4 ; i >= 0 ; i --)
    {
        let A = "A";
        let B = 65;
        for(let j = 0 ; j <= i ; j ++ )
        {
            console.log(A);
            
        }
        console.log(String.fromCharCode(B));
        B++;
        document.write("<br>");
    }
}
