const tabsContainer = document.querySelector('.tabs-container');
const tabsList = document.querySelector('ul');
const tabButtons = document.querySelectorAll('a');
const tabPanels = document.querySelectorAll('.tab');

tabButtons.forEach((tab, index) => {
	if (index === 0) {
		// Something
	} else {
		tabPanels[index].setAttribute('hidden', '');
	}
});

tabsContainer.addEventListener('click', (e) => {
	const clickedTab = e.target.closest('li');
	if (!clickedTab) return;
	e.preventDefault();

	const activePanelId = clickedTab.getAttribute('href');
	const activePanel = tabsContainer.querySelector(`.${activePanelId}`);

	tabPanels.forEach((panel) => {
		panel.setAttribute('hidden', true);
	});
	activePanel.removeAttribute('hidden');
});
