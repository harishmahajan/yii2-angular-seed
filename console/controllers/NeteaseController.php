<?php
namespace console\controllers;

use Yii;

/**
 * Netease controller
 */
class NeteaseController extends \yii\console\Controller
{
    public function actionImport()
    {
        $file = file_get_contents('/var/www/OnlineCourses/console/controllers/126.json', FILE_USE_INCLUDE_PATH);
        $json = json_decode($file, true);
        var_dump($json[0]);die;
    }
}
