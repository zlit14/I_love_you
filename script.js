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
