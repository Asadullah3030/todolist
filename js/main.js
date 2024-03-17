const addSearch = document.getElementById('addSearch')
const addButton = document.getElementById('addButton')
const addingBack = document.getElementById('addingBack')

function addTask() {
    if (addSearch.value === '') {
            alert('this empty')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = addSearch.value
        addingBack.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        dataSave()
    }
    addSearch.value =''
}

addingBack.addEventListener('click',(e)=>{
    if (e.target.tagName === 'LI'){
            e.target.classList.toggle('highlight')
            dataSave()
    }
    else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove()
            dataSave()
    }
},false)

const dataSave = () => {
        localStorage.setItem('data', addingBack.innerHTML)
}

const showData = () => {
        addingBack.innerHTML = localStorage.getItem('data')
}

showData()

addButton.addEventListener('click', addTask)