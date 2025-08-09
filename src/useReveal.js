import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    // Set urutan muncul (stagger) dari atas ke bawah
    els.forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 150}ms`; // Animasi lebih lambat
      el.classList.add(
        'opacity-0','-translate-y-4', // Animasi awal - transparan dan bawah
        'transition-all','duration-700','ease-out',
        'will-change-transform'
      );
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0','-translate-y-4');
          entry.target.classList.add('opacity-100','translate-y-0');
          io.unobserve(entry.target); // animasi sekali saja
        }
      });
    }, { threshold: 0.12 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
