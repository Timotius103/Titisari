<template>
  <v-app id="inspire">
    <v-app-bar app white flat>
      <!-- <img src="~@/assets/logo.png" style="width: auto; height: 40px" /> -->
      <h1 href="#home" class="navjudul">Titisari Catering</h1>
      <v-tabs right class="ml-n9" color="red lighten-1">
        <v-tab v-for="link in links" :key="link" class="black--text">
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="lighten-3">
      <v-carousel
        height="600"
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item class="slider" v-for="slide in slides" :key="slide">
          <img
            :src="slide.image == '' ? '' : slide.image"
          />
          <!-- <img class="logoJudul" src="~@/assets/logo.png" style="width: auto; height: 70px" /> -->
          <h1 class="titisari">{{ slide.tulisan1 }}</h1>
          <h1 class="cakecatering">{{ slide.tulisan2 }}</h1>
          <p class="realcooking">{{ slide.tulisan3 }}</p>
        </v-carousel-item>
      </v-carousel>
      <v-container>
        <!-- <v-row>
          <v-col cols="4">
            <v-row
              class="Pengantar fill-height"
              align="center"
              justify="left"
              style="margin-top: 25px"
            >
              <h1>Titisari</h1>
              <h1 class="cakecatering">Cake & Catering</h1>
              <p>The Real Cooking, Delicious Taste</p>
            </v-row> -->
        <!-- <div class="slider">
              <div class="slide">
                <img
                  src="https://source.unsplash.com/random?landscape,night"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://source.unsplash.com/random?landscape,cars"
                  alt=""
                />
              </div>
              <button class="btn btn-next" @click="nextside()"></button>
              <button class="btn btn-prev" @click="prevside()"></button>
            </div> -->
        <!-- </v-col>
          <v-col>
            <v-carousel
              height="400"
              hide-delimiter-background
              hide-delimiters
              show-arrows-on-hover
              style="border-radius: 8px"
            >
              <v-carousel-item
                class="slider"
                v-for="slide in slides"
                :key="slide"
              >
                <img :src="slide.image" />
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row> -->
      </v-container>
      <v-container>
        <v-row>
          <v-col class="about">
            <h1>Titisari Catring</h1>
            <p class="about1">Sejak Tahun 2021</p>
            <p class="about2">
              Kami hadir untuk memenuhi kebutuhan jasa boga anda. <br />
              Titisari Cake and Catering melayani pengadaan makanan dan minuman
              untuk instansi-instansi <br />
              pemerintah maupun swasta. Selain itu, kami juga melayani kebutuhan
              jasa boga untuk event-event tertentu. <br />
              Kami melakukan pengawasan yang ketat untuk setiap proses
              produksinya, sehingga produk yang kami hasilkan akan sangat
              terjaga kualitasnya.<br />
              Pastikan plihan anda bersama kami, Titisari Cake and Catering.
            </p>
          </v-col>
        </v-row>
        <v-row no-gutters style="margin-top:20px">
          <v-col
            no-gutters
            cols="4"
            v-for="about in aboutus"
            :key="about.title"
          >
            <v-hover v-slot="{ hover }" close-delay="200">
              <v-card
                class="cardProgress"
                height="200"
                width="400"
                @click="overlayfunct(about.id)"
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="about.image" style="width: auto; height: 100%">
                </v-img>
              </v-card>
            </v-hover>

            <v-overlay
              :value="overlay"
              v-for="overlayarray in arrayOverlay"
              :key="overlayarray.id"
            >
              <v-card
                class="cardProgress align-center white--text"
                color="teal"
                @click="overlayfunctdrop()"
              >
                <v-img :src="overlayarray" style="width: 100%; height: 100%">
                </v-img>
              </v-card>
            </v-overlay>
          </v-col>
        </v-row>
        <!-- <v-row>
          <img src="~@/assets/aboutUS.jpg" style="width: auto; height: 300px" />
        </v-row> -->
      </v-container>
      <!-- <div class="sliderku">
        <div class="slide">
          <img
            src="https://source.unsplash.com/random?landscape,night"
            alt=""
          />
        </div>
        <div class="slide">
          <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
        </div>
        <div class="slide">
          <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
        </div>
        <div class="slide">
          <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
        </div>
        <button class="btn btn-next" @click="nextside()"></button>
        <button class="btn btn-prev" @click="prevside()"></button>
      </div> -->
      <v-container>
        <v-row style="margin-top: 100px">
          <v-col cols="3">
            <h1 class="findus">Our Menu</h1>
            <v-sheet rounded="lg" class="grey lighten-3">
              <v-treeview
                v-model="selection"
                :items="items"
                :selection-type="selectionType"
                selectable
                return-object
                open-all
              ></v-treeview>
            </v-sheet>
          </v-col>
          <v-col>
            <!-- <v-sheet min-height="50"> </v-sheet> -->
            <!-- <v-sheet min-height="480"> -->
            <v-row
              min-height="500"
              style="margin-top: 2px; margin-left: 20px; margin-right: 20px"
            >
              <v-col
                class="produk"
                v-for="n in box18"
                :key="n"
                cols="12"
                md="4"
              >
                <v-card height="200" flat>
                  <img :src="n.image" />
                </v-card>
              </v-col>
            </v-row>
            <!-- </v-sheet> -->
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-row align="left" justify="left">
              <h1 class="findus">Find Us</h1>
            </v-row>
            <v-row>
              <iframe
                width="100%"
                height="350px"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?q=85J8+5FX,%20jetis,%20Ngroto,%20Gerbosari,%20Kec.%20Samigaluh,%20Kabupaten%20Kulon%20Progo,%20Daerah%20Istimewa%20Yogyakarta%2055673&t=&z=18&ie=UTF8&iwloc=&output=embed"
              >
              </iframe>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-footer dark padless style="margin-top: 15px">
        <v-card
          flat
          tile
          class="dark lighten-1 white--text text-center"
          width="100%"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-1 white--text"
              icon
            >
              <v-icon size="20px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text class="white--text">
            <p class="FooterfontCopyright" style="margin-top: -25px">
              Copyright &copy; 2022 All rights reserved | This website made
              <i class="fa fa-heart-o" arial-hidden="true"></i> by
              <a
                href="https://www.linkedin.com/in/timotius-wijayanta-2b208a1a0"
                style="text-decoration: none; color: white"
                >Timotius Wijayanta</a
              >
            </p>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      links: ["Home", "Menu", "Find Us"],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      icons: ["mdi-facebook", "mdi-whatsapp", "mdi-instagram", "mdi-gmail"],
      selection: [],
      items: [
        {
          id: 1,
          name: "Catering",
          children: [
            { id: 2, name: "Box 18 x 18" },
            { id: 3, name: "Box 20 x 20" },
          ],
        },
        {
          id: 4,
          name: "Cake",
        },
      ],
      slides: [
        {
          // image:
          //   "https://images.unsplash.com/photo-1571050045617-cbbd5e68d181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
          image: require("../assets/carousels/foto1.jpg"),
          tulisan1: "Titisari",
          tulisan2: "Cake & Catering",
          tulisan3: "The Real Cooking, Delicious Taste",
        },
        // {
        //   image: require("../assets/carousels/test.jpeg"),
        // },
      ],
      arrayOverlay: [],
      overlay: false,

      aboutus: [
        {
          id: 1,
          title: "progress 1",
          image: require("../assets/aboutUS.jpg"),
        },
        {
          id: 2,
          title: "progress 2",
          image: require("../assets/aboutUS2.jpeg"),
        },
        {
          id: 3,
          title: "progress 3",
          image: require("../assets/aboutUS3.jpeg"),
        },
      ],
      box18: [
        {
          image: require("../assets/box18x18/1.jpg"),
        },
        {
          image: require("../assets/box18x18/2.jpg"),
        },
        {
          image: require("../assets/box18x18/3.jpg"),
        },
        {
          image: require("../assets/box18x18/4.jpg"),
        },
        {
          image: require("../assets/box18x18/5.jpg"),
        },
        {
          image: require("../assets/box18x18/6.jpg"),
        },
      ],
      //////////////////////////// carousels buatan ///////////////////////////////////////
      // slidesku: [],
      // maxslide: 0,
      // curSlide: 0,
      // allslidesku: [
      //   {
      //     // image: require("https://source.unsplash.com/random?landscape,mountain"),
      //     image: "https://source.unsplash.com/random?landscape,mountain",
      //   },
      //   {
      //     image: "https://source.unsplash.com/random?landscape,night",
      //   },
      //   {
      //     image: "https://source.unsplash.com/random?landscape,city",
      //   },
      // ],
      /////////////////////////////////////////////////////////////////////////////

    };
  },
  mounted() {
    this.allslides();
  },
  methods: {
    overlayfunct(id) {
      for (var i = 0; i < this.aboutus.length; i++) {
        if (id === this.aboutus[i].id) {
          this.overlay = true;
          this.arrayOverlay.push(this.aboutus[i].image);
        }
      }
    },

    overlayfunctdrop() {
      this.overlay = false;
      if (this.overlay === false) {
        this.arrayOverlay.splice(0, this.arrayOverlay.length);
      }
    },
    /////////////////////// ini carousels buatan ///////////////////////
    // allslides() {
    //   this.slidesku = document.querySelectorAll(".slide");
    //   this.slidesku.forEach((slide, indx) => {
    //     slide.style.transform = `translateX(${indx * 100}%)`;
    //   });
    //   console.log(this.slides);
    // },
    // nextside() {
    //   this.maxSlide = this.slidesku.length - 1;
    //   if (this.curSlide === this.maxSlide) {
    //     this.curSlide = 0;
    //   } else {
    //     this.curSlide++;
    //   }
    //   this.slidesku.forEach((slide, indx) => {
    //     slide.style.transform = `translateX(${100 * (indx - this.curSlide)}%)`;
    //   });
    // },
    // prevside() {
    //   if (this.curSlide === 0) {
    //     this.curSlide = this.maxSlide;
    //   } else {
    //     this.curSlide = this.curSlide - 1;
    //   }
    //   this.slidesku.forEach((slide, indx) => {
    //     slide.style.transform = `translateX(${100 * (indx - this.curSlide)}%)`;
    //   });
    // },
    /////////////////////// ini carousels buatan ///////////////////////
  },
};
</script>
<style scoped>
.slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 8px; */
  position: relative;
}

.produk img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 8px; */
  position: relative;
}
/* ////////////// INI CAROUSELS BUATAN /////////////////////// */
/* body {
  height: 100vh;
  display: grid;
  place-items: center;
}

.sliderku {
  width: 100%;
  max-width: 800px;
  height: 350px;
  position: absolute;
  overflow: hidden;
}
.slide {
  width: 100%;
  max-width: 800px;
  height: 350px;
  position: absolute;
  transition: all 0.5s;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn {
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  z-index: 10px;
  cursor: pointer;
  background-color: #fff;
  font-size: 18px;
}

.btn:active {
  transform: scale(1.1);
}

.btn-prev {
  top: 45%;
  left: 2%;
}

.btn-next {
  top: 45%;
  right: 2%;
} */
/* /////////////////////////////////////////////////////////////////// */
</style>