var homeContent = `<header class="header"></header>
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
var aboutContent = ` <div class="content3">
<div>
  <img class="headshot" src="images/headshot1.png" alt="" />
</div>
<div class="vl"></div>
<div class="about">
  <h1>HI, I AM EMMA!</h1>
  <p class="content3p">
    Fashion design is an outlet I use to express myself. This is a place
    where I can organize all of my outfit and clothes I have designed. A
    space where "Organization meets creativity". Follow along to
    recreate my looks and level up your closet.
  </p>
</div>
</div>`;
var shopContent = `<div class="content4">
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
</div>

<div class="body">
<div class="redtext">
  <img src="images/neutralWord.png" alt="" />
</div>
<div>
  <img class="allred" src="images/neutralOutfit.jpg" alt="" />
</div>
</div>
<div class="ptagdiv">
<p class="ptag">SHOP A SIMILAR LOOK BELOW</p>
</div>
<div class="body2">
<a href="https://pin.it/5vZWYNO"
  ><img class="picture1" src="images/fuzzyBucket.jpg" alt=""
/></a>
<a href="https://www.vagabond.com/us/cosmo-2-0-5349-501-20/"
  ><img class="picture1" src="images/vengabond.jpg" alt=""
/></a>
<a href="https://pin.it/79p3A37"
  ><img class="picture1" src="images/whiteShirt.jpg" alt=""
/></a>
<a
  href="https://www.ralphlauren.com/women-clothing-pants/pleated-wool-twill-high-rise-pant/0044659712.html?utm_source=PerfSocial&utm_medium=All_Pinterest_Dynamic_258894759_123593053&pp=0&epik=dj0yJnU9VVBWVm5CcHZFenJuMkhhUWl4SGJYS2pibkM0b0J1V3AmcD0xJm49SEtvakN0UkJFV1Jhb0FJdGQ2SWRzUSZ0PUFBQUFBR0pWRDFB&dclid=CKWIusfmjfcCFQeDswodmZwK4A"
  ><img src="images/greyPants.jpg" alt="" class="picture1"
/></a>
</div>`;
var contactContent = ` <div class="contact">
<h3>LET'S CONNECT!</h3>
<!-- contact boxes -->
<div class="boxesalign">
  <div class="label">
    <p>name:</p>
    <div class="box"></div>
  </div>
  <div class="label">
    <p>email:</p>
    <div class="box"></div>
  </div>
  <div class="label">
    <p>number:</p>
    <div class="box"></div>
  </div>

  <div>
    <div class="submit">
      <div class="h4">submit</div>
    </div>
  </div>
</div>
</div>`;


export function modelPageName (pgName){
    // console.log(pgName);

    $("#app").html(eval(pgName));
}