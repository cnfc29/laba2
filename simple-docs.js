const fs = require("fs");

function createSimpleDocs() {
  const functionInfo = {
    name: "checkWorkday",
    description: "Определяет является ли сегодня рабочим днем",
    parameters: "Нет параметров",
    returns: "boolean - true для рабочих дней, false для выходных",
    examples: [
      "checkWorkday() // true (в рабочий день)",
      "checkWorkday() // false (в выходной день)",
    ],
  };

  const markdown = `# ${functionInfo.name}

## Описание
${functionInfo.description}

## Синтаксис
\`\`\`javascript
${functionInfo.name}()
\`\`\`

## Параметры
${functionInfo.parameters}

## Возвращаемое значение
${functionInfo.returns}

## Примеры использования
\`\`\`javascript
${functionInfo.examples.join("\n")}
\`\`\`

## Тесты
Запуск тестов: \`npm test\`

## Генерация документации
Документация автоматически генерируется при каждом коммите в CI/CD

---
*Сгенерировано автоматически: ${new Date().toLocaleString()}*
`;

  fs.writeFileSync("README.md", markdown);
  console.log("📚 Документация создана: README.md");
}

createSimpleDocs();
