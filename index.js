function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to handle button click event
  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
  }

  // Add click event listener to the button
  const colorButton = document.getElementById('colorButton');
  colorButton.addEventListener('click', changeBackgroundColor);