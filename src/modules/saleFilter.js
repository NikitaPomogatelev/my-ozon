import getData from './getData'
import renderGoods from './renderGoods'
import { sortSaleFilter } from "./filters";

const saleFilter = () => {
    // const checkboxInp = document.querySelector('#discount-checkbox')
    // const checkboxCheck = document.querySelector('.filter-check_checkmark')

    // checkboxInp.addEventListener('change', () => {
    //     if (checkboxInp.checked) {
    //         checkboxCheck.classList.add('checked')
    //     } else {
    //         checkboxCheck.classList.remove('checked')
    //     }
    //     getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')
    //         .then((data) => {
    //             renderGoods(sortSaleFilter(data, checkboxInp.checked))
    //         });
    // })
}

export default saleFilter
