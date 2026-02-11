
const baseHtml = (content) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
