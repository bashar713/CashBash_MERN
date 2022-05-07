export function sumData(data){
    let sum = 0 ;
    for (let i = 0; i < data?.length; i++) {
        sum += data[i].amount       
    }
    return sum.toLocaleString();
}

export function calcProfit(inc,exp){
    let converInc = parseInt(inc.replace(/,/g, ''))
    let converExp = parseInt(exp.replace(/,/g, ''))
    return (converInc-converExp).toLocaleString();
}

export function calcTotalExpensesInThisMonth(expensesList){
    const dateInNumbers = new Date().toISOString().split('T')[0].substring(0,7);
    console.log(expensesList);
    //console.log(expensesList[expensesList?.length/2-1 | 0]);
    const filteredArray = [];
    expensesList?.map(item=>{
        let copyObj = {...item};
        copyObj.createdAt = item?.createdAt.split('T')[0].substring(0,7)
        filteredArray.push(copyObj);
        // console.log(item);
    })
    let x = filteredArray.filter(a => {
        return (dateInNumbers === a.createdAt);
    });
    return sumData(x);
}



/*
    if the length of our list(exp , inc) === 5 then print all the element
    in reverse way from (length to 0).
    else print all the element from (length to length/2-1 or legnth/2).
    In this way I only show the user the last few transictions
    and when he click to view all I want to show him all the transaction. 
*/ 
