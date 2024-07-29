let btn = document.querySelector('.lang')
let dd = document.querySelector('.dropdown')
let mbtn = document.querySelector('#mlang')
let mdd = document.querySelector('#mdropdown')
let sbtn = document.querySelector('#secLang')
let sdd = document.querySelector('#secDropdown')
let header_contact = document.querySelector('.header_contact')
let header_nav = document.querySelector('.categories ul')
let header_a1 = document.querySelector('.categories .header-a1')
let header_a2 = document.querySelector('.categories .header-a2')
let header_a3 = document.querySelector('.categories .header-a3')
let header_a4 = document.querySelector('.categories .header-a4')
let m_header_a1 = document.querySelector('.mobileUl .header-a1')
let m_header_a2 = document.querySelector('.mobileUl .header-a2')
let m_header_a3 = document.querySelector('.mobileUl .header-a3')
let m_header_a4 = document.querySelector('.mobileUl .header-a4')
let header_img_crd = document.querySelector('.text')
let header_img_title = document.querySelector('.imgTitle')
let header_img_desc = document.querySelector('.description')

let sec_nav = document.querySelector('.items')
let sec_a1 = document.querySelector('.items .sec-a1')
let sec_a2 = document.querySelector('.items .sec-a2')
let sec_a3 = document.querySelector('.items .sec-a3')
let sec_a4 = document.querySelector('.items .sec-a4')
let sec_contact = document.querySelector('#secNavContact')


const showmore = document.querySelectorAll('.link')
const info = document.querySelectorAll('.info')
const info_h2 = document.querySelectorAll('.info h2')


const sm_crd = document.querySelectorAll('.plat-cards .sm-titles')
const sm_crd_sub = document.querySelectorAll('.plat-cards .sm-titles .sub-title')
const bg_crd = document.querySelectorAll('.plat-cards .bg-titles')
const bg_crd_sub = document.querySelectorAll('.plat-cards .bg-titles .sub-title')
const spec_sm_crd = document.querySelectorAll('.spec-cards .sm-titles')
const spec_sm_crd_sub = document.querySelectorAll('.spec-cards .sm-titles .sub-title')
const spec_bg_crd = document.querySelectorAll('.spec-cards .bg-titles')
const spec_bg_crd_sub = document.querySelectorAll('.spec-cards .bg-titles .sub-title')

const titles = document.querySelectorAll('.titles')
let plat_title = document.querySelector('.plat-title')
let spec_title = document.querySelector('.spec-title')
let classic_title = document.querySelector('.classic-title')
const sub_title = document.querySelectorAll('.titles .sub-title')


let baby = document.querySelector('.baby-img .advice')
let baby_h1 = document.querySelector('.baby-img .advice h1')
let baby_h2 = document.querySelector('.baby-img .advice h2')


let footer_infos = document.querySelector(".footer-infos")
let foot_a1 = document.querySelector('.foot-a1')
let foot_a2 = document.querySelector('.foot-a2')
let foot_a3 = document.querySelector('.foot-a3')
let foot_a4 = document.querySelector('.foot-a4')

let foot_contact = document.querySelector('.foot-contact')
let foot_contact_num = document.querySelector('.num')

btn.addEventListener('click', clickBtn);
mbtn.addEventListener('click', clickBtn);
sbtn.addEventListener('click', clickBtn);

function clickBtn() {
    if (dd.style.display == "flex" || mdd.style.display == "flex" || sdd.style.display == "flex") {
        dd.style.display = "none"
        mdd.style.display = "none"
        sdd.style.display = "none"
    } else {
        dd.style.display = "flex"
        mdd.style.display = "flex"
        sdd.style.display = "flex"
    }
    dd.addEventListener('click', clickdd)
    mdd.addEventListener('click', clickdd)
    sdd.addEventListener('click', clickdd)
}

