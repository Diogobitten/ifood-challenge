document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('minimized');
        toggleSidebar.querySelector('i').classList.toggle('bi-chevron-left');
        toggleSidebar.querySelector('i').classList.toggle('bi-chevron-right');
    });
});