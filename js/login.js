// console.log('button add')

// //search: form submit reloading the page

// document.getElementById('button-login').addEventListener('ckick',function(event){
//     event.preventDefault();
//     console.log('login button clicked');
//     const phoneNumber = document.getElementById('phone-number').value;
//     console.log(phoneNumber)
// })

document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();

    // get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    //console.log(phoneNumber, pinNumber);

    //bad way to validate
    if(phoneNumber ==='5' && pinNumber ==='1234'){
        console.log('you are loged in ');
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone number and pin')
    }


});