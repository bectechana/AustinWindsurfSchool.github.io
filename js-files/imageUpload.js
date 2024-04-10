// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Array of image URLs
const imageUrls = [
    'images/rounDroppingSail.jpg',
    'images/closeUpsails.jpg',
    'images/DeanSailing.jpg',
    'images/distantTriangleSails.jpg',
    'images/girlPracticeBoard.jpg',
    'images/groupJump.jpg',
    'images/headThroughSail.jpg',
    'images/obrienLessonBoard.jpg',
    'images/raceDaySails.jpg'
];

// Shuffle the array
shuffleArray(imageUrls);

// Get the grid container
const gridContainer = document.getElementById('imageGrid');

// Loop through the image URLs
imageUrls.forEach(url => {
    // Create a new grid item
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    // Create a new image element
    const image = document.createElement('img');
    image.src = url;

    // Append the image to the grid item
    gridItem.appendChild(image);

    // Append the grid item to the grid container
    gridContainer.appendChild(gridItem);
});
