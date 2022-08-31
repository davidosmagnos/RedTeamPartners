<template>
<div class="outLine">
    <div class="slide-cont">
        <span class="slide-text">Trusted by 3500 small businesses and partnered with world leading organisations</span>
        <Splide :has-track="false" aria-label="Partners" :options="options" @splide:pagination:mounted="onPageMount">
            <div class="track-wrapper">
                <SplideTrack>
                <SplideSlide>
                    <img src="./../assets/partners/oscp.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/CiscoCCTTechnician.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/CiscoCCNA.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/ECIH.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/EC-Council-Ethical-Hacking.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/CISM.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/GXPN.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/GWAPT.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/ISTQB.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/AZ900.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/giac_advisory_board-badge.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/cptc-badgeAsset-36.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/Gcp.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/ccsp.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/CISSP.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/crest-logo.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/NACA.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/AWAE-OSWE-badge.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/Fortinet.png" alt="">
                </SplideSlide>
                <SplideSlide>
                    <img src="./../assets/partners/CompTIA_PenTest.png" alt="">
                </SplideSlide>
                </SplideTrack>
            </div>
            <button class="splide__toggle hide-button" type="button">
                <span class="splide__toggle__play">Play</span>
                <span class="splide__toggle__pause">Pause</span>
            </button>
            <ul class="splide__pagination pagination-custom"></ul>

        </Splide>
    </div>
</div>
</template>

<script>

import {Splide,SplideSlide,SplideTrack} from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css/sea-green';


export default{
    name:"PartnerSlide",
    components:{
        Splide,
        SplideSlide,
        SplideTrack
    },
    setup(){
        const options = {
            gap:"1rem",
            perPage:4,
            type:"loop",
            autoplay:"true",
            arrows:false,
            interval:1000,
            classes:{
                pagination:'splide__pagination pagination-custom',
                // page      : 'splide__pagination__page your-class-page',
            },
            height:"12vw"
        }


    return {options}
    },
    methods:{
        onPageMount(data,item){
            item.items.forEach(i=>{
                i.button.classList.add("your-class-page")
            })
            
        }
    }
   
    
    
}

</script>


<style>

.slide-cont{
    width: 75vw;
    margin: auto; 
    padding: 2vw 0px;

    /* background-color: rgba(0, 0, 0, 0.35); */
}
.track-wrapper{
    position: relative;
}
.outLine{
    border-top: 1px solid #4a494a3a;    
    border-bottom: 1px solid #4a494a3a; 
    width:90vw;
    margin:auto;
}


.hide-button{
    display: none;
}

.your-class-page{
    background:#ccc;
    width:60px;
    margin: 0px 10px;
}
.your-class-page:hover{
    background:#ff95a8;
}

.your-class-page.is-active{
    background: #D41539;
}

.your-class-page.is-active:hover{
    background: #f55f7a;
}
.slide-text{
    display: block;
    font-weight: 500;
    text-align: center;
}
</style>