
const __mocksReady = (async () => {
    if (import.meta.env.VITE_USE_MOCKS === 'true') {
        const { setupAxiosMock } = await import('./api.mocks');
        setupAxiosMock();
    }
})();