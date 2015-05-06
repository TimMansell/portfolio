<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
<?php 
	$errors = false;
	$nError = false;
	$eError = false;
	$mError = false;
	$errorShow = $msgSent = 'hide';
	
	$name ='';
	$email = '';
	$message = '';
	
	if(isset($_POST['submit'])){
		include "lib/send-email.php"; 
	}
?>
<title>Contact Me | Tim Mansell - PHP Web Developer</title>
<meta charset="utf-8">
<meta name="description" content="Want to get in contact we me?  Then send me an email!">
<link rel="stylesheet" href="css/style.css" type="text/css" media="all">
<!--[if lt IE 9]>
<link rel="stylesheet" href="css/iefix.css" type="text/css" media="all">
<![endif]-->
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
<link rel="apple-touch-icon" href="images/apple-touch-icon.png"/>
<script src="js/modernizr.custom.98829.js"></script>
<!--[if lt IE 9]>
<p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p>
<![endif]-->
</head>
<body>
	<div class="container"> 
		<!--header -->
		<header>
			<div class="name"><a href="index.html" id="logo">Tim Mansell</a></div>
			<p class="slogan">PHP Web Developer</p>
			<nav class="menu">
				<ul id="menu">
					<li id="about" data-collapse="0"><a href="about.html">About</a></li>
					<li id="services" data-collapse="0"><a href="services.html">Services</a></li>
					<li id="my-portfolio" data-collapse="0"><a href="my-portfolio.html">Portfolio</a></li>
					<li id="contact-me" data-collapse="0"><a href="contact-me.php" class="selected">Contact</a></li>
				</ul>
			</nav>
		</header>
		<!--header end--> 
		<!--content -->
		<article id="content">
			<div class="wrapper contentPad">
				<div class="ajax-wrapper">
					<div class="ajax-content">
						<div class="contact-col1 colIndent1">
							<h1>Contact Me!</h1>
							<p>Please feel free to contact me via any of the details provided or use the form to let me know about your project, request for a proposal, or simply say 'Hi'. I would love to hear from you.</p>
							<p><strong>Mobile:</strong> 047 869 7088<br />
							<strong>Email:</strong> <a href="mailto:info@timmansell.com" title="Contact me by email">info@timmansell.com</a></p>
							<div id="social-media">
								<div class="contact-type skype">
									<p>TimMansell</p>
								</div> 
								<div class="contact-type twitter">
									<p><a href="https://twitter.com/TimMansell" target="_blank" title="Contact me on Twitter">@TimMansell</a></p>
								</div>
								<div class="contact-type linkedin">
									<p><a href="http://au.linkedin.com/pub/tim-mansell/4b/1a/88" target="_blank" title="Contact me on LinkedIn">Visit Site</a></p>
								</div>	
							</div>
						</div>
						<div class="contact-col2">
							<h2>Send me an email</h2>
							<form method="post" id="contact-form" name="contact-form" action="<?php echo $_SERVER['PHP_SELF']; ?>">
								<label for="name">Name</label>
								<input type="text" name="name" id="name" value="<?php echo $name; ?>" placeholder="Name:" <?php if ($nError==true){echo 'class="error-field"';} ?> />
								<label for="email">Email</label>
								<input type="email" name="email" id="email" value="<?php echo $email; ?>" placeholder="Email:" <?php if ($eError==true){echo 'class="error-field"';} ?> />
								<label for="message">Message</label>
								<textarea name="message" id="message" placeholder="Message:" <?php if ($mError==true){echo 'class="error-field"';} ?>><?php echo $message; ?></textarea>
								<input type="submit" id="submit" value="Send" class="button" name="submit" />
							</form>
							<div id="popup-errors">
								<div id="popup-fields-error-arrow" class="pufe <?php echo $errorShow; ?>"></div>
								<div id="popup-fields-error" class="pufe <?php echo $errorShow; ?>">
									<p>Please fill in all the fields.</p>
								</div>
								
								<div id="popup-error-arrow" class="pue"></div>
								<div id="popup-error" class="pue">
									<p>Message failed ... Please try again.</p>
								</div>
								<div id="popup-success-arrow" class="pus <?php echo $msgSent; ?>"></div>
								<div id="popup-success" class="pus <?php echo $msgSent; ?>">
									<p>Message Sent!</p>
								</div>
								<div id="popup-sending-arrow" class="pusen"></div>
								<div id="popup-sending" class="pusen">
									<p>Message Sending ...</p>
								</div>
							</div>
						</div>  
					</div>
				</div>
			</div>
		</article>
		<!--content end-->
		<!--footer -->
		<footer>
			<p>&copy; 2012 Tim Mansell</p>
		</footer>
		<!--footer end-->
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="js/jcarousellite.js"></script>
	<script src="js/jquery.easing.js"></script>
	<script src="js/jquery.fancybox-1.3.4.pack.js"></script>
	<script src="js/jquery.placeholder.min.js"></script>
	<script src="js/scripts.min.js"></script>
	<noscript><p class="alert">This page uses Javascript to enhance the viewing experience! Your browser either doesn't support Javascript or you have it turned off. Please enable JavaScript.</p></noscript>
</body>
</html>