// creating element table 
var table=document.createElement('table');
table.style.borderCollapse = "collapse";
table.style.margin='auto';
table.style.marginTop='10%';
// creating caption for table
var caption=document.createElement('caption');
caption.append(document.createTextNode('Employee Information'));
table.appendChild(caption);
caption.style.padding='12px';
caption.style.margin='12px';
caption.style.fontSize='20px';
caption.style.fontWeight='bold';
// creating table heads
let theadelements=['Name','Age','DOB','Email','Company'];
let tablelength=5;
var thead=document.createElement('thead');
var trow=document.createElement('tr');
for(let x=0;x<tablelength;)
{
    var th=document.createElement('th');
    th.style.paddingTop= '12px';
    th.style.paddingBottom='12px';
    th.style.paddingLeft='12px';
    th.style.paddingRight='12px';
    th.style.textAlign='left';
    th.style.backgroundColor='goldenrod';
    th.style.color='white';
    th.style.border='1px solid #ddd';
    th.appendChild(document.createTextNode(theadelements[x]));
    trow.appendChild(th);
    thead.appendChild(trow);
    x+=1;
}

table.appendChild(thead);

// creating table body elements

let tabledata=[
    {name:"Mohit Saxena",age:"20",dob:"29-08-2002",email:"Mohit.Saxena1@Geminisolutions.com",company:"Gemini Solutions Pvt Ltd"},
    {name:"Vikas Bansal",age:"21",dob:"14-07-2001",email:"vikasbansal@gmail.com",company:"Bansal Industry"},
    {name:"Rohit Agarwal",age:"20",dob:"12-04-2002",email:"rohitagarwal12@gmail.com",company:"GLA University"},
    {name:"Nitin Singh",age:"20",dob:"05-10-2002",email:"NitinSingh23@gmail.com",company:"Illumine Labs"}
]
let tbody=document.createElement('tbody');
let tr=document.createElement('tr');
for (var i= 0; i< tabledata.length; i++) {
    var element=tabledata[i];
    var trow=document.createElement('tr');
    if(i%2==0)
    {
        trow.style.backgroundColor='#f2f2f2';
    }
    for (var key in element) {
        var td=document.createElement("td");
        td.style.paddingTop= '12px';
        td.style.paddingBottom='12px';
        td.style.paddingLeft='12px';
        td.style.paddingRight='12px';
        td.style.border='1px solid #ddd';
        td.appendChild(document.createTextNode(element[key]));
        trow.appendChild(td);
    }
    tbody.appendChild(trow);
    table.appendChild(tbody); 
}

document.body.appendChild(table);
