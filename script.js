function volume_sphere() {
  // Get the radius and output elements
  const radiusInput = document.getElementById("radius");
  const volumeOutput = document.getElementById("volume");

  // Parse radius value
  const radius = parseFloat(radiusInput.value);

  // Validate input (must be numeric and non-negative)
  if (isNaN(radius) || radius < 0) {
    volumeOutput.value = "NaN";
    return;
  }

  // Calculate volume
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places
  volumeOutput.value = volume.toFixed(4);
}

// Prevent form reload and call the function on submit
window.onload = function () {
  document.getElementById("MyForm").onsubmit = function (event) {
    event.preventDefault(); // Stop page reload
    volume_sphere();        // Run the calculation
  };
};