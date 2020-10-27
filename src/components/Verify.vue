<template>
<div>
    <h1>Verify It's Your account</h1>
    <div class="input-group mb-3 col-md-9">
  <input type="text" v-model="code" class="form-control" placeholder="Input Verify 2FA Token" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn" @click="addVerify" type="button">Verify</button>
  </div>
</div>
</div>
</template>

<script>
import service from "../services/service"
export default {
  name: 'Verify',
  data(){
      return{
        code: "",
    }
  },
  methods: {
    async addVerify() {
        await service.addVerify({
          code: this.code,
        }).then(response => {
            const errors = response.data.error;
          if (errors) {
            console.log(errors);
          } else
            this.$router.push({
              name: "Home"
            });
        })
    }
  }
}
</script>

<style scoped>
.btn{
    background-color: crimson;
}
.input-group {
    margin: 10%;
}
.form-control{
    padding:30px;
    border-color: crimson;
    text-align: center;
}
</style>