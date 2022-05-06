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