function clickdd() {
    if (dd.innerText === "AR" || mdd.innerText === "AR" || sdd.innerText === "AR") {
        btn.innerHTML = `
    AR
     <img src="./assets/imgs/arrowdown.svg" alt="" />
    <p class="dropdown">EN</p>
    `
        dd.innerHTML = `EN`
        mbtn.innerHTML = `
    AR
     <img src="./assets/imgs/arrowdown.svg" alt="" />
     <p class="dropdown" id="mdropdown">EN</p>
    `
        mdd.innerHTML = `EN`
        sbtn.innerHTML = `
    AR
     <img src="./assets/imgs/arrowdown.svg" alt="" />
     <p class="dropdown" id="secDropdown">EN</p>
    `
        sdd.innerHTML = `EN`
        header_nav.style.direction = "rtl"
        header_img_crd.style.direction = "rtl"
        sec_nav.style.direction = "rtl"
        header_nav.style.letterSpacing = "0px"
        sec_nav.style.letterSpacing = "0px"
        header_img_title.style.letterSpacing = "0px"
        header_contact.innerText = "تواصل معنا"
        sec_contact.innerText = "تواصل معنا"
        header_img_title.innerHTML = "مزيج <br /> الأحلام الفـــــريد"
        header_img_title.style.fontFamily = "Droid Arabic Kufi"
        header_img_desc.style.fontFamily = "Droid Arabic Kufi"
        header_img_desc.innerText =" رائحـــــــــــــــــــــــة لا تــــــنسى للحــــــــظات لا تـــــــــنسى."
        header_img_desc.style.paddingTop = "16px"
        header_img_desc.style.letterSpacing = "0px"
        if ((window.matchMedia('screen and (max-width: 420px)').matches)) {
            header_img_title.style.lineHeight = "50px"
        } else if ((window.matchMedia('screen and (max-width: 520px) and (min-width: 421px)').matches)) {
            header_img_title.style.lineHeight = "60px"
        } else if ((window.matchMedia('screen and (max-width: 700px) and (min-width: 521px)').matches)) {
            header_img_title.style.lineHeight = "80px"
        }else if ((window.matchMedia('screen and (max-width: 899px) and (min-width: 701px)').matches)) {
            header_img_title.style.lineHeight = "100px"
        }
        

        header_nav.style.fontFamily = "Droid Arabic Kufi"
        header_contact.style.fontFamily = "Droid Arabic Kufi"
        sec_contact.style.fontFamily = "Droid Arabic Kufi"
        header_img_crd.style.fontFamily = "Droid Arabic Kufi"
        sec_a1.style.fontFamily = "Droid Arabic Kufi"
        sec_a2.style.fontFamily = "Droid Arabic Kufi"
        sec_a3.style.fontFamily = "Droid Arabic Kufi"
        sec_a4.style.fontFamily = "Droid Arabic Kufi"
        sec_contact.style.fontStyle = "normal"
        header_a1.innerText = "كلاسيكي"
        header_a2.innerText = "بلاتينيوم & مخمل"
        header_a3.innerText = "عطور للأطفال"
        header_a4.innerText = "تركيبات خاصة"
        m_header_a1.innerText = "كلاسيكي"
        m_header_a2.innerText = "بلاتينيوم & مخمل"
        m_header_a3.innerText = "عطور للأطفال"
        m_header_a4.innerText = "تركيبات خاصة"
        sec_a1.innerText = "كلاسيكي"
        sec_a2.innerText = "بلاتينيوم & مخمل"
        sec_a3.innerText = "عطور للأطفال"
        sec_a4.innerText = "تركيبات خاصة"
        foot_a1.innerText = "كلاسيكي"
        foot_a2.innerText = "بلاتينيوم & مخمل"
        foot_a3.innerText = "عطور للأطفال"
        foot_a4.innerText = "تركيبات خاصة"
        foot_a1.style.fontFamily = "Droid Arabic Kufi"
        foot_a2.style.fontFamily = "Droid Arabic Kufi"
        foot_a3.style.fontFamily = "Droid Arabic Kufi"
        foot_a4.style.fontFamily = "Droid Arabic Kufi"
        foot_a1.style.letterSpacing = "0px"
        foot_a2.style.letterSpacing = "0px"
        foot_a3.style.letterSpacing = "0px"
        foot_a4.style.letterSpacing = "0px"


        showmore.forEach(show => {
            if (show.innerText== "view more") {
                show.innerText = "عرض المزيد"
            }else if (show.innerText== "view less") {
                show.innerText = "عرض اقل"
            }
            
            show.style.fontFamily = "Droid Arabic Kufi"
            show.style.letterSpacing = "0px"
        });


        info.forEach(item => {
            item.classList.add("ar_right")
        });
        info_h2.forEach(item => {
            item.style.letterSpacing = "0px"
        });

        info_h2[0].innerText = "للفتيات"
        info_h2[1].innerText = "للفتيات"
        info_h2[2].innerText = "للجنسين"
        info_h2[3].innerText = "للأولاد"
        info_h2[4].innerText = "للأولاد"
        info_h2[5].innerText = "للرجال"
        info_h2[6].innerText = "نسائي"
        info_h2[7].innerText = "للرجال"
        info_h2[8].innerText = "نسائي"
        info_h2[9].innerText = "نسائي"
        info_h2[10].innerText = "نسائي"
        info_h2[11].innerText = "للرجال"
        info_h2[12].innerText = "نسائي"
        info_h2[13].innerText = "نسائي"
        info_h2[14].innerText = "للرجال"

        
        titles.forEach(item => {
            item.style.direction = "rtl"
        });

        plat_title.innerHTML = "عطـــــــور<br />بلاتينيوم- مخمل"

        if ((window.matchMedia('screen and (max-width: 520px)').matches)) {
            plat_title.style.lineHeight = "42px"
        }
        else {
            plat_title.style.lineHeight = "70px"
        }
        plat_title.style.letterSpacing = "0px"
        plat_title.style.fontFamily = "Droid Arabic Kufi"


        classic_title.innerHTML = " إكســـــير <br />  كلاسيكي أنيق"
        if ((window.matchMedia('screen and (max-width: 520px)').matches)) {
            classic_title.style.letterHeight = "42px"
        }else {
            classic_title.style.lineHeight = "70px"
            classic_title.style.fontSize = "55px"
            
        }
        classic_title.style.letterSpacing = "0px"
        classic_title.style.fontFamily = "Droid Arabic Kufi"

        sub_title.forEach(sub => {
            
            if (sub.innerText == "Elevate your senses with Louis Marley perfume.") {
                sub.innerText = "ارفع حواســــــك مع عطـــــور لويـس مارلي."
                sub.style.paddingTop = "16px" 
                sub.style.fontFamily = "Droid Arabic Kufi"
                sub.style.letterSpacing = "0px"

            } else {

                sub.innerText = "شــــــــــــــــعور الفخامة مع كـــــل رزاز منتشــــــــــــــــــــر"
                sub.style = "شــــــــــــــــعور الفخامة مع كـــــل رزاز منتشــــــــــــــــــــر"
                sub.style.paddingTop = "16px" 
                sub.style.fontFamily = "Droid Arabic Kufi"
                sub.style.letterSpacing = "0px"
            }
        });

        sm_crd.forEach(item => {
            item.classList.add("ar_right")
        });
        sm_crd_sub.forEach(item => {
            item.style.letterSpacing = "0px"
        });
        sm_crd_sub[0].innerText = "للجنسين"
        sm_crd_sub[1].innerText = "نسائي"
        sm_crd_sub[2].innerText = "نسائي"
    

        bg_crd.forEach(item => {
            item.classList.add("ar_right")
        });
        bg_crd_sub.forEach(item => {
            item.style.letterSpacing = "0px"
        });

        bg_crd_sub[0].innerText = "للجنسين"
        bg_crd_sub[1].innerText = "للجنسين"
        bg_crd_sub[2].innerText = "للجنسين"
        bg_crd_sub[3].innerText = "للجنسين"

      
        spec_sm_crd.forEach(item => {
            item.classList.add("ar_right")
        });

        spec_sm_crd_sub.forEach(item => {
            item.style.letterSpacing = "0px"
        });

        spec_sm_crd_sub[0].innerText = "للجنسين"
        spec_sm_crd_sub[1].innerText = "للجنسين "
        spec_sm_crd_sub[2].innerText = "للجنسين "
        spec_sm_crd_sub[3].innerText = "للرجال"
        

    

        spec_bg_crd.forEach(item => {
            item.classList.add("ar_right")
        });
        spec_bg_crd_sub.forEach(item => {
            item.style.letterSpacing = "0px"
        });

        spec_bg_crd_sub[0].innerText = "للجنسين"
        spec_bg_crd_sub[1].innerText = "للجنسين"
        spec_bg_crd_sub[2].innerText = "للجنسين"
        spec_bg_crd_sub[3].innerText = "نسائي"
        

        baby.style.direction = "rtl"
        baby.style.padding = "12px 20px 20px 64px"
        baby_h1.innerText = "عطـــر ناعم ورقــــــيق"

        if ((window.matchMedia('screen and (max-width: 520px)').matches)) {
            baby_h1.style.lineHeight = "42px"
        }
        else {
            baby_h1.style.lineHeight = "80px"
        }
        baby_h1.style.letterSpacing = "0px"
        baby_h1.style.fontFamily = "Droid Arabic Kufi"
        baby_h2.innerText = "الــــــــرائــــــــحة المثالية لطفلك الصـــــــــــغير"
        baby_h2.style.letterSpacing = "0px"
        baby_h2.style.fontFamily = "Droid Arabic Kufi"
        baby_h2.style.paddingTop = "16px"

        footer_infos.style.direction = 'rtl'
        foot_contact.innerText = "تــــــواصل معنا"
        foot_contact.style.letterSpacing = "0px"
        foot_contact.style.fontFamily = "Droid Arabic Kufi"
        foot_contact_num.style.direction = "ltr"


    }
    else {
        btn.innerHTML = `
    EN
     <img src="./assets/imgs/arrowdown.svg" alt="" />
    <p class="dropdown">AR</p>
    `
        mbtn.innerHTML = `
    EN
     <img src="./assets/imgs/arrowdown.svg" alt="" />
     <p class="dropdown" id="mdropdown">AR</p>
    `
        sbtn.innerHTML = `
    EN
     <img src="./assets/imgs/arrowdown.svg" alt="" />
     <p class="dropdown" id="secDropdown">AR</p>
    `
        header_nav.style.direction = "ltr"
        header_img_crd.style.direction = "ltr"
        sec_nav.style.direction = "ltr"
        header_nav.style.letterSpacing = "1.5px"
        sec_nav.style.letterSpacing = "1.5px"
        header_img_title.style.letterSpacing = "2px"
        header_contact.innerText = "contact us"
        sec_contact.innerText = "contact us"
        header_img_title.innerHTML = `Unique <br />Dream Fragrance`
        header_img_desc.innerText = "Unforgettable scent for unforgettable moments."
        header_img_desc.style.paddingTop = "12px"
        header_nav.style.fontFamily = "Gotham"
        header_contact.style.fontFamily = "Gotham"
        header_img_title.style.fontFamily = "Minion Pro"
        header_img_desc.style.fontFamily = "Gotham"
        sec_contact.style.fontFamily = "Gotham"
        header_img_crd.style.fontFamily = "Gotham"
        sec_a1.style.fontFamily = "Gotham"
        sec_a2.style.fontFamily = "Gotham"
        sec_a3.style.fontFamily = "Gotham"
        sec_a4.style.fontFamily = "Gotham"
        sec_contact.style.fontStyle = "normal"
        header_a1.innerText = "Classic"
        header_a2.innerText = "Platinum & velvet"
        header_a3.innerText = "Baby"
        header_a4.innerText = "special"
        m_header_a1.innerText = "Classic"
        m_header_a2.innerText = "Platinum & velvet"
        m_header_a3.innerText = "Baby"
        m_header_a4.innerText = "special"
        sec_a1.innerText = "Classic"
        sec_a2.innerText = "Platinum & velvet"
        sec_a3.innerText = "Baby"
        sec_a4.innerText = "special"
        foot_a1.innerText = "Classic"
        foot_a2.innerText = "Platinum & velvet"
        foot_a3.innerText = "Baby"
        foot_a4.innerText = "special"
        foot_a1.style.fontFamily = "Gotham"
        foot_a2.style.fontFamily = "Gotham"
        foot_a3.style.fontFamily = "Gotham"
        foot_a4.style.fontFamily = "Gotham"
        foot_a1.style.letterSpacing = "1.5px"
        foot_a2.style.letterSpacing = "1.5px"
        foot_a3.style.letterSpacing = "1.5px"
        foot_a4.style.letterSpacing = "1.5px"


        showmore.forEach(show => {
            if (show.innerText== "عرض المزيد") {
                show.innerText = "view more"
            }else {
                show.innerText = "view less"
            }
            show.style.fontFamily = "Gotham"
            show.style.letterSpacing = "1.5px"
        });


        info.forEach(item => {
            item.classList.remove("ar_right")
        });
        info_h2.forEach(item => {
            item.style.letterSpacing = "1px"
        });



        info_h2[0].innerText = "Girl"
        info_h2[1].innerText = "Girl"
        info_h2[2].innerText = "Unisex"
        info_h2[3].innerText = "Boy"
        info_h2[4].innerText = "Boy"
        info_h2[5].innerText = "male"
        info_h2[6].innerText = "Female"
        info_h2[7].innerText = "Male"
        info_h2[8].innerText = "Female"
        info_h2[9].innerText = "Female"
        info_h2[10].innerText = "Female"
        info_h2[11].innerText = "Male"
        info_h2[12].innerText = "Female"
        info_h2[13].innerText = "Female"
        info_h2[14].innerText = "Male"


      

        titles.forEach(item => {
            item.style.direction = "ltr"
        });

        plat_title.innerHTML = "Platinum & Velvet perfume"

        if ((window.matchMedia('screen and (max-width: 520px)').matches)) {
            plat_title.style.lineHeight = "38px"
        }
        else {
            plat_title.style.lineHeight = "80px"
        }
        plat_title.style.letterSpacing = "4px"
        plat_title.style.fontFamily = "Minion Pro"
       
        classic_title.innerHTML = "Classic <br/> Beauty Elixir"
        if ((window.matchMedia('screen and (max-width: 520px)').matches)) {
            classic_title.style.lineHeight = "38px"
        }
        else {
            classic_title.style.lineHeight = "80px"
        }
        classic_title.style.letterSpacing = "4px"
        classic_title.style.fontFamily = "Minion Pro"

        sub_title.forEach(sub => {
            sub.style.fontFamily = "Gotham"
            sub.style.letterSpacing = "0.5px"
            if (sub.innerText == "ارفع حواســــــك مع عطـــــور لويـس مارلي.") {
                sub.innerText = "Elevate your senses with Louis Marley perfume."
                sub.style.paddingTop = "0px"

            } else {
                sub.innerText = "Embrace sophistication with every spray."
            }
        });

        sm_crd.forEach(item => {
            item.classList.remove("ar_right")
        });
        sm_crd_sub.forEach(item => {
            item.style.letterSpacing = "1px"
        });

        sm_crd_sub[0].innerText = "Unisex"
        sm_crd_sub[1].innerText = "Female"
        sm_crd_sub[2].innerText = "Female"
        
        bg_crd.forEach(item => {
            item.classList.remove("ar_right")
        });
        bg_crd_sub.forEach(item => {
            item.style.letterSpacing = "1px"
        });

        bg_crd_sub[0].innerText = "Unisex"
        bg_crd_sub[1].innerText = "Unisex"
        bg_crd_sub[2].innerText = "Unisex"
        bg_crd_sub[3].innerText = "Unisex"

        
        spec_sm_crd.forEach(item => {
            item.classList.remove("ar_right")
        });
        spec_sm_crd_sub.forEach(item => {
            item.style.letterSpacing = "1px"
        });

        spec_sm_crd_sub[0].innerText = "Unisex"
        spec_sm_crd_sub[1].innerText = "Unisex"
        spec_sm_crd_sub[2].innerText = "Unisex"
        spec_sm_crd_sub[3].innerText = "Male"
        
        
        spec_bg_crd.forEach(item => {
            item.classList.remove("ar_right")
        });
        spec_bg_crd_sub.forEach(item => {
            item.style.letterSpacing = "1px"
        });

        spec_bg_crd_sub[0].innerText = "Unisex"
        spec_bg_crd_sub[1].innerText = "Unisex"
        spec_bg_crd_sub[2].innerText = "Unisex"
        spec_bg_crd_sub[3].innerText = "Female"
        

        baby.style.direction = "ltr"
        baby.style.padding = "16px 64px 12px 20px"
        baby_h1.innerText = "Soft Sweet Perfume"
        if ((window.matchMedia('screen and (max-width: 520px)').matches)) {
            baby_h1.style.lineHeight = "38px"
        }
        else {
            baby_h1.style.lineHeight = "80px"
        }

        baby_h1.style.letterSpacing = "4px"
        baby_h1.style.fontFamily = "Minion Pro"
        baby_h2.innerText = "The perfect scent for your little one."
        baby_h2.style.letterSpacing = "0.5px"
        baby_h2.style.fontFamily = "Gotham"
        baby_h2.style.paddingTop = "1px"

        footer_infos.style.direction = 'ltr'
        foot_contact.innerText = "Contact Us"
        foot_contact.style.letterSpacing = "2px"
        foot_contact.style.fontFamily = "Minion Pro"
        foot_contact_num.style.direction = "ltr"
    }
    btn = document.querySelector('.lang')
    dd = document.querySelector('.dropdown')
    mbtn = document.querySelector('#mlang')
    mdd = document.querySelector('#mdropdown')
    sbtn = document.querySelector('#secLang')
    sdd = document.querySelector('#secDropdown')
}