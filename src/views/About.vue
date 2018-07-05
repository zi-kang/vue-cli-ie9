<template>
    <div class="about">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <h1 @click="submitForm">点击发送请求</h1>
        <h1 @click="addClickNum">你点击了我 {{clickNum}} 次</h1>
    </div>
</template>

<script>
    export default {
        name: 'about',
        data(){
          return {
              clickNum:0
          }
        },
        methods: {
            submitForm() {
                /*this.$ajax({
                    method: 'post',
                    url: '/user',
                    data: {
                        name: 'wise',
                        info: 'wrong'
                    }
                })*/

                this.$ajax({
                    url: '/user',
                    method: 'post',
                    data: {
                        firstName: 'Fred',
                        lastName: 'Flintstone'
                    },
                    transformRequest: [function (data) {
                        // Do whatever you want to transform the data
                        let ret = ''
                        for (let it in data) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                        }
                        return ret
                    }],
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                        alert(error)
                        console.log(error);
                    })
            },
            addClickNum(){
                this.clickNum++
                this.$store.dispatch('clickTest');
            }
        }
    }
</script>

<style scoped lang="less">
    h1{
        cursor: pointer;
    }
</style>
