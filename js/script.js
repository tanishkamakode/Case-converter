const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let content = text.value;
  let arr = content.split(" ");
  // console.log(arr);

  convertUpper(arr);
  convertLower(arr);
});

// Converts into Upper Case
function convertUpper(arr) {
  let upperText = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
    upperText = upperText + " " + arr[i];
  }

  document.getElementById("upper").textContent = upperText;
}

// Converts into Lower case
function convertLower(arr) {
  let lowerText = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    lowerText = lowerText + " " + arr[i];
  }

  document.getElementById("lower").textContent = lowerText;
}
