let data = []

axios.get(`http://localhost:3000/books`).then((response) =>{
    //console.log(response.data)
    const listData = document.getElementById("listData")
    data = response.data


    data.forEach(data => {
        console.log(data)
        const {bookName, bookYear, bookPublisher, bookQuality } = data
        const tabelHTML 
    })
})
.catch((error) =>{
    console.log(error)
})
const deleteBook = (id) => {
    axios.delete(`http://localhost:3000/books/${id}`)
    .then((response) => {
        alert("Data deleted")
    })
    .catch((error) => {
        console.log(error)
    })
}

const updateBook = (id) => {
    const finData = data.find((data) => {
        return data.id === id
    })
    console.log(findData)
    if(findData) {
        const bookName = windaw.promt("Book Name", findData.bookName)
        const bookYear = windaw.promt("Book Year", findData.bookYear )
        const bookPublisher = windaw.promt("Book Publisher", findData.bookPublisher)
        const bookQuantity = windaw.promt("Book Quantity", findData.bookQuantity)

        const data = {
            bookName,
            bookYear,
            bookPublisher,
            bookQuantity,
        }
        axios.put(`http://localhost:3000/books/${id}`,data)
    }
}