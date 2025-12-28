export const storageService = {
  get<T>(key: string): T[] {
    return JSON.parse(localStorage.getItem(key) || '[]');
  },

  save<T>(key: string, data: T[]) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  add<T>(key: string, item: T) {
    const data = this.get<T>(key);
    data.push(item);
    this.save(key, data);
  },

  update<T extends { id: string }>(key: string, item: T) {
    const data = this.get<T>(key).map((i: any) =>
      i.id === item.id ? item : i
    );
    this.save(key, data);
  }
};

