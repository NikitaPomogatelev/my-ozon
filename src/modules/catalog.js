import getData from './getData'
import renderGoods from './renderGoods'
import { categoryFilter } from './filters'

const catalog = () => {
    const catalogBtn = document.querySelector('.catalog-button button')
    const catalogMenu = document.querySelector('.catalog')
    const catalogItems = catalogMenu.querySelectorAll('.catalog .catalog-list li')
    
    let isOpen = false

    // Открытие меню каталога на клик
    catalogBtn.addEventListener('click', ({ target }) => {
        isOpen = !isOpen

        if (isOpen) {
            catalogMenu.style.display = 'block'
        } else {
            catalogMenu.style.display = ''
        }

    })

    // Перебор каждого значения из меню и событие клик (выбор категории)
    catalogItems.forEach(item => {
        item.addEventListener('click', () => {
            let text = item.textContent

            getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json').then((data) => {
                renderGoods(categoryFilter(data, text))
            });
        })
    });

}

export default catalog
