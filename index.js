var name1= prompt("ENTER NAME OF PLAYER 1");
var name2 = prompt("ENTER NAME OF PLAYER 2");

const getname1=document.querySelector(".name1");
getname1.innerHTML=name1;

const getname2=document.querySelector(".name2");
getname2.innerHTML=name2;

let count1 = 0;
const count_value1 = document.getElementById("counter1");
const btns1 = document.querySelectorAll(".btn1");

btns1.forEach(function(btn){
    btn.addEventListener("click",function(b1){
        const obj1 = b1.currentTarget.classList;
        if(obj1.contains('decrease')){
            count1--;
        }
        if(obj1.contains('increase')){
            count1++;            
        }

        if(count1>0){
            count_value1.style.color="green";
        }
        if(count1<0){
            count_value1.style.color="red";
        }
        
        if(count1==11){
            alert(name1+" WINS");
            count1=0;
        }
        count_value1.textContent=count1;
    });
});

let count2 = 0;

const count_value2 = document.getElementById("counter2");
const btns2 = document.querySelectorAll(".btn2");

btns2.forEach(function(btn){
    btn.addEventListener("click",function(b2){
        const obj2 = b2.currentTarget.classList;
        if(obj2.contains('decrease')){
            count2--;
        }
        if(obj2.contains('increase')){
            count2++;            
        }

        if(count2>0){
            count_value2.style.color="green";
        }
        if(count2<0){
            count_value2.style.color="red";
        }
        
        if(count2==11){
            alert(name2+" WINS");
            count2=0;
        }
        count_value2.textContent=count2;
    });
});

