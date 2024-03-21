let Result = document.getElementById("result");

// insertValue Function
function insertValue(value) {
  Result.value += value;
}

// Clear Function
function clearResult() {
  Result.value = "";
}

// Delet Function
function deletResult() {
  Result.value = Result.value.slice(0, -1);
}
// Calculation
function calculat() {
  try {
    Result.value = eval(Result.value);
  } catch (error) {
    Result.value = "error";
  }
}
