import router from "@/router";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/vue";
import { createPinia } from "pinia";
// import { useRecipeStore } from "@/stores/recipes";

const customRender = (component, options) => {
  const user = userEvent.setup();
  const result = render(component, {
    global: {
      plugins: [router, createPinia()],
    },
    ...options,
  });

  // const mockRecipeStore = useRecipeStore();

  return {
    result,
    user,
    // mockRecipeStore,
  };
};

export * from "@testing-library/vue";
export { customRender as render };
export { router };
