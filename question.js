const str1 = "myNameIsAbhi"; //my_name_is_abhi

const str2 = "my_name_is_abhi"; //myNameIsAbhi

function convertString(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      result += `_${s[i].toLowerCase()}`;
    } else {
      result += s[i];
    }
  }

  return result;
}

console.log(convertString(str1));

function converStringBack(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "_") {
      result += s[i + 1].toUpperCase();
    } else {
      result += s[i];
    }
  }
};

console.log(converStringBack(str2));
