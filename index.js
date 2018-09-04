module.exports.cardValidator = function cardValidator(cardNum){
    if (cardNum === undefined){
        throw new Error ("prencha o parâmetro da função");
    }
    if (typeof cardNum === "string"){
        throw new Error ("o parametro precisa ser do tipo Number");
    }
    let reversedNum = cardNum.toString().split("")
        .map((i) => {
            return parseInt(i, 10);
        }).reverse();
    if (reversedNum.length === 1){
        throw new Error ("não pode ter somente um digito");
    }  
    let even = [];
    let oddTwo = [];
    let odd = reversedNum.filter((a, index) =>{
        if (index % 2 === 1){
            return index;
        } else {
            even.push(reversedNum[index]);}})
        .map((a)=>{
            return a * 2;
        }).filter((b)=>{
            if (b > 9){
                return b;
            } else (
                oddTwo.push(b)
            );}).map((c)=>{
            return c - 9; 
        });
    let concatNums = odd.concat(even, oddTwo);
    let  sum = 0;
    concatNums.map((a)=>{
        return sum += a;  
    }); 
    if (sum %10 === 0){
        return true;
    } else {
        return false;
    }
};
//   cardValidator(5293230347113647);