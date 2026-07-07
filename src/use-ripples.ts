/**
 * @module @vvi/react-hooks/index
 * @file use-ripples.ts
 * @description   ripple 的主要核心逻辑
 * @author MrMudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ MrMudBean
 * @since 2025-06-20 01:37
 * @version 2.0.0-alpha.0
 * @lastModified 2026-07-07 09:14
 */
'use client';

import { isNull } from '@vvi/is';
import { Ripples, type RipplesOptions } from '@vvi/ripple';
import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { dog } from './utils/dog';

/**
 * ## 使用绘制 ripples 上一层
 * @param canvas `usrRef` 包裹的 `HTMLCanvasElement`，用于绘制图像
 * @param option  初始化的
 * @see  [useRipples](https://lmssee.com/custom-hooks/use-ripples)
 * @see  [JQuery ripple](https://github.com/sirxemic/jquery.ripples)
 * @example
 * 下面是在 <BackgroundRipple> 中使用
 * ```ts
 * import { useRipples } from '@vvi/react-hooks';
 *
 *  export function BackgroundRipple(props: BackgroundRipplesProps) {
 *
 *   // canvas 元素
 *  const canvas = useRef<HTMLCanvasElement>(null);
 *
 *  // 使用 ripples
 *  const ripplesRef = useRipples(canvas, props);
 *
 *  return (<>
 *     <canvas ref={canvas}></canvas>
 *     {props.children}
 *  </>);
 *  }
 * ```
 */
export function useRipples(
  canvas: RefObject<HTMLCanvasElement | null>,
  option?: RipplesOptions,
): RefObject<Ripples | null> {
  /**  react dom  */
  const ripples = useRef<Ripples>(null);

  // 初始化数据
  useEffect(() => {
    /**  非空检验（这里一般都是有值的，除非故障）  */
    if (isNull(canvas.current)) return;
    try {
      ripples.current = new Ripples(canvas.current, option);
    } catch (error) {
      if (dun) {
        dog.error('初始化 Ripple 原始类有误', error);
      }
    }
    return () => ripples.current?.destroy();
  }, []);

  return ripples;
}

export { Ripples };

export type { RipplesOptions };
