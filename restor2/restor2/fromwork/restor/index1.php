<?php

require_once 'login.php';

if($connection == false)
{
    echo 'Не удалось подключиться к БД:<br>';
    echo mysqli_connect_error();
    exit();
}
    echo 'Подключение установлено<br>';
    $result = mysqli_query($connection,"SELECT * FROM `articles_categories`");
?>

    <ul>
        <?php
            while(($cat= mysqli_fetch_assoc($result)))
                {
                    $articles_count = mysqli_query($connection , "SELECT COUNT(id) AS `total_count` FROM `articles` WHERE `categorie_id` = " . $cat['id']);
                     $articles_count_result = mysqli_fetch_assoc($articles_count);
                    echo '<li>' . $cat['title'] . '(' .$articles_count_result['total_count'] . ')</li>' ;
                }
        ?>
        
    </ul>
    
    <form method="POST" action="handle.php">
        <input type="text" name="login" placeholder="Login">
        <input type="text" name="password" placeholder="Password">

        <hr>
        <input type="submit" value="Отправить">
    </form>
<?php
    
    mysqli_close($connection);
?>
