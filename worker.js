let countdown;
let timeRemaining = 0;

self.onmessage = function (e) {
    if (e.data.command === "start") {
        timeRemaining = e.data.time;
        countdown = setInterval(() => {
            timeRemaining--;
            self.postMessage({ timeRemaining });

            if (timeRemaining <= 0) {
                clearInterval(countdown);
                self.postMessage({ timeRemaining: 0, done: true });
            }
        }, 1000);
    } else if (e.data.command === "stop") {
        clearInterval(countdown);
    }
};
