function openTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
}

function convertMeterToCentimeter() {
  var meterInput = parseFloat(document.getElementById("meter-input").value);
  var centimeterResult = meterInput * 100;
  document.getElementById("meter-result").innerHTML = meterInput + " meters = " + centimeterResult + " centimeters";
}

function convertCentimeterToMeter() {
  var centimeterInput = parseFloat(document.getElementById("centimeter-input").value);
  var meterResult = centimeterInput / 100;
  document.getElementById("centimeter-result").innerHTML = centimeterInput + " centimeters = " + meterResult + " meters";
}
