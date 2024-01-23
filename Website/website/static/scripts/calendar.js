function generateBiWeeklyDates(startDate, endDate) {
    let dates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 14));
    }

    return dates;
}

function formatLocalDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

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
                title: 'Plainsboro Public Library',
                daysOfWeek: [1], // Monday
                startTime: '16:00', // 4 PM
                endTime: '17:00', // 5 PM
                startRecur: '2023-01-01',
                endRecur: '2026-01-01',
            },
            {
                title: 'West Windsor Library',
                daysOfWeek: [3], // Wednesday
                startTime: '16:00', // 4 PM
                endTime: '17:00', // 5 PM
                startRecur: '2023-01-01',
                endRecur: '2026-01-01',
            },
            ...generateBiWeeklyDates(new Date('2023-01-14'), new Date('2026-01-01')).map(date => ({
                title: 'Cranbury Public Library',
                start: formatLocalDate(date) + 'T15:30:00', // 3:30 PM
                end: formatLocalDate(date) + 'T16:30:00', // 4:30 PM
            })),
            ...generateBiWeeklyDates(new Date('2023-01-11'), new Date('2026-01-01')).map(date => ({
                title: 'Howard\'s Healthy Choices',
                start: formatLocalDate(date) + 'T16:00:00', // 4 PM
                end: formatLocalDate(date) + 'T17:00:00', // 5 PM
            }))
        ]
    });

    calendar.render();
});
