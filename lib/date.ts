export const fromToday = (day: string): string => {
  const now: any = new Date();
  const date: any = new Date(day);

  const timeDiff = now - date;
  const dayDiff = Math.round(timeDiff / (24 * 60 * 60 * 1000));

  if (dayDiff === 1) {
    return `${dayDiff} day ago`;
  } else if (dayDiff > 1) {
    return `${dayDiff} days ago`;
  }
  return `Today`;
};
