// 判断是否是 ios 设备    
function getIos() {
  let u = window.navigator.userAgent;
  return !! u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
function requestPermissionsIOS(obj,ios) {
  requestDeviceMotionIOS(obj,ios);
  requestDeviceOrientationIOS(obj,ios);
}
function requestDeviceMotionIOS(obj,ios) {
  if (typeof(window.DeviceMotionEvent).requestPermission === 'function') { 
      (window.DeviceMotionEvent).requestPermission().then(permissionState =>{
          if (permissionState === 'granted') {
            obj.enableControl( PANOLENS.CONTROLS.DEVICEORIENTATION );
            ios.style.display='none';
          }
      }).catch((err) =>{
          // alert(JSON.stringify(err));
          alert("用户未允许权限");
      })
  } else {
      // handle regular non iOS 13+ devices
  }
}
function requestDeviceOrientationIOS(obj,ios) {
  if (typeof(DeviceOrientationEvent).requestPermission === 'function') { (
      DeviceOrientationEvent).requestPermission().then(permissionState =>{
          if (permissionState === 'granted') {
            obj.enableControl( PANOLENS.CONTROLS.DEVICEORIENTATION );
            ios.style.display='none';
          }
      }).catch((err) =>{
          // alert(JSON.stringify(err));
          alert("用户未允许权限");
      })
  } else {
      // handle regular non iOS 13+ devices
  }
}
function testClick(obj,ios) {
  requestPermissionsIOS(obj,ios);
}
function canvasMap(){
    let viewer_main, two_1,two_2,two_3,two_4,tcenter1,tcenter2,tcenter3,tcenter4;
    let progressElement = document.getElementById( 'progress' );
    function onEnter ( event ) {
        progressElement.style.width = 0;
        progressElement.classList.remove( 'finish' );
      }
    function onProgress ( event ,spot) {
        progress = event.progress.loaded / event.progress.total * 100;
        progressElement.style.width = progress + '%';
        if ( progress === 100 ) {
            // spot.focus( 1000, TWEEN.Easing['Exponential'][ 'out'] );
            viewer_main.tweenControlCenterByObject(spot)
            progressElement.classList.add( 'finish' );
        }   
    }
    viewer_main = new PANOLENS.Viewer({ enableReticle: false, output: '', viewIndicator: false, autoRotate: false, autoRotateSpeed: 2, autoRotateActivationDuration: 3000, dwellTime: 3000 });
     //二层场景图
    let spotLeft1_2,spotSingapore1,spotKualaLumpur1,spotLatinAmerica1;
    let tspotRight1,spotRight1_2,spotLeft1,spotAustralia1,spotBangkok,tspotWC1,spotNewDelhi;
    let spotRight2,spotAustralia2;
    let spotWC3,spotAustralia3;
    let tspotWC4,spotAustralia4,spotSingapore4,spotKualaLumpur4,spotLatinAmerica4,tspotRight4;
    //二楼楼梯口
    two_1 = new PANOLENS.ImagePanorama( 'asset/textures/two_1.jpeg' );
    two_1.addEventListener( 'progress', function(e){
        onProgress(e,tcenter1)
    });
    two_1.addEventListener( 'enter', onEnter );
    //二楼场景2
    two_2 = new PANOLENS.ImagePanorama( 'asset/textures/two_2.jpeg' );
    two_2.addEventListener( 'progress', function(e){
        onProgress(e,tcenter2)
    });
    two_2.addEventListener( 'enter', onEnter );
    //二楼场景3
    two_3 = new PANOLENS.ImagePanorama( 'asset/textures/two_3.jpeg' );
    two_3.addEventListener( 'progress', function(e){
        onProgress(e,tcenter3)
    });
    two_3.addEventListener( 'enter', onEnter );
    //二楼场景4
    two_4 = new PANOLENS.ImagePanorama( 'asset/textures/two_4.jpeg' );
    two_4.addEventListener( 'progress', function(e){
        onProgress(e,tcenter4)
    });
    two_4.addEventListener( 'enter', onEnter );
    
     //切换场景
     two_1.link( two_4, new THREE.Vector3(-19.50, -2038.02, 4560.93),300,'','up');
     two_1.link( two_2, new THREE.Vector3(4566.67, -2021.80, -52.69),300,'','up');
 
     two_2.link( two_1, new THREE.Vector3(-4510.14, -2115.84, 304.04),300,'','up');
     two_2.link( two_3, new THREE.Vector3( 385.98, -1961.35, 4577.07 ),300,'','up');
 
     two_3.link( two_2, new THREE.Vector3(157.56, -2303.43, -4428.03),300,'','up');
 
     two_3.link( two_4, new THREE.Vector3(-4789.31, -1373.29, -275.31),300,'','up');
     
     two_4.link( two_1, new THREE.Vector3(-490.28, -1705.44, -4670.43),300,'','up');
     two_4.link( two_3, new THREE.Vector3(4558.24, -2044.35, -15.17),300,'','up');
    //地点标示
    //二楼场景1
    tcenter1 = new THREE.Mesh( new THREE.BoxGeometry(0, 0, 0), new THREE.MeshNormalMaterial() );
    tcenter1.position.set( -4860.32, -1158.27, -63.19 );
    two_1.add(tcenter1);

    spotAustralia1 = new PANOLENS.Infospot( 180, PANOLENS.DataImage.Info );
    spotAustralia1.position.set( 4980.42, -355.86, -106.81 );
    spotAustralia1.addHoverText( '澳洲' );
    two_1.add(spotAustralia1);

    spotSingapore1 = new PANOLENS.Infospot( 270, PANOLENS.DataImage.Info );
    spotSingapore1.position.set( -1812.96, 41.72, 4650.70 );
    spotSingapore1.addHoverText( '新加坡' );
    two_1.add(spotSingapore1);

    spotKualaLumpur1 = new PANOLENS.Infospot( 240, PANOLENS.DataImage.Info );
    spotKualaLumpur1.position.set( -583.59, -118.24, 4958.26 );
    spotKualaLumpur1.addHoverText( '吉隆坡' );
    two_1.add(spotKualaLumpur1);

    tspotWC1 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.Info );
    tspotWC1.position.set( -355.71, -145.02, -4975.66 );
    tspotWC1.addHoverText( '卫生间' );
    two_1.add(tspotWC1);
    
    tspotRight1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.rightArrow );
    tspotRight1.position.set( -4851.64, -866.48, -786.36 );
    two_1.add(tspotRight1);

    spotRight1_2 = new PANOLENS.Infospot( 150, PANOLENS.DataImage.rightArrow );
    spotRight1_2.position.set( -53.84, -458.24, -4973.96 );
    two_1.add(spotRight1_2);

    spotLatinAmerica1 = new PANOLENS.Infospot( 180, PANOLENS.DataImage.Info );
    spotLatinAmerica1.position.set( -4894.34, -582.66, -774.56 );
    spotLatinAmerica1.addHoverText( '拉丁美洲' );
    two_1.add(spotLatinAmerica1);

    spotBangkok = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotBangkok.position.set( -17.62, -300.82, -4987.26 );
    spotBangkok.addHoverText( '曼谷' );
    two_1.add(spotBangkok);
    
    spotNewDelhi = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotNewDelhi.position.set( -10.48, -104.29, -4995.35 );
    spotNewDelhi.addHoverText( '新德里' );
    two_1.add(spotNewDelhi);

    spotLeft1 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.leftArrow );
    spotLeft1.position.set( 4955.21, -600.01, -91.46 );
    two_1.add(spotLeft1);

    spotLeft1_2 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.leftArrow );
    spotLeft1_2.position.set( 4899.70, -761.40, 605.72 );
    spotLeft1_2.addEventListener( 'click', function(){
      window.location.href='three.html'
      // viewer_main.setPanorama( two_2 );
    });
    two_1.add(spotLeft1_2);
    // two_1.add(tcenter1,spotSingapore1,spotKualaLumpur1,spotLatinAmerica1,tspotRight1,spotRight1_2,spotBangkok,tspotWC1,spotNewDelhi);
    //二楼场景2
    tcenter2 = new THREE.Mesh( new THREE.BoxGeometry(0, 0, 0), new THREE.MeshNormalMaterial() );
    tcenter2.position.set( 389.21, 51.22, 4977.59 );
   
    spotRight2 = new PANOLENS.Infospot( 240, PANOLENS.DataImage.rightArrow );
    spotRight2.position.set( 386.38, -472.93, 4954.79 );
   
    spotAustralia2 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.Info );
    spotAustralia2.position.set( 387.83, -258.06, 4969.54 );
    spotAustralia2.addHoverText( '澳洲' );

    spotRight2_2 = new PANOLENS.Infospot( 240, PANOLENS.DataImage.rightArrow );
    spotRight2_2.position.set( -4939.80, -514.28, 539.22 );

    spotRight2_2.addEventListener( 'click', function(){
      window.location.href='three.html'
      // viewer_main.setPanorama( two_2 );
    });

    two_2.add(tcenter2,spotRight2,spotAustralia2,spotRight2_2);
    //二楼场景3
    tcenter3 = new THREE.Mesh( new THREE.BoxGeometry(0, 0, 0), new THREE.MeshNormalMaterial() );
    tcenter3.position.set( 4958.63, -455.57, -352.32 );
    
    spotAustralia3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    spotAustralia3.position.set( 4940.49, 548.89, -487.84 );
    spotAustralia3.addHoverText( '澳洲' );
    
    spotWC3 = new PANOLENS.Infospot( 180, PANOLENS.DataImage.Info );
    spotWC3.position.set(2757.20, 2.49, 4162.98);
    spotWC3.addHoverText( '卫生间' );

    two_3.add(tcenter3,spotWC3,spotAustralia3);
    //二楼场景4
    tcenter4 = new THREE.Mesh( new THREE.BoxGeometry(0, 0, 0), new THREE.MeshNormalMaterial() );
    tcenter4.position.set( 500.98, -52.86, -4989.96 );

    spotAustralia4 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.Info );
    spotAustralia4.position.set( 4993.25, -99.08, 54.43 );
    spotAustralia4.addHoverText( '澳洲' );

    tspotWC4 = new PANOLENS.Infospot( 240, PANOLENS.DataImage.Info );
    tspotWC4.position.set( -2837.66, 177.83, 4102.53 );
    tspotWC4.addHoverText( '卫生间' );

    spotSingapore4 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.Info );
    spotSingapore4.position.set( -731.66, -6.11, -4939.26 );
    spotSingapore4.addHoverText( '新加坡' );

    spotKualaLumpur4 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.Info );
    spotKualaLumpur4.position.set( -889.92, -54.65, -4912.27 );
    spotKualaLumpur4.addHoverText( '吉隆坡' );

    spotRight4 = new PANOLENS.Infospot( 240, PANOLENS.DataImage.rightArrow );
    spotRight4.position.set( -794.40, -912.90, -4841.04 );

    spotLatinAmerica4 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.Info );
    spotLatinAmerica4.position.set( -771.63, -707.55, -4879.86 );
    spotLatinAmerica4.addHoverText( '拉丁美洲' );

    two_4.add(tcenter4,tspotWC4,spotAustralia4,spotSingapore4,spotKualaLumpur4,spotLatinAmerica4,spotRight4);
   
    //添加场景图
    viewer_main.add(two_1,two_2,two_3,two_4);

    let oIos = document.getElementById( 'ios' );
    //获取陀螺仪
    if(getIos()){
      oIos.style.display='block';
      oIos.onclick=function(){
        testClick(viewer_main,oIos);
      }
      if (typeof(window.DeviceMotionEvent).requestPermission === 'function') { 
        (window.DeviceMotionEvent).requestPermission().then(permissionState =>{
          if (permissionState === 'granted') {
            oIos.style.display='none';
            viewer_main.enableControl( PANOLENS.CONTROLS.DEVICEORIENTATION );
          }else{
          }
        })
      }
    }else{
      oIos.style.display='none';
      viewer_main.enableControl( PANOLENS.CONTROLS.DEVICEORIENTATION );
    }
}
