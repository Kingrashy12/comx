import { PluginAPI } from "tailwindcss/types/config";

export function TW({ addVariant, addUtilities }: PluginAPI) {
  addVariant("scrollbar", ["::-webkit-scrollbar&"]);
  addVariant("scrollbar-thumb", ["::-webkit-scrollbar-thumb&"]);
  addVariant("scrollbar-track", ["::-webkit-scrollbar-track&"]);
  addUtilities({
    ".scrollbar-none": {
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  });
}
