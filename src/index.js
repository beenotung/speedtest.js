let n = 1;
let iReport = 0;
let t1 = 0;
let t2 = 0;
const start = Date.now();

const log = (typeof document === 'undefined')
  ? s => process.stdout.write(s + '\n')
  : s => document.body.innerHTML += s + '<br>' // document.write(s + '<br>')
;
const end = (typeof document === 'undefined')
  ? () => process.exit(0)
  : () => document.close()
;
const format = x => typeof x === 'number' ? Math.round(x * 100) / 100 : x.toString();
const logs = xs => log(xs.map(format).join(' '));

function report() {
  iReport++;
  const t = Date.now() - start;
  const speed = n / t;
  logs([iReport, speed]);
  if (iReport > 30 || t > 1000 * 10) {
    logs(['end']);
    clearInterval(t1);
    clearInterval(t2);
    end();
  }
}

function loop() {
  for (let i = n; i > 0; i--) {
    n++;
  }
  report();
}

// t1 = setInterval(report);
t2 = setInterval(loop);
