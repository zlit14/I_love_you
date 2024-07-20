document.addEventListener('DOMContentLoaded', function() {
    const countdown = () => {
        const now = new Date().getTime();
        const eventDate = new Date('2024-07-15T00:00:00').getTime();
        const currentTime = eventDate - now;

        const seconds = Math.floor((currentTime / 1000) % 60);
        const minutes = Math.floor((currentTime / 1000 / 60) % 60);
        const hours = Math.floor((currentTime / (1000 * 60 * 60)) % 24);
        const days = Math.floor(currentTime / (1000 * 60 * 60 * 24));

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    };

    setInterval(countdown, 1000);
    countdown();
});


// script.js

function updateCountdown() {
    const targetDate = new Date('2024-07-20T23:45:00');
    const now = new Date();
    const totalDuration = targetDate - now;

    const days = Math.floor(totalDuration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((totalDuration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalDuration % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Calculate the percentage of time passed
    const startTime = new Date('2024-07-20T23:45:00');
    const endTime = new Date('2024-07-21T23:45:00');
    const totalTime = endTime - startTime;
    const elapsedTime = now - startTime;
    const percentage = (elapsedTime / totalTime) * 100;

    // Update progress bar and percentage text
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percentage}%`;

    const percentageText = document.getElementById('percentage');
    percentageText.textContent = percentage.toFixed(2);

    if (totalDuration < 0) {
        clearInterval(interval);
    }
}

// Initial call to updateCountdown
updateCountdown();
// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
