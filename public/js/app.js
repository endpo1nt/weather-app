console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((res) => {
    res.json().then((data) => {
        console.log(data)
    })
})



const weatherForm = document.querySelector('form')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const search = document.querySelector('input')
    console.log(search.value)
    fetch('http://localhost:3000/weather/?address='+search.value).then((res) => {
        res.json().then((data) => {
            if(data)
                console.log(data)
        })
    })
})