const lampOff = document.querySelector('.lamp_off')
const lampOn = document.querySelector('.lamp_on')
const btn = document.querySelector('button')

lampOn.classList.add('inactive');
lampOff.classList.add('active');

btn.addEventListener('click', function (){
    if (btn.textContent == 'Accendi'){
        lampOn.classList.remove('inactive')
        lampOn.classList.add('active')
        lampOff.classList.remove('active')
        lampOff.classList.add('inactive')
        
        btn.innerText = 'Spegni'
    }
    else if (btn.textContent == 'Spegni'){
        lampOn.classList.remove('active')
        lampOn.classList.add('inactive')
        lampOff.classList.remove('inactive')
        lampOff.classList.add('active')

        btn.innerText = 'Accendi'
    }
})

