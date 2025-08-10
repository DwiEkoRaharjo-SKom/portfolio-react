import React from 'react';
import useReveal from './useReveal';

const Portfolio = () => {
  useReveal();
  return (
    <div className="container mx-auto p-8 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 text-gray-800">
      <section className="reveal reveal-shadow-bottom reveal-shadow-right reveal reveal-shadow-bottom reveal-shadow-right reveal bg-white shadow-lg rounded-lg p-8 mb-8">
        <img src={import.meta.env.BASE_URL + '/Pas Foto Dwi 3X4.jpg'} alt="Dwi Eko Raharjo" className="w-32 h-32 rounded-full mb-6" />
        <h1 className="text-3xl text-blue-800 font-bold">Dwi Eko Raharjo</h1>
        <h3 className="text-xl text-blue-600">Frontend ReactJS Developer | Web Designer | Open Source Contributor</h3>
        <h3 className="text-lg text-blue-600">Remote Frontend ReactJS Developer (Entry - Middle Level)</h3>
      </section>

      <section className="reveal reveal-shadow-bottom reveal-shadow-right reveal reveal-shadow-bottom reveal-shadow-right reveal bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl text-blue-800">📄 Profil Singkat</h2>
        <p>Saya adalah seorang Frontend Developer dengan spesialisasi ReactJS, aktif dalam proyek pengembangan aplikasi modern, kolaborasi AI 🤖, dan kontribusi open source 🌐. Siap bekerja remote secara global dengan semangat belajar 📚 dan keterampilan kolaboratif tinggi 🤝.</p>
      </section>

      <section className="reveal reveal-shadow-bottom reveal-shadow-right reveal reveal-shadow-bottom reveal-shadow-right reveal bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl text-blue-800">🛠️ Technical Skills</h2>
        <ul className="list-disc pl-6 reveal">
          <li class="reveal">⚛️ ReactJS, Vite</li>
          <li class="reveal">🎨 Tailwind CSS, Custom CSS</li>
          <li class="reveal">🗂️ Context API, Zustand, Routing</li>
          <li class="reveal">🔐 Firebase Authentication</li>
          <li class="reveal">🧠 AI Collaboration Tools:
            <ul className="list-disc pl-6 reveal">
              <li class="reveal">💬 ChatGPT (Prompt Engineering for Dev & Content)</li>
              <li class="reveal">🤖 GitHub Copilot</li>
              <li class="reveal">📝 AI-based UI Copywriting</li>
              <li class="reveal">🧹 AI-enhanced Refactoring & Code Reviews</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="reveal reveal-shadow-bottom reveal-shadow-right reveal reveal-shadow-bottom reveal-shadow-right reveal bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl text-blue-800">🧰 Remote Tools & Kolaborasi</h2>
        <p>🛠️ Jira, Loom, Google Meet, Git & GitHub, Visual Studio Code, Chrome DevTools</p>
      </section>

      <section className="reveal reveal-shadow-bottom reveal-shadow-right reveal reveal-shadow-bottom reveal-shadow-right reveal bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl text-blue-800">🚀 Proyek Unggulan</h2>
        <h3 className="text-xl text-blue-800">1. RWID App (React + Vite)</h3>
        <p>RWID App – Remote Worker Indonesia Digital Platform 🧑‍💼</p>
        <p>🔗 Live Demo: <a href="https://dwiekoraharjo-skom.github.io/my-rwid-app/" className="text-blue-600">Link Demo</a></p>
        <p>📁 Repo: <a href="https://github.com/DwiEkoRaharjo-SKom/my-rwid-app" className="text-blue-600">Link Repo</a></p>

        <h3 className="text-xl text-blue-800">2. Todo App (React + Vite)</h3>
        <p>📝 Aplikasi todo dengan dukungan localStorage, UI smooth, dan layout responsif.</p>
        <p>🔗 Live Demo: <a href="https://dwiekoraharjo-skom.github.io/todo-react-vite" className="text-blue-600">Link Demo</a></p>
        <p>📁 Repo: <a href="https://github.com/DwiEkoRaharjo-SKom/todo-react-vite" className="text-blue-600">Link Repo</a></p>

        <h3 className="text-xl text-blue-800">3. Portfolio Website (React + Tailwind)</h3>
        <p>🌐 Portofolio online dengan animasi ✨ dan tampilan elegan 🎨.</p>
        <p>🔗 Live Demo: <a href="https://dwiekoraharjo-skom.github.io/portfolio-react" className="text-blue-600">Link Demo</a></p>
        <p>📁 Repo: <a href="https://github.com/DwiEkoRaharjo-SKom/portfolio-react" className="text-blue-600">Link Repo</a></p>

        <h3 className="text-xl text-blue-800">4. DevConnect</h3>
        <p>🌟 Modern Developer Portfolio Hub built with React, Vite, and Tailwind CSS.</p>
        <p>🔗 Live Demo: <a href="https://dwiekoraharjo-skom.github.io/devconnect" className="text-blue-600">Link Demo</a></p>
        <p>📁 Repo: <a href="https://github.com/DwiEkoRaharjo-SKom/devconnect" className="text-blue-600">Link Repo</a></p>

        <h3 className="text-xl text-blue-800">5. Kontribusi Open Source</h3>
        <p>💻 Refactoring komponen UI dan perbaikan dokumentasi proyek di GitHub.</p>
      </section>

      <section className="reveal reveal-shadow-bottom reveal-shadow-right reveal reveal-shadow-bottom reveal-shadow-right reveal bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl text-blue-800">📜 Sertifikasi dan Kursus</h2>
        <ul className="list-disc pl-6 reveal">
          <li class="reveal">🏅 React Fundamentals – Frontend Masters</li>
          <li class="reveal">📚 Belajar Dasar Pemrograman Web – Dicoding</li>
          <li class="reveal">📜 JavaScript Algorithms and Data Structures – freeCodeCamp</li>
        </ul>
      </section>

      <section className="reveal reveal-shadow-bottom reveal-shadow-right reveal reveal-shadow-bottom reveal-shadow-right reveal bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl text-blue-800">📞 Kontak</h2>
        <p>📧 Email: dwieko.comp.cell@gmail.com</p>
        <p>🔗 GitHub: <a href="https://github.com/DwiEkoRaharjo-SKom" className="text-blue-600">Link GitHub</a></p>
        <p>🌐 LinkedIn: <a href="https://linkedin.com/in/dwi-eko-raharjo" className="text-blue-600">Link LinkedIn</a></p>
      </section>
    </div>
  );
};

export default Portfolio;
