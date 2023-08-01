import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";

export default function Layout() {
  return (
    <ThemeProvider>
      <main>
        <NavBar />
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
