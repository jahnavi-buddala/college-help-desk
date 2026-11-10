
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

console.log("DNS servers:", dns.getServers());
import app from "./app.js";
import { initializeKnowledgeBase } from "./services/rag.service.js";

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await initializeKnowledgeBase();
  } catch (error) {
    console.warn("Knowledge base unavailable; continuing without vector search.");
    console.warn(error?.message || error);
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
