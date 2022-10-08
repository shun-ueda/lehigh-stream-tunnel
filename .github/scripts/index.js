const fs = require('fs')

fs.readdirSync("export").forEach(file => {
    if (file.includes("-Page-1")) {
        fs.renameSync(
            `export/${file}`,
            `export/${file.replace("-Page-1", "")}`
        )
    }
})