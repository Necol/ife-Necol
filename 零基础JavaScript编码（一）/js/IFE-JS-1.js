
(function() {
  /*    
  在注释下方写下代码
  给按钮button绑定一个点击事件
  在事件处理函数中
  获取aqi-input输入的值，并显示在aqi-display中
  */
  
  var btn = document.getElementById('button');
  // 绑定事件
  btn.onclick = function()
  {
  	// 获取DOM值
    var text = document.getElementById('aqi-input').value;
    // 插入文本
    if (text == '') 
    {
       document.getElementById('aqi-display').innerText = '请重新尝试输入有效字符';
    }
    else
    {
       document.getElementById('aqi-display').innerText = text;
    }
  }

})();