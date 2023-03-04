import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import * as fs from "fs";
import * as path from "path";

export default defineConfig({
  plugins: [sveltekit(), mediapipe_workaround()],
  ssr: {
    noExternal: ["three"],
  },
});

function mediapipe_workaround() {
  return {
    name: "mediapipe_workaround",
    load(id: string) {
      if (path.basename(id) === "face_mesh.js") {
        let code = fs.readFileSync(id, "utf-8");
        code += "exports.FaceMesh = FaceMesh;";
        return { code };
      } else {
        return null;
      }
    },
  };
}
