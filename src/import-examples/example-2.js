const getCurrentTime = () => {
  return new Date().toLocaleTimeString();
}

const getCurrentDate = () => {
  return new Date().toLocaleDateString();
}

export {getCurrentDate, getCurrentTime};