export const formatDate = (date) => {
  return new Date(date).toLocaleTimeString("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatDuration = (duration) => {
  return Math.floor(duration / 60) + " hr " + duration % 60 + " min";
};