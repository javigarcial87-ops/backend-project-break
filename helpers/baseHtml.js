
const baseHtml = (content) => `
<!DOCTYPE html>
<html>
<head>
  <title>Tienda</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .card { border: 1px solid #ccc; padding: 10px; margin: 10px; }
  </style>
</head>
<body>
${content}
</body>
</html>
`;

module.exports = baseHtml;








// 