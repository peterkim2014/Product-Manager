const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllProductRoutes = require("./routes/product.route");
AllProductRoutes(app);

app.listen(port, () => 
    console.log(`Listening on port: ${port}`)
);