var tl = gsap.timeline()

tl.to(".vdo",{
    '--clip': "0%",
    scrollTrigger:{
        trigger:".home",
        scroller:"body",
        scrub:1,
        start:"top top",
        end:"bottom bottom",

    }
},'anime')
tl.from(".bada",{
    scale:15,
    scrollTrigger:{
        trigger:".home",
        scroller:"body",
        scrub:1,
        start:"top top",
        end:"bottom bottom",
        ease:Power4,
    }
},'anime')
tl.to(".slides",{
    x:"-=195%",
    scrollTrigger:{
        trigger:".slides",
        scroller:"body",
        start:"top top",
        end:"top -300%",
        scrub:true,
    }
})
