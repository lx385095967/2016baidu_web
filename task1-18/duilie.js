window.onload =function()
{
	//获取元素
	var leftIn = document.getElementById('leftin');
	var rightIn = document.getElementById('rightin');
	var leftOut = document.getElementById('leftout');
	var rightOut = document.getElementById('rightout');
	var box  = document.getElementById('box');
	var text = "";
	//右侧进
	rightIn.onclick = function()
	{
		text = document.getElementsByTagName('input')[0].value;
		var Div = document.createElement("div");
		Div.innerHTML = text;
		box.appendChild(Div);
	};
	//左侧进
	leftIn.onclick = function()
	{
		text = document.getElementsByTagName('input')[0].value;
		var Div = document.createElement("div");
		Div.innerHTML = text;
		var box1 = box.getElementsByTagName('div')[0];
		box.insertBefore(Div,box1);
	};
	//左侧出
	leftOut.onclick = function()
	{
		var headbox = box.firstChild;
		box.removeChild(headbox);
		alert("删除的节点为："+headbox.innerHTML);
	};
	//右侧出
	rightOut.onclick = function()
	{
		var lastbox = box.lastChild;
		box.removeChild(lastbox);
		alert("删除的节点为："+lastbox.innerHTML);
	};
	//绑定删除事件
	box.onmouseover = function()
	{
		var childbox = box.getElementsByTagName('div');
		for(var i in childbox)
		{
			childbox[i].index=i;
			childbox[i].onclick = function()
			{
				box.removeChild(box.childNodes[this.index]);
			}
		}
	};
} 