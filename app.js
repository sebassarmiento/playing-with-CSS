console.log('Init app')
let box = true
let ball = true
let spinner = true
let loader = true
let bar = true
let card = true
let buffer = true

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
    if(spinner){
        $('.show-spinner-btn').html('Hide spinner')
    } else {
        $('.show-spinner-btn').html('Show spinner')
    }
    spinner = !spinner
})

$('.show-loader-btn').on('click', () => {
    $('.loader').toggleClass('hidden')
    $('.loader-2').toggleClass('hidden')
    if(loader){
        $('.show-loader-btn').html('Hide loader')
    } else {
        $('.show-loader-btn').html('Show loader')
    }
    loader = !loader
})

$('.show-bar-btn').on('click', () => {
    $('.bar').toggleClass('hidden')
    $('.progress').toggleClass('hidden')
    if(bar){
        $('.show-bar-btn').html('Hide progress bars')
    } else {
        $('.show-bar-btn').html('Show progress bars')
    }
    bar = !bar
})

$('.show-card-btn').on('click', () => {
    $('.card').toggleClass('hidden')
    if(card){
        $('.show-card-btn').html('Hide card')
    } else {
        $('.show-card-btn').html('Show card')
    }
    card = !card
})

$('.show-buffer-btn').on('click', () => {
    $('.buffer').toggleClass('hidden')
    if(buffer){
        $('.show-buffer-btn').html('Hide buffer')
    } else {
        $('.show-buffer-btn').html('Show buffer')
    }
    buffer = !buffer
})