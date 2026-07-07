/**
 * @module @vvi/react-hooks/useTimeId
 * @file useTimeId.ts
 * @description 使用定时器返回的时间戳
 * @author MrMudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ MrMudBean
 * @since 2025-01-07 11:20
 * @version 2.0.0-alpha.0
 * @lastModified 2026-07-06 17:13
 */

'use client';

import { useEffect, useRef } from 'react';

/**
 * # 导出一个使用 `useRef` 创建的 `NodeJS.Timeout`
 *
 * 该数值在组件卸载时会自动调用 `clearTimeout` 清理
 * @see   [useTimeId](https://npm.lmssee.com/react-hooks/use-time-id)
 * @example
 * ```ts
 * import { useTimeId } from '@vvi/react-hooks';
 *
 * ...
 *
 * const timeoutId = useTimeId();
 *
 * useEffect(()=>{
 *     timeoutId.current = setTimeout(()=>{
 *         ...
 *     } ,delay);
 *  });
 * ...
 * ```
 * 其实，正确的用法是这样的：
 * ```ts
 *  useEffect(()=>{
 *    const timeId = setTimeout(()=>{
 *        ...
 *    }, delay) ;
 *
 *     return ()=> timeId && clearTimeout(timeId);
 *  });
 * ```
 */
export function useTimeId() {
  const timeId = useRef<number>(undefined);
  useEffect(
    () => () => (timeId.current && clearTimeout(timeId.current)) || undefined,
    [],
  );
  return timeId;
}
