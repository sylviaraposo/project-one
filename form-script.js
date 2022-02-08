const formEl = document.querySelector('form');

// form validation of containing an email and a name
formEl.addEventListener('submit', function (event) {
    // prevent the form from refreshing
    event.preventDefault();

    const nameEntry = document.querySelector('input[id=name]').value;

    const emailEntry = document.querySelector('input[id=email]').value;


    if (nameEntry == '') {
        alert('You forgot your name! Please print your name');

        // put the focus back on the name field
        document.querySelector('input[id=name]').focus();
    }
    else if (emailEntry == '') {
        alert('You forgot your email! Please print your email');

        // put the focus back on the email field
        document.querySelector('input[id=email]').focus();
    }
    else {
        alert('Message Submitted! Thank you!');
    }
})