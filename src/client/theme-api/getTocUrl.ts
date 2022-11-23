/**
 * 开启hash路由 会以这种方式显示/#/{path}#{hoc}
 * @param tocId
 * @returns
 */
export const getTocUrl = (tocId: string) => {
  const link = `#${encodeURIComponent(tocId)}`;
  const [, hashRoute] = location.href.split(/#\//);
  const isHashRoute = typeof hashRoute === 'string';

  if (isHashRoute) {
    const [path] = hashRoute.split('#');
    return `#/${path}${link}`;
  }

  return link;
};
