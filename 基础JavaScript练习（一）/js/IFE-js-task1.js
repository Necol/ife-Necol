
// 全局新建数组
var arr = [];

var number = getId('number');
var main = getId('main');
var point = getId('point');
var left_input = getId('left-input');
var left_output = getId('left-output');
var right_input = getId('right-input');
var right_output = getId('right-output');


// 获取DOM函数
function getId(id)
{
	if (!document.getElementById) return false;
	return typeof(id)==="string"?document.getElementById(id) : id;
}

// 获取输入值
function getValue()
{
	/*获取字符串 注意获取的是字符串*/
	var test = number.value;
	/*判断返回值不为空并且为isNaN强制转换后为数值的数据才能进行，否则提示*/
	if (test != '' && !isNaN(test))
	 {
	 	test =  parseInt(test);
	 	point.innerText = '';
	 	return test;
	 }
	 else
	 {
	 	point.innerText = '格式不正确，请输出数字';
	 }
}




// 左侧入函数
left_input.onclick = function()
{
     if (getValue() != undefined ) 
	 {
		arr.unshift(getValue());
		add_before();
		console.log(arr);
	 }
}

//// 左侧删除函数
left_output.onclick = function()
{
	if (getValue() != undefined ) 
	{
	    arr.shift();
	    console.log(arr);
	    delete_left();
	}
}

// 右侧入函数
right_input.onclick = function()
{
     if (getValue() != undefined ) 
	 {
		arr.push(getValue());
		console.log(arr);
	    add_behind();
	 }
}

//// 右侧删除函数
right_output.onclick = function()
{
	if (getValue() != undefined ) 
	{
	    arr.pop();
	    console.log(arr);
	    delete_right();
    }
}


// 载入主体部分DIV
function add_behind()
{
	var right_child  = document.createElement('div');
	right_child.innerText = getValue();
	right_child.setAttribute('class','div');
    main.appendChild(right_child);
}

// 插入头部元素节点
function add_before()
{
    var left_child = document.createElement('div');
    left_child.innerText = getValue();
    left_child.setAttribute('class','div');
    main.insertBefore(left_child,main.firstChild);
}

// 右侧移出
function delete_right()
{
	var len = main.children.length;
    if (len > 0) 
    {
    	main.removeChild(main.children[len-1]);
    }
    else
    {
    	point.innerText = '数组为空，请先输出数字';
    }
}

// 左侧移出
function delete_left()
{
	var len = main.children.length;
    if (len > 0) 
    {
    	main.removeChild(main.children[0]);
    }
    else
    {
    	point.innerText = '数组为空，请先输出数字';
    }
}

//点击移出
(function point_move()
{
	main.addEventListener('click',function(event)
	{
		// var event=event||window.event;
  //       var target=event.target||event.srcElement;
		this.removeChild(event.target);
	})
})()




