const timerH1 = document.querySelector('#counter')
const likesUl = document.querySelector('.likes')
const divList = document.querySelector('#list')
const commentForm = document.querySelector('#comment-form')
const btnSub = document.querySelector('#submit')
const btnPause = document.querySelector('#pause')
btnPause.innerText = 'Start'
btnPause.value = true

const incrementTime = () => {
    currentCount = parseInt(timerH1.innerText)
    currentCount = currentCount + 1
    timerH1.innerText = currentCount
}

const decrementTime = () => {
    currentCount = parseInt(timerH1.innerText)
    currentCount = currentCount - 1
    timerH1.innerText = currentCount
}

const btnPlus = document.querySelector('#plus')
btnPlus.addEventListener('click', () => {
    incrementTime()
})

const btnMinus = document.querySelector('#minus')
btnMinus.addEventListener('click', () => {
    decrementTime()
})

const btnHeart = document.querySelector('#heart')
btnHeart.addEventListener('click', () => {
    const li = document.createElement('li')
    currentCount = parseInt(timerH1.innerText)
    li.innerText = `${currentCount} was liked`
    likesUl.append(li)
})

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const ul = document.createElement('ul')
    ul.innerText = e.target[0].value
    divList.append(ul)
    e.target.reset()
})
let timer = setInterval(incrementTime, 1000)
//not yet working
btnPause.addEventListener('click', () => {
    // let timer = setInterval(incrementTime, 1000)
    if(btnPause.value == 'false'){
        btnPause.innerText = 'Start'
        btnPause.value = true
        clearInterval(timer)
    }else{
        btnPause.innerText = 'Pause'
        btnPause.value = false
    }
})

// setInterval(incrementTime, 1000)