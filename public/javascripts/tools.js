var count = 0;

function hello_world()
{
	setTimeout(function() {
		count += 1;
		var text1 = document.form1.text1;
		text1.value += "hello world:" + count + "\n";
		text1.scrollTop = text1.scrollHeight;
		if (count < 20) {
			hello_world();
		}
	}, 200);
}
