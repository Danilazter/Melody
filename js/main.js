$(document).ready(function () {
    var currentFloor = 2;  // Переменная, где хранится текущий этаж 
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up") /* кнопка увеличения этажа*/
    var counterDown = $(".counter-down"); /* кнопка меньшения этажа */
    var modal = $(".modal");
    var modaCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    // функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
    });

    floorPath.on("click", toggleModal); /* при клике на этаж, вызывает окно */
    modaCloseButton.on("click", toggleModal); /* клик закрывает окно */
    viewFlatsButton.on("click", toggleModal);
// отслеживаем клик по кнопке вверх
    counterUp.on("click", function () { // 
            // проверяем значение этажа, оно не должно быть больше 18
        if (currentFloor < 18) { 
            currentFloor++; // прибавляем один этаж
        usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было не 01 а не 1
            $(".counter").text(usCurrentFloor); // записываем значение счетчика справа  
            floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
       }
    });
        
    counterDown.on("click", function () {  // отслеживаем клик по кнопке вниз
        // проверяем значение этажа, оно не должно быть меньше 2
        if (currentFloor > 2) {
            currentFloor--; // убавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было не 01 а не 1
            $(".counter").text(usCurrentFloor); // записываем значение счетчика справа  
            floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        } 
    });
    function toggleModal() { // функция октрыть/закрыть окно
        modal.toggleClass("is-open");
    }
    });
