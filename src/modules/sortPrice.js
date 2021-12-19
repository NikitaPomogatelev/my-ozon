import getData from './getData'
import renderGoods from './renderGoods'
import { minPriceFilter } from "./filters";
import { maxPriceFilter } from "./filters";

const sortPrice = () => {
    const filterInp = document.querySelectorAll('.filter-price_input')

    // Минимальная стоимость
    filterInp[0].addEventListener('input', ({ target }) => {
        let minValue = target.value;
        getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')
            .then((data) => {
                renderGoods(minPriceFilter(data, minValue))
            });
    })

    // Максимальная стоимость
    filterInp[1].addEventListener('input', ({ target }) => {
        let maxValue = target.value;
        getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')
            .then((data) => {
                renderGoods(maxPriceFilter(data, maxValue))
            });
    })
}

export default sortPrice
