export interface IRoute {
  name?: string,
  code: string,
  path: string,
  showInMenu?: boolean,
  notExact?: boolean,
  component?: ((props?: any) => JSX.Element),
  children?: Array<IRoute>
  category?: string
}

export const route: Array<IRoute> = [{
  name: '首页',
  code: 'index',
  path: '/index',
}, {
  name: '随笔',
  code: 'essay',
  path: '/essay',
}, {
  name: '书屋',
  code: 'book',
  path: '/book',
}, {
  name: '留言区',
  code: 'message',
  path: '/message',
}, {
  name: '关于我',
  code: 'aboutme',
  path: '/aboutme',
}]
