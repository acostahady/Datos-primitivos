let mil_millones = 1000000000

let milMillones = 1_000_000_000;

console.log(mil_millones);
console.log(milMillones);

console.log(mil_millones == milMillones);
console.log(mil_millones === milMillones);
console.log(typeof(milMillones));

let milmill = 1e9; // Notacion cientifica
console.log(milmill);

//120  / 10 = 12 / 10 = 1.2 / 10 = 0.12
//0.0000012073846836

console.log(0.0000012073846836);
console.log(1.2e-6);

console.log(0xf); // Hexadecimal: 0 1 2 3 4 5 6 7 8 9 A B C D E F
console.log(0xFF); // 225
console.log(0xFFF); // 4095
console.log(0xFFFFFF); // 65535

//             210
console.log(0b0111); // Binario 0 1
//             421 -> 7
console.log(0b0000000010111); // Binario 0 1
//             160421 -> 23

console.log(0b1111);
console.log(0b11111111);
console.log(0b111111111111);
console.log(0b111111111111111);

let num = 255;
console.log(num.toString()); // convirtiendo a una cadena de caracteres
console.log(num.toString(16));
console.log(num.toString(2));
console.log(123456..toString(36));

// Redondeo math
//            Arriba                   Abajo<5 - Arr>4            Abajo
console.log(marth.ceil(2.4)+ "-"+ marth.round(2.4)+ "-"+ marth.floor(2.4));
console.log(marth.ceil(2.6)+ "-"+ marth.round(2.6)+ "-"+ marth.floor(2.6));

console.log(math.trunc(2.1)); // Solo toma la parte entera

num = 12.34;
console.log(num.toFixed(1)); // Redonde a la cantidad de decimales que indique el parametro
console.log(num.toFixed(5));
num = 12.36;
console.log(num.toFixed(1));

// calculos imprecisos

console.log(1e500);

console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2);

let sum = 0.1 + 0.2;
console.log(sum.toFixed(1) == 0.3);

console.log(9999999999999999);

console.log(+"100px");
console.log(parseInt("$100px"));
console.log(parseInt("$100"));
console.log(parseInt("100em"));
console.log(parseInt("0xff", 16));
console.log(parseInt("ff", 16));
console.log(parseInt("2n9c", 16));

console.log(marth.max(3,5, -10, 1, 8, 3));
console.log(marth.min(3,5, -10, 1, 8, 3));

console.log(marth.pow(2,6));
