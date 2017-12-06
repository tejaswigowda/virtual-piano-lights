var allNotes = ["a49",
	"b49",
	"a50",
	"b50",
	"a51",
	"a52",
	"b52",
	"a53",
	"b53",
	"a54",
	"b54",
	"a55",
	"a56",
	"b56",
	"a57",
	"b57",
	"a48",
	"a81",
	"b81",
	"a87",
	"b87",
	"a69",
	"b69",
	"a82",
	"a84",
	"b84",
	"a89",
	"b89",
	"a85",
	"a73",
	"b73",
	"a79",
	"b79",
	"a80",
	"b80",
	"a65",
	"a83",
	"b83",
	"a68",
	"b68",
	"a70",
	"a71",
	"b71",
	"a72",
	"b72",
	"a74",
	"b74",
	"a75",
	"a76",
	"b76",
	"a90",
	"b90",
	"a88",
	"a67",
	"b67",
	"a86",
	"b86",
	"a66",
	"b66",
	"a78",
	"a77"];

function start()
{
}



function setVolume(v)
{
  v = v || 1;
  var x = document.getElementsByTagName("audio");
  for(var i = 0; i < x.length; i++){
    x[i].volume = v;
  }
}


function playColor(note)
{
  var n = allNotes.indexOf(note);
  console.log(note, n);
  loadFile("./sendNote?n=" + n + "&v=100", function(data){})
}
