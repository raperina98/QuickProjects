let seconds = 0
let minutes = 0
let hours = 0
let tempo

function comecar() {
    
    tempo = setInterval(() => {
        var d = new Date()

        let time = document.querySelector('.time').children[1]

        seconds = seconds + 1

        if (seconds == 60) {
            seconds = 0

            minutes = minutes + 1
        }

        time.innerText = `00:${f(minutes)}:${f(seconds)}`

    }, 1000)
    
}

function parar(){
    clearInterval(tempo)
}


function f(value) {
    return ('00' + value).slice(-2)
}