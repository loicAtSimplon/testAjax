$(function() {
	$("input[type=button]").click(function(){
		var nom = $("input[name=nom]").val();
		var prenom = $("input[name=prenom]").val();
		var age = $("input[name=age]").val();
		var email = $("input[name=email]").val();
		
		$.ajax({
			async : "true",
			type : "POST",
			url : "http://localhost/WebService/restService.php?function=ajoutApprenant",
			data : "&nom="+nom+"&prenom="+prenom+"&age="+age+"&email="+email,
			dataType : "text",
			success : function(retour,statut){
				$xml = $(retour);
				$("h4#texte").text($xml.find("value").text());
			}
		});
	});
});