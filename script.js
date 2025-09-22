document.addEventListener('DOMContentLoaded', () => {

  const sections = document.querySelectorAll('.fade-in-section');

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.15
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  const navLinks = document.querySelectorAll('.nav-link');
  const allSections = document.querySelectorAll('section[id]');

  const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  });

  allSections.forEach(section => {
    highlightObserver.observe(section);
  });

  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields before sending.');
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
  });

});