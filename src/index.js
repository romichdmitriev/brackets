module.exports = function check(str, bracketsConfig) {

    let targetString = str;

    const pairsOfBrackets = bracketsConfig.map(([open, close]) => {

        //Check is pair is symbols ?
        if(isNaN(+open)) {
            return `\\${open}\\${close}`;
        }

        return `${open}${close}`;
    });

    //Delete pair with regular expression
    while(targetString.length) {

        let lengthBefore = targetString.length;
        let lengthAfter;

        for(let value of pairsOfBrackets){

            const reg = new RegExp(value, 'g');
            targetString = targetString.replace(reg, "");
            lengthAfter = targetString.length;
        }

        //Break cycle if targetString.length don't change after replacing
        if(lengthBefore === lengthAfter) break;
    }

    return targetString.length === 0;
}
