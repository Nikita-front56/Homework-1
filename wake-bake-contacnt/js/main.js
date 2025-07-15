(function () {

    // БУРГЕР========================================================

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        // Полностью прекращает функцию если на неё не нажимать

        // if (burgerIcon) {
        //     e.preventDefault()
        // }
        // Для того чтобы не работала как ссылка,и не перекидывало по странице

        if (document.documentElement.clientWidth > 900) return
        // Если ширина окна больше 900px, то мы прерываем функцию, если условие сработало
        // то все что находится ниже будет работать

        if (!document.body.classList.contains('body--opend-menu')) {
            document.body.classList.add('body--opend-menu')
        } else {
            document.body.classList.remove('body--opend-menu')
        }

    }

    // МОДАЛКА=======================================================

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opend-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opend-modal')
        }

    }
    // ТАБЫ==========================================================

    const tabСontrols = document.querySelector('.tab-controls')

    tabСontrols.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabСontrol = e.target.closest('.tab-controls__link')

        if (!tabСontrol) return
        e.preventDefault()
        if (tabСontrol.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabСontrol.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
            // Для того чтобы заменить таб(remove отменяет)
        }

        if (activeControl) {
            activeContent.classList.remove('tab-content--show')
            // Для того чтобы заменить таб(remove отменяет)
        }

        tabСontrol.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }

    // АККОРДИОН=====================================================
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector(".accordion-list__item--opened .accordion-list__content");

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });
    });

    // CЛАЙДЕР-ГАЛЕРЕЯ

    new Swiper('.gallery__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,


        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });

    // CЛАЙДЕР-ОТЗЫВЫ

    new Swiper('.testimoials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimoials__next',
            prevEl: '.testimoials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }
    });

    // Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)
    // const Inputmask = require("./inputmask.min")
})()