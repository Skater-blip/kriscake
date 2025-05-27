
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const cake = e.target.cake.value;

    const message = `Нове замовлення!\n\nІм’я: ${name}\nТелефон: ${phone}\nТорт: ${cake}`;
    const telegramToken = "7957226391:AAFG2Tzgc-4UYnIq0xMkyUUDI43TVw76k08";
    const chatId = "7875606957";

    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("status").innerText = "Замовлення надіслано!";
    })
    .catch(err => {
        document.getElementById("status").innerText = "Помилка при надсиланні 😢";
    });
});
