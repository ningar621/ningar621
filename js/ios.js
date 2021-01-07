// 判断是否是 ios 设备    
function getIos() {
    let u = window.navigator.userAgent;
    return !! u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
function requestPermissionsIOS() {
    requestDeviceMotionIOS();
    requestDeviceOrientationIOS();
}
function requestDeviceMotionIOS() {
    if (typeof(window.DeviceMotionEvent).requestPermission === 'function') { 
        (window.DeviceMotionEvent).requestPermission().then(permissionState =>{
            if (permissionState === 'granted') {
                console.log('用户允许权限')
            }
        }).catch((err) =>{
            // alert(JSON.stringify(err));
            alert("用户未允许权限");
        })
    } else {
        // handle regular non iOS 13+ devices
    }
}
function requestDeviceOrientationIOS() {
    if (typeof(DeviceOrientationEvent).requestPermission === 'function') { (
        DeviceOrientationEvent).requestPermission().then(permissionState =>{
            if (permissionState === 'granted') {
                console.log('用户允许权限')
            }
        }).catch((err) =>{
            // alert(JSON.stringify(err));
            alert("用户未允许权限");
        })
    } else {
        // handle regular non iOS 13+ devices
    }
}
function testClick() {
    requestPermissionsIOS();
}