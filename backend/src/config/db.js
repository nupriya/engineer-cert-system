import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "engineer_cert",
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB connection failed:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

export default db;