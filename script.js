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

// Get modal elements
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Get all project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', function() {
        // 1. Extract data from the clicked card
        const title = this.querySelector('h3').innerText;
        
        // Handle cases where a description <p> might be missing (like your NSL-KDD project)
        const descElement = this.querySelector('p');
        const desc = descElement ? descElement.innerText : 'More details coming soon!';
        
        // Handle cases where an image might be missing
        const imgElement = this.querySelector('img');
        const imgSrc = imgElement ? imgElement.src : '';

        // 2. Populate the modal with the extracted data
        modalTitle.innerText = title;
        modalDesc.innerText = desc;
        
        if (imgSrc) {
            modalImg.src = imgSrc;
            modalImg.style.display = 'inline-block';
        } else {
            modalImg.style.display = 'none'; // Hide image in modal if card has no image
        }

        // 3. Show the modal
        modal.style.display = "flex"; 
    });
});

// Close the modal when the user clicks on the 'X'
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal content window
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
