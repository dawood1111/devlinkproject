

const cardarray = Array.from(document.querySelectorAll('.cardcontainer'));
const arrowarray = Array.from(document.querySelectorAll('.arrow'));
const xarray=Array.from(document.querySelectorAll('.x'));


let saveval;
function cardinfo(cards, box) {
  const parray=Array.from(document.querySelectorAll('.aboutyou'))
 
    parray[cards].innerHTML=
    ` My name is ${users[cards].name} iam ${users[cards].field} looking for ${users[cards].requirment} to work togather on project ` ;
saveval=cards;
  

    cardarray[cards].classList.add('cards2');
    xarray[cards].classList.add('x1');

    
}


function removefun(xdrop){

        xarray[xdrop].classList.remove('x1');
        cardarray[xdrop].classList.remove('cards2');
    
}



function infobox(){
  const infocontainer=document.querySelector('.infocontainer');
  const page11=document.querySelector('.page1');
  page11.classList.add('in');
  infocontainer.classList.add('infocontainer1');
  const list2=document.querySelector('.listcontainer');
  list2.classList.add('content3');

}


const okbutton=document.querySelector('.Ok');

okbutton.addEventListener('click',()=>{


const interestlist5=document.querySelector('.interestlist');
const previousbutton=document.querySelector('.Previous');

interestlist5.classList.remove('interestlist');
previousbutton.remove();
okbutton.remove();
const list2=document.querySelector('.listcontainer');
list2.classList.remove('content3');

})


const heartarray= Array.from(document.querySelectorAll('.heartbutton'));

const users=[
  {
    name:'manar alex',
    birth:1999,
    country:'jordan',
    maritalstatus:'single',
    religion:'Muslim',
     requirment:'Ui/Ux Designer',
     field:'Android-Developer',
     univarsity:'Jordan University',
     company:'Green Circle'
    
  },
  {
    name:'ryan golsing',
    birth:2000,
    country:'eqypt',
    maritalstatus:'single',
    religion:'Muslim',
    requirment:'Back-End',
    field:'Front-End Developer' ,
     univarsity:'Al-Albyte University',
     company:'InnovaTech IT'


    
  },
  {
    name:'lil uzi',
    birth:2001,
    country:'lebanon',
    maritalstatus:'single',
    religion:'christian' ,
    requirment:'Application-Development',
    field:'Ui/Ux Designer',
     univarsity:'Al-Balqaa University',
     company:'Diyar United'


    
  },
  {
    name:'pop smoke',
    birth:1997,
    country:'palastine',
    maritalstatus:'married',
    religion:'Muslim' ,
    requirment:'Full-Stack',
    field:'Ui/Ux Designer',
     univarsity:'Jordan University',
     company:'Case In Point'

  },
  {
    name:'jt',
    birth:1990,
    country:'saudi arabia',
    maritalstatus:'single',
    religion:'Muslim',
    requirment:'Data-Science',
    field:'Front-End',
     univarsity:'Yarmouk University',
     company:'Bayt.com'

  },
  {
    name:'mariam aqel',
    birth:1998,
    country:'bahrain',
    maritalstatus:'single',
    religion:'atheist',
    requirment:'Front-End',
    field:'Data-Science',
     univarsity:'Mutah University',
     company:'Avertra'

    
  },
  {
    name:'alex ali',
    birth:1980,
    country:'lebanon',
    maritalstatus:'married',
    religion:'christian',
    requirment:'Back-End',
    field:'Front-End',
     univarsity:'Jordan University',
     company:'Bayt.com'

    
  },
  {
    name:'yugi moco',
    birth:1992,
    country:'iraq',
    maritalstatus:'married',
    religion:'atheist',
    requirment:'System-Development',
    field:'Data-Science',
     univarsity:'Al-Balqaa University',
     company:'Avertra'

  },
  {
    name:'manar alex',
    birth:1999,
    country:'iraq',
    maritalstatus:'married',
    religion:'Muslim',
    requirment:'Android-Developer'
    , field:'Ui/Ux Designer',
     univarsity:'Amman University',
     company:'Case In Point'

    
  },
  {
    name:'manar alex',
    birth:1994,
    country:'qatar',
    maritalstatus:'single',
    religion:'Muslim',
    requirment:'Android-Developer',
    field:'Data-Science',
     univarsity:'Al-Albyte University',
     company:'InnovaTech IT'

    
  },
  {
    name:'manar alex',
    birth:1989,
    country:'lebanon',
    maritalstatus:'single',
    religion:'christian' ,
    requirment:'Front-End',
    field:'Back-End Developer',
     univarsity:'Yarmouk University',
     company:'Diyar United'

  },

  {
    name:'manar alex',
    birth:2001,
    country:'jordan',
    maritalstatus:'single',
    religion:'Muslim',
    requirment:'Ui/Ux Designer',
    field:'Full-Stack',
     univarsity:'Mutah University',
     company:'Green Circle'

    
  },
]

