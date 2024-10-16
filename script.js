document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        } else {
            alert('Ссылка на проект не задана!');
        }
    });
});


document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    const message = document.getElementById('message').value;

    if (message) {
        alert('Ваше сообщение отправлено!');
        document.getElementById('message').value = ''; // Очищаем поле после отправки
    } else {
        alert('Пожалуйста, введите сообщение!');
    }
});
