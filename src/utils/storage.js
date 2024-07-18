const storage = {
  // 设置存储
  set(key, value) {
    // 将对象转换为 JSON 字符串存储
    localStorage.setItem(key, JSON.stringify(value));
  },

  // 获取存储
  get(key) {
    const value = localStorage.getItem(key);
    // 尝试解析 JSON 字符串，如果解析失败则返回原始值
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  },

  // 移除存储
  remove(key) {
    localStorage.removeItem(key);
  },

  // 清空所有存储
  clear() {
    localStorage.clear();
  },
};

export default storage;
