<?php 

  require 'scripts/connexion.php';

  $requete = $bdd->query('SELECT id, auteur, likes, src FROM info_img ORDER BY id');

?>

<!DOCTYPE html>
<html>
<head>
  <title>iLab</title>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="description" content="">

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.css" rel="stylesheet">
  <link rel="stylesheet" href="styles/app.css">

  <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
	<script type="text/javascript" src="scripts/jquery.drawr.combined-min.js"></script>

  <script src="scripts/main.js" defer></script>
</head>

<body>

  <header class="header header--main">

    <nav class="nav nav--main">
        <img class="nav__logo" src="assets/images/titregobelin.png" alt="Logo de Goblins' Story">
        <ul class="nav__liste">
            <li><a class="nav__link nav__link--main" href="index.php">Accueil</a></li>
            <li><a class="nav__link nav__link--main" href="main.php">Histoire</a></li>
            <li><a class="nav__link nav__link--main nav__link--hovered" href="read.php">Lire</a></li>
        </ul>
        <div class="nav__button">
            <div class="nav__line nav__line--main nav__line--1"></div>
            <div class="nav__line nav__line--main nav__line--2"></div>
            <div class="nav__line nav__line--main nav__line--3"></div>
        </div>
    </nav>
            
  </header>

  <main class="main main--main">
    <div class="container contrainer--main">
      <div class="container--main__flex">
        <h1 class="titre titre--main">L'histoire Originale</h1>
        <div class="info-box">
          <svg class="info-box__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.44 109.75"><path d="M108.93 54.84C79.44 53.77 55.79 30.11 54.71.62 53.65 30.11 29.99 53.77.5 54.84h.01c29.48 1.08 53.12 24.73 54.2 54.2s0-.05 0-.05c1.1-29.44 24.71-53.05 54.16-54.16h.06Z" style="fill:#00c675"/></svg>
          <p class="info-box__p">0</p>
          <svg  class="info-box__svg--coeur" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.53 15"><path class="info-box__svg--path" d="m10.96 1.05-1.29.86c-.21.14-.49.14-.7 0l-1.29-.86A5.164 5.164 0 0 0 3.79.26C.45.92-.75 5.11 1.66 7.52l7.08 7.08c.32.32.84.32 1.16 0l7.08-7.08C19.39 5.11 18.19.93 14.85.27c-1.27-.25-2.65-.03-3.89.79Z" /></svg>
        </div>
      </div>
      <ul class="read-box">
        <?php while($donnees = $requete->fetch()) { ?>
                <li class="read-box__el">
                    <p class="read-box__number"><?php echo $donnees['id']?></p>
                    <div class="read-box__hidden">
                        <img class="read-box__img" src="<?php echo $donnees['src']?>" >
                    </div>
                    <div class="info-box info-box--branche read-box__info-box">
                        <div>
                            <p class="info-box__name"><?php echo $donnees['auteur']?></p>
                            <svg class="info-box__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.44 109.75"><path d="M108.93 54.84C79.44 53.77 55.79 30.11 54.71.62 53.65 30.11 29.99 53.77.5 54.84h.01c29.48 1.08 53.12 24.73 54.2 54.2s0-.05 0-.05c1.1-29.44 24.71-53.05 54.16-54.16h.06Z" style="fill:#00c675"/></svg>
                        </div>
                        <div>
                            <p class="info-box__p">0</p>
                            <svg  class="info-box__svg--coeur" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.53 15"><path class="info-box__svg--path" d="m10.96 1.05-1.29.86c-.21.14-.49.14-.7 0l-1.29-.86A5.164 5.164 0 0 0 3.79.26C.45.92-.75 5.11 1.66 7.52l7.08 7.08c.32.32.84.32 1.16 0l7.08-7.08C19.39 5.11 18.19.93 14.85.27c-1.27-.25-2.65-.03-3.89.79Z" /></svg>
                        </div>
                    </div>
                </li>
            <?php } ?>
            <li class="read-box__el--add">
                <a href="canvas.html">
                    <svg class="read-box__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.98 196.98"><path style="fill:#202020" d="M196 97.86h-91.15V.98h-7v96.88H.98v7h96.87V196h7v-91.14H196v-7z"/></svg>
                </a>
            </li>
      </ul>
    </div>
  </main>

</body>

</html>
