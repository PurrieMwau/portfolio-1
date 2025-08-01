function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    //checks if the elements match the selector and if required instance is met
    if(elements.length > instance){
        //scroll to specified instance
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () =>{
    scrollToElement('.about-info');
});

link2.addEventListener('click', () =>{
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () =>{
    scrollToElement('.contact');
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const mailtoLink = `mailto:puritymbula07@gmail.com?subject=Want to hire you&body=${encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Message: ${message}`
        )}`;

        window.location.href = mailtoLink;
    });
});