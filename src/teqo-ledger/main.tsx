import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./teqo-ledger.css"
import Home from "./Home.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
