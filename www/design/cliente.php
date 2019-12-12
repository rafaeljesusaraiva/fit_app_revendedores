<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
    include './libs/phpqrcode/qrlib.php'; 
    $text = "Teste1234"; 
    
    // $path variable store the location where to  
    // store image and $file creates directory name 
    // of the QR code file by using 'uniqid' 
    // uniqid creates unique id based on microtime 
    $path = './img/'; 
    $file = $path.uniqid().".png"; 
    
    // $ecc stores error correction capability('L') 
    $ecc = 'L'; 
    $pixel_size = 10; 
    $frame_size = 2; 
    
    // Generates QR Code and Stores it in directory given 
    QRcode::png($text, $file, $ecc, $pixel_size, $frame_size); 

    $type = pathinfo($file, PATHINFO_EXTENSION);
    $data = file_get_contents($file);
    $image = 'data:image/' . $type . ';base64,' . base64_encode($data);
    unlink($file);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>APP Cliente | Fit Sportbalsem</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- FAVICON Start -->
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png">
        <link rel="manifest" href="img/favicon/site.webmanifest">
        <link rel="mask-icon" href="img/favicon/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="img/favicon/favicon.ico">
        <meta name="msapplication-TileColor" content="#2b5797">
        <meta name="msapplication-config" content="img/favicon/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
        <!-- FAVICON End -->
        <link href="css/openSans.css" rel="stylesheet">
        <link rel="stylesheet" href="css/cliente.css">
    </head>
    <body>
        <div class="main-container">
            <div class="bg-container">
                <div class="top-circles"></div>
                <div class="bottom-circles"></div>
            </div>
            <div class="container text-center">
                <div class="flex-container">
                    <div id="qr_code">
                        <?php
                            // Displaying the stored QR code from directory 
                            echo "<img src='".$image."'>"; 
                            
                        ?>
                    </div>
                </div>
            </div>
        </div>

        <script src="js/background.js" async defer></script>
    </body>
</html>