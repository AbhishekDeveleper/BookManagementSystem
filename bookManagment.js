const btn=document.querySelector(".addBookBtn");
const title=document.getElementById('title');
const author=document.getElementById('author');
const isbn=document.getElementById('isbn');
const publDate = document.getElementById('publicationDate');
const general = document.getElementById('gener');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(`Book Title : ${title.value} Book Author: ${author.value} 
        ISBN: ${isbn.value} Publication Date: ${publDate.value}
        General : ${general.value}`)
  console.log("btn clicked")
})

// Testing some javascript futionality
const ar=[3,4,5,6,7,8,9,6];
const value = ar.find((value,index)=> value==6);
console.log(value);