export default function toggleNav() {
	const nav = document.querySelector('nav');
	nav.classList.toggle('show');
}

document.querySelector('.menu').addEventListener('click', toggleNav);
