import getData from './getData'
import renderGoods from './renderGoods'
import { searchFilter } from './filters'

const search = () => {
    const searchInp = document.querySelector('.search-wrapper_input')
    const searchBtn = document.querySelector('.search-btn')

    searchInp.addEventListener('input', ({ target }) => {
        getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json').then((data) => {
            renderGoods(searchFilter(data, target.value))
        });
    })
    searchBtn.addEventListener('click', () => {
        console.log(searchInp.value)
    })
}

export default search
