const form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const A= parseInt(document.getElementById('A').value)
    const B= parseInt(document.getElementById('B').value)
    if (B>A){
        alert('positivo')
    } else{
        alert('negativo')
    }
})