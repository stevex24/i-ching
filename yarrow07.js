////============================================
//// yarrow05c.js, 12/22/08, by ralph abraham
//// js script for yarrow05c.html
//// clean up and get first heap to show
////============================================
 
//// GLOBALS
 
    var tapcount = 0; // counter for number of taps
    var linecode = [ 0, 0, 0, 0, 0, 0 ]; // array of six values of {6,7,8,9} (aka hexcode)
    var binlistA = [ 0, 0, 0, 0, 0, 0 ]; // array for A hexagram (first) as a binary list
    var binlistB = [ 0, 0, 0, 0, 0, 0 ]; // array for B hexagram (second) as a binary list
    var binlistC = [ 0, 0, 0, 0, 0, 0 ]; // array for C hexagram (changes) as a binary list
 
//// SETUP
 
    // wait for the browser to load
    window.onload = function() {
    // set up background basic template
        base00(); // white rect
        //base01(); // yellow tableau
        //base02(); // red disk
        drawStalks(); // initial heap, new to 05c
    };
     
    // setup single white canvas
    function base00()  {
        var canvas = document.getElementById("canvas"); // only one canvas
        var ctx = canvas.getContext("2d");
        // setup whole rectangle (x0, y0, width, height)
        ctx.clearRect(0, 0, 320, 360);
        ctx.fillStyle = "white"; //  white
        ctx.fillRect (0, 0, 320, 360);
    };
     
    // draw yellow tableau
    function base01() {
        var canvas = document.getElementById("canvas"); // only one canvas
        var ctx = canvas.getContext("2d");
        // draw tableau 
        ctx.clearRect(20, 20, 280, 200); // clear the yellow tableau
        ctx.fillStyle = "yellow"; // redraw it
        ctx.fillRect (20, 20, 280, 200); // (x0, y0, width, height)
    };
     
    // draw red disk, cf resig p. 298
    function base02() {
        var canvas = document.getElementById("canvas"); // only one canvas
        var ctx = canvas.getContext("2d");
        // draw circle 
        ctx.save();
        ctx.beginPath();
            ctx.arc(160,120,100,0,Math.PI*2,true); // full circle
            ctx.strokeStyle = "red";
        ctx.fillStyle = "red"; //  red
        ctx.fill();
        ctx.restore();
    };
 
 
//// GRAPHICS DRAWING
 
    // draw all stalks on tableau
    function drawStalks() {
        var canvas = document.getElementById("canvas"); // only one canvas
        var ctx = canvas.getContext("2d");
        // line attributes
        ctx.save();
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 1;
        base01(); // clear yellow tableau
        base02(); // redraw red disk
        // now draw 49 stalks
        var u1 = Math.random(); // random init u1
        var u2 = Math.random(); // random init u2
        var v1 = logistic(u1); // begin trajectory of u1
        var v2 = logistic(u2); // begin trajectory of u2
        // alert(v1 + ", " + v2);
        for(count = 1; count < 49;count++) {
            var top = 1.5 * Math.PI; // JS angles are clockwise from x-axis
            var spread = 0.9; // width of spectrum in radians
            var hand = 18; // width of hand
            var newU0 = - (hand/2) + hand * v1; // x-offset in pixels
            var newV0 = top - spread / 2 + spread * v2; // the angle in radians
            var newX0 = Math.round( 160 + 80 * Math.cos(newV0) + newU0 ); // x-center + radius * cos(radians) + offset
            var newY0 = Math.round( 120 + 80 * Math.sin(newV0) ); // y-center ...
            var newX1 = Math.round( 160 - 80 * Math.cos(newV0) + newU0 );
            var newY1 = Math.round( 120 - 80 * Math.sin(newV0) ); // y-center ...
            ctx.moveTo(newX0,newY0);
            ctx.lineTo(newX1,newY1);
            ctx.stroke();
            v1 = logistic(v1); // move v1 along orbit
            v2 = logistic(v2); // move v2 along orbit
        };
        ctx.restore();
    };
     
    // draw one yang bar at (x0, y0, c0): init x0, init y0, color c0
    function drawYang(x0, y0, c0) {
        var canvas = document.getElementById("canvas"); // only one canvas
        var ctx = canvas.getContext("2d");
        ctx.save();
        // line attributes
        ctx.strokeStyle = c0;
        ctx.lineWidth = 2;
        // now draw line (only need to repeat these three commands)
        ctx.moveTo(x0,y0);
        ctx.lineTo(x0 + 70, y0);
        ctx.stroke();
        ctx.restore();
    };
     
    // draw one yin bar at (x0, y0)
    function drawYin(x0, y0, c0) {
        var canvas = document.getElementById("canvas"); // only one canvas
        var ctx = canvas.getContext("2d");
        ctx.save();
        // line attributes
        ctx.strokeStyle = c0;
        ctx.lineWidth = 2;
        // now draw line (only need to repeat these three commands)
        ctx.moveTo(x0,y0);
        ctx.lineTo(x0 + 30, y0);
        ctx.stroke();
        ctx.moveTo(x0 + 40,y0);
        ctx.lineTo(x0 + 70, y0);
        ctx.stroke();
        ctx.restore();
    };
     
    // draw a pair of bars
    function draw2bars( hy )
    {
        var canvas = document.getElementById("canvas"); // only one canvas
        var ctx = canvas.getContext("2d");
        ctx.save();
        var delta = 6;
        switch( hyline )
            {
            case 6: // old yin (yin to yang)
                drawYin(40, 280 - (tapcount + 1 ) * delta, "red"); // in first hexagram
                drawYang(210, 280 - (tapcount + 1 ) * delta, "green"); // in 2nd hexagram
                break;
            case 7: // young yang (yang to yang)
                drawYang(40, 280 - (tapcount + 1 ) * delta, "green"); // in first hexagram
                drawYang(210, 280 - (tapcount + 1 ) * delta, "green"); // in 2nd hexagram
                break;
            case 8: // young yin (yin to yin)
                drawYin(40, 280 - (tapcount + 1 ) * delta, "green"); // in first hexagram
                drawYin(210, 280 - (tapcount + 1 ) * delta, "green"); // in 2nd hexagram
                break;
            case 9: // old yang (yang to yin)
                drawYang(40, 280 - (tapcount + 1 ) * delta, "red"); // in first hexagram
                drawYin(210, 280 - (tapcount + 1 ) * delta, "green"); // in 2nd hexagram
            default:
                break;
            };
        ctx.restore();
    };
     
