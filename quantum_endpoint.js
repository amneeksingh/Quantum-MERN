// Node.js (Express) file to interact with the Rust Quantum Computation service
const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.get('/quantum', (req, res) => {
    // Execute the Rust binary for quantum computation
    exec('./path_to_rust_binary', (error, stdout, stderr) => {
        if (error) {
            return res.status(500).send(`Error: ${stderr}`);
        }
        res.send(`Quantum Computation Result: ${stdout}`);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
