export const searchFilter = (goods, value) => {
    return goods.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const categoryFilter = (goods, value) => {
    return goods.filter((item) => {
        return item.category === value
    })
}

export const priceFilter = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        if (min === '' && max === '') {
            return goodsItem
        } else if (min !== '' && max !== '') {
            return goodsItem.price > +min && goodsItem.price < +max
        } else if (min !== '' && max === '') {
            return goodsItem.price > +min
        } else if (min === '' && max !== '') {
            return goodsItem.price < +max
        }
    })
}
export const minPriceFilter = (goods, minValue) => {
    return goods.filter((goodsItem) => {
        return goodsItem.price >= minValue;
    })
}

export const maxPriceFilter = (goods, maxValue) => {
    return goods.filter((goodsItem) => {
        return goodsItem.price <= maxValue;
    });
};
export const sortSaleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        if (value) {
            return goodsItem.sale;
        } else {
            return goodsItem
        }
    });
};
