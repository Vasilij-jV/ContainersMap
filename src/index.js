export default class ErrorRepository {
  constructor() {
    this.storage = new Map();
  }

  translate(code) {
    if (this.storage.has(code)) {
      return this.storage.get(code);
    }
    return 'Unknown error';
  }

  errorGenerator(code) {
    throw this.translate(code);
  }
}

const errorRepository = new ErrorRepository();

errorRepository.storage.set(100, 'Число не соответствует выбранному диапазону.');
errorRepository.storage.set(101, 'Неверная позиция совпадения с шаблоном регулярного выражения.');
errorRepository.storage.set(102, 'функция должна принимать не менее черырёх аргументов.');
errorRepository.storage.set(103, 'Первым аргументом должна быть функция.');
errorRepository.storage.set(104, 'Превышено допустимое количество использования одного и того же персонажа.');
errorRepository.storage.set(105, 'Персонаж не существует.');
