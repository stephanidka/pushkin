function howMuchCharakters(){
    const dub = document.getElementById("poem");
    const dubContent = dub.textContent;
    const dubContentCount = dubContent.length;
    return dubContentCount;
}
console.log("1. Количество символов в тексте: " + howMuchCharakters());

function lineBreaks(){
    const dub = document.getElementById("poem");
    const dubContent = dub.textContent;
    const moifiedContent = dubContent.replace(/\;/g, ";\n");
    return moifiedContent;
    
}
const result = lineBreaks();
console.log("2. Текст с переносами строк: " + result);

function removeSpaces(){
    const remove = result.replace(/\s/g, "");
    return remove;
}
const substring = removeSpaces();
console.log("3. Текст с удалёнными пробелами: " + substring);

function string2850(){
    const string = result.slice(28,49);
    return string;
}
const newText = string2850();
console.log("4. Извлечение подстроки: " + newText);

function oakIt(){
    const oak = newText.replace(/клён/g, "дубе");
    return oak;
}
const replacedText = oakIt()
console.log("5. Замена 'клён' на 'дубе': " + replacedText);

function upperCase(){
    const resultUpper = result.toUpperCase();
    return resultUpper;
}
const replacedText2 = upperCase();
console.log("6. Строка result в верхнем регистре: " + replacedText2);

function oakItAll(){
    const oak = result.replace(/клён/g, "дуб");
    return oak;
}
const replacedText3 = oakItAll()
console.log("7. Замена 'клён' на 'дуб' (все вхождения) в переменной result: " + replacedText3);

function indexOfSea(){
    const sea = replacedText3.indexOf('моря');
    return sea;
}
const index = indexOfSea();
console.log('8. Индекс первого вхождения "моря": ' + index);

function capitalizeFirstLetter(){
    let firstLetter = replacedText.charAt(0).toUpperCase();
    return firstLetter + replacedText.slice(1);
}
const modifiedText = capitalizeFirstLetter();
console.log('9. Строка с измененной первой буквой: ' + modifiedText); // почему не работает?