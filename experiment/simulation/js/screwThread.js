
/// This dw_tester.js file is developped by,
///Piyali Chattopadhyay
///Project_scientist- Technical
///Virtual Lab Projects,Mechanical Engineering Department,IIT Kharagpur


$(document).ready(function(){
  $("#instcontrol").click(function(){
    $("#inst").slideToggle("slow");
  });
});
/* $(document).ready(function(){
  $("#myTables").click(function(){	
	
    var ipvalue = $("#seudobox").val();
	if(ipvalue == 1){
    $("#obsTable1").slideToggle("slow");
	}
	
  else if(ipvalue == 2){
    $("#obsTable2").slideToggle("slow");
  }
	});
	
 
  });
 */
function seudovalue1(){
	
$('#seudobox').val(1);	
$('#HT').css('visibility','hidden');	
$('#H').css('visibility','hidden');
}

function seudovalue2(){
	
$('#seudobox').val(2);	
$('#HT').css('visibility','visible');
$('#H').css('visibility','visible');
}

///method selection

function two_wire(){
	
if(document.getElementById('seudobox').value == 1){
	
document.getElementById('twoWire').style.visibility = "hidden";
document.getElementById('twowireT').style.visibility = "hidden";
document.getElementById('oneWire').style.visibility = "visible";
document.getElementById('onewireT').style.visibility = "visible";
}

}

function three_wire(){
	
if(document.getElementById('seudobox').value == 2){
	
document.getElementById('twoWire').style.visibility = "visible";
document.getElementById('twowireT').style.visibility = "visible";
document.getElementById('oneWire').style.visibility = "visible";
document.getElementById('onewireT').style.visibility = "visible";
}

}

//////animation for two-wire left side wire//////
function wire1_transitionL(){
document.getElementById('oneWire').classList.add('rotateWireR1');
setTimeout(function(){	
$('#oneWire2').css('visibility','visible');
document.getElementById('oneWire2').src = "./images/sl2.png";	
 },2200);	
 
 setTimeout(function(){	
$('#oneWire3').css('visibility','visible');	
document.getElementById('oneWire3').src = "./images/sl2.png";
$('#oneWire2').css('visibility','hidden');
 },2500);	
 
 setTimeout(function(){	
$('#oneWire4').css('visibility','visible');
document.getElementById('oneWire4').src = "./images/sl2.png";
$('#oneWire3').css('visibility','hidden');	
 },2800);

setTimeout(function(){	
$('#oneWire2').css('visibility','hidden');	
$('#oneWire3').css('visibility','hidden');
$('#oneWire4').css('visibility','hidden');
 },3000);	 
	
}
//////animation for two-wire right side wire//////
function wire1_transitionR(){
//document.getElementById('oneWire').classList.add('rotateWireR1');
setTimeout(function(){	
$('#oneWire2').css('visibility','visible');
document.getElementById('oneWire2').src = "./images/onewireR.png";	
 },500);	
 
 setTimeout(function(){	
$('#oneWire3').css('visibility','visible');	
document.getElementById('oneWire3').src = "./images/onewireR.png";
$('#oneWire2').css('visibility','hidden');
 },800);	
 
 setTimeout(function(){	
$('#oneWire4').css('visibility','visible');
document.getElementById('oneWire4').src = "./images/onewireR.png";
$('#oneWire3').css('visibility','hidden');	
 },900);

setTimeout(function(){	
$('#oneWire2').css('visibility','hidden');	
$('#oneWire3').css('visibility','hidden');
$('#oneWire4').css('visibility','hidden');
 },1000);	 
	
}

//////animation for three-wire//////
function wire2_transition(){
document.getElementById('twoWire').classList.add('rotateWireR1');
setTimeout(function(){	
$('#twoWire3').css('visibility','visible');
$('#twoWire').css('visibility','hidden');
 },2200);	
 
 setTimeout(function(){	
$('#twoWire4').css('visibility','visible');	
$('#twoWire3').css('visibility','hidden');
 },2500);	

setTimeout(function(){	
$('#twoWire').css('visibility','hidden');	
$('#twoWire3').css('visibility','hidden');
$('#twoWire4').css('visibility','hidden');
 },2800);	 
	
}

