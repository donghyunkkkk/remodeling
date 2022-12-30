$(document).ready(function(){
	//console.log("실행");
	
	
	let i = 0;
	const next = document.getElementById("leftB");
	const back = document.getElementById("rightB");
	
	$(next).click(function(){
		if(i > 0){
			i--;
			boxview();
			console.log(i);
		}
		
	});
	$(back).click(function(){
		if(i < 4){
			i++;
			boxview();
			console.log(i);
		}
	})
	
	function boxview(){
		if(i == 0){
			$("#box1").animate({left:"0px"});
			$("#box2").animate({left:"500px"});
			$("#box3").animate({left:"1000px"});
			$("#box4").animate({left:"1500px"});
			$("#box5").animate({left:"2000px"});
			$("#box1").addClass("white");
			$("#box2,#box3,#box4,#box5").removeClass("white");
			$(next).addClass("op");
		} else if(i == 1 ){
			$("#box1").animate({left:"-500px"});
			$("#box2").animate({left:"0px"});
			$("#box3").animate({left:"500px"});
			$("#box4").animate({left:"1000px"});
			$("#box5").animate({left:"1500px"});
			$("#box2").addClass("white");
			$("#box1,#box3,#box4,#box5").removeClass("white");
			$(next).removeClass("op");
		} else if (i == 2){
			$("#box1").animate({left:"-1000px"});
			$("#box2").animate({left:"-500px"});
			$("#box3").animate({left:"0"});
			$("#box4").animate({left:"500px"});
			$("#box5").animate({left:"1000px"});
			$("#box3").addClass("white");
			$("#box1,#box2,#box4,#box5").removeClass("white");
			
		} else if (i == 3){
			$("#box1").animate({left:"-1500px"});
			$("#box2").animate({left:"-1000px"});
			$("#box3").animate({left:"-500"});
			$("#box4").animate({left:"0px"});
			$("#box5").animate({left:"500px"});
			$("#box4").addClass("white");
			$("#box1,#box2,#box3,#box5").removeClass("white");
			$(back).removeClass("op");
		} else if (i == 4){
			$("#box1").animate({left:"-2000px"});
			$("#box2").animate({left:"-1500px"});
			$("#box3").animate({left:"-1000px"});
			$("#box4").animate({left:"-500px"});
			$("#box5").animate({left:"0px"});
			$("#box5").addClass("white");
			$("#box1,#box2,#box3,#box4").removeClass("white");
			$(back).addClass("op");
		}
			
	}
	/////////////////////////////////////////////////////////////////	
		
	
	
	let b = 0;
	const smallnext = document.getElementById("smallleft");
	const smallback = document.getElementById("smallright");
	const $img = document.querySelector("#sec3bg");
	const $smallimg = document.querySelector(".v3 img")
	
	$(smallnext).click(function(){
		if(b > 0){
			b--;
			sliding();
			console.log(b);
		}
		
	});
	$(smallback).click(function(){
		if(b < 2){
			b++;
			sliding();
			console.log(b);
		}
	})
	
	
	function sliding(){
		if(b==0){
			$img.src = $img.src.replace("bg2.jpg" , "bg1.jpg" );
			$smallimg.src = $img.src.replace("bg2.jpg" , "bg1.jpg" );
			$(".v2 p").text("심플 베이직");
			$(smallnext).addClass("op");
			
		} else if(b==1){
			$img.src = $img.src.replace("bg1.jpg" , "bg2.jpg" );
			$img.src = $img.src.replace("bg3.jpg" , "bg2.jpg" );
			$smallimg.src = $img.src.replace("bg1.jpg" , "bg2.jpg" );
			$smallimg.src = $img.src.replace("bg3.jpg" , "bg2.jpg" );
			$(".v2 p").text("심플 우드 프리미엄");
			$(smallback).removeClass("op");
			$(smallnext).removeClass("op");
		} else if(b==2){
			$img.src = $img.src.replace("bg2.jpg" , "bg3.jpg" );
			$smallimg.src = $img.src.replace("bg2.jpg" , "bg3.jpg" );
			$(".v2 p").text("베이직 프리미엄");
			$(smallback).addClass("op");
		}
		
	}
		
	////////////////////////////////////////////////////////////////////	
	
	let k = 0;
	$("#ham").click(function(){
		k++;
		if(k==1){
			$(this).animate({marginRight:"170px"});
			$(".header div:last-child").animate({right:"0"});
			$(this).text("×");
		} else if(k==2){
			$(this).animate({marginRight:"20px"});
			$(".header div:last-child").animate({right:"-150px"});
			$(this).html("&#x2630;");
			k=0;
		}
	
	});
	
	$(".menu nav a").click(function(){
		$(this).animate({marginRight:"20px"});
		$(".header div:last-child").animate({right:"-150px"});
		$("#ham").html("&#x2630;");
		k=0;
	});
	
	
	
	
});///////////////////////////////////////