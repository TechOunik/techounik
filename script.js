function cb(response) {
    const visitEl = document.getElementById('visits');
    if(visitEl) {
        visitEl.innerText = response.value;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        themeSelector.value = savedTheme;
    } else {
        themeSelector.value = 'christmas';
        htmlElement.setAttribute('data-theme', 'christmas');
    }

    themeSelector.addEventListener('change', function() {
        const selectedTheme = this.value;
        htmlElement.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('selectedTheme', selectedTheme);
    });
});

const christmasEmojis = ['❄️', '🎄', '🎅', '🎁', '✨', '☃️', '🔔', '💃', '🕺'];

document.addEventListener('click', function(e) {
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute('data-theme') !== 'christmas') return;

    const decoration = document.createElement('span');
    decoration.classList.add('click-decoration');
    decoration.innerText = christmasEmojis[Math.floor(Math.random() * christmasEmojis.length)];
    decoration.style.left = (e.pageX - 10) + 'px';
    decoration.style.top = (e.pageY - 10) + 'px';
    document.body.appendChild(decoration);
    
    setTimeout(() => { decoration.remove(); }, 1500);
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.onkeydown = function(e) {
    // Disable F12
    if (event.keyCode == 123) {
        return false;
    }
    // Disable Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { 
        return false;
    }
    // Disable Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { 
        return false;
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { 
        return false;
    }
}
