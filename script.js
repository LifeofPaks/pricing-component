const toggler = document.querySelector('.toggler')
const basicAmount = document.querySelector('.basic-amount')
const proAmount = document.querySelector('.pro-amount')
const masterAmount = document.querySelector('.master-amount')

toggler.addEventListener('click', ()=>{
    toggler.classList.toggle('active')
    if (toggler.classList.contains('active')){
        basicAmount.innerHTML = '19.99'
        proAmount.innerHTML = '24.99'
        masterAmount.innerHTML = '39.99'
    } else{
        basicAmount.innerHTML = '199.99'
        proAmount.innerHTML = '249.99'
        masterAmount.innerHTML = '399.99'
    }
})