// ════════════════════════════════════════════
// script.js — Portfólio max.dev
// ════════════════════════════════════════════
 
/**
 * showSection
 * Troca a seção visível e atualiza o estado ativo da nav.
 * @param {string} name — 'inicio' | 'projetos' | 'contato'
 */
function showSection(name) {
    // 1. Esconde todas as seções
    document.querySelectorAll("section[id]").forEach(function (s) {
      s.style.display = "none";
    });
   
    // 2. Remove 'active' de todos os botões da nav
    document.querySelectorAll(".nav-link, .nav-btn").forEach(function (btn) {
      btn.classList.remove("active");
    });
   
    // 3. Mostra a seção escolhida
    var target = document.getElementById(name + "-section");
    if (target) {
      target.style.display = "block";
      // Reinicia animação de entrada
      target.style.animation = "none";
      void target.offsetHeight;
      target.style.animation = "";
    }
   
    // 4. Marca o botão ativo
    var activeBtn = document.querySelector("[onclick=\"showSection('" + name + "')\"]");
    if (activeBtn) activeBtn.classList.add("active");
  }
   
  // ════════════════════════════════════════════
  // Inicialização ao carregar o DOM
  // ════════════════════════════════════════════
  document.addEventListener("DOMContentLoaded", function () {
    // Esconde todas as seções
    document.querySelectorAll("section[id]").forEach(function (s) {
      s.style.display = "none";
    });
   
    // Exibe só o início
    var inicio = document.getElementById("inicio-section");
    if (inicio) inicio.style.display = "block";
   
    // Marca botão início como ativo
    var btnInicio = document.querySelector("[onclick=\"showSection('inicio')\"]");
    if (btnInicio) {
      document.querySelectorAll(".nav-link, .nav-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btnInicio.classList.add("active");
    }
  });