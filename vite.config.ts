import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({

    plugins:[
        react(),
        dts(),
        libInjectCss()
    ],

    build:{
        lib:{
            entry:path.resolve(__dirname, "src/index.ts"),
            name:"ReactComponentsLib",
            fileName:"index",
            formats:["es"]
        },

        rollupOptions:{
            external:[
                "react",
                "react-dom",
                "react/jsx-runtime"
            ],

            output: {
                globals: {
                    react: "React"
                }
            }
        }
    }
});