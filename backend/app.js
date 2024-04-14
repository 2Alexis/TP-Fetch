    const express = require('express');
    const cors = require('cors');
    const app = express();
    const port = 5500;
    const data = require('./data.json');

    app.use(cors (
        {
        origin: '*',
    }
    ));

    const sneakersRoutes = require('./routes/sneakers');
    app.use(sneakersRoutes);

    app.listen(port, () => console.log(`listening on port ${port}`));