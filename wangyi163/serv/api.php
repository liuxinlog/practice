<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 16/12/2
 * Time: 下午3:54
 */
function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    // 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。
    // 如果在部署过程中代码在此处验证失败，请到 http://curl.haxx.se/ca/cacert.pem 下载新的证书判别文件。
//    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
    //验证token, 本地可以注释掉, 上线必须打开
    // curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, true);
    curl_setopt($curl, CURLOPT_URL, $url);
    $res = curl_exec($curl);
    curl_close($curl);
    return $res;
}
$cb =$_GET["callback"];
$type =$_GET["type"];
switch ($type){
    //主页接口
    case "home":
        $result = httpGet("http://c.m.163.com/recommend/getSubDocPic?from=toutiao");
        echo "{$cb}({$result})";
        break;
    //直播接口
    case "live":
        $result = httpGet("http://data.live.126.net/livechannel/previewlist.json");
        echo "{$cb}({$result})";
        break;
    //话题
    case "topic":
        $page=$_GET["page"];
        $result = httpGet("http://c.m.163.com/newstopic/list/expert/5aSn6L%2Be/0-".$page.".html");
        echo "{$cb}({$result})";
        break;
    //其他
    default:
        echo $cb.'("err":1,"msg":"参数错误")';
        break;
}
