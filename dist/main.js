/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_sortPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sortPrice */ \"./src/modules/sortPrice.js\");\n/* harmony import */ var _modules_saleFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/saleFilter */ \"./src/modules/saleFilter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    console.log('101');\r\n    (0,_modules_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    ;(0,_modules_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    ;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    ;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n    ;(0,_modules_sortPrice__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n    ;(0,_modules_saleFilter__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n});\r\n\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n    const cartBtn = document.querySelector('#cart')\r\n    const cartModal = document.querySelector('.cart')\r\n    const cartTotal = cartModal.querySelector('.cart-total span')\r\n    const goodsWrapper = document.querySelector('.goods')\r\n    const cartWrapper = document.querySelector('.cart-wrapper')\r\n    const counter = document.querySelector('.counter')\r\n    const cartSendBtn = cartModal.querySelector('.cart-confirm')\r\n\r\n    const disableScroll = () => {\r\n\r\n        // Вычисление ширины скрола \r\n        const widthScroll = window.innerWidth - document.body.offsetWidth;\r\n        // console.log(widthScroll);\r\n\r\n        document.disableScroll = true;\r\n\r\n        // Сколь px от верха прокручено\r\n        document.body.dbScrollY = window.scrollY;\r\n        document.body.style.cssText = `\r\n            position: fixed;\r\n            top: ${-window.scrollY}px;\r\n            left: 0;\r\n            width: 100%;\r\n            height: 100vh;\r\n            overflow: hidden;\r\n            padding-right: ${widthScroll}px;\r\n        `;\r\n    };\r\n    // Разблокировка скролла\r\n    const enableScroll = () => {\r\n        document.body.style.cssText = '';\r\n        window.scroll({\r\n            top: document.body.dbScrollY,\r\n        })\r\n    };\r\n\r\n    const escapeHandler = ({\r\n        code,\r\n        keyCode\r\n    }) => {\r\n        if (code === 'Escape' || keyCode === 27) {\r\n            closeCart();\r\n        }\r\n    }\r\n\r\n\r\n    const openCart = () => {\r\n        const cart = localStorage.getItem('cart') ?\r\n            JSON.parse(localStorage.getItem('cart')) : []\r\n        disableScroll()\r\n        cartModal.classList.add('active')\r\n        document.addEventListener('keydown', escapeHandler);\r\n\r\n        (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n        cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n            return sum + goodItem.price\r\n        }, 0)\r\n    }\r\n    const closeCart = () => {\r\n        enableScroll()\r\n        cartModal.classList.remove('active')\r\n        document.removeEventListener('keydown', escapeHandler);\r\n    }\r\n\r\n    cartModal.addEventListener('click', ({ target }) => {\r\n        if (target.classList.contains('cart-close') || target === cartModal) {\r\n            closeCart();\r\n        }\r\n    });\r\n\r\n    cartBtn.addEventListener('click', openCart)\r\n\r\n    let count = +cart.length\r\n    counter.innerHTML = +count\r\n\r\n    goodsWrapper.addEventListener('click', ({ target }) => {\r\n        if (target.classList.contains('btn-primary')) {\r\n            const card = target.closest('.card')\r\n            const cardKey = card.dataset.key\r\n            // Получаем массив из localStorage\r\n            const goods = JSON.parse(localStorage.getItem('goods'))\r\n            const cart = localStorage.getItem('cart') ?\r\n                JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n            const goodItem = goods.find((item) => {\r\n                return item.id === +cardKey\r\n            })\r\n\r\n            cart.push(goodItem)\r\n            counter.innerHTML = +cart.length\r\n            // Запись в массив cart b и перезаписываем в localStorage\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n        }\r\n    })\r\n\r\n    cartWrapper.addEventListener('click', ({ target }) => {\r\n        if (target.classList.contains('btn-primary')) {\r\n            const cart = localStorage.getItem('cart') ?\r\n                JSON.parse(localStorage.getItem('cart')) : []\r\n            const card = target.closest('.card')\r\n            const cardKey = card.dataset.key\r\n            const index = cart.findIndex((item) => {\r\n                return item.id === +cardKey\r\n            })\r\n\r\n            cart.splice(index, 1)\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n            cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n                return sum + goodItem.price\r\n            }, 0)\r\n        }\r\n    })\r\n\r\n    cartSendBtn.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ?\r\n            JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n        ;(0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n            localStorage.removeItem('cart')\r\n\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\r\n\r\n            cartTotal.textContent = 0\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const catalogBtn = document.querySelector('.catalog-button button')\r\n    const catalogMenu = document.querySelector('.catalog')\r\n    const catalogItems = catalogMenu.querySelectorAll('.catalog .catalog-list li')\r\n    \r\n    let isOpen = false\r\n\r\n    // Открытие меню каталога на клик\r\n    catalogBtn.addEventListener('click', ({ target }) => {\r\n        isOpen = !isOpen\r\n\r\n        if (isOpen) {\r\n            catalogMenu.style.display = 'block'\r\n        } else {\r\n            catalogMenu.style.display = ''\r\n        }\r\n\r\n    })\r\n\r\n    // Перебор каждого значения из меню и событие клик (выбор категории)\r\n    catalogItems.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            let text = item.textContent\r\n\r\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('https://myozon-27457-default-rtdb.firebaseio.com/goods.json').then((data) => {\r\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\r\n            });\r\n        })\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"minPriceFilter\": () => (/* binding */ minPriceFilter),\n/* harmony export */   \"maxPriceFilter\": () => (/* binding */ maxPriceFilter),\n/* harmony export */   \"sortSaleFilter\": () => (/* binding */ sortSaleFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n    return goods.filter((item) => {\r\n        return item.title.toLowerCase().includes(value.toLowerCase())\r\n    })\r\n}\r\n\r\nconst categoryFilter = (goods, value) => {\r\n    return goods.filter((item) => {\r\n        return item.category === value\r\n    })\r\n}\r\n\r\nconst priceFilter = (goods, min, max) => {\r\n    return goods.filter((goodsItem) => {\r\n        if (min === '' && max === '') {\r\n            return goodsItem\r\n        } else if (min !== '' && max !== '') {\r\n            return goodsItem.price > +min && goodsItem.price < +max\r\n        } else if (min !== '' && max === '') {\r\n            return goodsItem.price > +min\r\n        } else if (min === '' && max !== '') {\r\n            return goodsItem.price < +max\r\n        }\r\n    })\r\n}\r\nconst minPriceFilter = (goods, minValue) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.price >= minValue;\r\n    })\r\n}\r\n\r\nconst maxPriceFilter = (goods, maxValue) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.price <= maxValue;\r\n    });\r\n};\r\nconst sortSaleFilter = (goods, value) => {\r\n    return goods.filter((goodsItem) => {\r\n        if (value) {\r\n            return goodsItem.sale;\r\n        } else {\r\n            return goodsItem\r\n        }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = async (url) => {\r\n    const data = await fetch(url)\r\n    if (!data.ok) {\r\n        throw new Error(`Возникла ошибка по адресу: ${data.url} Статус ошибки: ${data.status}: ${data.statusText}`);\r\n    }\r\n    return await data.json();\r\n\r\n    // return fetch('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')\r\n    //     .then(response => response.json())\r\n    //     .then(data => console.log(data))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')\r\n        .then(data => {\r\n        // console.log(data)\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n        });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(cart),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n      })\r\n        .then((response) => response.json())\r\n        .then((json) => console.log(json));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/modules/cart.js\");\n\r\n\r\nconst renderCart = (goods) => {\r\n    const cartWrapper = document.querySelector('.cart-wrapper')\r\n\r\n    cartWrapper.innerHTML = ''\r\n\r\n    if (goods.length === 0) {\r\n        cartWrapper.innerHTML = `\r\n            <div id=\"cart-empty\">\r\n                Ваша корзина пока пуста\r\n            </div>\r\n        `\r\n    } else {\r\n        // Вывод карточек товаров из БД\r\n        goods.forEach(({ id, img, price, title, sale }) => {\r\n            cartWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"card\" data-key=\"${id}\">\r\n                ${sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                <div class=\"card-img-wrapper\">\r\n                    <span class=\"card-img-top\"\r\n                        style=\"background-image: url('${img}')\"></span>\r\n                </div>\r\n                <div class=\"card-body justify-content-between\">\r\n                    <span class=\"card-price\">${price} ₽</span>\r\n                    <h5 class=\"card-title\">${title}</h5>\r\n                    <button class=\"btn btn-primary\">Удалить</button>\r\n                </div>\r\n            </div>\r\n        `)\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector('.goods')\r\n\r\n    localStorage.setItem('goods', JSON.stringify(goods))\r\n\r\n    goodsWrapper.innerHTML = ''\r\n\r\n    // Вывод карточек товаров из БД\r\n    goods.forEach(({ id, img, price, title, sale }) => {\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n            <div class=\"card\" data-key=\"${id}\">\r\n                ${sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                <div class=\"card-img-wrapper\">\r\n                    <span class=\"card-img-top\"\r\n                        style=\"background-image: url('${img}')\"></span>\r\n                </div>\r\n                <div class=\"card-body justify-content-between\">\r\n                    <span class=\"card-price\">${price} ₽</span>\r\n                    <h5 class=\"card-title\">${title}</h5>\r\n                    <button class=\"btn btn-primary\">В корзину</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        `)\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/saleFilter.js":
/*!***********************************!*\
  !*** ./src/modules/saleFilter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst saleFilter = () => {\r\n    // const checkboxInp = document.querySelector('#discount-checkbox')\r\n    // const checkboxCheck = document.querySelector('.filter-check_checkmark')\r\n\r\n    // checkboxInp.addEventListener('change', () => {\r\n    //     if (checkboxInp.checked) {\r\n    //         checkboxCheck.classList.add('checked')\r\n    //     } else {\r\n    //         checkboxCheck.classList.remove('checked')\r\n    //     }\r\n    //     getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')\r\n    //         .then((data) => {\r\n    //             renderGoods(sortSaleFilter(data, checkboxInp.checked))\r\n    //         });\r\n    // })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saleFilter);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/saleFilter.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchInp = document.querySelector('.search-wrapper_input')\r\n    const searchBtn = document.querySelector('.search-btn')\r\n\r\n    searchInp.addEventListener('input', ({ target }) => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('https://myozon-27457-default-rtdb.firebaseio.com/goods.json').then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, target.value))\r\n        });\r\n    })\r\n    searchBtn.addEventListener('click', () => {\r\n        console.log(searchInp.value)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

/***/ }),

