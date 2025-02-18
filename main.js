const lampOff = document.querySelector('.lamp_off')
const lampOn = document.querySelector('.lamp_on')
const btn = document.querySelector('button')
const arrButton = [btn.textContent]

lampOn.classList.add('inactive');
lampOff.classList.add('active');

btn.addEventListener('click', function (){
    if (arrButton.includes('Accendi')){
        lampOn.classList.remove('inactive')
        lampOn.classList.add('active')
        lampOff.classList.remove('active')
        lampOff.classList.add('inactive')
        console.log(lampOff.classList);
        console.log(lampOn.classList);
        
        btn.innerText = 'Spegni'
    }
    else if (arrButton.includes('Spegni')){
        lampOn.classList.remove('active')
        lampOn.classList.add('inactive')
        lampOff.classList.remove('inactive')
        lampOff.classList.add('active')
        console.log(lampOff.classList);
        console.log(lampOn.classList);

        btn.innerText = 'Accendi'
    }
})

