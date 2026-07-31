const data = {
    aboutme: `
    <h2>ABOUT ME</h2>
        <p class="text-base sm:text-lg text-gray-400 font-light leading-relaxed max-w-2xl font-sans">
            I am Aljomar O. Gonzales, the programmer behind the <strong class="text-white font-medium">ALGORITHM</strong> matrix. As an IT Specialist and Frontend Engineer, I architect high-performance web solutions focused on responsive UI/UX, scalable client-side logic, and seamless database integration. I specialize in building data-driven applications that bridge complex backend structures with fluid, hardware-accelerated user interfaces.
        </p>
    `,
    profile: `
        <h2>ALJOMAR O. GONZALES</h2>
        <p>Age: 21 | Born: Nov 17, 2004</p>
        <p>Location: Maasin City, Southern Leyte, PH</p>
        <hr>
        <p><em>"Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present. - Master Oogway"</em></p>
        <h3>COLLEGE JOURNEY</h3>
        <p><strong>Cebu Institute of Technology - University (2023-2024|2024-2025)</strong><br>CHED Center of Excellence in IT Education.</p>
        <p><strong>College of Maasin (2024-2025|2025-2026|2026-2027)</strong><br>Private institution in Tunga-Tunga, Maasin, Southern Leyte.</p>
    `,
    quests: `
        <h2>COMPLETED QUESTS</h2>
        ${[
            { title: "Dairy Box Website", desc: "Interactive storefront for Pinoy MPC", url: "https://pinoycoop.github.io/DairyBox/" },
            { title: "TCM Queuing System", desc: "Cloud-based queue management for institutions", url: "https://valhalla33805.github.io/FinanceTest/" },
            { title: "3D Local Visual Map", desc: "Hardware-accelerated spatial rendering", url: "https://valhalla33805.github.io/PugalingFL/" },
            { title: "SmashHub: Arena Manager", desc: "Badminton court queueing and analytics hub", url: "https://valhalla33805.github.io/Queueing/" },
            { title: "Ethelora", desc: "Healthy Cafe", url: "https://valhalla33805.github.io/Ethelora-Web/" }
        ].map(q => `
            <div style="background:rgba(0,0,0,0.2); padding:15px; margin-bottom:15px; border-left:4px solid #d4af37;">
                <h3 style="margin:0; color:#d4af37;">${q.title}</h3>
                <p style="font-size:0.9rem; margin:5px 0;">${q.desc}</p>
                <a href="${q.url}" target="_blank" style="color:#a89154; text-decoration:none; font-weight:bold;">>> View Project</a>
            </div>
        `).join('')}
    `,
    hobbies: `
        <h2>GALLERY OF CONQUESTS</h2>
        <p>Select an archive to view the spoils of war.</p>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:20px;">
            <button onclick="openAlbum('TOURNAMENTS')" class="submit-btn">TOURNAMENTS</button>
            <button onclick="openAlbum('CESAFI')" class="submit-btn">CESAFI</button>
            <button onclick="openAlbum('CITU')" class="submit-btn">CIT-U</button>
            <button onclick="openAlbum('PRISAA')" class="submit-btn">PRISAA</button>
        </div>
        <div id="album-display" style="border-top:1px solid #d4af37; padding-top:20px;">
            <p>Click a category above to reveal your achievements.</p>
        </div>
    `,
    contact: `
        <div id="contact-content">
            <h2>[ARCANE COMMUNIQUÉ]</h2>
            <form id="ravenForm" action="https://formspree.io/f/xbdvrzew" method="POST">
                <label>Seeker Identity (Name):</label>
                <input type="text" name="name" required>
                <label>Arcane Address (Email):</label>
                <input type="email" name="email" required>
                <textarea name="message" placeholder="Type your scroll here..." rows="3" required></textarea>
                <button type="submit" class="submit-btn">SEND RAVEN TO THE WIZARD</button>
            </form>
        </div>
    `
};

const albumData = {
    'TOURNAMENTS': [
        { src: 'pics/award.png', desc: 'Maasin City Open Tournament 2023' },
        { src: 'pics/award2.png', desc: 'Ormoc City Protech Tournament' },
        { src: 'pics/award3.png', desc: 'Hinunangan Tournament 2026' },
        { src: 'pics/award4.png', desc: 'Hilongos Open Tournament 2025' },
        { src: 'pics/award5.png', desc: 'Sogod Open Tournament 2024' },
        { src: 'pics/mixed.jpg', desc: 'Maasin City Open Tournament 2024' },
        { src: 'pics/cba.jpg', desc: 'Cebu Badminton Academy Open Tournament 2026' }
    ],
    'CESAFI': [
        { src: 'pics/cesafi.png', desc: 'The heat of the CESAFI competition' },
        { src: 'pics/cesafi2.png', desc: 'CESAFI Competition' }
    ],
    'CITU': [
        { src: 'pics/citu.png', desc: 'CIT-U Badminton Team CESAFI 2024' },
        { src: 'pics/citu2.png', desc: 'Team spirit at the CIT-U grounds' },
        { src: 'pics/citu3.png', desc: 'CIT-U Badminton Team CESAFI 2025' }
    ],
    'PRISAA': [
        { src: 'pics/prisaa.jpg', desc: 'PRISAA CLUSTER MEET 2026' }
    ]
};

function openAlbum(category) {
    const display = document.getElementById('album-display');
    const photos = albumData[category] || [];
    
    display.innerHTML = `<h3>${category} ARCHIVE</h3>` + photos.map(p => `
        <div style="margin-bottom:20px; background:rgba(0,0,0,0.4); padding:10px; border-left:3px solid #d4af37;">
            <a href="${p.src}" target="_blank">
                <img src="${p.src}" style="width:100%; max-height:200px; object-fit:contain; cursor:pointer;">
            </a>
            <p style="font-size:0.9rem; margin-top:10px; color:#e0d8c3;">${p.desc}</p>
        </div>
    `).join('');
}

