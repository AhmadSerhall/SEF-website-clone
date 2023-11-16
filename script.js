// Get the hero-left container
const heroLeftContainer = document.getElementById("hero-left");

// Create a pseudo-element for color animation
const colorAnimationPseudoElement = document.createElement("div");
colorAnimationPseudoElement.classList.add("color-animation-container");

// Append the pseudo-element to the hero-left container
heroLeftContainer.appendChild(colorAnimationPseudoElement);

// Set the color animation properties
colorAnimationPseudoElement.style.animation = "colorBlink 6s infinite";
colorAnimationPseudoElement.style.backgroundColor = "#28EEA7";

// Define the color animation keyframes
const keyframes = `
  @keyframes colorBlink {
    0%, 10%, 60%, 70% {
      background-color: #28EEA7;
    }
    20%, 30%, 80%, 90% {
      background-color: #9864da;
    }
    40%, 50%, 100% {
      background-color: #fb508e;
    }
  }
`;

// Create a style element, set the keyframes, and append it to the document head
const styleElement = document.createElement("style");
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(keyframes));
document.head.appendChild(styleElement);





document.addEventListener("DOMContentLoaded", function () {
    const words = ["Software Engineer ?", "UI/UX Designer ?", "Data Engineer ?"];
    const textChangeElement = document.getElementById("text-change");
  
    function updateText() {
      let currentWordIndex = 0;
  
      function changeWord() {
        let currentWord = words[currentWordIndex];
        let i = 0;
  
        function typeLetter() {
          textChangeElement.textContent = currentWord.slice(0, i);
          i++;
  
          if (i <= currentWord.length) {
            setTimeout(typeLetter, 100);
          } else {
            setTimeout(backtrack, 2000);
          }
        }
  
        typeLetter();
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }
  
      function backtrack() {
        let currentWord = textChangeElement.textContent;
        let i = currentWord.length;
  
        function deleteLetter() {
          textChangeElement.textContent = currentWord.slice(0, i);
          i--;
  
          if (i >= 0) {
            setTimeout(deleteLetter, 50);
          } else {
            changeWord();
          }
        }
  
        deleteLetter();
      }
  
      changeWord();
    }
  
    updateText();
  });
  
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