/***/ "./src/modules/sortPrice.js":
/*!**********************************!*\
  !*** ./src/modules/sortPrice.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst sortPrice = () => {\r\n    const minInp = document.querySelector('#min.filter-price_input')\r\n    const maxInp = document.querySelector('#max.filter-price_input')\r\n    // const filterInp = document.querySelectorAll('.filter-price_input')\r\n\r\n    minInp.addEventListener('input', () => {\r\n        console.log(minInp.value)\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')\r\n            .then((data) => {\r\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.sortSaleFilter)(data, checkboxInp.checked), minInp.value, maxInp.value))\r\n            });\r\n    })\r\n    maxInp.addEventListener('input', () => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')\r\n            .then((data) => {\r\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.sortSaleFilter)(data, checkboxInp.checked), minInp.value, maxInp.value))\r\n            });\r\n    })\r\n\r\n    // Минимальная стоимость\r\n    // filterInp[0].addEventListener('input', ({ target }) => {\r\n    //     let minValue = target.value;\r\n    //     getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')\r\n    //         .then((data) => {\r\n    //             renderGoods(minPriceFilter(data, minValue))\r\n    //         });\r\n    // })\r\n\r\n    // Максимальная стоимость\r\n    // filterInp[1].addEventListener('input', ({ target }) => {\r\n    //     let maxValue = target.value;\r\n    //     getData('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')\r\n    //         .then((data) => {\r\n    //             renderGoods(maxPriceFilter(data, maxValue))\r\n    //         });\r\n    // })\r\n\r\n    const checkboxInp = document.querySelector('#discount-checkbox')\r\n    const checkboxCheck = document.querySelector('.filter-check_checkmark')\r\n\r\n    checkboxInp.addEventListener('change', () => {\r\n        if (checkboxInp.checked) {\r\n            checkboxCheck.classList.add('checked')\r\n        } else {\r\n            checkboxCheck.classList.remove('checked')\r\n        }\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')\r\n            .then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.sortSaleFilter)(data, checkboxInp.checked), minInp.value, maxInp.value))\r\n            });\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortPrice);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/sortPrice.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;