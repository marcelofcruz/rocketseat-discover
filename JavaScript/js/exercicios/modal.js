const openModalButton = document.querySelector('#openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

openModalButton.onclick = () => modalWrapper.classList.remove('invisible');

document.addEventListener('keydown', (event) => {
    const isEsckey = event.key === 'Escape'

    if (isEsckey) {
        modalWrapper.classList.add('invisible')
    }
})