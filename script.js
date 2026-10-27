/**
 * Google Search Clone - Interaktivní skripty
 * Autor: Dominik Šrámek (https://dominik-sramek.github.io)
 * Popis: Zprovoznění všech tlačítek (Google aplikace, hlasové vyhledávání, Google Lens, Zkusím mít štěstí)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Zprovoznění tlačítka "Aplikace Google" (9 teček)
  const appsBtn = document.getElementById('btn-apps');
  const appsMenu = document.getElementById('google-apps-menu');

  if (appsBtn && appsMenu) {
    appsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isExpanded = appsMenu.classList.toggle('show');
      appsBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Zavření menu při kliknutí mimo
    document.addEventListener('click', (e) => {
      if (!appsMenu.contains(e.target) && e.target !== appsBtn && !appsBtn.contains(e.target)) {
        appsMenu.classList.remove('show');
        appsBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Zavření při stisku Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        appsMenu.classList.remove('show');
        appsBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Zprovoznění formuláře a tlačítek vyhledávání
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const btnLucky = document.getElementById('btn-lucky');

  if (searchForm && searchInput) {
    // Tlačítko "Zkusím mít štěstí" (I'm Feeling Lucky)
    if (btnLucky) {
      btnLucky.addEventListener('click', (e) => {
        const query = searchInput.value.trim();
        if (!query) {
          // Pokud je pole prázdné, Google otevírá galerii Doodles
          e.preventDefault();
          window.location.href = 'https://www.google.com/doodles';
          return;
        }

        // Pokud je zadán dotaz, zajistíme parametr btnI=1 pro přímé přesměrování
        let btnIInput = searchForm.querySelector('input[name="btnI"]');
        if (!btnIInput) {
          btnIInput = document.createElement('input');
          btnIInput.type = 'hidden';
          btnIInput.name = 'btnI';
          btnIInput.value = '1';
          searchForm.appendChild(btnIInput);
        } else {
          btnIInput.value = '1';
        }
      });
    }

    // Ošetření odeslání prázdného vyhledávání
    searchForm.addEventListener('submit', (e) => {
      const query = searchInput.value.trim();
      // Pokud nebyl stisknut btnLucky a dotaz je prázdný, zaměříme pole s animací
      if (!query && (!e.submitter || e.submitter.id !== 'btn-lucky')) {
        e.preventDefault();
        searchInput.focus();
        const searchBox = searchInput.closest('.search-box');
        if (searchBox) {
          searchBox.classList.add('search-box-pulse');
          setTimeout(() => searchBox.classList.remove('search-box-pulse'), 600);
        }
      }
    });
  }

  // 3. Zprovoznění tlačítka mikrofonu (Hlasové vyhledávání přes Web Speech API)
  const micBtn = document.getElementById('btn-mic');
  if (micBtn && searchInput) {
    micBtn.addEventListener('click', () => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert('Hlasové vyhledávání není ve vašem prohlížeči podporováno. Zkuste prohlížeč Google Chrome nebo Microsoft Edge.');
        return;
      }

      try {
        const recognition = new SpeechRecognition();
        recognition.lang = 'cs-CZ';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        micBtn.classList.add('listening');
        micBtn.setAttribute('title', 'Poslouchám... Mluvte.');

        recognition.onstart = () => {
          searchInput.placeholder = 'Poslouchám... mluvte do mikrofonu';
        };

        recognition.onresult = (event) => {
          const spokenText = event.results[0][0].transcript;
          searchInput.value = spokenText;
          searchInput.placeholder = '';
          micBtn.classList.remove('listening');
          micBtn.setAttribute('title', 'Vyhledávat hlasem');
          // Automaticky odeslat vyhledávání po rozpoznání hlasu
          if (searchForm) {
            searchForm.submit();
          }
        };

        recognition.onerror = (event) => {
          console.warn('Speech recognition error:', event.error);
          micBtn.classList.remove('listening');
          searchInput.placeholder = '';
          micBtn.setAttribute('title', 'Vyhledávat hlasem');
          if (event.error === 'not-allowed') {
            alert('Přístup k mikrofonu byl zamítnut. Povolte přístup k mikrofonu v nastavení prohlížeče.');
          }
        };

        recognition.onend = () => {
          micBtn.classList.remove('listening');
          searchInput.placeholder = '';
          micBtn.setAttribute('title', 'Vyhledávat hlasem');
        };

        recognition.start();
      } catch (err) {
        console.error('Speech recognition exception:', err);
        micBtn.classList.remove('listening');
      }
    });
  }

  // 4. Zprovoznění tlačítka Google Lens / Fotoaparát
  const lensBtn = document.getElementById('btn-lens');
  if (lensBtn) {
    lensBtn.addEventListener('click', () => {
      // Otevře oficiální službu Google Lens v novém okně
      window.open('https://lens.google.com/', '_blank', 'noopener,noreferrer');
    });
  }
});

