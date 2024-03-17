/* eslint-env node */
import { build } from "esbuild";
import babel from "esbuild-plugin-babel";

build({
  entryPoints: {
    phccs: "src/index.ts",
    phccs_gash: "src/gash/cs.ts",
    looph_gash: "src/gash/casual.ts",
    smol_butt: "src/gash/smolbutt.ts",
  },
  outdir: "KoLmafia/scripts/phccs",
  bundle: true,
  minifySyntax: true,
  platform: "node",
  target: "rhino1.7.14",
  external: ["kolmafia"],
  plugins: [babel()],
  loader: { ".json": "text" },
  inject: ["./kolmafia-polyfill.js"],
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
