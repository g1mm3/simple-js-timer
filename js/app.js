let time = getNullDate();
let intervalTimerId = 0;

let App = {
    data() {
        return {
            isActive: false,
            timeString: time.toLocaleTimeString(),
            timestampsList: [],
        }
    },
    methods: {
        addItem() {
            this.timestampsList.push(time.toLocaleTimeString())
        },

        startTimer() {
            this.isActive = true;

            intervalTimerId = setInterval(() => {
                this.timeString = new Date(time.setSeconds(time.getSeconds() + 1)).toLocaleTimeString();
            }, 1000);
        },
        resetTimer() {
            time = getNullDate();
            this.timeString = time.toLocaleTimeString();
        },
        pauseTimer() {
            this.isActive = false;

            clearInterval(intervalTimerId);
        },
        endTimer() {
            this.isActive = false;

            clearInterval(intervalTimerId);

            time = getNullDate();
            this.timeString = time.toLocaleTimeString();
            intervalTimerId = undefined;
        },
    },
};

Vue.createApp(App).mount('#app');

function getNullDate()
{
    return new Date(1970, 1, 1, 0, 0, 0, 0);
}