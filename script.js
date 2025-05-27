// Make navigation active on click
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Donation button functionality
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Thank you for your donation! Redirecting to payment...");
        window.location.href = "donate.html";
    });
});

// Event card click functionality
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = "events.html";
    });
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Donation amount selection
    const amountBtns = document.querySelectorAll('.amount-btn');
    amountBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons in this group
            this.parentNode.querySelectorAll('.amount-btn').forEach(b => {
                b.classList.remove('active');
            });
            // Add active class to clicked button
            this.classList.add('active');
        });
    });

    // Donation form submission
    const donateBtns = document.querySelectorAll('.donate-btn');
    donateBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your donation! You will be redirected to our secure payment page.');
            // In a real implementation, this would redirect to payment processor
        });
    });

    // Event RSVP
    const rsvpBtns = document.querySelectorAll('.rsvp-btn');
    rsvpBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const eventTitle = this.closest('.event-details').querySelector('h3').textContent;
            alert(`Thank you for RSVPing to "${eventTitle}"! We'll send you confirmation details shortly.`);
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Event filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // In a real implementation, this would filter the events
        });
    });
});