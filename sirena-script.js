document.addEventListener("DOMContentLoaded", function () {
  const customPopup = document.getElementById('customPopup');
  const gifContainer = document.getElementById("gifContainer");
  const popup = document.getElementById("popup");
  const iframe = document.getElementById("iframe");
  let r = null;

    const imageList = [
      {
        url: "https://antiparti.cl/img/Sirena/aonoo.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Liminal_Senses_by_FC_Zuke&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/apoppy.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Mirrors_by_Phatty&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/baby-octo0.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Yeu_Kieu_by_Tien_Nguyen_Minh&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/blob.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-FORCED-MIGRATION_by_Aleksei_Martyniuk&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/cleamm.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Walking_With_The_Waves_by_Taiki_Arita&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/crusty.gif",
        contentUrl: "https://archive.org/embed/SIRENA-METANOIA_by_Nina_Sumarac&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/daddo.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Nation_Free_by_The_Mainstream_Official&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/fishyy.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Serpenti_e_Scale_by_Giuseppe_de_Benedittis&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/grace.gif",
        contentUrl: "https://archive.org/embed/SIRENA-JVPURETIBET_by_Davel&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/hungryy.gif",
        contentUrl: "https://archive.org/embed/SIRENA_by_IDKLANG&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/iliketurtle.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Metamorphosis_Kintsugi_by_Athina_Kanellopoulou&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/insecticon.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-300_curves_by_Martina_Noskova&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/Lea.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Madena_by_Magdi_Mostafa&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/morphishy.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Drinkable_by_Flounder_Lee&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/noisibaddo.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Coal_2diamond_by_Deatxwish&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/pompy-blob.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Ruido_Rosa_by_Oksana_Rudko&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/pulpi.gif",
        contentUrl: "https://archive.org/embed/SIRENA-HEXMODULAR_by_Davel&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/Qorky.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Suicide_Note_0.1_by_Contaminated_Carcass&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/shifishu.gif",
        contentUrl: "https://archive.org/embed/SIRENA-I_Dunno_by_Deatxwish&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/spiny-puppy.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Lifelike_by_Ioana_and_Pablo&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/tardy.gif",
        contentUrl: "https://archive.org/embed/SIRENA-PHASE_by_Davel&autoplay=1",
      },    
      {
        url: "https://antiparti.cl/img/Sirena/bunbun.gif",
        contentUrl: "https://archive.org/embed/SIRENA-2020.7.5_by_Hiroshi_Murakami&autoplay=1",
      },    
      {
        url: "https://antiparti.cl/img/Sirena/bunbunny.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Equestrian_Teardrop_Power_by_Deatxwish&autoplay=1",
      }, 
      {
        url: "https://antiparti.cl/img/Sirena/vluup.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Kinga_Toth_by_Blanche_The_Vidiot&autoplay=1",
      },  
      {
        url: "https://antiparti.cl/img/Sirena/uffump.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Waterworks_by_Flounder_Lee&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/billu.gif",
        contentUrl: "https://player.vimeo.com/video/264030358?h=d1e719d2c6&autoplay=1&color=c9ff23&title=0&byline=0",
      },
      {
        url: "https://antiparti.cl/img/Sirena/waeh.gif",
        contentUrl: "https://www.spatial.io/s/Zhi-Zhi-64d00e484d4710ef26ea9be2?share=2898129440994129247",
      },
      {
        url: "https://antiparti.cl/img/Sirena/anii.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Bystander_by_Liu_Chang&autoplay=1",
      },
      {
        url: "https://antiparti.cl/img/Sirena/aisha.gif",
        contentUrl: "https://archive.org/embed/SIRENA_Rusalka_SONIC_ALLURE_by_Ania_Urbanski&autoplay=1",
      },
    ];

    function showCustomPopup() {
      customPopup.style.display = 'block';
      setTimeout(hideCustomPopup, 15000);  // Hide after 15 seconds
  }

  function hideCustomPopup() {
    customPopup.style.display = 'none';
}

showCustomPopup();
window.addEventListener('click', function (event) {
  if (event.target === customPopup) {
      hideCustomPopup();
  }
});
});

    function lazyLoadImage(image) {
      const img = new Image();
      img.src = image.url;
      img.className = "gif";
      img.style.position = "absolute";
      img.style.left = `${20 * Math.floor(5 * Math.random())}%`;
      img.style.top = `${20 * Math.floor(5 * Math.random())}%`;

      img.addEventListener("click", () => {
          openPopup(image.contentUrl);
      });

      gifContainer.appendChild(img);

      // Set up lazy loading for the image
      img.loading = "lazy";

      return img;
  }

  function migrateImage(img) {
      setInterval(() => {
          let left = parseFloat(img.style.left);
          let top = parseFloat(img.style.top);
          const targetLeft = 20 * Math.floor(5 * Math.random());
          const targetTop = 20 * Math.floor(5 * Math.random());

          function animate() {
              left += (targetLeft - left) / 100;
              top += (targetTop - top) / 90;
              img.style.left = `${left}%`;
              img.style.top = `${top}%`;
              if (Math.abs(left - targetLeft) > 0.1 || Math.abs(top - targetTop) > 0.1) {
                  requestAnimationFrame(animate);
              }
          }

          animate();
      }, 5000 + Math.random() * 3000); // Randomize migration interval between 5 and 8 seconds
  }

  function openPopup(contentUrl) {
      if (r) r.pause();
      const windowWidth = 0.8 * window.innerWidth;
      const windowHeight = 0.8 * window.innerHeight;
      iframe.src = contentUrl;
      iframe.style.width = `${windowWidth}px`;
      iframe.style.height = `${windowHeight}px`;
      popup.style.display = "flex";
      clearInterval(currentGifReset);
      currentGifReset = setTimeout(() => {
          // Pause or unload the iframe content
          iframe.src = "about:blank"; // This will unload the content
          r = null;
      }, 1000);
  }

  // Event delegation for image clicks and closing iframe
  document.addEventListener("click", function (event) {
      const target = event.target;

      if (target.tagName === "IMG") {
          const index = Array.from(gifContainer.children).indexOf(target);
          if (index !== -1) {
              openPopup(imageList[index].contentUrl);
          }
      } else if (target === popup || (target.tagName !== "IFRAME" && !target.closest("#iframe"))) {
          // Clicking outside the iframe closes it
          popup.style.display = "none";
          iframe.src = "about:blank"; // Unload the content
          r = null;
      }
  });

  // Preload images (using lazy loading) and initiate migration
  imageList.map(lazyLoadImage).forEach(migrateImage);
});