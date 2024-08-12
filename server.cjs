const { getEmployees } = require("./db/employee.cjs");
const express = require("express");
const app = express();
const client = require("./db/client.cjs");
const cors = require("cors");
// const PORT = 3000;
// not connecting to 3000, stating failed to fetch at app.jsx:16 and err.connecting app.jsx:9

client.connect();

app.use(cors());

app.use(express.static("dist"));

app.get("/api/v1/employees", async (req, res, next) => {
  try {
    const employees = await getEmployees();
    res.json({ rows: employees });
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
