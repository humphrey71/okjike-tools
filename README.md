# Okjike Tools  
一个用于 okjike.com 的浏览器扩展，主要功能是将即刻手机版页面重定向到桌面版网站。
## 功能列表
- 将手机版页面重定向到桌面版网站
  - 将 `https://m.okjike.com` \ `https://okjike.com` \ `http://okjike.com` 重定向到 `https://web.okjike.com`
  - 将 `/originalPosts` 重定向到 `/originalPost`
  - 将 `/topics` 重定向到 `/topic`
  - 将 `/users` 重定向到 `/u`
- 鼠标悬停到`...`按钮时显示收藏按钮
- 点击插件图标打开即刻网页版主页

欢迎提 [issue](https://github.com/humphrey-liu/okjike-tools/issues) 或 [pull request](https://github.com/humphrey-liu/okjike-tools/pulls)。

-----

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
