---
title: "git commit最佳实践"
date: "2023-12-04"
categories: 
  - "前端"
---

安装规范化提交插件

```
npm install -g commitizen cz-conventional-changelog
```

配置插件

```
echo '{"path": "cz-conventional-changelog"}' > ~/.czrc
```

使用

```
git add .

git cz
```

接下来会有6个步骤共你选择

feat: A new feature  
fix: A bug fix  
docs: Documentation only changes  
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)  
refactor: A code change that neither fixes a bug nor adds a feature  
perf: A code change that improves performance  
test: Adding missing tests or correcting existing tests

翻译过来就是

feat: 新功能  
fix: 修复BUG  
docs: 修改文档  
style: 不影响代码含义的修改（留白、格式化、分号缺失等）  
refactor: 既不修复错误也不增加功能的代码更改  
perf: 改进性能的代码变更  
test: 添加缺失的测试或纠正现有测试

根据你提交的内容选择一个就行，接下来要输入你的模块名称，前面的?表示这是一个可选项目，不想填请回车跳过

```
? What is the scope of this change (e.g. component or file name): (press enter to skip)
```

```
docs
```

接下来你要写一个简短的描述，如果你修复了某个issues，请在描述结尾加上（#issues\_code），这样更友好。

```
Write a short, imperative tense description of the change (max 86 chars):
```

```
fix some bug(#1001)
```

接下来就是一个更长的详细的描述，可选项，可以选择跳过

```
? Provide a longer description of the change: (press enter to skip)
```

接下来就是关于破坏性更新的问题，可选项，可以选择跳过

```
? Are there any breaking changes? (y/N) 
```

接下来就是这一变更是否会影响任何开放的问题？(是/否），如果你选择是它将会自动关闭你Github的issues。

```
? Does this change affect any open issues? (y/N) 
```

## husky + commitlint 提交校验

安装

```
npm install husky --save-dev

npx husky install
```

添加

npx husky add .husky/pre-commit "npm test"

commitlint 配置

```
npm install -g @commitlint/cli @commitlint/config-conventional

echo "export default { 
extends: ['@commitlint/config-conventional'] 
}" > commitlint.config.js

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

测试

```
git add .
git commit -m 'xx'

提示缺少 subject 就是提交信息、type 就是提交类型，按照规范提交就 ok 了
```

## 根据 commit 信息生成 changelog

```
npm install standard-version --save-dev
```

```
npm run release
```

```
git push
git push --tags
```

release指定版本

```
# 0.4.1
npm run release # 0.4.1 => 0.4.2
npm run release -- --prerelease # 0.4.2 to 0.4.3-0
npm run release # 0.4.3-0 to 0.4.3
npm run release -- --prerelease alpha # 0.4.3 to 0.4.4-alpha.0

# patch、minor、major
npm run release -- --release-as minor  # 0.4.4-alpha.0 to 0.5.0
npm run release -- --release-as patch # 0.5.0 to 0.5.1
npm run release -- --release-as major # 0.5.1 to 1.0.0
npm run release -- --release-as prepatch # 1.0.0 to 1.0.1-0
npm run release -- --release-as preminor # 1.0.1-0 to 1.1.0-0
npm run release -- --release-as premajor # 1.1.0-0 to 2.0.0-0

# 手动指定版本
npm run release -- --release-as 2.1.3-alpha.1 # 2.0.0-0 to 2.1.3-alpha.1
# ✔ bumping version in package.json from 2.0.0-0 to 2.1.3-alpha.1
# ✔ bumping version in package-lock.json from 2.0.0-0 to 2.1.3-alpha.1
# ✔ tagging release v2.1.3-alpha.1

npm run release # 2.1.3-alpha.1 to 2.2.0
```

[demo: difffffft/commitizen-practice-demo](https://github.com/difffffft/commitizen-practice-demo)

[https://www.bilibili.com/video/BV193411C7XE](https://www.bilibili.com/video/BV193411C7XE)