function enterForest() {
    const landing = document.getElementById('landing-screen');
    landing.classList.add('hide-landing');
    showSection('profile');

    const audio = document.getElementById('bg-music');
    audio.play().catch(e => console.log("Autoplay prevented by browser."));
    
    document.body.style.overflow = 'auto';
}

// --- SECTION SWITCHER WITH PAGE-FLIP ANIMATION ---
function showSection(section) {
    const displayArea = document.getElementById('display-area');
    
    // Trigger page-flip transition effect
    displayArea.classList.remove('page-fade');
    void displayArea.offsetWidth; // Force reflow to restart animation
    displayArea.classList.add('page-fade');

    displayArea.innerHTML = data[section];

    if (section === 'contact') {
        displayArea.classList.add('no-scroll');
    } else {
        displayArea.classList.remove('no-scroll');
    }
}

// --- MOUSE SPARKLE TRAIL EFFECT ---
let lastSparkleTime = 0;

document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    // Throttle sparkle creation for high performance
    if (now - lastSparkleTime > 40) { 
        lastSparkleTime = now;
        
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${e.clientX}px`;
        sparkle.style.top = `${e.clientY}px`;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 600);
    }
});

async function sendRaven(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    document.getElementById('contact-content').innerHTML = `
        <h2 style="color:#d4af37;">DISPATCHING RAVEN...</h2>
    `;

    try {
        const response = await fetch("https://formspree.io/f/xbdvrzew", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            document.getElementById('contact-content').innerHTML = `
                <div style="text-align:center; padding-top:50px;">
                    <div style="font-size:50px; animation: flyAway 2s forwards;">🐦‍⬛✉️</div>
                    <h2 style="color:#d4af37;">RAVEN DISPATCHED!</h2>
                    <p style="color:#e0d8c3; margin-bottom:20px;">The Wizard has received your message.</p>
                    <button id="back-to-contact" class="submit-btn">GO BACK TO ARCANE COMMUNIQUÉ</button>
                </div>
            `;
            document.getElementById('back-to-contact').addEventListener('click', () => showSection('contact'));
        } else {
            throw new Error("Could not send");
        }
    } catch (error) {
        document.getElementById('contact-content').innerHTML = `
            <h2 style="color:red;">THE RAVEN GOT LOST IN A STORM.</h2>
            <button onclick="location.reload()" class="submit-btn">TRY AGAIN</button>
        `;
    }
}

function createLeaves() {
    for (let i = 0; i < 20; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.animationDuration = (Math.random() * 5 + 5) + 's';
        leaf.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(leaf);
    }
}
createLeaves();

function toggleMute() {
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('mute-btn');
    
    if (audio.muted) {
        audio.muted = false;
        btn.innerHTML = '🔊';
    } else {
        audio.muted = true;
        btn.innerHTML = '🔇';
    }
}

function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    const particles = document.querySelectorAll('.leaf, .firefly');

    body.classList.toggle('night-mode');
    
    particles.forEach(el => {
        el.style.opacity = '0';
    });

    setTimeout(() => {
        if (body.classList.contains('night-mode')) {
            themeBtn.innerHTML = '☀️';
            particles.forEach(el => {
                el.className = 'firefly';
                el.style.setProperty('--rand-x', (Math.random() - 0.5) * 5);
                el.style.setProperty('--rand-y', (Math.random() - 0.5) * 5);
                el.style.opacity = '0.8';
            });
        } else {
            themeBtn.innerHTML = '🌙';
            particles.forEach(el => {
                el.className = 'leaf';
                el.style.opacity = '0.6';
            });
        }
    }, 500);
}

function greetWizard() { 
    alert("🦉: The Wizard is currently brewing coffee. Try back later!"); 
}

let wizardState = 0;

function changeWizard() {
    const img = document.getElementById('wizard-img');
    
    if (img.classList.contains('swirling')) return;

    img.classList.add('swirling');

    setTimeout(() => {
        wizardState = (wizardState + 1) % 3; 
        
        if (wizardState === 0) {
            img.src = 'pics/mc.png';
        } else if (wizardState === 1) {
            img.src = 'pics/fullbody.png';
        } else {
            img.src = 'pics/MeWizard.png';
        }
    }, 300);

    setTimeout(() => {
        img.classList.remove('swirling');
    }, 600);
}

// Event Listeners for clean external JS execution
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('theme-btn').addEventListener('click', toggleTheme);
    document.getElementById('mute-btn').addEventListener('click', toggleMute);
    document.getElementById('enter-btn').addEventListener('click', enterForest);
    document.getElementById('wizard-container').addEventListener('click', changeWizard);
    document.getElementById('familiar').addEventListener('click', greetWizard);
    document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen); // <-- Add this line
    document.getElementById('enter-btn').addEventListener('click', enterForest);

    document.querySelectorAll('.nav-bar button').forEach(button => {
        button.addEventListener('click', (e) => {
            const section = e.target.getAttribute('data-section');
            showSection(section);
        });
    });

    document.addEventListener('submit', (e) => {
        if (e.target && e.target.id === 'ravenForm') {
            sendRaven(e);
        }
    });
});
function toggleFullscreen() {
    const journal = document.querySelector('.journal');
    const btn = document.getElementById('fullscreen-btn');
    
    journal.classList.toggle('maximized');
    
    if (journal.classList.contains('maximized')) {
        btn.innerHTML = '🗗'; 
        btn.title = "Restore Original Size";
    } else {
        btn.innerHTML = '🗖'; 
        btn.title = "Toggle Fullscreen";
    }
}