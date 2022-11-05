let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

function validate()
{
var user_nam=document.getElementById("user_name").value;
var pas=document.getElementById("pass").value;
if (user_nam=="harshadpawar0018@gmail.com" && pas=="Harshad11")
{
alert("Login Sucessfully");
return false;
}
else{
    alert("Enter Valid User Name And Password")
}
}
// Booking Valitation
function validateBooking()
{
var dest=document.getElementById("Dest").value;
var seat=document.getElementById("Seat").value;
var mydate=new Date($('#arrivalclass').val());
var mydate2= new Date($('#leavclass').val())
let day=mydate.getDate();
let month=mydate.getMonth()+1;
let year=mydate.getFullYear();
let newvar2=([day,month,year].join('/'));
var currDt = new Date();
var cuuDay = currDt.getDate();
var currMon = currDt.getMonth()+1;
var currYr = currDt.getFullYear();
if ( mydate>=currDt && mydate2>=mydate &&seat>=1 && dest=="Mumbai" || dest=="Pune" ||dest=="Kolkata" || dest=="Hydrabad"||dest=="Kashmir" || dest=="Banglore" )
{
alert("Booked Sucessfully");
console.log (date1);
console.log(mydate);
return false;
}
else{
    alert("Enter Valid Details")
}
}
function sendmsg(){
    // var namee=document.getElementById("Name").value;
    // var email=document.getElementById("Email").value;
    // var cnt=document.getElementById("Contact").value;
    // if(namee=="" && email=="" && cnt==""){
        alert("Message Sent")
    }
    // else{
    //     alert("Enter Required Details")
    // }
// }
// Cancle Booking
function cancleBooking()
{
var mailid=document.getElementById("Mail").value;
var passw=document.getElementById("Passw").value;
var dests=document.getElementById("Dests").value;
if (mailid=="harshadpawar0018@gmail.com" && passw=="Harshad11" && dests=="Mumbai" || dests=="Pune" ||dests=="Kolkata" || dests=="Hydrabad"||dests=="Kashmir" || dests=="Banglore")
{
alert("Booking Cancelled");
return false;
}
else{
    alert("Enter Valid Data")
}
}
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});
