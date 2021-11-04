<?php
    require 'connect.php';

    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_NUMBER_INT);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    if($name && $email && $phone && $message){
        $sql = $pdo->prepare("SELECT * FROM imovel WHERE mensagem = :txt");
        $sql->bindParam(":txt", $message);
        $sql->execute();
        if($sql->rowCount == 0){
            $sql = $pdo->prepare("INSERT INTO imovel(nome,email,telefone,mensagem) VALUES(:nome,:email,:phone,:txt)");
            $sql->bindParam(":nome", $name);
            $sql->bindParam(":email", $email);
            $sql->bindParam(":phone", $phone);
            $sql->bindParam(":txt", $message);
            $sql->execute();
            header("Location: ../../index.html");
            exit;

        }else{
            header("Location: ../imoveis/anuncie-seu-imovel.html");
            exit;
        }
    }else{
        header("Location: ../imoveis/anuncie-seu-imovel.html");
        exit;
    }


?>