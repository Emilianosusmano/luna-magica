export function ZodiacCalculation(date) {
    var splitedDate = date.split('-');
    const transformedDate = splitedDate[1] + splitedDate[2];
    var zodiacSign = '';
    if (transformedDate >= "0321" && transformedDate <= "0420") {
        zodiacSign = "Aries"
    } else if (transformedDate >= "0421" && transformedDate <= "0521") {
        zodiacSign = "Tauro"
    } else if (transformedDate >= "0120" && transformedDate <= "0218") {
        zodiacSign = "Acuario"
    } else if (transformedDate >= "0522" && transformedDate <= "0621") {
        zodiacSign = "Geminis"
    } else if (transformedDate >= "0622" && transformedDate <= "0723") {
        zodiacSign = "Cancer"
    } else if (transformedDate >= "0724" && transformedDate <= "0823") {
        zodiacSign = "Leo"
    } else if (transformedDate >= "0824" && transformedDate <= "0923") {
        zodiacSign = "Virgo"
    } else if (transformedDate >= "0924" && transformedDate <= "1023") {
        zodiacSign = "Libra"
    } else if (transformedDate >= "1024" && transformedDate <= "1122") {
        zodiacSign = "Escorpio"
    } else if (transformedDate >= "1123" && transformedDate <= "1222") {
        zodiacSign = "Sagitario"
    } else if ((transformedDate >= "1223" && transformedDate <= "1231") || (transformedDate <= "0101" && transformedDate <= "0120")) {
        zodiacSign = "Capricornio"
    } else if (transformedDate >= "0121" && transformedDate <= "0219") {
        zodiacSign = "Acuario"
    } else if (transformedDate >= "0220" && transformedDate <= "0320") {
        zodiacSign = "Picis"
    }
    return zodiacSign;
}

export function getValueOfLetter(letter) {
    var hashmap = new Map();
    hashmap.set('a', 1);
    hashmap.set('b', 2);
    hashmap.set('c', 3);
    hashmap.set('d', 4);
    hashmap.set('e', 5);
    hashmap.set('f', 6);
    hashmap.set('g', 7);
    hashmap.set('h', 8);
    hashmap.set('i', 9);
    hashmap.set('j', 1);
    hashmap.set('k', 2);
    hashmap.set('l', 3);
    hashmap.set('m', 4);
    hashmap.set('n', 5);
    hashmap.set('ñ', 6);
    hashmap.set('o', 7);
    hashmap.set('p', 8);
    hashmap.set('q', 9);
    hashmap.set('r', 1);
    hashmap.set('s', 2);
    hashmap.set('t', 3);
    hashmap.set('u', 4);
    hashmap.set('v', 5);
    hashmap.set('w', 6);
    hashmap.set('x', 7);
    hashmap.set('y', 8);
    hashmap.set('z', 9);
    return hashmap.get(letter);
}