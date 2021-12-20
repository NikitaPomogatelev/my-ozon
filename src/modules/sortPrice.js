import getData from './getData'
import renderGoods from './renderGoods'
import { priceFilter, sortSaleFilter } from "./filters";
import { minPriceFilter } from "./filters";
import { maxPriceFilter } from "./filters";

const sortPrice = () => {
    const minInp = document.querySelector('#min.filter-price_input')
    const maxInp = document.querySelector('#max.filter-price_input')
    // const filterInp = document.querySelectorAll('.filter-price_input')

    minInp.addEventListener('input', () => {
        console.log(minInp.value)
        getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')
            .then((data) => {
                renderGoods(priceFilter(sortSaleFilter(data, checkboxInp.checked), minInp.value, maxInp.value))
            });
    })
    maxInp.addEventListener('input', () => {
        getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')
            .then((data) => {
                renderGoods(priceFilter(sortSaleFilter(data, checkboxInp.checked), minInp.value, maxInp.value))
            });
    })

    // Минимальная стоимость
    // filterInp[0].addEventListener('input', ({ target }) => {
    //     let minValue = target.value;
    //     getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')
    //         .then((data) => {
    //             renderGoods(minPriceFilter(data, minValue))
    //         });
    // })

    // Максимальная стоимость
    // filterInp[1].addEventListener('input', ({ target }) => {
    //     let maxValue = target.value;
    //     getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')
    //         .then((data) => {
    //             renderGoods(maxPriceFilter(data, maxValue))
    //         });
    // })

    const checkboxInp = document.querySelector('#discount-checkbox')
    const checkboxCheck = document.querySelector('.filter-check_checkmark')

    checkboxInp.addEventListener('change', () => {
        if (checkboxInp.checked) {
            checkboxCheck.classList.add('checked')
        } else {
            checkboxCheck.classList.remove('checked')
        }
        getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')
            .then((data) => {
                renderGoods(priceFilter(sortSaleFilter(data, checkboxInp.checked), minInp.value, maxInp.value))
            });
    })
}

export default sortPrice
