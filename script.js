document.addEventListener('DOMContentLoaded', function () {
  // Fetch the content of the 'paragraph.txt' file
  fetch('paragraph.txt')
      .then(response => response.text())
      .then(paragraph => displayParagraph(paragraph))
      .catch(error => console.error('Error loading the file:', error));
});

// Function to display the retrieved paragraph in the HTML page
function displayParagraph(paragraph) {
  // Get the HTML element with the id 'paragraphDisplay'
  var paragraphDisplay = document.getElementById('paragraphDisplay');
  
  // Set the text content of the element to the retrieved paragraph
  paragraphDisplay.textContent = paragraph;
}
