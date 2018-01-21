let filtered=[];
myStorage = window.localStorage;
let increasebuttons=[];
let totalvalue=0;
function homebuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="inline-block";
    }
   	filtered=[];
   	var myNode = document.getElementsByClassName("filter_list");
	while (myNode[0].firstChild) {
		myNode[0].removeChild(myNode[0].firstChild);
	}
}
if(document.getElementsByClassName("homebtn")[0]!=undefined){
	document.getElementsByClassName("homebtn")[0].onclick = homebuttonfun;	
}

function televisionbuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="none";
    }
    let flag=0;
    for(let index=0; index<filtered.length;index++){
    	if(filtered[index]=="Television")
    		flag=1;
    }
    if(flag==0){
	    let filterlist=document.getElementsByClassName("filter_list");
	    let li=document.createElement('li');
	    li.setAttribute("class", "filter_li");

	    let span=document.createElement('span');
	    span.setAttribute("class","filter_name");
	    span.innerHTML="Television";

	    let button=document.createElement('button');
	    button.setAttribute("class","remove_filter");
	    button.setAttribute("class","remove_television_filter");
	    button.innerHTML="X";

	    li.appendChild(span);
	    li.appendChild(button);
	    filterlist[0].appendChild(li);
	    filtered.push("Television");
	}
    for(let index=0;index<filtered.length;index++){
    	var allfiltered=filtered[index];
	    let alltelevisions=document.getElementsByClassName(allfiltered.toLowerCase());
	    for(let index2 in alltelevisions){
	    	let television_t=alltelevisions[index2];
	    	if(isNaN(Number(index2)))
	    		break;
	    	television_t.style.display="inline-block";
	    }
	}
    function removefilterfun(){
		var ul_ele=document.getElementsByClassName("remove_television_filter")[0].parentNode.parentNode;
		ul_ele.removeChild(document.getElementsByClassName("remove_television_filter")[0].parentNode);

		function remove_element(array, element) {
			console.log(element,"ele");
    		const index = array.indexOf(element);
    		array.splice(index, 1);
		}
		remove_element(filtered,"Television");
		console.log(filtered[0]);
		if(filtered.length==0){
			homebuttonfun();
		}
		else{
			let allitems=document.getElementsByClassName("item"); 
			for(let index in allitems){
		    	let temp=allitems[index];
		    	if(isNaN(Number(index)))
		    		break;
		    	temp.style.display="none";
    		}
    		console.log(filtered[0]);
			for(let index=0;index<filtered.length;index++){
		    	var allfiltered=filtered[index];
			    let alltelevisions=document.getElementsByClassName(allfiltered.toLowerCase());
			    for(let index2 in alltelevisions){
			    	let television_t=alltelevisions[index2];
				    	if(isNaN(Number(index2)))
				    		break;
			    	television_t.style.display="inline-block";
	    		}
	    	}
		}
	}
	
	document.getElementsByClassName("remove_television_filter")[0].onclick = removefilterfun;
}
if(document.getElementsByClassName("televisionbtn")[0]!=undefined){
	document.getElementsByClassName("televisionbtn")[0].onclick = televisionbuttonfun;
}

function mobilebuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="none";
    }
        let flag=0;
    for(let index=0; index<filtered.length;index++){
    	if(filtered[index]=="Mobile")
    		flag=1;
    }
    if(flag==0){
	    let filterlist=document.getElementsByClassName("filter_list");
	    let li=document.createElement('li');
	    li.setAttribute("class", "filter_li");

	    let span=document.createElement('span');
	    span.setAttribute("class","filter_name");
	    span.innerHTML="Mobile";

	    let button=document.createElement('button');
	    button.setAttribute("class","remove_filter");
	    button.setAttribute("class","remove_mobile_filter");
	    button.innerHTML="X";

	    li.appendChild(span);
	    li.appendChild(button);
	    filterlist[0].appendChild(li);
	    filtered.push("Mobile");
	}
    for(let index=0;index<filtered.length;index++){
    	var allfiltered=filtered[index];
	    let allmobiles=document.getElementsByClassName(allfiltered.toLowerCase());
	    for(let index2 in allmobiles){
	    	let mobile_t=allmobiles[index2];
	    	if(isNaN(Number(index2)))
	    		break;
	    	mobile_t.style.display="inline-block";
	    }
	}
    function removefilterfun(){
		var ul_ele=document.getElementsByClassName("remove_mobile_filter")[0].parentNode.parentNode;
		ul_ele.removeChild(document.getElementsByClassName("remove_mobile_filter")[0].parentNode);

		function remove_element(array, element) {
			console.log(element,"ele");
    		const index = array.indexOf(element);
    		array.splice(index, 1);
		}
		remove_element(filtered,"Mobile");
		console.log(filtered[0]);
		if(filtered.length==0){
			homebuttonfun();
		}
		else{
			let allitems=document.getElementsByClassName("item"); 
			for(let index in allitems){
		    	let temp=allitems[index];
		    	if(isNaN(Number(index)))
		    		break;
		    	temp.style.display="none";
    		}
    		console.log(filtered[0]);
			for(let index=0;index<filtered.length;index++){
		    	var allfiltered=filtered[index];
			    let allmobiles=document.getElementsByClassName(allfiltered.toLowerCase());
			    for(let index2 in allmobiles){
			    	let mobile_t=allmobiles[index2];
				    	if(isNaN(Number(index2)))
				    		break;
			    	mobile_t.style.display="inline-block";
	    		}
	    	}
		}
	}
	
	document.getElementsByClassName("remove_mobile_filter")[0].onclick = removefilterfun;
}
if(document.getElementsByClassName("mobilebtn")[0]!=undefined){
	document.getElementsByClassName("mobilebtn")[0].onclick = mobilebuttonfun;
}


function routerbuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="none";
    }
    let flag=0;
    for(let index=0; index<filtered.length;index++){
    	if(filtered[index]=="Router")
    		flag=1;
    }
    if(flag==0){
	    let filterlist=document.getElementsByClassName("filter_list");
	    let li=document.createElement('li');
	    li.setAttribute("class", "filter_li");

	    let span=document.createElement('span');
	    span.setAttribute("class","filter_name");
	    span.innerHTML="Router";

	    let button=document.createElement('button');
	    button.setAttribute("class","remove_filter");
	    button.setAttribute("class","remove_router_filter");
	    button.innerHTML="X";

	    li.appendChild(span);
	    li.appendChild(button);
	    filterlist[0].appendChild(li);
	    filtered.push("Router");
	}
    for(let index=0;index<filtered.length;index++){
    	var allfiltered=filtered[index];
	    let allrouters=document.getElementsByClassName(allfiltered.toLowerCase());
	    for(let index2 in allrouters){
	    	let router_t=allrouters[index2];
	    	if(isNaN(Number(index2)))
	    		break;
	    	router_t.style.display="inline-block";
	    }
	}
    function removefilterfun(){
		var ul_ele=document.getElementsByClassName("remove_router_filter")[0].parentNode.parentNode;
		ul_ele.removeChild(document.getElementsByClassName("remove_router_filter")[0].parentNode);

		function remove_element(array, element) {
			console.log(element,"ele");
    		const index = array.indexOf(element);
    		array.splice(index, 1);
		}
		remove_element(filtered,"Router");
		console.log(filtered[0]);
		if(filtered.length==0){
			homebuttonfun();
		}
		else{
			let allitems=document.getElementsByClassName("item"); 
			for(let index in allitems){
		    	let temp=allitems[index];
		    	if(isNaN(Number(index)))
		    		break;
		    	temp.style.display="none";
    		}
    		console.log(filtered[0]);
			for(let index=0;index<filtered.length;index++){
		    	var allfiltered=filtered[index];
			    let allrouters=document.getElementsByClassName(allfiltered.toLowerCase());
			    for(let index2 in allrouters){
			    	let router_t=allrouters[index2];
				    	if(isNaN(Number(index2)))
				    		break;
			    	router_t.style.display="inline-block";
	    		}
	    	}
		}
	}
	
	document.getElementsByClassName("remove_router_filter")[0].onclick = removefilterfun;
}
if(document.getElementsByClassName("routerbtn")[0]!=undefined){
	document.getElementsByClassName("routerbtn")[0].onclick = routerbuttonfun;
}

function speakerbuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="none";
    }
    let flag=0;
    for(let index=0; index<filtered.length;index++){
    	if(filtered[index]=="Speaker")
    		flag=1;
    }
    if(flag==0){
	    let filterlist=document.getElementsByClassName("filter_list");
	    let li=document.createElement('li');
	    li.setAttribute("class", "filter_li");

	    let span=document.createElement('span');
	    span.setAttribute("class","filter_name");
	    span.innerHTML="Speaker";

	    let button=document.createElement('button');
	    button.setAttribute("class","remove_filter");
	    button.setAttribute("class","remove_speaker_filter");
	    button.innerHTML="X";

	    li.appendChild(span);
	    li.appendChild(button);
	    filterlist[0].appendChild(li);
	    filtered.push("Speaker");
	}
    for(let index=0;index<filtered.length;index++){
    	var allfiltered=filtered[index];
	    let allspeakers=document.getElementsByClassName(allfiltered.toLowerCase());
	    for(let index2 in allspeakers){
	    	let speaker_t=allspeakers[index2];
	    	if(isNaN(Number(index2)))
	    		break;
	    	speaker_t.style.display="inline-block";
	    }
	}
    function removefilterfun(){
		var ul_ele=document.getElementsByClassName("remove_speaker_filter")[0].parentNode.parentNode;
		ul_ele.removeChild(document.getElementsByClassName("remove_speaker_filter")[0].parentNode);

		function remove_element(array, element) {
			console.log(element,"ele");
    		const index = array.indexOf(element);
    		array.splice(index, 1);
		}
		remove_element(filtered,"Speaker");
		console.log(filtered[0]);
		if(filtered.length==0){
			homebuttonfun();
		}
		else{
			let allitems=document.getElementsByClassName("item"); 
			for(let index in allitems){
		    	let temp=allitems[index];
		    	if(isNaN(Number(index)))
		    		break;
		    	temp.style.display="none";
    		}
    		console.log(filtered[0]);
			for(let index=0;index<filtered.length;index++){
		    	var allfiltered=filtered[index];
			    let allspeakers=document.getElementsByClassName(allfiltered.toLowerCase());
			    for(let index2 in allspeakers){
			    	let speaker_t=allspeakers[index2];
				    	if(isNaN(Number(index2)))
				    		break;
			    	speaker_t.style.display="inline-block";
	    		}
	    	}
		}
	}
	
	document.getElementsByClassName("remove_speaker_filter")[0].onclick = removefilterfun;
}
if(document.getElementsByClassName("speakerbtn")[0]!=undefined){
	document.getElementsByClassName("speakerbtn")[0].onclick = speakerbuttonfun;
}

function computerbuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="none";
    }
    let flag=0;
    for(let index=0; index<filtered.length;index++){
    	if(filtered[index]=="Computer")
    		flag=1;
    }
    if(flag==0){
	    let filterlist=document.getElementsByClassName("filter_list");
	    let li=document.createElement('li');
	    li.setAttribute("class", "filter_li");

	    let span=document.createElement('span');
	    span.setAttribute("class","filter_name");
	    span.innerHTML="Computer";

	    let button=document.createElement('button');
	    button.setAttribute("class","remove_filter");
	    button.setAttribute("class","remove_computer_filter");
	    button.innerHTML="X";

	    li.appendChild(span);
	    li.appendChild(button);
	    filterlist[0].appendChild(li);
	    filtered.push("Computer");
	}
    for(let index=0;index<filtered.length;index++){
    	var allfiltered=filtered[index];
	    let allcomputers=document.getElementsByClassName(allfiltered.toLowerCase());
	    for(let index2 in allcomputers){
	    	let computer_t=allcomputers[index2];
	    	if(isNaN(Number(index2)))
	    		break;
	    	computer_t.style.display="inline-block";
	    }
	}
    function removefilterfun(){
		var ul_ele=document.getElementsByClassName("remove_computer_filter")[0].parentNode.parentNode;
		ul_ele.removeChild(document.getElementsByClassName("remove_computer_filter")[0].parentNode);

		function remove_element(array, element) {
			console.log(element,"ele");
    		const index = array.indexOf(element);
    		array.splice(index, 1);
		}
		remove_element(filtered,"Computer");
		console.log(filtered[0]);
		if(filtered.length==0){
			homebuttonfun();
		}
		else{
			let allitems=document.getElementsByClassName("item"); 
			for(let index in allitems){
		    	let temp=allitems[index];
		    	if(isNaN(Number(index)))
		    		break;
		    	temp.style.display="none";
    		}
    		console.log(filtered[0]);
			for(let index=0;index<filtered.length;index++){
		    	var allfiltered=filtered[index];
			    let allcomputers=document.getElementsByClassName(allfiltered.toLowerCase());
			    for(let index2 in allcomputers){
			    	let computer_t=allcomputers[index2];
				    	if(isNaN(Number(index2)))
				    		break;
			    	computer_t.style.display="inline-block";
	    		}
	    	}
		}
	}
	
	document.getElementsByClassName("remove_computer_filter")[0].onclick = removefilterfun;
}
if(document.getElementsByClassName("computerbtn")[0]!=undefined){
	document.getElementsByClassName("computerbtn")[0].onclick = computerbuttonfun;
}

function watchbuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="none";
    }
    let flag=0;
    for(let index=0; index<filtered.length;index++){
    	if(filtered[index]=="Watch")
    		flag=1;
    }
    if(flag==0){
	    let filterlist=document.getElementsByClassName("filter_list");
	    let li=document.createElement('li');
	    li.setAttribute("class", "filter_li");

	    let span=document.createElement('span');
	    span.setAttribute("class","filter_name");
	    span.innerHTML="Watch";

	    let button=document.createElement('button');
	    button.setAttribute("class","remove_filter");
	    button.setAttribute("class","remove_watch_filter");
	    button.innerHTML="X";

	    li.appendChild(span);
	    li.appendChild(button);
	    filterlist[0].appendChild(li);
	    filtered.push("Watch");
	}
    for(let index=0;index<filtered.length;index++){
    	var allfiltered=filtered[index];
	    let allwatchs=document.getElementsByClassName(allfiltered.toLowerCase());
	    for(let index2 in allwatchs){
	    	let watch_t=allwatchs[index2];
	    	if(isNaN(Number(index2)))
	    		break;
	    	watch_t.style.display="inline-block";
	    }
	}
    function removefilterfun(){
		var ul_ele=document.getElementsByClassName("remove_watch_filter")[0].parentNode.parentNode;
		ul_ele.removeChild(document.getElementsByClassName("remove_watch_filter")[0].parentNode);

		function remove_element(array, element) {
			console.log(element,"ele");
    		const index = array.indexOf(element);
    		array.splice(index, 1);
		}
		remove_element(filtered,"Watch");
		console.log(filtered[0]);
		if(filtered.length==0){
			homebuttonfun();
		}
		else{
			let allitems=document.getElementsByClassName("item"); 
			for(let index in allitems){
		    	let temp=allitems[index];
		    	if(isNaN(Number(index)))
		    		break;
		    	temp.style.display="none";
    		}
    		console.log(filtered[0]);
			for(let index=0;index<filtered.length;index++){
		    	var allfiltered=filtered[index];
			    let allwatchs=document.getElementsByClassName(allfiltered.toLowerCase());
			    for(let index2 in allwatchs){
			    	let watch_t=allwatchs[index2];
				    	if(isNaN(Number(index2)))
				    		break;
			    	watch_t.style.display="inline-block";
	    		}
	    	}
		}
	}
	
	document.getElementsByClassName("remove_watch_filter")[0].onclick = removefilterfun;
}
if(document.getElementsByClassName("watchbtn")[0]!=undefined){
	document.getElementsByClassName("watchbtn")[0].onclick = watchbuttonfun;
}

function topwearbuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="none";
    }
    let flag=0;
    for(let index=0; index<filtered.length;index++){
    	if(filtered[index]=="Topwear")
    		flag=1;
    }
    if(flag==0){
	    let filterlist=document.getElementsByClassName("filter_list");
	    let li=document.createElement('li');
	    li.setAttribute("class", "filter_li");

	    let span=document.createElement('span');
	    span.setAttribute("class","filter_name");
	    span.innerHTML="Topwear";

	    let button=document.createElement('button');
	    button.setAttribute("class","remove_filter");
	    button.setAttribute("class","remove_topwear_filter");
	    button.innerHTML="X";

	    li.appendChild(span);
	    li.appendChild(button);
	    filterlist[0].appendChild(li);
	    filtered.push("Topwear");
	}
    for(let index=0;index<filtered.length;index++){
    	var allfiltered=filtered[index];
	    let alltopwears=document.getElementsByClassName(allfiltered.toLowerCase());
	    for(let index2 in alltopwears){
	    	let topwear_t=alltopwears[index2];
	    	if(isNaN(Number(index2)))
	    		break;
	    	topwear_t.style.display="inline-block";
	    }
	}
    function removefilterfun(){
		var ul_ele=document.getElementsByClassName("remove_topwear_filter")[0].parentNode.parentNode;
		ul_ele.removeChild(document.getElementsByClassName("remove_topwear_filter")[0].parentNode);

		function remove_element(array, element) {
			console.log(element,"ele");
    		const index = array.indexOf(element);
    		array.splice(index, 1);
		}
		remove_element(filtered,"Topwear");
		console.log(filtered[0]);
		if(filtered.length==0){
			homebuttonfun();
		}
		else{
			let allitems=document.getElementsByClassName("item"); 
			for(let index in allitems){
		    	let temp=allitems[index];
		    	if(isNaN(Number(index)))
		    		break;
		    	temp.style.display="none";
    		}
    		console.log(filtered[0]);
			for(let index=0;index<filtered.length;index++){
		    	var allfiltered=filtered[index];
			    let alltopwears=document.getElementsByClassName(allfiltered.toLowerCase());
			    for(let index2 in alltopwears){
			    	let topwear_t=alltopwears[index2];
				    	if(isNaN(Number(index2)))
				    		break;
			    	topwear_t.style.display="inline-block";
	    		}
	    	}
		}
	}
	
	document.getElementsByClassName("remove_topwear_filter")[0].onclick = removefilterfun;
}
if(document.getElementsByClassName("topwearbtn")[0]!=undefined){
	document.getElementsByClassName("topwearbtn")[0].onclick = topwearbuttonfun;
}

function bottomwearbuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="none";
    }
    let flag=0;
    for(let index=0; index<filtered.length;index++){
    	if(filtered[index]=="Bottomwear")
    		flag=1;
    }
    if(flag==0){
	    let filterlist=document.getElementsByClassName("filter_list");
	    let li=document.createElement('li');
	    li.setAttribute("class", "filter_li");

	    let span=document.createElement('span');
	    span.setAttribute("class","filter_name");
	    span.innerHTML="Bottomwear";

	    let button=document.createElement('button');
	    button.setAttribute("class","remove_filter");
	    button.setAttribute("class","remove_bottomwear_filter");
	    button.innerHTML="X";

	    li.appendChild(span);
	    li.appendChild(button);
	    filterlist[0].appendChild(li);
	    filtered.push("Bottomwear");
	}
    for(let index=0;index<filtered.length;index++){
    	var allfiltered=filtered[index];
	    let allbottomwears=document.getElementsByClassName(allfiltered.toLowerCase());
	    for(let index2 in allbottomwears){
	    	let bottomwear_t=allbottomwears[index2];
	    	if(isNaN(Number(index2)))
	    		break;
	    	bottomwear_t.style.display="inline-block";
	    }
	}
    function removefilterfun(){
		var ul_ele=document.getElementsByClassName("remove_bottomwear_filter")[0].parentNode.parentNode;
		ul_ele.removeChild(document.getElementsByClassName("remove_bottomwear_filter")[0].parentNode);

		function remove_element(array, element) {
			console.log(element,"ele");
    		const index = array.indexOf(element);
    		array.splice(index, 1);
		}
		remove_element(filtered,"Bottomwear");
		console.log(filtered[0]);
		if(filtered.length==0){
			homebuttonfun();
		}
		else{
			let allitems=document.getElementsByClassName("item"); 
			for(let index in allitems){
		    	let temp=allitems[index];
		    	if(isNaN(Number(index)))
		    		break;
		    	temp.style.display="none";
    		}
    		console.log(filtered[0]);
			for(let index=0;index<filtered.length;index++){
		    	var allfiltered=filtered[index];
			    let allbottomwears=document.getElementsByClassName(allfiltered.toLowerCase());
			    for(let index2 in allbottomwears){
			    	let bottomwear_t=allbottomwears[index2];
				    	if(isNaN(Number(index2)))
				    		break;
			    	bottomwear_t.style.display="inline-block";
	    		}
	    	}
		}
	}
	
	document.getElementsByClassName("remove_bottomwear_filter")[0].onclick = removefilterfun;
}
if(document.getElementsByClassName("bottomwearbtn")[0]!=undefined){
	document.getElementsByClassName("bottomwearbtn")[0].onclick = bottomwearbuttonfun;
}

function footwearbuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="none";
    }
    let flag=0;
    for(let index=0; index<filtered.length;index++){
    	if(filtered[index]=="Footwear")
    		flag=1;
    }
    if(flag==0){
	    let filterlist=document.getElementsByClassName("filter_list");
	    let li=document.createElement('li');
	    li.setAttribute("class", "filter_li");

	    let span=document.createElement('span');
	    span.setAttribute("class","filter_name");
	    span.innerHTML="Footwear";

	    let button=document.createElement('button');
	    button.setAttribute("class","remove_filter");
	    button.setAttribute("class","remove_footwear_filter");
	    button.innerHTML="X";

	    li.appendChild(span);
	    li.appendChild(button);
	    filterlist[0].appendChild(li);
	    filtered.push("Footwear");
	}
    for(let index=0;index<filtered.length;index++){
    	var allfiltered=filtered[index];
	    let allfootwears=document.getElementsByClassName(allfiltered.toLowerCase());
	    for(let index2 in allfootwears){
	    	let footwear_t=allfootwears[index2];
	    	if(isNaN(Number(index2)))
	    		break;
	    	footwear_t.style.display="inline-block";
	    }
	}
    function removefilterfun(){
		var ul_ele=document.getElementsByClassName("remove_footwear_filter")[0].parentNode.parentNode;
		ul_ele.removeChild(document.getElementsByClassName("remove_footwear_filter")[0].parentNode);

		function remove_element(array, element) {
			console.log(element,"ele");
    		const index = array.indexOf(element);
    		array.splice(index, 1);
		}
		remove_element(filtered,"Footwear");
		console.log(filtered[0]);
		if(filtered.length==0){
			homebuttonfun();
		}
		else{
			let allitems=document.getElementsByClassName("item"); 
			for(let index in allitems){
		    	let temp=allitems[index];
		    	if(isNaN(Number(index)))
		    		break;
		    	temp.style.display="none";
    		}
    		console.log(filtered[0]);
			for(let index=0;index<filtered.length;index++){
		    	var allfiltered=filtered[index];
			    let allfootwears=document.getElementsByClassName(allfiltered.toLowerCase());
			    for(let index2 in allfootwears){
			    	let footwear_t=allfootwears[index2];
				    	if(isNaN(Number(index2)))
				    		break;
			    	footwear_t.style.display="inline-block";
	    		}
	    	}
		}
	}
	
	document.getElementsByClassName("remove_footwear_filter")[0].onclick = removefilterfun;
}
if(document.getElementsByClassName("footwearbtn")[0]!=undefined){
	document.getElementsByClassName("footwearbtn")[0].onclick = footwearbuttonfun;
}

