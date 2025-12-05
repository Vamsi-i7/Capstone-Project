
(function () {
    const root = document.documentElement;
    const THEME_KEY = 'site-theme';

    function applyThemeFromStorage() {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored === 'light') root.classList.add('light-theme');
        else root.classList.remove('light-theme');
    }

    function updateButton(btn) {
        if (!btn) return;
        const isLight = root.classList.contains('light-theme');
        btn.setAttribute('aria-pressed', String(isLight));

        const sunIcon = `🌙`; 
        const moonIcon = '<img src="icons and images/light.svg" alt="Light Mode" class="icon-svg">'; // You can also replace this with an <img> tag if you have a moon.svg

        btn.innerHTML = isLight ? sunIcon : moonIcon;
    }
    // -------------------------------------

    function toggleTheme(btn) {
        const willBeLight = !root.classList.contains('light-theme');
        root.classList.toggle('light-theme', willBeLight);
        localStorage.setItem(THEME_KEY, willBeLight ? 'light' : 'dark');
        updateButton(btn);
    }

    document.addEventListener('DOMContentLoaded', function () {
        applyThemeFromStorage();
        const btns = document.querySelectorAll('.theme-toggle');
        btns.forEach(btn => {
            updateButton(btn);
            btn.addEventListener('click', function () { toggleTheme(btn); });
        });
    });
})();