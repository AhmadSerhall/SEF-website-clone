document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove the 'active' class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add the 'active' class to the clicked tab
            this.classList.add('active');

            // Get the data-tab attribute value
            const tabName = this.getAttribute('data-tab');

            // Call a function to update content based on the selected tab
            updateContent(tabName);
        });
    });

    // Default tab is FSW
    updateContent('fsw');

    function updateContent(tabName) {
        // Your content updates based on the selected tab
        contents.forEach(content => {
            content.style.display = 'none'; // Hide all content by default
            if (content.getAttribute('data-tab') === tabName) {
                content.style.display = 'block'; // Show the content for the selected tab
            }
        });
    }
});

//testimonials script
// const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];
//     const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

//     let currentIndex = 0;
//     const textElement = document.getElementById('text');
//     const imgElement = document.querySelector('#img-container img');
//     const points = document.querySelectorAll('.point');

//     function updateContent() {
//         textElement.textContent = texts[currentIndex];
//         imgElement.src = images[currentIndex];
//         points.forEach((point, index) => {
//             point.classList.toggle('active', index === currentIndex);
//         });

//         currentIndex = (currentIndex + 1) % texts.length;
//     }

//     function changeContentAfterDelay() {
//         setInterval(updateContent, 2000);
//     }

//     // Initial content update
//     updateContent();

//     // Start the interval after 2 seconds
//     setTimeout(changeContentAfterDelay, 2000);

