
// function checkCashRegister(price, cash, cid) {

//     var difference = cash - price;
//   const originalDiff = difference;
//   var objectReturn = {
//     status: '',
//     change: []
//   }

// let arrCurrency = [
//     ["ONE HUNDRED", 100], 
//     ["TWENTY", 20], 
//     ["TEN", 10], 
//     ["FIVE", 5], 
//     ["ONE", 1], 
//     ["QUARTER", 0.25],
//     ["DIME", 0.1],
//     ["NICKEL", 0.05],
//     ["PENNY", 0.01]
//     ];

//     cid.reverse();

//   var cidSum = 0;
//   for(let i = 0; i<cid.length; i++){
//     cidSum += cid[i][1];
//   }

//   var result = [...arrCurrency];

//   for(let i = 0; i<arrCurrency.length; i++){
//     let returnMoney = 0; 
//     let bill = cid[i][1]/arrCurrency[i][1]
//       bill.toFixed(2);
//       while(difference.toFixed(2)>=arrCurrency[i][1] && bill>=1){
//         difference -= arrCurrency[i][1];
//         returnMoney += arrCurrency[i][1];
//         bill--;

//       }
//         if(returnMoney>0){
//           if(returnMoney - Math.floor(returnMoney) !== 0){result[i][1]= returnMoney.toFixed(2)
//           result[i][1] = parseFloat(result[i][1])}else{
//             result[i][1]= returnMoney;
//           }

//         }else{
//           result[i][1]= returnMoney;
//         }
//   }


//   let sumResult = 0;

//   for(let i = 0; i<cid.length; i++){
//     sumResult += result[i][1];
//   }
//   sumResult = sumResult.toFixed(2);



//   if(cidSum < originalDiff || sumResult < originalDiff){
//     objectReturn.status = 'INSUFFICIENT_FUNDS';
//     }else if(cidSum == originalDiff){
//       objectReturn.status = 'CLOSED';
//       objectReturn.change = cid
//     }else{
//       let resultFiltered =[];
//       for(let a = 0; a<result.length; a++){
//         if(result[a][1]!==0){
//           resultFiltered.push(result[a]);  
//         } 
//         }
//      objectReturn.status = 'OPEN';
//      objectReturn.change = resultFiltered;
//     }
//      return objectReturn;
// }



// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));







const currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}


function checkCashRegister(price, cash, cid) {

  let changeSum = (cash - price)*100;
  console.log(changeSum/100);
  let changeSumCheck = changeSum;
  let change = [];
  let status = '';

  let cidSum = 0;
  let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

  filteredCid.forEach(elem => {
    let curr = elem[0];
    let currSum = elem[1]*100;
    cidSum = cidSum + currSum;
    let amount = 0;
    while (changeSum >= currencyUnit[curr] && currSum > 0) {
      amount = amount + currencyUnit[curr];
      changeSum = changeSum - currencyUnit[curr];
      currSum = currSum - currencyUnit[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  if (changeSum > 0) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if (changeSum == 0 && changeSumCheck == cidSum) {
    status = 'CLOSED';
    change = cid;
  } else {
    status = 'OPEN';
  }
  return { 'status': status, 'change': change };


}


console.log(checkCashRegister(15.5, 20, [["PENNY", 101], ["NICKEL", 205], ["DIME", 310], ["QUARTER", 425], ["ONE", 200], ["FIVE", 5500], ["TEN", 2000], ["TWENTY", 6000], ["ONE HUNDRED", 10000]]));

