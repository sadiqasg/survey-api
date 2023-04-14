import express, { Request, Response, Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { routes } from "./routes";

const app: Application = express();
const port: number | string = process.env.PORT || 3000;

config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

routes(app);

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Survey API\nNavigate to /api");
});

app.get("*", (req: Request, res: Response) => {
    res.status(404).send("This route does not exist");
});

app.listen(port, () => {
    console.log(`Survey API is listening on port ${port}`);
});

export default app;
