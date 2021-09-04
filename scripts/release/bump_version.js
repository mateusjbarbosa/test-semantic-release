const exec = require('child_process').exec
const fs = require('fs')
const path = require('path')

exec('git describe --tags',
  function (error, stdout, _) {
    if (error !== null) {
      console.log('exec error: ' + error);
      return
    }

    const tag = stdout.replace('v', '')
    const version = tag.replace('\n', '')

    console.log(`$PWD`)
    console.log(version)

    // pkg.version = version

    // const pkgPath = path.join(__dirname, '..', '..', 'package.json')

    // fs.writeFileSync(
    //   pkgPath,
    //   `${JSON.stringify({
    //     ...pkg,
    //   }, null, 2)}\n`
    // )
  }
)