function groomingbuttonfun() {
    let allitems=document.getElementsByClassName("item"); 
    for(let index in allitems){
    	let temp=allitems[index];
    	if(isNaN(Number(index)))
    		break;
    	temp.style.display="none";
    }
    let flag=0;
    for(let index=0; index<filtered.length;index++){
    	if(filtered[index]=="Grooming")
    		flag=1;
    }
    if(flag==0){
	    let filterlist=document.getElementsByClassName("filter_list");
	    let li=document.createElement('li');
	    li.setAttribute("class", "filter_li");

	    let span=document.createElement('span');
	    span.setAttribute("class","filter_name");
	    span.innerHTML="Grooming";

	    let button=document.createElement('button');
	    button.setAttribute("class","remove_filter");
	    button.setAttribute("class","remove_grooming_filter");
	    button.innerHTML="X";

	    li.appendChild(span);
	    li.appendChild(button);
	    filterlist[0].appendChild(li);
	    filtered.push("Grooming");
	}
    for(let index=0;index<filtered.length;index++){
    	var allfiltered=filtered[index];
	    let allgroomings=document.getElementsByClassName(allfiltered.toLowerCase());
	    for(let index2 in allgroomings){
	    	let grooming_t=allgroomings[index2];
	    	if(isNaN(Number(index2)))
	    		break;
	    	grooming_t.style.display="inline-block";
	    }
	}
    function removefilterfun(){
		var ul_ele=document.getElementsByClassName("remove_grooming_filter")[0].parentNode.parentNode;
		ul_ele.removeChild(document.getElementsByClassName("remove_grooming_filter")[0].parentNode);

		function remove_element(array, element) {
			console.log(element,"ele");
    		const index = array.indexOf(element);
    		array.splice(index, 1);
		}
		remove_element(filtered,"Grooming");
		console.log(filtered[0]);
		if(filtered.length==0){
			homebuttonfun();
		}
		else{
			let allitems=document.getElementsByClassName("item"); 
			for(let index in allitems){
		    	let temp=allitems[index];
		    	if(isNaN(Number(index)))
		    		break;
		    	temp.style.display="none";
    		}
    		console.log(filtered[0]);
			for(let index=0;index<filtered.length;index++){
		    	var allfiltered=filtered[index];
			    let allgroomings=document.getElementsByClassName(allfiltered.toLowerCase());
			    for(let index2 in allgroomings){
			    	let grooming_t=allgroomings[index2];
				    	if(isNaN(Number(index2)))
				    		break;
			    	grooming_t.style.display="inline-block";
	    		}
	    	}
		}
	}
	
	document.getElementsByClassName("remove_grooming_filter")[0].onclick = removefilterfun;
}
if(document.getElementsByClassName("groomingbtn")[0]!=undefined){
	document.getElementsByClassName("groomingbtn")[0].onclick = groomingbuttonfun;
}

var addtocartbuttons=document.getElementsByClassName("addbutton");

for(let i=0;i<addtocartbuttons.length;i++){
	addtocartbuttons[i].onclick = addtocartfun;
}

function addtocartfun(){
	let productdiscription=this.parentNode.parentNode;
	let img=productdiscription.childNodes[1].cloneNode(true).src;
	let productname=productdiscription.childNodes[3].cloneNode(true).innerHTML;
	let brandname=productdiscription.childNodes[5].cloneNode(true).innerHTML;
	let price=productdiscription.childNodes[13].cloneNode(true).innerHTML;	
	let object={
		objimg:img,
		objproductname:productname,
		objbrandname:brandname,
		objprice:price
	};
	let cartbutton=productdiscription.childNodes[11].childNodes[1];
	cartbutton.innerHTML="ADDED TO CART"
	myStorage.setItem(img, JSON.stringify(object));
	var user = JSON.parse(myStorage.getItem(productname));

	  var values = [],
        keys = Object.keys(myStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( myStorage.getItem(keys[i]));
        // myStorage.removeItem(keys[i]);
    }
   
}
window.onload = addingtocart;

