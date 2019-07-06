<!-- 子组件 -->
<template>
    <!-- 面包屑 -->
    <div class="list_head">
        <p>
            您现在所在位置:
            <!-- 路径循环渲染 -->
            <span v-for="(item,index) in fromFather">
                <span class="breadTitle1">{{item.menuName}}</span>
                <span v-if="item.name != ''"></span>
                <span class="hovers" style="color:#518BDC" v-if="index == fromFather.length-1">{{item.name}}</span>
                <router-link class="goHover" v-else :to="{path:'/'+item.path}" :key="item.path">
                    <span>{{item.name}}</span>
                </router-link>
            </span>
    </div>
</template>

<script>
export default {
    name:'ddd',
    props:['fromFather'] //父组件给子组件传参
}
</script>

