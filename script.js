

window.addEventListener("load", () => {

document.querySelector(".loader").classList.add("loader--hidden");

});

const popup = document.getElementById('popupContainer');

popup.style.display = 'none';

function showPopup(){
	
	popup.style.display = 'flex';
	
}

function closePopup(){
	
	popup.style.display = 'none';
	
}

