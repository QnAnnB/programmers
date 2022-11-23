function solution(s, n) {
    // 알파벳은 26 modular
    // 대문자의 아스키코드 범위 65 ~ 90
    // 소문자의 아스키코드 범위 97 ~ 122
    // 시작범위를 1로 잡으려면 각각 64, 96을 빼주어야 한다
    // (1,2,3,4,,,26) 범위를 가지고 있고, 26모듈러 적용 시 1,2,3,,,25,0 이 나옴
    // 따라서 0이 나왔을시에는 90 또는 122 마지막 값을 적용시키고, 나머지는 모듈러연산 결과에 초기에 떼었던 값을 더해준다 
    // **************************************
    // 아스키코드 : 문자열.charCodeAt(인덱스) 
    // 문자로변환 : String.fromCharCode(아스키코드)
    // **************************************

  var answer = '';
  for (let i = 0; i < s.length; i++) {
  let cn = s.charCodeAt(i);
  let word = 0;
      if (cn >= 65 && cn <= 90) {
          word = (cn - 64 + n) % 26 === 0 ? 90 : ((cn - 64 + n) % 26) + 64;
      } else if (cn >= 97 && cn <= 122) {
          word = (cn - 96 + n) % 26 === 0 ? 122 : ((cn - 96 + n) % 26) + 96;
      }

      answer += word !== 0 ? String.fromCharCode(word) : ' ';
      }

  return answer;
}