const telegramToken = "7957226391:AAFG2Tzgc-4UYnIq0xMkyUUDI43TVw76k08";
const chatId = "7875606957";

const form = document.getElementById("order-form");
const responseMessage = document.getElementById("response-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cakeType = form.cakeType.value;
  const filling = form.filling.value;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const comment = form.comment.value.trim();

  if (!cakeType || !filling || !name || !phone) {
    responseMessage.style.color = "red";
    responseMessage.textContent = "Будь ласка, заповніть усі обов’язкові поля.";
    return;
  }

  const message = `
🎂 Нове замовлення від KrisCake:

• Тип тортика: ${cakeType}
• Начинка: ${filling}
• Ім'я: ${name}
• Телефон: ${phone}
• Коментар: ${comment || "Немає"}
  `;

  fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((res) => {
      if (res.ok) {
        responseMessage.style.color = "green";
        responseMessage.textContent = "Дякуємо! Ваше замовлення прийнято ❤️";
        form.reset();
      } else {
        throw new Error("Помилка при надсиланні");
      }
    })
    .catch(() => {
      responseMessage.style.color = "red";
      responseMessage.textContent = "Помилка. Спробуйте пізніше.";
    });
});
