<template>
  <div class="message-header">
    <p>N'hésitez pas à me contactez :)</p>
  </div>
  <div class="container is-centered mt-5">
    <form class="form">
      <div class="field"><br>
        <label class="label">Nom</label>
        <div class="control">
          <input
              class="input"
              type="text"
              placeholder="Votre nom"
              v-model="lastName"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Prénom</label>
        <div class="control has-icons-left has-icons-right">
          <input
              class="input"
              type="text"
              placeholder="Votre prénom"
              v-model="firstName"
          />
          <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
          <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
              class="input"
              type="email"
              placeholder="Votre email"
              v-model="email"
          />
        </div>
        <div class="field">
          <label class="label">Sujet</label>
          <div class="control">
            <input
                class="input"
                type="text"
                placeholder="Sujet"
                v-model="sujet"
            />
          </div>
          <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
          <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
          <textarea
              class="textarea"
              placeholder="Laissez moi un message ici :)"
              v-model="message"
          ></textarea>
          </div>
        </div>
      </div>
      <div class="field is-grouped is-">
        <div class="control">
          <button class="button is-link" @click="send()">Valider</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Annuler</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      sujet: "",
      message: "",
    };
  },
  methods: {
    send() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        sujet: this.sujet,
        message: this.message,
      };
      console.log(data);
    },
  },
};
</script>

<style scoped>

.message-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

</style>
