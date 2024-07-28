let txt = `CCRC's IT Club!!!`;
let i = 0;
let speed = 200;

export default function typeWriter() {
	if (i < txt.length) {
		if (txt.charAt(i) == '.') {
			document.getElementById('welcome-text').innerHTML += '<br>';
		} else {
			document.getElementById('welcome-text').innerHTML += txt.charAt(i);
		}
		i++;
		setTimeout(typeWriter, speed);
	} else {
		setTimeout(() => {
			i = 0;
			document.getElementById('welcome-text').innerHTML = '';
			typeWriter();
		}, speed * 10); // 1000ms delay before restarting
	}
}
