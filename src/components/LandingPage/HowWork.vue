<template>
    <div>
        <h2>How it work</h2>
        <div class="col-md-3 col-xs-6" v-for="item in listItem" :key="item.id">
            <header>
                <img :src="item.img" :alt="item.title" class="img-responsive">
            </header>
            <h3>{{item.title}}</h3>
            <p>{{item.brief}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listItem: [
                {
                    id: 1,
                    title: "Tieu de so 1",
                    img: "http://via.placeholder.com/250x250",
                    brief: "Mo ta muc so 1 tai day"
                },
                {
                    id: 2,
                    title: "Tieu de so 2",
                    img: "http://via.placeholder.com/250x250",
                    brief: "Mo ta muc so 2 tai day"
                },
                {
                    id: 3,
                    title: "Tieu de so 3",
                    img: "http://via.placeholder.com/250x250",
                    brief: "Mo ta muc so 3 tai day"
                },
                {
                    id: 4,
                    title: "Tieu de so 4",
                    img: "http://via.placeholder.com/250x250",
                    brief: "Mo ta muc so 4 tai day"
                }                                
            ]
        }
    }
}
</script>

<style>

</style>
