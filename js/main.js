const btnDarkMore = document.querySelector(".dark-mode-btn");

// роверка темной темы в localStorage
if (localStorage.getItem('darmMode', 'dark') === 'dark') {
	btnDarkMore.classList.add("dark-mode-btn__active");
	document.body.classList.add("dark");
}

// Проверка темной темы на уровне системных настроек
// if (window.matchMedia && window.matchMedia("(prefer-color-scheme: dark)").matches ) {
// 	btnDarkMore.classList.add("dark-mode-btn__active");
// 	document.body.classList.add("dark");
// }


// Включение тёмной темы по кнопке
btnDarkMore.onclick = function () {
	btnDarkMore.classList.toggle("dark-mode-btn__active");
	const isDark = document.body.classList.toggle("dark");

	if (isDark) {
		localStorage.setItem('darmMode', 'dark')
	}
	else {
		localStorage.setItem('darmMode', 'light');
	}
}