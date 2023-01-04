$(function(){
    $("#header").hover(
        function(){

            $(this).children("ul").addClass("active");
            $("ul>li>ul").addClass("active")
        },
        function(){
            $(this).children("ul").removeClass("active");
            $("ul>li>ul").removeClass("active")
        }
    )
});