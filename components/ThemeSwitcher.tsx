// app/components/ThemeSwitcher.tsx

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunMoon } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SunMoon
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer rounded-full bg-transparent p-1 text-foreground transition-all hover:bg-foreground hover:text-background"
      size={38}
    />
  );
}
