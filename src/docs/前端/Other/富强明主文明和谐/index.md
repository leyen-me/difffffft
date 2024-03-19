---
title: "富强民主文明和谐"
date: "2023-12-12"
categories: 
  - "前端"
---

在很多博客中都可以看到一种点击效果，'富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'。

这种效果如何实现呢，请看如下代码：

![](images/image-1.png)

```
<html>

<head>
    <title>引导页</title>
    <style>
        .text-popup {
            animation: textPopup 1s;
            user-select: none;
            white-space: nowrap;
            position: absolute;
            z-index: 99;
        }

        @keyframes textPopup {

            0%,
            100% {
                opacity: 0;
            }

            5% {
                opacity: 1;
            }

            100% {
                transform: translateY(-50px);
            }
        }
    </style>
</head>

<body>
    <div id="container"></div>
    <!-- <canvas id="canvas"></canvas> -->
    <!-- <script src="bootstrapmb.com.js"></script> -->

    <script>
        var generateRandomColor = function () {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        var fnTextPopup = function (arr, options) {
            // arr参数是必须的
            if (!arr || !arr.length) {
                return;
            }
            // 主逻辑
            var index = 0;
            document.documentElement.addEventListener('click', function (event) {
                var x = event.pageX, y = event.pageY;
                var eleText = document.createElement('span');
                eleText.className = 'text-popup';
                eleText.style.color = generateRandomColor()
                this.appendChild(eleText);
                if (arr[index]) {
                    eleText.innerHTML = arr[index];
                } else {
                    index = 0;
                    eleText.innerHTML = arr[0];
                }
                // 动画结束后删除自己
                eleText.addEventListener('animationend', function () {
                    eleText.parentNode.removeChild(eleText);
                });
                // 位置
                eleText.style.left = (x - eleText.clientWidth / 2) + 'px';
                eleText.style.top = (y - eleText.clientHeight) + 'px';
                // index递增
                index++;
            });
        };

        fnTextPopup(['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']);
    </script>
</body>

</html>
```
