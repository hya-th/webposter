$(document).ready(function () {
  console.log("check");

  /*pear*/
  $(".pear").on("mouseenter", function () {
    $(".pear").attr("src", "asset/3-2.png");
  });
  $(".pear").addClass("hover");

  $(".pear").on("mouseleave", function () {
    $(".pear").attr("src", "asset/3-1.png");
    $(".pear").removeClass("hover");
  });

  /*fish*/
  $(".fish").on("mouseenter", function () {
    $(".fish").attr("src", "asset/1-2.png");
  });
  $(".fish").addClass("hover");

  $(".fish").on("mouseleave", function () {
    $(".fish").attr("src", "asset/1-1.png");
    $(".fish").removeClass("hover");
  });

  /*sp*/
  $(".sp").on("mouseenter", function () {
    $(".sp").attr("src", "asset/2-2.png");
  });
  $(".sp").addClass("hover");

  $(".sp").on("mouseleave", function () {
    $(".sp").attr("src", "asset/2-1.png");
    $(".sp").removeClass("hover");
  });

  /*apple*/
  $(".apple").on("mouseenter", function () {
    $(".apple").attr("src", "asset/4-2.png");
  });
  $(".apple").addClass("hover");

  $(".apple").on("mouseleave", function () {
    $(".apple").attr("src", "asset/4-1.png");
    $(".apple").removeClass("hover");
  });

  /*shrimp*/
  $(".shrimp").on("mouseenter", function () {
    $(".shrimp").attr("src", "asset/5-2.png");
  });
  $(".shrimp").addClass("hover");

  $(".shrimp").on("mouseleave", function () {
    $(".shrimp").attr("src", "asset/5-1.png");
    $(".shrimp").removeClass("hover");
  });

  /*fig*/
  $(".fig").on("mouseenter", function () {
    $(".fig").attr("src", "asset/6-2.png");
  });
  $(".fig").addClass("hover");

  $(".fig").on("mouseleave", function () {
    $(".fig").attr("src", "asset/6-1.png");
    $(".fig").removeClass("hover");
  });

  /*chestnut*/
  $(".chestnut").on("mouseenter", function () {
    $(".chestnut").attr("src", "asset/7-2.png");
  });
  $(".chestnut").addClass("hover");

  $(".chestnut").on("mouseleave", function () {
    $(".chestnut").attr("src", "asset/7-1.png");
    $(".chestnut").removeClass("hover");
  });

  /*yuzu*/
  $(".yuzu").on("mouseenter", function () {
    $(".yuzu").attr("src", "asset/8-2.png");
  });
  $(".yuzu").addClass("hover");

  $(".yuzu").on("mouseleave", function () {
    $(".yuzu").attr("src", "asset/8-1.png");
    $(".yuzu").removeClass("hover");
  });

  /*tomato*/
  $(".tomato").on("mouseenter", function () {
    $(".tomato").attr("src", "asset/9-2.png");
  });
  $(".tomato").addClass("hover");

  $(".tomato").on("mouseleave", function () {
    $(".tomato").attr("src", "asset/9-1.png");
    $(".tomato").removeClass("hover");
  });

  $(document).ready(function () {
    var defaultCursor = "default";
    /*1*/
    $(".fish").hover(
      function () {
        $(this).css("cursor", 'url("asset/fork.png") 10 10, pointer');
      },
      function () {
        $(this).css("cursor", defaultCursor);
      }
    );
    /*2*/
    $(".pear").hover(
      function () {
        $(this).css("cursor", 'url("asset/fork.png") 10 10, pointer');
      },
      function () {
        $(this).css("cursor", defaultCursor);
      }
    );
    /*3*/
    $(".yuzu").hover(
      function () {
        $(this).css("cursor", 'url("asset/fork.png") 10 10, pointer');
      },
      function () {
        $(this).css("cursor", defaultCursor);
      }
    );
    /*4*/
    $(".fig").hover(
      function () {
        $(this).css("cursor", 'url("asset/fork.png") 10 10, pointer');
      },
      function () {
        $(this).css("cursor", defaultCursor);
      }
    );
    /*5*/
    $(".apple").hover(
      function () {
        $(this).css("cursor", 'url("asset/fork.png") 10 10, pointer');
      },
      function () {
        $(this).css("cursor", defaultCursor);
      }
    );
    /*6*/
    $(".sp").hover(
      function () {
        $(this).css("cursor", 'url("asset/fork.png") 10 10, pointer');
      },
      function () {
        $(this).css("cursor", defaultCursor);
      }
    );
    /*7*/
    $(".shrimp").hover(
      function () {
        $(this).css("cursor", 'url("asset/fork.png") 10 10, pointer');
      },
      function () {
        $(this).css("cursor", defaultCursor);
      }
    );
    /*8*/
    $(".tomato").hover(
      function () {
        $(this).css("cursor", 'url("asset/fork.png") 10 10, pointer');
      },
      function () {
        $(this).css("cursor", defaultCursor);
      }
    );
    /*9*/
    $(".chestnut").hover(
      function () {
        $(this).css("cursor", 'url("asset/fork.png") 10 10, pointer');
      },
      function () {
        $(this).css("cursor", defaultCursor);
      }
    );
  });
});