//// MATH
 
    // reduce a number mod four and return the remainder
    function reduce(coord)
    {
        var x = coord;
        var xmod4 = Math.floor(x/4);
        var xrem = x - 4 * xmod4;
        return xrem;
    };
 
    // extract pair of remainders to a line type (ie, a 6, 7, 8, or 9)
    function extract(xrem, yrem)
    {
        if ((xrem == 0) && (yrem == 0)) { return 6; } 
        else if (xrem == yrem) { return 9; } 
        else if ( (xrem == (yrem - 1)) || ((xrem == 3 ) && (yrem == 1)) || ((xrem == 0 ) && (yrem == 3)) ) { return 7; } 
        else { return 8; }
    };
 
    //logistic function, added 10 jan 2009 from mc-draw-funcs.as of 16 july 2007
    function logistic(unow){
        return 3.95 * unow * (1-unow) // hardware R param for now
    }
 
//// CAST-TO-GRAM transl of cast2gram.as of 30 dec 2007
 
// first hexagram from hexcast
//// first we convert a line (a 6, 7, 8, or 9) to a bit for the A hexagram (before)
function line2bitA(ln) {
    switch (ln) {
        case 6:
            return 0;
            break;
        case 7:
            return 1;
            break;
        case 8:
            return 0;
            break;
        case 9:
            return 1;
            break;
        }
}
 
//// now convert hexcast to binlistA as a procedure
function hexcast2binlistA(hc) {
    for (var i = 0; i <= 5; i++) {
        binlistA[i] = line2bitA( linecode[i] );
    }
}
 
// second (B) hexagram from hexcast
//// first we convert a line (a 6, 7, 8, or 9) to a bit for the B hexagram (after)
function line2bitB(ln) {
    switch (ln) {
        case 6:
            return 1;
            break;
        case 7:
            return 1;
            break;
        case 8:
            return 0;
            break;
        case 9:
            return 0;
            break;
        }
}
 
//// now convert hexcast to binlistB as a procedure
function hexcast2binlistB(hc) {
    for (var i = 0; i <= 5; i++) {
        binlistB[i] = line2bitB(hc[i]);
    }
}
 
// binlist of changes from hexcast
//// first we convert a line (a 6, 7, 8, or 9) to a bit for the changes
function line2bitC(ln) {
    switch (ln) {
        case 6:
            return 1;
            break;
        case 7:
            return 0;
            break;
        case 8:
            return 0;
            break;
        case 9:
            return 1;
            break;
        }
}
 
//// now convert hexcast to binlistC as a procedure
function hexcast2binlistC(hc) {
    for (var i = 0; i <= 5; i++) {
        binlistC[i] = line2bitC(hc[i]);
    }
}
 
//// compute leibniz number from a binlist
function binlist2leib(bl) {
    return bl[0]*32 + bl[1]*16 + bl[2]*8 + bl[3]*4 + bl[4]*2 + bl[5];
}
 
