document.addEventListener('DOMContentLoaded', function() {
    // Get all car containers
    const carContainers = document.querySelectorAll('.car-container');
    const totalCars = carContainers.length;
    let currentCarIndex = 0;
  
    // Function to show the current car and hide others
    function showCurrentCar() {
      carContainers.forEach((carContainer, index) => {
        if (index === currentCarIndex) {
          carContainer.style.display = 'block';
        } else {
          carContainer.style.display = 'none';
        }
      });
    }
  
    // Function to navigate to the next car
    function nextCar() {
      currentCarIndex = (currentCarIndex + 1) % totalCars;
      showCurrentCar();
    }
  
    // Function to navigate to the previous car
    function prevCar() {
      currentCarIndex = (currentCarIndex - 1 + totalCars) % totalCars;
      showCurrentCar();
    }
  
    // Add event listeners for navigation buttons
    const nextButton = document.getElementById('next-btn');
    const prevButton = document.getElementById('prev-btn');
  
    nextButton.addEventListener('click', nextCar);
    prevButton.addEventListener('click', prevCar);
  
    // Show the initial car
    showCurrentCar();
  });
  