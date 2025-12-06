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
        const sun = '🌞';
        const moon = '🌙';
        btn.textContent = isLight ? sun : moon;
        btn.setAttribute('title', isLight ? 'Light theme (click to switch to dark)' : 'Dark theme (click to switch to light)');
        btn.setAttribute('aria-label', isLight ? 'Light theme' : 'Dark theme');
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