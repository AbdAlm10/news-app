import { useMemo } from "react";

const useTimeAgo = (fullTime: string) => {
  return useMemo(() => {
    const articleDate: Date = new Date(fullTime);
    const currentDate: Date = new Date();
    const timeDifferenceMs: number =
      currentDate.getTime() - articleDate.getTime();

    const timeDifferenceMinutes: number = Math.floor(
      timeDifferenceMs / (1000 * 60)
    );
    const timeDifferenceHours: number = Math.floor(timeDifferenceMinutes / 60);
    const timeDifferenceDays: number = Math.floor(timeDifferenceHours / 24);
    const timeDifferenceMonths: number = Math.floor(timeDifferenceDays / 30); // Approximation

    if (timeDifferenceMinutes < 60) {
      return `${timeDifferenceMinutes}M ago`;
    } else if (timeDifferenceHours < 24) {
      return `${timeDifferenceHours}H ago`;
    } else if (timeDifferenceDays < 30) {
      return `${timeDifferenceDays}D ago`;
    } else {
      return `${timeDifferenceMonths}M ago`;
    }
  }, [fullTime]);
};

export default useTimeAgo;
