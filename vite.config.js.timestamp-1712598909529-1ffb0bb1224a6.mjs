// vite.config.js
import { readFileSync } from "fs";
import { sveltekit } from "file:///Users/russell/Documents/personal/nocomplyfoods.github.io/node_modules/.pnpm/@sveltejs+kit@2.5.4_@sveltejs+vite-plugin-svelte@3.0.2_svelte@4.2.12_vite@5.1.6/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { timeFormat } from "file:///Users/russell/Documents/personal/nocomplyfoods.github.io/node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js";
import path from "path";
import svg from "file:///Users/russell/Documents/personal/nocomplyfoods.github.io/node_modules/.pnpm/vite-plugin-svgstring@1.0.0/node_modules/vite-plugin-svgstring/index.js";
import dsv from "file:///Users/russell/Documents/personal/nocomplyfoods.github.io/node_modules/.pnpm/@rollup+plugin-dsv@3.0.4_rollup@4.13.0/node_modules/@rollup/plugin-dsv/dist/es/index.js";
var { version } = JSON.parse(readFileSync("package.json", "utf8"));
var timestamp = timeFormat("%Y-%m-%d-%H:%M")(/* @__PURE__ */ new Date());
var config = {
  define: {
    __VERSION__: JSON.stringify(version),
    __TIMESTAMP__: JSON.stringify(timestamp)
  },
  plugins: [sveltekit(), dsv(), svg()],
  resolve: {
    alias: {
      $actions: path.resolve("./src/actions"),
      $components: path.resolve("./src/components"),
      $data: path.resolve("./src/data"),
      $routes: path.resolve("./src/routes"),
      $stores: path.resolve("./src/stores"),
      $styles: path.resolve("./src/styles"),
      $svg: path.resolve("./src/svg"),
      $utils: path.resolve("./src/utils")
    }
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcnVzc2VsbC9Eb2N1bWVudHMvcGVyc29uYWwvbm9jb21wbHlmb29kcy5naXRodWIuaW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ydXNzZWxsL0RvY3VtZW50cy9wZXJzb25hbC9ub2NvbXBseWZvb2RzLmdpdGh1Yi5pby92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcnVzc2VsbC9Eb2N1bWVudHMvcGVyc29uYWwvbm9jb21wbHlmb29kcy5naXRodWIuaW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gXCJAc3ZlbHRlanMva2l0L3ZpdGVcIjtcbmltcG9ydCB7IHRpbWVGb3JtYXQgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgc3ZnIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdzdHJpbmdcIjtcbmltcG9ydCBkc3YgZnJvbSBcIkByb2xsdXAvcGx1Z2luLWRzdlwiO1xuXG5jb25zdCB7IHZlcnNpb24gfSA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKFwicGFja2FnZS5qc29uXCIsIFwidXRmOFwiKSk7XG5jb25zdCB0aW1lc3RhbXAgPSB0aW1lRm9ybWF0KFwiJVktJW0tJWQtJUg6JU1cIikobmV3IERhdGUoKSk7XG5cbmNvbnN0IGNvbmZpZyA9IHtcblx0ZGVmaW5lOiB7XG5cdFx0X19WRVJTSU9OX186IEpTT04uc3RyaW5naWZ5KHZlcnNpb24pLFxuXHRcdF9fVElNRVNUQU1QX186IEpTT04uc3RyaW5naWZ5KHRpbWVzdGFtcClcblx0fSxcblx0cGx1Z2luczogW3N2ZWx0ZWtpdCgpLCBkc3YoKSwgc3ZnKCldLFxuXHRyZXNvbHZlOiB7XG5cdFx0YWxpYXM6IHtcblx0XHRcdCRhY3Rpb25zOiBwYXRoLnJlc29sdmUoXCIuL3NyYy9hY3Rpb25zXCIpLFxuXHRcdFx0JGNvbXBvbmVudHM6IHBhdGgucmVzb2x2ZShcIi4vc3JjL2NvbXBvbmVudHNcIiksXG5cdFx0XHQkZGF0YTogcGF0aC5yZXNvbHZlKFwiLi9zcmMvZGF0YVwiKSxcblx0XHRcdCRyb3V0ZXM6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3JvdXRlc1wiKSxcblx0XHRcdCRzdG9yZXM6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3N0b3Jlc1wiKSxcblx0XHRcdCRzdHlsZXM6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3N0eWxlc1wiKSxcblx0XHRcdCRzdmc6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3N2Z1wiKSxcblx0XHRcdCR1dGlsczogcGF0aC5yZXNvbHZlKFwiLi9zcmMvdXRpbHNcIilcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlYsU0FBUyxvQkFBb0I7QUFDMVgsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFFaEIsSUFBTSxFQUFFLFFBQVEsSUFBSSxLQUFLLE1BQU0sYUFBYSxnQkFBZ0IsTUFBTSxDQUFDO0FBQ25FLElBQU0sWUFBWSxXQUFXLGdCQUFnQixFQUFFLG9CQUFJLEtBQUssQ0FBQztBQUV6RCxJQUFNLFNBQVM7QUFBQSxFQUNkLFFBQVE7QUFBQSxJQUNQLGFBQWEsS0FBSyxVQUFVLE9BQU87QUFBQSxJQUNuQyxlQUFlLEtBQUssVUFBVSxTQUFTO0FBQUEsRUFDeEM7QUFBQSxFQUNBLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUFBLEVBQ25DLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLFVBQVUsS0FBSyxRQUFRLGVBQWU7QUFBQSxNQUN0QyxhQUFhLEtBQUssUUFBUSxrQkFBa0I7QUFBQSxNQUM1QyxPQUFPLEtBQUssUUFBUSxZQUFZO0FBQUEsTUFDaEMsU0FBUyxLQUFLLFFBQVEsY0FBYztBQUFBLE1BQ3BDLFNBQVMsS0FBSyxRQUFRLGNBQWM7QUFBQSxNQUNwQyxTQUFTLEtBQUssUUFBUSxjQUFjO0FBQUEsTUFDcEMsTUFBTSxLQUFLLFFBQVEsV0FBVztBQUFBLE1BQzlCLFFBQVEsS0FBSyxRQUFRLGFBQWE7QUFBQSxJQUNuQztBQUFBLEVBQ0Q7QUFDRDtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
