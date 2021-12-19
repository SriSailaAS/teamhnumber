var guessmac=Math.floor(Math.random()*100) + 1;
var num;
    var count=0;
function guessthenum(){
    num=document.getElementById("number").value;
    if(num<1||num>100){
        alert("Please Enter a number Between 1 to 100"); 
    }
    else{
        count++;
        if(num<guessmac){
            document.getElementById("demo1").innerHTML="You have guessed too Small";
            document.getElementById("demo2").innerHTML="No of guesses you have made : "+count;
        }
        else if(num>guessmac){
            document.getElementById("demo1").innerHTML="You have guessed too High";
            document.getElementById("demo2").innerHTML="No of guesses you have made : "+count;
        }
        else if(num==guessmac){
            document.getElementById("demo1").innerHTML="Wow,You Guessed it right.";
            document.getElementById("demo2").innerHTML="My Lucky Number is :"+guessmac;
        }
        if(count<10){
        document.getElementById("demo3").innerHTML="Guesses Remaining:"+(10-count);}
        else{
            document.getElementById("demo3").innerHTML="My Lucky Number is :"+guessmac;
        }
    }
    

}