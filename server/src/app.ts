import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/routes/routes";
import taskRoutes from "./modules/tasks/routes/routes";
import { errorHandler } from "./core/utils/errorHandler";
import { setupSwagger } from "./core/utils/swagger";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupSwagger(app);

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

export default app;
