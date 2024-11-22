const tabBarMap: { [key: number]: string } = {
  0: '/',
  1: '/painting',
  2: '/assist',
  3: '/shop',
  4: '/user',
};

export function getTabBar(value: number): string {
  const result = tabBarMap[value];
  if (result === undefined) {
    console.error(`Unexpected value for tabBar: ${value}`);
    return '/';
  }
  return result;
}
