var inputElement = document.querySelector('input');
var outputElement = document.querySelector('.date-output');

function parseDateInputValue(stringValue) {
  var day = stringValue.substr(0, 2);
  var month = stringValue.substr(3, 2);
  var year = stringValue.substr(6, 4);
  var hours = stringValue.substr(11, 2);
  var minutes = stringValue.substr(14, 2);

  return new Date(year, month - 1, day, hours, minutes);
}

inputElement.addEventListener('keyup', function() {
  var dateInstance = parseDateInputValue(this.value);
  outputElement.textContent = dateInstance.toString();
});