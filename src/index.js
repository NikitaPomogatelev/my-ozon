import load from './modules/load'
import cart from './modules/cart'
import search from './modules/search'
import catalog from './modules/catalog'
import sortPrice from './modules/sortPrice'
import saleFilter from './modules/saleFilter'

document.addEventListener('DOMContentLoaded', () => {
    console.log('101');
    load()
    cart()
    search()
    catalog()
    sortPrice()
    saleFilter()
});