//////animation for screw thread//////
function scru_transition(){

setTimeout(function(){	
$('#scruthrd2').css('visibility','visible');
$('#screwThread').css('visibility','hidden');
 },500);

setTimeout(function(){	
$('#scruthrd3').css('visibility','visible');	
$('#scruthrd2').css('visibility','hidden');
 },800); 
 
 setTimeout(function(){	
$('#scruthrd4').css('visibility','visible');	
$('#scruthrd3').css('visibility','hidden');
 },1000);

setTimeout(function(){	
$('#scruthrd4').css('visibility','hidden');	
 },1200); 


}
///show side wire
var sideCount =0;
function side1(){
	
sideCount++;

if(document.getElementById('seudobox').value == 1){///Two-wire method
if(sideCount == 1){
	wire1_transitionL();
	setTimeout(function(){	
	document.getElementById('sideWire1').style.display = "block";
	 },3100);	
}	
if(sideCount == 2){
	wire1_transitionR();
	setTimeout(function(){
	document.getElementById('sideWire2').style.display = "block";
	document.getElementById('sideWire2').src = "./images/onewireR3.png";
	document.getElementById('oneWire').style.visibility = "hidden";
	document.getElementById('onewireT').style.visibility = "hidden";
	 },1000);
}	
	
}

else if(document.getElementById('seudobox').value == 2){///Three wire method
	
	wire1_transitionL();
	setTimeout(function(){
	document.getElementById('sideWire1').style.display = "block";
	document.getElementById('oneWire').style.visibility = "hidden";
	document.getElementById('onewireT').style.visibility = "hidden";
	 },3100);
	
}

}

function side2(){


if(document.getElementById('seudobox').value == 2){
	wire2_transition();	
setTimeout(function(){	
document.getElementById('sideWire2').style.display = "block";
	document.getElementById('sideWire2').src = "./images/twowireR3.png";
document.getElementById('twoWire').style.visibility = "hidden";
document.getElementById('twowireT').style.visibility = "hidden";
},2900);	
}		
	
}

///move screwThread
function moveThread(){
	
	var movebox = document.getElementById('movechk').value;
		
	if(movebox == 1){
	scru_transition();
setTimeout(function(){	
document.getElementById('screwThread').style.visibility = "hidden";
document.getElementById('screwThread2').style.visibility = "visible";
document.getElementById('screwThread2').style.zIndex=-2;
document.getElementById('sTtext').style.visibility = "hidden";
//document.getElementById('screwThread').style.left = 22 + "%";
//document.getElementById('screwThread').style.top = 44.5 + "%";
document.getElementById('movechk').value = 2;
 },1200);
}
if(movebox == 2){	
document.getElementById('screwThread').style.visibility = "visible";
document.getElementById('screwThread2').style.visibility = "hidden";
document.getElementById('sTtext').style.visibility = "visible";
//document.getElementById('screwThread').style.left = 5 + "%";
//document.getElementById('screwThread').style.top = 91.5 + "%";
document.getElementById('movechk').value = 1;
}
}


//////animation Flange micrometer clockwise//////
 var p = 0, t=0;
function cw(){
	
const images = ['./images/fm1.png','./images/fm2.png','./images/fm3.png','./images/fm1.png'];
    
	 document.getElementById('cscale').src = images[p];
        p++;
		if(p == images.length){
		 p = 0	;
//clearInterval(interval);		 
        }
//setTimeout(function(){ cw(); },100);
 //clearTimeout(8);

 }
 function acw(){
	
const images = ['./images/fm1.png','./images/fm3.png','./images/fm2.png','./images/fm1.png'];
    
	 document.getElementById('cscale').src = images[p];
        p++;
		if(p == images.length){
		 p = 0	;
//clearInterval(intervalrev);		 
        }
//setTimeout(function(){ cw(); },100);
 //clearTimeout(8);

 }

