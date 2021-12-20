import cart from "./cart";

const renderCart = (goods) => {
    const cartWrapper = document.querySelector('.cart-wrapper')

    cartWrapper.innerHTML = ''

    if (goods.length === 0) {
        cartWrapper.innerHTML = `
            <div id="cart-empty">
                Ваша корзина пока пуста
            </div>
        `
    } else {
        // Вывод карточек товаров из БД
        goods.forEach(({ id, img, price, title, sale }) => {
            cartWrapper.insertAdjacentHTML('beforeend', `
            <div class="card" data-key="${id}">
                ${sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                <div class="card-img-wrapper">
                    <span class="card-img-top"
                        style="background-image: url('${img}')"></span>
                </div>
                <div class="card-body justify-content-between">
                    <span class="card-price">${price} ₽</span>
                    <h5 class="card-title">${title}</h5>
                    <button class="btn btn-primary">Удалить</button>
                </div>
            </div>
        `)
        });
    }
}

export default renderCart
