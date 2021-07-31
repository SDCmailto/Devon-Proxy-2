//GET @ 1 RPS

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 1,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  let rndId = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
  const BASE_URL = `http://localhost:3000/dp/${rndId}`;
  http.get(`${BASE_URL}`);
}

Mac-mini:Devon-Proxy-2 DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 1.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/100 VUs, 30 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  1 iters/s

     data_received..................: 58 kB  1.9 kB/s
     data_sent......................: 2.7 kB 90 B/s
     http_req_blocked...............: avg=200.36µs min=148µs  med=173.5µs max=590µs   p(90)=267µs   p(95)=305.34µs
     http_req_connecting............: avg=145.16µs min=117µs  med=134µs   max=235µs   p(90)=205.9µs p(95)=218.95µs
     http_req_duration..............: avg=2.24ms   min=1.49ms med=1.81ms  max=13.21ms p(90)=2.4ms   p(95)=2.73ms
       { expected_response:true }...: avg=2.24ms   min=1.49ms med=1.81ms  max=13.21ms p(90)=2.4ms   p(95)=2.73ms
     http_req_failed................: 0.00%  ✓ 0        ✗ 30
     http_req_receiving.............: avg=41.1µs   min=30µs   med=38µs    max=75µs    p(90)=52.1µs  p(95)=57.39µs
     http_req_sending...............: avg=45.06µs  min=29µs   med=38µs    max=135µs   p(90)=58µs    p(95)=93.39µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=2.15ms   min=1.42ms med=1.71ms  max=13.09ms p(90)=2.23ms  p(95)=2.63ms
     http_reqs......................: 30     0.999994/s
     iteration_duration.............: avg=2.62ms   min=1.83ms med=2.18ms  max=14.06ms p(90)=2.84ms  p(95)=3.15ms
     iterations.....................: 30     0.999994/s
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100

  // GET @ 10 RPS

  export let options = {
    scenarios: {
      constant_request_rate: {
        executor: "constant-arrival-rate",
        rate: 10,
        timeUnit: "1s",
        duration: "30s",
        preAllocatedVUs: 100,
        maxVUs: 200,
      },
    },
  };
  export default function () {
    let rndId = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
    const BASE_URL = `http://localhost:3000/dp/${rndId}`;
    http.get(`${BASE_URL}`);
  }

  Mac-mini:Devon-Proxy-2 DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 10.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/100 VUs, 300 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  10 iters/s

     data_received..................: 583 kB 19 kB/s
     data_sent......................: 27 kB  900 B/s
     http_req_blocked...............: avg=186.6µs  min=133µs  med=169µs  max=1.12ms  p(90)=224µs  p(95)=282.04µs
     http_req_connecting............: avg=140.23µs min=88µs   med=126µs  max=1.07ms  p(90)=167µs  p(95)=216.05µs
     http_req_duration..............: avg=1.63ms   min=1.09ms med=1.42ms max=11.66ms p(90)=2.07ms p(95)=2.42ms
       { expected_response:true }...: avg=1.63ms   min=1.09ms med=1.42ms max=11.66ms p(90)=2.07ms p(95)=2.42ms
     http_req_failed................: 0.00%  ✓ 0        ✗ 300
     http_req_receiving.............: avg=45.76µs  min=27µs   med=39µs   max=459µs   p(90)=57.1µs p(95)=86.05µs
     http_req_sending...............: avg=45.51µs  min=27µs   med=43µs   max=166µs   p(90)=59.1µs p(95)=64.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=1.54ms   min=1ms    med=1.33ms max=11.52ms p(90)=1.98ms p(95)=2.24ms
     http_reqs......................: 300    9.999978/s
     iteration_duration.............: avg=1.93ms   min=1.32ms med=1.73ms max=12.49ms p(90)=2.4ms  p(95)=2.75ms
     iterations.....................: 300    9.999978/s
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100

// GET @ 100 RPS

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 100,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  let rndId = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
  const BASE_URL = `http://localhost:3000/dp/${rndId}`;
  http.get(`${BASE_URL}`);
}

Mac-mini:Devon-Proxy-2 DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 100.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/100 VUs, 3001 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  100 iters/s

     data_received..................: 5.8 MB 194 kB/s
     data_sent......................: 270 kB 9.0 kB/s
     http_req_blocked...............: avg=9.19µs  min=2µs     med=4µs    max=590µs   p(90)=5µs    p(95)=13µs
     http_req_connecting............: avg=3.81µs  min=0s      med=0s     max=221µs   p(90)=0s     p(95)=0s
     http_req_duration..............: avg=1.37ms  min=632µs   med=1.34ms max=11.91ms p(90)=1.86ms p(95)=1.99ms
       { expected_response:true }...: avg=1.37ms  min=632µs   med=1.34ms max=11.91ms p(90)=1.86ms p(95)=1.99ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 3001
     http_req_receiving.............: avg=48.64µs min=20µs    med=46µs   max=441µs   p(90)=70µs   p(95)=82µs
     http_req_sending...............: avg=18.44µs min=7µs     med=17µs   max=74µs    p(90)=25µs   p(95)=32µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=1.31ms  min=596µs   med=1.27ms max=11.78ms p(90)=1.77ms p(95)=1.9ms
     http_reqs......................: 3001   100.031669/s
     iteration_duration.............: avg=1.49ms  min=687.7µs med=1.47ms max=12.73ms p(90)=2.01ms p(95)=2.14ms
     iterations.....................: 3001   100.031669/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100

