import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import InfoModal from "./components/InfoModal.tsx";

export const MainApp = () => {
  return (
    <StrictMode>
      <NextUIProvider>
        <NextThemesProvider themes={["dark"]}>
          <App />
          <InfoModal />
        </NextThemesProvider>
      </NextUIProvider>
    </StrictMode>
  );
};

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <NextUIProvider>
//       <NextThemesProvider themes={["dark"]}>
//         <App />
//         <InfoModal />
//       </NextThemesProvider>
//     </NextUIProvider>
//   </StrictMode>
// );
