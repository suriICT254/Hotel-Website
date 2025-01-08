// Sticky Navigation Bar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Smooth Scrolling for Menu Links
const menuLinks = document.querySelectorAll('nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lightbox for Gallery
const galleryImages = document.querySelectorAll('.gallery-images img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
// Scroll Animation for Services
const serviceCards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight / 1.3;
    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerPoint) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        }
    });
});
// JavaScript for Room Details Modal
const roomCards = document.querySelectorAll('.room-card');
const modal = document.getElementById('room-modal');
const modalImg = document.querySelector('.modal-img');
const modalTitle = document.querySelector('.modal-title');
const modalDesc = document.querySelector('.modal-desc');
const modalFeatures = document.querySelector('.modal-features');
const closeBtn = document.querySelector('.close-btn');

// Room data
const roomDetails = {
    room1: {
        img: 'images/deluxe-room.jpg',
        title: 'Deluxe Room',
        desc: 'Elegant and spacious rooms with premium amenities for a relaxing stay.',
        features: ['King-sized bed', 'Free Wi-Fi', 'Flat-screen TV', 'Private Balcony']
    },
    room2: {
        img: 'images/suite.jpg',
        title: 'Luxury Suite',
        desc: 'Our suites offer a perfect blend of comfort and sophistication for a memorable experience.',
        features: ['Queen-sized bed', 'Jacuzzi', 'Living area', '24/7 Room Service']
    },
    room3: {
        img: 'images/family-room.jpg',
        title: 'Family Room',
        desc: 'Designed for families, our spacious rooms provide comfort and convenience for everyone.',
        features: ['Two double beds', 'Child-friendly amenities', 'Mini-fridge', 'Free breakfast']
    }
};

// Open Modal
roomCards.forEach(card => {
    card.addEventListener('click', () => {
        const roomId = card.getAttribute('data-id');
        const room = roomDetails[roomId];
        if (room) {
            modalImg.src = room.img;
            modalTitle.textContent = room.title;
            modalDesc.textContent = room.desc;
            modalFeatures.innerHTML = room.features.map(feature => `<li>${feature}</li>`).join('');
            modal.style.display = 'flex';
        }
    });
});

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
// Contact Form Validation
const contactForm = document.querySelector('.contact-form form');
const nameField = contactForm.querySelector('input[name="name"]');
const emailField = contactForm.querySelector('input[name="email"]');
const messageField = contactForm.querySelector('textarea[name="message"]');

contactForm.addEventListener('submit', (e) => {
    let hasError = false;

    // Name Validation
    if (nameField.value.trim() === '') {
        alert('Please enter your name.');
        hasError = true;
    }

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(emailField.value)) {
        alert('Please enter a valid email address.');
        hasError = true;
    }

    // Message Validation
    if (messageField.value.trim() === '') {
        alert('Please enter your message.');
        hasError = true;
    }

    if (hasError) {
        e.preventDefault(); // Prevent form submission if there’s an error
    }
});
// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Add click event listener to the menu toggle icon
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle the active class to show/hide the menu
});
