var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var currentColor = '#000000';
//ボタンをidから定義
var clear = document.getElementById('clear');
var redbutton = document.getElementById('red');
var bluebutton = document.getElementById('blue');
var blackbutton = document.getElementById('black');
var eraserBtn = document.querySelector('#eraser-button');


//マウスをクリックしたかどうか判定のため
var state = false;

//キャンバスのサイズ
canvas.width = window.innerWidth-2;
canvas.height = window.innerHeight-7;
//ラインの太さ, 種類
ctx.lineWidth = 5;
ctx.lineCap = 'round';
//functionとイベントのつなぎ合わせ
canvas.addEventListener('mousemove',mouseMove);
canvas.addEventListener('mousedown',mouseDown);
canvas.addEventListener('mouseup',mouseUp);


　　　　　　　　　　　　　　　　//buttonの処理
//消しゴム
eraserBtn.addEventListener('click', () =>{currentColor="#aaa";
ctx.lineWidth = 30;});
//クリアを押した時の処理
clear.addEventListener('click',clearBtn);
// redボタン押した時
redbutton.addEventListener('click',redBtn);
    function redBtn(){
      currentColor = 'red';
      ctx.lineWidth = 5;
    }
//blueボタン押した時
bluebutton.addEventListener('click',blueBtn);
  function blueBtn(){
    currentColor = 'blue';
    ctx.lineWidth = 5;
  }
//blackボタン押した時
blackbutton.addEventListener('click',blackBtn);
  function blackBtn(){
    currentColor = '#000000';
    ctx.lineWidth = 5;
  }


function clearBtn(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

//マウスをクリックした時の処理
function mouseDown(e){
  //クリックした時の座標をmousexとmouseyと定義する
  mousex = e.clientX;
  mousey = e.clientY;
  state = true;
}

function mouseUp(){
  state = false;
}

//マウスを動かした時の処理
function mouseMove(e){
   //クリックしてないときはstateがfalseと出る →　そしたらreturnなのでmouseMove内の処理は行われない
  if(!state){return;}

      ctx.strokeStyle = currentColor;
      ctx.beginPath();
      //マウスのクリックしたところから線を描くという処理
      ctx.moveTo(mousex,mousey);
      ctx.lineTo(e.clientX,e.clientY);
      ctx.stroke();

      //現在のラインe.clientX,Yの場所を知らせるためのコード
      //描くにつれてe.clientの位置は変わるからそれを伝える
      mousex = e.clientX;
      mousey = e.clientY;
}
