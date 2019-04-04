<template>
  <div class="main-page">
    <div class="page-title">
      <h1>Vérifiez vos informations et complétez si nécessaire !</h1>
      <p>
        À la validation de ces étapes vous allez pouvoir télécharger vos statuts
        provisoires qui vous permettront d’ouvrir votre compte capital.
      </p>
      <p>
        <b>Important :</b> Vérifiez bien toutes les informations avant de
        valider cette étape car vous ne pourrez pas revenir les modifier par la suite.
      </p>
    </div>
    <Grid :items="tiles">
      <template #grid-item="{item}">
        <Tile :tileData="item"></Tile>
      </template>
    </Grid>
    <NotificationPanel :notification="notification"></NotificationPanel>
    <div class="actions">
      <button class="btn-primary grey" @click="cancelForm">Retour</button>
      <button class="btn-primary light-blue" @click="submitForm">Suivant</button>
    </div>
    <div class="mentions">
      <p>Mentions légales</p>
      <span>
        Les données collectées sont traitées par BETAO AB,
        Editeur du Site
        <a href="https://www.simplitoo.fr">www.simplitoo.fr</a>
        et responsable de traitement,
        afin de vous fournir le service commandé. Les champs avec un astérisque sont obligatoires.
        En application de la loi du 6 janvier 1978 modifiée, dite « Informatique et Libertés »,
        et du Règlement général de protection des données du 27 avril 2016,
        vous disposez d’un droit d’accès, de rectification, d’opposition, de limitation,
        d’effacement et de portabilité de vos données personnelles,
        que vous pouvez exercer par courrier électronique adressé à
        <a
          href="mailto:contact@betao.se"
        >contact@betao.se</a> .
        Pour plus d’information, vous pouvez consulter notre
        <a
          href="#"
        >politique de confidentialité</a>.
      </span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import tilesActions from "../store/actions/tiles";
import formActions from "../store/actions/form";
import Grid from "../components/Grid";
import Tile from "../components/Tile";
import NotificationPanel from "../components/NotificationPanel";

const { GET_TILES } = tilesActions;
const { SUBMIT_FORM, CANCEL_FORM } = formActions;

const { mapGetters } = createNamespacedHelpers("tiles");
const { mapMutations } = createNamespacedHelpers("form");

export default {
  name: "main-page",
  data() {
    return {
      notification: {
        text:
          "Vous devez remplir chaque case et vérifier vos informations. " +
          "Vous avez encore des informations manquantes dans les case en rouge.",
        icon: "error",
        color: "#E15554"
      }
    };
  },
  components: {
    Grid,
    Tile,
    NotificationPanel
  },
  computed: {
    ...mapGetters({
      tiles: GET_TILES
    })
  },
  methods: {
    ...mapMutations({
      cancelForm: CANCEL_FORM,
      submitForm: SUBMIT_FORM
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";

.main-page {
  max-width: 1110px;
  margin: 0 auto;
  padding: 80px 95px;
  .page-title {
    h1 {
      font-weight: bold;
      font-size: 22px;
      text-align: center;
      letter-spacing: 2px;
    }
    p {
      font-size: 16px;
      color: #909aa8;
      letter-spacing: 1px;
    }
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin: 100px 0;
    .btn-primary {
      width: 35%;
    }
  }

  .mentions {
    font-size: 10px;
    font-style: italic;
    text-align: center;
    color: #909aa8;
    p {
      font-weight: bold;
    }
    span a {
      text-decoration: none;
      color: $primary-blue;
    }
  }
  @media (max-width: 768px) {
    padding: 80px 10%;
  }
}
</style>
