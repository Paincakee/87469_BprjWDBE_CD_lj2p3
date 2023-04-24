<?php

session_start();

if (isset($_SESSION['amount'])) {
  echo $_SESSION['amount'];
} else {
  echo 'N/A';
}
 