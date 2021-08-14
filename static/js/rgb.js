// console.time();
console.log("this is 1");
// // // console.assert(2>3,"This is not possible");
// // console.table({name:"Deepank",marks:99})
// // console.timeEnd();
// let a = prompt("hello");
// // if(a>100){
// //     screen("Success");
// // }
// // let b = window.document;
// // b= window.innerHeight;
// // // console.log("b1=",b);
// // // if(a>100){
// // //     b=b/2;
// // //     console.log("b2=",b);
// // // }
// // // a=location;
function getRandom10() {
    let rand1 = Math.floor((Math.random() * 25) + 1)*10;
    return rand1;
  }
  let count_x_color=getRandom10();
  let count_y_color=getRandom10();
  let count_z_color=getRandom10();
console.log(count_z_color);
console.log(count_y_color);
console.log(count_x_color);
let x=0,y=0,z=0,clickcount=0;
let m = document.getElementById("textarea");
m.style.color = `rgb(${count_x_color},${count_y_color},${count_z_color})`
let x_element =document.getElementById('X').addEventListener('click',function(){
    x=x+10;
    if(x>250){
        alert(`Value Of X Is Greater Then 255
        X=${x}
        Press X++ key ${(x-250)/10} times.`)
    }
    console.log(x);
    
    m.style.backgroundColor = `rgb(${x},${y},${z})`;
    clickcount=clickcount+1;
    m.innerText=clickcount;
    if(x==count_x_color && y==count_y_color && z==count_z_color){
        new_element = document.createElement('h1');
        new_element.innerText = `You Have Won The Game in ${clickcount} Clicks`
        let wins = document.querySelector('div.div');
        wins.append(new_element);
    }
});
let y_element =document.getElementById('Y').addEventListener('click',function(){
    y=y+10;
    if(y>250){
        alert(`Value Of y Is Greater Then 255
        y=${y}
        Press y++ key ${(y-250)/10} times.`)
    }
    m.style.backgroundColor = `rgb(${x},${y},${z})`;
    console.log(y);
    clickcount=clickcount+1;
    m.innerText=clickcount;
    if(x==count_x_color && y==count_y_color && z==count_z_color){
        new_element = document.createElement('h1');
        new_element.innerText = `You Have Won The Game in ${clickcount} Clicks`
        let wins = document.querySelector('div.div');
        wins.append(new_element);
    }
});
let z_element =document.getElementById('Z').addEventListener('click',function(){
    z=z+10;
    m.style.backgroundColor = `rgb(${x},${y},${z})`;
    if(z>250){
        alert(`Value Of z Is Greater Then 255
        z=${z}
        Press z++ key ${(z-250)/10} times.`)
    }
    clickcount=clickcount+1;
    console.log(z);
    m.innerText=clickcount;
    if(x==count_x_color && y==count_y_color && z==count_z_color){
        new_element = document.createElement('h1');
        new_element.innerText = `You Have Won The Game in ${clickcount} Clicks`
        let wins = document.querySelector('div.div');
        wins.append(new_element);
    }
});
let x1_element =document.getElementById('X1').addEventListener('click',function(){
    x=x-10;
    if(x<0){
        alert(`Value Of X Is Less Then 0
        x=${x}
        Press X++ key ${x/-10} times.`)
    }
    console.log(x);
    clickcount=clickcount+1;

    m.style.backgroundColor = `rgb(${x},${y},${z})`;
    m.innerText=clickcount;
    if(x==count_x_color && y==count_y_color && z==count_z_color){
        new_element = document.createElement('h1');
        new_element.innerText = `You Have Won The Game in ${clickcount} Clicks`
        let wins = document.querySelector('div.div');
        wins.append(new_element);
    }
});
let y1_element =document.getElementById('Y1').addEventListener('click',function(){
    y=y-10;
    if(y<0){
        alert(`Value Of Y Is Less Then 0
        y=${y}
        Press Y++ key ${y/-10} times.`)
    }
    clickcount=clickcount+1;
 
    m.style.backgroundColor = `rgb(${x},${y},${z})`;
    m.innerText=clickcount;
    console.log(y);
    if(x==count_x_color && y==count_y_color && z==count_z_color){
        new_element = document.createElement('h1');
        new_element.innerText = `You Have Won The Game in ${clickcount} Clicks`
        let wins = document.querySelector('div.div');
        wins.append(new_element);
    }
});
let z1_element =document.getElementById('Z1').addEventListener('click',function(){
    clickcount=clickcount+1;
  
    m.style.backgroundColor = `rgb(${x},${y},${z})`;
    z=z-10;
    if(z<0){
        alert(`Value Of Z Is Less Then 0
        z=${z}
        Press Z++ key ${z/-10} times.`)
    }
    m.innerText=clickcount;
    console.log(z);
    if(x==count_x_color && y==count_y_color && z==count_z_color){
        new_element = document.createElement('h1');
        new_element.innerText = `You Have Won The Game in ${clickcount} Clicks`
        let wins = document.querySelector('div.div');
        wins.append(new_element);
    }
});

// let i=0;
// let a = document.getElementById("clickme").addEventListener('click',function(){
//     console.log(`Click Count = ${i}`);
//     i=i+1;
//     let m = document.getElementById("textarea");
//     m.innerText = i;
//     if(i>10){
//         m.style.color='blue';
//     }
// });
// let c = document.getElementById("3").addEventListener('click',function(){
//     console.log(`Click Count = ${i}`);
//     i=i-1;
//     let m = document.getElementById("2");
//     m.innerText = i;
//     if(i<=-1){
//         m.style.color='red';
//     }
// });
// console.log(a)
// let a="javascript";
// let b= document.links;
// Array.from(b).forEach(function(element){
//     if(a in b){
//         console.log(b);
//     }
// })
