const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Використання CORS middleware для дозволу всіх запитів
app.use(cors());

// Middleware для обробки JSON та URL-encoded тіла запиту
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Обробка GET запиту з затримкою від 1 до 10 секунд для тестування async і запитів
app.get('/', (req, res) => {
    const delay = Math.floor(Math.random() * 10000) + 1000;  
    setTimeout(() => {
        res.send('Відповідь на GET запит з випадковою затримкою');
    }, delay);
});

app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});


// Для перевірки роботи після запуску можете виконати запит

// document.getElementById('getBtn').addEventListener('click', () => {
//     fetch('http://localhost:3000/', { method: 'GET' })
//         .then(response => response.text())
//         .then(data => alert(data))
//         .catch(error => console.error('Помилка:', error));
// });