#!/usr/bin/env node
let iReport = 0
let speed = 1
let lastLine = ''

const log =
  typeof document === 'undefined'
    ? s => {
        let space = lastLine.length - s.length
        space = space > 0 ? ' '.repeat(space) : ''
        process.stdout.write('\r' + s + space)
        lastLine = s
      }
    : s => (document.body.innerHTML = s)
const end =
  typeof document === 'undefined'
    ? () => process.stdout.write('\nend\n')
    : () => ((document.body.innerHTML += '<br>end'), document.close())
const int = x => Math.round(x).toLocaleString()
const float = x => x.toFixed(2)

function tick() {
  iReport++
  const startTime = performance.now()
  for (let i = 0; i < speed; i++) {}
  const endTime = performance.now()
  const time = (endTime - startTime) / 1000
  let averageSpeed = speed / time
  const closeEnough = Math.abs(time - 1) <= 0.02
  if (time > 1) {
    speed = speed * 0.5
  } else if (time < 1) {
    speed = speed * 1.5
  }
  averageSpeed = speed / time
  log(
    `[${iReport}] ${int(averageSpeed)} ops/sec (${int(speed)} ops / ${float(
      time,
    )} sec)`,
  )
  if (closeEnough) {
    end()
  } else {
    setTimeout(tick)
  }
}
setTimeout(tick)
