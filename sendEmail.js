Email.send({
    Host : "smtp.elasticemail.com",
    Username : "palagashviliniika@gmail.com",
    Password : "C27946F645D790D3DF2C01BAC2BC2EEB312C",
    To : 'palagashvilinika@mail.com',
    From : "palagashviliniika@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);