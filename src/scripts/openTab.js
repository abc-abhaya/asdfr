export default function openTab(tabId) {
	const tabContent = document.querySelectorAll('section.tab');
	for (let i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = 'none';
	}

	const newTab = document.getElementById(tabId);
	newTab.style.display = 'block';
	console.log(tabId, ` is opened`);
}
