<?php 

  //lecture

  $requete = $bdd->query('SELECT auteur, src 
                            FROM info_img i
                            INNER JOIN branches b
                            ON b.id = i.id_branche') or die(print_r($bdd->errorInfo()));

while($donnees = $requete->fetch()) {
  echo '<img src="'.$donnees['src'].'"/>';
}

?>

<!DOCTYPE html>
<html>
<head>
  <title>iLab</title>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="description" content="">

  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="http://nicolas-premont.be/projets/tfa">
  <meta name="twitter:creator" content="@nicolas_premont">
  <meta name="twitter:title" content="TFA // LineHub">
  <meta name="twitter:description" content="Page d'accueil de la landing page de Linehub">
<!-- Twitter summary card with large image must be at least 280x150px -->
  <meta name="twitter:image" content="http://nicolas-premont.be/projets/tfa/assets/images/logofond.jpg">

  <meta property="og:site_name" content="TFA // LineHub" />
  <meta property="og:title" content="TFA // LineHub" />
  <meta property="og:description" content="Page d'accueil de la landing page de Linehub" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://nicolas-premont.be/projets/tfa" />
  <meta property="og:image" content="http://nicolas-premont.be/projets/tfa/assets/images/logofond.jpg" />
  <meta property="og:image:width" content="1080">
  <meta property="og:image:height" content="1920">
  <meta name="viewport" content="width=device-width, initial-scale=1">


  <link href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.css" rel="stylesheet">
  <link rel="stylesheet" href="styles/app.css">

  <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
	<script type="text/javascript" src="scripts/jquery.drawr.combined-min.js"></script>

  <script src="scripts/main.js" defer></script>
</head>

<body>

  <img src="" alt="">

</body>

</html>
