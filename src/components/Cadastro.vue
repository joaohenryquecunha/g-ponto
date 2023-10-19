<template>
  <div class="container d-flex">
     
    
    <div class="container-cadastro d-flex">
      <div class="img-login">
      <img src="../assets/icons/gponto1.jpeg" alt="gponto">
      <div class="d-flex link-login">
        <div>
          <p class="p-login">Já possui uma conta?</p>
        </div>
        <div>
          <RouterLink 
          to="login">
          <button>
            Fazer Login
          </button>
        </RouterLink>

        </div>
      </div>
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
          <b-button class="button-cadastro" type="submit"  
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
import { RouterLink } from 'vue-router';

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
                alert('usuario criado', data);
                this.form.name = "";
                this.form.email = "";
                this.form.password = "";
                this.form.admin = "";
              }).catch(error => {
               alert('erro', error);
            });
        },
    },
    components: { RouterLink }
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
    font-family: 'Alfa Slab One', serif;
  }

.img-login {
  width: 400px;
  height: 100%;
  border: 1px solid aliceblue;
  border-radius: 25px 25px;
  img{
    width: 100%;
    height: 50%;
    border-radius: 25px 25px 5px 5px;
    object-fit:cover;
    
  }
}

.button-cadastro {
  color: #000;
  background:linear-gradient(180deg, #00ff88,#028065);
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0px 1px 5px 0px  lightblue;
}
.button-cadastro:hover {
  color: #000;
  background:linear-gradient(90deg, #00ffc8,#00fc93);
  padding: 8px 18px;
  font-size: 18px;
}

.link-login {
  height: 50%;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 10px;
  padding: 40px;
  p{
    color: #fff;
    margin: auto;
  }
  button{
    font-family: 'Alfa Slab One', serif;
  background:linear-gradient(180deg, #00ff88,#028065);
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0px 1px 5px 0px  lightblue;
  border-radius: 10%;
  }
  button:hover{
  background:linear-gradient(90deg, #00ffc8,#00fc93);
  padding: 4px 8px;
  font-size: 18px;
  }
}




  
</style>