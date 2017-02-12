<!DOCTYPE html>
<html>
<head>
  <title>002 - WebDoodlez</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1>Post your random thoughts here!</h1>
	
	<form action="post_message.php" method="post">
		Message: <input type="text" name="message" maxlength="50"><br>
		<button type="submit" id="submit-btn">Submit</button>
	</form>

	<?php
		$connection = mysqli_connect("YOUR_DB_INFO_GOES_HERE");

		$query = "SELECT * FROM BrainBin";
		$resultOfQuery = mysqli_query($connection, $query);

		echo '<div id="all-posts">' . "\n";
		while ($row = mysqli_fetch_array($resultOfQuery)) {
			$id = $row['ID'];

			echo "\t\t" . 
				'<div class="post-container">' . "\n\t\t\t" .
					'<p class="post-text">' . $row['Content'] . '</p>'. "\n\t\t\t" .
					'<form action="delete_message.php" method="post">' . "\n\t\t\t\t" .
        		 		'<input type="hidden" name="delete_id" value="' . $id . '"/>' . "\n\t\t\t\t" .
        		 		'<button name="delete" type="submit" class="delete-btn">X</button>' . "\n\t\t\t" . 
    			 	'</form>' . "\n\t\t" . 
    			'</div>' . "\n";		
		}
		echo "\t" . '</div>' . "\n";

		mysqli_close($connection);
	?>
</body>
</html>