// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Header Join Button
    const joinBtn = document.getElementById('joinBtn');
    joinBtn.addEventListener('click', function() {
        alert('🎉 Thank you for joining FitLife! Welcome to your fitness journey!');
    });
    
    // Hero Section Buttons
    const trialBtn = document.getElementById('trialBtn');
    const viewPlansBtn = document.getElementById('viewPlansBtn');
    
    trialBtn.addEventListener('click', function() {
        alert('🎊 Great choice! Your 7-day free trial is starting. Get ready to transform!');
    });
    
    viewPlansBtn.addEventListener('click', function() {
        // Smooth scroll to plans section
        document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Pricing Plan Buttons
    const planButtons = document.querySelectorAll('.btn-plan');
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planName = this.getAttribute('data-plan');
            alert(`✅ ${planName} Plan Selected! You're one step closer to your fitness goals!`);
        });
    });
    
    // App Download Buttons
    const googlePlayBtn = document.getElementById('googlePlayBtn');
    const appStoreBtn = document.getElementById('appStoreBtn');
    
    googlePlayBtn.addEventListener('click', function() {
        alert('📱 App download coming soon on Google Play Store! Stay tuned!');
    });
    
    appStoreBtn.addEventListener('click', function() {
        alert('📱 App download coming soon on App Store! Stay tuned!');
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });
    
    // Mobile Menu Toggle (basic implementation)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.right = '20px';
            navMenu.style.backgroundColor = 'white';
            navMenu.style.padding = '20px';
            navMenu.style.borderRadius = '10px';
            navMenu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        }
    });
    
    // Smooth scroll for all navigation links
    const navLinks = document.querySelectorAll('.nav-menu a, .footer-column a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    // Close mobile menu if open
                    if (window.innerWidth <= 768) {
                        navMenu.style.display = 'none';
                    }
                }
            }
        });
    });
    
    // Add animation on scroll (simple version)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.pricing-card, .benefit-card, .trainer-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
    
    // Highlight "Most Popular" plan on page load
    setTimeout(function() {
        const popularCard = document.querySelector('.pricing-card.popular');
        if (popularCard) {
            popularCard.style.animation = 'pulse 0.5s ease-in-out';
        }
    }, 500);
    
    // Add pulse animation for popular card
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1.05); }
            50% { transform: scale(1.08); }
        }
    `;
    document.head.appendChild(style);
    
    // Console log for developers
    console.log('🏋️ FitLife Website Loaded Successfully!');
    console.log('💪 All interactive features are working!');
});