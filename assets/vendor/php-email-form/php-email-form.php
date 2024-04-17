<?php

class PHP_Email_Form {

    private $to;
    private $from_name;
    private $from_email;
    private $subject;
    private $message;
    private $headers;
    private $smtp;

    public $ajax = false;

    function __construct() {
        $this->headers = "MIME-Version: 1.0" . "\r\n";
        $this->headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    }

    public function send() {
        if ($this->ajax) {
            // Set appropriate headers for AJAX response
            header('Content-Type: application/json');

            // Validate input data
            if (empty($this->to) || empty($this->from_name) || empty($this->from_email) || empty($this->subject) || empty($this->message)) {
                echo json_encode(array('success' => false, 'message' => 'All fields are required.'));
                exit;
            }

            // Compose email headers
            $this->headers .= "From: {$this->from_name} <{$this->from_email}>" . "\r\n";

            // Send email using mail() function
            $mail_sent = mail($this->to, $this->subject, $this->message, $this->headers);

            if ($mail_sent) {
                echo json_encode(array('success' => true, 'message' => 'Email sent successfully.'));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Failed to send email.'));
            }
        } else {
            // Non-AJAX fallback (not typically used in modern web applications)
            // You may implement a different response mechanism here
        }
    }

    public function add_message($content, $label = '') {
        $this->message .= "<p><strong>{$label}:</strong> {$content}</p>";
    }

    // Setter methods for setting properties
    public function setTo($to) {
        $this->to = $to;
    }

    public function setFromName($from_name) {
        $this->from_name = $from_name;
    }

    public function setFromEmail($from_email) {
        $this->from_email = $from_email;
    }

    public function setSubject($subject) {
        $this->subject = $subject;
    }

    public function setSmtp($smtp) {
        $this->smtp = $smtp;
    }

}

?>
