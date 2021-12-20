import renderCart from './renderCart'
import postData from './postData'

const cart = () => {
    const cartBtn = document.querySelector('#cart')
    const cartModal = document.querySelector('.cart')
    const cartTotal = cartModal.querySelector('.cart-total span')
    const goodsWrapper = document.querySelector('.goods')
    const cartWrapper = document.querySelector('.cart-wrapper')
    const counter = document.querySelector('.counter')
    const cartSendBtn = cartModal.querySelector('.cart-confirm')

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

    const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
            localStorage.getItem('cart') ? counter.textContent = cart.length : '0'

    console.log(localStorage.getItem('cart'));

    const openCart = () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
        disableScroll()
        cartModal.classList.add('active')
        document.addEventListener('keydown', escapeHandler);

        renderCart(cart)
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
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


    goodsWrapper.addEventListener('click', ({ target }) => {
        if (target.classList.contains('btn-primary')) {
            const card = target.closest('.card')
            const cardKey = card.dataset.key
            // Получаем массив из localStorage
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []

            const goodItem = goods.find((item) => {
                return item.id === +cardKey
            })
            console.log(cart);
            cart.push(goodItem)
            counter.textContent = +cart.length
            // Запись в массив cart b и перезаписываем в localStorage
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    })

    cartWrapper.addEventListener('click', ({ target }) => {
        if (target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const card = target.closest('.card')
            const cardKey = card.dataset.key
            const index = cart.findIndex((item) => {
                return item.id === +cardKey
            })

            cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cart))
            counter.innerHTML = +cart.length
            renderCart(cart)
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)
        }
    })

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        postData(cart).then(() => {
            localStorage.removeItem('cart')
            counter.textContent = 0

            renderCart([])

            cartTotal.textContent = 0
        })
    })
}

export default cart
