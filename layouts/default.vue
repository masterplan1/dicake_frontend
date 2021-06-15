<template>
  <div>
    <div id="wrap">
      <Header />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
	head(){
		return {
			link: [
				// { rel: 'canonical', href: `http://localhost:3000${this.$route.path}`}
				{ rel: 'canonical', href: process.env.BASE_URL + this.$route.path}
			]
		}
	},
	// mounted(){
	// 	console.log(this.$nuxt.context.env.selfUrl)
	// }
}
</script>

<style>
  #wrap{
    min-height: calc(100vh - 170px);
  }

  /* image zooming styles start */
.products__card-zoom {
/*	margin:30px;*/
	cursor:pointer;
}

.popup {
  z-index: 100;
	position: absolute;
	height:100%;
	width:100%;
	top:0;
	left:0;
	text-align:center;
}

.popup_hide{
  display: none;
}

.popup_bg {
	background:rgba(0, 0, 0, 0.8);
	position:fixed;
	z-index:1;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: auto;
  height: auto;
}


.popup_img {
	position: fixed;
	z-index:6;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	max-height: 90%;
}

.popup_img {
  pointer-events: none;
}

/* image zooming styles end */

</style>
