/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getProjectBySlug($slug: String!) {\n  project(where: {slug: $slug}, stage: PUBLISHED) {\n    id\n    slug\n    title\n    updatedAt\n    videoLink\n    image {\n      ogImage: url(\n        transformation: {image: {resize: {height: 300, width: 400, fit: clip}}}\n      )\n    }\n    description {\n      html\n      text\n    }\n    tags {\n      tagName\n      tagSlugName\n    }\n  }\n}": types.GetProjectBySlugDocument,
    "query getProjectsByTag($tagSlugName: String!) {\n  tag(where: {tagSlugName: $tagSlugName}, stage: PUBLISHED) {\n    tagName\n    description\n    projects {\n      slug\n      title\n      tags {\n        tagName\n        tagSlugName\n      }\n      image {\n        blurUrl: url(\n          transformation: {image: {quality: {value: 1}, resize: {height: 300, width: 300}}}\n        )\n        url\n      }\n    }\n  }\n}": types.GetProjectsByTagDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getProjectBySlug($slug: String!) {\n  project(where: {slug: $slug}, stage: PUBLISHED) {\n    id\n    slug\n    title\n    updatedAt\n    videoLink\n    image {\n      ogImage: url(\n        transformation: {image: {resize: {height: 300, width: 400, fit: clip}}}\n      )\n    }\n    description {\n      html\n      text\n    }\n    tags {\n      tagName\n      tagSlugName\n    }\n  }\n}"): (typeof documents)["query getProjectBySlug($slug: String!) {\n  project(where: {slug: $slug}, stage: PUBLISHED) {\n    id\n    slug\n    title\n    updatedAt\n    videoLink\n    image {\n      ogImage: url(\n        transformation: {image: {resize: {height: 300, width: 400, fit: clip}}}\n      )\n    }\n    description {\n      html\n      text\n    }\n    tags {\n      tagName\n      tagSlugName\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getProjectsByTag($tagSlugName: String!) {\n  tag(where: {tagSlugName: $tagSlugName}, stage: PUBLISHED) {\n    tagName\n    description\n    projects {\n      slug\n      title\n      tags {\n        tagName\n        tagSlugName\n      }\n      image {\n        blurUrl: url(\n          transformation: {image: {quality: {value: 1}, resize: {height: 300, width: 300}}}\n        )\n        url\n      }\n    }\n  }\n}"): (typeof documents)["query getProjectsByTag($tagSlugName: String!) {\n  tag(where: {tagSlugName: $tagSlugName}, stage: PUBLISHED) {\n    tagName\n    description\n    projects {\n      slug\n      title\n      tags {\n        tagName\n        tagSlugName\n      }\n      image {\n        blurUrl: url(\n          transformation: {image: {quality: {value: 1}, resize: {height: 300, width: 300}}}\n        )\n        url\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;