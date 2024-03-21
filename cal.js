let Result = document.getElementById("result");

function insertValue(value) {
  Result.value += value;
}
function clearResult() {
  Result.value = "";
}

function deletResult() {
  Result.value = Result.value.slice(0, -1);
}
function calculat() {
  try {
    Result.value = eval(Result.value);
  } catch (error) {
    Result.value = "error";
  }
}
