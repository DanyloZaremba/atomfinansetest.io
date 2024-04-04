const tabs = document.querySelectorAll('.tabs li');
const tabContent = document.querySelector('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    const activeTab = document.querySelector('.tab-pane.active');
    const newActiveTab = document.getElementById(tabId);

    activeTab.classList.remove('active');
    newActiveTab.classList.add('active');

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});