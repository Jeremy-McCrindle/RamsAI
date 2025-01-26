// JavaScript file to add interactivity to the landing page

document.addEventListener('DOMContentLoaded', () => {
    const scanFoodButton = document.querySelector('.button');
    const targetPage = 'main_page.html';
  
    if (scanFoodButton) {
      scanFoodButton.addEventListener('click', () => {
        if (targetPage) {
          window.location.href = targetPage;
        } else {
          console.error('No target page found for Scan Food button.');
        }
      });
  
      // Add hover effect for better feedback
      scanFoodButton.addEventListener('mouseenter', () => {
        scanFoodButton.style.transform = 'scale(1.05)';
        scanFoodButton.style.transition = 'transform 0.2s ease';
      });
  
      scanFoodButton.addEventListener('mouseleave', () => {
        scanFoodButton.style.transform = 'scale(1)';
      });
    } else {
      console.warn('Scan Food button not found.');
    }
  
    // Add interactivity to any additional buttons or elements as needed
  });