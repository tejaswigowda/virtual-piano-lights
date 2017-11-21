var allNotes = "a49,a50,a51,a52,a53,a54,a55,a56,a57,a48,a81,a87,a69,a82,a84,a89,a85,a73,a79,a80,a65,a83,a68,a70,a71,a72,a74,a75,a76,a90,a88,a67,a86,a66,a78,a77,b49,b50,b52,b53,b54,b56,b57,b81,b87,b69,b84,b89,b73,b79,b80,b83,b68,b71,b72,b74,b76,b90,b67,b86,b66".split(",");

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
  console.log(n);
}
