# ⚙️ Workflow Utility Suite

A modular JavaScript toolkit for document workflows, spreadsheet indexing, and efficient batch analytics.

---

## 📌 Project Overview

**Workflow Utility Suite** is a collection of lightweight JavaScript utilities designed to simplify common operational tasks.

It brings together three useful computational concepts:

* **Document Dispatch Engine:** Manages documents stored in temporary printer memory using stack-based processing.
* **Spreadsheet Column Converter:** Translates spreadsheet column labels such as `A`, `AB`, and `ZY` into numeric indexes.
* **Batch Analytics Engine:** Calculates the number of trailing zeroes in factorial-based quantities without calculating the factorial itself.

The project demonstrates how fundamental algorithms and data structures can become reusable components in practical software systems.

---

## 🌍 Real-World Scenario

Imagine an office automation platform responsible for processing documents, importing spreadsheet data, and generating operational reports.

The platform needs to:

1. Track documents waiting in temporary printer memory.
2. Translate spreadsheet column references into numeric positions when importing data.
3. Analyze large factorial-based quantities without creating unnecessarily large numbers.

Workflow Utility Suite provides a small, modular implementation of these capabilities.

---

## 🧠 Core Concepts

| Module | Core Concept | Practical Purpose |
| --- | --- | --- |
| **Document Dispatch** | Stack (LIFO) | Manage temporary document memory |
| **Spreadsheet Indexing** | Base-26 conversion | Translate column labels into indexes |
| **Batch Analytics** | Prime factor counting | Calculate factorial trailing zeroes efficiently |

---

## ⚙️ How the System Works

### 1. Document Dispatch Engine

The document dispatch engine simulates a printer that stores documents temporarily before printing. It supports three operations:

| Command | Behavior |
| --- | --- |
| **1** | Store the current document in memory |
| **2** | Print the newest stored document, or the current document if memory is empty |
| **3** | Print the current document immediately |

A stack is used to manage temporary document storage.

**Example:**

```text
Commands: 112332

Document 1 → Stored
Document 2 → Stored
Document 3 → Print document 2
Document 4 → Print immediately
Document 5 → Print immediately
Document 6 → Print document 1

Unprinted documents:
[3, 6]

```

The engine identifies documents that were never successfully printed.

---

### 2. Spreadsheet Column Converter

Spreadsheet applications use alphabetical column labels instead of ordinary numeric indexes.

For example:

* `A` → `1`
* `B` → `2`
* `Z` → `26`
* `AA` → `27`
* `AB` → `28`
* `ZY` → `701`

The converter treats the column label as a base-26 positional number. Each character contributes:

```text
result = result × 26 + characterValue

```

*(Character values range from `A = 1` to `Z = 26`)*

**Example:**

```text
Input: AB

A = 1
B = 2

Result = (1 × 26) + 2
       = 28

```

This is useful when processing spreadsheet columns, mapping fields, or importing tabular data.

---

### 3. Batch Analytics Engine

The batch analytics engine calculates the number of trailing zeroes in a factorial-based value. Instead of calculating the entire factorial, it counts the number of factors of five.

**Why?** Every trailing zero requires a pair of factors `2 × 5`. Factorials contain more factors of two than five, so factors of five determine the answer.

The calculation is:

```text
count = floor(n / 5)
      + floor(n / 25)
      + floor(n / 125)
      + ...

```

Division continues until the quotient becomes zero.

**Example:**

```text
Input: 25

25 / 5   = 5
25 / 25  = 1
25 / 125 = 0

Total = 5 + 1 = 6
Result: 6 trailing zeroes

```

This technique avoids constructing extremely large factorial values.

---

## ✨ Key Features

* Modular JavaScript implementation.
* Stack-based document dispatch simulation.
* Accurate tracking of printed and unprinted documents.
* Excel-style alphabetical column conversion.
* Efficient factorial trailing-zero calculation.
* No external runtime dependencies.
* Reusable functions with clear inputs and outputs.
* Efficient time and memory usage.

