// Wait for the DOM (HTML) to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
  // Fetch the content of the 'paragraph.txt' file using the Fetch API
  fetch('paragraph.txt')
    // When the fetch is successful, convert the response to text
    .then(response => response.text())
    // Once the text content is available, call the displaySpecificPart function
    .then(paragraph => displaySpecificPart(paragraph))
    // If any error occurs during the fetch, log it to the console
    .catch(error => console.error('Error loading the file:', error));
});

// Function to display a specific part of the paragraph
function displaySpecificPart(paragraph) {
  // Extract the specific part of the paragraph using the extractSpecificPart function
  const specificPart = extractSpecificPart(paragraph);

  // Display the specific part in the 'paragraphDisplay' div
  var paragraphDisplay = document.getElementById('paragraphDisplay');
  paragraphDisplay.textContent = specificPart;
}

// Function to extract a specific part of the paragraph (customize this function based on your needs)
function extractSpecificPart(paragraph) {
  // Example: Extract the first 100 characters of the paragraph
  return paragraph.slice(0, 100);
}
