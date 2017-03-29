function titleSearchFunction() {

	var input, filter, table, tr, td, i;

	input = document.getElementById("titleSearch");
	filter = input.value.toUpperCase();
	table = document.getElementById("paintings");
	//tr = table.getElementByTagName("tr");
	tr = document.querySelectorAll(".pp");

	//loop
	for (i=0; i<tr.length; i++) {
		//td = tr[i].getElementByTagName("td")[0];
		td = tr[i].querySelectorAll(".tt")[0];

		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}