const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Find the span element with the ID "currentyear"
  const yearSpan = document.getElementById('currentyear');

  // Update the content of the span element with the current year
  yearSpan.textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", function () {
    // Last modified information
    const lastModified = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
  });
  