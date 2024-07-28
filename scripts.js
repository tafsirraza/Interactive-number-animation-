// script.js
document.querySelectorAll('.number').forEach(num => {
    num.addEventListener('click', () => {
        const number = num.getAttribute('data-number');
        alert(`You clicked number ${number}`);
        num.classList.add('animate');
        setTimeout(() => num.classList.remove('animate'), 600); // Duration of bounce animation
    });
});