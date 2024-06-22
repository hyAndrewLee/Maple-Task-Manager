import { useEffect, useRef, useState } from "react";
import {
  CountdownType,
  formatTime,
  getNextEventInfo,
  getUpcomingMidnight,
} from "../helpers/time";
import { UserData } from "../constants/defaults";
import { uncheckTasks } from "../helpers/dataOperations";

type CountdownProp = {
  endTime: Date;
  style: string;
  updateUserData: (updatedData: UserData) => void;
  userData: UserData;
  type: CountdownType;
  name?: string;
  eventStarting?: boolean;
};

type CountDownInfo = {
  remainingTime: string;
  countdownName: string;
  eventStarting: boolean;
};

const Countdown: React.FC<CountdownProp> = ({
  endTime,
  style,
  updateUserData,
  userData,
  type,
  name,
  eventStarting,
}) => {
  const [countdownInfo, setCountdownInfo] = useState<CountDownInfo>({
    remainingTime: formatTime(
      Math.abs(new Date().getTime() - endTime.getTime()),
      type
    ),
    countdownName: name ?? "Reset In",
    eventStarting: eventStarting ?? false,
  });

  const ref = useRef(endTime);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      let difference = new Date().getTime() - endTime.getTime();
      const shouldResetCountdown = difference >= 0;
      const absDifference = Math.abs(difference);
      const updatedCountdownInfo = structuredClone(countdownInfo);

      if (!shouldResetCountdown) {
        updatedCountdownInfo.remainingTime = formatTime(absDifference, type);
      }

      if (shouldResetCountdown) {
        if (type === "event") {
          const eventInfo = getNextEventInfo();
          ref.current = eventInfo.eventTime;
          const newEndTimeDifference = Math.abs(
            new Date().getTime() - ref.current.getTime()
          );

          updatedCountdownInfo.remainingTime = formatTime(
            newEndTimeDifference,
            type
          );
          updatedCountdownInfo.countdownName = eventInfo.eventName;
          updatedCountdownInfo.eventStarting = eventInfo.eventStarting ?? false;
        }

        if (type === "daily") {
          ref.current = getUpcomingMidnight();

          const newEndTimeDifference = Math.abs(
            new Date().getTime() - ref.current.getTime()
          );

          updatedCountdownInfo.remainingTime = formatTime(
            newEndTimeDifference,
            type
          );
          uncheckTasks(userData, updateUserData, false);
        }
      }
      setCountdownInfo(updatedCountdownInfo);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdownInfo, endTime, type, updateUserData, userData]);

  const eventHighlight = countdownInfo.eventStarting
    ? " border-green-400 shadow-[inset_0_0_12px_rgb(134,239,172)]"
    : null;
  const countdownName = countdownInfo.eventStarting
    ? "Starting In"
    : countdownInfo.countdownName;

  return (
    <div className={`${style} ${eventHighlight}`}>
      <div>{countdownName}</div>
      <div suppressHydrationWarning={true}>{countdownInfo.remainingTime}</div>
    </div>
  );
};

export default Countdown;
