function cb(response) {
    const visitEl = document.getElementById('visits');
    if(visitEl) {
       
       visitEl.innerText = response.value || response.count || "Active";
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
       
        themeSelector.value = 'easter-spring';
        htmlElement.setAttribute('data-theme', 'easter-spring');
    }

    themeSelector.addEventListener('change', function() {
        const selectedTheme = this.value;
        htmlElement.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('selectedTheme', selectedTheme);
        updateParticleColor(selectedTheme);
    });

    rotateKnowledgeTip();
});

const christmasEmojis = ['❄️', '🎄', '🎅', '🎁', '✨', '☃️', '🔔'];
const easterEmojis = ['🥚', '🐣', '🐥', '🌷', '🌿', '🌱', '🦋', '🍬'];

document.addEventListener('click', function(e) {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    let emojiList = [];
    if (currentTheme === 'christmas') emojiList = christmasEmojis;
    else if (currentTheme === 'easter-spring') emojiList = easterEmojis;
    else return; 

    const decoration = document.createElement('span');
    decoration.classList.add('click-decoration');
    decoration.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];
    decoration.style.left = (e.pageX - 10) + 'px';
    decoration.style.top = (e.pageY - 10) + 'px';
    decoration.style.position = 'absolute';
    decoration.style.zIndex = '9999';
    decoration.style.pointerEvents = 'none';
    
    document.body.appendChild(decoration);
    
    setTimeout(() => { decoration.remove(); }, 1500);
});

const techMessages = [
    "Fact: 95% of cybersecurity breaches are caused by human error. Stay sharp!",
    "Career Tip: Your GitHub is your digital resume. Commit code daily!",
    "Fact: The first computer virus was created in 1971. It was called 'Creeper'.",
    "Mindset: Resilience is the difference between a student and a pro. Keep building!",
    "Pro-Tip: Use a password manager. 123456 is not a security plan!",
    "Fact: White hat hackers are the immune system of the internet.",
    "Advice: Don't just learn tools; learn the protocols behind them."
];

let currentMessageIndex = 0;

function rotateKnowledgeTip() {
    const tipEl = document.getElementById('knowledgeTip');
    if(!tipEl) return;

    // Change message when clicked
    tipEl.style.cursor = "pointer";
    tipEl.addEventListener('click', () => {
        currentMessageIndex = (currentMessageIndex + 1) % techMessages.length;
        tipEl.style.opacity = 0;
        setTimeout(() => {
            tipEl.innerText = techMessages[currentMessageIndex];
            tipEl.style.opacity = 1;
        }, 300);
    });
}

document.addEventListener('contextmenu', e => e.preventDefault());

document.onkeydown = function(e) {
    if (e.keyCode == 123 || 
       (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || 
       (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
};

function updateParticleColor(theme) {
    let color = "#00ff88"; 
    if (theme === 'easter-spring') color = "#165b33"; 
    if (theme === 'christmas') color = "#d42426"; 
    
    if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.particles.color.value = color;
        window.pJSDom[0].pJS.particles.line_linked.color = color;
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}

if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 40 },
            "color": { "value": "#165b33" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#165b33", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "detect_on": "window",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
        }
    });
}

function toggleMenu() {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector("nav ul").classList.toggle("active");
}

console.log('%c🕵️ I SEE YOU LOOKING AT MY CODE...', 'color: #165b33; background: #fdf0d7; font-size: 20px; padding: 10px; border: 3px solid #165b33');
console.log('%cHappy Easter! 🥚 I am a Blue Teamer. I see you first. 😉', 'color: #4a4a4a; font-size: 14px;');


document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".hamburger").classList.remove("active");
        document.querySelector("nav ul").classList.remove("active");
    });
});
