// var name = "jake";
// function name() {
// let name = "dennies";
// }
// const pi = 3.1432;

// 

// var name = "project";
// console.log(typeof name);
// console.log(name)
//  function validation(form)
//  {
// //     e.preventDefault();
//     var username = document.getElementById('username').value;
//     var email = document.getElementById('email').value;
//     var number = document.getElementById('number').value;

//     var usercheck = /^[A-Za_z]{3,30}$/;
//     var emailcheck = /^[A-Za-z_0-9.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
//     var numbercheck = /^[6789][0-9]{9}$/;

//     if (usercheck.test(username)){
//         document.getElementById('errorname').innerHTML = " ";
//     }
//     else {
//         document.getElementById('errorname').innerHTML = "invalid name";
//         return false;
//     }

//     if (emailcheck.test(email)) {
//         document.getElementById('erroremail').innerHTML = " ";
//     }
//     else{
//         document.getElementById('erroremail').innerHTML = "invalid email";
//         return false;
//     }

//     if (numbercheck.test(number)) {
//         document.getElementById('errornumber').innerHTML = " ";
//     }
//     else{
//         document.getElementById('errornumber').innerHTML = "invalid number";
//         return false;
//     }
//     return true;
// }

// const form = document.querySelector('form');

// form.addEventListener('submit', validation);


// function checkLoginForm(form) {

//     if(form.username.value == "") {
//         alert("Username or Email is needed");
//         form.username.focus();
//         return false;
//     }
//     if(form.username.value.length < 4) {
//         alert("Username or Email is to short");
//         form.username.focus();
//         return false;
//     }
//     re = /^[-_a-zA-Z0-9.,@#!?]*$/;
//     if(!re.test(form.username.value)) {
//         alert("Username or Email only contains letters, numbers and _-.,@#!?");
//         form.username.focus();
//         return false;
//     }
    
    
//     if(form.pswd.value == ""){
//         alert("Password is needed");
//         form.pwd1.focus();
//         return false;
//     }   
//     return true;
//     }
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
// $('.carousel').carousel()
// .carousel('prev')
// .carousel('next')