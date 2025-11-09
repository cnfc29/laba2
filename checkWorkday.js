/**
 * Проверяет, является ли сегодня рабочим днем или выходным
 * @function
 * @returns {boolean} true - если рабочий день, false - если выходной
 * @example
 * // Возвращает true в понедельник-пятницу
 * checkWorkday(); // true
 *
 * // Возвращает false в субботу и воскресенье
 * checkWorkday(); // false
 */

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

if (typeof module !== "undefined" && module.exports) {
  module.exports = checkWorkday;
}
