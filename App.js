//Creates Window
var window = Ti.UI.createWindow({
	backgroundColor: 'WHITE',
	layout: 'vertical'
});

var startlabel = Ti.UI.createLabel({
	text: 'PUSH START!',
	color:'BLACK',
	height: Ti.UI.SIZE,
	textAlign: 'center',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	font:{
			fontSize: '50sp',
			fontWeight: 'bold'
	}
	
});

//View the time
var viewtime =
	({top:0,
		height:'25%',
		width:'100%',
		backgroundColor: 'GRAY'});

viewtime.add(startlabel);
window.add(viewtime);		



//This code adds the other file
var stop1 = require('stopwatch');
var stop2 = new Stopwatch(stopwatchListener, 10);

function stopwatchListener(watch) {
		label.text = watch.toString();
}

var buttonview = Ti.UI.createView({
	width: '100%',
	height:'10%',
	layout:'horizontal'
	
});

var endreset = Ti.UI.createButton({
	title: 'END',
	color: '#FF0000',
	width: '45%',
	height: Ti.UI.FILL,
	backgroundColor: 'WHITE',
	font: {
		fontSize: '25sp',
		fontWeight:'bold'
	},
	style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	
});

buttonview.add(endreset);

var startlap = Ti.UI.createButton({
	title: 'START',
	color: 'GREEN',
	width: '45%',
	height: Ti.UI.FILL,
	backgroundColor: 'WHITE',
	font: {
		fontSize: '25sp',
		fontWeight:'bold'
	},
	style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	
});

buttonview.add(startlap);


window.open();
