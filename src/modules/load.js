import getData from './getData'
import renderGoods from './renderGoods'

const load = () => {
    getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')
        .then(data => {
        // console.log(data)
            renderGoods(data)
        });
}

export default load
