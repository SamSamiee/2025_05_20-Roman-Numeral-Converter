const btn = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");

const conversion = {
	1: "I",
	4: "IV",
	5: "V",
	9: "IX",
	10: "X",
	40: "XL",
	50: "L",
	90: "XC",
	100: "C",
	400: "CD",
	500: "D",
	900: "CM",
	1000: "M",
};

function convertNumber(num, obj) {
  const keys = [
    ...Object.keys(obj)
    .map(Number)
    .sort((a, b) => b - a),
	];
	return numberFinder(num, keys, obj, "");
}

function numberFinder(num, arr, obj, str) {
  if (num === 0) {
    return str;
	}
  
	arr = arr.filter((i) => i <= num);
	console.log(`arr = ${arr}`);
	str += obj[arr[0]];
	console.log(`str so far = ${str}`);
	num = num - arr[0];
	console.log(`doing the operation for: ${num}`);
	return numberFinder(num, arr, obj, str);
}

console.log(convertNumber(3999, conversion));

btn.addEventListener("click", () => {
  if (input.value === "") {
    output.textContent = "";
    output.style.fontSize = "1.6rem";
    output.textContent = "Please enter a valid number";
  } else if (parseInt(input.value) < 1) {
    output.textContent = "";
    output.style.fontSize = "1.6rem";
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (parseInt(input.value) >= 4000) {
    output.textContent = "";
    output.style.fontSize = "1.6rem";
    output.textContent = "Please enter a number less than or equal to 3999";
  } else{
    output.textContent = convertNumber(parseInt(input.value), conversion)
  }
});

input.addEventListener("input", () => {
  if (input.value.length > 4) {
    input.value = input.value.slice(0, 4);
  }
});
