---
title: "项目中的隐藏文件夹.vscode"
date: "2023-11-29"
categories: 
  - "前端"
---

## extensions.json

在 Visual Studio Code（VS Code）中，`extensions.json` 文件是一个配置文件，用于推荐或排除特定的扩展（extensions）给项目的其他开发者。这个文件通常放在项目的 `.vscode` 文件夹中。它主要有两个作用：

1. **推荐扩展（Recommendations）**：通过这个文件，项目维护者可以指定哪些扩展对于当前项目是有益的。当其他开发者打开这个项目时，VS Code 会提示他们安装这些推荐的扩展。这有助于保证所有开发者都有相同的工具集，从而提高代码的一致性和协作效率。

3. **排除扩展（Unwanted Recommendations）**：同样，这个文件也可以用来指定不推荐的扩展。如果项目中的某些扩展可能会引起冲突或者不适用于当前项目，那么可以在这里指定它们，以提醒其他开发者不要安装。

`extensions.json` 文件的一个基本结构如下：

```
{
    "recommendations": [
        // 扩展标识符列表，推荐的扩展
    ],
    "unwantedRecommendations": [
        // 不推荐的扩展标识符列表
    ]
}
```

在实际使用中，项目维护者可以根据项目需求和团队协作的特点，来决定推荐或排除哪些扩展。这样可以帮助团队成员快速配置开发环境，提高开发效率。

## settings.json

  
在 Visual Studio Code (VSCode) 中，`settings.json` 文件用于配置编辑器的各种设置和行为。这个文件允许用户自定义和优化他们的编程环境。以下是一些 `settings.json` 文件的主要作用：

1. **编辑器外观**：用户可以通过此文件调整字体大小、主题颜色、光标样式等，以便于个人编程习惯。

3. **编程语言设置**：可以针对不同的编程语言设置特定的行为，例如制表符大小、行尾字符、文件编码等。

5. **代码格式化**：配置代码自动格式化的工具和规则，如 Prettier 或 ESLint，以保持代码整洁一致。

7. **快捷键和绑定**：自定义或覆盖默认的键盘快捷键，加速编程效率。

9. **扩展配置**：对安装的扩展程序进行特定的配置，比如 Python 解释器的路径、代码检查工具的设置等。

11. **用户和工作区设置**：VSCode 允许区分用户级别（对所有项目生效）和工作区级别（仅对当前项目生效）的设置。

13. **其他特性**：比如文件自动保存、缩放级别、编辑器标签行为等等。

用户可以通过编辑 `settings.json` 文件，实现对 VSCode 编辑器高度的个性化定制，从而提升开发效率和体验。

让我们来看看腾讯的规范

```
{
  "files.eol":"\n",
  "editor.tabSize": 2,
  "eslint.format.enable": true,
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue"],
  "[vue]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "cSpell.words": [
    "tdesign",
    "tvision",
    "echarts",
    "nprogress",
    "commitlint",
    "stylelint",
    "pinia",
    "qrcode"
  ],
}
```

在 Visual Studio Code (VSCode) 的 `settings.json` 文件中，`files.eol` 字段用于设置文件的行尾字符（End Of Line character）。这个设置决定了当你在 VSCode 中创建或保存文件时，每一行的末尾应该使用哪种类型的行尾字符。这个设置对于确保代码的跨平台一致性非常重要，尤其是在多人协作的项目中。

`files.eol` 字段可以设置为以下几种值：

1. `\n`：表示使用 LF (Line Feed) 作为行尾字符。这是 Unix、Linux 和 macOS 系统的标准行尾字符。

3. `\r\n`：表示使用 CRLF (Carriage Return + Line Feed) 作为行尾字符。这是 Windows 系统的标准行尾字符。

5. `auto`：自动模式，VSCode 会根据打开的文件来决定使用哪种行尾字符。如果文件原本包含混合的行尾字符，VSCode 会使用文件中首次出现的行尾字符。

例如，如果你想确保所有文件在保存时都使用 LF 作为行尾字符，无论在哪个操作系统上，你可以在 `settings.json` 文件中设置：

```
"files.eol": "\n",
```

这个设置对于保持代码风格的一致性，以及避免因行尾字符差异导致的版本控制问题非常有帮助。在多人协作的项目中，统一行尾字符设置可以减少不必要的“git diff”噪音，使得代码更清晰。

* * *

在 Visual Studio Code (VSCode) 的 `settings.json` 文件中，`"editor.tabSize": 2` 这个设置用于指定编辑器中制表符（Tab）的宽度。具体来说，这里的 `2` 表示每个制表符占用两个空格的宽度。

这个设置对于代码的可读性和风格非常重要，特别是在团队项目中，因为它决定了代码的缩进级别。不同的编程语言和团队可能有不同的缩进风格标准。例如，有些团队可能偏好每个缩进级别使用 4 个空格的宽度，而另一些团队可能选择 2 个空格。

设置 `"editor.tabSize": 2` 的效果如下：

- 当你按下 Tab 键时，插入的空白等于两个空格的宽度。

- 当编辑器显示包含制表符的现有代码时，每个制表符也会显示为两个空格的宽度。

这个设置可以根据个人喜好或项目规范进行调整。例如，如果你希望每个缩进级别使用 4 个空格的宽度，可以将这个值改为 4：

