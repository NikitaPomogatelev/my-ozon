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
