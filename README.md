# speedtest.js

[![npm Package Version](https://img.shields.io/npm/v/@beenotung/speedtest.js.svg?maxAge=2592000)](https://www.npmjs.com/package/@beenotung/speedtest.js)

A JavaScript benchmark tool to measure runtime performance in operations per second.

- CLI tool via npx (Node.js)
- Browser benchmark at [speedtest.surge.sh](https://speedtest.surge.sh/)

## Usage

### CLI

```bash
# Directly run without installation
npx -y @beenotung/speedtest.js

# or install globally for repeated usage
npm install -g @beenotung/speedtest.js
speedtest.js
```

### Browser

Visit [speedtest.surge.sh](https://speedtest.surge.sh/)

## How it Works

The benchmark automatically calibrates and measures JavaScript performance:

1. Adjusts operation count to target 1-second intervals
2. Continues until reaching stable metrics (within 2% variance)
3. Reports performance in operations per second

Example output:

```
[1] 1,234,567 ops/sec (1,000,000 ops / 0.81 sec)
```

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
