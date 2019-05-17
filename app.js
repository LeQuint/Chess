const express = require('express');
const app = express();
const port = process.env.PORT || 8080;        // set our port


// Serve frontend
app.use("/", express.static(__dirname + '/public'));


// START THE SERVER
// =============================================================================
const server = app.listen(port, () => {
    const host = server.address().address;
    console.log(`Server listening at http://${host}:${port}`);
})