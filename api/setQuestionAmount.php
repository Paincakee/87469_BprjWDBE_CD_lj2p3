<?php

session_start();

if (isset($_POST['question_amount'])) {
  // Sanitize the input to prevent injection attacks
  $amount = filter_input(INPUT_POST, 'question_amount', FILTER_SANITIZE_NUMBER_INT);
  
  // Set the $_SESSION['amount'] value
  $_SESSION['amount'] = $amount;
} else {
  echo 'No form data submitted.';
}
