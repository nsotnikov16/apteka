const selectBtn = document.querySelector('.select__btn');
const selectExpand = document.querySelector('.select__expand');

if(selectBtn) {

    const inputsSelect = document.querySelectorAll('.select input')
    inputsSelect.forEach(input => {
        input.addEventListener('click', ({target}) => {
            const label = document.querySelector(`[for="${target.id}"]`);

            selectBtn.textContent = label.textContent;
        })
    })

    selectBtn.addEventListener('click', () => {
        selectBtn.classList.toggle('select__btn_open');
        selectExpand.classList.toggle('select__expand_open')
        

        if(selectExpand.classList.contains('select__expand_open')) {
            setTimeout(() => {
                document.addEventListener('click', (evt) => {
                    if(evt.target !== selectExpand) selectExpand.classList.remove('select__expand_open')
                    document.removeEventListener('click', (evt) => {
                        if(evt.target !== selectExpand) selectExpand.classList.remove('select__expand_open')
                    })
                }, {once: true})
            }, 100)
            
        }
    })

    
}
