// Toggle class active
const navbarnav=document.querySelector('.navbar-nav');
// ketika di klick
document.querySelector('#menu').onvlick = () =>{
    navbarnav.classlist.toggle('active');
};