
srcPath = 'src';
appPath = 'app';


module.exports = {
    srcPath: srcPath,
    appPath: appPath,

    
    html: {
        src:  srcPath + '/index.html',
        dest: appPath
    },
    javascript: {
        src:  srcPath + '/scripts/**/*',
        dest: appPath + '/scripts'
    },
    stylesheet: {
        srcCss:  srcPath + '/styles/**/*',
        srcPost: srcPath + '/styles/**/*.css',
        dest:    appPath + '/styles'
    },
    watch: {
        srcScripts:  srcPath + '/scripts/**/*',
        srcPost:     srcPath + '/styles/**/*.css',
        browserSync: 'app/**/*'
    },
    rev: {
        dest: "./" + appPath + '/rev-manifest.json',
        opts: {
            base:  process.cwd() + '/' + appPath,
            merge: true
        }
    },
    revReplace: {
        src:  "./" + appPath + "/index.html",
        dest: "./" + appPath
    }
}