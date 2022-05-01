export function sumData(data){
    let sum = 0 ;
    for (let i = 0; i < data.length; i++) {
        sum += data[i]?.amount        
    }
    return sum.toLocaleString();
}