(function(){
	
	
	const inp = document.querySelector('#inp');
	const msg = document.querySelector('#msg');
	const btn = document.querySelector('#btn');	
	const mainDiv = document.querySelector('main');
	const successDiv = document.querySelector('#success');
	
	
	$('#btn').click(function(e){
		e.preventDefault();
		const cEmail = inp.value;
		if (cEmail.length === 0) {
			//alert('A valid email is required');
			$('#msg').html('The email address is left empty');
			$('#msg').css('color', 'red');
			$('#inp').css({'border':'1px solid red', 'color': 'red', 'background-color':'pink'});
		} 
		else if(cEmail.indexOf('@') === -1) {
			$('#msg').html('The email address is not formatted correctly');
			$('#msg').css('color', 'red');
			$('#inp').css({'border':'1px solid red', 'color': 'red', 'background-color':'pink'});
		}		
		else {
			//alert(cEmail)
			$(mainDiv).css('display', 'none');
			$(successDiv).css('display', 'block');
			$('#email').html(cEmail);
			
			//open("success.html")
		}
		//alert(cEmail);
		
	})
	$('#dismiss').click(function(e){
		e.preventDefault();
		open('index.html');
	});

}());