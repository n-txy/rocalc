import path from "path"
import fs from "fs"

export function copyFiles(from, to, overwrite = false) {
    return {
        name: 'copy-files',
        apply: 'build',
        buildStart() {
            const log = msg => console.log('\x1b[36m%s\x1b[0m', msg);
            log(`copy files: ${from} → ${to}`);
            fs.readdirSync(from).forEach(file => {
                //if (!file.endsWith('.js')) return;
                const fromFile = `${from}/${file}`;
                const toFile = `${to}/${file}`;
                if (fs.existsSync(toFile) && !overwrite) return;
                log(`• ${fromFile} → ${toFile}`);

                let folderPath = toFile.split('/');
                folderPath.pop();
                if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath.join('/'), {recursive: true});

                fs.copyFileSync(
                    path.resolve(fromFile),
                    path.resolve(toFile)
                );
            })
        }
    }
}