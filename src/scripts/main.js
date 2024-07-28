import it_logo from '../assets/it-club-logo.png';
import setFavicon from './favicon';
import toggleNav from './toggleNav';
import openTab from './openTab';
setFavicon(it_logo, 'png');

const tabBtns = document.querySelectorAll('button.switch-tab');
tabBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		openTab(btn.getAttribute('data-tab'));
	});
});

window.onload = () => {
	document.querySelector('.menu').addEventListener('click', toggleNav);
    openTab('home');
};
