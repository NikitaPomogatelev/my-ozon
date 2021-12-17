const cart = () => {
    const cartBtn = document.querySelector('#cart')
    const cartModal = document.querySelector('.cart')
    const cartBtnClose = document.querySelector('.cart-close')

    const openCart = () => {
        cartModal.classList.add('active')
    }
    const closeCart = () => {
        cartModal.classList.remove('active')
    }

    cartBtn.addEventListener('click', openCart)
    cartBtnClose.addEventListener('click', closeCart)
}

export default cart
