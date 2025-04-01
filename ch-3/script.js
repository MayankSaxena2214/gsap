let path=`M 10 100 Q 500 100 990 100`;
let finalPath=`M 10 100 Q 500 100 990 100`;
 
let string=document.querySelector("#string");

string.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`
    //now fit that into to the svg path using gsap
    gsap.to("svg path",{
        //to manipulate the attribute of an element
        //we need to use attr and then in the objec
        //use the key value pair . Key(attributte name)
        //value ( attribute value)
        attr:{d:path} ,
        duration:0.3,
        ease:"power3.out",
    });
});
// again to the center position
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath} ,
        duration:1.5,
        ease:"elastic.out(1,0.2)"
        
    });
})