const form = document.getElementById('orderForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const data = {
    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    cakeType: form.cakeType.value,
    filling: form.filling.value,
    description: form.description.value.trim(),
  };

  if (!data.name || !data.phone || !data.cakeType || !data.filling) {
    alert('Будь ласка, заповніть усі обов’язкові поля.');
    return;
  }

  const message = `
Нове замовлення з сайту KrisCake:
Ім'я: ${data.name}
Телефон: ${data.phone}
Тип тортика: ${data.cakeType}
Начинка: ${data.filling}
Побажання: ${data.description || '-'}
  `;

  // Відправка через сервер (потрібен бекенд або сервіс)
  // Тут просто показуємо повідомлення для тесту
  alert('Дякуємо! Ваше замовлення надіслано.');

  form.reset();
});
