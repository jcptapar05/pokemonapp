<template>
    <v-card rounded="xl" class="pa-6" height="100%" color="white" theme="dark">
        <template v-slot:title> Popular Courses </template>
        <div id="chart">
            <apexchart
                type="pie"
                height="350"
                :options="chartOptions"
                :series="series"
            ></apexchart>
        </div>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            series: [44, 55, 13, 43, 22],
            chartOptions: {
                chart: {
                    width: 380,
                    type: "pie",
                },
                legend: {
                    position: "bottom",
                },
                labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
        };
    },
};
</script>

<style></style>
