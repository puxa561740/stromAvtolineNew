const burger_checkbox = document.getElementById("burger-checkbox");
const menu_list = document.getElementById('menu-list'); 
const about_company_allInform = document.getElementById('about_company_allInform');
const from_company = document.getElementById('from_company');
const modal = document.getElementById('modal');
const button_fromTheCompany = document.getElementById('button_fromTheCompany');
const checkBox = document.getElementById('burger') 

function translateX(bolean) {
  if (bolean) {
    menu_list.style = 'transform: translateX(0);';
  } else if (!bolean) {
    menu_list.style = 'transform: translateX(-100%);';
  }
};

function handleCheckboxChange(e) {
  if (e.target.id == "burger" ) {
    if (!burger_checkbox.checked) {
      translateX(true);
    } else {
      translateX(false);
    }
  } else if (e.target.parentNode.parentNode.id == 'menu-list' || e.target.parentNode.id == 'menu-list'
  ) {
    console.log(1)
  } else {
    burger_checkbox.checked = !burger_checkbox.checked
    translateX(false);
  }
  
};

checkBox.addEventListener('click', handleCheckboxChange);

menu_list.addEventListener('click', handleCheckboxChange)

const openn_window_from_company = (e) => {
  if (about_company_allInform.classList[1] !== 'activ') {
    about_company_allInform.classList.add('activ');
  } else {
    about_company_allInform.classList.remove('activ');
  }
};

from_company.addEventListener('click', openn_window_from_company);

modal.addEventListener('click', openn_window_from_company);

button_fromTheCompany.addEventListener('click', openn_window_from_company);


$(function () {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки
  $(window).scroll(function () {
      
      if($(this).scrollTop() > 0 || $(this).innerWidth() < 1161) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });
});
   
