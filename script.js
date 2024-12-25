function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById('radius').value;
	const radius = parseFloat(radiusInput);

	if(isNaN(radius) || radius < 0){
		document.getElementById('radius').value=NaN;
		return;
	}
	const volume = (4/3)*Math.Pi * Math.pow(radius,3);
	document.getElementById('volume').value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
