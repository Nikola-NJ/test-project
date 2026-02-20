document.addEventListener('DOMContentLoaded', function () {
    // Sidebar nav toggle
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            sidebarLinks.forEach(function (l) {
                l.classList.remove('active');
            });

            this.classList.add('active');
        });
    });

    // Top-nav tabs toggle
    const tabs = document.querySelectorAll('.tabs .tab');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});
