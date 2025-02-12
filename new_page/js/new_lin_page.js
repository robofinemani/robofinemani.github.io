document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.error(`目标元素 ${targetId} 不存在`);
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const topLink = document.getElementById('topLink');
    topLink.addEventListener('click', function (e) {
        window.scrollTo({ top: 0, behavior:'smooth' });
        e.preventDefault();
    });
});