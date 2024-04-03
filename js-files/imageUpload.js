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

const gridContainer = document.getElementById('imageGrid');

imageUrls.forEach(url => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const image = document.createElement('img');
    image.src = url;

    gridItem.appendChild(image);
    gridContainer.appendChild(gridItem);
});