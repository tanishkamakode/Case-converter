const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let content = text.value;
  let arr = content.split(" ");
  // console.log(arr);

  convertUpper(arr);
  convertLower(arr);
  convertAlternate(arr);
  convertCamel(arr);
  convertPascal(arr);
  convertSnake(arr);
  convertKebab(arr);
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

// Converts into Alternate case
function convertAlternate(arr) {
  let alternateText = "";

  // console.log(arr[0][0].toUpperCase());
  // console.log(arr[0][1]);
  // console.log(arr[0][2]);
  // console.log(arr[0][3]);
  // console.log(arr[0][4]);
  // console.log(arr[0][5]);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    let j;
    for (j = 1; j < arr[i].length; j = j + 2) {
      arr[i][j] = arr[i][j].toUpperCase();
      console.log(arr[i][j].toUpperCase());
    }
    alternateText = alternateText + arr[i];
    console.log(alternateText);
  }

  document.getElementById("alternate").textContent = alternateText;

  console.log(alternateText);
}

// Converts into Camel case
function convertCamel(arr) {
  let camelText = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();

    if (i >= 1) {
      let rest = arr[i].slice(1);
      let firstLetter = arr[i][0].toUpperCase();
      let fullWord = firstLetter + rest;
      camelText = camelText + fullWord;
    } else {
      camelText = camelText + arr[i];
    }
  }

  document.getElementById("camel").textContent = camelText;
}

// Converts into Pascal case
function convertPascal(arr) {
  let pascalText = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    let rest = arr[i].slice(1);
    let firstLetter = arr[i][0].toUpperCase();
    let fullWord = firstLetter + rest;
    pascalText = pascalText + fullWord;
  }

  document.getElementById("pascal").textContent = pascalText;
}

// Converts into Snake case
function convertSnake(arr) {
  let snakeText = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();

    if (i == 0) snakeText = snakeText + arr[i];
    else snakeText = snakeText + "_" + arr[i];
  }

  document.getElementById("snake").textContent = snakeText;
}

// Converts into Kebab case
function convertKebab(arr) {
  let kebabText = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();

    if (i == 0) kebabText = kebabText + arr[i];
    else kebabText = kebabText + "-" + arr[i];
  }

  document.getElementById("kebab").textContent = kebabText;
}
