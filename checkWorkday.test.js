const checkWorkday = require("./checkWorkday");

// Мокаем console.log чтобы тесты не засоряли вывод
beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

describe("checkWorkday", () => {
  test("should return false for Sunday (day 0)", () => {
    // Мокаем Date чтобы всегда возвращать воскресенье
    const mockDate = new Date("2024-01-07"); // Воскресенье
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    const result = checkWorkday();

    expect(result).toBe(false);
    expect(console.log).toHaveBeenCalledWith("🎉 Сегодня ВЫХОДНОЙ!");

    global.Date.mockRestore();
  });

  test("should return false for Saturday (day 6)", () => {
    // Мокаем Date чтобы всегда возвращать субботу
    const mockDate = new Date("2024-01-06"); // Суббота
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    const result = checkWorkday();

    expect(result).toBe(false);
    expect(console.log).toHaveBeenCalledWith("🎉 Сегодня ВЫХОДНОЙ!");

    global.Date.mockRestore();
  });

  test("should return true for Monday (day 1)", () => {
    // Мокаем Date чтобы всегда возвращать понедельник
    const mockDate = new Date("2024-01-01"); // Понедельник
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    const result = checkWorkday();

    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith("💼 Сегодня РАБОЧИЙ день.");

    global.Date.mockRestore();
  });

  test("should return true for Friday (day 5)", () => {
    // Мокаем Date чтобы всегда возвращать пятницу
    const mockDate = new Date("2024-01-05"); // Пятница
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    const result = checkWorkday();

    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith("💼 Сегодня РАБОЧИЙ день.");

    global.Date.mockRestore();
  });

  test("should return boolean value", () => {
    const result = checkWorkday();

    expect(typeof result).toBe("boolean");
    expect(result === true || result === false).toBe(true);
  });
});
