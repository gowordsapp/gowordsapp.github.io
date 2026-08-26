// Paddle & Checkout Configuration
window.PADDLE_CONFIG = {
    // Окружение: 'sandbox' для тестирования или 'production' (или 'live') для боевых платежей
    environment: "sandbox",

    // Клиентский токен Paddle (Client-side token)
    token: "test_3ea1711e3c54c2aa322b4c373b6",

    // Идентификаторы цен / продуктов в Paddle
    prices: {
        proMonthly: "pri_01m0mwe5n2zq0btc69bch5xxqw"
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
