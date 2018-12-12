<template>
    <div class="hs-landing">
        <h4 class="hs-text-bold hs-text-spaced">NodeJS Boilerplate</h4>
    </div>
</template>

<script type="text/javascript">
import _ from 'lodash'

export default {
    name: 'landing',
    data () {
        return {
            timetables: [],
            ready: false,
            open: false
        }
    },
    mounted () {
        this.$http.get('/api/timetable').then((res) => {
            this.timetables = _.groupBy(res.data, 'date')
            this.ready = true
        })
    },
    methods: {
        accordion (item) {
            this.open = item
        }
    }
}
</script>
