const pageLinks = document.querySelectorAll("a[data-page]");

pageLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        // Hide all pages
        document.querySelectorAll(".page").forEach(page => {
            page.classList.add("hidden");
        });

        // Show the selected page
        const targetPageId = this.getAttribute("data-page");
        document.getElementById(targetPageId).classList.remove("hidden");

        // Remove active class from all nav links
        const navLinks = document.querySelectorAll("nav > ul > li > a");
        navLinks.forEach(navLink => navLink.classList.remove("active"));

        // If clicked link is inside nav, activate it
        if (this.closest("nav")) {
            this.classList.add("active");
        } else {
            // Otherwise, find matching nav link by data-page and activate it
            const matchingNavLink = Array.from(navLinks).find(navLink =>
                navLink.getAttribute("data-page") === targetPageId
            );
            if (matchingNavLink) {
                matchingNavLink.classList.add("active");
            }
        }

        // Update document title
        const pageTitle = this.getAttribute("data-title");
        if (pageTitle) {
            document.title = `${pageTitle} | Deved By Aiden`;
        }
    });
});