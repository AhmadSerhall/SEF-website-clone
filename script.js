document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contentContainer = document.getElementById('content-container');

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
        const textContent = document.querySelector('.text-content');
        const imageContainer = document.querySelector('.image-container img');

        if (tabName === 'fcs') {
            textContent.innerHTML = '<h2>FCS: Your Content</h2><p>Details about FCS.</p>';
            imageContainer.src = './assets/fcs.png';
            contentContainer.style.backgroundColor = '#FFCC33';
        } else if (tabName === 'fsw') {          
            imageContainer.src = './assets/fsw.png';
            contentContainer.style.backgroundColor = '#28EEA7';
        } else if (tabName === 'fsd') {
            textContent.innerHTML = '<h2>FSD: Your Content</h2><p>Details about FSD.</p>';
            imageContainer.src = './assets/fsd.png';
            contentContainer.style.backgroundColor = '#9864da';
        } else if (tabName === 'uix') {
            textContent.innerHTML = '<h2>UIX: Your Content</h2><p>Details about UIX.</p>';
            imageContainer.src = './assets/uix.png';
            contentContainer.style.backgroundColor = '#fb508e';
        }
    }
});
