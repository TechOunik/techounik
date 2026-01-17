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
        themeSelector.value = 'cyber-blue';
        htmlElement.setAttribute('data-theme', 'cyber-blue');
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
    // Stop if we are not in Christmas mode
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
    if (event.keyCode == 123) { // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { 
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { 
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { 
        return false;
    }
}

if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00ff88" 
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": false,
            },
            "size": {
                "value": 3,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00ff88",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "window", 
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": false
    });
}

function toggleMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector("nav ul").classList.remove("active");
}));
