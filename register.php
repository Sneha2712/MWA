<?php
// Retrieve form data
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $club = $_POST['club'];

    // CSV file path
    $csvFile = "club1.csv";

    // Check if the file exists, otherwise create a new one and add headers
    if (!file_exists($csvFile)) {
    $file = fopen($csvFile, 'w');
    fputcsv($file, array('Name', 'Email', 'Club'));
    } else {
    $file = fopen($csvFile, 'a');
    }

    // Add the data to the CSV file
    $data = array($name, $email, $club);
    fputcsv($file, $data);
    fclose($file);

    echo "Registration successful!";
}
?>
