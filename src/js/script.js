document.addEventListener("DOMContentLoaded", () => {
    //Form
    let form = document.querySelector('.calculator__form'),
        color = form.querySelector('#colors'),
        size = form.querySelector('#size'),
        date = form.querySelector('#calendar'),
        city = form.querySelector('#city'),
        delivery = form.querySelector('#delivery'),
        price = form.querySelector('.price'),
        number = form.querySelector('#arefmet'),
        bt_minus = form.querySelector('.bt_minus'),
        bt_plus = form.querySelector('.bt_plus'),
        btnForm = form.querySelector('.calculator__form-btn');

    bt_minus.addEventListener('click',()=>{
        event.preventDefault();
        number.value = +number.value-1
    });

    bt_plus.addEventListener('click',()=>{
        event.preventDefault();
        number.value = +number.value + 1
    });

    btnForm.addEventListener('click', ()=>{

        if(date.value == ""){
            alert("Забыли ввести дату")
        }else {
            addObj()
        }
    });
function addObj(){
    let formObj = {};
    formObj.color = color.value;
    formObj.size = size.value;
    formObj.date = date.value;
    formObj.city = city.value;
    formObj.number = number.value;
    formObj.delivery = delivery.value;
    formObj.price = price.innerText;
    console.log(formObj);
}

   // Steps
    let step = document.querySelectorAll('.step'),
        workItem = document.querySelectorAll('.work__item'),
        stepLine = document.querySelectorAll('.step__line')
    for(let i = 0; i < step.length; i++){
        workItem[i].classList.add('hide');
        if(i == 0){
            workItem[0].classList.remove('hide');
            cour(workItem[i])
        }
        step[i].addEventListener('click', function (e) {
          let p = step[i].getAttribute('data-step');
            for (let y = 0; y < workItem.length; y++) {
                workItem[y].classList.remove('active');
                workItem[y].classList.add('hide');
            }
            workItem[i].classList.add('active');
            workItem[i].classList.remove('hide');
           if(workItem[i].classList.contains('active')){
               cour(workItem[i])
           }

            if( p == 1){
                offNumbr(1)
            }else if(p == 2 ){
                offNumbr(p)
            }else if( p == 3 ){
                offNumbr(p)
            }else if( p == 4 ){
                offNumbr(p)
            }
        })

    }
function offNumbr(i){
    for (let y = i; y < workItem.length; y++) {
        step[y].classList.add('step-no__active');
        step[y].classList.add('step-no__active-number');
        stepLine[y-1].classList.add('step-no__active');
    }
    for( let n = i-1; n >= 1; --n){
        step[n].classList.remove('step-no__active');
        step[n].classList.remove('step-no__active-number');
        stepLine[n-1].classList.remove('step-no__active');
    }
}


function cour(workItem){
    let SedUt = workItem.querySelectorAll('.sedut'),
        additional = workItem.querySelectorAll('.work__item-about__additional');
    for (let i = 0; i < SedUt.length; i++) {
        additional[i].classList.add('hide');
        SedUt[i].classList.remove('cour-active')
        if(i == 0){
            additional[0].classList.remove('hide');
            SedUt[0].classList.add('cour-active');

        }
        SedUt[i].addEventListener('click', function () {
            for (let y = 0; y < SedUt.length; y++) {
                additional[y].classList.add('hide');
                additional[y].classList.remove('active');
                SedUt[y].classList.remove('cour-active');
            }
            additional[i].classList.remove('hide');
            additional[i].classList.toggle("active");
            SedUt[i].classList.toggle('cour-active');
        });
    }
}
    //slick
    $('.reviews__courusel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        variableWidth: true,
        responsive:[{
            breakpoint: 816,
            setting:{
                slidesToShow: 2,
                }
        },{
            breakpoint: 400,
            setting:{
                slidesToShow: 1,
            }
        }
        ]
    });

    let left = document.querySelectorAll('.pin__left-item'),
        right= document.querySelectorAll('.pin__right-item');
    for (let i = 0; i < left.length; i++) {
        right[i].classList.add('hide');
        if(i == 0){
            right[0].classList.remove('hide');
            right[0].classList.add('active');
            left[0].classList.add('cour-active');
        }
        left[i].addEventListener('click', function () {
            for (let y = 0; y < left.length; y++) {
                right[y].classList.add('hide');
                right[y].classList.remove('active');
                left[y].classList.remove('cour-active');
            }
            right[i].classList.remove('hide');
            right[i].classList.toggle("active");
            left[i].classList.toggle('cour-active');
        });
    }

let arrow = document.querySelectorAll('.arrow-top'),
    cartContent = document.querySelectorAll('.faq__cart-content');
    for (let i = 0; i < cartContent.length; i++) {
        cartContent[i].classList.add('visible');
        if(i == 0){
            cartContent[i].classList.remove("visible");
            arrow[i].classList.add("rotate");
        }
        arrow[i].addEventListener('click', function () {
            cartContent[i].classList.toggle("visible");
            arrow[i].classList.toggle("rotate");
        });
    }
});
//popup
let popup = document.querySelector('.popup'),
    close = popup.querySelector('.popup__close'),
    btn = document.querySelector('.header__sing');


    btn.addEventListener('click', ()=>{
        event.preventDefault();
        popup.style.display = 'block';
        popup.classList.remove('hide');
        document.querySelector('body').style.overflowY = 'hidden';

    });
popup.addEventListener('click',function (e) {
        event.preventDefault();
        if (event.target.className =='popup' || event.target.className =='popup__close') {
            popup.style.display = 'none';
            document.querySelector('body').style.overflowY = 'auto';
        }

    });


let $button = $('#menu-btn'),
    $mobMenu = $('.header__mobail-content');

$button.on('click', function(e){
    e.preventDefault();
    $mobMenu.toggle('hide');
    if( $button.hasClass('open') ){
        $button.removeClass('open');
        $button.addClass('close');
    } else {
        $button.removeClass('close');
        $button.addClass('open');
    }
});
