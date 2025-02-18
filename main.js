const lampOff = document.querySelector('.lamp_off')
const lampOn = document.querySelector('.lamp_on')
const btn = document.querySelector('button')

lampOn.classList.add('inactive');
lampOff.classList.add('active')

btn.addEventListener('click', function (){
    lampOn.classList.remove('inactive')
    lampOn.classList.add('active')
    lampOff.classList.remove('active')
    lampOff.classList.add('inactive')
})