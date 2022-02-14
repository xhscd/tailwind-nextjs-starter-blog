const configs = require('./config')
const child_process = require('child_process')

deployServerSideCode()

// 部署后端脚本
function deployServerSideCode() {
  console.log('开始通过部署代码')
  const gitCmd = `git push -f git@${configs.host}:${configs.remoteServerGitPath} master`
  child_process.exec(gitCmd, null, function (error, stdout, stderr) {
    if (error) {
      console.log('exec error: ' + error)
    } else {
      console.log('代码部署成功！')
    }
  })
}
