// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// document.addEventListener('DOMContentLoaded', function () {
//   const dateTimePicker = document.getElementById('datetime-picker');
//   const startBtn = document.getElementById('start-btn');
//   let userSelectedDate;

//   const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//       userSelectedDate = selectedDates[0];
//       validateSelectedDate(userSelectedDate);
//     },
//   };

//   flatpickr(dateTimePicker, options);

//   function validateSelectedDate(selectedDate) {
//     const currentDate = new Date();
//     if (selectedDate <= currentDate) {
//       iziToast.error({
//         title: 'Error',
//         message: 'Please choose a date in the future',
//       });
//       startBtn.disabled = true;
//     } else {
//       startBtn.disabled = false;
//     }
//   }

//   startBtn.addEventListener('click', function () {
//     startBtn.disabled = true;
//     startCountdown(userSelectedDate);
//   });

//   function startCountdown(targetDate) {
//     const intervalId = setInterval(updateTimer, 1000);

//     function updateTimer() {
//       const timeRemaining = targetDate - new Date();

//       if (timeRemaining <= 0) {
//         clearInterval(intervalId);
//         displayTimerValues(0, 0, 0, 0);
//         iziToast.success({
//           title: 'Countdown Finished',
//           message: 'The countdown has reached zero.',
//         });
//         return;
//       }

//       const { days, hours, minutes, seconds } = convertMs(timeRemaining);
//       displayTimerValues(days, hours, minutes, seconds);
//     }
//   }

//   function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
//   }

//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//   function displayTimerValues(days, hours, minutes, seconds) {
//     document.querySelector('[data-days]').textContent = addLeadingZero(days);
//     document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
//     document.querySelector('[data-minutes]').textContent =
//       addLeadingZero(minutes);
//     document.querySelector('[data-seconds]').textContent =
//       addLeadingZero(seconds);
//   }

//   function addLeadingZero(value) {
//     return value < 10 ? `0${value}` : value;
//   }
// });
