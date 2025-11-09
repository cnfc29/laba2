function checkWorkday() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    console.log("🎉 Сегодня ВЫХОДНОЙ!");
    return false;
  } else {
    console.log("💼 Сегодня РАБОЧИЙ день.");
    return true;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = checkWorkday;
}
