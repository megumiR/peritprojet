<template>
  <div class="admin">
    <h1>Login form</h1>
    <div class="formField">
      <form id="signinForm" action="">
        <div class="form__commentpost">
          <label for="userid">ID : </label>
          <br />
          <input
            type="text"
            name="userid"
            id="userid"
            v-on:blur="validEmail"
            required
          />
          <p id="idErrorMsg">{{ emailErrorMsg }}</p>
        </div>

        <div class="form__commentpost">
          <label for="password">Mot de passe : </label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            v-on:blur="validPassword"
            required
          />
          <p id="passwordErrorMsg">
            {{ passwordErrorMsg
            }}<!-- ci est un message d'erreur -->
          </p>
        </div>
        <div>
          <button class="btn btn-primaly" @click="sendLoginform">
            Connexion
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
