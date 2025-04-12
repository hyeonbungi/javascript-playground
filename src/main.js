import { generateLottoNumbers } from './lotto.js';

try {
  const lottoNumbers = generateLottoNumbers(5);
  console.log(lottoNumbers);
} catch (error) {
  console.error(error.message);
}
