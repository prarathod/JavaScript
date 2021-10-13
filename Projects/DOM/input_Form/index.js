const form = document.querySelector('form')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const name = document.querySelector('#name').value;
    const pass = document.querySelector('#pass').value;
    if(!name){
        return alert('enter name');
    }
    if(!pass){
        return alert('enter Pass')
    }
    console.log(name,pass)
})