//// look up table to convert leibniz to king wen
var KingWen = [  2, 23,  8, 20, 16, 35, 45, 12,
            15, 52, 39, 53, 62, 56, 31, 33,
             7,  4, 29, 59, 40, 64, 47,  6,
             46, 18, 48, 57, 32, 50, 28, 44,
             24, 27,  3, 42, 51, 21, 17, 25,
             36, 22, 63, 37, 55, 30, 49, 13,
             19, 41, 60, 61, 54, 38, 58, 10,
             11, 26,  5,  9, 34, 14, 43,  1 ];
 
    var MID = 3*(KWB + KWA);
    var MIDdays = Math.floor(MID/24);
    var MIDhrs = MID - (MIDdays*24);
 
// insertion on 30 dec 2007: hexcast to probability
// this gives the yarrow probability of each hypaerline (times 16M)
function line2prob(ln) {
    switch (ln) {
        case 6:
            return 1;
            break;
        case 7:
            return 5;
            break;
        case 8:
            return 7;
            break;
        case 9:
            return 3;
            break;
        }
}
 
// this computes the yarrow factor and its adjective of a hexcast
function hexcast2prob() {
    var tmp1 = line2prob(linecode[0]) * line2prob(linecode[1]) * line2prob(linecode[2]) * line2prob(linecode[3]) * line2prob(linecode[4]) * line2prob(linecode[5]);
    var tmp2 = "adjective";
    if ( tmp1 < 29412 ) {
        tmp2 = "very rare";
    } else if ( tmp1 < 58824 ) {
        tmp2 = "rare";
    } else if ( tmp1 < 88236 ) {
        tmp2 = "common";
    } else {
        tmp2 = "very common";
    }
    return tmp1 + " (" + tmp2 + ")";
}
// end of insertion of 30 dec 2007
 
//// EVENTS
 
    // action for tap event
    function mouseup( event )
    {
        var ctx = document.getElementById('canvas').getContext('2d');
        if ( tapcount < 6 )
            {
            drawStalks(); // prepare tableau for next tap
            var xnow = event.clientX;
            var ynow = event.clientY;
            var xrem = reduce(xnow);
            var yrem = reduce(ynow);
            hyline = extract(xrem, yrem);
            // update linecode array
            linecode[tapcount] = hyline;
            tapcount ++; // increment tap count
            draw2bars( hyline ); // add new pair of bars for this tap
            }
        else
            {
            hexcast2binlistA(linecode); // here we convert hexcast to binlistA
            hexcast2binlistB(linecode); // here we convert hexcast to binlistB
            hexcast2binlistC(linecode); // here we convert hexcast to binlistC
            var KWA = KingWen[binlist2leib(binlistA)]; // king wen number of the A hexagram
            var KWB = KingWen[binlist2leib(binlistB)]; // ditto, B hexagram
            var MID = 3*(KWB + KWA); // for the landaker algorithm (time window)
            var MIDdays = Math.floor(MID/24);
            var MIDhrs = MID - (MIDdays*24);
            var temp3 = "First Hexagram is KingWen # " + KWA + "<br>";
            var temp4 = hex[KWA][0] + "<br>";
            var temp5 = "Second Hexagram is KingWen # " + KWB + "<br>";
            var temp6 = hex[KWB][0] + "<br>";
            var tempC1 = ""; // text of the changing lines
            var tempC2 = "";
            var tempC3 = "";
            var tempC4 = "";
            var tempC5 = "";
            var tempC6 = "";
            var tempC7 = "No Changing lines.<br>";
            if (binlistC[0] == 1) {
                tempC1 = "Change in Line 1: " + hex[KWA][1];
                tempC7 = "";
            }
            if (binlistC[1] == 1) {
                tempC2 = "Change in Line 2: " + hex[KWA][2];
                tempC7 = "";
            }
            if (binlistC[2] == 1) {
                tempC3 = "Change in Line 3: " + hex[KWA][3];
                tempC7 = "";
            }
            if (binlistC[3] == 1) {
                tempC4 = "Change in Line 4: " + hex[KWA][4];
                tempC7 = "";
            }
            if (binlistC[4] == 1) {
                tempC5 = "Change in Line 5: " + hex[KWA][5];
                tempC7 = "";
            }
            if (binlistC[5] == 1) {
                tempC6 = "Change in Line 6: " + hex[KWA][6];
                tempC7 = "";
            }
            var tempM = "WHEN: in a six-hour window beginning " + MID + " hours <br>(" + MIDdays + " days and " + MIDhrs + " hours) from now.";
            var tempP = "PROBABILITY FACTOR: " + hexcast2prob();
            var d = document;
            d.open("text/plain");
            d.write(hex[0]);
            d.write("<p>");
            d.write(temp3 + temp4);
            d.write(temp5 + temp6);
            d.write(tempC1 + tempC2 + tempC3 + tempC4 + tempC5 + tempC6 + tempC7);
            d.write("<br>");
            d.write(tempM);
            d.write("<p>");
            d.write(tempP);
            d.close();
            };
    };
     
////////// END ///////////