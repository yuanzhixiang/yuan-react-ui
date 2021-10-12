import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'YUAN UI',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because a custom domain name is used, it can start with root directly.
  base: '/',
  publicPath: '/',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/zhixiangyuan/yuan-react-ui',
    },
  ],
  // more config: https://d.umijs.org/config
});
