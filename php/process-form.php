
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

require_once __DIR__ . "/database.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Please submit the application form.");
}

try {
    // Read and clean the submitted form fields
    $name      = trim($_POST["name"] ?? "");
    $email     = trim($_POST["email"] ?? "");
    $programme = trim($_POST["programme"] ?? "");
    $year      = trim($_POST["year"] ?? "");
    $interest  = trim($_POST["interest"] ?? "");
    $message   = trim($_POST["message"] ?? "");

    // Check required fields
    if (
        $name === "" ||
        $email === "" ||
        $programme === "" ||
        $year === "" ||
        $interest === "" ||
        $message === ""
    ) {
        http_response_code(400);
        exit("Please complete all fields before submitting.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        exit("Please enter a valid email address.");
    }

    // Insert the application into the members table
    $sql = "INSERT INTO members
            (name, email, programme, year, interest, message)
            VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    // Bind all fields as strings
    $stmt->bind_param(
        "ssssss",
        $name,
        $email,
        $programme,
        $year,
        $interest,
        $message
    );

    $stmt->execute();

    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Application Submitted</title>
    </head>
    <body>
        <h1>Application Submitted Successfully</h1>
        <p>Thank you, " .
        htmlspecialchars($name, ENT_QUOTES, 'UTF-8') .
        ".</p>
        <p>Your information has been saved successfully.</p>
        <a href='../index.html'>Return to Home</a>
    </body>
    </html>";

    $stmt->close();
    $conn->close();

} catch (Throwable $e) {
    error_log("SIST-Connect form error: " . $e->getMessage());

    http_response_code(500);
    echo "Your application could not be saved. Please try again later.";
}
?>
