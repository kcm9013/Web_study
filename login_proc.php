<?php

    $id = $_POST['id'];
    $pw = $_POST['passwd'];

    if($id == 'min' && $pw == '12345')
    {
        echo "<script>alert(\"환영합니다.\")</script>";
    }

    else
    {
        echo "<script>alert(\"다시 시도해주세요.\")</script>";
    }
?>