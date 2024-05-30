gsap.from(".animate",{
    y: -600,
    delay: 0.5,
    duration: 1.5,
})

// * Typing Animation
function typeWriter(text, elementId, speed) {
    let i = 0;
    let isBackspacing = false;
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    function type() {
        const visibleText = text.substring(0, i);
        const cursor = i === text.length && !isBackspacing ? "|" : "";

        element.innerHTML = visibleText + cursor;

        if (!isBackspacing) {
            i++;
            if (i > text.length) {
                isBackspacing = true;
                setTimeout(type, 500);
            } else {
                setTimeout(type, speed);
            }
        } else {
            i--;
            if (i >= 0) {
                setTimeout(type, speed);
            } else {
                isBackspacing = false;
                setTimeout(type, 500);
            }
        }
    }

    type();
}

function startTypingEffect() {
    const h1Text = `Make <br> remote work`;
    typeWriter(h1Text, "typed-h1", 40);
}

startTypingEffect();

const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('nav-links');

hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});