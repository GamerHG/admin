<template>
  <div style="height: 100%" ref="echart">echart</div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        };
      },
    },
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
  },
  data() {
    return {
      echart: null,
      axisOption: {

        legend: {
          textStyle: {
            color: "#333",
          },
        },
        grid:{
            left:'20%'
        },
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            color: "#333",
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
        },
        series: [],
        color: [
          "#C1232B",
          "#B5C334",
          "#FCCE10",
          "#E87C25",
          "#27727B",
          "#FE8463",
          "#9BCA63",
          "#FAD860",
          "#F3A43B",
          "#60C0DD",
          "#D7504B",
          "#C6E579",
          "#F4E001",
          "#F0805A",
          "#26C0C0",
        ],
      },
      normalOption: {
          title:{
          },
        tooltip: {
          trigger: 'item',
          show:false,
        },
        color: [
          "#C1232B",
          "#B5C334",
          "#FCCE10",
          "#E87C25",
          "#27727B",
          "#FE8463",
          "#9BCA63",
          "#FAD860",
          "#F3A43B",
          "#60C0DD",
          "#D7504B",
          "#C6E579",
          "#F4E001",
          "#F0805A",
          "#26C0C0",
        ],
        series: [],
      },
    };
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart();
      },
      deep: true,
    },
  },
  methods: {
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        this.axisOption.series = this.chartData.series;
      }
    },
    resizeChart(){
        this.echart ? this.echart.resize : ''
    }
  },
  mounted () {
      window.addEventListener('resize',this.resizeChart);
  },
  destroyed () {
      window.removeEventListener('resize',this.resizeChart);
  },
};
</script>

<style lang="scss" scoped>
</style>