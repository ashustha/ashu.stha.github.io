$(document).ready(function () {
    let pastDates = true, availableDates = false, availableWeekDays = false

    let calendar = new VanillaCalendar({
        selector: "#myCalendar",
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortWeekday: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        onSelect: (data, elem) => {
            console.log(data, elem)
        }
    })

    let btnPastDates = document.querySelector('[name=pastDates]')
    btnPastDates.addEventListener('click', () => {
        pastDates = !pastDates
        calendar.set({ pastDates: pastDates })
        btnPastDates.innerText = `${(pastDates ? 'Disable' : 'Enable')} past dates`
    })

    let btnAvailableDates = document.querySelector('[name=availableDates]')
    btnAvailableDates.addEventListener('click', () => {
        availableDates = !availableDates
        btnAvailableDates.innerText = `${(availableDates ? 'Clear available dates' : 'Set available dates')}`
        if (!availableDates) {
            calendar.set({ availableDates: [], datesFilter: false })
            return
        }
        let dates = () => {
            let result = []
            for (let i = 1; i < 15; ++i) {
                if (i % 2) continue
                let date = new Date(new Date().getTime() + (60 * 60 * 24 * 1000) * i)
                result.push({ date: `${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, 0)}-${String(date.getDate()).padStart(2, 0)}` })
            }
            return result
        }
        calendar.set({ availableDates: dates(), availableWeekDays: [], datesFilter: true })
    })

    let btnAvailableWeekDays = document.querySelector('[name=availableWeekDays]')
    btnAvailableWeekDays.addEventListener('click', () => {
        availableWeekDays = !availableWeekDays
        btnAvailableWeekDays.innerText = `${(availableWeekDays ? 'Clear available weekdays' : 'Set available weekdays')}`
        if (!availableWeekDays) {
            calendar.set({ availableWeekDays: [], datesFilter: false })
            return
        }
        let days = [{
            day: 'monday'
        }, {
            day: 'tuesday'
        }, {
            day: 'wednesday'
        }, {
            day: 'friday'
        }]
        calendar.set({ availableWeekDays: days, availableDates: [], datesFilter: true })
    })

});