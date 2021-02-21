# 双飞翼布局

![](https://img-blog.csdnimg.cn/20190118092113972.png)

- header 和 footer 各自占领屏幕所有宽度，高度固定。
- 中间的 container 是一个三栏布局。
- 三栏布局两侧宽度固定不变，中间部分自动填充整个区域。
- 中间部分的高度是三栏中最高的区域的高度。

# 双飞翼布局的实现

基本布局

```bash
<div class="box">
    <div class="center common">
      <div class="content">center</div>
    </div>
    <div class="left common">left</div>
    <div class="right common">right</div>
</div>
```

## 1. left、center、right 三种都设置左浮动

```bash
.common {
  height: 100px;
  text-align: center;
  line-height: 100px;
}

.left {
  float: left;
  background: red;
  width: 200px;
}

.center {
  float: left;
  background: blue;
}

.right {
  float: left;
  width: 200px;
  background: yellow;
}
```

## 2. 设置 center 宽度为 100%

```bash
.center {
  width: 100%;
}
```

## 3. 设置负边距，left 设置负边距为 100%，right 设置负边距为自身宽度

```bash
.left {
  margin-left: -100%;
}
.right {
  margin-left: -200px;
}
```

## 4. 设置 content 的 margin 值为左右两个侧栏留出空间，margin 值大小为 left 和 right 宽度

```bash
.center .content {
  margin: 0 200px;
}
```