---

## 💻 Example Usage

### Document Dispatch

```javascript
const { findUnprintedDocuments } = require("./src");

const result = findUnprintedDocuments("112332");
console.log(result);

```

**Output:**

```javascript
[3, 6]

```

### Spreadsheet Column Conversion

```javascript
const { columnLabelToNumber } = require("./src");

console.log(columnLabelToNumber("AB"));
console.log(columnLabelToNumber("ZY"));

```

**Output:**

```text
28
701

```

### Factorial Trailing Zeroes

```javascript
const { countFactorialTrailingZeroes } = require("./src");

console.log(countFactorialTrailingZeroes(5));
console.log(countFactorialTrailingZeroes(25));

```

**Output:**

```text
1
6

```

---

## 📊 Algorithm Complexity

| Function | Time Complexity | Space Complexity |
| --- | --- | --- |
| `findUnprintedDocuments()` | $O(n)$ | $O(n)$ |
| `columnLabelToNumber()` | $O(k)$ | $O(1)$ |
| `countFactorialTrailingZeroes()` | $O(\log_5 n)$ | $O(1)$ |

* **$n$** = number of document commands or factorial input.
* **$k$** = length of the spreadsheet column label.

---

## 🛠️ Technologies Used

* **JavaScript (ES6+)** — Core programming language.
* **Node.js** — JavaScript runtime.
* **Stack Data Structure** — Temporary document memory management.
* **Base-26 Number System** — Spreadsheet column conversion.
* **Mathematical Factorization** — Efficient factorial analysis.
* **Git & GitHub** — Version control and project hosting.

---

## 📁 Project Structure

```text
workflow-utility-suite/
│
├── src/
│   ├── documentDispatcher.js
│   ├── spreadsheetConverter.js
│   ├── factorialAnalytics.js
│   └── index.js
│
├── examples/
│   └── demo.js
│
├── README.md
├── package.json
└── LICENSE

```

---

## 🚀 How to Run the Project

### Prerequisites

Install **Node.js 18 or later**. Check your installation:

```bash
node --version
npm --version

```

### 1. Clone the repository

```bash
git clone [https://github.com/mirhamzarahman/workflow-utility-suite.git](https://github.com/mirhamzarahman/workflow-utility-suite.git)

```

### 2. Navigate into the project

```bash
cd workflow-utility-suite

```

### 3. Run the demonstration

```bash
node examples/demo.js

```

### 4. Import individual utilities

```javascript
const {
    findUnprintedDocuments,
    columnLabelToNumber,
    countFactorialTrailingZeroes
} = require("./src");

```

---

## 🎯 Learning Outcomes

Building this project provides practical experience with:

* Implementing stack-based systems.
* Understanding LIFO processing.
* Managing application state through arrays and boolean tracking.
* Converting positional numeral systems.
* Understanding how spreadsheet column indexing works.
* Applying mathematical optimization.
* Counting prime factors without calculating enormous numbers.
* Designing modular and reusable JavaScript functions.
* Organizing a small Node.js project for GitHub.

---

## 🔮 Future Improvements

Potential extensions include:

* Adding a real document queue with priority-based dispatch.
* Building a visual dashboard for document processing.
* Supporting spreadsheet column-to-row coordinate mapping.
* Adding CSV and Excel file import functionality.
* Creating a batch analytics dashboard.
* Adding automated unit tests using Node.js's built-in test runner.
* Providing a REST API for external applications.
* Adding TypeScript support.

---

## 📜 License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute the project under the terms of that license.

---

## 👨‍💻 Author

* **Mir Hamza Rahman**
* **GitHub:** [@mirhamzarahman](https://github.com/mirhamzarahman)
* **Repository:** [workflow-utility-suite](https://www.google.com/search?q=https://github.com/mirhamzarahman/workflow-utility-suite)

⭐ *If you find this project useful, consider giving it a star!*

*Built with JavaScript | Designed around practical algorithms | Made for learning and reuse.*

```

```
