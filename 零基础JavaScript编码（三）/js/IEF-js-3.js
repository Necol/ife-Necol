
/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */

function getData() 
{
   var source = document.getElementById('source').children,
       data = [],
       len = source.length;

       for (var i = 0 ; i < len; i++) 
       {
          /* split是字符串的方法
          source[i].textContent返回值是一个字符串数组，对此字符串数组以指定符分割后返回的一个新的数组，不会改变原数组
          这样在data数组中推入的是一个数组，从而形成一个二给数组*/
          data.push(source[i].textContent.split('空气质量：'));
          data[i][1] = parseInt(data[i][1]);
          
       }
       return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) 
{
    data.sort(function(x,y)
    {
      return x[1]-y[1];
    })
}


/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) 
{
    var Days=['一','二','三','四','五','六','七','八','九','十'];
    var resort = document.getElementById('resort');
    
    if (resort.children.length >= 7) return false;
    for (var i = 0; i < data.length; i++) 
    {
        var li = document.createElement('li');
        var b = document.createElement('b');
        var text = document.createTextNode('第' + Days[i] + '名: ' + data[i][0] + '空气质量');
        var b_text = document.createTextNode(':' + data[i][1]);

        b.appendChild(b_text);
        li.appendChild(text);
        li.appendChild(b);
        resort.appendChild(li);
    }
}

function init() 
{

  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
  var init = document.getElementById('sort-btn');
  init.onclick  = function()
  {
    var aqiData = getData();
    sortAqiData(aqiData);
    render(aqiData);
  }

}

init();