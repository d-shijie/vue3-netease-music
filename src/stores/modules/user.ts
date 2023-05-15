import { defineStore } from "pinia";
import { ref } from "vue";
import { setToken, removeToken } from "@/util/storage";
export const useUserStore = defineStore(
  'user', () => {
    const loginState = ref(false)
    const userInfo = ref<any>({})
    const loginSuccess = <T extends Object> (profile: T, token: string): void => {
      loginState.value = true
      userInfo.value = profile
      setToken(token)
    }
    const logout = () => {
      loginState.value = false
      userInfo.value = {}
      removeToken()
    }
    return { loginState, userInfo, loginSuccess, logout }
  },

)