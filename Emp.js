"use strict";

let a=1000;
let b=0;

function Emp(name,department,level,image){

    this.FullName=name;
    this.department=department;
    this.Level=level;
    this.Image=image;
    this.Empid=0
    this.EmpS=0
    this.id=function() {
        b=a;
        a+=1;
        return (b);
    }
}
let result;
let min;
let max;
Emp.prototype.EmSalary=function(){
    if (this.Level=="Senior")
    {
        min = 1500;
        max = 2000;
        result=Math.floor(Math.random() * (max - min) + min);
        return (result-(result*0.075));
    }
    else if(this.Level=="Mid-Senior"){
        min = 1000;
        max = 1500;
        result=Math.floor(Math.random() * (max - min) + min);
        return (result-(result*0.075));
    }
    else if (this.Level=="Junior"){
        min = 500;
        max = 1000;
        result=Math.floor(Math.random() * (max - min) + min);
        return (result-(result*0.075));
    }
}


Emp.prototype.Ren=function(){
    document.write(`<p>Employee name:${this.FullName}</p>`)
    document.write(`<p>Department:${this.department}</p>`)
    document.write(`<p>Employee salary:${this.EmpS}</p>`)
    document.write("</br>")

}

let ghazi=new Emp("Ghazi Samer","Administration","Senior","https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png")
ghazi.Empid=ghazi.id();
ghazi.EmpS=ghazi.EmSalary();

let lana=new Emp("Lana Ali","Finance","Senior","https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-7-940x940.png")
lana.Empid=lana.id();
lana.EmpS=lana.EmSalary();

let tamara=new Emp("Tamara Ayoub","Marketing","Senior","https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-7-940x940.png")
tamara.Empid=tamara.id();
tamara.EmpS=tamara.EmSalary();

let safi=new Emp("Safi Walid","Administration","Mid-Senior","https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png")
safi.Empid=safi.id();
safi.EmpS=safi.EmSalary();

let omar=new Emp("Omar Zaid","Development","Senior","https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png")
omar.Empid=omar.id();
omar.EmpS=omar.EmSalary();

let rana=new Emp("Rana Saleh","Development","Junior","https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-7-940x940.png")
rana.Empid=rana.id();
rana.EmpS=rana.EmSalary();

let hadi=new Emp("Hadi Ahmad","Finance","Mid-Senior","https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png")
hadi.Empid=hadi.id();
hadi.EmpS=hadi.EmSalary();


ghazi.Ren();
lana.Ren();
tamara.Ren();
safi.Ren();
omar.Ren();
rana.Ren();
hadi.Ren();
// function getRandomInt(min, max) {
    
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     result=Math.floor(Math.random() * (max - min) + min);
//     return result;
    
// }

// let st;
// function netS(st){
//     st=st-(st*0.075);
//     return st;
// }
// let s1=getRandomInt(1500,2000);
//  let ghazi= {

//      EmployeeID:idCounter(),
//      FullName:"Ghazi Samer",
//      department:"Administration",
//      Level:"Senior",
//      Image:new URL('https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png'),
//      Salary:s1,
//      netSalary:netS(s1)
// }
// let s2=getRandomInt(1500,2000);
// let lana= {
//     EmployeeID:idCounter(),
//     FullName:"Lana Ali",
//     department:"Finance",
//     Level:"Senior",
//     Image:new URL('https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-7-940x940.png') ,
//     Salary:s2 ,
//     netSalary:netS(s2)
// }
// let s3=getRandomInt(1500,2000);
// let tamara= {
//     EmployeeID:idCounter(),
//     FullName:"Tamara Ayoub",
//     department:"Marketing",
//     Level:"Senior",
//     Image:new URL('https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-7-940x940.png'),
//     Salary:s3,
//     netSalary:netS(s3)
// }
// let s4=getRandomInt(1000,1500);
// let safi= {
//     EmployeeID:idCounter(),
//     FullName:"Safi Walid",
//     department:"Administration",
//     Level:"Mid-Senior",
//     Image:new URL('https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png'),
//     Salary:s4,
//     netSalary:netS(s4)
// }
// let s5=getRandomInt(1500,2000);
// let omar= {
//     EmployeeID:idCounter(),
//     FullName:"Omar Zaid",
//     department:"Development",
//     Level:"Senior",
//     Image:new URL('https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png') ,
//     Salary:s5,
//     netSalary:netS(s5)
// }
// let s6=getRandomInt(500,1000);
// let rana= {
//     EmployeeID:idCounter(),
//     FullName:"Rana Saleh",
//     department:"Development",
//     Level:"Junior",
//     Image:new URL('https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-7-940x940.png') ,
//     Salary:s6,
//     netSalary:netS(s6)

// }
// let s7=getRandomInt(1000,1500);
// let hadi= {
//     EmployeeID:idCounter(),
//     FullName:"Hadi Ahmad",
//     department:"Finance",
//     Level:"Mid-Senior",
//     Image:new URL('https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png'),
//     Salary:s7,
//     netSalary:netS(s7)

// }

// document.write("Employee name:" + ghazi.FullName) ;
// document.write('<br/>');
// document.write("Employee salary:" + ghazi.netSalary);
// document.write('<br/><br/>');


// document.write("Employee name:" + lana.FullName) ;
// document.write('<br/>');
// document.write("Employee salary:" + lana.netSalary);
// document.write('<br/><br/>');


// document.write("Employee name:" + tamara.FullName) ;
// document.write('<br/>');
// document.write("Employee salary:" + tamara.netSalary);
// document.write('<br/><br/>');


// document.write("Employee name:" + safi.FullName) ;
// document.write('<br/>');
// document.write("Employee salary:" + safi.netSalary);
// document.write('<br/><br/>');


// document.write("Employee name:" + rana.FullName) ;
// document.write('<br/>');
// document.write("Employee salary:" + rana.netSalary);
// document.write('<br/><br/>');


// document.write("Employee name:" + hadi.FullName) ;
// document.write('<br/>');
// document.write("Employee salary:" + hadi.netSalary);
// document.write('<br/><br/>');
