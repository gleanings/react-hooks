/**
 * @packageDocumentation
 * @module @react-hooks/index
 * @file index.ts
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @license MIT
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-07-06 16:19
 * @version 0.0.0
 * @lastModified 2026-07-06 23:20
 */
import { dev } from '@vvi/dev';

/**  */
dev.skip('测试 import 方法加载模块', () => {
  import('@vvi/ripple')
    .then(module => {
      console.log(module);
      console.log(module.Ripples);
      return;
    })
    .catch(err => {
      console.error('加载模块错误', err);
    })
    .finally(() => {
      console.warn('执行结束');
    });
});
