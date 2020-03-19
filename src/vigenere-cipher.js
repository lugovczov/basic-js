const LetterNumber = {
        A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15,
        Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25, 
        // ' ':' ', '!':'!', ':':':', ',':',', '.':'.', ')':')', '|':'|', '1':'1', '2':'2', '3':'3', '4':'4', '5':'5', '6':'6', '7':'7', '8':'8', '9':'9', '0':'0',
    };
const NumberLetter = {
        0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L", 12: "M", 13: "N", 14: "O", 15: "P",
        16: "Q", 17: "R", 18: "S", 19: "T", 20: "U", 21: "V", 22: "W", 23: "X", 24: "Y", 25: "Z", 
    };

class VigenereCipheringMachine {
    

    encrypt(string, key) {
        if (typeof(string) === 'undefined' | typeof(key) === 'undefined') {
            throw new Error;
        }

        string = string.toUpperCase();
        console.log(string);
        
        key = key.toUpperCase();
        console.log(key);


        // if (this.VigenereCipheringMachine === false) {



        // } else {
            let arrString = string.split('');
            console.log(arrString);

            let arrKey = key.split('');
            console.log(arrKey);


            let arrKeyFull = []; 
            
            for (let i = 0; i <= arrKey.length; i++) {
                if (arrString.length != arrKeyFull.length) {
                    if ( i == (arrKey.length ) ) {
                        i = 0;
                    }

                    arrKeyFull.push(arrKey[i]);
                }
            }
            
            console.log(arrKeyFull);  // key удлиннил до string



            // for (let i = 0; i <= arrString.length; i++) {
            //     for (let prop in LetterNumber) {
            //         for (let j = 0; j<=arrKeyFull.length; j++) {
            //             if ( arrString[i] == prop ) {
            //                 i++;
            //             } else {
            //                 arrKeyFull.splice(arrKeyFull[i], 0, arrString[i]);
            //             }
            //         }
            //         // if ( typeof key == 'string') {
            //         //     arrRes.push(arrSumStrKey[i]);
            //         // }
            //     }
            // }

            console.log('пробел', arrKeyFull);  // key добавил пробелы


            // str из букв в числа

            // let arrModernString = [];
            
            // for ( let key of arrString) {
            //     for (let prop in LetterNumber ) {
                    
            //         if ( prop == key ) {
            //             arrModernString.push(LetterNumber[prop]);
            //         }
                        
            //     }
            // }
            // console.log(arrModernString);


            
            // key из букв переделал в числа
            // let arrModernKey = [];
            
            // for ( let key of arrKeyFull) {
            //     for (let prop in LetterNumber ) {
                    
            //         if ( prop == key ) {
            //             arrModernKey.push(LetterNumber[prop]); 
            //         }
                        
            //     }
            // }

            // console.log(arrModernKey);

            // два массива слаживаем в один. 
            // проверка на num? чтобы пробелы стояли    // если больше 26, то - 26

            // // let arrSumStrKey = [];

            // // for (let i = 0; i <= arrModernString.length; i++) {
            // //     if ( typeof arrModernString[i] == 'number') {
            // //         arrSumStrKey.push( arrModernString[i] +arrModernKey[i]);      // слаживаем два массива в один 
            // //     } else {      
            // //         arrSumStrKey.push(arrModernString[i]);
            // //     }
            // // }

            // // console.log(arrSumStrKey);
            
            
            // // for (let i = 0; i <= arrSumStrKey.length; i++) {
            // //     if ( arrSumStrKey[i] > 25) {
            // //         arrSumStrKey[i] = arrSumStrKey[i] - 26;    // если число больше 25, то уменьшаем на 26
            // //     }
            // // }


            // // console.log(arrSumStrKey);
        // ножно дешифровать через второй объект num-letter

        let arrRes = [];

        // // for (let i = 0; i <=arrSumStrKey.length; i++) {
        // //     for (let prop in NumberLetter) {
        // //         if ( arrSumStrKey[i] == prop ) {
        // //             arrRes.push(NumberLetter[prop]);
        // //         } 

        // //         // if ( typeof key == 'string') {
        // //         //     arrRes.push(arrSumStrKey[i]);   // дешифратор из цифр в буквы,
        // //         // }
        // //     }
        // // }

        // // console.log(arrRes);

        // // return arrRes.join('');



        //}
        

    }

    decrypt(string, key) {
        if (typeof(string) === 'undefined' | typeof(key) === 'undefined') {
            throw new Error;
        }

        if (VigenereCipheringMachine === false) {
            return this.reverse;
        } else {
            return this.direct;
        }


    }
}

module.exports = VigenereCipheringMachine;
