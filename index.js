let num = 0
let num1 = 0
let num2 = 0
document.getElementById("btn1").onclick = function(){
    num = num+1
    console.log(num)
    document.getElementById("head1").innerHTML = num
}
document.getElementById("btn2").onclick = function(){
    num = 0
    console.log(num)
    document.getElementById("head1").innerHTML = num
}
document.getElementById("btn3").onclick = function(){
    num = num-1
    console.log(num)
    document.getElementById("head1").innerHTML = num
    
}

document.getElementById("btn4").onclick = function(){
    num1 = num1+1
    console.log(num)
    document.getElementById("head2").innerHTML = num1
}

document.getElementById("btn5").onclick = function(){
    num1 = 0
    console.log(num)
    document.getElementById("head2").innerHTML = num1
}


document.getElementById("btn6").onclick = function(){
    num1 = num1-1
    console.log(num1)
    document.getElementById("head2").innerHTML = num1
    
}
document.getElementById("btn7").onclick = function(){
    num2 = num2+1
    console.log(num2)
    document.getElementById("head3").innerHTML = num2
}
document.getElementById("btn8").onclick = function(){
    num2 = 0
    console.log(num2)
    document.getElementById("head3").innerHTML = num2
}
document.getElementById("btn9").onclick = function(){
    num2 = num2-1
    console.log(num2)
    document.getElementById("head3").innerHTML = num2
    
}