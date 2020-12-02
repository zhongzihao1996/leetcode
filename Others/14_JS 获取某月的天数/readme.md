# JS 获取某月的天数

## 基础版本

``` bash 
function getMonthCountDay (year, month) {
  switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        return 31
    case 4:
    case 6:
    case 9:
    case 11:
        return 30
    case 2:
        return year%400==0?(29):(year%4!=0||year%100==0?28:29)
  }
}

``` 

## 进位

``` bash
function getMonthCountDay (year, month) {
  return 32 - new Date(year, month-1, 32).getDate()
}
```

## 退位

``` bash 
function getMonthCountDay (year, month) {
  return new Date(year, month, 0).getDate()
}
```