// GET @ 1000 RPS

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 1000,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  let rndId = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
  const BASE_URL = `http://localhost:3000/dp/${rndId}`;
  http.get(`${BASE_URL}`);
}

Mac-mini:Devon-Proxy-2 DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 1000.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/129 VUs, 29972 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/129 VUs  30s  1000 iters/s

     data_received..................: 58 MB  1.9 MB/s
     data_sent......................: 2.7 MB 90 kB/s
     dropped_iterations.............: 29     0.966546/s
     http_req_blocked...............: avg=2.31µs  min=1µs     med=2µs      max=608µs    p(90)=2µs    p(95)=3µs
     http_req_connecting............: avg=306ns   min=0s      med=0s       max=162µs    p(90)=0s     p(95)=0s
     http_req_duration..............: avg=2.89ms  min=393µs   med=463µs    max=170.39ms p(90)=1.16ms p(95)=3.03ms
       { expected_response:true }...: avg=2.89ms  min=393µs   med=463µs    max=170.39ms p(90)=1.16ms p(95)=3.03ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 29972
     http_req_receiving.............: avg=30.39µs min=11µs    med=21µs     max=25.95ms  p(90)=29µs   p(95)=35µs
     http_req_sending...............: avg=8.36µs  min=4µs     med=8µs      max=212µs    p(90)=10µs   p(95)=11µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s       max=0s       p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=2.85ms  min=367µs   med=432µs    max=170.33ms p(90)=1.13ms p(95)=2.97ms
     http_reqs......................: 29972  998.942232/s
     iteration_duration.............: avg=2.94ms  min=423.4µs med=507.05µs max=170.66ms p(90)=1.21ms p(95)=3.09ms
     iterations.....................: 29972  998.942232/s
     vus............................: 129    min=129      max=129
     vus_max........................: 129    min=129      max=129

// POST @ 1 RPS

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 1,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  const BASE_URL = 'http://localhost:3000/images';
  let rndPic = Math.floor(Math.random() * 1001);
  let imgUrl = `https://picsum.photos/id/${rndPic}/200/300`;
  http.post(`${BASE_URL}`, JSON.stringify({'images': [imgUrl]}), { headers: { 'Content-Type': 'application/json' } });
}

Mac-mini:Devon-Proxy-2 DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 1.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/100 VUs, 31 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  1 iters/s

     data_received..................: 60 kB  2.0 kB/s
     data_sent......................: 5.9 kB 196 B/s
     http_req_blocked...............: avg=196.38µs min=148µs  med=170µs  max=718µs   p(90)=211µs  p(95)=249µs
     http_req_connecting............: avg=138.9µs  min=112µs  med=128µs  max=223µs   p(90)=161µs  p(95)=168.5µs
     http_req_duration..............: avg=2.01ms   min=1.32ms med=1.61ms max=10.96ms p(90)=2.16ms p(95)=2.48ms
       { expected_response:true }...: avg=2.01ms   min=1.32ms med=1.61ms max=10.96ms p(90)=2.16ms p(95)=2.48ms
     http_req_failed................: 0.00%  ✓ 0       ✗ 31
     http_req_receiving.............: avg=41.87µs  min=30µs   med=37µs   max=81µs    p(90)=58µs   p(95)=68µs
     http_req_sending...............: avg=49.22µs  min=33µs   med=44µs   max=88µs    p(90)=77µs   p(95)=84µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=1.92ms   min=1.25ms med=1.53ms max=10.79ms p(90)=2.08ms p(95)=2.39ms
     http_reqs......................: 31     1.03326/s
     iteration_duration.............: avg=2.44ms   min=1.68ms med=2.04ms max=11.99ms p(90)=2.58ms p(95)=2.89ms
     iterations.....................: 31     1.03326/s
     vus............................: 100    min=100   max=100
     vus_max........................: 100    min=100   max=100

// POST @ 10 RPS

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  const BASE_URL = 'http://localhost:3000/images';
  let rndPic = Math.floor(Math.random() * 1001);
  let imgUrl = `https://picsum.photos/id/${rndPic}/200/300`;
  http.post(`${BASE_URL}`, JSON.stringify({'images': [imgUrl]}), { headers: { 'Content-Type': 'application/json' } });
}

