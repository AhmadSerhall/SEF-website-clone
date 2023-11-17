const heroLeftContainer = document.getElementById("hero-left");

const colorAnimationPseudoElement = document.createElement("div");
colorAnimationPseudoElement.classList.add("color-animation-container");

heroLeftContainer.appendChild(colorAnimationPseudoElement);

colorAnimationPseudoElement.style.animation = "colorBlink 6s infinite";
colorAnimationPseudoElement.style.backgroundColor = "#28EEA7";

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

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));

      this.classList.add("active");

      const tabName = this.getAttribute("data-tab");

      updateContent(tabName);
    });
  });

  //default fsw
  updateContent("fsw");

  function updateContent(tabName) {
    contents.forEach((content) => {
      content.style.display = "none";
      if (content.getAttribute("data-tab") === tabName) {
        content.style.display = "block";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contentContainer = document.getElementById("content-container");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));

      this.classList.add("active");

      const tabName = this.getAttribute("data-tab");

      updateContent(tabName);
    });
  });

  updateContent("fsw");

  function updateContent(tabName) {
    const imageContainer = document.querySelector(".image-container img");

    if (tabName === "fcs") {
      imageContainer.src = "./assets/fcs.png";
      contentContainer.style.backgroundColor = "#FFCC33";
    } else if (tabName === "fsw") {
      imageContainer.src = "./assets/fsw.png";
      contentContainer.style.backgroundColor = "#28EEA7";
    } else if (tabName === "fsd") {
      contentContainer.style.backgroundColor = "#9864da";
    } else if (tabName === "uix") {
      contentContainer.style.backgroundColor = "#fb508e";
    }
  }
});
