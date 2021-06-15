var upButton = document.getElementById('upBtn'),
downButton = document.getElementById('downBtn'),
myCircle = document.getElementById('circle'),
rotateValue = myCircle.style.transform,
rotateSum;
upButton.onclick = function () {
	rotateSum = rotateValue + 'rotate(-90deg)';
	myCircle.style.transform = rotateSum;
	rotateValue = rotateSum;
}
downButton.onclick = function () {
	rotateSum = rotateValue + 'rotate(90deg)';
	myCircle.style.transform = rotateSum;
	rotateValue = rotateSum;
}