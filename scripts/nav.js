document.addEventListener("DOMContentLoaded", () => {
    fetch("./partials/nav.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load navigation: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            document.body.insertAdjacentHTML("afterbegin", html);

            const current = location.pathname.split('/').pop();
            document.querySelectorAll('nav a').forEach(a => {
                if (a.getAttribute('href') === current) {
                    a.parentElement.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error("Error loading navigation:", error);
        });
});