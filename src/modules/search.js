const search = () => {
    const searchInp = document.querySelector('.search-wrapper_input')
    const searchBtn = document.querySelector('.search-btn')

    searchBtn.addEventListener('click', () => {
        console.log(searchInp.value)
    })
}

export default search
