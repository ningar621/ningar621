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
    let viewer_main,three_1,three_2,three_3,three_4,center1,center2,center3,center4;
    let spotRight1, spotChicago1,spotXZ1,spotHouston1,spotWC1,spotHawaii1;
    let spotSanDiego1,spotLosAngeles1,spotLasVegas1,spotRight1_1;
    let spotleft2, spotLasVegas2,spotLosAngeles2,spotSanDiego2,spotHawaii2,spotStair,spotNA,spotSanFrancisco,spotSeattle;
    let spotRight3,spotRight3_2,spotLeft3, spotLasVegas3,spotLosAngeles3;
    let spotSanDiego3,spotHawaii3,spotNA3,spotSanFrancisco3,spotSeattle3;
    let spotRight4,spotRight4_2, spotChicago4,spotHouston4,spotWC4,spotHawaii4,spotSanDiego4,spotLosAngeles4,spotLasVegas4;
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
    viewer_main = new PANOLENS.Viewer({ enableReticle: false, output: 'console', viewIndicator: false, autoRotate: false, autoRotateSpeed: 2, autoRotateActivationDuration: 3000, dwellTime: 3000 });
    //三楼楼梯口
    three_1 = new PANOLENS.ImagePanorama( 'asset/textures/three_1.jpeg' );
    three_1.addEventListener( 'progress', function(e){
      onProgress(e,center1)
    });
    three_1.addEventListener( 'enter', onEnter );
    //行政部
    three_2 = new PANOLENS.ImagePanorama( 'asset/textures/three_2.jpeg' );
    three_2.addEventListener( 'progress', function(e){
        onProgress(e,center2)
    });
    three_2.addEventListener( 'enter', onEnter );
    //资产
    three_3 = new PANOLENS.ImagePanorama( 'asset/textures/three_3.jpeg' );
    three_3.addEventListener( 'progress', function(e){
        onProgress(e,center3)
    });
    three_3.addEventListener( 'enter', onEnter );
    //拉斯维加斯
    three_4 = new PANOLENS.ImagePanorama( 'asset/textures/three_4.jpeg' );
    three_4.addEventListener( 'progress', function(e){
        onProgress(e,center4)
    });
    three_4.addEventListener( 'enter', onEnter );
    //切换场景
    three_1.link( three_2, new THREE.Vector3(4317.34, -2337.87, 930.03),300,'','up');

    three_1.link( three_4, new THREE.Vector3( -31.23, -2881.96, 4081.51 ),300,'','up');

    three_2.link( three_1, new THREE.Vector3(-2668.35, -620.15, 93.96 ),240,'','up');
    three_2.link( three_3, new THREE.Vector3( 13.85, -2159.73, 3870.29),300,'','up');
  
    three_3.link( three_2, new THREE.Vector3(196.98, -1173.53, -4849.75),240,'','up');
    three_3.link( three_4, new THREE.Vector3(-4693.19, -1676.79, 257.62),300,'','up');
    
    three_4.link( three_1, new THREE.Vector3(-109.25, -1723.70, -4683.66),300,'','up');
    three_4.link( three_3, new THREE.Vector3(4097.81, -2831.44, -364.38),300,'','up');
    //地点标示
    //场景1
    center1 = new THREE.Mesh( new THREE.BoxGeometry(0, 0, 0), new THREE.MeshNormalMaterial() );
    center1.position.set(-4476.42, -2011.88, 936.06);
    three_1.add(center1);
    
    spotLasVegas1 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotLasVegas1.position.set( 465.10, -966.85, 4960.65);
    spotLasVegas1.addHoverText( '拉斯维加斯' );
    three_1.add(spotLasVegas1);

    spotLosAngeles1 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotLosAngeles1.position.set( 465.10, -766.85, 4960.65);
    spotLosAngeles1.addHoverText( '洛杉矶' );
    three_1.add(spotLosAngeles1);

    spotSanDiego1 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotSanDiego1.position.set( 465.10, -566.85, 4960.65);
    spotSanDiego1.addHoverText( '圣地亚哥' );
    three_1.add(spotSanDiego1);

    spotHawaii1 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotHawaii1.position.set( 465.10, -381.25, 4960.65);
    spotHawaii1.addHoverText( '夏威夷' );
    three_1.add(spotHawaii1);

    spotXZ1 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotXZ1.position.set( 4934.51, -209.82, -710.54);
    spotXZ1.addHoverText( '行政部' );
    three_1.add(spotXZ1);
    
    spotChicago1 = new PANOLENS.Infospot( 270, PANOLENS.DataImage.Info );
    spotChicago1.position.set(-1120.33, -554.15, -4833.36 );
    spotChicago1.addHoverText( '芝加哥会议室' );
    three_1.add(spotChicago1);

    spotHouston1 = new PANOLENS.Infospot( 150, PANOLENS.DataImage.Info );
    spotHouston1.position.set(-761.02, -431.92, -4914.53 );
    spotHouston1.addHoverText( '休斯顿会议室' );
    three_1.add(spotHouston1);

    spotWC1 = new PANOLENS.Infospot( 80, PANOLENS.DataImage.Info );
    spotWC1.position.set(-637.14, -492.85, -4926.86);
    spotWC1.addHoverText( '卫生间' );
    three_1.add(spotWC1);
    
    spotRight1 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.rightArrow );
    spotRight1.position.set( 253.79, -711.17, 4933.54);
    three_1.add(spotRight1);

    spotRight1_1 = new PANOLENS.Infospot( 240, PANOLENS.DataImage.rightArrow );
    spotRight1_1.position.set( 1145.17, -2295.12, 4284.45 );
    spotRight1_1.addEventListener( 'click', function(){
      window.location.href='two.html'
      // viewer_main.setPanorama( two_2 );
    });
    three_1.add(spotRight1_1);

    // three_1.add(center1,spotRight1, spotChicago1,spotXZ1,spotHouston1,spotWC1,spotHawaii1,spotSanDiego1,spotLosAngeles1,spotLasVegas1,spotRight1_1);
    //场景2
    center2 = new THREE.Mesh( new THREE.BoxGeometry(0, 0, 0), new THREE.MeshNormalMaterial() );
    center2.position.set(-255.35, -1005.54, 4880.63);

    spotleft2 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.leftArrow );
    spotleft2.position.set( 61.39, -638.56, 4952.22 );

    spotLasVegas2 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotLasVegas2.position.set( 85.31, -884.23, 4913.67 );
    spotLasVegas2.addHoverText( '拉斯维加斯' );

    spotLosAngeles2 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotLosAngeles2.position.set( 78.09, -1054.92, 4880.10 );
    spotLosAngeles2.addHoverText( '洛杉矶' );

    spotSanDiego2 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotSanDiego2.position.set(78.09, -1254.92, 4880.10);
    spotSanDiego2.addHoverText( '圣地亚哥' );

    spotHawaii2 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotHawaii2.position.set(78.09, -1454.92, 4880.10);
    spotHawaii2.addHoverText( '夏威夷' );
    
    spotNA = new PANOLENS.Infospot( 200, PANOLENS.DataImage.Info );
    spotNA.position.set( 448.85, -265.40, 4966.05 );
    spotNA.addHoverText( '北美洲' );

    spotSanFrancisco = new PANOLENS.Infospot( 240, PANOLENS.DataImage.Info );
    spotSanFrancisco.position.set( 1598.36, -272.83, 4723.37);
    spotSanFrancisco.addHoverText( '旧金山' );

    spotSeattle = new PANOLENS.Infospot( 240, PANOLENS.DataImage.Info );
    spotSeattle.position.set( 2843.99, -340.51, 4090.81);
    spotSeattle.addHoverText( '西雅图' );
    
    spotStair = new PANOLENS.Infospot( 240, PANOLENS.DataImage.Info );
    spotStair.position.set(-4956.35, -432.20, 448.92 );
    spotStair.addHoverText( '三楼楼梯口' );

    three_2.add(center2,spotleft2, spotLasVegas2,spotLosAngeles2,spotSanDiego2,spotHawaii2,spotStair,spotNA,spotSanFrancisco,spotSeattle);
    //场景3
    center3 = new THREE.Mesh( new THREE.BoxGeometry(0, 0, 0), new THREE.MeshNormalMaterial() );
    center3.position.set(4851.98, -1147.24, 264.23);

    spotRight3 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.rightArrow );
    spotRight3.position.set( -4796.18, -1029.54, 929.48 );

    spotRight3_2 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.rightArrow );
    spotRight3_2.position.set( -4962.84, -344.59, 450.79);

    spotLasVegas3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    spotLasVegas3.position.set( -3332.22, -310.67, 3710.92 );
    spotLasVegas3.addHoverText( '拉斯维加斯' );

    spotLosAngeles3 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotLosAngeles3.position.set( -4755.63, -1211.49, 930.98 );
    spotLosAngeles3.addHoverText( '洛杉矶' );

    spotSanDiego3 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotSanDiego3.position.set(-4923.34, -703.64, 465.61);
    spotSanDiego3.addHoverText( '圣地亚哥' );

    spotHawaii3 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotHawaii3.position.set(-4944.10, -531.07, 459.12);
    spotHawaii3.addHoverText( '夏威夷' );
    
    spotNA3 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.Info );
    spotNA3.position.set( 2085.59, -198.51, 4532.54 );
    spotNA3.addHoverText( '北美洲' );

    spotLeft3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.leftArrow );

    spotLeft3.position.set( 359.83, -1788.74, -4646.54 );
    
    spotSanFrancisco3 = new PANOLENS.Infospot( 240, PANOLENS.DataImage.Info );
    spotSanFrancisco3.position.set( 347.81, -2029.26, -4547.76);
    spotSanFrancisco3.addHoverText( '旧金山' );

    spotSeattle3 = new PANOLENS.Infospot( 240, PANOLENS.DataImage.Info );
    spotSeattle3.position.set( 347.81, -2429.26, -4547.76);
    spotSeattle3.addHoverText( '西雅图' );
    
    three_3.add(center3,spotRight3,spotRight3_2,spotLeft3, spotLasVegas3,spotLosAngeles3,spotSanDiego3,spotHawaii3,spotNA3,spotSanFrancisco3,spotSeattle3);
    //场景4
    center4 = new THREE.Mesh( new THREE.BoxGeometry(0, 0, 0), new THREE.MeshNormalMaterial() );
    center4.position.set(122.09, -1319.24, -4812.58);

    spotRight4 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.leftArrow );
    spotRight4.position.set( 4747.69, -1538.49, -180.46);

    spotRight4_2 = new PANOLENS.Infospot( 200, PANOLENS.DataImage.leftArrow );
    spotRight4_2.position.set( 4965.64, -526.98, -57.28);
    
    spotLasVegas4 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotLasVegas4.position.set( 4978.42, -190.96, 268.61 );
    spotLasVegas4.addHoverText( '拉斯维加斯' );

    spotLosAngeles4 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotLosAngeles4.position.set( 4936.62, -740.16, -129.62 );
    spotLosAngeles4.addHoverText( '洛杉矶' );

    spotSanDiego4 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotSanDiego4.position.set(4544.36, -2044.76, -276.40);
    spotSanDiego4.addHoverText( '圣地亚哥' );

    spotHawaii4 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotHawaii4.position.set(4660.04, -1768.11, -247.45);
    spotHawaii4.addHoverText( '夏威夷' );
    
    spotChicago4 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotChicago4.position.set(-53.81, -314.27, -4984.83);
    spotChicago4.addHoverText( '芝加哥会议室' );

    spotHouston4 = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info );
    spotHouston4.position.set(-86.73, -143.69, -4989.81);
    spotHouston4.addHoverText( '休斯顿会议室' );

    spotWC4 = new PANOLENS.Infospot( 180, PANOLENS.DataImage.Info );
    spotWC4.position.set(-2983.15, -318.06, 3993.21);
    spotWC4.addHoverText( '卫生间' );

    spotLeft4 = new PANOLENS.Infospot( 240, PANOLENS.DataImage.leftArrow );
    spotLeft4.position.set( 97.24, -632.83, -4951.02 );
    spotLeft4.addEventListener( 'click', function(){
      window.location.href='two.html'
      // viewer_main.setPanorama( two_2 );
    });

    three_4.add(center4,spotRight4,spotRight4_2, spotChicago4,spotHouston4,spotWC4,spotHawaii4,spotSanDiego4,spotLosAngeles4,spotLasVegas4,spotLeft4);
    
    //添加场景图
    viewer_main.add(three_1,three_2,three_3,three_4);

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
