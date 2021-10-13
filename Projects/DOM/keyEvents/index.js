const input = document.querySelector('input')

input.addEventListener('keydown',(event)=>{
    input.value = null;
     h2 = document.querySelector('#h').innerHTML ="You pressed <h1>"+event.key+'</h1>';
    
     if(event.key=='Enter'){
         alert('You pressed Enter')
     }
    console.log(event.key)
})

input.addEventListener('keyup',(event)=>{
    console.log(event.key)
})