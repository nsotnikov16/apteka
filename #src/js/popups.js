const popups = document.querySelectorAll('.popup')


if(popups.length > 0) {
    popups.forEach(popup => {
        const id = popup.id;
        const closeBtn = popup.querySelector('.close-btn')
        const popupContainer = popup.querySelector('.popup__container');

        const links = document.querySelectorAll(`[data-pointer="${id}"]`)
        links.forEach(link => {
            link.addEventListener('click', ({target}) => {
                open(link.dataset.pointer, target)
            })
        })


        closeBtn.addEventListener('click', () => close())

        function open(pointer, target) {
            if(pointer === id) popup.classList.add('popup_opened')
            if(pointer === 'license') {
                popup.querySelector('.popup__image').src = target.src
                popup.querySelector('source').srcset = target.src
            }

            document.addEventListener('keydown', handleEscClose)
        }

        function close () {
            popup.classList.remove('popup_opened')
            document.removeEventListener('keydown', handleEscClose)
        }

        function handleEscClose (evt) {
            if (evt.keyCode === 27) {
                close()
            }
        }

        function handleOverlayClick(evt) {
            console.log(evt.target)
            if (evt.target === evt.currentTarget) {
                close();
            }
        }

        popupContainer.addEventListener('click', (evt) => handleOverlayClick(evt))
    })

}