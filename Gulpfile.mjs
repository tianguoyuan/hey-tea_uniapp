import gulp from 'gulp'
// // 修改文件插件
// import jsonEditor from 'gulp-json-editor'
import path from 'path'
import { rm } from 'fs/promises'

const iconsDirs = [
  path.resolve(process.cwd(), 'dist/build/mp-weixin/static/icons'),
  path.resolve(process.cwd(), 'dist/dev/mp-weixin/static/icons'),
]

async function cleanMpIcons() {
  await Promise.all(iconsDirs.map((dir) => rm(dir, { recursive: true, force: true })))
}

// 兼容 gulp CLI：`gulp cleanMpIcons`
gulp.task('default', cleanMpIcons)

export default cleanMpIcons
