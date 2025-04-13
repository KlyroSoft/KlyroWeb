'use client';

import { useEffect } from 'react';

export default function MobileNavClient() {
  useEffect(() => {
    // Mobile navigation functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const overlay = document.getElementById('overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    function openMobileNav() {
      mobileNav?.classList.add('active');
      overlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
      mobileNav?.classList.remove('active');
      overlay?.classList.remove('active');
      document.body.style.overflow = '';
    }

    mobileMenuBtn?.addEventListener('click', openMobileNav);
    mobileNavClose?.addEventListener('click', closeMobileNav);
    overlay?.addEventListener('click', closeMobileNav);

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });

    // Close mobile nav when window resizes beyond mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileNav();
      }
    });

    // Cleanup
    return () => {
      mobileMenuBtn?.removeEventListener('click', openMobileNav);
      mobileNavClose?.removeEventListener('click', closeMobileNav);
      overlay?.removeEventListener('click', closeMobileNav);
      mobileNavLinks.forEach(link => {
        link.removeEventListener('click', closeMobileNav);
      });
    };
  }, []);

  return null; // This component only handles JS behavior
}
