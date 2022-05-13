import ErrorRepository from '../index';

test('Map to generate bugs', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.storage.set(100, 'Число не соответствует выбранному диапазону.');
  function wrapperErrorGenerator() {
    errorRepository.errorGenerator(100);
  }

  expect(wrapperErrorGenerator).toThrowError('Число не соответствует выбранному диапазону.');
});

test('Map to generate bugs', () => {
  const errorRepository = new ErrorRepository();
  function wrapperErrorGenerator() {
    errorRepository.errorGenerator(106);
  }

  expect(wrapperErrorGenerator).toThrowError('Unknown error');
});
