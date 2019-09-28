/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

function convertBytesToHuman(bytes) {
  if(typeof bytes != 'number'){
    console.log("Invalid type");
    return false;
  }
  let input = bytes.toString();
  let size = input.length;
  if(!(/^\d+$/.exec(input))){
    console.log("Input should be a positive integer");
    return false;
  }
  if(!(/^[01]+$/.exec(input))){
    return parseInt(input, 10);
  }
  let coefficient = 1;
  let res = 0;
  for(let i = size -1; i >= 0; i--){
    res += (coefficient * input[i]);
    coefficient *= 2;
  }
  return res;
}
console.log(convertBytesToHuman(123));
module.exports = convertBytesToHuman;