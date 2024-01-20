$(document).ready(function () {
    $("#opening").modal('show');
    $("#loading-indicator").fadeOut();
});

$(".modal-content").click(function (e) { 
    e.preventDefault();
    $("#content").removeClass('d-none');
    $("#opening").modal('hide');
    confetti();
});

function confetti() {
    tsParticles.load({
        id: "tsparticles",
        options: {
          emitters: [
            {
              life: {
                duration: 5,
                count: 1,
              },
              position: {
                x: 0,
                y: 30,
              },
              particles: {
                move: {
                  direction: "top-right",
                },
              },
            },
            {
              life: {
                duration: 5,
                count: 1,
              },
              position: {
                x: 100,
                y: 30,
              },
              particles: {
                move: {
                  direction: "top-left",
                },
              },
            },
          ],
          preset: "confetti",
        },
    });
}