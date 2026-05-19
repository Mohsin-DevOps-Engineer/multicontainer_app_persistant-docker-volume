const express = require('express');
const redis = require('redis');

const app = express();

const PORT = 3000;

const client = redis.createClient({
    url: 'redis://redis:6379'
});

client.connect();

app.get('/', async (req, res) => {

    let visits = await client.get('counter');

    if (visits === null) {
        visits = 0;
    }

    visits++;

    await client.set('counter', visits);

    res.send(`
    <!DOCTYPE html>
    <html>

    <head>

        <title>Persistent Multi-Container App</title>

        <style>

            body {
                background-color: #0f172a;
                color: white;
                font-family: Arial, sans-serif;

                display: flex;
                justify-content: center;
                align-items: center;

                height: 100vh;
                margin: 0;
            }

            .card {
                background: #1e293b;

                padding: 40px;

                border-radius: 20px;

                text-align: center;

                box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
            }

            h1 {
                color: #38bdf8;
            }

            .counter {
                font-size: 60px;
                font-weight: bold;
                margin-top: 20px;
            }

        </style>

    </head>

    <body>

        <div class="card">

            <h1>🚀 Persistent Multi-Container App</h1>

            <p>Page Visits</p>

            <div class="counter">
                ${visits}
            </div>

        </div>

    </body>

    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
