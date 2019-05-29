window.onload = function() {
    var btnMenu = document.querySelector('.headerMenu'); // Кнопка меню
    var closeMenu = document.querySelector('aside .close'); // Кнопка закрытия меню
    var itemsAside = document.querySelectorAll('.asideHideList li'); // Массив ссылок для якорей
    var currentSLide = 0; // Начальный слайд в слайдере
    var slide = document.querySelectorAll('.headerSliderItem'); // Массив слайдов
    var dots = document.querySelectorAll('.headerSliderDot'); // Массив кнопок для слайдера
    var currentDot = 0; // Начальная точка для кнопки
    var info = document.querySelector('.headerInfoHelp'); // Кнопка инфо
    var closeInfo = document.querySelector('.headerInfoHelp-modal-close'); // Закрытие модального окна
    // Таймер для слайдера(Рекурсивный setTimeout);
    var slideShow = setTimeout(function show(){
        next();
        timerShow = setTimeout(show, 10000);
    }, 10000);
    // Перебор массива для вызова функции next
    dots.forEach(function(item){
        item.onclick = next;
    });
    // Функция для следующего слайда
    function next(){
        slide[currentSLide].className = 'headerSliderItem';
        currentSLide = (currentSLide+1)%slide.length;
        slide[currentSLide].className = 'headerSliderItem active';
        dots[currentDot].className = 'headerSliderDot';
        currentDot = (currentDot+1)%dots.length;
        dots[currentDot].className = 'headerSliderDot active';
    }
    // Функция открытия меню
    btnMenu.onclick = function() {
        document.querySelector('body').className = 'activeMenu';
        document.querySelector('aside').className = 'activeAside';
    };
    // Функция закрытия меню
    closeMenu.onclick = function() {
        document.querySelector('body').className = '';
        document.querySelector('aside').className = 'aside';
    };
    // Функция для перебора массива с ссылками для закрытия меню
    itemsAside.forEach(function(item){
        item.onclick = function() {
            document.querySelector('body').className = '';
            document.querySelector('aside').className = 'aside';
        };
    });
    // Создаем пустой массив, выделяем его полностью и задаем контекс вызова для всех ссылок с указателем
    var scroll = [].slice.call(document.querySelectorAll('a[href*="#"]')); 
    // Время анимации
    var animationTime = 500;
    // Счетчик тактов
    var framesCount = 100;
    // Перебор массива
    scroll.forEach(function( item ){
        item.onclick = function( e ){
            e.preventDefault();
            // Переменная хранящая высоту верхней границы у элементов с href
            let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
            // запускаем интервал, в котором
            let scroller = setInterval( function() {
            // считаем на сколько скроллить за 1 такт
            let scrollBy = coordY / framesCount;
            // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто
            if( scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight ) {
                // то скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy( 100, scrollBy );
            } 
            else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo( 0, coordY );
                clearInterval( scroller );
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
            }, animationTime / framesCount );
        }
    });
    // Событие нажатия на кнопку инфо
   info.onclick = function() {
        document.querySelector('body').className = 'activeMenu';
        document.querySelector('.modal').className = 'modal active';
    };
    // Функция закрытия меню
    closeInfo.onclick = function() {
        document.querySelector('body').className = '';
        document.querySelector('.modal').className = 'modal';
    };
}