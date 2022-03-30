# Question

## 1. Typescript 可以做语法上的校验, 为什么有些项目还需要引入 ESlint 了，感觉是不是多余了？

```javascript
{
  types: [
    { value: 'feature', name: '增加新功能' },
    { value: 'bug', name: '测试反馈bug列表中的bug号' },
    { value: 'fix', name: '修复bug' },
    { value: 'ui', name: '更新UI' },
    { value: 'docs', name: '文档变更' },
    { value: 'style', name: '代码格式(不影响代码运行的变动)' },
    { value: 'perf', name: '性能优化' },
    { value: 'refactor', name: '重构(既不是增加feature，也不是修复bug)' },
    { value: 'release', name: '发布' },
    { value: 'deploy', name: '部署' },
    { value: 'test', name: '增加测试' },
    { value: 'chore', name: '构建过程或辅助工具的变动(更改配置文件)' },
    { value: 'revert', name: '回退' },
    { value: 'build', name: '打包' },
  ]
}
```
