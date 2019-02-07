function TanuloSzovegesErtekelese(erdemjegy) {
	var szovegesErtekeles;
	
	switch(erdemjegy) {
		case 1: szovegesErtekeles="Elégtelen";
		break;
		
		case 2: szovegesErtekeles="Elégséges";
		break;
		
		case 3: szovegesErtekeles="Közepes";
		break;
		
		case 4: szovegesErtekeles="Jó";
		break;
		
		case 5: szovegesErtekeles="Jeles";
		break;
		
		default: szovegesErtekeles="Hibás paramétert adott meg.";
		break;
		
	}
	
	return szovegesErtekeles;
	
}