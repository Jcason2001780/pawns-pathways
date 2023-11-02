document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        displayEventEnd: true,
        events: [
            {
                title: 'Placeholder Event',
                start: '2023-10-31'
            },
            {
                title: 'Placeholder Event',
                start: '2023-11-01T16:00:00'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2023-11-03T16:00:00',
                end: '2023-11-03T17:00:00'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2023-11-04T16:00:00'
            }
        ]
    });

    calendar.render();
});
