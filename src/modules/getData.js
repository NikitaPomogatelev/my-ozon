const getData = async (url) => {
    const data = await fetch(url)
    if (!data.ok) {
        throw new Error(`Возникла ошибка по адресу: ${data.url} Статус ошибки: ${data.status}: ${data.statusText}`);
    }
    return await data.json();

    // return fetch('https://myozon-27457-default-rtdb.firebaseio.com/goods.json')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
}

export default getData
