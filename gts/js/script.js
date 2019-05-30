$(document).ready(function() {
    let mzOptions = {};
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.fancybox').fancybox();
    $('.catalog__menu__search').click(function(){
        $('.catalog__menu__search__form').show();
    });
    $(document).mouseup(function (e) {
        var container = $(".catalog__menu__search__form");
        if (container.has(e.target).length === 0){
            container.hide();
        }
    });
    $('.pass__rem').click(function () {
        $('.pass__rem__popup').toggle();
        $('.log__popup').toggle();
    });
    $('.reg__popup__link').click(function () {
        $('.log__popup').toggle();
        $('.reg__popup').toggle();
    });
    $('.mobile__bar').click(function () {
       $('body').toggleClass('open__sidebar');
    });
    $(document).mouseup(function (e) {
        var container = $(".sidebar");
        if (container.has(e.target).length === 0){
            $('body').removeClass('open__sidebar');
        }
    });
    $('.sidebar__menu__ul li').click(function () {
        $(this).toggleClass('open');
    })
    $('.mobile__search').click(function(){
        $('.mobile__catalog__menu__search__form').show();
        $('.mobile__search__input').show();
    });
    $(document).mouseup(function(e){
        let active = $('.mobile__catalog__menu__search__form');
        if(active.has(e.target).length === 0){
            $('.mobile__search__input').hide();
        }
    })
    $(document).mouseup(function (e) {
        var container = $(".mobile__catalog__menu__search__form");
        if (container.has(e.target).length === 0){
            container.hide();
        }
    });
    $("#basket__popu__link").click(function() {
      location.href = "basket.html";
    });
    //Корзина
    var span__counter = $('.counter__basket');
    var span__price = $('.price__basket');
    var price__element__span = $('.novelties__product__price span').html();
    var price__element = $('.novelties__product__price').html();
    var counter = 0;
    span__counter.html(counter);
    var counter__basket = 0;
    var span__counter__basket = $('.card__icon span');
    size__clothes = $(".novelties__product__price__sizes li a");
    size__clothes.click(function () {
        price__element = priceParse(price__element);
        $('.basket__fixed__bottom').show();
        $('.card__icon').addClass('in');
        counter++;
        counter__basket++;
        if (counter > 1){
            price__element += price__element;
        }
        val = num2str(counter,[' товар', ' товара', ' товаров']);
        span__counter.html(counter + val);
        span__price.html(price__element + ' руб.');
        $('.card__icon__total').html(price__element + ' руб.');
        span__counter__basket.html(counter__basket);
    });
    //Функция для склонения
    function num2str(n, text_forms) {  
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    };
    var selectSity = $('.sity__link');
    var sity = $('.add__sity');
    $(selectSity).click(function(){
        sity.html(selectSity);
    });
    function priceParse(n){
        return parseInt(n);
    };

    $('.open__sort').click(function(){
        $('.catalog__open').show();
    });
    $(document).mouseup(function(e){
        let sort = $('.catalog__open');
        if(sort.has(e.target).length === 0){
            sort.hide();
        }
    });
    $('.catalog__mobile__nav__title').click(function() {
        $(this).toggleClass('catalog__mobile__nav__title-active');
        $('.catalog__mobile__nav__menu').toggleClass('catalog__mobile__nav__menu-active');
    });
    $('.catalog__mobile__filter__title').click(function() {
        $(this).toggleClass('catalog__mobile__filter__title-active');
        $('.catalog__mobile__filter__menus').toggleClass('catalog__mobile__filter__menus-active');
    });
    $('.catalog__mobile__filter__menu').click(function() {
        $(this).toggleClass('catalog__mobile__filter__menu-active');
    });
    $(document).mouseup(function(e){
        let sort = $('.catalog__mobile__filter__menu');
        if(sort.has(e.target).length === 0){
            $('.catalog__mobile__filter__menu').removeClass('catalog__mobile__filter__menu-active');
        }
    });
    function animationLink() {
        $('.clothes__buy-animation').toggleClass('hovered');
    };
    setInterval(animationLink, 2000);

    let i = 0;

    $('.clothes__slider__arrows-next').click(function() {
        let img = $('.clothes__slider__img img');
        img.removeClass('active__slider__img');
        let downImg = $('.clothes__down__img img');
        downImg.removeClass('active__down__img');
        i++;
        if (i >= img.length){
            i = 0;
        }
        downImg[i].classList.add('active__down__img');
        img[i].classList.add('active__slider__img');
    });
    $('.clothes__slider__arrows-prev').click(function() {
        let img = $('.clothes__slider__img img');
        let downImg = $('.clothes__down__img img');
        downImg.removeClass('active__down__img');
        img.removeClass('active__slider__img');
        i--;
        if (i < 0){
            i = img.length - 1;
        }
        downImg[i].classList.add('active__down__img');
        img[i].classList.add('active__slider__img');
    });
    function animLink() {
        $('.clothes__buy-animation').toggleClass('clothes__buy-animation-active');
    }

    setInterval(animLink, 2000);

    $('.clothes__withthis__slider__arrows-next').click(function() {
        let img = $('.clothes__withthis__slider__items');
        img.removeClass('clothes__withthis__slider__items-active');
        i++;
        if (i >= img.length){
            i = 0;
        }
        img[i].classList.add('clothes__withthis__slider__items-active');
    });
    $('.clothes__withthis__slider__arrows-prev').click(function() {
        let img = $('.clothes__withthis__slider__items');
        img.removeClass('clothes__withthis__slider__items-active');
        i--;
        if (i < 0){
            i = img.length - 1;
        }
        img[i].classList.add('clothes__withthis__slider__items-active');
    });
     $('.clothes__accessories__slider__arrows-next').click(function() {
        let img = $('.clothes__accessories__slider__items');
        img.removeClass('clothes__accessories__slider__items-active');
        i++;
        if (i >= img.length){
            i = 0;
        }
        img[i].classList.add('clothes__accessories__slider__items-active');
    });
    $('.clothes__accessories__slider__arrows-prev').click(function() {
        let img = $('.clothes__accessories__slider__items');
        img.removeClass('clothes__accessories__slider__items-active');
        i--;
        if (i < 0){
            i = img.length - 1;
        }
        img[i].classList.add('clothes__accessories__slider__items-active');
    });
    $('.profile__sidebar-mobile .profile__sidebar-active').click(function() {
        $('.profile__sidebar-mobile nav').toggleClass('active');
    })
});