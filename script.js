function reset() {
  window.location.reload();
}

function calculate() {
  let birthdate = new Date(document.getElementById("dateofbirth").value);

  let now = new Date();
  let ageInMs = now.getTime() - birthdate.getTime();

  let ageInSec = ageInMs / 1000;
  let ageInMin = ageInSec / 60;
  let ageInHrs = ageInMin / 60;
  let ageInDays = ageInHrs / 24;
  let ageInMnts = ageInDays / 30.4;
  let ageInYears = ageInMnts / 12;

  document.querySelector("#years").innerHTML = Math.floor(ageInYears);
  document.querySelector("#months").innerHTML = Math.floor(ageInMnts % 12);
  document.querySelector("#days").innerHTML = Math.floor(ageInDays % 30.4);
  document.querySelector("#hours").innerHTML = Math.floor(ageInHrs % 24);
  document.querySelector("#minutes").innerHTML = Math.floor(ageInMin % 60);
  document.querySelector("#seconds").innerHTML = Math.floor(ageInSec % 60);
}
