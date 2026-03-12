document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const projects = document.querySelectorAll('.project-card');

        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block'; // Show project
            } else {
                project.style.display = 'none';  // Hide project
            }
        });
    });
});
