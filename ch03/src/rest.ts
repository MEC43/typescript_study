//잔여 연산자

let address: any = {
  country: '한국',
  city: '서울',
  address1: '강남구',
  address2: '신사동 123',
  address3: 'ABC빌딩 2층',
};
const { country, city, ...detail } = address;
console.log(detail);
