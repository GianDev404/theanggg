const App = {
    init: function() {
        this.bindEvents();
        console.log('App initialized');
    },
    
    bindEvents: function() {
    },
    
    preloadResources: function() {
        this.preloadImage('./download.gif');
    },
    
    preloadImage: function(url) {
        const img = new Image();
        img.src = url;
    },
    
    cleanup: function() {
        clearTimeout(this.confettiTimeout);
        cancelAnimationFrame(this.animationFrame);
    }
};

document.addEventListener('DOMContentLoaded', App.init.bind(App));

window.addEventListener('beforeunload', App.cleanup.bind(App));

function toggleLetter() {
    try {
        const letter = document.getElementById('letter');
        const btn = document.getElementById('toggleBtn');
        const flap = document.getElementById('flap');
        
        if (letter.classList.contains('visible')) {
            letter.classList.remove('visible');
            btn.textContent = 'Open';
            flap.style.transform = 'rotateX(0deg)';
        } else {
            letter.classList.add('visible');
            btn.textContent = 'Close';
            flap.style.transform = 'rotateX(-180deg)';

            createConfetti();
        }
    } catch (error) {
        console.error('Error in toggleLetter:', error);
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '100%';
    confetti.style.height = '100%';
    confetti.style.top = '0';
    confetti.style.left = '0';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    document.body.appendChild(confetti);

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 20 + 10}px`;
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = '-20px';
            heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            confetti.appendChild(heart);

            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 5000);
        }, i * 100);
    }

    setTimeout(() => {
        if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
        }
    }, 5000);
}

function trackChoice(choice) {
    console.log('User choice:', choice);
}

function myFunction() {
    window.alert("Note that everything you see here is made by Jiyan, and if you see this message CONGRATS, what a lucky girl you are!");
}

function preloadYesPage() {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = 'yes.html';
    link.as = 'document';
    document.head.appendChild(link);
}

if (document.readyState === 'interactive' || document.readyState === 'complete') {
    preloadYesPage();
} else {
    document.addEventListener('DOMContentLoaded', preloadYesPage);
}