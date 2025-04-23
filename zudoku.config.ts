import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
    { id: "docs/about", label: "About", type: "doc" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["docs/about", "specification/introduction", "specification/general_description", "specification/detailed_requirements", "specification/appendices", "specification/glossary"],
      },
    ],
  },
  redirects: [{ from: "/", to: "/docs/about" }],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
