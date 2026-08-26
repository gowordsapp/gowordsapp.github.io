// Paddle & Checkout Configuration
window.PADDLE_CONFIG = {
    // Окружение: 'sandbox' для тестирования или 'production' (или 'live') для боевых платежей
    environment: "sandbox",

    // Клиентский токен Paddle (Client-side token)
    token: "live_78b6c88d3336ba0bd0c77fead59",

    // Идентификаторы цен / продуктов в Paddle
    prices: {
        proMonthly: "pri_01m0ycsmsws56rtyrb99zzv2kg"
    }
};

/**
 * Инициализирует Paddle с глобальной конфигурацией
 */
function initPaddleConfig() {
    if (typeof Paddle === 'undefined') {
        console.error('Paddle.js is not loaded');
        return;
    }

    if (window.PADDLE_CONFIG.environment === 'sandbox') {
        Paddle.Environment.set("sandbox");
    }

    Paddle.Initialize({
        token: window.PADDLE_CONFIG.token
    });
}
