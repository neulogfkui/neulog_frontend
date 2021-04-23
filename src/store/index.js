import { createStore } from 'vuex'
import { auth } from "./auth.module"
import { staff } from "./staff.module"

export default createStore({
  modules: {
    auth,
    staff,
  }
});