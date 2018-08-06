  $("#countdown1").percircle({
        perclock: true,
    });
    $("#countdown2").percircle({
        perclock: true,
    });
    $("#countdown3").percircle({
        perclock: true,
    });
    $("#custom-color").percircle({
        progressBarColor: "#1b815a",
        percent: 79.9
    });
    $("#custom").percircle({
        perdown: true,
        secs: 60,
        progressBarColor: "#c74812",
        timeUpText: 'finally!'
    });
    $(document).ready(function () {
        $("#redBecomesBlue").percircle({ percent: 55, text: "55" });

        $('#changeCircle').click(function (e) {
            e.preventDefault();
            changeCircle();
        });
    });
    function changeCircle() {
        $("#redBecomesBlue").percircle({
            text: "95.5",
            percent: 95.5,
            progressBarColor: "#1252c0"
        });
    }