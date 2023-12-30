const combinedCSS = `
  /* Paste the contents of styles.css here */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

  body {
    font-family: 'Poppins', sans-serif; /* Use Poppins font */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #353935; /* Background color for the entire body */
    color: #ccc; /* Text color */
  }

  .chase-section {
    position: relative;
    width: 80%; /* Adjusted width */
    height: 637.69px; /* Height of the chase-section */
    max-width: 1365px; /* Maximum width */
    border: 1px solid #ccc; /* Border color */
    overflow: hidden;
    background-color: #353935; /* Background color */
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3); /* Shadow effect for chase-section */
    border-radius: 10px; /* Rounded corners */
    z-index: 1; /* Ensure the chase-section is above other elements */
  }

  .chase-button {
    position: absolute;
    width: 200px; /* Increased width */
    height: 80px; /* Increased height */
    background-color: transparent; /* Transparent background */
    border: 1px solid #555; /* Darker border color */
    color: #ccc; /* Text color */
    cursor: none; /* Hide default cursor */
    transition: 0.3s;
    border-radius: 8px; /* Curvy edges */
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); /* Shadow effect for chase-button */
  }

  .chase-label {
    position: absolute;
    top: -50px; /* Adjust the position */
    left: 50%;
    transform: translateX(-50%);
    background-color: #353935;
    color: #ccc;
    padding: 5px 10px;
    border-radius: 5px;
    z-index: 2; /* Ensure the label is above the chase-section */
  }

  /* Custom Cursor Styles */
  .custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 50%;
    background-color: transparent;
    transform: translate(-50%, -50%);
    transition: 0.1s ease-out;
    mix-blend-mode: difference; /* Blend mode to make it visible on dark backgrounds */
  }
`;

// Inject the styles into the document head
const styleElement = document.createElement('style');
styleElement.textContent = combinedCSS;
document.head.appendChild(styleElement);

// Create a custom cursor element
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

// Track mouse movement to update the custom cursor position
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});
// Function to generate a random position within the chase section
function getRandomPosition() {
  const chaseSection = document.getElementById('chaseSection');
  const sectionWidth = chaseSection.clientWidth - 100; // Width of the chase button
  const sectionHeight = chaseSection.clientHeight - 40; // Height of the chase button

  const randomX = Math.floor(Math.random() * sectionWidth);
  const randomY = Math.floor(Math.random() * sectionHeight);

  return { x: randomX, y: randomY };
}

// Function to handle mouseover event on the chase button
function handleMouseOver(event) {
  const newPosition = getRandomPosition();
  event.target.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
  
  const texts = ['oops, too slow', 'You got this!', 'one more try?', 'hehe ;)', 'so close', 'still nothing?','one day...', 'disappointing :('];
  const randomIndex = Math.floor(Math.random() * texts.length);
  event.target.textContent = texts[randomIndex];
}

// Create chase section, label, and button and attach mouseover event listener
const chaseSection = document.createElement('div');
chaseSection.classList.add('chase-section');
chaseSection.id = 'chaseSection';
document.body.appendChild(chaseSection);

const chaseLabel = document.createElement('div');
chaseLabel.classList.add('chase-label');
chaseLabel.textContent = 'Chase Button'; // Label text

const chaseButton = document.createElement('button');
chaseButton.classList.add('chase-button');
chaseButton.textContent = 'Click me';
chaseButton.style.transform = `translate(0, 0)`; // Initial position

chaseButton.addEventListener('mouseover', handleMouseOver);

chaseSection.appendChild(chaseLabel);
chaseSection.appendChild(chaseButton);
