
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Bookmark
 * ブックマーク
 * 
 * @namespace ブックマーク
 */
export type Bookmark = $Result.DefaultSelection<Prisma.$BookmarkPayload>
/**
 * Model GoogleUser
 * Googleユーザー
 * 
 * - https://developers.google.com/identity/openid-connect/openid-connect?hl=ja#an-id-tokens-payload
 * 
 * @namespace 認証
 */
export type GoogleUser = $Result.DefaultSelection<Prisma.$GoogleUserPayload>
/**
 * Model Passkey
 * Passkey
 * 
 * - https://simplewebauthn.dev/docs/packages/server#additional-data-structures
 * 
 * @namespace 認証
 */
export type Passkey = $Result.DefaultSelection<Prisma.$PasskeyPayload>
/**
 * Model User
 * ユーザー
 * 
 * @namespace 認証
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookmarks
 * const bookmarks = await prisma.bookmark.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookmarks
   * const bookmarks = await prisma.bookmark.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<ExtArgs>;

  /**
   * `prisma.googleUser`: Exposes CRUD operations for the **GoogleUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoogleUsers
    * const googleUsers = await prisma.googleUser.findMany()
    * ```
    */
  get googleUser(): Prisma.GoogleUserDelegate<ExtArgs>;

  /**
   * `prisma.passkey`: Exposes CRUD operations for the **Passkey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passkeys
    * const passkeys = await prisma.passkey.findMany()
    * ```
    */
  get passkey(): Prisma.PasskeyDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.0
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Bookmark: 'Bookmark',
    GoogleUser: 'GoogleUser',
    Passkey: 'Passkey',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "bookmark" | "googleUser" | "passkey" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bookmark: {
        payload: Prisma.$BookmarkPayload<ExtArgs>
        fields: Prisma.BookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findFirst: {
            args: Prisma.BookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findMany: {
            args: Prisma.BookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          create: {
            args: Prisma.BookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          createMany: {
            args: Prisma.BookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          update: {
            args: Prisma.BookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.BookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
          }
        }
      }
      GoogleUser: {
        payload: Prisma.$GoogleUserPayload<ExtArgs>
        fields: Prisma.GoogleUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoogleUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoogleUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          findFirst: {
            args: Prisma.GoogleUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoogleUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          findMany: {
            args: Prisma.GoogleUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>[]
          }
          create: {
            args: Prisma.GoogleUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          createMany: {
            args: Prisma.GoogleUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GoogleUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          update: {
            args: Prisma.GoogleUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          deleteMany: {
            args: Prisma.GoogleUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoogleUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GoogleUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          aggregate: {
            args: Prisma.GoogleUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoogleUser>
          }
          groupBy: {
            args: Prisma.GoogleUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoogleUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoogleUserCountArgs<ExtArgs>
            result: $Utils.Optional<GoogleUserCountAggregateOutputType> | number
          }
        }
      }
      Passkey: {
        payload: Prisma.$PasskeyPayload<ExtArgs>
        fields: Prisma.PasskeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasskeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasskeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          findFirst: {
            args: Prisma.PasskeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasskeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          findMany: {
            args: Prisma.PasskeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>[]
          }
          create: {
            args: Prisma.PasskeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          createMany: {
            args: Prisma.PasskeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PasskeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          update: {
            args: Prisma.PasskeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          deleteMany: {
            args: Prisma.PasskeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasskeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PasskeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          aggregate: {
            args: Prisma.PasskeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasskey>
          }
          groupBy: {
            args: Prisma.PasskeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasskeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasskeyCountArgs<ExtArgs>
            result: $Utils.Optional<PasskeyCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookmarks: number
    googleUsers: number
    passkeys: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
    googleUsers?: boolean | UserCountOutputTypeCountGoogleUsersArgs
    passkeys?: boolean | UserCountOutputTypeCountPasskeysArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoogleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoogleUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasskeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasskeyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _avg: BookmarkAvgAggregateOutputType | null
    _sum: BookmarkSumAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    clickCount: number | null
  }

  export type BookmarkSumAggregateOutputType = {
    id: number | null
    userId: number | null
    clickCount: number | null
  }

  export type BookmarkMinAggregateOutputType = {
    id: number | null
    userId: number | null
    url: string | null
    title: string | null
    imageUrl: string | null
    clickCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BookmarkMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    url: string | null
    title: string | null
    imageUrl: string | null
    clickCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BookmarkCountAggregateOutputType = {
    id: number
    userId: number
    url: number
    title: number
    imageUrl: number
    clickCount: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type BookmarkAvgAggregateInputType = {
    id?: true
    userId?: true
    clickCount?: true
  }

  export type BookmarkSumAggregateInputType = {
    id?: true
    userId?: true
    clickCount?: true
  }

  export type BookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    url?: true
    title?: true
    imageUrl?: true
    clickCount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    url?: true
    title?: true
    imageUrl?: true
    clickCount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    url?: true
    title?: true
    imageUrl?: true
    clickCount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookmarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookmarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithAggregationInput | BookmarkOrderByWithAggregationInput[]
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: BookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _avg?: BookmarkAvgAggregateInputType
    _sum?: BookmarkSumAggregateInputType
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    id: number
    userId: number
    url: string
    title: string
    imageUrl: string | null
    clickCount: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: BookmarkCountAggregateOutputType | null
    _avg: BookmarkAvgAggregateOutputType | null
    _sum: BookmarkSumAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    url?: boolean
    title?: boolean
    imageUrl?: boolean
    clickCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>


  export type BookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    url?: boolean
    title?: boolean
    imageUrl?: boolean
    clickCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type BookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      /**
       * URL
       */
      url: string
      /**
       * ページタイトル
       */
      title: string
      /**
       * ページサムネイル
       */
      imageUrl: string | null
      /**
       * クリックカウント
       */
      clickCount: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }

  type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = $Result.GetResult<Prisma.$BookmarkPayload, S>

  type BookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'], meta: { name: 'Bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkFindUniqueArgs>(args: SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bookmark that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkFindFirstArgs>(args?: SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkFindManyArgs>(args?: SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
     */
    create<T extends BookmarkCreateArgs>(args: SelectSubset<T, BookmarkCreateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bookmarks.
     * @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkCreateManyArgs>(args?: SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
     */
    delete<T extends BookmarkDeleteArgs>(args: SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkUpdateArgs>(args: SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkDeleteManyArgs>(args?: SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkUpdateManyArgs>(args: SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkUpsertArgs>(args: SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmark model
   */
  readonly fields: BookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bookmark model
   */ 
  interface BookmarkFieldRefs {
    readonly id: FieldRef<"Bookmark", 'Int'>
    readonly userId: FieldRef<"Bookmark", 'Int'>
    readonly url: FieldRef<"Bookmark", 'String'>
    readonly title: FieldRef<"Bookmark", 'String'>
    readonly imageUrl: FieldRef<"Bookmark", 'String'>
    readonly clickCount: FieldRef<"Bookmark", 'Int'>
    readonly createdAt: FieldRef<"Bookmark", 'DateTime'>
    readonly updatedAt: FieldRef<"Bookmark", 'DateTime'>
    readonly deletedAt: FieldRef<"Bookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmark findUnique
   */
  export type BookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findFirst
   */
  export type BookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }

  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
  }

  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }

  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput
  }

  /**
   * Bookmark without action
   */
  export type BookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
  }


  /**
   * Model GoogleUser
   */

  export type AggregateGoogleUser = {
    _count: GoogleUserCountAggregateOutputType | null
    _avg: GoogleUserAvgAggregateOutputType | null
    _sum: GoogleUserSumAggregateOutputType | null
    _min: GoogleUserMinAggregateOutputType | null
    _max: GoogleUserMaxAggregateOutputType | null
  }

  export type GoogleUserAvgAggregateOutputType = {
    userId: number | null
  }

  export type GoogleUserSumAggregateOutputType = {
    userId: number | null
  }

  export type GoogleUserMinAggregateOutputType = {
    userId: number | null
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GoogleUserMaxAggregateOutputType = {
    userId: number | null
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GoogleUserCountAggregateOutputType = {
    userId: number
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type GoogleUserAvgAggregateInputType = {
    userId?: true
  }

  export type GoogleUserSumAggregateInputType = {
    userId?: true
  }

  export type GoogleUserMinAggregateInputType = {
    userId?: true
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GoogleUserMaxAggregateInputType = {
    userId?: true
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GoogleUserCountAggregateInputType = {
    userId?: true
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type GoogleUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleUser to aggregate.
     */
    where?: GoogleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleUsers to fetch.
     */
    orderBy?: GoogleUserOrderByWithRelationInput | GoogleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoogleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoogleUsers
    **/
    _count?: true | GoogleUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoogleUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoogleUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoogleUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoogleUserMaxAggregateInputType
  }

  export type GetGoogleUserAggregateType<T extends GoogleUserAggregateArgs> = {
        [P in keyof T & keyof AggregateGoogleUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoogleUser[P]>
      : GetScalarType<T[P], AggregateGoogleUser[P]>
  }




  export type GoogleUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoogleUserWhereInput
    orderBy?: GoogleUserOrderByWithAggregationInput | GoogleUserOrderByWithAggregationInput[]
    by: GoogleUserScalarFieldEnum[] | GoogleUserScalarFieldEnum
    having?: GoogleUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoogleUserCountAggregateInputType | true
    _avg?: GoogleUserAvgAggregateInputType
    _sum?: GoogleUserSumAggregateInputType
    _min?: GoogleUserMinAggregateInputType
    _max?: GoogleUserMaxAggregateInputType
  }

  export type GoogleUserGroupByOutputType = {
    userId: number
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: GoogleUserCountAggregateOutputType | null
    _avg: GoogleUserAvgAggregateOutputType | null
    _sum: GoogleUserSumAggregateOutputType | null
    _min: GoogleUserMinAggregateOutputType | null
    _max: GoogleUserMaxAggregateOutputType | null
  }

  type GetGoogleUserGroupByPayload<T extends GoogleUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoogleUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoogleUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoogleUserGroupByOutputType[P]>
            : GetScalarType<T[P], GoogleUserGroupByOutputType[P]>
        }
      >
    >


  export type GoogleUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleUser"]>


  export type GoogleUserSelectScalar = {
    userId?: boolean
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type GoogleUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoogleUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoogleUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      /**
       * ユーザーの識別子。
       * すべての Google アカウントの中で一意であり、再利用されることはありません。
       * Google アカウントは、異なる時点で複数のメールアドレスを持つことができますが、sub 値は変更されません。
       */
      id: string
      /**
       * ユーザーのメールアドレス。
       * このクレームの値はこのアカウントに対して一意ではなく、時間の経過とともに変化する可能性があるため、ユーザー レコードにリンクするメインの識別子としてこの値を使用しないでください。
       */
      email: string
      /**
       * 表示可能な形式でのユーザーの氏名。
       */
      name: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["googleUser"]>
    composites: {}
  }

  type GoogleUserGetPayload<S extends boolean | null | undefined | GoogleUserDefaultArgs> = $Result.GetResult<Prisma.$GoogleUserPayload, S>

  type GoogleUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GoogleUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoogleUserCountAggregateInputType | true
    }

  export interface GoogleUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoogleUser'], meta: { name: 'GoogleUser' } }
    /**
     * Find zero or one GoogleUser that matches the filter.
     * @param {GoogleUserFindUniqueArgs} args - Arguments to find a GoogleUser
     * @example
     * // Get one GoogleUser
     * const googleUser = await prisma.googleUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoogleUserFindUniqueArgs>(args: SelectSubset<T, GoogleUserFindUniqueArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GoogleUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GoogleUserFindUniqueOrThrowArgs} args - Arguments to find a GoogleUser
     * @example
     * // Get one GoogleUser
     * const googleUser = await prisma.googleUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoogleUserFindUniqueOrThrowArgs>(args: SelectSubset<T, GoogleUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GoogleUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserFindFirstArgs} args - Arguments to find a GoogleUser
     * @example
     * // Get one GoogleUser
     * const googleUser = await prisma.googleUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoogleUserFindFirstArgs>(args?: SelectSubset<T, GoogleUserFindFirstArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GoogleUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserFindFirstOrThrowArgs} args - Arguments to find a GoogleUser
     * @example
     * // Get one GoogleUser
     * const googleUser = await prisma.googleUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoogleUserFindFirstOrThrowArgs>(args?: SelectSubset<T, GoogleUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GoogleUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoogleUsers
     * const googleUsers = await prisma.googleUser.findMany()
     * 
     * // Get first 10 GoogleUsers
     * const googleUsers = await prisma.googleUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const googleUserWithUserIdOnly = await prisma.googleUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends GoogleUserFindManyArgs>(args?: SelectSubset<T, GoogleUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GoogleUser.
     * @param {GoogleUserCreateArgs} args - Arguments to create a GoogleUser.
     * @example
     * // Create one GoogleUser
     * const GoogleUser = await prisma.googleUser.create({
     *   data: {
     *     // ... data to create a GoogleUser
     *   }
     * })
     * 
     */
    create<T extends GoogleUserCreateArgs>(args: SelectSubset<T, GoogleUserCreateArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GoogleUsers.
     * @param {GoogleUserCreateManyArgs} args - Arguments to create many GoogleUsers.
     * @example
     * // Create many GoogleUsers
     * const googleUser = await prisma.googleUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoogleUserCreateManyArgs>(args?: SelectSubset<T, GoogleUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GoogleUser.
     * @param {GoogleUserDeleteArgs} args - Arguments to delete one GoogleUser.
     * @example
     * // Delete one GoogleUser
     * const GoogleUser = await prisma.googleUser.delete({
     *   where: {
     *     // ... filter to delete one GoogleUser
     *   }
     * })
     * 
     */
    delete<T extends GoogleUserDeleteArgs>(args: SelectSubset<T, GoogleUserDeleteArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GoogleUser.
     * @param {GoogleUserUpdateArgs} args - Arguments to update one GoogleUser.
     * @example
     * // Update one GoogleUser
     * const googleUser = await prisma.googleUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoogleUserUpdateArgs>(args: SelectSubset<T, GoogleUserUpdateArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GoogleUsers.
     * @param {GoogleUserDeleteManyArgs} args - Arguments to filter GoogleUsers to delete.
     * @example
     * // Delete a few GoogleUsers
     * const { count } = await prisma.googleUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoogleUserDeleteManyArgs>(args?: SelectSubset<T, GoogleUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoogleUsers
     * const googleUser = await prisma.googleUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoogleUserUpdateManyArgs>(args: SelectSubset<T, GoogleUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GoogleUser.
     * @param {GoogleUserUpsertArgs} args - Arguments to update or create a GoogleUser.
     * @example
     * // Update or create a GoogleUser
     * const googleUser = await prisma.googleUser.upsert({
     *   create: {
     *     // ... data to create a GoogleUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoogleUser we want to update
     *   }
     * })
     */
    upsert<T extends GoogleUserUpsertArgs>(args: SelectSubset<T, GoogleUserUpsertArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GoogleUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserCountArgs} args - Arguments to filter GoogleUsers to count.
     * @example
     * // Count the number of GoogleUsers
     * const count = await prisma.googleUser.count({
     *   where: {
     *     // ... the filter for the GoogleUsers we want to count
     *   }
     * })
    **/
    count<T extends GoogleUserCountArgs>(
      args?: Subset<T, GoogleUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoogleUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoogleUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoogleUserAggregateArgs>(args: Subset<T, GoogleUserAggregateArgs>): Prisma.PrismaPromise<GetGoogleUserAggregateType<T>>

    /**
     * Group by GoogleUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoogleUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoogleUserGroupByArgs['orderBy'] }
        : { orderBy?: GoogleUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoogleUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoogleUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoogleUser model
   */
  readonly fields: GoogleUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoogleUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoogleUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GoogleUser model
   */ 
  interface GoogleUserFieldRefs {
    readonly userId: FieldRef<"GoogleUser", 'Int'>
    readonly id: FieldRef<"GoogleUser", 'String'>
    readonly email: FieldRef<"GoogleUser", 'String'>
    readonly name: FieldRef<"GoogleUser", 'String'>
    readonly createdAt: FieldRef<"GoogleUser", 'DateTime'>
    readonly updatedAt: FieldRef<"GoogleUser", 'DateTime'>
    readonly deletedAt: FieldRef<"GoogleUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoogleUser findUnique
   */
  export type GoogleUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter, which GoogleUser to fetch.
     */
    where: GoogleUserWhereUniqueInput
  }

  /**
   * GoogleUser findUniqueOrThrow
   */
  export type GoogleUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter, which GoogleUser to fetch.
     */
    where: GoogleUserWhereUniqueInput
  }

  /**
   * GoogleUser findFirst
   */
  export type GoogleUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter, which GoogleUser to fetch.
     */
    where?: GoogleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleUsers to fetch.
     */
    orderBy?: GoogleUserOrderByWithRelationInput | GoogleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleUsers.
     */
    cursor?: GoogleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleUsers.
     */
    distinct?: GoogleUserScalarFieldEnum | GoogleUserScalarFieldEnum[]
  }

  /**
   * GoogleUser findFirstOrThrow
   */
  export type GoogleUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter, which GoogleUser to fetch.
     */
    where?: GoogleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleUsers to fetch.
     */
    orderBy?: GoogleUserOrderByWithRelationInput | GoogleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleUsers.
     */
    cursor?: GoogleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleUsers.
     */
    distinct?: GoogleUserScalarFieldEnum | GoogleUserScalarFieldEnum[]
  }

  /**
   * GoogleUser findMany
   */
  export type GoogleUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter, which GoogleUsers to fetch.
     */
    where?: GoogleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleUsers to fetch.
     */
    orderBy?: GoogleUserOrderByWithRelationInput | GoogleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoogleUsers.
     */
    cursor?: GoogleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleUsers.
     */
    skip?: number
    distinct?: GoogleUserScalarFieldEnum | GoogleUserScalarFieldEnum[]
  }

  /**
   * GoogleUser create
   */
  export type GoogleUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * The data needed to create a GoogleUser.
     */
    data: XOR<GoogleUserCreateInput, GoogleUserUncheckedCreateInput>
  }

  /**
   * GoogleUser createMany
   */
  export type GoogleUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoogleUsers.
     */
    data: GoogleUserCreateManyInput | GoogleUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoogleUser update
   */
  export type GoogleUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * The data needed to update a GoogleUser.
     */
    data: XOR<GoogleUserUpdateInput, GoogleUserUncheckedUpdateInput>
    /**
     * Choose, which GoogleUser to update.
     */
    where: GoogleUserWhereUniqueInput
  }

  /**
   * GoogleUser updateMany
   */
  export type GoogleUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoogleUsers.
     */
    data: XOR<GoogleUserUpdateManyMutationInput, GoogleUserUncheckedUpdateManyInput>
    /**
     * Filter which GoogleUsers to update
     */
    where?: GoogleUserWhereInput
  }

  /**
   * GoogleUser upsert
   */
  export type GoogleUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * The filter to search for the GoogleUser to update in case it exists.
     */
    where: GoogleUserWhereUniqueInput
    /**
     * In case the GoogleUser found by the `where` argument doesn't exist, create a new GoogleUser with this data.
     */
    create: XOR<GoogleUserCreateInput, GoogleUserUncheckedCreateInput>
    /**
     * In case the GoogleUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoogleUserUpdateInput, GoogleUserUncheckedUpdateInput>
  }

  /**
   * GoogleUser delete
   */
  export type GoogleUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter which GoogleUser to delete.
     */
    where: GoogleUserWhereUniqueInput
  }

  /**
   * GoogleUser deleteMany
   */
  export type GoogleUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleUsers to delete
     */
    where?: GoogleUserWhereInput
  }

  /**
   * GoogleUser without action
   */
  export type GoogleUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
  }


  /**
   * Model Passkey
   */

  export type AggregatePasskey = {
    _count: PasskeyCountAggregateOutputType | null
    _avg: PasskeyAvgAggregateOutputType | null
    _sum: PasskeySumAggregateOutputType | null
    _min: PasskeyMinAggregateOutputType | null
    _max: PasskeyMaxAggregateOutputType | null
  }

  export type PasskeyAvgAggregateOutputType = {
    userId: number | null
    counter: number | null
  }

  export type PasskeySumAggregateOutputType = {
    userId: number | null
    counter: bigint | null
  }

  export type PasskeyMinAggregateOutputType = {
    userId: number | null
    id: string | null
    publicKey: Buffer | null
    counter: bigint | null
    deviceType: string | null
    backedUp: boolean | null
    transports: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PasskeyMaxAggregateOutputType = {
    userId: number | null
    id: string | null
    publicKey: Buffer | null
    counter: bigint | null
    deviceType: string | null
    backedUp: boolean | null
    transports: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PasskeyCountAggregateOutputType = {
    userId: number
    id: number
    publicKey: number
    counter: number
    deviceType: number
    backedUp: number
    transports: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PasskeyAvgAggregateInputType = {
    userId?: true
    counter?: true
  }

  export type PasskeySumAggregateInputType = {
    userId?: true
    counter?: true
  }

  export type PasskeyMinAggregateInputType = {
    userId?: true
    id?: true
    publicKey?: true
    counter?: true
    deviceType?: true
    backedUp?: true
    transports?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PasskeyMaxAggregateInputType = {
    userId?: true
    id?: true
    publicKey?: true
    counter?: true
    deviceType?: true
    backedUp?: true
    transports?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PasskeyCountAggregateInputType = {
    userId?: true
    id?: true
    publicKey?: true
    counter?: true
    deviceType?: true
    backedUp?: true
    transports?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PasskeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passkey to aggregate.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passkeys
    **/
    _count?: true | PasskeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasskeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasskeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasskeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasskeyMaxAggregateInputType
  }

  export type GetPasskeyAggregateType<T extends PasskeyAggregateArgs> = {
        [P in keyof T & keyof AggregatePasskey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasskey[P]>
      : GetScalarType<T[P], AggregatePasskey[P]>
  }




  export type PasskeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasskeyWhereInput
    orderBy?: PasskeyOrderByWithAggregationInput | PasskeyOrderByWithAggregationInput[]
    by: PasskeyScalarFieldEnum[] | PasskeyScalarFieldEnum
    having?: PasskeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasskeyCountAggregateInputType | true
    _avg?: PasskeyAvgAggregateInputType
    _sum?: PasskeySumAggregateInputType
    _min?: PasskeyMinAggregateInputType
    _max?: PasskeyMaxAggregateInputType
  }

  export type PasskeyGroupByOutputType = {
    userId: number
    id: string
    publicKey: Buffer
    counter: bigint
    deviceType: string
    backedUp: boolean
    transports: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PasskeyCountAggregateOutputType | null
    _avg: PasskeyAvgAggregateOutputType | null
    _sum: PasskeySumAggregateOutputType | null
    _min: PasskeyMinAggregateOutputType | null
    _max: PasskeyMaxAggregateOutputType | null
  }

  type GetPasskeyGroupByPayload<T extends PasskeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasskeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasskeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasskeyGroupByOutputType[P]>
            : GetScalarType<T[P], PasskeyGroupByOutputType[P]>
        }
      >
    >


  export type PasskeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    id?: boolean
    publicKey?: boolean
    counter?: boolean
    deviceType?: boolean
    backedUp?: boolean
    transports?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passkey"]>


  export type PasskeySelectScalar = {
    userId?: boolean
    id?: boolean
    publicKey?: boolean
    counter?: boolean
    deviceType?: boolean
    backedUp?: boolean
    transports?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PasskeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasskeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passkey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      /**
       * The credential's credential ID for the public key
       */
      id: string
      /**
       * The credential's public key
       */
      publicKey: Buffer
      /**
       * The number of times the authenticator reported it has been used.  
       * **Should be kept in a DB for later reference to help prevent replay attacks!**
       */
      counter: bigint
      /**
       * Whether this is a single-device or multi-device credential.  
       * **Should be kept in a DB for later reference!**
       */
      deviceType: string
      /**
       * Whether or not the multi-device credential has been backed up.  
       * Always `false` for single-device credentials.   
       * **Should be kept in a DB for later reference!**
       */
      backedUp: boolean
      /**
       * The transports of the credential record.  
       * `'ble' | 'cable' | 'hybrid' | 'internal' | 'nfc' | 'smart-card' | 'usb'`
       */
      transports: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["passkey"]>
    composites: {}
  }

  type PasskeyGetPayload<S extends boolean | null | undefined | PasskeyDefaultArgs> = $Result.GetResult<Prisma.$PasskeyPayload, S>

  type PasskeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PasskeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PasskeyCountAggregateInputType | true
    }

  export interface PasskeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passkey'], meta: { name: 'Passkey' } }
    /**
     * Find zero or one Passkey that matches the filter.
     * @param {PasskeyFindUniqueArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasskeyFindUniqueArgs>(args: SelectSubset<T, PasskeyFindUniqueArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Passkey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PasskeyFindUniqueOrThrowArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasskeyFindUniqueOrThrowArgs>(args: SelectSubset<T, PasskeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Passkey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyFindFirstArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasskeyFindFirstArgs>(args?: SelectSubset<T, PasskeyFindFirstArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Passkey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyFindFirstOrThrowArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasskeyFindFirstOrThrowArgs>(args?: SelectSubset<T, PasskeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Passkeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passkeys
     * const passkeys = await prisma.passkey.findMany()
     * 
     * // Get first 10 Passkeys
     * const passkeys = await prisma.passkey.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const passkeyWithUserIdOnly = await prisma.passkey.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends PasskeyFindManyArgs>(args?: SelectSubset<T, PasskeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Passkey.
     * @param {PasskeyCreateArgs} args - Arguments to create a Passkey.
     * @example
     * // Create one Passkey
     * const Passkey = await prisma.passkey.create({
     *   data: {
     *     // ... data to create a Passkey
     *   }
     * })
     * 
     */
    create<T extends PasskeyCreateArgs>(args: SelectSubset<T, PasskeyCreateArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Passkeys.
     * @param {PasskeyCreateManyArgs} args - Arguments to create many Passkeys.
     * @example
     * // Create many Passkeys
     * const passkey = await prisma.passkey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasskeyCreateManyArgs>(args?: SelectSubset<T, PasskeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Passkey.
     * @param {PasskeyDeleteArgs} args - Arguments to delete one Passkey.
     * @example
     * // Delete one Passkey
     * const Passkey = await prisma.passkey.delete({
     *   where: {
     *     // ... filter to delete one Passkey
     *   }
     * })
     * 
     */
    delete<T extends PasskeyDeleteArgs>(args: SelectSubset<T, PasskeyDeleteArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Passkey.
     * @param {PasskeyUpdateArgs} args - Arguments to update one Passkey.
     * @example
     * // Update one Passkey
     * const passkey = await prisma.passkey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasskeyUpdateArgs>(args: SelectSubset<T, PasskeyUpdateArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Passkeys.
     * @param {PasskeyDeleteManyArgs} args - Arguments to filter Passkeys to delete.
     * @example
     * // Delete a few Passkeys
     * const { count } = await prisma.passkey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasskeyDeleteManyArgs>(args?: SelectSubset<T, PasskeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passkeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passkeys
     * const passkey = await prisma.passkey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasskeyUpdateManyArgs>(args: SelectSubset<T, PasskeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Passkey.
     * @param {PasskeyUpsertArgs} args - Arguments to update or create a Passkey.
     * @example
     * // Update or create a Passkey
     * const passkey = await prisma.passkey.upsert({
     *   create: {
     *     // ... data to create a Passkey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passkey we want to update
     *   }
     * })
     */
    upsert<T extends PasskeyUpsertArgs>(args: SelectSubset<T, PasskeyUpsertArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Passkeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyCountArgs} args - Arguments to filter Passkeys to count.
     * @example
     * // Count the number of Passkeys
     * const count = await prisma.passkey.count({
     *   where: {
     *     // ... the filter for the Passkeys we want to count
     *   }
     * })
    **/
    count<T extends PasskeyCountArgs>(
      args?: Subset<T, PasskeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasskeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passkey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasskeyAggregateArgs>(args: Subset<T, PasskeyAggregateArgs>): Prisma.PrismaPromise<GetPasskeyAggregateType<T>>

    /**
     * Group by Passkey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasskeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasskeyGroupByArgs['orderBy'] }
        : { orderBy?: PasskeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasskeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasskeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passkey model
   */
  readonly fields: PasskeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passkey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasskeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Passkey model
   */ 
  interface PasskeyFieldRefs {
    readonly userId: FieldRef<"Passkey", 'Int'>
    readonly id: FieldRef<"Passkey", 'String'>
    readonly publicKey: FieldRef<"Passkey", 'Bytes'>
    readonly counter: FieldRef<"Passkey", 'BigInt'>
    readonly deviceType: FieldRef<"Passkey", 'String'>
    readonly backedUp: FieldRef<"Passkey", 'Boolean'>
    readonly transports: FieldRef<"Passkey", 'String'>
    readonly createdAt: FieldRef<"Passkey", 'DateTime'>
    readonly updatedAt: FieldRef<"Passkey", 'DateTime'>
    readonly deletedAt: FieldRef<"Passkey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Passkey findUnique
   */
  export type PasskeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey findUniqueOrThrow
   */
  export type PasskeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey findFirst
   */
  export type PasskeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passkeys.
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passkeys.
     */
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * Passkey findFirstOrThrow
   */
  export type PasskeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passkeys.
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passkeys.
     */
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * Passkey findMany
   */
  export type PasskeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkeys to fetch.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passkeys.
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * Passkey create
   */
  export type PasskeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * The data needed to create a Passkey.
     */
    data: XOR<PasskeyCreateInput, PasskeyUncheckedCreateInput>
  }

  /**
   * Passkey createMany
   */
  export type PasskeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passkeys.
     */
    data: PasskeyCreateManyInput | PasskeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passkey update
   */
  export type PasskeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * The data needed to update a Passkey.
     */
    data: XOR<PasskeyUpdateInput, PasskeyUncheckedUpdateInput>
    /**
     * Choose, which Passkey to update.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey updateMany
   */
  export type PasskeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passkeys.
     */
    data: XOR<PasskeyUpdateManyMutationInput, PasskeyUncheckedUpdateManyInput>
    /**
     * Filter which Passkeys to update
     */
    where?: PasskeyWhereInput
  }

  /**
   * Passkey upsert
   */
  export type PasskeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * The filter to search for the Passkey to update in case it exists.
     */
    where: PasskeyWhereUniqueInput
    /**
     * In case the Passkey found by the `where` argument doesn't exist, create a new Passkey with this data.
     */
    create: XOR<PasskeyCreateInput, PasskeyUncheckedCreateInput>
    /**
     * In case the Passkey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasskeyUpdateInput, PasskeyUncheckedUpdateInput>
  }

  /**
   * Passkey delete
   */
  export type PasskeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter which Passkey to delete.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey deleteMany
   */
  export type PasskeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passkeys to delete
     */
    where?: PasskeyWhereInput
  }

  /**
   * Passkey without action
   */
  export type PasskeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    googleUsers?: boolean | User$googleUsersArgs<ExtArgs>
    passkeys?: boolean | User$passkeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    googleUsers?: boolean | User$googleUsersArgs<ExtArgs>
    passkeys?: boolean | User$passkeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
      googleUsers: Prisma.$GoogleUserPayload<ExtArgs>[]
      passkeys: Prisma.$PasskeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany"> | Null>
    googleUsers<T extends User$googleUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$googleUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findMany"> | Null>
    passkeys<T extends User$passkeysArgs<ExtArgs> = {}>(args?: Subset<T, User$passkeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * User.googleUsers
   */
  export type User$googleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    where?: GoogleUserWhereInput
    orderBy?: GoogleUserOrderByWithRelationInput | GoogleUserOrderByWithRelationInput[]
    cursor?: GoogleUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoogleUserScalarFieldEnum | GoogleUserScalarFieldEnum[]
  }

  /**
   * User.passkeys
   */
  export type User$passkeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    where?: PasskeyWhereInput
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    cursor?: PasskeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    url: 'url',
    title: 'title',
    imageUrl: 'imageUrl',
    clickCount: 'clickCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


  export const GoogleUserScalarFieldEnum: {
    userId: 'userId',
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type GoogleUserScalarFieldEnum = (typeof GoogleUserScalarFieldEnum)[keyof typeof GoogleUserScalarFieldEnum]


  export const PasskeyScalarFieldEnum: {
    userId: 'userId',
    id: 'id',
    publicKey: 'publicKey',
    counter: 'counter',
    deviceType: 'deviceType',
    backedUp: 'backedUp',
    transports: 'transports',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PasskeyScalarFieldEnum = (typeof PasskeyScalarFieldEnum)[keyof typeof PasskeyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BookmarkWhereInput = {
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    id?: IntFilter<"Bookmark"> | number
    userId?: IntFilter<"Bookmark"> | number
    url?: StringFilter<"Bookmark"> | string
    title?: StringFilter<"Bookmark"> | string
    imageUrl?: StringNullableFilter<"Bookmark"> | string | null
    clickCount?: IntFilter<"Bookmark"> | number
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    updatedAt?: DateTimeFilter<"Bookmark"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Bookmark"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    userId?: IntFilter<"Bookmark"> | number
    url?: StringFilter<"Bookmark"> | string
    title?: StringFilter<"Bookmark"> | string
    imageUrl?: StringNullableFilter<"Bookmark"> | string | null
    clickCount?: IntFilter<"Bookmark"> | number
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    updatedAt?: DateTimeFilter<"Bookmark"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Bookmark"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type BookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: BookmarkCountOrderByAggregateInput
    _avg?: BookmarkAvgOrderByAggregateInput
    _max?: BookmarkMaxOrderByAggregateInput
    _min?: BookmarkMinOrderByAggregateInput
    _sum?: BookmarkSumOrderByAggregateInput
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    OR?: BookmarkScalarWhereWithAggregatesInput[]
    NOT?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bookmark"> | number
    userId?: IntWithAggregatesFilter<"Bookmark"> | number
    url?: StringWithAggregatesFilter<"Bookmark"> | string
    title?: StringWithAggregatesFilter<"Bookmark"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Bookmark"> | string | null
    clickCount?: IntWithAggregatesFilter<"Bookmark"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Bookmark"> | Date | string | null
  }

  export type GoogleUserWhereInput = {
    AND?: GoogleUserWhereInput | GoogleUserWhereInput[]
    OR?: GoogleUserWhereInput[]
    NOT?: GoogleUserWhereInput | GoogleUserWhereInput[]
    userId?: IntFilter<"GoogleUser"> | number
    id?: StringFilter<"GoogleUser"> | string
    email?: StringFilter<"GoogleUser"> | string
    name?: StringNullableFilter<"GoogleUser"> | string | null
    createdAt?: DateTimeFilter<"GoogleUser"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GoogleUser"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GoogleUserOrderByWithRelationInput = {
    userId?: SortOrder
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoogleUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoogleUserWhereInput | GoogleUserWhereInput[]
    OR?: GoogleUserWhereInput[]
    NOT?: GoogleUserWhereInput | GoogleUserWhereInput[]
    userId?: IntFilter<"GoogleUser"> | number
    email?: StringFilter<"GoogleUser"> | string
    name?: StringNullableFilter<"GoogleUser"> | string | null
    createdAt?: DateTimeFilter<"GoogleUser"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GoogleUser"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type GoogleUserOrderByWithAggregationInput = {
    userId?: SortOrder
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: GoogleUserCountOrderByAggregateInput
    _avg?: GoogleUserAvgOrderByAggregateInput
    _max?: GoogleUserMaxOrderByAggregateInput
    _min?: GoogleUserMinOrderByAggregateInput
    _sum?: GoogleUserSumOrderByAggregateInput
  }

  export type GoogleUserScalarWhereWithAggregatesInput = {
    AND?: GoogleUserScalarWhereWithAggregatesInput | GoogleUserScalarWhereWithAggregatesInput[]
    OR?: GoogleUserScalarWhereWithAggregatesInput[]
    NOT?: GoogleUserScalarWhereWithAggregatesInput | GoogleUserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"GoogleUser"> | number
    id?: StringWithAggregatesFilter<"GoogleUser"> | string
    email?: StringWithAggregatesFilter<"GoogleUser"> | string
    name?: StringNullableWithAggregatesFilter<"GoogleUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GoogleUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoogleUser"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"GoogleUser"> | Date | string | null
  }

  export type PasskeyWhereInput = {
    AND?: PasskeyWhereInput | PasskeyWhereInput[]
    OR?: PasskeyWhereInput[]
    NOT?: PasskeyWhereInput | PasskeyWhereInput[]
    userId?: IntFilter<"Passkey"> | number
    id?: StringFilter<"Passkey"> | string
    publicKey?: BytesFilter<"Passkey"> | Buffer
    counter?: BigIntFilter<"Passkey"> | bigint | number
    deviceType?: StringFilter<"Passkey"> | string
    backedUp?: BoolFilter<"Passkey"> | boolean
    transports?: StringFilter<"Passkey"> | string
    createdAt?: DateTimeFilter<"Passkey"> | Date | string
    updatedAt?: DateTimeFilter<"Passkey"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Passkey"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PasskeyOrderByWithRelationInput = {
    userId?: SortOrder
    id?: SortOrder
    publicKey?: SortOrder
    counter?: SortOrder
    deviceType?: SortOrder
    backedUp?: SortOrder
    transports?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasskeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PasskeyWhereInput | PasskeyWhereInput[]
    OR?: PasskeyWhereInput[]
    NOT?: PasskeyWhereInput | PasskeyWhereInput[]
    userId?: IntFilter<"Passkey"> | number
    publicKey?: BytesFilter<"Passkey"> | Buffer
    counter?: BigIntFilter<"Passkey"> | bigint | number
    deviceType?: StringFilter<"Passkey"> | string
    backedUp?: BoolFilter<"Passkey"> | boolean
    transports?: StringFilter<"Passkey"> | string
    createdAt?: DateTimeFilter<"Passkey"> | Date | string
    updatedAt?: DateTimeFilter<"Passkey"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Passkey"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PasskeyOrderByWithAggregationInput = {
    userId?: SortOrder
    id?: SortOrder
    publicKey?: SortOrder
    counter?: SortOrder
    deviceType?: SortOrder
    backedUp?: SortOrder
    transports?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PasskeyCountOrderByAggregateInput
    _avg?: PasskeyAvgOrderByAggregateInput
    _max?: PasskeyMaxOrderByAggregateInput
    _min?: PasskeyMinOrderByAggregateInput
    _sum?: PasskeySumOrderByAggregateInput
  }

  export type PasskeyScalarWhereWithAggregatesInput = {
    AND?: PasskeyScalarWhereWithAggregatesInput | PasskeyScalarWhereWithAggregatesInput[]
    OR?: PasskeyScalarWhereWithAggregatesInput[]
    NOT?: PasskeyScalarWhereWithAggregatesInput | PasskeyScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Passkey"> | number
    id?: StringWithAggregatesFilter<"Passkey"> | string
    publicKey?: BytesWithAggregatesFilter<"Passkey"> | Buffer
    counter?: BigIntWithAggregatesFilter<"Passkey"> | bigint | number
    deviceType?: StringWithAggregatesFilter<"Passkey"> | string
    backedUp?: BoolWithAggregatesFilter<"Passkey"> | boolean
    transports?: StringWithAggregatesFilter<"Passkey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Passkey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Passkey"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Passkey"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    bookmarks?: BookmarkListRelationFilter
    googleUsers?: GoogleUserListRelationFilter
    passkeys?: PasskeyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    bookmarks?: BookmarkOrderByRelationAggregateInput
    googleUsers?: GoogleUserOrderByRelationAggregateInput
    passkeys?: PasskeyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    bookmarks?: BookmarkListRelationFilter
    googleUsers?: GoogleUserListRelationFilter
    passkeys?: PasskeyListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type BookmarkCreateInput = {
    url: string
    title: string
    imageUrl?: string | null
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateInput = {
    id?: number
    userId: number
    url: string
    title: string
    imageUrl?: string | null
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BookmarkUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookmarkCreateManyInput = {
    id?: number
    userId: number
    url: string
    title: string
    imageUrl?: string | null
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BookmarkUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookmarkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GoogleUserCreateInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutGoogleUsersInput
  }

  export type GoogleUserUncheckedCreateInput = {
    userId: number
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GoogleUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutGoogleUsersNestedInput
  }

  export type GoogleUserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GoogleUserCreateManyInput = {
    userId: number
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GoogleUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GoogleUserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyCreateInput = {
    id: string
    publicKey: Buffer
    counter: bigint | number
    deviceType: string
    backedUp: boolean
    transports: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutPasskeysInput
  }

  export type PasskeyUncheckedCreateInput = {
    userId: number
    id: string
    publicKey: Buffer
    counter: bigint | number
    deviceType: string
    backedUp: boolean
    transports: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PasskeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: BytesFieldUpdateOperationsInput | Buffer
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPasskeysNestedInput
  }

  export type PasskeyUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: BytesFieldUpdateOperationsInput | Buffer
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyCreateManyInput = {
    userId: number
    id: string
    publicKey: Buffer
    counter: bigint | number
    deviceType: string
    backedUp: boolean
    transports: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PasskeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: BytesFieldUpdateOperationsInput | Buffer
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: BytesFieldUpdateOperationsInput | Buffer
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    googleUsers?: GoogleUserCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    googleUsers?: GoogleUserUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    googleUsers?: GoogleUserUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    googleUsers?: GoogleUserUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BookmarkAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clickCount?: SortOrder
  }

  export type BookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BookmarkSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clickCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GoogleUserCountOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GoogleUserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type GoogleUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GoogleUserMinOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GoogleUserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PasskeyCountOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    publicKey?: SortOrder
    counter?: SortOrder
    deviceType?: SortOrder
    backedUp?: SortOrder
    transports?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PasskeyAvgOrderByAggregateInput = {
    userId?: SortOrder
    counter?: SortOrder
  }

  export type PasskeyMaxOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    publicKey?: SortOrder
    counter?: SortOrder
    deviceType?: SortOrder
    backedUp?: SortOrder
    transports?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PasskeyMinOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    publicKey?: SortOrder
    counter?: SortOrder
    deviceType?: SortOrder
    backedUp?: SortOrder
    transports?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PasskeySumOrderByAggregateInput = {
    userId?: SortOrder
    counter?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput
    some?: BookmarkWhereInput
    none?: BookmarkWhereInput
  }

  export type GoogleUserListRelationFilter = {
    every?: GoogleUserWhereInput
    some?: GoogleUserWhereInput
    none?: GoogleUserWhereInput
  }

  export type PasskeyListRelationFilter = {
    every?: PasskeyWhereInput
    some?: PasskeyWhereInput
    none?: PasskeyWhereInput
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoogleUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasskeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    upsert?: UserUpsertWithoutBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserCreateNestedOneWithoutGoogleUsersInput = {
    create?: XOR<UserCreateWithoutGoogleUsersInput, UserUncheckedCreateWithoutGoogleUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoogleUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGoogleUsersNestedInput = {
    create?: XOR<UserCreateWithoutGoogleUsersInput, UserUncheckedCreateWithoutGoogleUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoogleUsersInput
    upsert?: UserUpsertWithoutGoogleUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoogleUsersInput, UserUpdateWithoutGoogleUsersInput>, UserUncheckedUpdateWithoutGoogleUsersInput>
  }

  export type UserCreateNestedOneWithoutPasskeysInput = {
    create?: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasskeysInput
    connect?: UserWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPasskeysNestedInput = {
    create?: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasskeysInput
    upsert?: UserUpsertWithoutPasskeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasskeysInput, UserUpdateWithoutPasskeysInput>, UserUncheckedUpdateWithoutPasskeysInput>
  }

  export type BookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type GoogleUserCreateNestedManyWithoutUserInput = {
    create?: XOR<GoogleUserCreateWithoutUserInput, GoogleUserUncheckedCreateWithoutUserInput> | GoogleUserCreateWithoutUserInput[] | GoogleUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoogleUserCreateOrConnectWithoutUserInput | GoogleUserCreateOrConnectWithoutUserInput[]
    createMany?: GoogleUserCreateManyUserInputEnvelope
    connect?: GoogleUserWhereUniqueInput | GoogleUserWhereUniqueInput[]
  }

  export type PasskeyCreateNestedManyWithoutUserInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type GoogleUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoogleUserCreateWithoutUserInput, GoogleUserUncheckedCreateWithoutUserInput> | GoogleUserCreateWithoutUserInput[] | GoogleUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoogleUserCreateOrConnectWithoutUserInput | GoogleUserCreateOrConnectWithoutUserInput[]
    createMany?: GoogleUserCreateManyUserInputEnvelope
    connect?: GoogleUserWhereUniqueInput | GoogleUserWhereUniqueInput[]
  }

  export type PasskeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
  }

  export type BookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type GoogleUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoogleUserCreateWithoutUserInput, GoogleUserUncheckedCreateWithoutUserInput> | GoogleUserCreateWithoutUserInput[] | GoogleUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoogleUserCreateOrConnectWithoutUserInput | GoogleUserCreateOrConnectWithoutUserInput[]
    upsert?: GoogleUserUpsertWithWhereUniqueWithoutUserInput | GoogleUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoogleUserCreateManyUserInputEnvelope
    set?: GoogleUserWhereUniqueInput | GoogleUserWhereUniqueInput[]
    disconnect?: GoogleUserWhereUniqueInput | GoogleUserWhereUniqueInput[]
    delete?: GoogleUserWhereUniqueInput | GoogleUserWhereUniqueInput[]
    connect?: GoogleUserWhereUniqueInput | GoogleUserWhereUniqueInput[]
    update?: GoogleUserUpdateWithWhereUniqueWithoutUserInput | GoogleUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoogleUserUpdateManyWithWhereWithoutUserInput | GoogleUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoogleUserScalarWhereInput | GoogleUserScalarWhereInput[]
  }

  export type PasskeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    upsert?: PasskeyUpsertWithWhereUniqueWithoutUserInput | PasskeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    set?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    disconnect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    delete?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    update?: PasskeyUpdateWithWhereUniqueWithoutUserInput | PasskeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasskeyUpdateManyWithWhereWithoutUserInput | PasskeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type GoogleUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoogleUserCreateWithoutUserInput, GoogleUserUncheckedCreateWithoutUserInput> | GoogleUserCreateWithoutUserInput[] | GoogleUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoogleUserCreateOrConnectWithoutUserInput | GoogleUserCreateOrConnectWithoutUserInput[]
    upsert?: GoogleUserUpsertWithWhereUniqueWithoutUserInput | GoogleUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoogleUserCreateManyUserInputEnvelope
    set?: GoogleUserWhereUniqueInput | GoogleUserWhereUniqueInput[]
    disconnect?: GoogleUserWhereUniqueInput | GoogleUserWhereUniqueInput[]
    delete?: GoogleUserWhereUniqueInput | GoogleUserWhereUniqueInput[]
    connect?: GoogleUserWhereUniqueInput | GoogleUserWhereUniqueInput[]
    update?: GoogleUserUpdateWithWhereUniqueWithoutUserInput | GoogleUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoogleUserUpdateManyWithWhereWithoutUserInput | GoogleUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoogleUserScalarWhereInput | GoogleUserScalarWhereInput[]
  }

  export type PasskeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    upsert?: PasskeyUpsertWithWhereUniqueWithoutUserInput | PasskeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    set?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    disconnect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    delete?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    update?: PasskeyUpdateWithWhereUniqueWithoutUserInput | PasskeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasskeyUpdateManyWithWhereWithoutUserInput | PasskeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutBookmarksInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    googleUsers?: GoogleUserCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    googleUsers?: GoogleUserUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleUsers?: GoogleUserUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleUsers?: GoogleUserUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGoogleUsersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoogleUsersInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoogleUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoogleUsersInput, UserUncheckedCreateWithoutGoogleUsersInput>
  }

  export type UserUpsertWithoutGoogleUsersInput = {
    update: XOR<UserUpdateWithoutGoogleUsersInput, UserUncheckedUpdateWithoutGoogleUsersInput>
    create: XOR<UserCreateWithoutGoogleUsersInput, UserUncheckedCreateWithoutGoogleUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoogleUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoogleUsersInput, UserUncheckedUpdateWithoutGoogleUsersInput>
  }

  export type UserUpdateWithoutGoogleUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoogleUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasskeysInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    googleUsers?: GoogleUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasskeysInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    googleUsers?: GoogleUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasskeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
  }

  export type UserUpsertWithoutPasskeysInput = {
    update: XOR<UserUpdateWithoutPasskeysInput, UserUncheckedUpdateWithoutPasskeysInput>
    create: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasskeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasskeysInput, UserUncheckedUpdateWithoutPasskeysInput>
  }

  export type UserUpdateWithoutPasskeysInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    googleUsers?: GoogleUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasskeysInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    googleUsers?: GoogleUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookmarkCreateWithoutUserInput = {
    url: string
    title: string
    imageUrl?: string | null
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BookmarkUncheckedCreateWithoutUserInput = {
    id?: number
    url: string
    title: string
    imageUrl?: string | null
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BookmarkCreateOrConnectWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCreateManyUserInputEnvelope = {
    data: BookmarkCreateManyUserInput | BookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoogleUserCreateWithoutUserInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GoogleUserUncheckedCreateWithoutUserInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GoogleUserCreateOrConnectWithoutUserInput = {
    where: GoogleUserWhereUniqueInput
    create: XOR<GoogleUserCreateWithoutUserInput, GoogleUserUncheckedCreateWithoutUserInput>
  }

  export type GoogleUserCreateManyUserInputEnvelope = {
    data: GoogleUserCreateManyUserInput | GoogleUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasskeyCreateWithoutUserInput = {
    id: string
    publicKey: Buffer
    counter: bigint | number
    deviceType: string
    backedUp: boolean
    transports: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PasskeyUncheckedCreateWithoutUserInput = {
    id: string
    publicKey: Buffer
    counter: bigint | number
    deviceType: string
    backedUp: boolean
    transports: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PasskeyCreateOrConnectWithoutUserInput = {
    where: PasskeyWhereUniqueInput
    create: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput>
  }

  export type PasskeyCreateManyUserInputEnvelope = {
    data: PasskeyCreateManyUserInput | PasskeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    OR?: BookmarkScalarWhereInput[]
    NOT?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    id?: IntFilter<"Bookmark"> | number
    userId?: IntFilter<"Bookmark"> | number
    url?: StringFilter<"Bookmark"> | string
    title?: StringFilter<"Bookmark"> | string
    imageUrl?: StringNullableFilter<"Bookmark"> | string | null
    clickCount?: IntFilter<"Bookmark"> | number
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    updatedAt?: DateTimeFilter<"Bookmark"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Bookmark"> | Date | string | null
  }

  export type GoogleUserUpsertWithWhereUniqueWithoutUserInput = {
    where: GoogleUserWhereUniqueInput
    update: XOR<GoogleUserUpdateWithoutUserInput, GoogleUserUncheckedUpdateWithoutUserInput>
    create: XOR<GoogleUserCreateWithoutUserInput, GoogleUserUncheckedCreateWithoutUserInput>
  }

  export type GoogleUserUpdateWithWhereUniqueWithoutUserInput = {
    where: GoogleUserWhereUniqueInput
    data: XOR<GoogleUserUpdateWithoutUserInput, GoogleUserUncheckedUpdateWithoutUserInput>
  }

  export type GoogleUserUpdateManyWithWhereWithoutUserInput = {
    where: GoogleUserScalarWhereInput
    data: XOR<GoogleUserUpdateManyMutationInput, GoogleUserUncheckedUpdateManyWithoutUserInput>
  }

  export type GoogleUserScalarWhereInput = {
    AND?: GoogleUserScalarWhereInput | GoogleUserScalarWhereInput[]
    OR?: GoogleUserScalarWhereInput[]
    NOT?: GoogleUserScalarWhereInput | GoogleUserScalarWhereInput[]
    userId?: IntFilter<"GoogleUser"> | number
    id?: StringFilter<"GoogleUser"> | string
    email?: StringFilter<"GoogleUser"> | string
    name?: StringNullableFilter<"GoogleUser"> | string | null
    createdAt?: DateTimeFilter<"GoogleUser"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GoogleUser"> | Date | string | null
  }

  export type PasskeyUpsertWithWhereUniqueWithoutUserInput = {
    where: PasskeyWhereUniqueInput
    update: XOR<PasskeyUpdateWithoutUserInput, PasskeyUncheckedUpdateWithoutUserInput>
    create: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput>
  }

  export type PasskeyUpdateWithWhereUniqueWithoutUserInput = {
    where: PasskeyWhereUniqueInput
    data: XOR<PasskeyUpdateWithoutUserInput, PasskeyUncheckedUpdateWithoutUserInput>
  }

  export type PasskeyUpdateManyWithWhereWithoutUserInput = {
    where: PasskeyScalarWhereInput
    data: XOR<PasskeyUpdateManyMutationInput, PasskeyUncheckedUpdateManyWithoutUserInput>
  }

  export type PasskeyScalarWhereInput = {
    AND?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
    OR?: PasskeyScalarWhereInput[]
    NOT?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
    userId?: IntFilter<"Passkey"> | number
    id?: StringFilter<"Passkey"> | string
    publicKey?: BytesFilter<"Passkey"> | Buffer
    counter?: BigIntFilter<"Passkey"> | bigint | number
    deviceType?: StringFilter<"Passkey"> | string
    backedUp?: BoolFilter<"Passkey"> | boolean
    transports?: StringFilter<"Passkey"> | string
    createdAt?: DateTimeFilter<"Passkey"> | Date | string
    updatedAt?: DateTimeFilter<"Passkey"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Passkey"> | Date | string | null
  }

  export type BookmarkCreateManyUserInput = {
    id?: number
    url: string
    title: string
    imageUrl?: string | null
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GoogleUserCreateManyUserInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PasskeyCreateManyUserInput = {
    id: string
    publicKey: Buffer
    counter: bigint | number
    deviceType: string
    backedUp: boolean
    transports: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BookmarkUpdateWithoutUserInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookmarkUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GoogleUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GoogleUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GoogleUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: BytesFieldUpdateOperationsInput | Buffer
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: BytesFieldUpdateOperationsInput | Buffer
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: BytesFieldUpdateOperationsInput | Buffer
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookmarkDefaultArgs instead
     */
    export type BookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookmarkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoogleUserDefaultArgs instead
     */
    export type GoogleUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoogleUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PasskeyDefaultArgs instead
     */
    export type PasskeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PasskeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}