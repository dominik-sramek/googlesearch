# Citace a použité zdroje

**Projekt:** Frontend klon Google vyhledávače (PVA 3.D)  
**Autor:** Dominik Šrámek  
**Osobní portfolio:** [dominiksramek.github.io](https://dominiksramek.github.io)  
**Datum:** Říjen 2026  

---

## 1. Použité zdroje a specifikace

1. **Google Search & Google UI Design:**
   - Oficiální rozhraní vyhledávače Google: [https://www.google.com](https://www.google.com)
   - Rozšířené vyhledávání Google: [https://www.google.com/advanced_search](https://www.google.com/advanced_search)
   - Vyhledávání obrázků Google: [https://images.google.com](https://images.google.com)
   - Google Material Design principy a barevná paleta Google (Google Blue `#1a73e8`, Red `#d93025`, Yellow `#f9ab00`, Green `#1e8e3e`).

2. **CS50's Web Programming with Python and JavaScript:**
   - Harvard University / edX: *Project 0 – Search*
   - Specifikace parametrů pro Google Search (`q`), Image Search (`tbm=isch`), a Advanced Search (`as_q`, `as_epq`, `as_oq`, `as_eq`).
   - Požadavek na modré tlačítko zarovnané doleva v rozšířeném vyhledávání.

3. **W3C Standardy a validátory:**
   - W3C Nu HTML Checker: [https://validator.w3.org/nu/](https://validator.w3.org/nu/)
   - W3C CSS Validation Service: [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)
   - HTML Living Standard: [https://html.spec.whatwg.org/](https://html.spec.whatwg.org/)

4. **MDN Web Docs:**
   - HTML Forms guide & input types: [https://developer.mozilla.org/en-US/docs/Learn/Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
   - Accessibility and disabled attributes: [https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled)

---

## 2. Použité prompty a asistence AI

Při tvorbě projektu byla využita asistence velkého jazykového modelu pro návrh struktury, sémantického HTML5 kódu, validního CSS3 a věrné reprodukce vizuálního stylu Google.

### Zadané zadání a prompty:

#### Hlavní prompt:
> *Vytvoř frontend klon Google vyhledávače.*
> - `index.html`: Klasické vyhledávání Google odesílající na `https://google.com/search` (`name="q"`).
> - `image.html`: Vyhledávání obrázků odesílající na Google (parametry `q` a `tbm=isch`).
> - `advanced.html`: Rozšířené vyhledávání podle CS50 s modrým tlačítkem zarovnaným doleva.
> - `forms.html`: Stránka obsahující různé formulářové prvky jako input, select, checkbox, radio, textarea a button. Všechny tyto formuláře označ jako nefunkční, například zašednutím nebo poznámkou.
> - Společné prvky: Na všechny stránky projektu přidej odkaz na validaci HTML a CSS pro danou stránku. Dále na všechny stránky přidej odkaz na soubor `citace.md` obsahující použité zdroje a prompty. Na všechny stránky také přidej odkaz na mé portfolio na doméně `dominiksramek.github.io`.
> - `styles.css`: Napodob co nejvěrněji vzhled skutečného Googlu.

#### Doplňující požadavky na kvalitu a validaci:
- Dodržení přísné sémantiky HTML5 (`<header>`, `<main>`, `<footer>`, `<form>`, `<label>`).
- Všechny formulářové prvky na `forms.html` musí být zašedlé a obsahovat atribut `disabled` a vizuální upozornění o neaktivnosti.
- Responzivní chování na mobilních i desktopových zařízeních.
- Čisté a validní CSS3 odpovídající validátoru W3C.
- Zvýraznění vyhledávacího panelu (stálý stín a kontrastní rámeček) pro perfektní čitelnost.
- Plně funkční tlačítka:
  - „Hledat Googlem“ odesílá vyhledávání na Google.
  - „Zkusím mít štěstí“ (I'm Feeling Lucky) odesílá parametr `btnI=1` pro přímé přesměrování dle specifikace CS50, případně otevírá Google Doodles při prázdném dotazu.
  - Tlačítko Google aplikací (9 teček) otevírá interaktivní nabídku služeb Google.
  - Tlačítko „Přihlásit se“ odkazuje na oficiální Google Accounts přihlášení.
  - Hlasové vyhledávání integruje Web Speech API.
  - Ikona fotoaparátu otevírá vyhledávání pomocí Google Lens.

