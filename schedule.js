document.addEventListener('DOMContentLoaded', function () {
    const scheduleDiv = document.getElementById('schedule');
    const requests = JSON.parse(localStorage.getItem('requests')) || [];

    if (requests.length === 0) {
        scheduleDiv.textContent = "No requests found.";
    } else {
        const ul = document.createElement('ul');
        requests.forEach(request => {
            const li = document.createElement('li');
            li.textContent = `Name: ${request.name}, Date and Time: ${request.datetime}, Number: ${request.number}, Scroll: ${request.scroll}`;
            ul.appendChild(li);
        });
        scheduleDiv.appendChild(ul);
    }
});
