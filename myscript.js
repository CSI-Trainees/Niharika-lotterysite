function random()
{


        document.getElementById('no').innerHTML=(Math.floor(Math.random()* (30-20)) +20);
        document.getElementById('no').disabled=true;

        	}
function display()
{
	var x=document.getElementById("size").value ;
	if(x==23)
	{
		document.getElementById("win").style.display = "block";
	}
	else
		if(x==27)
	{
		document.getElementById("win2").style.display = "block";
	}
	else
		if(x==20)
	{
		document.getElementById("win3").style.display = "block";
	}
	else
		document.getElementById("lose").style.display = "block";

};