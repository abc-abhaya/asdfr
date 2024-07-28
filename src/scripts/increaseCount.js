const likes = document.querySelector('.likes .stats>.effect-txt');
const followers = document.querySelector('.followers .stats>.effect-txt');
const shares = document.querySelector('.shares .stats>.effect-txt');
const speed = 20;

export default function increaseCount() {
	updateCount(likes, 6800);
	updateCount(followers, 6500);
	updateCount(shares, 3000);
}

function updateCount(element, lim) {
	let count = Number(element.textContent);
	if (count < lim) {
		count += 10;
		element.textContent = count;
		setTimeout(() => {
			updateCount(element, lim);
		}, speed);
	}
}
