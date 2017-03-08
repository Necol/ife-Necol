// 定义数组
var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

// 第一种常规方法-->数组操作
// (function () 
// {
  
//   //获取节点
//   var ul = document.getElementById('aqi-list');

//   //美化页面
//   var Days=['一','二','三','四','五','六','七','八','九','十'];
 
//   // 数组的排序,引用类型对原数组进行操作
//   aqiData.sort(function(x,y){
//          return y[1]-x[1];
//   });

//   for (var i = 0,len = aqiData.length;i < len; i++) 
//   {
// 	if (aqiData[i][1] > 60 ) 
// 	{
// 		// 返回结果插入文本-创建文本以及节点
//  		 var li = document.createElement('li');
//   		 var text = document.createTextNode('第' + Days[i] +'名： ' + aqiData[i][0] + '--' +aqiData[i][1]);
//   		 li.appendChild(text);
//   		 ul.appendChild(li);
// 	}
//   }


//filter()方法
(function () 
{
  //获取节点
  var ul = document.getElementById('aqi-list');

  //美化页面
  var Days=['一','二','三','四','五','六','七','八','九','十'];
 
  // 数组的排序,引用类型对原数组进行操作
  aqiData.sort(function(x,y){
         return y[1]-x[1];
  });

  // 方法-->数组操作
  var topmo = aqiData.filter(function(value,index,arry){
     return value[1] > 60;
   })

   for (var i = 0, len = topmo.length ;i < len; i++) 
   {
     var li = document.createElement('li');
    var text = document.createTextNode('第' + Days[i] +'名:' + topmo[i][0] + '--' + topmo[i][1]);
    li.appendChild(text);
    ul.appendChild(li);
   }
})();
       

// })();

// every()
// (function () 
// {
//   //获取节点
//   var ul = document.getElementById('aqi-list');

//   //美化页面
//   var Days=['一','二','三','四','五','六','七','八','九','十'];
 
//   // 数组的排序,引用类型对原数组进行操作
//   aqiData.sort(function(x,y){
//          return y[1]-x[1];
//   });

//   // 方法-->数组操作
//   	aqiData.every(function(value,index,arry)
//   {
  	
//   		if (value[1] > 60) 
//   		{
//   			var li = document.createElement('li');
//   	        var text = document.createTextNode('第' + Days[index] +'名:' + value[0] + '--' + value[1]);
//   	        li.appendChild(text);
//   	        ul.appendChild(li);
//   	        return true;
//   		}
//   })
// })();

// some()方法
// (function () 
// {
//   //获取节点
//   var ul = document.getElementById('aqi-list');

//   //美化页面
//   var Days=['一','二','三','四','五','六','七','八','九','十'];
 
//   // 数组的排序,引用类型对原数组进行操作
//   aqiData.sort(function(x,y){
//          return y[1]-x[1];
//   });

//   // 方法-->数组操作
//   	aqiData.some(function(value,index,arry)
//   {
  	
//   		if (value[1] > 60) 
//   		{
//   			var li = document.createElement('li');
//   	        var text = document.createTextNode('第' + Days[index] +'名:' + value[0] + '--' + value[1]);
//   	        li.appendChild(text);
//   	        ul.appendChild(li);
//   	        return false;
//   		}
//         else return true;
//   })
// })();

//foreach()方法
// (function () 
// {
//   //获取节点
//   var ul = document.getElementById('aqi-list');

//   //美化页面
//   var Days=['一','二','三','四','五','六','七','八','九','十'];
 
//   // 数组的排序,引用类型对原数组进行操作
//   aqiData.sort(function(x,y){
//          return y[1]-x[1];
//   });

//   // 方法-->数组操作
//   	aqiData.forEach(function(value,index,arry)
//   {
  	
//   		if (value[1] > 60) 
//   		{
//   			var li = document.createElement('li');
//   	        var text = document.createTextNode('第' + Days[index] +'名:' + value[0] + '--' + value[1]);
//   	        li.appendChild(text);
//   	        ul.appendChild(li);
//   		}
//   })
// })();





console.log(aqiData);