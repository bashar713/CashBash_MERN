// export function formatDate(date){
//     // const dateInNumbers = `${date.substring(0,10)} , ${date.substring(11,16)}`;
//     const dateInNumbers = `${date.substring(0,10)}`;
//     const dayName = new Date(date.substring(0,10)).toLocaleString('en-us', {weekday:'long'});
//     let result = `${dayName} , ${dateInNumbers}`
//     return(
//         result
//     )
// }

export function formatDate(date){
    const dayName = new Date(date.substring(0,10)).toLocaleString('en-us', {weekday:'long'});
    const dateInNumbers = `${date.substring(0,10)}`;
    const todayDate = new Date().toISOString().split('T')[0]
    
    if(todayDate === dateInNumbers){
        return `Today , ${todayDate}`
    }
    else{
        return(
            `${dayName} , ${dateInNumbers}`
        )
    }

}