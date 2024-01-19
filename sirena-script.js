document.addEventListener("DOMContentLoaded", function () {
    const gifContainer = document.getElementById("gifContainer");
    const popup = document.getElementById("popup");
    const iframe = document.getElementById("iframe");
    let currentGifReset = null;
    let r = null; // Declare the 'r' variable

   
  
    const imageList = [
      {
        url: "https://antiparti.cl/img/Sirena/aonoo.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Liminal_Senses_by_FC_Zuke",
      },
      {
        url: "https://antiparti.cl/img/Sirena/apoppy.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Mirrors_by_Phatty",
      },
      {
        url: "https://antiparti.cl/img/Sirena/baby-octo0.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Yeu_Kieu_by_Tien_Nguyen_Minh",
      },
      {
        url: "https://antiparti.cl/img/Sirena/blob.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-FORCED-MIGRATION_by_Aleksei_Martyniuk",
      },
      {
        url: "https://antiparti.cl/img/Sirena/cleamm.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Walking_With_The_Waves_by_Taiki_Arita",
      },
      {
        url: "https://antiparti.cl/img/Sirena/crusty.gif",
        contentUrl: "https://archive.org/embed/SIRENA-METANOIA_by_Nina_Sumarac",
      },
      {
        url: "https://antiparti.cl/img/Sirena/daddo.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Nation_Free_by_The_Mainstream_Official",
      },
      {
        url: "https://antiparti.cl/img/Sirena/fishyy.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Serpenti_e_Scale_by_Giuseppe_de_Benedittis",
      },
      {
        url: "https://antiparti.cl/img/Sirena/grace.gif",
        contentUrl: "https://archive.org/embed/SIRENA-JVPURETIBET_by_Davel",
      },
      {
        url: "https://antiparti.cl/img/Sirena/hungryy.gif",
        contentUrl: "https://archive.org/embed/SIRENA_by_IDKLANG",
      },
      {
        url: "https://antiparti.cl/img/Sirena/iliketurtle.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Metamorphosis_Kintsugi_by_Athina_Kanellopoulou",
      },
      {
        url: "https://antiparti.cl/img/Sirena/insecticon.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-300_curves_by_Martina_Noskova",
      },
      {
        url: "https://antiparti.cl/img/Sirena/Lea.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Madena_by_Magdi_Mostafa",
      },
      {
        url: "https://antiparti.cl/img/Sirena/morphishy.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Drinkable_by_Flounder_Lee",
      },
      {
        url: "https://antiparti.cl/img/Sirena/noisibaddo.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Coal_2diamond_by_Deatxwish",
      },
      {
        url: "https://antiparti.cl/img/Sirena/octop.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Climate_Change_by_Kayoko_Nakamura",
      },
      {
        url: "https://antiparti.cl/img/Sirena/pompy-blob.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Ruido_Rosa_by_Oksana_Rudko",
      },
      {
        url: "https://antiparti.cl/img/Sirena/pulpi.gif",
        contentUrl: "https://archive.org/embed/SIRENA-HEXMODULAR_by_Davel",
      },
      {
        url: "https://antiparti.cl/img/Sirena/Qorky.gif",
        contentUrl: "https://archive.org/embed/SIRENA-Suicide_Note_0.1_by_Contaminated_Carcass",
      },
      {
        url: "https://antiparti.cl/img/Sirena/shifishu.gif",
        contentUrl: "https://archive.org/embed/SIRENA-I_Dunno_by_Deatxwish",
      },
      {
        url: "https://antiparti.cl/img/Sirena/Sophi.gif",
        contentUrl: "https://archive.org/embed/SIRENA-JVPURETIBET_by_Davel",
      },
      {
        url: "https://antiparti.cl/img/Sirena/spiny-puppy.gif",
        contentUrl:
          "https://archive.org/embed/SIRENA-Lifelike_by_Ioana_and_Pablo",
      },
      {
        url: "https://antiparti.cl/img/Sirena/tardy.gif",
        contentUrl: "https://archive.org/embed/SIRENA-PHASE_by_Davel",
      },    
    ];
  
    function preloadImages(images) {
        images.forEach((image) => {
            const img = new Image();
            img.src = image.url;
        });
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
            r = null;
        }, 1000);
    }

    function createImage(image) {
        const img = document.createElement("img");
        img.src = image.url;
        img.className = "gif";
        img.style.position = "absolute";
        img.style.left = `${20 * Math.floor(5 * Math.random())}%`;
        img.style.top = `${20 * Math.floor(5 * Math.random())}%`;

        img.addEventListener("click", () => {
            openPopup(image.contentUrl);
        });

        gifContainer.appendChild(img);

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
        }, 5000);
    }

    // Event delegation for image clicks
    gifContainer.addEventListener("click", function (event) {
        const target = event.target;
        if (target.tagName === "IMG") {
            const index = Array.from(gifContainer.children).indexOf(target);
            if (index !== -1) {
                openPopup(imageList[index].contentUrl);
            }
        }
    });

    // Preload images
    preloadImages(imageList);

    // Create images
    imageList.forEach(createImage);
});
