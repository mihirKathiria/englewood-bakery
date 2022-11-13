<?php
$db = new mysqli("localhost", "root", "", "englewood_bakery");
if ($db->connect_error) {
    die("Database Not found");
}
?>