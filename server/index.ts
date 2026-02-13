import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // API: Contact form → Brevo
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, telefon, tierart, nachricht } = req.body;

      if (!email || !name) {
        return res.status(400).json({ error: "Name und E-Mail sind Pflichtfelder." });
      }

      const brevoApiKey = process.env.BREVO_API_KEY || "";
      const listId = 20;

      if (!brevoApiKey) {
        console.error("BREVO_API_KEY not set");
        return res.status(500).json({ error: "Server configuration error" });
      }

      // 1. Create/Update Brevo Contact
      const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "api-key": brevoApiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          attributes: {
            VORNAME: name.split(" ")[0] || name,
            NACHNAME: name.split(" ").slice(1).join(" ") || "",
            SMS: telefon || "",
            SONSTIGES: `Tierart: ${tierart || "k.A."}, Nachricht: ${nachricht || "k.A."}`,
          },
          listIds: [listId],
          updateEnabled: true,
        }),
      });

      // 2. Send notification email
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "api-key": brevoApiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "AnimalGuard Website", email: "no-reply@versicherungs-jaeger.eu" },
          to: [{ email: "sven.jaeger@allianz.de", name: "Sven Jaeger" }],
          subject: `Neue Tierversicherungs-Anfrage: ${name} (${tierart || "k.A."})`,
          htmlContent: `
            <h1>Neue AnimalGuard Anfrage</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${telefon || "k.A."}</p>
            <p><strong>Tierart:</strong> ${tierart || "k.A."}</p>
            <p><strong>Nachricht:</strong><br/>${nachricht || "k.A."}</p>
          `,
        }),
      });

      console.log(`[Contact] ${name} <${email}> - ${tierart}`);
      res.json({ success: true });
    } catch (err) {
      console.error("[Contact Error]", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Serve static files
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Client-side routing fallback
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
