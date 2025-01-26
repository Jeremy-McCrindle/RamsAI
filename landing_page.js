// JavaScript file to add interactivity to the landing page

document.addEventListener('DOMContentLoaded', () => {
    // Select the Scan Food button
    const scanFoodButton = document.querySelector('.button');
  
    if (scanFoodButton) {
      // Add click event listener to the Scan Food button
      scanFoodButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
  
        // Navigate to the linked page
        const targetPage = scanFoodButton.closest('a')?.getAttribute('href');
        if (targetPage) {
          window.location.href = targetPage;
        } else {
          console.error('No target page found for Scan Food button.');
        }
      });
    } else {
      console.warn('Scan Food button not found.');
    }
  
    // Add hover effect for better feedback
    if (scanFoodButton) {
      scanFoodButton.addEventListener('mouseenter', () => {
        scanFoodButton.style.transform = 'scale(1.05)';
        scanFoodButton.style.transition = 'transform 0.2s ease';
      });
  
      scanFoodButton.addEventListener('mouseleave', () => {
        scanFoodButton.style.transform = 'scale(1)';
      });
    }
  
    // Add interactivity to any additional buttons or elements as needed
  });