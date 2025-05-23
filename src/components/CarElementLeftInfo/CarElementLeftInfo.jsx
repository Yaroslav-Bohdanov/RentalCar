import toast, { Toaster } from "react-hot-toast";
import s from "./CarElementLeftInfo.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";

const CarElementLeftInfo = ({ img, brand }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, comment } = e.target.elements;
    const currentDate = new Date();

    if (!selectedDate || selectedDate < currentDate) {
      toast.error("Date must be in the future");
      return;
    }

    if (name.value.trim() === "") {
      toast.error("Name is required");
      return;
    }

    if (email.value.trim() === "") {
      toast.error("Email is required");
      return;
    }

    console.log(
      name.value,
      email.value,
      selectedDate.toISOString(),
      comment.value
    );
    toast.success("Booking successful");
  };

  const formatWeekDay = (nameOfDay) => {
    const days = {
      Sunday: "Sun",
      Monday: "Mon",
      Tuesday: "Tue",
      Wednesday: "Wed",
      Thursday: "Thu",
      Friday: "Fri",
      Saturday: "Sat",
    };
    return days[nameOfDay] || nameOfDay.slice(0, 3);
  };

  const customLocale = {
    ...enUS,
    options: {
      ...enUS.options,
      weekStartsOn: 1,
    },
  };

  return (
    <div className={s.left_info}>
      <div className={s.img_container}>
        <img src={img || "path/to/fallback-image.jpg"} alt={brand} />
      </div>
      <div className={s.form_container}>
        <h2 className={s.form_title}>Book your car now</h2>
        <p className={s.form_text}>
          Stay connected! We are always ready to help you.
        </p>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Name*"
            maxLength={30}
          />
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="Email*"
            maxLength={50}
          />
          <div className={s.date_wrapper}>
            <DatePicker
              className={`${s.input} ${s.date_input}`}
              wrapperClassName={s.datePickerWrapper}
              calendarClassName={s.datePickerCalendar}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Booking date"
              name="date"
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              formatWeekDay={formatWeekDay}
              weekStartsOn={1}
              locale={customLocale}
            />
          </div>
          <textarea
            className={s.textarea}
            name="comment"
            placeholder="Comment"
          />
          <button className={s.button} type="submit">
            Send
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default CarElementLeftInfo;
