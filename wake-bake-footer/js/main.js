( function() {
    
    document.addEventListener('click', burgerInit )

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        // Полностью прекращает функцию если на неё не нажимать

        // if (burgerIcon) {
        //     e.preventDefault()
        // }
        // Для того чтобы не работала как ссылка,и не перекидывало по странице

        if (document.documentElement.clientWidth > 900 ) return 
        // Если ширина окна больше 900px, то мы прерываем функцию, если условие сработало
        // то все что находится ниже будет работать

        if (!document.body.classList.contains('body--opend-menu')) {
            document.body.classList.add('body--opend-menu')
        } else {
            document.body.classList.remove('body--opend-menu')
        }


    }


})()