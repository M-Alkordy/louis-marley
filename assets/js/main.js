let element = document.getElementById("sec");
let header = document.getElementById("header");
let first = document.getElementById("first");
let image = document.getElementById("image");
let last = document.getElementById("last");
let footer = document.getElementById("footer");
let View_More = document.getElementsByClassName("link");
let sec_container = document.getElementsByClassName("sec_container");
let headerr = document.querySelector(".header-title");
console.log(document.getElementById("nav").offsetTop)


var prevScrollpos = window.pageYOffset;


window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("sec_nav").style.top = "0";
        document.getElementById("nav").style.top = "0";
        document.getElementById("nav").style.transition = "top 0.5s";
    } else {
        document.getElementById("sec_nav").style.top = "-60px";
        document.getElementById("nav").style.top = "-68px";
        document.getElementById("nav").style.transition = "top 0.5s";
    }
    prevScrollpos = currentScrollPos;
}
window.addEventListener("scroll", move);
View_More[0].addEventListener("click", view0);
View_More[1].addEventListener("click", view1);
View_More[2].addEventListener("click", view2);
View_More[3].addEventListener("click", view3);

console.log(element.offsetTop - 200)
function move() {
    if (scrollY ==0) {
        element.style.top = "0";
        footer.style.top = "0";
    }
    if ((!window.matchMedia('screen and (max-width: 900px)').matches &&  scrollY > (image.offsetTop - 200) && scrollY < (last.offsetTop))
    || (window.matchMedia('screen and (max-width: 900px)').matches && scrollY >headerr.offsetTop)) {
        element.style.top = "-112vh";
        element.style.transition = "top 2s";
        footer.style.top = "0";
    } 
    if (scrollY > (last.offsetTop - 650)) {
        footer.style.top = "-110vh";
        footer.style.transition = "top 0.5s";
    }
}

function view0() {
    if (sec_container[0].style.display === "none") {
        if (View_More[0].innerHTML == "عرض المزيد") {
            sec_container[0].style.display = "inline";
            View_More[0].style.fontSize = "10px";
            View_More[0].innerHTML = "عرض اقل";
        } else {
            sec_container[0].style.display = "inline";
            View_More[0].style.fontSize = "10px";
            View_More[0].innerHTML = "view less";
        }
    } else {
        if (View_More[0].innerHTML == "عرض اقل") {
            sec_container[0].style.display = "none";
            View_More[0].style.fontSize = "0.625rem";
            View_More[0].innerHTML = "عرض المزيد";
        } else {
            sec_container[0].style.display = "none";
            View_More[0].innerHTML = "view more";
            View_More[0].style.fontSize = "0.625rem";
        }
    }
    
}
function view1() {
    if (sec_container[1].style.display === "none") {
        if (View_More[1].innerHTML == "عرض المزيد") {
            sec_container[1].style.display = "inline";
            View_More[1].style.fontSize = "10px";
            View_More[1].innerHTML = "عرض اقل";
        } else {
            sec_container[1].style.display = "inline";
            View_More[1].style.fontSize = "10px";
            View_More[1].innerHTML = "view less";
        }
    } else {
        if (View_More[1].innerHTML == "عرض اقل") {
            sec_container[1].style.display = "none";
            View_More[1].style.fontSize = "0.625rem";
            View_More[1].innerHTML = "عرض المزيد";
        } else {
            sec_container[1].style.display = "none";
            View_More[1].innerHTML = "view more";
            View_More[1].style.fontSize = "0.625rem";
        }
    }
}
function view2() {
    if (sec_container[2].style.display === "none") {
        if (View_More[2].innerHTML == "عرض المزيد") {
            if (window.matchMedia('screen and (max-width: 540px)').matches) {
                sec_container[2].style.display = "block";
            }else {
                sec_container[2].style.display = "flex";
            }
            View_More[2].style.fontSize = "10px";
            View_More[2].innerHTML = "عرض اقل";
        } else {
            if (window.matchMedia('screen and (max-width: 540px)').matches) {
                sec_container[2].style.display = "block";
            }else {
                sec_container[2].style.display = "flex";
            }
            View_More[2].style.fontSize = "10px";
            View_More[2].innerHTML = "view less";
        }
    } else {
        if (View_More[2].innerHTML == "عرض اقل") {
            sec_container[2].style.display = "none";
            View_More[2].style.fontSize = "0.625rem";
            View_More[2].innerHTML = "عرض المزيد";
        } else {
            sec_container[2].style.display = "none";
            View_More[2].innerHTML = "view more";
            View_More[2].style.fontSize = "0.625rem";
        }
    }
}
function view3() {
    if (sec_container[3].style.display === "none") {
        if (View_More[3].innerHTML == "عرض المزيد") {
            if (window.matchMedia('screen and (max-width: 540px)').matches) {
                sec_container[3].style.display = "block";
            }else {
                sec_container[3].style.display = "flex";
            }
            View_More[3].style.fontSize = "10px";
            View_More[3].innerHTML = "عرض اقل";
        } else {
            if (window.matchMedia('screen and (max-width: 540px)').matches) {
                sec_container[3].style.display = "block";
            }else {
                sec_container[3].style.display = "flex";
            }
            View_More[3].style.fontSize = "10px";
            View_More[3].innerHTML = "view less";
        }
    } else {
        if (View_More[3].innerHTML == "عرض اقل") {
            sec_container[3].style.display = "none";
            View_More[3].style.fontSize = "0.625rem";
            View_More[3].innerHTML = "عرض المزيد";
        } else {
            sec_container[3].style.display = "none";
            View_More[3].innerHTML = "view more";
            View_More[3].style.fontSize = "0.625rem";
        }
    }
   
}


// mobile-js
mobile_menu_toggle =document.querySelector('.mobile-menu-toggle')
mobile_menu = document.querySelector('.mobile-menu')
body = document.querySelector('#body')

mobile_menu_toggle.addEventListener('click',()=>{
    mobile_menu.classList.toggle('mobile-menu-show');
    mobile_menu_toggle.classList.toggle('clicked');
    body.classList.toggle('mobile-menu-hidden-overFlow');
})

mobile_ul = document.querySelector('.mobile-menu .mobileUl')
mobile_ul.addEventListener('click', ()=> {
    body.classList.toggle('mobile-menu-hidden-overFlow');
    mobile_menu.classList.toggle('mobile-menu-show');
    mobile_menu_toggle.classList.toggle('clicked');
})

mobile_contact = document.querySelector('.mobile-menu .header_contact')
mobile_contact.addEventListener('click', ()=> {
    body.classList.toggle('mobile-menu-hidden-overFlow');
    mobile_menu.classList.toggle('mobile-menu-show');
    mobile_menu_toggle.classList.toggle('clicked');
})