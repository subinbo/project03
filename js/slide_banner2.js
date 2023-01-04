$(function(){ 
	var visual = $('#brandVisual>ul>li');
    var button = $('#buttonList>li');//동그라미버튼
    var leftBtn = $('.btnImg .prev');//왼쪽버튼
    var rightBtn = $('.btnImg .next');//왼쪽버튼
    var current = 0;
    var setIntervalId;
  
    timer(); //배너 슬라이드 호출

    function timer(){
        setIntervalId = setInterval(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev, 0, '-100%');
			pn.removeClass('on');

            current++;

            if(current == visual.size()){current=0}

            var next = visual.eq(current);
            var pnn = button.eq(current);
            move(next, '100%', 0);
            pnn.addClass('on');
            
        },3000);
    };

	function move(tg, start, end){
		tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'}); 
	}  
	

    var visual=$('#brandVisual>ul>li'); // 슬라이드 이미지
	var button=$('#buttonList>li');	 // 버튼
	var current=0 // 현재 보이는 이미지
	
	
	
	//버튼을 클릭 했을 때
	button.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		
		button.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('on'); // 선택한 버튼에 'on' 활성화
		
		move1(i); //버튼 클릭했을 때 해당 인덱스 배너 호출
		}
	});
	
	function move1(i){
		if(current == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current=i;
	} 
	    //호버시 멈추게 하는 기능
		$('#banner').on({
			mouseover:function(){
				clearInterval(setIntervalId); //setInterval해제
			}, mouseout:function(){
				timer(); //타이머함수 다시 호출
			}
		})
		
	});
	
	
	
	
	
	
	