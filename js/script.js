const user = require('./user.json');

console.log('Данные из файла user.json:');
console.log(user);

// Пример использования данных:
console.log(`Имя пользователя: ${user.name}`);
console.log(`Город проживания: ${user.address.city}`);

