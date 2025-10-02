const menuOptions = document.querySelectorAll("nav > ul > li > a");

menuOptions.forEach(option => {
    option.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior (page won't refresh)

        // Hide all pages
        document.querySelectorAll(".page").forEach(page => {
            page.classList.add("hidden");
        });

        // Show the selected page
        const targetPageId = this.getAttribute("data-page");
        document.getElementById(targetPageId).classList.remove("hidden");

        // Update active class
        menuOptions.forEach(opt => opt.classList.remove("active"));
        this.classList.add("active");

        // Update document title
        const pageTitle = this.getAttribute("data-title");
        document.title = `${pageTitle} | Deved By Aiden`;
    });
});