```
"editor.tabSize": 4
```

注意，这个设置只影响视觉上的显示，并不会改变文件中实际的字符。也就是说，无论这个值设置为多少，按下 Tab 键输入的仍然是一个制表符字符（除非你启用了“空格替代制表符”功能）。

但是有时候你设置了tabSize，但是不会生效，你需要在打开Vscode的Settings，

搜索【Editor: Detect Indentation】，选择【Workspace/User/其他】中的，然后取消勾选。这样Vscode每次打开文件都会优先读取你配置文件的tabSize，如果配置文件没有，就取全局配置tabSize。

* * *

  
在 Visual Studio Code (VSCode) 中，`eslint.format.enable` 设置用于控制是否启用 ESLint 作为代码格式化工具。ESLint 是一个流行的 JavaScript 和 TypeScript 的代码质量和代码风格检查工具。当你在 VSCode 的 `settings.json` 文件中设置 `"eslint.format.enable": true`，这意味着你希望使用 ESLint 来格式化代码。

具体地说，这个设置会启用以下功能：

1. **代码格式化**：当你触发代码格式化动作（例如，使用快捷键 `Shift + Alt + F` 或在文件保存时如果启用了自动格式化），VSCode 会使用 ESLint 的规则来格式化代码。

3. **风格一致性**：这有助于确保你的代码遵循团队或项目的编码标准和风格指南。

5. **集成其他格式化工具**：如果你的项目中同时使用了 ESLint 和其他格式化工具（如 Prettier），需要确保这些工具的配置是兼容的，以避免格式化冲突。

要使用这个功能，你需要确保已经在你的项目中安装了 ESLint，并且有一个有效的 ESLint 配置文件（如 `.eslintrc`）。此外，你可能还需要在 VSCode 中安装 ESLint 扩展。

如果你发现 ESLint 并没有按预期格式化代码，可能需要检查你的 ESLint 配置文件，确保其包含了适当的格式化规则，以及确认 VSCode 是否正确地加载了这些配置。

在使用 ESLint 的时候，我们往往会配合 Prettier 使用。Prettier 是一个‘有态度’的代码格式化工具，专注于代码格式自动调整，ESLint 本身就可以解决代码格式方面的问题，为什么要两者配合使用？

ESLint 推出 --fix 参数前，ESLint 并没有**自动**格式化代码的功能，而 Prettier 可以自动格式化代码。

虽然 ESLint 也可以校验代码格式，但 Prettier 更擅长。

二者搭配使用，ESLint 关注代码质量，Prettier 关注代码格式。但是二者在格式化上面的功能有所交叉，所以Prettier 和 ESLint 一起使用的时候会有冲突，这需要我们进行一些配置：

.`eslintrc`

```
{
  "extends": [
    ...
    "plugin:prettier/recommended" // 确保prettier放在最后
  ],
}
```

* * *

`   "eslint.validate"` 是一个配置选项，用于在 Visual Studio Code（VS Code）的 ESLint 插件中指定哪些文件类型将被 ESLint 检查。ESLint 是一个流行的 JavaScript 和 JSX 代码质量和风格检查工具。

当你在 VS Code 的设置文件（例如 `settings.json`）中添加 `"eslint.validate"` 配置时，你可以指定一个文件类型的列表。这告诉 ESLint 插件只检查列表中指定类型的文件。例如，如果你想让 ESLint 只检查 JavaScript 和 TypeScript 文件，你可以这样设置：

```
"eslint.validate": [
    "javascript",
    "typescript"
]
```

这对于确保代码风格和质量的一致性非常有帮助，尤其是在使用多种编程语言和框架的大型项目中。通过这种方式，你可以精确地控制哪些文件类型需要遵循 ESLint 的规则。

* * *

  
在 Visual Studio Code（VSCode）中，`"cSpell.words"` 是一个设置项，用于配置 Code Spell Checker 插件。Code Spell Checker 是一个拼写检查插件，主要用于检查代码中的英文拼写错误。`"cSpell.words"` 允许你添加自定义的单词到插件的字典中，这样这些单词就不会被标记为拼写错误。

例如，如果你在代码中经常使用一些特殊的术语或者项目特有的名称，这些单词可能不在默认的英语字典中，因此会被标记为错误。通过将这些单词添加到 `"cSpell.words"` 设置中，你可以告诉插件这些是正确的单词，避免不必要的拼写警告。这个功能对于保持代码的整洁和提高编程效率非常有帮助。

* * *

在 Visual Studio Code (VSCode) 中，`"editor.detectIndentation": false` 是一个配置选项，用于控制编辑器是否自动检测和使用文件中的缩进设置（例如空格数或制表符大小）。

当你将这个选项设置为 `false` 时，VSCode 不会自动检测每个打开文件的缩进设置。相反，它将使用你在用户或工作区设置中指定的缩进规则。这意味着无论文件中原本使用的是什么样的缩进方式（空格或制表符），以及使用多少空格作为缩进单位，VSCode 都会使用你的全局设置。

这个设置对于那些希望在所有项目中保持一致的缩进风格的用户非常有用，尤其是当你在处理多种不同缩进风格的代码库时。通过禁用自动检测，你可以确保所有文件都遵循相同的格式化规则，从而避免因为混合使用不同缩进方式而导致的格式问题。
