<html>
<body style="background-color: #6f9de8;">
	<?php 
		if ( !empty($_POST["message"]) ) {
			echo "Your message was posted succesfully! :)";

			$message = strip_tags($_POST["message"]);

			$connection = mysqli_connect("YOUR_DB_INFO_GOES_HERE");

			$query = "INSERT INTO BrainBin (Content) VALUES ('" . $message . "')";

			mysqli_query($connection, $query);

			mysqli_close($connection); 

			echo '<meta http-equiv="refresh" content="1; ' . 'index.php' . '">';
		}
		else {
			echo "Aw, come on, an empty message? :( Give it another shot, dude.";

			echo '<meta http-equiv="refresh" content="1; ' . 'index.php' . '">';
		}
	?>
	<br>
</body>
</html>