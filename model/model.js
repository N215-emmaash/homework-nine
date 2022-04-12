var homeContent = `    <header class="header"></header>
<div class="content">
  <div class="left">
    <div>
      <img class="picture" src="images/bootsclear.png" alt="boots" />
    </div>
  </div>
  <div class="right">
    <div>
      <img id="home" class="logo1" src="images/clo-set.png" alt="" />
    </div>
  </div>
</div>
<div class="content2">
  <div class="bleft"></div>
  <div class="bright">
    <img src="images/2.png" alt="" />
  </div>
</div>`;
var aboutContent = `<div class="content3">
<div>
  <img class="headshot" src="images/head.png" alt="" />
</div>
<div class="vl"></div>
<div class="about">
  <h1>HI, I AM EMMA!</h1>
  <p class="content3p">
    FASHION DESIGN IS AN OUTLET I USE TO EXPRESS MYSELF. THIS IS A PLACE
    WHERE I CAN ORGANIZE ALL MY OUTFITS AND CLOTHES I HAVE DESIGNED. A
    PLACE WHERE "ORGANIZATION MEETS CREATIVITY" FOLLOW ALONG FOR TIPS
    AND INSPIRATION TO LEVEL UP YOUR CLOSET.
  </p>
</div>
</div>`;
var shopContent = ` <div class="header1">
<p>OUTFIT IDEAS TO WEAR ON VALENTINE'S DAY</p>
</div>

<div class="content4">
<div class="right">
  <img src="images/standingroses.jpg" alt="" />
  <img src="images/natRose.jpg" alt="" />
  <img src="images/nat.jpg" alt="" />
</div>
</div>
<div class="body">
<div>
  <img class="allred" src="images/allred2.jpg" alt="" />
</div>
<div class="redtext">
  <img src="images/monocrome.png" alt="" />
</div>
</div>
<div class="ptagdiv">
<p class="ptag">SHOP A SIMILAR LOOK BELOW</p>
</div>
<div class="body2">
<a href="https://pin.it/5a7U3Ns"
  ><img class="picture1" src="images/redsweater.jpg" alt=""
/></a>
<a
  href="https://www.missguidedus.com/tall-red-tailored-wide-leg-pleated-trousers-10274995?istCompanyId=6f000e44-d468-46b6-b05b-e9e08130e2eb&istFeedId=bb042319-c37d-44d3-b420-74f752055777&istItemId=priwmpmrm&istBid=xztt&gclid=EAIaIQobChMI5_bmn93d9QIVdwaICR0EtQgMEAQYAiABEgJO5PD_BwE&gclsrc=aw.ds"
  ><img class="picture1" src="images/redpants.png" alt=""
/></a>
<a href="https://pin.it/JWk0zJA"
  ><img class="picture1" src="images/heartring.jpg" alt=""
/></a>
<a href="https://pin.it/6JlJyEF"
  ><img src="images/rednikes.png" alt="" class="picture1"
/></a>
</div>`;
var contactContent = `<h1>CONTACT</h1>`;


export function modelPageName (pgName){
    // console.log(pgName);

    $("#app").html(eval(pgName));
}