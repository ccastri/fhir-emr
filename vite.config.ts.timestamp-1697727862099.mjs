// vite.config.ts
import { createRequire } from "module";
import * as path from "path";
import { lingui } from "file:///D:/beda-clone/fhir-emr/node_modules/@lingui/vite-plugin/dist/index.cjs";
import react from "file:///D:/beda-clone/fhir-emr/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///D:/beda-clone/fhir-emr/node_modules/vite/dist/node/index.js";
import turbosnap from "file:///D:/beda-clone/fhir-emr/node_modules/vite-plugin-turbosnap/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\beda-clone\\fhir-emr";
var __vite_injected_original_import_meta_url = "file:///D:/beda-clone/fhir-emr/vite.config.ts";
var require2 = createRequire(__vite_injected_original_import_meta_url);
var vite_config_default = defineConfig(({ command }) => ({
  server: {
    port: command === "build" ? 5e3 : 3e3
  },
  plugins: [
    ...[
      react({
        babel: {
          plugins: [
            "macros",
            [
              "babel-plugin-styled-components",
              {
                displayName: true,
                fileName: false
              }
            ]
          ]
        }
      }),
      lingui()
    ],
    command === "build" ? [turbosnap({ rootDir: process.cwd() })] : []
  ],
  define: {
    "process.env": {}
  },
  resolve: {
    alias: [
      { find: "src", replacement: path.resolve(__vite_injected_original_dirname, "./src/") },
      { find: "shared", replacement: path.resolve(__vite_injected_original_dirname, "./shared/") }
    ]
  },
  build: {
    outDir: path.resolve(__vite_injected_original_dirname, "build"),
    commonjsOptions: {
      defaultIsModuleExports(id) {
        try {
          const module = require2(id);
          if (module == null ? void 0 : module.default) {
            return false;
          }
          return "auto";
        } catch (error) {
          return "auto";
        }
      },
      transformMixedEsModules: true
    }
  },
  test: {
    globals: true,
    // To use the Vitest APIs globally like Jest
    environment: "jsdom",
    // https://vitest.dev/config/#environment
    setupFiles: "src/setupTests.ts"
    //  https://vitest.dev/config/#setupfiles
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxiZWRhLWNsb25lXFxcXGZoaXItZW1yXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxiZWRhLWNsb25lXFxcXGZoaXItZW1yXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9iZWRhLWNsb25lL2ZoaXItZW1yL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ21vZHVsZSc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5pbXBvcnQgeyBsaW5ndWkgfSBmcm9tICdAbGluZ3VpL3ZpdGUtcGx1Z2luJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB0dXJib3NuYXAgZnJvbSAndml0ZS1wbHVnaW4tdHVyYm9zbmFwJztcclxuXHJcbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCk7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCB9KSA9PiAoe1xyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgICAgcG9ydDogY29tbWFuZCA9PT0gJ2J1aWxkJyA/IDUwMDAgOiAzMDAwLFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAuLi5bXHJcbiAgICAgICAgICAgIHJlYWN0KHtcclxuICAgICAgICAgICAgICAgIGJhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFjcm9zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhYmVsLXBsdWdpbi1zdHlsZWQtY29tcG9uZW50cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGxpbmd1aSgpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWFuZCA9PT0gJ2J1aWxkJyA/IFt0dXJib3NuYXAoeyByb290RGlyOiBwcm9jZXNzLmN3ZCgpIH0pXSA6IFtdLFxyXG4gICAgXSxcclxuICAgIGRlZmluZToge1xyXG4gICAgICAgICdwcm9jZXNzLmVudic6IHt9LFxyXG4gICAgfSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczogW1xyXG4gICAgICAgICAgICB7IGZpbmQ6ICdzcmMnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjLycpIH0sXHJcbiAgICAgICAgICAgIHsgZmluZDogJ3NoYXJlZCcsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zaGFyZWQvJykgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgb3V0RGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnYnVpbGQnKSxcclxuICAgICAgICBjb21tb25qc09wdGlvbnM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdElzTW9kdWxlRXhwb3J0cyhpZCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGUgPSByZXF1aXJlKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kdWxlPy5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtTWl4ZWRFc01vZHVsZXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXN0OiB7XHJcbiAgICAgICAgZ2xvYmFsczogdHJ1ZSwgLy8gVG8gdXNlIHRoZSBWaXRlc3QgQVBJcyBnbG9iYWxseSBsaWtlIEplc3RcclxuICAgICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJywgLy8gaHR0cHM6Ly92aXRlc3QuZGV2L2NvbmZpZy8jZW52aXJvbm1lbnRcclxuICAgICAgICBzZXR1cEZpbGVzOiAnc3JjL3NldHVwVGVzdHMudHMnLCAvLyAgaHR0cHM6Ly92aXRlc3QuZGV2L2NvbmZpZy8jc2V0dXBmaWxlc1xyXG4gICAgfSxcclxufSkpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBQLFNBQVMscUJBQXFCO0FBQ3hSLFlBQVksVUFBVTtBQUV0QixTQUFTLGNBQWM7QUFDdkIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sZUFBZTtBQU50QixJQUFNLG1DQUFtQztBQUFnSCxJQUFNLDJDQUEyQztBQVExTSxJQUFNQSxXQUFVLGNBQWMsd0NBQWU7QUFHN0MsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxRQUFRLE9BQU87QUFBQSxFQUMxQyxRQUFRO0FBQUEsSUFDSixNQUFNLFlBQVksVUFBVSxNQUFPO0FBQUEsRUFDdkM7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLEdBQUc7QUFBQSxNQUNDLE1BQU07QUFBQSxRQUNGLE9BQU87QUFBQSxVQUNILFNBQVM7QUFBQSxZQUNMO0FBQUEsWUFDQTtBQUFBLGNBQ0k7QUFBQSxjQUNBO0FBQUEsZ0JBQ0ksYUFBYTtBQUFBLGdCQUNiLFVBQVU7QUFBQSxjQUNkO0FBQUEsWUFDSjtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsTUFDSixDQUFDO0FBQUEsTUFDRCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0EsWUFBWSxVQUFVLENBQUMsVUFBVSxFQUFFLFNBQVMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUFBLEVBQ3JFO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixlQUFlLENBQUM7QUFBQSxFQUNwQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsRUFBRSxNQUFNLE9BQU8sYUFBa0IsYUFBUSxrQ0FBVyxRQUFRLEVBQUU7QUFBQSxNQUM5RCxFQUFFLE1BQU0sVUFBVSxhQUFrQixhQUFRLGtDQUFXLFdBQVcsRUFBRTtBQUFBLElBQ3hFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsUUFBYSxhQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN2QyxpQkFBaUI7QUFBQSxNQUNiLHVCQUF1QixJQUFJO0FBQ3ZCLFlBQUk7QUFDQSxnQkFBTSxTQUFTQSxTQUFRLEVBQUU7QUFDekIsY0FBSSxpQ0FBUSxTQUFTO0FBQ2pCLG1CQUFPO0FBQUEsVUFDWDtBQUNBLGlCQUFPO0FBQUEsUUFDWCxTQUFTLE9BQVA7QUFDRSxpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBQUEsTUFDQSx5QkFBeUI7QUFBQSxJQUM3QjtBQUFBLEVBQ0o7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNGLFNBQVM7QUFBQTtBQUFBLElBQ1QsYUFBYTtBQUFBO0FBQUEsSUFDYixZQUFZO0FBQUE7QUFBQSxFQUNoQjtBQUNKLEVBQUU7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiXQp9Cg==
