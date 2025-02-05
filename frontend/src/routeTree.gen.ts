/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as SearchIndexImport } from './routes/search/index'
import { Route as ProfileUserIdImport } from './routes/profile/$userId'
import { Route as PostCreateImport } from './routes/post/create'
import { Route as PostPostIdImport } from './routes/post/$postId'
import { Route as EditPostIdImport } from './routes/edit/$postId'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SearchIndexRoute = SearchIndexImport.update({
  id: '/search/',
  path: '/search/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileUserIdRoute = ProfileUserIdImport.update({
  id: '/profile/$userId',
  path: '/profile/$userId',
  getParentRoute: () => rootRoute,
} as any)

const PostCreateRoute = PostCreateImport.update({
  id: '/post/create',
  path: '/post/create',
  getParentRoute: () => rootRoute,
} as any)

const PostPostIdRoute = PostPostIdImport.update({
  id: '/post/$postId',
  path: '/post/$postId',
  getParentRoute: () => rootRoute,
} as any)

const EditPostIdRoute = EditPostIdImport.update({
  id: '/edit/$postId',
  path: '/edit/$postId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/edit/$postId': {
      id: '/edit/$postId'
      path: '/edit/$postId'
      fullPath: '/edit/$postId'
      preLoaderRoute: typeof EditPostIdImport
      parentRoute: typeof rootRoute
    }
    '/post/$postId': {
      id: '/post/$postId'
      path: '/post/$postId'
      fullPath: '/post/$postId'
      preLoaderRoute: typeof PostPostIdImport
      parentRoute: typeof rootRoute
    }
    '/post/create': {
      id: '/post/create'
      path: '/post/create'
      fullPath: '/post/create'
      preLoaderRoute: typeof PostCreateImport
      parentRoute: typeof rootRoute
    }
    '/profile/$userId': {
      id: '/profile/$userId'
      path: '/profile/$userId'
      fullPath: '/profile/$userId'
      preLoaderRoute: typeof ProfileUserIdImport
      parentRoute: typeof rootRoute
    }
    '/search/': {
      id: '/search/'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/edit/$postId': typeof EditPostIdRoute
  '/post/$postId': typeof PostPostIdRoute
  '/post/create': typeof PostCreateRoute
  '/profile/$userId': typeof ProfileUserIdRoute
  '/search': typeof SearchIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/edit/$postId': typeof EditPostIdRoute
  '/post/$postId': typeof PostPostIdRoute
  '/post/create': typeof PostCreateRoute
  '/profile/$userId': typeof ProfileUserIdRoute
  '/search': typeof SearchIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/edit/$postId': typeof EditPostIdRoute
  '/post/$postId': typeof PostPostIdRoute
  '/post/create': typeof PostCreateRoute
  '/profile/$userId': typeof ProfileUserIdRoute
  '/search/': typeof SearchIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/register'
    | '/edit/$postId'
    | '/post/$postId'
    | '/post/create'
    | '/profile/$userId'
    | '/search'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/register'
    | '/edit/$postId'
    | '/post/$postId'
    | '/post/create'
    | '/profile/$userId'
    | '/search'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/register'
    | '/edit/$postId'
    | '/post/$postId'
    | '/post/create'
    | '/profile/$userId'
    | '/search/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginRoute: typeof LoginRoute
  RegisterRoute: typeof RegisterRoute
  EditPostIdRoute: typeof EditPostIdRoute
  PostPostIdRoute: typeof PostPostIdRoute
  PostCreateRoute: typeof PostCreateRoute
  ProfileUserIdRoute: typeof ProfileUserIdRoute
  SearchIndexRoute: typeof SearchIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRoute,
  RegisterRoute: RegisterRoute,
  EditPostIdRoute: EditPostIdRoute,
  PostPostIdRoute: PostPostIdRoute,
  PostCreateRoute: PostCreateRoute,
  ProfileUserIdRoute: ProfileUserIdRoute,
  SearchIndexRoute: SearchIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/login",
        "/register",
        "/edit/$postId",
        "/post/$postId",
        "/post/create",
        "/profile/$userId",
        "/search/"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/login": {
      "filePath": "login.jsx"
    },
    "/register": {
      "filePath": "register.jsx"
    },
    "/edit/$postId": {
      "filePath": "edit/$postId.jsx"
    },
    "/post/$postId": {
      "filePath": "post/$postId.jsx"
    },
    "/post/create": {
      "filePath": "post/create.jsx"
    },
    "/profile/$userId": {
      "filePath": "profile/$userId.jsx"
    },
    "/search/": {
      "filePath": "search/index.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
