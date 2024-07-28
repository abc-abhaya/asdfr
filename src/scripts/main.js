import it_logo from '../assets/it-club-logo.png';
import setFavicon from './favicon';
import typeWriter from './welcomeEffect';
import openTab from './openTab';
import increaseCount from './increaseCount';
import toggleNav from './toggleNav';
setFavicon(it_logo, 'png');

const tabBtns = document.querySelectorAll('button.switch-tab');
tabBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		openTab(btn.getAttribute('data-tab'));
	});
});

window.onload = () => {
	document.querySelector('.menu').addEventListener('click', toggleNav);
	typeWriter();
	openTab('home');
	increaseCount();
};
