//https://www.codewars.com/kata/570564e838428f2eca001d73
// function chuckPushUps(string) {
//   let count = string.match(/1|0/g);
//   console.log(count);
//   return typeof string !== "string" ? "FAIL!!" : count.length ? parseInt(count.join("")) : "CHUCK SMASH!!";
// }

// console.lchuckPushUps("hwo are we doin today");

//Calculate the sum of the product of values at even indexes and the value at the last index
const evenLast = (n) =>
  n.reduce((a, c, i) => (i % 2 ? a : a + c * n[n.length - 1]), 0);

//console.table([2, 3, 4, 5]);

// Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

//Not the best way to solve this at all, just having fun
function score(dice) {
  let points = 0;
  const sides = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < sides.length; i++) {
    let side = sides[i];
    let regex = new RegExp(side + "{3}");
    let match = dice.sort().join("").match(regex);
    if (match) {
      if (side === 1) points += 1000;
      else points += side * 100;

      dice = dice
        .sort()
        .join("")
        .replace(regex, "")
        .split("")
        .map((num) => Number(num));
      break;
    }
  }

  dice.forEach((s) => {
    if (s === 1) points += 100;
    if (s === 5) points += 50;
  });

  return points;
}

//Sexieer solution
// function score(dice) {
//   var v = {
//     111: 1000,
//     222: 200,
//     333: 300,
//     444: 400,
//     555: 500,
//     666: 600,
//     1: 100,
//     5: 50,
//   };

//   var s =
//     dice
//       .sort()
//       .join("")
//       .match(/(([1-6])\2\2)|(1|5)/g) || [];
//   return s.reduce(function (a, e) {
//     return a + v[e];
//   }, 0);
// }

//Worst way to do it but I'm just playing here bros
function datingRange(age) {
  return age > 14
    ? Math.floor(age / 2 + 7) + "-" + Math.floor((age - 7) * 2)
    : Math.floor(age - 0.1 * age) + "-" + Math.floor(age + 0.1 * age);
}

// console.log(score([2, 4, 5, 4, 4]));
// console.log(score([2, 3, 4, 6, 2]));
// console.log(datingRange(12));

class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return (this.firstName + " " + this.lastName).trim();
  }
}

const toFreud = (string) => {
  return string.length
    ? string
        .split(" ")
        .map((word) => "sex")
        .join(" ")
    : string;
};

