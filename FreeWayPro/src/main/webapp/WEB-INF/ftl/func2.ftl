<!DOCTYPE html>
<html>
    <head>
        <!-- Http Header Infomation -->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Content-Language" content="zh-cn" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <meta http-equiv="Expires" content="0">
        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Cache" content="no-cache">
        <meta name="author" content="fxstudio.com.cn" />
        <meta name="description" content="吉林省高速公路收费稽查管理系统" />
        <meta name="keywords" content="吉林省高速公路收费稽查管理系统,Management,FXStudio"/>
        <meta name="Copyright" content="Copyright fxstudio.com.cn All Rights Reserved."/>

        <title>FreeWay WebSite</title>
        
        <!-- WebPage Style Desc -->
        <link rel="shortcut icon" href="styles/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="javascript/plugins/ext/resources/css/ext-all.css" />
        <link rel="stylesheet" href="styles/freeway.css" />
    </head>

    <body>
        <!-- Load Javascript lib -->
        <script src="javascript/plugins/ext/adapter/ext/ext-base.js"></script>
        <script src="javascript/plugins/ext/ext-all.js"></script>
        <script src="javascript/plugins/ext/local/ext-lang-zh_CN.js"></script>
        <script src="javascript/plugins/ext/fxstudio-form.js"></script>
        <script src="javascript/plugins/ext/SearchField.js"></script>
        <script src="javascript/plugins/ext/Spotlight.js"></script>
        <script src="javascript/plugins/ext/MultiSelect.js"></script>
        <script src="javascript/plugins/ext/ItemSelector.js"></script>
        <script src="javascript/plugins/ext/Tree-Combobox.js"></script>
        <script src="javascript/plugins/ext/DateTimeField/Spinner.js"></script>
        <script src="javascript/plugins/ext/DateTimeField/SpinnerField.js"></script>
        <script src="javascript/plugins/ext/DateTimeField/DateTimeField.js"></script>
        <script src="javascript/plugins/jquery-1.11.0.min.js"></script>
        
        <#list model["configs"].components as component>
            <script src="javascript/modules/${model["configs"].moduleName}/${component}.js"></script>
        </#list>
    </body>
</html>
