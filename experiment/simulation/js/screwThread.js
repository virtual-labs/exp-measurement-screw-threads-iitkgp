
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
$('#HT').css('display','none');	
}

function seudovalue2(){
	
$('#seudobox').val(2);	
$('#HT').css('display','block');	
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

///show side wire
var sideCount =0;
function side1(){
	
sideCount++;

if(document.getElementById('seudobox').value == 1){
if(sideCount == 1){
	document.getElementById('sideWire1').style.display = "block";
	
}	
if(sideCount == 2){
	document.getElementById('sideWire2').style.display = "block";
	document.getElementById('oneWire').style.visibility = "hidden";
	document.getElementById('onewireT').style.visibility = "hidden";
}	
	
}

else if(document.getElementById('seudobox').value == 2){

	document.getElementById('sideWire1').style.display = "block";
	document.getElementById('oneWire').style.visibility = "hidden";
	document.getElementById('onewireT').style.visibility = "hidden";
	
}

}

function side2(){
	
if(document.getElementById('seudobox').value == 2){
	
document.getElementById('sideWire2').style.display = "block";
document.getElementById('twoWire').style.visibility = "hidden";
document.getElementById('twowireT').style.visibility = "hidden";	
}		
	
}

///move screwThread
function moveThread(){
	
	var movebox = document.getElementById('movechk').value;
		
	if(movebox == 1){
document.getElementById('screwThread').style.visibility = "hidden";
document.getElementById('screwThread2').style.visibility = "visible";
document.getElementById('sTtext').style.visibility = "hidden";
//document.getElementById('screwThread').style.left = 22 + "%";
//document.getElementById('screwThread').style.top = 44.5 + "%";
document.getElementById('movechk').value = 2;
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
 var p = 0, t=0, interval, intervalrev;
function cw(){
	
const images = ['./images/fm1.png','./images/fm2.png','./images/fm3.png','./images/fm1.png'];
    
	 document.getElementById('cscale').src = images[p];
        p++;
		if(p == images.length){
		 p = 0	;
clearInterval(interval);		 
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
clearInterval(intervalrev);		 
        }
//setTimeout(function(){ cw(); },100);
 //clearTimeout(8);

 }

function rotategauge(){
	
	 interval = setInterval(cw,100);
}

function rotategaugerev(){
	
	 intervalrev = setInterval(acw,100);
}

///incr the right position of gauge . with one complete revolution circular scale moves 1 mm forward
var posCount = 0;
//var posCount2=0;
var gwCount = 0;
//gwCount2=0;
var csPos = -102.8;//16.2;///circular scale right position
var gw = 4;//3;///gatis div width

function cscalePosChng(){

posCount+=1;///for 1 mm exact
//posCount2+=1;

gwCount+=0.4;
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
gwCount-= 0.4;

var newPos = math.add(csPos,posCount);
var newgw = math.add(gw,gwCount);

document.getElementById('cscale').style.right = newPos + "%";
//document. getElementById('seudobox').value = newPos;///grap the value of right position of circular scale

document.getElementById('gatis').style.width = newgw + "%";		
	
}


/////////////////////////////////////////
 var screwwidth = 11;//6;
 var wirePos = 55;//32;
 var counterscru = 0,counterscru2=0;
 function screw_widthincr(){
	 
	counterscru+=1;
	
	//counterscru2+=1;
	
	var newPos = math.add(screwwidth,counterscru);
	var newWirePos = math.subtract(wirePos,counterscru);
	
	document.getElementById('fmmv').style.width = newPos + "%";
	document.getElementById('sideWire2').style.left = newWirePos + "%";
	if(newPos == 26 && document.getElementById('movechk').value == 2){
	
	alert('fixed properly');
	/* counterscru = undefined;
	posCount = undefined;
	gwCount = undefined; */
	document.getElementById('calcbtn').disabled = false;
	document.getElementById('rbtnP').style['pointer-events'] = "none";
}

 if(document.getElementById('movechk').value == 1 ){
		/* counterscru = counterscru2;
		//counterscru+= 0.2;
		posCount = posCount2;
		gwCount = gwCount2; */
		document.getElementById('rbtnP').style['pointer-events'] = "auto";
		
	} 
	if(document.getElementById('rbtnM').style['pointer-events'] == "none"){
	
	document.getElementById('rbtnM').style['pointer-events'] = "auto";
}
	 
 }
 
 function screw_widthdecr(){
	/* if(counterscru == undefined){ 
	counterscru = counterscru2; 
	} */
	counterscru-=1; 
	
	var newPos = math.add(screwwidth,counterscru);
	var newWirePos = math.subtract(wirePos,counterscru);
	
	
	if(newPos == 4){
	
	alert('Extere point');
	document.getElementById('rbtnM').style['pointer-events'] = "none";
}

	document.getElementById('fmmv').style.width = newPos + "%";
	document.getElementById('sideWire2').style.left = newWirePos + "%";
	document.getElementById('rbtnP').style['pointer-events'] = "auto";
	
	
 }
 

 /////////////////////Effective diameter count////////////////////////////////////////////
 var M,E;
 function Math_model1(){///two-wire method
	 
	 var d = 0.722;///diameter in mm of the wire
	 var p = 1.25;///pitch of the thread in mm
	 var alpha = 60;///thread angle
	 
	  M = 25.08;//math.add(25.08, math.random(0,0.05));///distance over the wire, measured using a suitable micrometer.
	
	 
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

	 E = math.add(T,P_factor);
	
	console.log('E =' + E);
	console.log('T =' + T);
	console.log('P =' + P_factor);
	
	$('#M').val(M);
	$('#E').val(E);
	
	
 }
 
 function Math_model2(){///three-wire method
	 
	 var d = 0.722;///diameter in mm of the wire
	 var p = 1.25;///pitch of the thread in mm
	 var alpha = 60;///thread angle
	 var H = math.multiply(math.divide(p,2),math.cot(math.multiply(math.divide(alpha,2),math.divide(math.pi,180))));///Height of threads 
	 
	  M = 25.008;//math.add(25.088, math.random(0,0.05));///distance over the wire, measured using a suitable micrometer.
	var p1 = M;
	var p2 = math.multiply(d,math.add(1,math.csc(math.multiply(math.divide(alpha,2),math.divide(math.pi,180)))));
	var p3 = H;
	
     E = math.add(math.subtract(p1,p2),p3);
	 
	console.log('E =' + E);
	console.log('H =' + H);
	
	$('#M').val(M);
	$('#E').val(E);
	$('#H').val(H);
	
 }
 

/// clear button function

function Refresh(){///donot keep the name of the function as clear

document.getElementById('sideWire1').style.display = "none";
document.getElementById('sideWire2').style.display = "none";

document.getElementById('oneWire').style.visibility = "visible";
//document.getElementById('twoWire').style.visibility = "visible";
document.getElementById('onewireT').style.visibility = "visible";
//document.getElementById('twowireT').style.visibility = "visible";
document.getElementById('calcbtn').disabled = true;

document.getElementById('rbtnM').disabled = false;
document.getElementById('rbtnP').disabled = false;

if (document.getElementById('seudobox').value == 1){
	document.getElementById('twoWire').style.visibility = "hidden";
	document.getElementById('twowireT').style.visibility = "hidden";
	$('#H').val(0);
	$('#HT').css('display','none');
}

if (document.getElementById('seudobox').value == 2){
	document.getElementById('twoWire').style.visibility = "visible";
	document.getElementById('twowireT').style.visibility = "visible";
	$('#H').val(0);
	$('#HT').css('display','block');
}

	document.getElementById('M').value = 0;
	document.getElementById('E').value = 0;
	
		
 }


function calculate(){
	
if(document.getElementById('seudobox').value == 1){
		 Math_model1();
	 }
	 else if(document.getElementById('seudobox').value == 2){
		 Math_model2();
	 }	
}

