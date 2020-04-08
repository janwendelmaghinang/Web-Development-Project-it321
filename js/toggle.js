const mybtn = document.querySelector('.source');
const source = document.querySelector('.form-source');
const country = document.querySelector('.form-country');
const category = document.querySelector('.form-category');
//const frm = document.querySelector('')


mybtn.onclick =  function (){
    source.classList.toggle('source-show')
    country.classList.toggle('fhide')
    category.classList.toggle('fhide')
    
}
