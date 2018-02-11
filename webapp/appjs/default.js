const bg_util = (function () {
    let getContextPath = function () {
        let pathName = document.location.pathname;
        let index = pathName.substr(1).indexOf("/");
        return pathName.substr(0, index + 1);
    };

    let addressJump = function (index) {
        let path = getContextPath();
        console.log(path);
        switch (index) {
            case 1:
                window.location = path + "/webapp/html/games/fqzs/fqzs.html";
                break;
            case 2:
                window.location = path + "/webapp/html/games/2048/2048.html";
                break;
            case 3:
                window.location = path + "/webapp/html/games/wuziqi/wuziqi.html";
                break;
            case 4:
                window.location = path + "/webapp/html/games/explain.html";
                break;
            case 5:
                break;
            case 99:
                window.location = path + "/webapp/html/fqzs.html";
                break;
            default:
                break;
        }
    };
    return {addressJump: addressJump, getContextPath: getContextPath}
})();