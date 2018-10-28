function greet()
{
	
	window.alert("hello everyone");
}

function init()
{
	document.getElementById("first").src = "flower2.png";
	let images = document.getElementById("container").getElementsByTagName("img");
	for(var i=0; i<images.length; i++)
	{
		if(i%2 !=0)
			images[i].src = "flower2.png";
	}
	
	document.getElementById("test_null").innerHTML = "<div><p>Your are doing great!</p></div>";
	let image = document.createElement("img");
	image.src="flower1.png";
	document.getElementById("new_element").appendChild(image);
	
}

function init_form()
{
	document.getElementById("first").src = "flower2.png";
	
	let images = document.getElementById("container").getElementsByTagName("img");
	for(var i=0; i<images.length; i++)
	{
		if(i%2 !=0)
			images[i].src = "flower2.png";
	}
	
	document.getElementById("test_null").innerHTML = "<div><p>Your are doing great!</p></div>";
	
	let image = document.createElement("img");
	image.src="flower1.png";
	document.getElementById("new_element").appendChild(image);
	
	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange"];

	for (var i = spans.length - 1; i >= 0; i--)
	{
		spans[i].style.color = colors[i%2];
	}
	
	var changeSrc = function(event) {
		if (event.target.src) 
		{
			event.target.src = "flower2.png";
		}
	};
	
	document.getElementById("event").addEventListener("mouseover", changeSrc);
}