function fieldclick(value){
  const clickarray=Array.from(document.querySelectorAll('.clickint'));
  clickarray[value].classList.add('changer');

  user.field=clickarray[value].textContent;

       
}

const user={
  firstname:'dawood',
  lastname:'jabber',
  age:22,
   Requirment:'Back-End',
    field:null
    
}

function deal(num){
  const displayele=Array.from(document.querySelectorAll('.display1'));
  if(user.field==users[num].requirment){

 const divElement=document.createElement('div');
 const xElement=document.createElement('button');

 displayele[num].appendChild(divElement);
 divElement.classList.add('matchedAlert');
 xElement.classList.add('x2');
 divElement.textContent='Match Your Field';
 divElement.appendChild(xElement);
 xElement.innerHTML='<i class="fa-solid fa-chevron-down"></i>'
 xElement.addEventListener('click',()=>{
  divElement.remove();

 })
 

  }
  else{
    const divElement2=document.createElement('div');
    const xElement2=document.createElement('button')

    displayele[num].appendChild(divElement2);
    divElement2.classList.add('unmatchedAlert');
    xElement2.classList.add('x2');
    divElement2.textContent='Doesnt Match Your Field';
    divElement2.appendChild(xElement2);
    xElement2.innerHTML='<i class="fa-solid fa-chevron-down"></i>'
    xElement2.addEventListener('click',()=>{
      divElement2.remove();
      
     })
  }
 
  
}

function name1(){
  const arrayname=Array.from(document.querySelectorAll('.name'))
  for(let i=0;i<=arrayname.length;i++){
    arrayname[i].innerHTML=`${users[i].name}`
  }
  
}







function showpage(pagenumber){
  const page1=document.querySelector('.page1');
  const page2=document.querySelector('.page2');
  const previousbutton=document.querySelector('.previous');
 
  if(pagenumber==1){

              page2.classList.add('dis');
              page1.classList.add('ac');
              page1.classList.remove('dis');
              page1.classList.remove('dis')
  }
  else if(pagenumber==2){
              
              page1.classList.add('dis');
              page2.classList.add('ac');
              page2.classList.remove('dis');
              page1.classList.remove('ac');

  }
}
const profilearray=Array.from(document.querySelectorAll('.profile'));

function profile(number){
  const username=document.querySelector('.username');
  profilearray[number];
  const leftbar=document.querySelector('.leftside');
  leftbar.classList.add('leftbar');
  const imgele=Array.from(document.querySelectorAll('.pfp1'));
  const pfpele=document.querySelector('.pfp');
  pfpele.appendChild(imgele[number]);
  imgele[number].classList.add('pfp2');

  username.innerHTML=`${users[number].name}`;

  document.querySelector('.uni').innerHTML=`Studied at <strong>${users[number].univarsity}</strong>`;

   document.querySelector('.company').innerHTML=`Worked at <strong>${users[number].company}</strong>`;

   document.querySelector('.maritalstatus').innerHTML=`Maritalstatus <strong>${users[number].maritalstatus}</strong>`;

    document.querySelector('.birth').innerHTML=`Born in <strong>${users[number].birth}</strong>`;


}
name1();


function leftarrow(){
  
  const leftbar1=document.querySelector('.leftside');
  leftbar1.classList.remove('leftbar');
}