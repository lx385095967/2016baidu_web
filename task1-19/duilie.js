window.onload =function()
{
	//获取元素
	var leftIn = document.getElementById('leftin');
	var rightIn = document.getElementById('rightin');
	var leftOut = document.getElementById('leftout');
	var rightOut = document.getElementById('rightout');
	var Render = document.getElementById('render');
	var box  = document.getElementById('box');
	var text = "";
	//右侧进
	rightIn.onclick = function()
	{
		text = document.getElementsByTagName('input')[0].value;
		var num = box.getElementsByTagName('div').length;
		console.log(num);
		if(text>10&&text<100){
			if(num>60)
			{
				alert("个数已经超过10个了");
			}
			var Div = document.createElement("div");
			Div.innerHTML = text;
			Div.style.height = text+"px";
			box.appendChild(Div);		
		}
			
		else{
			alert("请输入10-100之间的数字");
		}
	};
	//左侧进
	leftIn.onclick = function()
	{
		text = document.getElementsByTagName('input')[0].value;
		if(text>10&&text<100){
			if(num>60)
			{
				alert("个数已经超过10个了");
			}
			var Div = document.createElement("div");
			Div.innerHTML = text;
			Div.style.height = text+"px";
			var box1 = box.getElementsByTagName('div')[0];
			box.insertBefore(Div,box1);
		}
		else{
			alert("请输入10-100之间的数字");
		}
		
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
	Render.onclick = function()
	{
		var sourceDiv = box.getElementsByTagName('div');
		var sourceData = new Array();
		for(var i = 0; i<sourceDiv.length; i++)
		{
			sourceData[i] =sourceDiv[i].innerHTML;
		}

		sourceData.sort(function(a,b){
			return a-b;
		});
		box.innerHTML = "";
		for(var i= 0; i<sourceData.length; i++)
		{
			var Div1 = document.createElement("div");
			Div1.innerHTML=sourceData[i];
			Div1.style.height = sourceData[i]+"px";
			box.appendChild(Div1);
		}
	}

} 