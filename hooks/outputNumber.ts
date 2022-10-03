const outputNumber = (number:string|number):string => {
    number = Number(Number(number).toFixed(5)).toLocaleString();
    return number;
}

export default outputNumber;