真的气死了。某一日突然发现npm start好好的。就是运行npm run build时，停顿在88%的位置，提示错误。



用了全身力气。所有方法都没用。

把NodeJS卸载重装、node moule删除重装，都不行。



直到最后，把Package.json里的



 },

 "engines": {

  "node": ">=18.0"

 }

}



改成了

},

 "engines": {

  "node": ">=16.0"

 }

}





突然就好了。！！