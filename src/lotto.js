const MIN_LOTTO_NUMBER = 1;
const MAX_LOTTO_NUMBER = 45;
const NUMBERS_PER_DRAW = 6;

/**
 * 지정된 개수(count)만큼 로또 번호(1~45 사이 정수 6개)를 생성해 반환한다.
 * @param {number} count - 생성할 로또 번호 목록(세트) 개수
 * @returns {number[][]} 로또 번호 세트들의 배열
 */
export function generateLottoNumbers(count) {
  if (typeof count !== 'number' || count <= 0) {
    throw new Error('count는 양의 정수이어야 합니다.');
  }

  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(generateLottoSet());
  }

  return results;
}

/**
 * 1회 로또 번호 세트를 생성한다. (중복 없는 6개의 숫자를 오름차순 정렬)
 * @returns {number[]} ex) [3, 8, 19, 27, 42, 44]
 */
function generateLottoSet() {
  const lottoSet = new Set();

  while (lottoSet.size < NUMBERS_PER_DRAW) {
    const randomNum =
      Math.floor(Math.random() * MAX_LOTTO_NUMBER) + MIN_LOTTO_NUMBER;
    lottoSet.add(randomNum);
  }

  return [...lottoSet].sort((a, b) => a - b);
}
