<template>
    <div>
        <h1>Encontre seu CEP</h1>
      <form @submit.prevent="onSubmit">

          <input type="text" placeholder="Informa o CEP" v-model="cep">
          <button type="submit">Buscar CEP</button>
      </form>
      <div v-if=preloader>
          Carregando
      </div>
      <ul>
          <li>{{address.logradouro}}</li>
          <li>{{address.bairro}}</li>
          <li>{{address.cidade}}</li>
          <li>{{address.cep}}</li>

      </ul>
      <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    data() {

        return {
            cep:'',
            title:"Busca Cep",
            address:{
                logradouro: '',
                bairro: '',
                cidade: '',
               
            },
            preloader: false,
            msg:""
        }
    },

    methods:{

        onSubmit(){
            this.preloader = true
            this.msg=""
            this.$http.get('https://api.postmon.com.br/v1/cep/' + this.cep)
            .then(response => {
                this.address = response.body
                console.log(response)
                this.preloader= false
               

            }, error =>{
                console.log(error)
                 this.preloader= false
                 this.msg="Nenhum cep encontrado"
            })
            .finally(()=>{
                
                this.preloader= false
            })
                       
        }
    }

}
</script>

<style >
    
</style>