(function () {
    const plans = [
        { id: 1, name: 'Plan A', price: '₹99', desc: '1GB/day, 28 days' },
        { id: 2, name: 'Plan B', price: '₹149', desc: '1.5GB/day, 28 days' },
        { id: 3, name: 'Plan C', price: '₹199', desc: '2GB/day, 28 days' },
        { id: 4, name: 'Plan D', price: '₹249', desc: '3GB/day, 28 days' }
    ];

    document.addEventListener('DOMContentLoaded', function () {
        const grid = document.getElementById('planGrid');
        let selectedPlanId = null;

        plans.forEach(p => {
            const el = document.createElement('div');
            el.className = 'plan';
            el.tabIndex = 0;
            el.innerHTML = `<strong>${p.price}</strong><div style=\"font-size:0.9rem;color:var(--text-secondary);margin-top:6px\">${p.desc}</div>`;
            el.addEventListener('click', () => {
                selectedPlanId = p.id;
                document.querySelectorAll('#planGrid .plan').forEach(n => n.classList.remove('selected'));
                el.classList.add('selected');
            });
            el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } });
            grid.appendChild(el);
        });

        const form = document.getElementById('rechargeForm');
        const result = document.getElementById('rechargeResult');
        form.addEventListener('submit', function (ev) {
            ev.preventDefault();
            const phone = form.phone.value.trim();
            const operator = form.operator.value;
            if (!/^\d{10}$/.test(phone)) { result.innerHTML = '<div class="error">Enter a valid 10-digit mobile number.</div>'; return; }
            if (!operator) { result.innerHTML = '<div class="error">Select an operator.</div>'; return; }
            if (!selectedPlanId) { result.innerHTML = '<div class="error">Choose a plan.</div>'; return; }
            const plan = plans.find(p => p.id === selectedPlanId);
            result.innerHTML = `<div class="success">Recharge successful: ${phone} recharged with ${plan.name} (${plan.price}) using ${operator}.</div>`;
        });
    });
})();