function addingtocart() { 
	var keys = Object.keys(myStorage),
    i = keys.length;
    var ul=document.getElementsByClassName("cartitems")[0];
    if(ul==undefined)
    	return ;
    while ( i-- ) {
        // console.log(JSON.parse(myStorage.getItem(keys[i])).objimg);
        let li=document.createElement('li');
        li.className="cartitem";
        let img=document.createElement('img');
        img.src=JSON.parse(myStorage.getItem(keys[i])).objimg;
        img.className="itempicture";
        let span1=document.createElement('span');
        let span2=document.createElement('span');
        let span3=document.createElement('span');
        let span4=document.createElement('span');
        span1.className="productname";
        span2.className="brandname";
        span3.className="review";
        span4.className="pricetagcart";
        span1.innerHTML=JSON.parse(myStorage.getItem(keys[i])).objproductname;
        span2.innerHTML=JSON.parse(myStorage.getItem(keys[i])).objbrandname;
        span3.innerHTML="Seller Info";
        span4.innerHTML=JSON.parse(myStorage.getItem(keys[i])).objprice;
        li.appendChild(img);
        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(span3);
        li.appendChild(span4);
        let quantitydiv=document.createElement('div');
        quantitydiv.className="quantity";
        let element_p=document.createElement('p');
        element_p.className="quantityname";
        element_p.innerHTML="Quantity:";
        let decrease_button=document.createElement('button');
        decrease_button.className="decrease";
        decrease_button.innerHTML="-";
        decrease_button.onclick=decreasecount;
        let quantitycount=document.createElement('div');
        quantitycount.className="itemquantity";
        quantitycount.innerHTML="1";
        let increase_button=document.createElement('button');
        increase_button.className="increase";
        increase_button.innerHTML="+";
        increase_button.onclick=increasecount;

        let remove_button=document.createElement('button');
        remove_button.className="remove";
        let remove_icon=document.createElement('i');
        remove_icon.className="material-icons";
        remove_icon.setAttribute('id','delete-icon');
        let text = document.createTextNode("	delete");
        remove_icon.appendChild(text);
        remove_button.appendChild(remove_icon);
        remove_button.onclick=deleteitem;

        quantitydiv.appendChild(element_p);
        quantitydiv.appendChild(decrease_button);
        quantitydiv.appendChild(quantitycount);
        quantitydiv.appendChild(increase_button);
        quantitydiv.appendChild(remove_button);

        let pincodeform = document.createElement('form');
        pincodeform.className="pincode";
        let pincodeuserinput = document.createElement('input');
        pincodeuserinput.className = "pincodeinput";
        pincodeuserinput.setAttribute('placeholder','Enter Your Pincode');
        pincodeuserinput.setAttribute('type','text');
        pincodeform.appendChild(pincodeuserinput);

        let deliverydetail =document.createElement('ul');
        deliverydetail.className="deliverydetails";
        text = document.createTextNode("Delivery Details");
        deliverydetail.appendChild(text);

        let listitem1 = document.createElement('li');
        text = document.createTextNode("Average Delivery Time");
        listitem1.appendChild(text);

        let listitem2 = document.createElement('li');
        text = document.createTextNode("Delivery Charge");
        listitem2.appendChild(text);
        deliverydetail.appendChild(listitem1);
        deliverydetail.appendChild(listitem2);

        li.appendChild(quantitydiv);
        li.appendChild(pincodeform);
        li.appendChild(deliverydetail);
        ul.appendChild(li);

        let strings=JSON.parse(myStorage.getItem(keys[i])).objprice.split(" ");
        totalvalue+=parseInt(strings[strings.length-1]);
  		calculatetotal();
    }
}
function calculatetotal(){
	let pricebody=document.getElementsByClassName('pricebody')[0];
	let itemprice=pricebody.childNodes[1].childNodes[3];
	itemprice.innerHTML=String(totalvalue);
	let discount=pricebody.childNodes[3].childNodes[3];
	discount.innerHTML=String(totalvalue*0.05);
	let gst=pricebody.childNodes[5].childNodes[3];
	gst.innerHTML=String((totalvalue-totalvalue*0.05)*0.18);
	let totalprice=document.getElementsByClassName('totalpricep')[0];
	totalprice.childNodes[3].innerHTML=String(totalvalue-totalvalue*0.05+(totalvalue-totalvalue*0.05)*0.18);
	console.log();
}

for(let i=0;i<increasebuttons.length;i++){
	console.log(i);
	increasebuttons[i].onclick = increasecount;
}
function increasecount(){
	let parent=this.parentNode;
	let quantitynumber=parseInt(parent.childNodes[2].innerHTML);
	if(quantitynumber<100){
		parent.childNodes[2].innerHTML=quantitynumber+1;
		let strings=parent.previousSibling.innerHTML.split(" ");
		totalvalue+=parseInt(strings[strings.length-1]);
		calculatetotal();
	}
	
}

function decreasecount(){
	let parent=this.parentNode;
	let quantitynumber=parseInt(parent.childNodes[2].innerHTML);
	if(quantitynumber>0){
		parent.childNodes[2].innerHTML=quantitynumber-1;
		let strings=parent.previousSibling.innerHTML.split(" ");
		totalvalue-=parseInt(strings[strings.length-1]);
		calculatetotal();
	}
}

function deleteitem(){
	myStorage.removeItem(this.parentNode.parentNode.childNodes[0].src);
	let parent=this.parentNode;
	let quantitynumber=parseInt(parent.childNodes[2].innerHTML);
	let strings=parent.previousSibling.innerHTML.split(" ");
	totalvalue-=parseInt(strings[strings.length-1])*quantitynumber;
	calculatetotal();
	this.parentNode.parentNode.remove();
}