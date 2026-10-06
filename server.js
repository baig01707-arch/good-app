const express = require("express");

const app = express();
const PORT = 3000;

// Website
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Good Morning</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #74ebd5, #ACB6E5);
        }

        .card {
          background: white;
          padding: 50px;
          border-radius: 25px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }

        h1 {
          font-size: 50px;
          margin-bottom: 10px;
        }

        p {
          font-size: 20px;
          color: #555;
        }
      </style>
    </head>

    <body>
      <div class="card">
        <h1>🌅 Good Morning!</h1>
        <p>Wishing everyone a beautiful and productive day.</p>
      </div>
    </body>
    </html>
  `);
});

// API
app.get("/api/status", (req, res) => {
  res.send("server is up & running");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
