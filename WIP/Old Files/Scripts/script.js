function tabScript(sectionName) {
	const sections = document.getElementsByClassName("tab-section");
	const navButtons = document.getElementsByClassName("tab-button");
	for (let i = 0; i < sections.length; i++) {
		sections[i].classList.remove("active");
	}
	for (let i = 0; i < navButtons.length; i++) {
		navButtons[i].classList.remove("active");
	}
	document.getElementById(`${sectionName}`).classList.add("active");  
	document.getElementById(`${sectionName}-button`).classList.add("active"); 
}