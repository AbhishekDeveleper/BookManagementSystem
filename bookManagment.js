const btn=document.querySelector(".addBookBtn");
const title=document.getElementById('title');
const author=document.getElementById('author');
const isbn=document.getElementById('isbn');
const publDate = document.getElementById('publicationDate');
const general = document.getElementById('gener');
const tables = document.getElementById('tableid');
let uid= 0;

const buttonClicked = document.querySelector('button'); 
let arr=[];
// if(arr.length==0){
//   tables.style.visibility='hidden'
// }else{
//   tables.style.visibility='visible'
// }
btn.addEventListener('click',(e)=>{
   
    e.preventDefault();
    uid = uid + 1
    console.log(uid,'uid')
    console.log(typeof isbn);
    
    
    const regex = /[^0-9]/;
    if(isbn.value.match(regex)){
      alert("Please enter a number");
      console.log('comes')
      return;
     
    }
    if(title.value=="" || author.value=="" || isbn.value=="" || publDate.value=="" || general.value ==''){ 
      alert("All fields are reqquired") 
      return}else{
        const newData = {titles:title.value,authors:author.value,isbns:isbn.value,pubDate:publDate.value,gener:general.value}
        arr.unshift(newData);
        console.log(arr);
      }
      
     
    if(arr.length !=0){
      tables.style.visibility='visible';
    }

     addFunction(arr);
    // const th1 = document.createElement('td');
    // th1.textContent = title.value;
    // const th2 = document.createElement('td');
    // th2.textContent = author.value;
    // const th3 = document.createElement('td');
    // th3.textContent = isbn.value;
    // const th4 = document.createElement('td');
    // th4.textContent = publDate.value;
    // const th5 = document.createElement('td');
    // th5.textContent = general.value;
    // const th6  = document.createElement('td');
    // const btn1  = document.createElement('button')
    // const btn2 = document.createElement('button');
    // btn1.textContent='Edit';
    // btn1.setAttribute('id',"editid");
    // btn2.setAttribute('id','deleteid')
    // btn2.textContent='Delete'
    // th6.appendChild(btn1);
    // th6.appendChild(btn2);
    //  tr.appendChild(th1)
    //  tr.appendChild(th2);
    //  tr.appendChild(th3)
    //  tr.appendChild(th4)
    //  tr.appendChild(th5);
    //  tr.appendChild(th6)
    //  tables.appendChild(tr);
    console.log(`Book Title : ${title.value} Book Author:${author.value} 
        ISBN: ${isbn.value} Publication Date: ${publDate.value}
        General : ${general.value}`)
  console.log("btn clicked")
  
})

let deleterow = (uid)=>{
      
      console.log(uid,'indelete')
      
      const delel = document.getElementsByClassName(uid);
      console.log(delel)
      delel[0].remove();
       
     
  
}

const editrow = (uid)=>{

}

const addFunction = (arr)=>{
  const tr  = document.createElement('tr');
  arr.map((data,index)=>{
    console.log(data.authors);
    if(index==0){
    const th1 = document.createElement('td');
  th1.textContent = data.titles;
  const th2 = document.createElement('td');
  th2.textContent = data.authors;
  const th3 = document.createElement('td');
  th3.textContent = data.isbns;
  const th4 = document.createElement('td');
  th4.textContent = data.pubDate;
  const th5 = document.createElement('td');
  th5.textContent = data.gener;
  const th6  = document.createElement('td');
  const btn1  = document.createElement('button')
  
  const btn2 = document.createElement('button');
  btn1.textContent='Edit';
  
  btn2.textContent='Delete'
  btn2.addEventListener('click',()=>deleterow(newid));
  btn1.addEventListener('click',editrow(uid));
  th6.appendChild(btn1);
  th6.appendChild(btn2);
   tr.appendChild(th1)
   tr.appendChild(th2);
   tr.appendChild(th3)
   tr.appendChild(th4)
   tr.appendChild(th5);
   tr.appendChild(th6)
   const newid ='newclass-'+uid;
   const editid = 'edit-'+uid
   tr.setAttribute('class',newid)
   btn1.setAttribute('class',editid);
   btn2.setAttribute('class',newid);
   tables.appendChild(tr);}else return;
  })
  
}

// Testing some javascript futionality
const ar=[3,4,5,6,7,8,9,6];
const value = ar.find((value,index)=> value==6);
console.log(value);