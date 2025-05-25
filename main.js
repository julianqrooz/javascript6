let hexarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexcoler = "";

for (let i = 0; i < 6; i++) {
  hexcoler += hexarray[Math.floor(Math.random() * hexarray.length)];
}

let dinalcoler = `#${hexcoler}`;

document.body.append(dinalcoler);
document.body.style.backgroundColor = dinalcoler;
