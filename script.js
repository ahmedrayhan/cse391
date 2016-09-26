function date() {
				var date=new Date();
				date=date.toDateString();
				document.getElementById("date").innerHTML =date;
				document.getElementById("lastmod").innerHTML =document.lastModified;
				document.getElementById("loc").innerHTML =window.location;
				
			}

function scroll(){	
	if (document.body.scrollTop>100) {
		document.getElementById("top").className="showtop";
	}else{
		document.getElementById("top").className="hidetop";
	}
}

function toTop(){
	document.body.scrollTop=0;
}