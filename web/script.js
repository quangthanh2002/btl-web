const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('adress-close')
// console.log (rightbtn)
adressbtn.addEventListener("click", function(){
    document.querySelector('adress-form').style.display = "flex"
})
// adressclose.addEventListener("click", function(){
//     document.querySelector('adress-form').style.display = "none"
// })
// slide------------
const rightbtn = document.querySelector('.fa-chevron-right')
rightbtn.addEventListener("click", function(){
    document.querySelector(".slider-content-left-top").style.right = "100%"
})