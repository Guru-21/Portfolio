const follower = document.getElementById("mouse-follower");
const dot = document.getElementById("dot");

window.addEventListener("mousemove", (e) => {
  follower.animate(
    [
      {
        opacity: 1,
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        easing: "ease-in-out"
      }
    ],
    {
      duration: 2000,
      fill: "forwards"
    }
  );

  dot.animate(
    [
      {
        opacity: 1,
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        easing: "ease-in-out"
      }
    ],
    {
      duration: 1000,
      fill: "forwards"
    }
  );
});

window.addEventListener("mouseout", (e) => {
  if (e.relatedTarget === null) {
    follower.animate(
      [
        {
          opacity: 1
        },
        {
          opacity: 0,
          easing: "ease-in-out"
        }
      ],
      {
        duration: 100,
        fill: "forwards"
      }
    );

    dot.animate(
      [
        {
          opacity: 1
        },
        {
          opacity: 0,
          easing: "ease-in-out"
        }
      ],
      {
        duration: 100,
        fill: "forwards"
      }
    );
  }
});
