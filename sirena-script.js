document.addEventListener("DOMContentLoaded", function () {
  const gifContainer = document.getElementById("gifContainer");
  const popup = document.getElementById("popup");
  const iframe = document.getElementById("iframe");

  const gifs = [
    {
      url: "https://antiparti.cl/img/Sirena/baby-octo0.gif",
      contentUrl:
        "https://archive.org/embed/SIRENA-Yeu_Kieu_by_Tien_Nguyen_Minh",
    },
    {
      url: "https://antiparti.cl/img/Sirena/daddo.gif",
      contentUrl:
        "https://archive.org/embed/SIRENA-Nation_Free_by_The_Mainstream_Official",
    },
    {
      url: "https://antiparti.cl/img/Sirena/cleamm.gif",
      contentUrl:
        "https://archive.org/embed/SIRENA-Walking_With_The_Waves_by_Taiki_Arita",
    },
    {
      url: "https://antiparti.cl/img/Sirena/iliketurtle.gif",
      contentUrl:
        "https://archive.org/embed/SIRENA-Metamorphosis_Kintsugi_by_Athina_Kanellopoulou",
    },
    {
      url: "https://antiparti.cl/img/Sirena/octop.gif",
      contentUrl:
        "https://archive.org/embed/SIRENA-Climate_Change_by_Kayoko_Nakamura",
    },
    {
      url: "https://antiparti.cl/img/Sirena/blob.gif",
      contentUrl:
        "https://archive.org/embed/SIRENA-FORCED-MIGRATION_by_Aleksei_Martyniuk",
    },
    {
      url: "https://antiparti.cl/img/Sirena/insecticon.gif",
      contentUrl:
        "https://archive.org/embed/SIRENA-300_curves_by_Martina_Noskova",
    },
    {
      url: "https://antiparti.cl/img/Sirena/plompy-blob.gif",
      contentUrl: "https://archive.org/embed/SIRENA-Ruido_Rosa_by_Oksana_Rudko",
    },
    {
      url: "https://antiparti.cl/img/Sirena/fishyy.gif",
      contentUrl:
        "https://archive.org/embed/SIRENA-Serpenti_e_Scale_by_Giuseppe_de_Benedittis",
    },
    {
      url: "https://antiparti.cl/img/Sirena/Lea.gif",
      contentUrl: "https://archive.org/embed/SIRENA-Madena_by_Magdi_Mostafa",
    },
    {
      url: "https://antiparti.cl/img/Sirena/spiny-puppy.gif",
      contentUrl:
        "https://archive.org/embed/SIRENA-Lifelike_by_Ioana_and_Pablo",
    },
    {
      url: "https://antiparti.cl/img/Sirena/crusty.gif",
      contentUrl: "https://archive.org/embed/SIRENA-METANOIA_by_Nina_Sumarac",
    },
    {
      url: "https://antiparti.cl/img/Sirena/hungryy.gif",
      contentUrl: "https://archive.org/embed/SIRENA_by_IDKLANG",
    },
    {
      url: "https://antiparti.cl/img/Sirena/morphishy.gif",
      contentUrl: "https://archive.org/embed/SIRENA-Drinkable_by_Flounder_Lee",
    },
  ];

  const gridSize = 5; // Adjust this value to control the grid size
  const gridCellWidth = 100 / gridSize;
  const gridCellHeight = 100 / gridSize;
  const migrationInterval = 5000; // Adjust this value to control the migration interval (in milliseconds)

  function createRandomGif(gifData) {
    const gif = document.createElement("img");
    gif.src = gifData.url;
    gif.className = "gif";
    gif.style.position = "absolute";
    gif.addEventListener("click", () => openPopup(gifData.contentUrl));

    // Set initial random position within the grid
    setRandomGridPosition(gif);

    gifContainer.appendChild(gif);

    // Set initial position and update at regular intervals
    updateGifPosition(gif, gifData);
  }

  function openPopup(contentUrl) {
    iframe.src = contentUrl;
    popup.style.display = "flex";
  }

  function setRandomGridPosition(gif) {
    const xIndex = Math.floor(Math.random() * gridSize);
    const yIndex = Math.floor(Math.random() * gridSize);

    const xPosition = xIndex * gridCellWidth;
    const yPosition = yIndex * gridCellHeight;

    gif.style.left = `${xPosition}%`;
    gif.style.top = `${yPosition}%`;
  }

  function updateGifPosition(gif, gifData) {
    // Update position at regular intervals
    setInterval(() => {
      if (!gifData.spawned) {
        // Calculate new position within the grid
        const newXIndex = Math.floor(Math.random() * gridSize);
        const newYIndex = Math.floor(Math.random() * gridSize);

        const newXPosition = newXIndex * gridCellWidth;
        const newYPosition = newYIndex * gridCellHeight;

        // Animate the migration
        animateMigration(gif, newXPosition, newYPosition);
        gifData.spawned = true;
      }
    }, migrationInterval);
  }

  function animateMigration(gif, newX, newY) {
    const currentX = parseFloat(gif.style.left);
    const currentY = parseFloat(gif.style.top);

    const deltaX = (newX - currentX) / 100; // Adjust the migration speed
    const deltaY = (newY - currentY) / 100;

    let step = 0;
    const migrationStep = setInterval(() => {
      const nextX = currentX + step * deltaX;
      const nextY = currentY + step * deltaY;

      gif.style.left = `${nextX}%`;
      gif.style.top = `${nextY}%`;

      step++;

      if (step > 100) {
        clearInterval(migrationStep);
      }
    }, migrationInterval / 100);
  }

  document.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  // Generate initial GIFs
  for (const gifData of gifs) {
    createRandomGif(gifData);
  }
});
