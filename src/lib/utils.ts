import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTimeLeft = (
  dateString: string,
  matchDurationMinutes = 90
) => {
  const now = new Date();
  const start = new Date(dateString);
  const end = new Date(start.getTime() + matchDurationMinutes * 60 * 1000);

  const diffMs = start.getTime() - now.getTime();
  const diffUntilEndMs = end.getTime() - now.getTime();

  if (diffMs > 0) {
    // Match hasn't started yet
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    if (totalDays >= 1) {
      return `${totalDays} days`;
    }

    const remainingHours = totalHours % 24;
    const remainingMinutes = totalMinutes % 60;

    if (totalHours >= 1) {
      return `${remainingHours}h ${remainingMinutes}m`;
    }

    return `${totalMinutes}m`;
  }

  if (diffUntilEndMs > 0) {
    // Match is happening now
    return "Live";
  }

  // Match is over
  return "Completed";
};
