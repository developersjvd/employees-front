import { http } from "@/helpers/axios";

export const loadSkills = async ({ commit }) => {
  const { data } = await http.get("/api/skills");
  console.log(data)
  if (!data) {
    commit("SET_SKILLS", []);
    return;
  }

  commit("SET_SKILLS", data);
};
