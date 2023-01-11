document.querySelector(".show__day").onclick = () => {
  const nowDay = new Date();
  const day = nowDay.getDate();
  const month = nowDay.getMonth() + 1;
  const year = nowDay.getFullYear();
  const hours = nowDay.getHours();
  const minutes = nowDay.getMinutes();
  console.log(day, month, year, hours, minutes);

  document.querySelector(
    ".now-day"
  ).textContent = `${hours}:${minutes}   ${day}/${month}/${year}`;
};

document.querySelector(".show-result-3").onclick = () => {
  const day = document.querySelector(".input-day-3").value;
  const month = document.querySelector(".input-month-3").value;
  const year = document.querySelector(".input-year-3").value;

  if (!day || !month || !year) {
    alert("Nhaap....");
    return;
  }

  const formatM_D_Y = `${month}-${day}-${year}`;
  const formatMDY = `${month}/${day}/${year}`;
  const formatD_M_Y = `${day}-${month}-${year}`;
  const formatDMY = `${day}/${month}/${year}`;

  const result = `
    <p>${formatM_D_Y}</p>
    <p>${formatMDY}</p>
    <p>${formatD_M_Y}</p>
    <p>${formatDMY}</p>
  `;
  document.querySelector(".result-3").innerHTML = result;
};
document.querySelector(".btn-result-4").onclick = () => {
  const valueInput = document.querySelector(".input-form-4").value;
  if (!valueInput) {
    return;
  }
  const arrNumber = valueInput.split("").slice(0, valueInput.length - 1);
  let result;
  let num = "";
  let check = true;

  for (let i = 0; i < arrNumber.length - 1; ++i) {
    if (!check) {
      num += arrNumber[i + 1];
      console.log("1", num, i);
    } else {
      // num = 0;
      if (Number(arrNumber[i]) > Number(arrNumber[i + 1])) {
        check = false;
        num += arrNumber[i + 1];
        console.log("2", num, i);
      }
    }

    if (Number(arrNumber[i]) < Number(num)) {
      check = true;
      num = "";
    }
  }

  document.querySelector(".result-4").innerHTML = check;
};

document.querySelector(".btn-result-5").onclick = () => {
  const valueInput = document.querySelector(".form-input-5").value;
  if (!valueInput) {
    return;
  }
  let result = "";
  for (let i = 0; i < valueInput.length; ++i) {
    let index = valueInput[i].charCodeAt();
    index += 3;
    result += String.fromCharCode(index);
  }

  document.querySelector(".result-5").innerHTML = result;
};

document.querySelector(".btn-result-6").onclick = () => {
  const arr = [
    1, 2, 3, 5, 6, 7, 4, 7, 3, 2, 1, 6, 7, 8, 7, 7, 1, 7, 3, 7, 9999, 7, 123, 7,
  ];
  const obj = {};
  let max = 0;
  let result;
  for (let i = 0; i < arr.length; ++i) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
      if (obj[arr[i]] > max) {
        max = obj[arr[i]];
        result = arr[i];
      }
    } else {
      obj[arr[i]] = 1;
    }
  }

  document.querySelector(".result-6").textContent = result;
};

document.querySelector(".btn-result-7").onclick = () => {
  let valueInput = document.querySelector(".form-input-7").value;
  if (!valueInput) {
    alert("Nhập...");
    return;
  }

  valueInput = valueInput.toLowerCase();

  document.querySelector(".result-7").textContent =
    valueInput.includes("javascript");
};

document.querySelector(".btn-result-8").onclick = () => {
  let valueInput = document.querySelector(".form-input-8").value;
  if (!valueInput) {
    alert("Nhập...");
    return;
  }

  const arrMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".result-8").textContent = arrMonths[valueInput - 1];
};

document.querySelector(".btn-result-9").onclick = () => {
  let valueInput = document.querySelector(".form-input-9").value;
  if (!valueInput) {
    alert("Nhập...");
    return;
  }
  let maxLength = 0;
  let index = 0;
  const arr = valueInput.split(" ");
  for (let i = 0; i < arr.length; ++i) {
    let length;
    if (arr[i].includes(",")) {
      length = arr[i].length - 1;
    } else length = arr[i].length;

    if (length > maxLength) {
      maxLength = length;
      index = i;
    }
  }

  if (arr[index].includes(",")) {
    arr[index] = arr[index].slice(0, arr[index].length - 1);
  }

  document.querySelector(".result-9").innerHTML = arr[index];
};

document.querySelector(".btn-result-10").onclick = () => {
  let valueInput = document.querySelector(".form-input-10").value;
  if (!valueInput) {
    alert("Nhập...");
    return;
  }

  const arrNumber = valueInput.split("").slice(0, valueInput.length - 1);
  const result = arrNumber
    .filter((number) => Number(number) !== 5)
    .reduce((total, num) => Number(total) + Number(num), 0);

  document.querySelector(".result-10").innerHTML = result;
};

const nameValue = localStorage.getItem("name");
console.log(nameValue, "aaaa");
if (!nameValue) {
  const value = prompt("Please enter your name", "...............");
  console.log(value, "value");
  localStorage.setItem("name", value);
} else {
  document.querySelector(".hello").textContent = nameValue;
}
