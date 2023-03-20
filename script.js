$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky")
        }
    })
})
// footer year

const date = new Date();
const currentYear = date.getFullYear();
console.log(currentYear);
console.log(date);

const footerYear = document.querySelector('.year');
footerYear.textContent = currentYear;