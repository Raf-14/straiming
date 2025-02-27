import express, { Express, Request, Response }  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

// Express app
const app: Express = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());


const users = []; // Simule une base de données

// Route d'inscription
app.post("/api/auth/register", (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = { username, email, password };
  users.push(user);

  // Génération du token JWT
  const token = jwt.sign({ username, email }, "SECRET_KEY", { expiresIn: "1h" });

  // Envoi du token via un cookie sécurisé
  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // Mettre `false` en développement
    // sameSite: "Strict",
    maxAge: 3600000, // 1h
  });

  res.json({ message: "Inscription réussie" });
});



app.listen(5000, () => console.log("Serveur en écoute sur le port 5000"));
