const photos = document.querySelectorAll('.media__photo')

if(photos.length > 0) {
    photos.forEach(block => {
        const btnMore = block.querySelector('#more')

        const gallery = block.querySelectorAll('.media__photo-current')


        const hide = () => {
            gallery.forEach((item, index, arr) => {
                if(index > 5) item.style.display = 'none'
            })
        }

        const show = () => {
            gallery.forEach(item => {
                if(item.style.display === 'none') item.style.display = 'block';
            })
        }

        hide()

        if(btnMore) {
            const btnMoreText = btnMore.querySelector('span')
            btnMore.addEventListener('click', () => {
                if(btnMore.value === "yes") {
                    show()
                    btnMore.value = 'no'
                    btnMoreText.textContent = 'Свернуть'
                } else {
                    hide()
                    btnMore.value = 'yes'
                    btnMoreText.textContent = 'Показать все'
                }
            })
        }
        
    })
}