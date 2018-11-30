console.log('Init app')
let box = true
let ball = true
let spinner = true
let loader = true
let bar = true

$('.show-box-btn').on('click', () => {
    $('.box').toggleClass('hidden')
    if(box){
        $('.show-box-btn').html('Hide box')
    } else {
        $('.show-box-btn').html('Show box')
    }
    box = !box
})

$('.show-ball-btn').on('click', () => {
    $('.ball').toggleClass('hidden')
    if(ball){
        $('.show-ball-btn').html('Hide ball')
    } else {
        $('.show-ball-btn').html('Show ball')
    }
    ball = !ball
})

$('.show-spinner-btn').on('click', () => {
    $('.spinner').toggleClass('hidden')
})

$('.show-loader-btn').on('click', () => {
    $('.loader').toggleClass('hidden')
})

$('.show-bar-btn').on('click', () => {
    $('.bar').toggleClass('hidden')
    $('.progress').toggleClass('hidden')
})