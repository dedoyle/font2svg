const fs = require('fs');

module.exports = function (str, filename, noExports) {
    !noExports && (str = 'module.exports = ' + str)
    var content = new Uint8Array(Buffer.from(str))
    try {
        fs.writeFileSync(filename, content, 'utf8')
        console.log(`${filename}文件已被保存`)
    } catch(err) {
        if (err) throw err;
    }
}