Array.prototype.even = function () {
  return this.filter((val) => Number.isInteger(val) && val % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((val) => Number.isInteger(val) && val % 2);
};

Array.prototype.under = function (x) {
  return this.filter((val) => Number.isInteger(val) && val < x);
};

Array.prototype.over = function (x) {
  return this.filter((val) => Number.isInteger(val) && val > x);
};

Array.prototype.inRange = function (min, max) {
  return this.filter(
    (val) => Number.isInteger(val) && val >= min && val <= max
  );
};

<svg
  class="canvas"
  viewBox="0 0 1920 1080"
  preserveAspectRatio="xMaxYMid slice"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:svgjs="http://svgjs.com/svgjs"
>
  <rect width="1920" height="1080" fill="hsl(179, 65%, 15%)"></rect>
  <defs>
    <linearGradient x1="0.5" y1="0" x2="0" y2="1" id="SvgjsLinearGradient1231">
      <stop stop-color="#28518a" offset="0"></stop>
      <stop stop-color="#0e0614" offset="0.1"></stop>
    </linearGradient>
    <linearGradient x1="0.5" y1="0" x2="0" y2="1" id="SvgjsLinearGradient1232">
      <stop stop-color="#28658a" offset="0"></stop>
      <stop stop-color="#0b0614" offset="0.22857142857142856"></stop>
    </linearGradient>
    <linearGradient x1="0.5" y1="0" x2="0" y2="1" id="SvgjsLinearGradient1233">
      <stop stop-color="#28788a" offset="0"></stop>
      <stop stop-color="#080614" offset="0.3571428571428571"></stop>
    </linearGradient>
    <linearGradient x1="0.5" y1="0" x2="0" y2="1" id="SvgjsLinearGradient1234">
      <stop stop-color="#c0f2f1" offset="0"></stop>
      <stop stop-color="#4244d7" offset="0.48571428571428565"></stop>
    </linearGradient>
    <linearGradient x1="0.5" y1="0" x2="0" y2="1" id="SvgjsLinearGradient1235">
      <stop stop-color="#c0e8f2" offset="0"></stop>
      <stop stop-color="#5d42d7" offset="0.6142857142857142"></stop>
    </linearGradient>
    <linearGradient x1="0.5" y1="0" x2="0" y2="1" id="SvgjsLinearGradient1236">
      <stop stop-color="#c0dff2" offset="0"></stop>
      <stop stop-color="#7b42d7" offset="0.7428571428571429"></stop>
    </linearGradient>
    <linearGradient x1="0.5" y1="0" x2="0" y2="1" id="SvgjsLinearGradient1237">
      <stop stop-color="#c0d5f2" offset="0"></stop>
      <stop stop-color="#9942d7" offset="0.8714285714285713"></stop>
    </linearGradient>
  </defs>
  <path
    d="M0,-553.2169523162472C88.52729114442793,-529.4674845034716,362.4520768416944,-465.6447443127377,531.1637468665676,-410.7201454395935C699.8754168914409,-355.79554656644933,860.1872488812272,-268.5183105249024,1012.2700201492391,-223.66935907738207C1164.3527914172512,-178.8204076298617,1292.3720444995126,-176.7018378813272,1443.6603744746394,-141.6264367544714C1594.9487044497662,-106.55103562761559,1840.61006241244,-34.618533055951254,1920,-13.216952316247223L 1920 1080 L 0 1080 Z"
    fill="url(#SvgjsLinearGradient1231)"
  ></path>
  <path
    d="M0,-398.1201815656017C64.87549563719466,-376.72240424904567,266.6169119833753,-300.72849781177763,389.25297382316796,-269.7335176662657C511.8890356629606,-238.73853752075374,615.9594595447782,-252.91417478710122,735.816371038756,-212.15030069252998C855.6732825327338,-171.38642659795875,967.5606490956465,-66.16697614645733,1108.3944427870351,-25.150273098838277C1249.2282364784237,15.866429948780777,1445.5515403182603,3.7306166233591718,1580.8191331870878,33.949917593184324C1716.0867260559153,64.16921856300948,1863.4698555311813,135.79626353229125,1920,156.16553272011262L 1920 1080 L 0 1080 Z"
    fill="url(#SvgjsLinearGradient1232)"
  ></path>
  <path
    d="M0,-327.51278053953047C53.95484270177163,-320.52320623481666,213.34734068028888,-312.72345818301085,323.7290562106298,-285.5753347112477C434.1107717409707,-258.42721123948456,550.1028179560853,-204.10112174911552,662.2902931820454,-164.6240397089516C774.4777684080054,-125.1469576687877,891.1811850053168,-83.97492599667285,996.8539075663898,-48.7128424702642C1102.5266301274628,-13.450758943855547,1200.07116737969,18.155579204783553,1296.326628548483,46.94846144950028C1392.5820897172762,75.74134369421701,1470.4411126705625,91.69275323430318,1574.3866745791486,124.04445099803615C1678.3322364877347,156.39614876176913,1862.3977790965248,221.55628185958778,1920,241.05864803189812L 1920 1080 L 0 1080 Z"
    fill="url(#SvgjsLinearGradient1233)"
  ></path>
  <path
    d="M0,-151.92832012288133C52.05521102754586,-144.25978267054103,219.38583026933918,-137.58103707497708,312.33126616527517,-105.91709540883951C405.27670206121115,-74.25315374270195,474.6035701108832,0.4300861087612944,557.672615375616,38.05532987394403C640.7416606403489,75.68057363912678,726.6130724426965,97.8543543187286,810.7455377536724,119.83436718225693C894.8780030646482,141.81438004578524,965.951475056759,149.2652620478413,1062.4674072414712,169.93540705511398C1158.9833394261834,190.60555206238666,1288.9921101738018,207.1270578895888,1389.8411308619454,243.85523722589298C1490.690151550089,280.58341656219716,1579.201719847324,359.1255521548777,1667.5615313703331,390.30448307293915C1755.9213428933422,421.4834139910006,1877.9269218950556,424.1580994573745,1920,430.92882273426153L 1920 1080 L 0 1080 Z"
    fill="url(#SvgjsLinearGradient1234)"
  ></path>
  <path
    d="M0,-6.524146435985827C56.769651752302444,12.189336947292638,236.93148093465703,65.81900364139204,340.61791051381465,105.75675386368496C444.30434009297227,145.69450408597788,525.0797973230129,210.69384118128116,622.1185774749458,233.10235489777168C719.1573576268787,255.5108686142622,807.9080863770988,212.7415872047367,922.850591425412,240.2078361626281C1037.7930964737252,267.6740851205195,1190.950712689964,358.9488988102184,1311.7736077648246,397.8998486451201C1432.5965028396854,436.85079848002175,1546.416896502047,441.7937248284129,1647.7879618745762,473.9135351720381C1749.1590272471055,506.0333455156633,1874.631326979096,571.1678481177325,1920,590.6187107068714L 1920 1080 L 0 1080 Z"
    fill="url(#SvgjsLinearGradient1235)"
  ></path>
  <path
    d="M0,102.11419311605783C76.59643665623001,118.42721025461417,289.7996648202794,154.82977269019372,459.57861993738004,199.9922959473958C629.3575750544807,245.15481920459789,852.4372426851819,313.7020087123485,1018.6737307026036,373.0893326592704C1184.9102187200253,432.47665660619225,1306.776503159011,499.57400098136725,1456.9975480419105,556.3162396289271C1607.2185929248099,613.0584782764869,1842.8329246736516,687.3383437253456,1920,713.5427645446292L 1920 1080 L 0 1080 Z"
    fill="url(#SvgjsLinearGradient1236)"
  ></path>
  <path
    d="M0,251.71594688258C48.645904171718286,272.7491238151491,185.257021167497,340.3767558274243,291.8754250303097,377.9150084779949C398.49382889312244,415.4532611285655,530.7709987142067,449.68048112745663,639.7104231768762,476.9454627860035C748.6498476395458,504.2104444445503,845.2880621580199,517.117324211596,945.5119718063268,541.5048984292758C1045.7358814546337,565.8924726469556,1133.9310629560764,581.7976151567989,1241.0538810667174,623.2709080920825C1348.1766991773584,664.7442010273662,1475.0911939812922,747.984768623514,1588.2488804701727,790.3446560409778C1701.4065669590532,832.7045434584417,1864.708146745029,862.9159698375511,1920,877.4302325968657L 1920 1080 L 0 1080 Z"
    fill="url(#SvgjsLinearGradient1237)"
  ></path>
</svg>;
