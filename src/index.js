import getData from './modules/getData'
import postData from './modules/postData'
import cart from './modules/cart'
import search from './modules/search'

document.addEventListener('DOMContentLoaded', () => {
   getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json').then(data => console.log(data));
    cart()
    search()
    console.log('101');
});
