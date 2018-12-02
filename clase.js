var arrayBolas=[];
var arrayBlokes=[];
var contador=0;
class Pelota{
    constructor(posx,posy,color,radio){
        this.posx=posx;
        this.posy=posy;
        this.color=color;
        this.radio=radio;
        this.velox=10;
        this.veloy=10;
        this.pelota=document.createElementNS(("http://www.w3.org/2000/svg"),"circle");
        this.pelota.setAttribute("cx",this.posx);
        this.pelota.setAttribute("cy",this.posy);
        this.pelota.setAttribute("r",this.radio);
        this.pelota.setAttribute("fill",this.color);
        document.getElementById("svg").appendChild(this.pelota);
    }
    
dibuja(){
     this.pelota.setAttribute("cx",this.posx);
    this.pelota.setAttribute("cy",this.posy);
}

mover(){
    
//    colision con paredes
   
    if(this.posx<=2||this.posx>=600 ){
    this.velox=this.velox*-1;
}
       if(this.posy<=2||this.posy>=600 ){
    this.veloy=this.veloy*-1;
}
    
    this.posx=this.posx+this.velox;
     this.posy=this.posy+this.veloy;
    this.choque();
    this.dibuja();
}
choque(){
if(j1.posx<=this.posx && j1.posx+100>=this.posx) {
    if(this.posy>=570)
        this.veloy=this.veloy*-1;
    }
}
    

}

class jugador{
    constructor(posx,posy,altura,ancho,rx,ry){
        this.posx=posx;
        this.posy=posy;
        this.altura=altura;
        this.ancho=ancho;
        this.rx=rx;
        this.ry=ry;
        this.jugador=document.createElementNS(("http://www.w3.org/2000/svg"),"rect");
        this.jugador.setAttribute("x",this.posx);
        this.jugador.setAttribute("y",this.posy);
        this.jugador.setAttribute("height",this.altura);
        this.jugador.setAttribute("width",this.ancho);
        this.jugador.setAttribute("rx",this.rx);
        this.jugador.setAttribute("ry",this.ry);
         document.getElementById("svg").appendChild(this.jugador);
    }
    dibuja(){
     this.jugador.setAttribute("x",this.posx);
}
    mueveD(){
        this.posx=this.posx+10;
        this.dibuja();
    }
     mueveI(){
        this.posx=this.posx-10;
         this.dibuja();
    }
    borra(){
    document.getElementById("svg").removeChild(this.jugador);
        this.posx=-200;
        this.posy=-200;
        this.altura=0;
        this.ancho=0;
        this.rx=0;
        this.ry=0;
}
}


class bloke{
    constructor(){
        this.posx=parseInt(Math.random()*590);
        this.posy=(parseInt(Math.random()*590)+150)*-1;
        this.altura=parseInt(Math.random()*24)+25;
        this.ancho=parseInt(Math.random()*24)+25;
        this.rx=parseInt(Math.random()*10+2);
        this.ry=parseInt(Math.random()*10+2);
        this.velox=0;
        this.veloy=7;
        this.pasa=0;
        this.bloke=document.createElementNS(("http://www.w3.org/2000/svg"),"rect");
        this.bloke.setAttribute("x",this.posx);
        this.bloke.setAttribute("y",this.posy);
        this.bloke.setAttribute("height",this.altura);
        this.bloke.setAttribute("width",this.ancho);
        this.bloke.setAttribute("rx",this.rx);
        this.bloke.setAttribute("ry",this.ry);
         document.getElementById("svg").appendChild(this.bloke);
    }
    dibuja(){
     this.bloke.setAttribute("x",this.posx);
    this.bloke.setAttribute("y",this.posy);
}
    cae(){
//         var pasox=7;
//        var pasoy=5;
    
   
    if(this.posx<=2||this.posx>=600 ){
    this.velox=this.velox*-1;
}
       if(this.posy>=600 ){
    this.veloy=this.veloy*-1;
        this.pasa=1;
           this.velox=parseInt(Math.random()*10)*-1;
}
        if(this.pasa==1 && this.posy<=2 ){
            this.veloy=this.veloy*-1;
            this.velox=parseInt(Math.random()*10)*-1;
        }
    
    this.posx=this.posx+this.velox;
     this.posy=this.posy+this.veloy;
        this.choque();
    this.dibuja();
    }
    
    choque(){
//        compueba que se choca con la pelota o con la barra
    if(j1.posx<=this.posx && j1.posx+100>=this.posx) {
        if(this.posy>=(j1.posy-this.altura)){
            j1.borra();
        alert("has perdido y tu puntacion es de " +contador);
    }
    }
//        choque de pelota
        if(arrayBolas[1].posx-arrayBolas[1].radio<=this.posx && arrayBolas[1].posx+arrayBolas[1].radio>=this.posx ){
            if(arrayBolas[1].posy-arrayBolas[1].radio<=this.posy && arrayBolas[1].posy+arrayBolas[1].radio>=this.posy){
               this.borra();
                contador++;
                if(contador==15){
                   alert("has ganado y tu puntacion es de " +contador); 
                }
                arrayBolas[1].veloy=arrayBolas[1].veloy*-1;
            }  
        }
        
         
        
        
    }
    
    borra(){
        document.getElementById("svg").removeChild(this.bloke); 
        this.posx=-300;
        this.posy=-300;
        this.altura=0;
        this.ancho=0;
        this.rx=0;
        this.ry=0;
        this.velox=0;
        this.veloy=0;
        this.pasa=0;
    }
    
}
   function movimiento(){ 
    for(var i=1;i<=1;i++){
        
        arrayBolas[i].mover();
    }
       for(var i=1;i<=10;i++){
        arrayBlokes[i].cae();
    }
}
function inicio(){
   j1=new jugador(300 ,580, 15, 100, 5, 5);
    for(var i=1;i<=1;i++){
      arrayBolas[i]=new Pelota(10,410,"red",10);
    }
         for(var i=1;i<=16;i++){
        arrayBlokes[i]=new bloke();
    }
    setInterval(movimiento,60);
}     


function muevePala(event){
	
	
 	if(event.keyCode ==39  ){
	   if(j1.posx >= 600-j1.ancho){
	}
	else{
	j1.mueveD();
}
}
 	if(event.keyCode == 37  ){

	   if(j1.posx <= 0){

	}
	else{
	j1.mueveI();
}
}
}





window.onload=inicio;
window.onkeydown=muevePala;
    

