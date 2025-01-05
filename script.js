const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    const buttonWidth = noButton.clientWidth;
    const buttonHeight = noButton.clientHeight;

    // Calculate random positions
    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    // Set the new position
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Handle the Yes button click
document.getElementById('yesButton').addEventListener('click', () => {
    alert("Thank you Wifeyy ❤️");
});

// Handle the No button click
noButton.addEventListener('click', () => {
    alert("Try again!");
});