import { useState, useEffect } from "react";

export default function App() {
  const now = new Date();
  const scheduledTime = new Date(2022, 0, 1, 0, 0, 0);
  const [TimeDiffer, setTimeDiffer] = useState(scheduledTime - new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDiffer(TimeDiffer - 1000);
    }, 1000);
    return () => clearInterval(interval);
  });

  const time = TimeDiffer / 1000;
  const dayLeft = Math.floor(time / 60 / 60 / 24);
  const hourLeft = Math.floor((time / 60 / 60) % 24);
  const minLeft = Math.floor((time / 60) % 60);
  const secLeft = Math.floor(time % 60);

  return (
    <div className="App">
      <h2>
        Current time : {now.getFullYear()} / {now.getMonth() + 1} /{" "}
        {now.getDate()} - {now.getHours()} : {now.getMinutes()} :{" "}
        {now.getSeconds()}
      </h2>
      <h2>
        Scheduled time : {scheduledTime.getFullYear()} /{" "}
        {scheduledTime.getMonth() + 1} / {scheduledTime.getDate()} -{" "}
        {scheduledTime.getHours()} : {scheduledTime.getMinutes()} :{" "}
        {scheduledTime.getSeconds()}
      </h2>
      <h2>
        Time Left: {dayLeft} - {hourLeft} : {minLeft} : {secLeft}
      </h2>
    </div>
  );
}
