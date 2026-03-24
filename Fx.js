let time = 3;
const timer = setInterval(() => {
time--;
if (time <= 0) {
clearInterval(timer);
window.location.href = "NA.html";
}
}, 1000);