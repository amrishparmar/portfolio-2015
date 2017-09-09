<!DOCTYPE html>
<html lang="en-gb">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/yeti.min.css">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <!-- use HTML5 Shiv and Respond.js for IE 6-8 support of HTML5 elements and enable media queries on IE < 9 -->
    <!--[if lte IE 9]>
      <script type="text/javascript" src="js/html5shiv.min.js"></script>
      <script type="text/javascript" src="js/respond.min.js"></script>
    <![endif]-->
    <?php if (isset($title)): ?>
      <title><?= htmlspecialchars($title) ?> - My Portfolio</title>
    <?php else: ?>
      <title>My Portfolio</title>
    <?php endif ?>
  </head>

  <body>
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigationBar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.php">Amrish's Portfolio</a>
        </div>
        <div class="collapse navbar-collapse" id="navigationBar">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">University Projects <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="voidattack.php">Year 1 - Void Attack</a></li>
                <li><a href="abc123.php">Year 1 - ABC123</a></li>
                <li><a href="virtualoso.php">Year 1 - Virtualoso</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Previous Projects <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="cs50.php">CS50</a></li>
                <li><a href="volunteering.php">Volunteering Services</a></li>
              </ul>
            </li>
            <li><a href="cv.php">CV</a></li>
            <li><a href="hobbies.php">Hobbies</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="contact.php">Contact Me</a></li>
          </ul>
        </div>
      </div>
    </nav>