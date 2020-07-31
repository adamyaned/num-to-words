const numToWords = (number) => {
    const first = ['', 'Մեկ ', 'Երկու ', 'Երեք ', 'Չորս ', 'Հինգ ', 'Վեց ', 'Յոթ ', 'Ութ ', 'Իննը ', 'Տասը ', 'Տասնմեկ ', 'Տասներկու ', 'Տասներեք ', 'Տասնչորս ', 'Տասնհինգ ', 'Տասնվեց ', 'Տասնյոթ', 'Տասնութ ', 'Տասնինը '];
    const tens = ['', '', 'Քսան', 'Երեսուն', 'Քարասուն', 'Հիսուն', 'Վաթսուն', 'Յոթանասուն', 'ՈՒթսուն', 'Իննսուն'];
    const mad = ['', 'Հազար', 'Միլլիոն', 'Միլիարդ', 'Տրիլիոն'];
    let word = '';
    for (let i = 0; i < mad.length; i++) {
        let tempNumber = number % (100 * Math.pow(1000, i));
        if (Math.floor(tempNumber / Math.pow(1000, i)) !== 0) {
            if (Math.floor(tempNumber / Math.pow(1000, i)) < 20) {
                word = first[Math.floor(tempNumber / Math.pow(1000, i))] + mad[i] + ' ' + word;
            } else {
                word = tens[Math.floor(tempNumber / (10 * Math.pow(1000, i)))] + ' ' + first[Math.floor(tempNumber / Math.pow(1000, i)) % 10] + mad[i] + ' ' + word;
            }
        }
        tempNumber = number % (Math.pow(1000, i + 1));
        if (Math.floor(tempNumber / (100 * Math.pow(1000, i))) !== 0) {
            word = first[Math.floor(tempNumber / (100 * Math.pow(1000, i)))] + 'Հարյուր ' + word;
        }
    }

    if (word.includes('Մեկ') && !word.endsWith('Մեկ') && word.length > 5) {
        word = word.replace('Մեկ', '');
    } else if (word.includes('Մեկ') && word.endsWith('Մեկ')) {
        word = word.replace('Մեկ', '') + " Մեկ";
    }

    return word.trim();
};

let num = parseInt(prompt("Մուտքագրեք թիվը"));
console.log(num + " - " + numToWords(num));  