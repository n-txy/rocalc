import { defineConfig } from "vite"
import { copyFiles } from "./src/plugins/copy-files";

export default defineConfig({
    plugins: [
        copyFiles('./src/html', './public/html'),
        copyFiles('./src/images', './public/images'),
		copyFiles('./src/js', './public/js'),
		copyFiles('./src/styles', './public/styles'),
    ],
	root: 'src',
	build: {
		outDir: '../dist',
		emptyOutDir : true
	},
	publicDir: '../public'
});
