"use strict";

let a=1000;
let b=0;
function idCounter(b){
    b=a;
    a+=1;
    return b;
}
let result;
function getRandomInt(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    result=Math.floor(Math.random() * (max - min) + min);
    return result;
    
}

let st;
function netS(st){
    st=st-(st*0.075);
    return st;
}
let s1=getRandomInt(1500,2000);
let ghazi= {

    EmployeeID:idCounter(),
    FullName:"Ghazi Samer",
    department:"Administration",
    Level:"Senior",
    Image:new URL('https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png'),
    Salary:s1,
    netSalary:netS(s1)
}
let s2=getRandomInt(1500,2000);
let lana= {
    EmployeeID:idCounter(),
    FullName:"Lana Ali",
    department:"Finance",
    Level:"Senior",
    Image:new URL('https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-7-940x940.png') ,
    Salary:s2 ,
    netSalary:netS(s2)
}
let s3=getRandomInt(1500,2000);
let tamara= {
    EmployeeID:idCounter(),
    FullName:"Tamara Ayoub",
    department:"Marketing",
    Level:"Senior",
    Image:new URL('https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-7-940x940.png'),
    Salary:s3,
    netSalary:netS(s3)
}
let s4=getRandomInt(1000,1500);
let safi= {
    EmployeeID:idCounter(),
    FullName:"Safi Walid",
    department:"Administration",
    Level:"Mid-Senior",
    Image:new URL('https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png'),
    Salary:s4,
    netSalary:netS(s4)
}
let s5=getRandomInt(1500,2000);
let omar= {
    EmployeeID:idCounter(),
    FullName:"Omar Zaid",
    department:"Development",
    Level:"Senior",
    Image:new URL('https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png') ,
    Salary:s5,
    netSalary:netS(s5)
}
let s6=getRandomInt(500,1000);
let rana= {
    EmployeeID:idCounter(),
    FullName:"Rana Saleh",
    department:"Development",
    Level:"Junior",
    Image:new URL('https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-7-940x940.png') ,
    Salary:s6,
    netSalary:netS(s6)

}
let s7=getRandomInt(1000,1500);
let hadi= {
    EmployeeID:idCounter(),
    FullName:"Hadi Ahmad",
    department:"Finance",
    Level:"Mid-Senior",
    Image:new URL('https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png'),
    Salary:s7,
    netSalary:netS(s7)

}

document.write("Employee name:" + ghazi.FullName) ;
document.write('<br/>');
document.write("Employee salary:" + ghazi.netSalary);
document.write('<br/><br/>');


document.write("Employee name:" + lana.FullName) ;
document.write('<br/>');
document.write("Employee salary:" + lana.netSalary);
document.write('<br/><br/>');


document.write("Employee name:" + tamara.FullName) ;
document.write('<br/>');
document.write("Employee salary:" + tamara.netSalary);
document.write('<br/><br/>');


document.write("Employee name:" + safi.FullName) ;
document.write('<br/>');
document.write("Employee salary:" + safi.netSalary);
document.write('<br/><br/>');


document.write("Employee name:" + rana.FullName) ;
document.write('<br/>');
document.write("Employee salary:" + rana.netSalary);
document.write('<br/><br/>');


document.write("Employee name:" + hadi.FullName) ;
document.write('<br/>');
document.write("Employee salary:" + hadi.netSalary);
document.write('<br/><br/>');
