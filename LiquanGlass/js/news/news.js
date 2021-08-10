(function ($) {
    "use strict"


    var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

})(jQuery)

$(function () {
    $('.chart_pie').easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#1abc9c',
        trackColor: "#ecf0f1",
        size: 160,
        animate: 500
    });
});

/*----------------news-----------------*/

var x = 0;
var y = 0;
$(".selection").click(function () {
    $(".ul").slideToggle();
    if (x == 0) {
        $(".icon").css("background-image", "url(/img/news/plus.png)");
        x = 1;
    }
    else {
        $(".icon").css("background-image", "url(/img/news/minus.png)");
        x = 0;
    }
});
$(".selection1").click(function () {
    $('.ul1').slideToggle();
    if (y == 0) {
        $(".icon1").css("background-image", "url(/img/news/plus.png)");
        y = 1;
    }
    else {
        $(".icon1").css("background-image", "url(/img/news/minus.png)");
        y = 0;
    }
})
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontFamily = 'cursive';
var a = ["非常滿意", "滿意", "普通", "不滿意", "非常不滿意"];
var pieOptions = {
    title: {
        display: true,
        fontColor: "black",
        fontSize: 18,
    },
    legend: {
        position: "left",
    },
    responsive: false,
    events: false,
    animation: {
        duration: 500,
        easing: "easeOutQuart",
        onComplete: function () {
            var ctx = this.chart.ctx;
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset) {

                for (var i = 0; i < dataset.data.length; i++) {
                    var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                        total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                        mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                        start_angle = model.startAngle,
                        end_angle = model.endAngle,
                        mid_angle = start_angle + (end_angle - start_angle) / 2;

                    var x = mid_radius * Math.cos(mid_angle);
                    var y = mid_radius * Math.sin(mid_angle);

                    ctx.fillStyle = 'white';
                    if (i == 3) { // Darker text color for lighter background
                        ctx.fillStyle = '#444';
                    }
                    var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";

                    // Display percent in another line, line break doesn't work for fillText
                    ctx.fillText(percent, model.x + x, model.y + y + 15);
                }
            });
        }
    }
};

var cht = $(".chart");
var chart = new Chart($(".chart"), {
    type: 'pie',
    data: {
        labels: ["非常滿意", "滿意", "普通", "不滿意", "非常不滿意"],
        datasets: [{
            data: [84, 11, 5,],
            backgroundColor: [
                "rgba(3, 3, 150,0.6)",
                "rgba(252, 113, 0,0.6)",
                "rgba(248, 252, 0,0.6)",
                "rgba(50, 252, 0,0.6)",
                " rgba(252, 0, 0,0.6)"
            ]
        }]
    },
    options: pieOptions
});