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
let m=document.getElementsByTagName("main")[0];



let sec1=document.createElement("div");
m.appendChild(sec1);

let sec2=document.createElement("div");
m.appendChild(sec2);

let sec3=document.createElement("div");
m.appendChild(sec3);

let sec4=document.createElement("div");
m.appendChild(sec4);



Emp.prototype.Ren=function(){
    // document.write(`<p>Employee name:${this.FullName}</p>`)
    // document.write(`<p>Department:${this.department}</p>`)
    // document.write(`<p>Employee salary:${this.EmpS}</p>`)
    // document.write("</br>")


    let h=document.getElementsByTagName("header")[0];

    h.style.boxSizing="border-box";
    h.style.height="150px";
 
    
    h.style.margin="0px";
    h.style.display="flex";
    h.style.borderBottom="5px solid white"
    h.style.backgroundColor="#f5ebeb";
  
    h.style.alignItems="center";
    h.style.listStyle="none";


    h.style.fontSize="16px";

    
    let im=document.getElementsByTagName("img")[0];
    im.style.height="130px";
    
    

 
    



    let m=document.getElementsByTagName("main")[0];
    m.style.backgroundColor="#867070"


    m.style.display="flex";
    m.style.gap="10px";
    m.style.flexWrap="wrap";
    m.style.paddingLeft="100px";
    m.style.paddingRight="100px";
    m.style.paddingTop="10px";


    
    if (this.department=="Administration"){
        let sec=document.createElement("div");
        sec1.appendChild(sec)

        let Eimg=document.createElement("img");
        Eimg.src=this.Image;
        Eimg.alt=this.name;
        sec.appendChild(Eimg);
        Eimg.style.height="200px";
        Eimg.style.borderRadius="50%"
    
    
        let L1=document.createElement("p");
        L1.textContent=(`Name: ${this.FullName}- ID: ${this.Empid}`);
        sec.append(L1);
    
        let L2=document.createElement("p");
        L2.textContent=(`Department: ${this.department}- Level: ${this.Level}`);
        sec.appendChild(L2);
    
        let L3=document.createElement("p");
        L3.textContent=(this.EmpS);
        sec.appendChild(L3)

        // sec.style.border="3px solid #D5B4B4";
        sec.style.height="340px";
        sec.style.width="300px";
        sec.style.textAlign="center";
        sec.style.borderRadius="25px"
        

        sec.style.backgroundColor="white";
        sec.style.boxSizing="border-box";
        sec.style.padding="0px";
        sec.style.marginBottom="10px";    
    }
    else if(this.department=="Finance"){
        let sec=document.createElement("div");
        sec2.appendChild(sec)

        let Eimg=document.createElement("img");
        Eimg.src=this.Image;
        Eimg.alt=this.name;
        sec.appendChild(Eimg);
        Eimg.style.height="200px";
        Eimg.style.borderRadius="50%";
        Eimg.style.marginLeft="20px";
    
    
        let L1=document.createElement("p");
        L1.textContent=(`Name: ${this.FullName}- ID: ${this.Empid}`);
        sec.append(L1);
    
        let L2=document.createElement("p");
        L2.textContent=(`Department: ${this.department}- Level: ${this.Level}`);
        sec.appendChild(L2);
    
        let L3=document.createElement("p");
        L3.textContent=(this.EmpS);
        sec.appendChild(L3)

        // sec.style.border="3px solid #D5B4B4";
        sec.style.height="340px";
        sec.style.width="300px";
        sec.style.textAlign="center";
        sec.style.borderRadius="25px"
        

        sec.style.backgroundColor="white";
        sec.style.boxSizing="border-box";
        sec.style.padding="0px";
        sec.style.marginBottom="10px";        
    }
    else if (this.department=="Marketing"){


        let sec=document.createElement("div");
        sec3.appendChild(sec)

        let Eimg=document.createElement("img");
        Eimg.src=this.Image;
        Eimg.alt=this.name;
        sec.appendChild(Eimg);
        Eimg.style.height="200px";
        Eimg.style.borderRadius="50%"
    
    
        let L1=document.createElement("p");
        L1.textContent=(`Name: ${this.FullName}- ID: ${this.Empid}`);
        sec.append(L1);
    
        let L2=document.createElement("p");
        L2.textContent=(`Department: ${this.department}- Level: ${this.Level}`);
        sec.appendChild(L2);
    
        let L3=document.createElement("p");
        L3.textContent=(this.EmpS);
        sec.appendChild(L3)

        // sec.style.border="3px solid #D5B4B4";
        sec.style.height="340px";
        sec.style.width="300px";
        sec.style.textAlign="center";
        sec.style.borderRadius="25px"
        

        sec.style.backgroundColor="white";
        sec.style.boxSizing="border-box";
        sec.style.padding="0px";
        sec.style.marginBottom="10px";    
    
    
    }
    else if (this.department=="Development"){


        let sec=document.createElement("div");
        sec4.appendChild(sec)

        let Eimg=document.createElement("img");
        Eimg.src=this.Image;
        Eimg.alt=this.name;
        sec.appendChild(Eimg);
        Eimg.style.height="200px";
        Eimg.style.borderRadius="50%"
    
    
        let L1=document.createElement("p");
        L1.textContent=(`Name: ${this.FullName}- ID: ${this.Empid}`);
        sec.append(L1);
    
        let L2=document.createElement("p");
        L2.textContent=(`Department: ${this.department}- Level: ${this.Level}`);
        sec.appendChild(L2);
    
        let L3=document.createElement("p");
        L3.textContent=(this.EmpS);
        sec.appendChild(L3)

        // sec.style.border="3px solid #D5B4B4";
        sec.style.height="340px";
        sec.style.width="300px";
        sec.style.textAlign="center";
        sec.style.borderRadius="25px"
        

        sec.style.backgroundColor="white";
        sec.style.boxSizing="border-box";
        sec.style.padding="0px";
        sec.style.marginBottom="10px";
    
    
    }
    let f=document.getElementsByTagName("footer")[0];
    f.style.backgroundColor="#F5EBEB";
    f.style.display="flex";
    f.style.alignItems="center";
    f.style.gap="20px";

}

let ghazi=new Emp("Ghazi Samer","Administration","Senior","./Ghazi.jpg")
ghazi.Empid=ghazi.id();
ghazi.EmpS=ghazi.EmSalary();

let lana=new Emp("Lana Ali","Finance","Senior","./Lana.jpg")
lana.Empid=lana.id();
lana.EmpS=lana.EmSalary();

let tamara=new Emp("Tamara Ayoub","Marketing","Senior","./Tamara.jpg")
tamara.Empid=tamara.id();
tamara.EmpS=tamara.EmSalary();

let safi=new Emp("Safi Walid","Administration","Mid-Senior","./Safi.jpg")
safi.Empid=safi.id();
safi.EmpS=safi.EmSalary();

let omar=new Emp("Omar Zaid","Development","Senior","./Omar.jpg")
omar.Empid=omar.id();
omar.EmpS=omar.EmSalary();

let rana=new Emp("Rana Saleh","Development","Junior","./Rana.jpg")
rana.Empid=rana.id();
rana.EmpS=rana.EmSalary();

let hadi=new Emp("Hadi Ahmad","Finance","Mid-Senior","./Hadi.jpg")
hadi.Empid=hadi.id();
hadi.EmpS=hadi.EmSalary();





ghazi.Ren();
lana.Ren();
tamara.Ren();
safi.Ren();
omar.Ren();
rana.Ren();
 hadi.Ren();
