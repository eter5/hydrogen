import {HydrogenRequest} from '../../foundation/HydrogenRequest/HydrogenRequest.server.jsx';
import {HydrogenResponse} from '../../foundation/HydrogenResponse/HydrogenResponse.server.jsx';
import {QueryKey} from '../../types.js';
import {hashKey} from '../hash.js';
import {findQueryName, parseUrl} from './utils.js';
import {gray} from 'kolorist';
import {getLoggerWithContext} from './log.js';

import type {RenderType} from './log.js';

const color = gray;

export type QueryCacheControlHeaders = {
  name: string;
  header: string | null;
};

export function collectQueryCacheControlHeaders(
  request: HydrogenRequest,
  queryKey: QueryKey,
  cacheControlHeader: string | null
) {
  request.ctx.queryCacheControl.push({
    name: findQueryName(hashKey(queryKey)),
    header: cacheControlHeader,
  });
}

export function logCacheControlHeaders(
  type: RenderType,
  request: HydrogenRequest,
  response?: HydrogenResponse
) {
  const log = getLoggerWithContext(request);
  if (!log.options().showCacheControlHeader) {
    return;
  }

  log.debug(
    color(`┌── Cache control header for ${parseUrl(type, request.url)}`)
  );
  if (response) {
    log.debug(color(`│ ${response.cacheControlHeader}`));
  }

  const queryList = request.ctx.queryCacheControl;
  const longestQueryNameLength = queryList.reduce(
    (max: number, query: QueryCacheControlHeaders) =>
      Math.max(max, query.name.length),
    0
  );

  if (queryList.length > 0) {
    log.debug(color('│'));
    queryList.forEach((query: QueryCacheControlHeaders) => {
      log.debug(
        color(
          `│ query ${query.name.padEnd(longestQueryNameLength + 1)}${
            query.header
          }`
        )
      );
    });
  }

  log.debug(color('└──'));
}