Mac-mini:Devon-Proxy-2 DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 10.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/100 VUs, 300 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  10 iters/s

     data_received..................: 583 kB 19 kB/s
     data_sent......................: 57 kB  1.9 kB/s
     http_req_blocked...............: avg=255.32µs min=150µs  med=229µs  max=1.1ms   p(90)=358.2µs p(95)=404µs
     http_req_connecting............: avg=195.13µs min=115µs  med=172µs  max=499µs   p(90)=279.4µs p(95)=319.5µs
     http_req_duration..............: avg=1.68ms   min=1.02ms med=1.51ms max=11.32ms p(90)=2.19ms  p(95)=2.53ms
       { expected_response:true }...: avg=1.68ms   min=1.02ms med=1.51ms max=11.32ms p(90)=2.19ms  p(95)=2.53ms
     http_req_failed................: 0.00%  ✓ 0        ✗ 300
     http_req_receiving.............: avg=52.86µs  min=28µs   med=48µs   max=209µs   p(90)=75µs    p(95)=92.15µs
     http_req_sending...............: avg=66.95µs  min=35µs   med=62µs   max=172µs   p(90)=92.1µs  p(95)=109.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=1.56ms   min=907µs  med=1.4ms  max=11.17ms p(90)=2.06ms  p(95)=2.42ms
     http_reqs......................: 300    9.999968/s
     iteration_duration.............: avg=2.14ms   min=1.31ms med=2.01ms max=12.75ms p(90)=2.74ms  p(95)=3.04ms
     iterations.....................: 300    9.999968/s
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100

// POST @ 100 RPS

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 100,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  const BASE_URL = 'http://localhost:3000/images';
  let rndPic = Math.floor(Math.random() * 1001);
  let imgUrl = `https://picsum.photos/id/${rndPic}/200/300`;
  http.post(`${BASE_URL}`, JSON.stringify({'images': [imgUrl]}), { headers: { 'Content-Type': 'application/json' } });
}

Mac-mini:Devon-Proxy-2 DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 100.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/100 VUs, 3001 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  100 iters/s

     data_received..................: 5.8 MB 194 kB/s
     data_sent......................: 570 kB 19 kB/s
     http_req_blocked...............: avg=13.01µs min=2µs      med=4µs    max=4.95ms  p(90)=6µs    p(95)=11µs
     http_req_connecting............: avg=6.75µs  min=0s       med=0s     max=4.87ms  p(90)=0s     p(95)=0s
     http_req_duration..............: avg=1.41ms  min=533µs    med=1.45ms max=11.51ms p(90)=1.71ms p(95)=1.87ms
       { expected_response:true }...: avg=1.41ms  min=533µs    med=1.45ms max=11.51ms p(90)=1.71ms p(95)=1.87ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 3001
     http_req_receiving.............: avg=55.33µs min=20µs     med=53µs   max=251µs   p(90)=73µs   p(95)=85µs
     http_req_sending...............: avg=27.22µs min=10µs     med=27µs   max=548µs   p(90)=34µs   p(95)=42µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=1.33ms  min=494µs    med=1.36ms max=11.43ms p(90)=1.61ms p(95)=1.78ms
     http_reqs......................: 3001   100.023888/s
     iteration_duration.............: avg=1.59ms  min=593.05µs med=1.62ms max=11.82ms p(90)=1.91ms p(95)=2.14ms
     iterations.....................: 3001   100.023888/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100

// POST @ 1000 RPS

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 1000,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  const BASE_URL = 'http://localhost:3000/images';
  let rndPic = Math.floor(Math.random() * 1001);
  let imgUrl = `https://picsum.photos/id/${rndPic}/200/300`;
  http.post(`${BASE_URL}`, JSON.stringify({'images': [imgUrl]}), { headers: { 'Content-Type': 'application/json' } });
}

Mac-mini:Devon-Proxy-2 DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 1000.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/117 VUs, 29984 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/117 VUs  30s  1000 iters/s

     data_received..................: 58 MB  1.9 MB/s
     data_sent......................: 5.7 MB 190 kB/s
     dropped_iterations.............: 17     0.566664/s
     http_req_blocked...............: avg=2.34µs  min=1µs      med=2µs     max=715µs    p(90)=3µs      p(95)=3µs
     http_req_connecting............: avg=268ns   min=0s       med=0s      max=272µs    p(90)=0s       p(95)=0s
     http_req_duration..............: avg=2.29ms  min=352µs    med=412µs   max=158.79ms p(90)=811.7µs  p(95)=2.27ms
       { expected_response:true }...: avg=2.29ms  min=352µs    med=412µs   max=158.79ms p(90)=811.7µs  p(95)=2.27ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 29984
     http_req_receiving.............: avg=29.71µs min=11µs     med=21µs    max=29.2ms   p(90)=28µs     p(95)=35µs
     http_req_sending...............: avg=10.3µs  min=6µs      med=10µs    max=262µs    p(90)=12µs     p(95)=14µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=2.25ms  min=329µs    med=381µs   max=158.73ms p(90)=771.7µs  p(95)=2.23ms
     http_reqs......................: 29984  999.462269/s
     iteration_duration.............: avg=2.35ms  min=392.98µs med=469.1µs max=159.09ms p(90)=877.46µs p(95)=2.35ms
     iterations.....................: 29984  999.462269/s
     vus............................: 117    min=117      max=117
     vus_max........................: 117    min=117      max=117