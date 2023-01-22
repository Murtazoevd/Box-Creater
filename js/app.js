//                      animatsiya 
// let box = document.getElementById('box')

// console.log(inputText);

// inputText.addEventListener('change', (event)=>{
//     console.log(event);
// })

// document.body.addEventListener('keydown', (event)=>{
//     console.log(event);
//     if(event.code == 'Space'){
//         box.style.animation = 'jumpAnim .5s linear infinite'
//     }
// })

// let inputText = document.querySelector('#inputText')
// let demo = document.querySelector('.demo')
// let selectItem = document.querySelector('#selectItem')


// selectItem.addEventListener('change', (event)=>{
//     console.log(event.target.value);
// })


// inputText.addEventListener('keydown', (event)=>{
//     // console.log(event.target.value);
//     demo.innerHTML = event.target.value
// })
// inputText.addEventListener('keyup', (event)=>{
//     // console.log(event.target.value);
//     demo.innerHTML = event.target.value
// })   
//               animatsiya

let boxone = document.getElementById('boxone')
let boxtwo = document.getElementById('boxtwo')
let boxthree = document.getElementById('color')
let done = document.getElementById('done')
let natija = document.getElementById('natija')
let boxa = ''
let boxb = ''
let boxc = ''


boxone.addEventListener('keyup',(event)=>{
    boxa = event.target.value
});

boxtwo.addEventListener('keyup', (event)=>{
    boxb = event.target.value
})

boxthree.addEventListener('change',(event)=>{
    boxc = event.target.value
})

done.addEventListener('click', ()=>{
    natija.style.width = boxa + 'px'
    natija.style.height = boxb + 'px'
    natija.style.backgroundColor = boxc 
})