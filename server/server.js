const express = require('express');
const app = express();
const port = 3000;

const data = [
  {
    "id": 1,
    "name": "Category 1",
    "items": [
      {
        "id": 101,
        "name": "Item 1-1",
        "details": "Details of Item 1-1",
        "subitems": [
          { "id": 1011, "name": "Subitem 1-1-1", "details": "Details of Subitem 1-1-1" },
          { "id": 1012, "name": "Subitem 1-1-2", "details": "Details of Subitem 1-1-2" }
        ]
      },
      {
        "id": 102,
        "name": "Item 1-2",
        "details": "Details of Item 1-2"
      }
    ]
  },
  {
    "id": 2,
    "name": "Category 2",
    "items": [
      {
        "id": 201,
        "name": "Item 2-1",
        "details": "Details of Item 2-1"
      }
    ]
  }
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});