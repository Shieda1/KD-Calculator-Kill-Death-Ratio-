// https://www.omnicalculator.com/other/kd

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const KDratioRadio = document.getElementById('KDratioRadio');
const killsRadio = document.getElementById('killsRadio');
const deathsRadio = document.getElementById('deathsRadio');

let KDratio;
let kills = v1;
let deaths = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

KDratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Kills';
  variable2.textContent = 'Deaths';
  kills = v1;
  deaths = v2;
  result.textContent = '';
});

killsRadio.addEventListener('click', function() {
  variable1.textContent = 'KD ratio';
  variable2.textContent = 'Deaths';
  KDratio = v1;
  deaths = v2;
  result.textContent = '';
});

deathsRadio.addEventListener('click', function() {
  variable1.textContent = 'KD ratio';
  variable2.textContent = 'Kills';
  KDratio = v1;
  kills = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(KDratioRadio.checked)
    result.textContent = `KD ratio = ${computeKDratio().toFixed(2)}`;

  else if(killsRadio.checked)
    result.textContent = `Kills = ${computekills().toFixed(2)}`;

  else if(deathsRadio.checked)
    result.textContent = `Deaths = ${computedeaths().toFixed(2)}`;
})

// calculation

function computeKDratio() {
  return Number(kills.value) / Number(deaths.value);
}

function computekills() {
  return Number(KDratio.value) * Number(deaths.value);
}

function computedeaths() {
  return Number(kills.value) / Number(KDratio.value);
}