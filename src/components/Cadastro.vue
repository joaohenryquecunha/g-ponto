<template>
  <div class="container">
    <div class="container-cadastro">
      <b-form @submit.prevent="onSubmit">
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
            :options="admin"
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
      admin: ["não", "sim"],
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
        password: this.form.password
        
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

<style scoped>
.container {
  max-width: 1920px;
  height: 100vh;
  display: flex;
  text-align: center;
  background-image: url("/src/assets/icons/Pontos.jpg");
  background-size: cover;
}
.container-cadastro {
  margin: auto;
  padding: 20px;
  height: 50vh;
  border: 1px solid white;
  border-radius: 10px;
}

#input {
  background: gainsboro;
  border: 1px solid white;
}
.inputs {
  color: black;
  padding: 20px;
  border-radius: 5px;
}
</style>