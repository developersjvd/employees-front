<template>
  <div v-if="isLoading">
    <Spinner />
  </div>
  <div v-else>
    <div class="container d-inline-block d-md-flex justify-content-between align-items-center gap-2 flex-wrap">
        <div v-for="skill in skills" :key="skill.id" class="p-2 rounded mb-2 mb-md-0 text-white fw-bold text-center mx-auto" style="width: 50%" :style="{background: skill.color}">{{skill.name}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Spinner from "@/components/Spinner.vue";
export default {
  components: {
    Spinner,
  },
  data() {
    return {
      skill: {
        name: "",
        color: "",
      },
    };
  },
  methods: {
    ...mapActions("skills", ["loadSkills"]),
  },
  computed: {
    ...mapState("skills", ["isLoading", "skills"]),
  },
  created() {
    this.loadSkills();
  },
};
</script>

<style></style>
