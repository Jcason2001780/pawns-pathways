function generateBiWeeklyDates(startDate, endDate) {
    let dates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 14); // Add 14 days for bi-weekly interval
    }

    return dates;
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
                title: 'Plainsboro Library',
                daysOfWeek: [1], // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
                startRecur: '2023-01-01',
                endRecur: '2026-01-01',
            },
            {
                title: 'Cranbury Library',
                daysOfWeek: [1], // Monday
                startRecur: '2023-01-01',
                endRecur: '2026-01-01',
            },
            {
                title: 'Windsor Library',
                daysOfWeek: [3], // Wednesday
                startRecur: '2023-01-01',
                endRecur: '2026-01-01',
            },
            ...generateBiWeeklyDates(new Date('2023-01-03'), new Date('2026-01-01')).map(date => ({ // Bi-Weekly Tuesday
                title: 'Trenton Library',
                start: date.toISOString().split('T')[0]
            }))
        ]
    });

    calendar.render();
});
