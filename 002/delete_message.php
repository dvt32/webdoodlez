<html>
<body style="background-color: #6f9de8;">
	<?php 
		if( isset($_POST['delete']) ) {
			echo "Your message was deleted succesfully! :)";

		   	$id = $_POST['delete_id'];  
		   	$query = "DELETE FROM BrainBin WHERE ID = $id";
			$connection = mysqli_connect("YOUR_DB_INFO_GOES_HERE");

			mysqli_query($connection, $query);

			mysqli_close($connection); 

			echo '<meta http-equiv="refresh" content="1; ' . 'index.php' . '">';
		}
		else {
			echo "Something went wrong! :( Try again.";

			echo '<meta http-equiv="refresh" content="1; ' . 'index.php' . '">';
		}
	?>
	<br>
</body>
</html>