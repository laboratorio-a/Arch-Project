<?php 

	/* Configurazioni */
	
	include("admin/php/connessione_sql.php"); // Connessione DB
	
	// Altre configurazioni...

	/* Navigazione */

	if (isset($_GET["pag"])) { // Se il parametro pagina è settato
	
		$pag = $_GET["pag"]; // Allora inizializzalo
		
	} else {  // Altrimenti inizializzazione default
		
		$pag = "";  
		
	}
	
	
	if (isset($_GET["art"])) { // Se il parametro art è settato
	
		$art = $_GET["art"]; // Allora inizializzalo
		
	} else {  // Altrimenti inizializzazione default
		
		$art = "";  
		
	}
	
	if (isset($_GET["box"])) { // Se il parametro art è settato
	
		$box = $_GET["box"]; // Allora inizializzalo
		
	} else {  // Altrimenti inizializzazione default
		
		$box = "";  
		
	}
	
	// Impostazione Timezone e Codifica Caratteri

	@date_default_timezone_set('Europe/Rome');
	@setlocale(LC_ALL, 'it_IT');
	@setlocale(LC_TIME, 'ita', 'it_IT.utf8');
	
	//------- SESSIONE -------------

	session_start(); // Avvia sessione
	
	if ( empty($_SESSION['code']) ){

          $_SESSION["code"] = session_id();
          
          $_SESSION['vista'] = '0';
     
     }else{
          
          $_SESSION['vista'] = '1'; 
     } 
	
	include("include/config/function.php"); // Inclusione Funzioni Popolamento Pagina
	
	// Impostazioni URL  - Script / Links
	
	if ($countPagina >= 1) { // Se esiste almeno un record	
	
		while ($rowPaginaHt = $rPagina->fetch_array()): // Finchè sono presenti pagine
			
				if ($rowPaginaHt["pagina_dipendenza_id"] == "accordion") { // Se la pagina è un accordion
				
					$sqlArticolo = "SELECT * FROM `articolo` WHERE `articolo_pagina_id` = '".$rowPaginaHt["pagina_id"]."' "; // Estrae gli articoli "pagine" dalla tabella
					$rArticolo = $mysqli->query($sqlArticolo); // Assegna la query
					$countArticolo =  $rArticolo->num_rows; // Conteggio records
					
					if ($countArticolo >= 1): // Se esiste almeno un record
					
						while ($rowArticolo = $rArticolo->fetch_array()): // Allora finchè esistono pagine
					
							$siteurl = "http://localhost/archeproject/"; // Allora inizializza l'url	
							
						endwhile;
						
					endif;
					
				} else { // Altrimenti default 
					
					$siteurl = "";	
					
				}
				
		endwhile;
	
	}
	  
 	// Impostazioni URL  - Immagini
 
 	//$siteurl_base = "http://www.blancdesir.eu/"; // Inizializzazione URL base
	$siteurl_base = "http://localhost/archeproject/";

?>

<!doctype html> <!--Dichairazione DOCTYPE-->

<!--Inizio HTML-->

<html>

    <!--Inizio Head-->

	<head>

		<?php 
		
			include ("include/config/meta.php"); // Inclusione Meta Tags
			
		?>

		<!--Inclusione CSS-->

		<!--Inizio CSS-->
        
        <link rel="stylesheet" href="css/style.css"> <!--CSS Main-->
        <link rel="icon" href="favicon.png" type="image/png" /> <!--FavIcon-->
        
	</head>
    
    <!--Fine Head-->
    
    <!--Inizio Body-->

	<body>
            
	  <?php 
	  
      	include ("include/config/banner_cookies.php"); // Inclusione Banner Cookies
        include ("include/config/header.php"); // Inclusione Header
      
      	/*-- BODY -------------------------------------------------------------------*/


        if( $pag == "" ): // PAGINA DEFAULT "INDEX.PHP"
		
		  include "include/home.php";
		  
	    elseif($pag != ""): // CICLO PAGINE	   
		
		  $sqlPaginaLoop = "SELECT * FROM `pagina`"; 
		 
		  $rPaginaL = $mysqli->query($sqlPaginaLoop);
		
	     while ($rowPag = $rPaginaL->fetch_array()): 
		   
		   if( $pag == $rowPag['pagina_id'] ):
		   
		  		 include "include/".$rowPag['pagina_riferimento']."";   
				 
		    endif;		 
		    
		 endwhile;
		
		endif;
		

        /*-- END BODY ------------------------------------------------------------------*/
		
		include ("include/config/footer.php"); // Inclusione Footer
         
      ?>
            
    </body>
    
    <!--Fine Body -->
    
    <!--Inizio Footer-->
    
    <?php 
	
     	/************   FOOTER JS   ******************/
	  
     	include ("include/config/scripts.php"); // Inclusione JavaScript
		
    ?>
    
    <!--Fine Footer-->

</html>