/* function rotategauge(){
	
	 interval = setInterval(cw,100);
	 document.getElementById('g1').style.poiterEvents="none";
	 document.getElementById('g1').disabled=true;
	 setTimeout(function() {
   document.getElementById('g1').disabled=false;
   document.getElementById('g1').style.poiterEvents="auto";
}, 1500);
}

function rotategaugerev(){
	
	 intervalrev = setInterval(acw,100);
	  document.getElementById('g1').style.poiterEvents="none";
	 document.getElementById('g1').disabled=true;
	 setTimeout(function() {
   document.getElementById('g1').disabled=false;
   document.getElementById('g1').style.poiterEvents="auto";
}, 1500);
}
 */
 let interval = null;
let intervalrev = null;
let isRotating = false;

function disableGauge() {
  const g = document.getElementById('g1');
  g.style.pointerEvents = "none";
  g.disabled = true;
}

function enableGauge() {
  const g = document.getElementById('g1');
  g.style.pointerEvents = "auto";
  g.disabled = false;
  isRotating = false;
}

function clearAllIntervals() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
  if (intervalrev) {
    clearInterval(intervalrev);
    intervalrev = null;
  }
}

function rotategauge() {
  if (isRotating) return;   // 🚫 block double click

  isRotating = true;
  clearAllIntervals();
  disableGauge();

  interval = setInterval(cw, 100);

  setTimeout(() => {
    clearInterval(interval);
    interval = null;
    enableGauge();
  }, 1500);
}

function rotategaugerev() {
  if (isRotating) return;   // 🚫 block double click

  isRotating = true;
  clearAllIntervals();
  disableGauge();

  intervalrev = setInterval(acw, 100);

  setTimeout(() => {
    clearInterval(intervalrev);
    intervalrev = null;
    enableGauge();
  }, 1500);
}

///incr the right position of gauge . with one complete revolution circular scale moves 1 mm forward
var posCount = 0;
//var posCount2=0;
var gwCount = 0;
//gwCount2=0;
var csPos = -93.8;//16.2;///circular scale right position
var gw = 13;//3;///gatis div width

function cscalePosChng(){

posCount+=1;///for 1 mm exact
//posCount2+=1;

gwCount+=1.5;
//gwCount2+=0.4;

var newPos = math.add(csPos,posCount);
var newgw = math.add(gw,gwCount);

document.getElementById('cscale').style.right = newPos + "%";
//document. getElementById('seudobox').value = newPos;///grap the value of right position of circular scale

document.getElementById('gatis').style.width = newgw + "%";

}
function cscalePosChngRev(){
	
	/* if(posCount == undefined){ 
	posCount = posCount2;
	gwCount = gwCount2;
	} */

posCount-=1;///1.3;for 1 mm exact
gwCount-= 1.5;

var newPos = math.add(csPos,posCount);
var newgw = math.add(gw,gwCount);

document.getElementById('cscale').style.right = newPos + "%";
//document. getElementById('seudobox').value = newPos;///grap the value of right position of circular scale

document.getElementById('gatis').style.width = newgw + "%";		
	
}


