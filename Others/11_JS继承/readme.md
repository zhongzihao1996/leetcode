# 组合继承

```bash
function Parent(age) {
  this.age = age;
}
Parent.prototype.say = function() {
  console.log(this.age);
};

function Child(age) {
  // 借用父构造函数，并传值
  Parent.call(this, age);
}
// 继承原型
Child.prototype = new Parent();
```

**在继承父类函数的时候调用了父类构造函数，导致子类的原型上多了不需要的父类属性**

# 寄生组合继承

```bash
function Parent(age) {
  this.age = age;
}

Parent.prototype.say = function() {
  console.log(this.age);
};

function Child(age) {
  // 借用父构造函数，并传值
  Parent.call(this, age);
}

// 继承原型
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
```
