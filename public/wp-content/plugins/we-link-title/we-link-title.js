document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const linkText = link.textContent.trim();
        if (linkText) {
            link.setAttribute('title', linkText);
        }
    });
});
