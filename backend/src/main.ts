import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { photographerRoutes } from "./infrastructure/routes/photographer-routes";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/photographers", photographerRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
