const SLIDER_OPTIONS = [
  {
    // HOME PAGE AUTOSLIDER OPTIONS
    homeAutoSlider: {
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      center: true,
      autoplay: true,
      slidetransition: "linear",
      autoplayTimeout: 4000,
      autoplaySpeed: 4000,
      autoWidth: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    },
    // MENU PAGE AUTOSLIDER OPTIONS
    menuAutoSlider: {
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      center: true,
      autoplay: false,
      slidetransition: "linear",
      autoplayTimeout: 4000,
      autoplaySpeed: 4000,
      autoWidth: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    },
  },
];
export default SLIDER_OPTIONS;
