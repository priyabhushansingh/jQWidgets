<template>
    <div style="margin-left: 1em">

        <JqxBulletChart :width="getWidth" :height="80" :barSize="'40%'" :ranges="ranges" :rtl="true"
                        :title="'Revenue 2014 YTD'" :description="'(U.S. $ in thousands)'" :ticks="ticks"
                        :pointer="pointer" :target="target" :showToolTip="true" :labelsFormat="'c'">
        </JqxBulletChart>
    </div>
</template>

<script>
    import JqxBulletChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbulletchart.vue';

    export default {
        components: {
            JqxBulletChart
        },
        data: function () {
            return {
                getWidth: '90%',
                ranges: [
                    { startValue: 0, endValue: 200, color: '#000000', opacity: 0.5 },
                    { startValue: 200, endValue: 250, color: '#000000', opacity: 0.3 },
                    { startValue: 250, endValue: 300, color: '#000000', opacity: 0.1 }
                ],
                pointer: { value: 270, label: 'Revenue 2014 YTD', size: '25%', color: 'Black' },
                target: { value: 260, label: 'Revenue 2013 YTD', size: 4, color: 'Black' },
                ticks: { position: 'far', interval: 50, size: 10 }
            }
        }
    }
</script>

<style>
</style>