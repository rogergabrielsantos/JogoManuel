var controls = true;//controle do icone do som
var contbal = false;//controle do balao
var resp;
var vida = 3;
var fase = 1;
var cont = 0;

function som(){
		if (controls==true){
		
			document.getElementById("cSom").src = "som2.png";
			document.getElementById("aud").pause();
		
			controls = false;
		}else{
		document.getElementById("cSom").src = "som1.png";
		document.getElementById("aud").play();	
		controls = true;
		
		}
		}
		
function jogar(){
			cont = Math.floor(Math.random() * 11)+1;
			document.getElementById("principal").src = "opcao"+cont+".png";
			document.getElementById("inst").style.display = "none";
			document.getElementById("jog").style.display = "none";
			document.getElementById("nivel").src = fase+".png";
			document.getElementById("vida").src = "life"+vida+".png";	
			document.getElementById("int1").style.display = "block";	
			document.getElementById("int2").style.display = "block";
			document.getElementById("int3").style.display = "block";
			document.getElementById("int4").style.display = "block";
			document.getElementById("b1").src = cont+"A.png";	
			document.getElementById("b2").src = cont+"B.png";	
			document.getElementById("b3").src = cont+"C.png";	
			document.getElementById("b4").src = cont+"D.png";	
		}	
function dica1(){
	if(cont>0){
		if(contbal==false){
			document.getElementById("balFace1").style.display = "block";	
			contbal=true;
		}else{
			document.getElementById("balFace1").style.display = "none";
			contbal=false;
		}
	}

	}
function dica2(){
	if(cont>0){
		if(contbal==false){
			document.getElementById("balFace2").style.display = "block";	
			contbal=true;
			
		}else{
			document.getElementById("balFace2").style.display = "none";
			contbal=false;
		}
		}
}
		
function dica3(){
	if(cont>0){
		if(contbal==false){
			document.getElementById("balFace3").style.display = "block";	
			contbal=true;
		}else{
			document.getElementById("balFace3").style.display = "none";
			contbal=false;
		}
		}
}
function dica4(){
		if(cont>0){
		if(contbal==false){
			document.getElementById("balFace4").style.display = "block";	
			contbal=true;
		}else{
			document.getElementById("balFace4").style.display = "none";
			contbal=false;
		}
		}
}

function trocaElementoCerto (nome) {
	document.getElementById(nome).src = "certo.png";
}

function trocaElementoErrado (nome, imagem) {
	document.getElementById(nome).src = "errado.png";
}
		
function resposta1(){
	
	if((cont==1)||(cont==5)||(cont==10)){
		function trocaElementoCerto("balvelho");
		// trocaElemento("balvelho1", "certo.png");
		// document.getElementById("balvelho1").src = "certo.png";
		document.getElementById("balvelho").style.display = "block";	
		resp= true;
		document.getElementById("aud2").play();	
		
	}else{
		trocaElemento("balvelho1", "errado.png");
		// document.getElementById("balvelho1").src = "errado.png";
		document.getElementById("balvelho").style.display = "block";	
		resp=false;
		document.getElementById("aud3").play();	
	}
	document.getElementById("balFim").style.display = "block";	
	
	
}	
function resposta2(){
	if((cont==3)||(cont==6)||(cont==12)){
		document.getElementById("balvelho1").src = "certo.png";
		document.getElementById("balvelho").style.display = "block";	
		resp= true;
		document.getElementById("aud2").play();	
	}else{
		document.getElementById("balvelho1").src = "errado.png";
		document.getElementById("balvelho").style.display = "block";	
		resp=false;
		document.getElementById("aud1").play();	
	}
	document.getElementById("balFim").style.display = "block";	
}	
function resposta3(){
	if((cont==4)||(cont==8)||(cont==9)){
	document.getElementById("balvelho1").src = "certo.png";
		document.getElementById("balvelho").style.display = "block";	
		resp= true;
		document.getElementById("aud2").play();	
	}else{
		document.getElementById("balvelho1").src = "errado.png";
		document.getElementById("balvelho").style.display = "block";	
		resp=false;
		document.getElementById("aud3").play();	
	}
	document.getElementById("balFim").style.display = "block";	
}
function resposta4(){
	if((cont==7)||(cont==2)||(cont==11)){
		document.getElementById("balvelho1").src = "certo.png";
		document.getElementById("balvelho").style.display = "block";	
		resp= true;
		document.getElementById("aud2").play();	
	}else{
		document.getElementById("balvelho1").src = "errado.png";
		document.getElementById("balvelho").style.display = "block";	
		resp=false;
		document.getElementById("aud3").play();	
	}
	document.getElementById("balFim").style.display = "block";	
}		
		

function continua(){
	if(resp==true){
	
		document.getElementById("balvelho").style.display = "none";	
		document.getElementById("balFim").style.display = "none";
		fase= fase +1;
		document.getElementById("nivel").src = fase+".png";	
		jogar();
		
		if(fase==7){
		document.getElementById("finalizar1").src = "vencedor.png";
		document.getElementById("balFinalizar").style.display = "block";	
		
		}
		
	}else{
		
		
		
		if(vida==1){
		document.getElementById("finalizar1").src = "perdedor.png";
		document.getElementById("balFinalizar").style.display = "block";	
		
		}
		document.getElementById("balvelho").style.display = "none";	
		document.getElementById("balFim").style.display = "none";
		vida= vida -1;
		document.getElementById("vida").src = "life"+vida+".png";	
	}
	
}
function chama(){

document.getElementById("aud1").play();	
	
}	

function reiniciar(){
	window.location="index2.html";

	
}


