import { defineConfig } from "vite"
import liveReload from 'vite-plugin-live-reload'
import { copyFiles } from "./src/plugins/copy-files";

export default defineConfig({
    plugins: [
		liveReload('./src/js/*.js'),
        copyFiles('./src/html', './dist/html'),
        copyFiles('./src/images', './dist/images'),
		copyFiles('./src/js', './dist/js'),
		copyFiles('./src/styles', './dist/styles'),
    ],
	root: 'src',
	build: {
		outDir: '../dist',
		emptyOutDir : true
	},
	publicDir: '../public'
});
