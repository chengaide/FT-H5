var manifest = [{
  src: "static/images/p0.png",
  id: "p0.png"
},
{
  src: "static/images/p1.png",
  id: "p1.png"
},
{
  src: "static/images/p2.png",
  id: "p2.png"
},
{
  src: "static/images/p3.png",
  id: "p3.png"
},
{
  src: "static/images/p4.png",
  id: "p4.png"
},
{
  src: "static/images/dot.png",
  id: "dot.png"
},
{
  src: "static/images/p1.png",
  id: "p1.png"
},
{
  src: "static/images/p2.png",
  id: "p2.png"
},
{
  src: "static/images/p3.png",
  id: "p3.png"
},
{
  src: "static/images/p4.png",
  id: "p4.png"
},
{
  src: "static/images/p5.png",
  id: "p5.png"
},
{
  src: "static/images/p6.png",
  id: "p6.png"
},
{
  src: "static/images/bg01.png",
  id: "bg01.png"
},
{
  src: "static/images/bg02.png",
  id: "bg02.png"
},
{
  src: "static/images/bg03.png",
  id: "bg03.png"
},
{
  src: "static/images/bg04.png",
  id: "bg04.png"
},
{
  src: "static/images/bg05.png",
  id: "bg05.png"
}
];
var preload = new createjs.LoadQueue();
preload.loadManifest(manifest);
preload.on('fileload', handleFileload);
preload.on('progress', handleProgress);
preload.on('complete', handComplete);
function handleFileload(event) {
}
function handleProgress(event) {
  document.getElementById("load-num").innerHTML = parseInt(preload.progress * 100) + "%";
  document.getElementById("loadings").style.width = preload.progress * 100 + "%";
}
function handHidden(o, i, s) {
  t = setInterval(function () {
    i += s;
    o.style.opacity = i;
    if (i < 0) {
      window.clearInterval(t)
      o.remove();
      document.getElementById("app").style.display = "block";
      document.getElementById("music").style.display = "block";
    }
    ;
  }, 5);
};
function handComplete() {
  var music = document.getElementById("music");
  var home = document.getElementById("home");
  var audio = document.getElementById('music1');
  handHidden(document.getElementById("loading"), 1, -0.01);
  //music.style.display = "block";
  var audio = document.createElement('audio')  //生成一个audio元素
  //audio.controls = true  //这样控件才能显示出来
  audio.src = "static/music.mp3"; // autoplay="autoplay" loop="loop"  //音乐的路径
  audio.autoplay = true;
  audio.loop = true;
  audio.id = "music1";
  document.body.appendChild(audio)  //把它添加到页面中
  //music.insertBefore(audio,null); 
  wxajax();
  addEvent(music,"click", function () {
    event.stopPropagation();
    bf();
  });
  addEvent(home,"click", function () {
    event.stopPropagation();
    console.log("xxxx");
    if (audio.paused) {
      audio.play();// 这个就是播放
      if (!hasClass(music, "music"))
        addClass(music, "musicplay");
    }
  });

}

function addEvent(elem, event, fn) {
  if (elem.addEventListener) {
    elem.addEventListener(event, fn, false);
  } else if (elem.attachEvent) {
    elem.attachEvent('on' + event, fn);
  } else {
    elem['on' + event] = fn;
  }
}
function addClass(obj, cls) {
  var obj_class = obj.className,//获取 class 内容.
    blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}
function removeClass(obj, cls) {
  var obj_class = ' ' + obj.className + ' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
    removed = obj_class.replace(' ' + cls + ' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}
function hasClass(obj, cls) {
  var obj_class = obj.className,//获取 class 内容.
    obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
  x = 0;
  for (x in obj_class_lst) {
    if (obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
      return true;
    }
  }
  return false;
}

function bf() {
  var audio = document.getElementById('music1');
  var music = document.getElementById("music");
  if (audio !== null) {
    //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
    console.log(audio.paused);
    if (audio.paused) {
      audio.play();//audio.play();// 这个就是播放  
      addClass(music, "musicplay")
    } else {
      audio.pause();// 这个就是暂停
      removeClass(music, "musicplay")
    }
  }
}
