// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;


// 아래에 getItemByAmount 함수를 작성하세요.
const getItemByAmount = function(data, amount){
    if(!(isNaN(amount)) && amount > 0){ //값이 유효한 숫자일 때
        console.log(amount);
        let itemResult = null; //리턴값
        let currentPrice = 0; //amount로 살수 있는 가장 높은 값을 구하기 위한 변수  
        data.forEach(element => {
            //item.price가 입력받은 amount값보다 작거나 같아야하고, 현재 currentPrice값이 item.price보다 작을 때 동작.
            if(element.price <= amount && currentPrice <= element.price){
                currentPrice = element.price; //currentPrice값을 살 수있는 가장 높은 item값으로 변경 
                itemResult = element; //리턴값의 해당 item값으로 바꿈
            }
        });
        console.log(itemResult);
        return itemResult;
    }
    else{ //값이 유효한 숫자가 아닐때 : 숫자가 아니거나, 값이 0이하일때 
        return null;
    }
}

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);
