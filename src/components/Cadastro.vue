<template>
  <div class="container d-flex">
     
    
    <div class="container-cadastro d-flex">
      <div class="img-login">
      <img src="../assets/icons/gponto1.jpeg" alt="gponto" style="width: auto; height: auto;">
    </div>
      <b-form @submit.prevent="onSubmit">
        <div class="text-forms">
          <h3>CADASTRE-SE</h3>
        </div>
        <div class="inputs">
          <b-form-input
            id="input"
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
          ></b-form-input>
        </div>
        <div class="inputs">
          <b-form-input
            id="input"
            v-model="form.name"
            placeholder="Seu Nome"
            required
          ></b-form-input>
        </div>
        <div class="inputs">
          <b-form-input
            id="input"
            v-model="form.password"
            type="password"
            placeholder="Password"
            required
          ></b-form-input>
        </div>
        <div class="inputs">
          <b-form-select
            id="input"
            v-model="form.admin"
            :options="optionAdmin"
            required
          >
            <option disabled value="">administrador</option>
          </b-form-select>
        </div>
        <div class="inputs">
          <b-button class="button-cadastro" type="submit"  variant="danger"
            >Cadastrar</b-button
          >
        </div>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        admin: "",
      },
      optionAdmin: ["não", "sim"],
    };
  },
  methods: {
    onSubmit() {
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        admin: this.form.admin
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('usuario criado',data);
    }).catch(error => {
      console.error('erro ao criar');
    });
    },


  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2? family= Alfa+Slab+One & display=swap');

.container {
  max-width: 1920px;
  height: 100vh;
  display: flex;
  text-align: center;
  background-color: #222;
 
  
}
.text-forms{
    color: var(--colorGray-2);
    
  }h3{
    font-weight: 900;
    font-family: 'Alfa Slab One', serif;;
  }

.img-login {
  
}

  
</style>