/////////////////////////////////////////
 var screwwidth = 11;//6;
 var wirePos = 42;//32;
 var counterscru = 0,counterscru2=0;
 function screw_widthincr(){
	 
	counterscru+=1;
	
	//counterscru2+=1;
	
	var newPos = math.add(screwwidth,counterscru);
	var newWirePos = math.subtract(wirePos,counterscru);
	
	if((newPos <= 16 && document.getElementById('movechk').value == 2)||(newPos < 17 && document.getElementById('movechk').value == 1)){
	document.getElementById('fmmv').style.width = newPos + "%";
	document.getElementById('sideWire2').style.left = newWirePos + "%";
	}
	if(newPos == 16 && document.getElementById('movechk').value == 2){
	
	var sound = document.getElementById("myAudio"); 
 
	  sound.play(); 
	
	alert('fixed properly');
	if(document.getElementById('seudobox').value==1){
	document.getElementById('twztext').style.display = "block";
	document.getElementById('twz').style.display = "block";
	document.getElementById('thwztext').style.display = "none";
	document.getElementById('thwz').style.display = "none";
	}
	if(document.getElementById('seudobox').value==2){
	document.getElementById('thwztext').style.display = "block";
	document.getElementById('thwz').style.display = "block";
	document.getElementById('twztext').style.display = "none";
	document.getElementById('twz').style.display = "none";
	}
	/* counterscru = undefined;
	posCount = undefined;
	gwCount = undefined; */
	document.getElementById('calcbtn').disabled = false;
	document.getElementById('rbtnP').style['pointer-events'] = "none";
}

if(newPos == 17 && document.getElementById('movechk').value == 1){
	alert('Can not be rotated further.');
	document.getElementById('rbtnP').style['pointer-events'] = "none";
	document.getElementById('rbtnM').style['pointer-events'] = "auto";
}

 /* if(document.getElementById('movechk').value == 1 ){
		/* counterscru = counterscru2;
		//counterscru+= 0.2;
		posCount = posCount2;
		gwCount = gwCount2; *
		document.getElementById('rbtnP').style['pointer-events'] = "auto";
		
	} 
	if(document.getElementById('rbtnM').style['pointer-events'] == "none"){
	
	document.getElementById('rbtnM').style['pointer-events'] = "auto";
} */
document.getElementById('rbtnM').style['pointer-events'] = "auto";	 
 }
 
 function screw_widthdecr(){
	/* if(counterscru == undefined){ 
	counterscru = counterscru2; 
	} */
	counterscru-=1; 
	
	var newPos = math.add(screwwidth,counterscru);
	var newWirePos = math.subtract(wirePos,counterscru);
	
	
	if(newPos == 10){
	
	alert('Exterem point');
	document.getElementById('rbtnM').style['pointer-events'] = "none";
}

	document.getElementById('fmmv').style.width = newPos + "%";
	document.getElementById('sideWire2').style.left = newWirePos + "%";
	document.getElementById('rbtnP').style['pointer-events'] = "auto";
	
	
 }
 
 function pValueChange(select){
	 
	 var sv = document.getElementById('d').selectedIndex;
	 var sValue = document.getElementById('d').options[sv].innerHTML;
	 
	 if(sValue == 0.722){
		 $('#p').val(1.25);
	 }
	 if(sValue == 0.866){
		// $('#p').val(1.5);
		 document.getElementById('p').value = 1.5;
	 }
 } 
 

 /////////////////////Effective diameter count////////////////////////////////////////////
 var M,E;
 function Math_model1(){///two-wire method
	 
	 var d = $('#d').val();//0.722;///diameter in mm of the wire
	 
	 if(d == 0.722){
	 var p = 1.25;//$('#p').val();//1.25;///pitch of the thread in mm
	 M = 25.08;
	 }
	 if(d == 0.866){
	 var p = 1.5;//$('#p').val();//1.25;///pitch of the thread in mm
	 M = 26.58;
	 }
	 var alpha = 60;///thread angle
	 
	  //M = $('#M').val();//25.08;//math.add(25.08, math.random(0,0.05));///distance over the wire, measured using a suitable micrometer.
	
	 
	 var T = math.subtract(M,math.multiply(2,d));///the dimension under the wire
	 var p11  = math.divide(p,2);
     var p12 = math.cot(math.multiply(math.divide(alpha,2),math.divide(math.pi,180)));
	 var part1 = math.multiply(p11,p12);
	 var p21 = d;
	 var p22 = math.subtract(math.csc(math.multiply(math.divide(alpha,2),math.divide(math.pi,180))),1);
	 var part2 = math.multiply(p21,p22);
	 
	 
	 var P_factor = math.subtract(part1,part2);
	 ///correction factor P


	console.log('p11 =' + p11);
	console.log('p12 =' + p12);
	console.log('p22 =' + p22);

	 E = math.add(T,P_factor).toFixed(2);
	
	console.log('E =' + E);
	console.log('T =' + T);
	console.log('P =' + P_factor);
	
	//$('#p').val(p);
	$('#M').val(M);
	$('#E').val(E);
	
	
 }
 
 function Math_model2(){///three-wire method
	 
	  var d = $('#d').val();//0.722;///diameter in mm of the wire
	 
	 if(d == 0.722){
	 var p = 1.25;//$('#p').val();//1.25;///pitch of the thread in mm
	 M = 25.088;
	 }
	 if(d == 0.866){
	 var p = 1.5;//$('#p').val();//1.25;///pitch of the thread in mm
	 M = 26.58;
	 }
	 //var p = $('#p').val();//1.25;///pitch of the thread in mm
	 var alpha = 60;///thread angle
	 var H = math.multiply(math.divide(p,2),math.cot(math.multiply(math.divide(alpha,2),math.divide(math.pi,180)))).toFixed(2);///Height of threads 
	 
	  //M = $('#M').val();//25.008;//math.add(25.088, math.random(0,0.05));///distance over the wire, measured using a suitable micrometer.
	var p1 = M;
	var p2 = math.multiply(d,math.add(1,math.csc(math.multiply(math.divide(alpha,2),math.divide(math.pi,180)))));
	var p3 = H;
	
     E = math.subtract(p1,math.subtract(p2,p3)).toFixed(2);
	 
	console.log('E =' + E);
	console.log('H =' + H);
	
	//$('#p').val(p);
	$('#M').val(M);
	$('#E').val(E);
	$('#H').val(H);
	
 }
 

