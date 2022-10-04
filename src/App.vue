<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style>

/* .slider .logoJudul {
  position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
.navjudul {
  font-family: Georgia;
  font-size:15px;
  font-weight:300;
}
.titisari {
  font-family: Georgia;
  position: absolute;
  top: 41%;
  left: 50%;
 
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 700;
  font-size: 50px;
}
.cakecatering{
  /* margin-top: -215px; */
  font-family: Georgia;
  font-weight: 400;
  position: absolute;
  color: white;

  top:48%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 35px;
}
.realcooking {
  /* margin-top: -350px; */
  font-family: Georgia;
  position: absolute;
  color: white;

  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 300;
  font-size: 20px;
}

.about h1{
  font-family: Georgia;
  font-weight: 300;
  font-size: 30px;
  left: 40%;
  text-align: center;
}

.about .about1{
  font-family: Georgia;
  font-weight: 200;
  font-size: 15px;
  left: 40%;
  text-align: center;
}

.about .about2{
  font-family: Georgia;
  font-weight: 200;
  font-size: 15px;
  left: 40%;
  text-align: center;
}

.FooterfontCopyright{
  font-family: poppins;
  font-weight: 300;
  font-size: 15px;
  color: white;
  text-align: center;
}

.findus{
  font-family: Georgia;
  font-weight: 400;
  font-size:30px;
  color: black;

}
</style>