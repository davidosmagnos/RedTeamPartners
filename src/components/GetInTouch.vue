<template>
    <Header/>
    <div class="langdingPage-getintouch">
        <div class="textContent">
            <div class="texts-wrapper">
                <div class="title">
                    <span>Get in <span class="redText">Touch</span></span>
                </div>
                <div class="subtext">
                    <span>We're here to help</span>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-details">
        <div class="grayBg"></div>
        <div class="details">
            <pre>
                <span class="redText bold">United Kingdom</span>
                Kemp House, 152 – 160 City Road, London EC1V 2NX

                <span class="redText bold">Let’s Talk</span>
                0203 951 0299

                <span class="redText bold">Contact the Office</span>
                info@redteampartners.co.uk

                <span class="redText bold">Visit Us</span>
                N 51 31′ 12.713″
                W 0 4′ 14.408″
            </pre>
            <pre>
                <span class="redText bold">Singapore</span>
                229 Mountbatten Road, 
                #03-38, Mountbatten Square, 
                Singapore 398007
            </pre>
            <pre>
                <span class="redText bold">Canada</span>
                1204 Boulevard Bastien Suite #102 G2K 1K2, 
                Quebec, QC, Can
            </pre>
        </div>
    </div>
    <div class="getintouch">
        <div class="getintouch-form">
            <form action="" class="contact">
                <div class="contact-left">
                    <h1>GET IN TOUCH</h1>
                    <img src="./../assets/bubbles1.png" alt="" class="circles">
                </div>

                <div class="contact-right">
                    <input type="text" class="fullname field" name="fullname" placeholder="Name">
                    <input type="email" name="email" class="email field" placeholder="Email">
                    <input type="text" class="service field" name="service" placeholder="Service">
                    <textarea name="message" class="message field" placeholder="Message"></textarea>
                    <button type='submit' class="buttonSubmit">Submit</button>
                </div>
            </form>
        </div>
    </div>
    <PartnerSlide/>
    <Footer/>
</template>
<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import PartnerSlide from "./PartnerSlide.vue";
    export default{
        name:"GetInTouch-page",
        components:{
            Header,
            Footer,
            PartnerSlide,
        }
    }
</script>
<style scoped src="./../assets/css/getintouch.css">
</style>