/// clear button function

function Refresh(){///donot keep the name of the function as clear

 document.getElementById('sideWire1').style.display = "none";
document.getElementById('sideWire2').style.display = "none";

sideCount = 0;
document.getElementById('oneWire').style.visibility = "visible";
//document.getElementById('twoWire').style.visibility = "visible";
document.getElementById('onewireT').style.visibility = "visible";
document.getElementById('oneWire').classList.remove('rotateWireR1');
document.getElementById('oneWire').style.transform = "rotate(340deg)";
//document.getElementById('twowireT').style.visibility = "visible";
document.getElementById('calcbtn').disabled = true;

document.getElementById('rbtnM').disabled = false;
document.getElementById('rbtnP').disabled = false;

if (document.getElementById('seudobox').value == 1){
	document.getElementById('twoWire').style.visibility = "hidden";
	document.getElementById('twowireT').style.visibility = "hidden";
	$('#H').val(0);
	$('#HT').css('visibility','hidden');
	$('#H').css('visibility','hidden');
	document.getElementById('twz').style.display = "none";
	document.getElementById('twztext').style.display = "none";
}

if (document.getElementById('seudobox').value == 2){
	document.getElementById('twoWire').style.visibility = "visible";
	document.getElementById('twowireT').style.visibility = "visible";
	document.getElementById('twoWire').classList.remove('rotateWireR1');
	document.getElementById('twoWire').style.transform = "rotate(340deg)";
	$('#H').val(0);
	$('#HT').css('visibility','visible');
	$('#H').css('visibility','visible');
	document.getElementById('thwz').style.display = "none";
	document.getElementById('thwztext').style.display = "none";
}

	document.getElementById('M').value = 0;
	document.getElementById('E').value = 0; 
	document.getElementById('screwThread2').style.zIndex=0;
	//location.reload();
		
 }


function calculate(){
	
if(document.getElementById('seudobox').value == 1){
		 Math_model1();
	 }
	 else if(document.getElementById('seudobox').value == 2){
		 Math_model2();
	 }	
}

