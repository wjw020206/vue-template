export default function useRouterInfo() {
  /** vue实例 */
  const instance = getCurrentInstance();

  const useRouter = () => {
    return instance.proxy.$router;
  };

  const useRoute = () => {
    return instance.proxy.$route;
  };

  return {
    useRouter,
    useRoute,
  };
}
