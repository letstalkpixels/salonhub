$(".splide").each((index) => {
  const splide = new Splide($(".splide")[index], {
    // Desktop on down
    perPage: 2.5,
    perMove: 1,
    focus: 0, // 0 = left and 'center' = center
    type: "slide", // 'loop' or 'slide'
    gap: "1rem", // space between slides
    arrows: false, // 'slider' or false
    pagination: true, // 'slider' or false
    paginationKeyboard: true,
    speed: 600, // transition speed in miliseconds
    dragAngleThreshold: 30, // default is 30
    autoWidth: false, // for cards with differing widths
    rewind: false, // go back to beginning when reach end
    rewindSpeed: 400,
    waitForTransition: false,
    updateOnMove: true,
    trimSpace: true, // true removes empty space from end of list
    breakpoints: {
      991: {
        // Tablet
        perPage: 1.5,
        gap: "1rem",
      },
      767: {
        // Mobile Landscape
        perPage: 1.2,
        gap: "1rem",
      },
      479: {
        // Mobile Portrait
        perPage: 1.2,
        gap: "1rem",
      },
    },
  });
  const bar = splide.root.querySelector(".my-carousel-progress-bar");

  splide.on("mounted move", function () {
    var end = splide.Components.Controller.getEnd() + 1;
    bar.style.width = String((100 * (splide.index + 1)) / end) + "%";
  });

  splide.mount();
});

$(".faq-item").click(function () {
  if (!$(this).is(".open")) {
    $(".faq-item.open").each((i, item) => {
      item.click();
    });
    $(this).addClass("open");
  } else {
    $(this).removeClass("open");
  }
});
