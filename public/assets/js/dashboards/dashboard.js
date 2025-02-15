$(document).ready(function () {
  // Theme Onload Toast
  window.addEventListener("load", () => {
    let myAlert = document.querySelectorAll(".toast")[0];
    if (myAlert) {
      let bsAlert = new bootstrap.Toast(myAlert);
      bsAlert.show();
    }
  });

  // Carousel
  if ($(".counter-carousel").length) {
    $(".counter-carousel").owlCarousel({
      loop: true,
      rtl: true,
      margin: 30,
      mouseDrag: true,
      nav: false,
      responsive: {
        0: { items: 2, loop: true },
        576: { items: 2, loop: true },
        768: { items: 3, loop: true },
        1200: { items: 5, loop: true },
        1400: { items: 6, loop: true },
      },
    });
  }

  // Function to safely render chart
  const renderChart = (elementId, config) => {
    const element = document.querySelector(elementId);
    if (element) {
      return new ApexCharts(element, config).render();
    }
  };

  // Profit Chart
  const profitConfig = {
    series: [
      {
        name: "Eanings this month",
        data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.0],
      },
      {
        name: "Expense this month",
        data: [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8],
      },
    ],
    chart: {
      toolbar: { show: false },
      type: "bar",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      height: 310,
      stacked: true,
    },
    colors: ["var(--bs-primary)", "var(--bs-secondary)"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "20%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: { lines: { show: false } },
    },
    yaxis: {
      min: -5,
      max: 5,
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        "16/08",
        "17/08",
        "18/08",
        "19/08",
        "20/08",
        "21/08",
        "22/08",
      ],
      axisBorder: { show: false },
    },
    tooltip: { theme: "dark" },
  };
  renderChart("#chart", profitConfig);

  // Breakup Chart
  const breakupConfig = {
    color: "#adb5bd",
    series: [38, 40, 25],
    labels: ["2022", "2021", "2020"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: { size: "75%" },
      },
    },
    stroke: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    colors: ["var(--bs-primary)", "#ecf2ff", "var(--bs-card-bg)"],
    responsive: [
      {
        breakpoint: 991,
        options: { chart: { width: 120 } },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };
  renderChart("#breakup", breakupConfig);

  // Earning Chart
  const earningConfig = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: { enabled: true },
      group: "sparklines",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "var(--bs-secondary)",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.15,
        opacityTo: 0,
        stops: [20, 180],
      },
      opacity: 0.5,
    },
    markers: { size: 0 },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: { show: false },
    },
  };
  renderChart("#earning", earningConfig);

  // Salary Chart
  const salaryConfig = {
    series: [
      {
        name: "Salary",
        data: [20, 15, 30, 25, 10, 15],
      },
    ],
    chart: {
      toolbar: { show: false },
      height: 260,
      type: "bar",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    colors: [
      "#7366FF",
      "#7366FF",
      "#7366FF",
      "#7366FF",
      "#7366FF",
      "#7366FF",
    ],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "45%",
        distributed: true,
        endingShape: "rounded",
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: {
      yaxis: { lines: { show: false } },
      xaxis: { lines: { show: false } },
    },
    xaxis: {
      categories: [["Pune"], ["Bombay"], ["Goa"], ["Kochi"], ["Coorg"], ["Delhi"]],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    tooltip: { theme: "dark" },
  };
  renderChart("#salary", salaryConfig);

  // Customers Chart
  const customersConfig = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: { enabled: true },
      group: "sparklines",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Customers",
        color: "var(--bs-secondary)",
        data: [30, 25, 35, 20, 30, 40],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.12,
        opacityTo: 0,
        stops: [20, 180],
      },
    },
    markers: { size: 0 },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: { show: false },
    },
  };
  renderChart("#customers", customersConfig);

  // Projects Chart
  const projectsConfig = {
    series: [
      {
        name: "",
        data: [4, 10, 9, 7, 9, 10, 11, 8, 10, 9],
      },
    ],
    chart: {
      type: "bar",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      height: 70,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    colors: ["#7366FF"],
    grid: { show: false },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "rounded",
        columnWidth: "60%",
        barHeight: "20%",
        distributed: true,
        borderRadius: 2,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2.5,
      colors: ["rgba(0,0,0,0.01)"],
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    fill: { opacity: 1 },
    tooltip: {
      theme: "dark",
      style: { fontSize: "12px" },
      x: { show: false },
    },
  };
  renderChart("#projects", projectsConfig);

  // Stats Chart
  const statsConfig = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 180,
      sparkline: { enabled: true },
      group: "sparklines",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Weekly Stats",
        color: "var(--bs-primary)",
        data: [5, 15, 10, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0,
        stops: [20, 180],
      },
    },
    markers: { size: 0 },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: { show: false },
    },
  };
  renderChart("#stats", statsConfig);
});
