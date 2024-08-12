console.log('hello world')
const inputBox = document.getElementById('input')
const listContainer = document.getElementById('list')

function addTask(){
    if(inputBox.value === ''){
        alert('Field is empty')
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        console.log(li)
    }
    inputBox.value = ''
    saveData()
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        saveData()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML)
}
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()