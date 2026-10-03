const left = document.querySelector(".envelope-left");
const right = document.querySelector(".envelope-right");
const seal = document.querySelector(".wax-seal");
const music = document.getElementById("bg-music");
const saveDateScreen = document.querySelector(".save-date-screen");

const envelopeTextGroup = document.querySelector(".envelope-text-group");
const savethedateTextGroup = document.querySelector(".savethedate-text-group");

// NEW: Select the envelope container for the dimming effect
const envelope = document.querySelector(".envelope"); 

let animationStarted = false;

const startExperience = () => {
    if (animationStarted) return;
    animationStarted = true;

    // =================================
    // 1. START THE MUSIC
    // =================================
    if (music) {
        music.volume = 0.4; 
        music.play().catch(() => {});
    }

    // =================================
    // 2. REMOVE WAX SEAL (Starts at 1s)
    // =================================
    setTimeout(() => {
        seal.classList.add("seal-open");
    }, 1000);

    // =================================
    // 3. FADE OUT ENVELOPE TEXT (Starts at 2s)
    // =================================
    setTimeout(() => {
        if (envelopeTextGroup) {
            envelopeTextGroup.classList.add("fade-out");
        }
    }, 2000);

    // =================================
    // 4. OPEN DOORS, DIM ENVELOPE & FADE IN BACKGROUND (Starts at 5s)
    // =================================
    setTimeout(() => {
        // Fade in the background image
        saveDateScreen.classList.add("visible"); 
        
        // NEW: Trigger the slow dimming effect on the envelope doors
        if (envelope) {
            envelope.classList.add("darken");
        }
        
        // Swing the doors open
        left.classList.add("open-left");
        right.classList.add("open-right");
    }, 5000);

    // =================================
    // 5. FADE IN SAVE THE DATE TEXT (Starts at 7.9s)
    // =================================
    setTimeout(() => {
        if (savethedateTextGroup) {
            savethedateTextGroup.classList.add("fade-in"); 
        }
    }, 7900);
};

document.addEventListener('click', startExperience);
document.addEventListener('touchstart', startExperience, { passive: true });
