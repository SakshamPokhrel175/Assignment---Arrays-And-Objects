const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'DOM Manipulation Practice - Heading Changed';

const textContentParagraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < textContentParagraphs.length; i++) {
    textContentParagraphs[i].style.color = 'blue';
}

const mainImage = document.querySelector('#main-image');
mainImage.src = 'https://via.placeholder.com/200';

const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = '#f0f0f0'; 

const containerParagraphs = document.querySelectorAll('.container p');
containerParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Updated paragraph inside container #${index + 1}`;
});
