const cart = () => {
    const cartBtn = document.querySelector('#cart')
    const cartModal = document.querySelector('.cart')

    const disableScroll = () => {

        // Вычисление ширины скрола 
        const widthScroll = window.innerWidth - document.body.offsetWidth;
        // console.log(widthScroll);

        document.disableScroll = true;

        // Сколь px от верха прокручено
        document.body.dbScrollY = window.scrollY;
        document.body.style.cssText = `
            position: fixed;
            top: ${-window.scrollY}px;
            left: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            padding-right: ${widthScroll}px;
        `;
    };
    // Разблокировка скролла
    const enableScroll = () => {
        document.body.style.cssText = '';
        window.scroll({
            top: document.body.dbScrollY,
        })
    };

    const escapeHandler = ({
        code,
        keyCode
    }) => {
        if (code === 'Escape' || keyCode === 27) {
            closeCart();
        }
    }

    
    const openCart = () => {
        disableScroll()
        cartModal.classList.add('active')
        document.addEventListener('keydown', escapeHandler);
    }
    const closeCart = () => {
        enableScroll()
        cartModal.classList.remove('active')
        document.removeEventListener('keydown', escapeHandler);
    }
    
    cartModal.addEventListener('click', ({ target }) => {
        if (target.classList.contains('cart-close') || target === cartModal) {
            closeCart();
        }
    });

    cartBtn.addEventListener('click', openCart)
}

export default cart
