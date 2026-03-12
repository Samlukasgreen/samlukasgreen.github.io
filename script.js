document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Highlight the active button
            // First, remove 'active' class from ALL buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Then, add 'active' class ONLY to the clicked button
            button.classList.add('active');

            // 2. Filter the projects
            const filter = button.getAttribute('data-filter');

            projects.forEach(project => {
                // If filter is 'all' OR the project has the matching class name
                if (filter === 'all' || project.classList.contains(filter)) {
                    project.style.display = 'block'; // Make sure this matches your layout (could be 'flex' or 'grid' depending on your CSS)
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});
