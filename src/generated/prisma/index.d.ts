
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
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model Socials
 * 
 */
export type Socials = $Result.DefaultSelection<Prisma.$SocialsPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostTech
 * 
 */
export type PostTech = $Result.DefaultSelection<Prisma.$PostTechPayload>
/**
 * Model PageTech
 * 
 */
export type PageTech = $Result.DefaultSelection<Prisma.$PageTechPayload>
/**
 * Model Sections
 * 
 */
export type Sections = $Result.DefaultSelection<Prisma.$SectionsPayload>
/**
 * Model ShortDescription
 * 
 */
export type ShortDescription = $Result.DefaultSelection<Prisma.$ShortDescriptionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PostStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]

}

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pages
 * const pages = await prisma.page.findMany()
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
   * // Fetch zero or more Pages
   * const pages = await prisma.page.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socials`: Exposes CRUD operations for the **Socials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socials
    * const socials = await prisma.socials.findMany()
    * ```
    */
  get socials(): Prisma.SocialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postTech`: Exposes CRUD operations for the **PostTech** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTeches
    * const postTeches = await prisma.postTech.findMany()
    * ```
    */
  get postTech(): Prisma.PostTechDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageTech`: Exposes CRUD operations for the **PageTech** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageTeches
    * const pageTeches = await prisma.pageTech.findMany()
    * ```
    */
  get pageTech(): Prisma.PageTechDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sections`: Exposes CRUD operations for the **Sections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.sections.findMany()
    * ```
    */
  get sections(): Prisma.SectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shortDescription`: Exposes CRUD operations for the **ShortDescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShortDescriptions
    * const shortDescriptions = await prisma.shortDescription.findMany()
    * ```
    */
  get shortDescription(): Prisma.ShortDescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Page: 'Page',
    Socials: 'Socials',
    Post: 'Post',
    PostTech: 'PostTech',
    PageTech: 'PageTech',
    Sections: 'Sections',
    ShortDescription: 'ShortDescription',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "page" | "socials" | "post" | "postTech" | "pageTech" | "sections" | "shortDescription" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      Socials: {
        payload: Prisma.$SocialsPayload<ExtArgs>
        fields: Prisma.SocialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          findFirst: {
            args: Prisma.SocialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          findMany: {
            args: Prisma.SocialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>[]
          }
          create: {
            args: Prisma.SocialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          createMany: {
            args: Prisma.SocialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>[]
          }
          delete: {
            args: Prisma.SocialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          update: {
            args: Prisma.SocialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          deleteMany: {
            args: Prisma.SocialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>[]
          }
          upsert: {
            args: Prisma.SocialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          aggregate: {
            args: Prisma.SocialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocials>
          }
          groupBy: {
            args: Prisma.SocialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialsCountArgs<ExtArgs>
            result: $Utils.Optional<SocialsCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostTech: {
        payload: Prisma.$PostTechPayload<ExtArgs>
        fields: Prisma.PostTechFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostTechFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostTechFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload>
          }
          findFirst: {
            args: Prisma.PostTechFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostTechFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload>
          }
          findMany: {
            args: Prisma.PostTechFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload>[]
          }
          create: {
            args: Prisma.PostTechCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload>
          }
          createMany: {
            args: Prisma.PostTechCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostTechCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload>[]
          }
          delete: {
            args: Prisma.PostTechDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload>
          }
          update: {
            args: Prisma.PostTechUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload>
          }
          deleteMany: {
            args: Prisma.PostTechDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostTechUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostTechUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload>[]
          }
          upsert: {
            args: Prisma.PostTechUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTechPayload>
          }
          aggregate: {
            args: Prisma.PostTechAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostTech>
          }
          groupBy: {
            args: Prisma.PostTechGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostTechGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostTechCountArgs<ExtArgs>
            result: $Utils.Optional<PostTechCountAggregateOutputType> | number
          }
        }
      }
      PageTech: {
        payload: Prisma.$PageTechPayload<ExtArgs>
        fields: Prisma.PageTechFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageTechFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageTechFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload>
          }
          findFirst: {
            args: Prisma.PageTechFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageTechFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload>
          }
          findMany: {
            args: Prisma.PageTechFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload>[]
          }
          create: {
            args: Prisma.PageTechCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload>
          }
          createMany: {
            args: Prisma.PageTechCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageTechCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload>[]
          }
          delete: {
            args: Prisma.PageTechDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload>
          }
          update: {
            args: Prisma.PageTechUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload>
          }
          deleteMany: {
            args: Prisma.PageTechDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageTechUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageTechUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload>[]
          }
          upsert: {
            args: Prisma.PageTechUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageTechPayload>
          }
          aggregate: {
            args: Prisma.PageTechAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageTech>
          }
          groupBy: {
            args: Prisma.PageTechGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageTechGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageTechCountArgs<ExtArgs>
            result: $Utils.Optional<PageTechCountAggregateOutputType> | number
          }
        }
      }
      Sections: {
        payload: Prisma.$SectionsPayload<ExtArgs>
        fields: Prisma.SectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload>
          }
          findFirst: {
            args: Prisma.SectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload>
          }
          findMany: {
            args: Prisma.SectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload>[]
          }
          create: {
            args: Prisma.SectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload>
          }
          createMany: {
            args: Prisma.SectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload>[]
          }
          delete: {
            args: Prisma.SectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload>
          }
          update: {
            args: Prisma.SectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload>
          }
          deleteMany: {
            args: Prisma.SectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload>[]
          }
          upsert: {
            args: Prisma.SectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionsPayload>
          }
          aggregate: {
            args: Prisma.SectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSections>
          }
          groupBy: {
            args: Prisma.SectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionsCountArgs<ExtArgs>
            result: $Utils.Optional<SectionsCountAggregateOutputType> | number
          }
        }
      }
      ShortDescription: {
        payload: Prisma.$ShortDescriptionPayload<ExtArgs>
        fields: Prisma.ShortDescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShortDescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShortDescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload>
          }
          findFirst: {
            args: Prisma.ShortDescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShortDescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload>
          }
          findMany: {
            args: Prisma.ShortDescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload>[]
          }
          create: {
            args: Prisma.ShortDescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload>
          }
          createMany: {
            args: Prisma.ShortDescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShortDescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload>[]
          }
          delete: {
            args: Prisma.ShortDescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload>
          }
          update: {
            args: Prisma.ShortDescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload>
          }
          deleteMany: {
            args: Prisma.ShortDescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShortDescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShortDescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload>[]
          }
          upsert: {
            args: Prisma.ShortDescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortDescriptionPayload>
          }
          aggregate: {
            args: Prisma.ShortDescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShortDescription>
          }
          groupBy: {
            args: Prisma.ShortDescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShortDescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShortDescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<ShortDescriptionCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    page?: PageOmit
    socials?: SocialsOmit
    post?: PostOmit
    postTech?: PostTechOmit
    pageTech?: PageTechOmit
    sections?: SectionsOmit
    shortDescription?: ShortDescriptionOmit
    user?: UserOmit
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
    | 'updateManyAndReturn'
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
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    techs: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techs?: boolean | PageCountOutputTypeCountTechsArgs
  }

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountTechsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageTechWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    shortDescription: number
    techs: number
    sections: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortDescription?: boolean | PostCountOutputTypeCountShortDescriptionArgs
    techs?: boolean | PostCountOutputTypeCountTechsArgs
    sections?: boolean | PostCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountShortDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortDescriptionWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTechsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTechWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageAvgAggregateOutputType = {
    id: number | null
  }

  export type PageSumAggregateOutputType = {
    id: number | null
  }

  export type PageMinAggregateOutputType = {
    id: number | null
    name: string | null
    introduction: string | null
    avatar: string | null
  }

  export type PageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    introduction: string | null
    avatar: string | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    name: number
    introduction: number
    avatar: number
    _all: number
  }


  export type PageAvgAggregateInputType = {
    id?: true
  }

  export type PageSumAggregateInputType = {
    id?: true
  }

  export type PageMinAggregateInputType = {
    id?: true
    name?: true
    introduction?: true
    avatar?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    name?: true
    introduction?: true
    avatar?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    name?: true
    introduction?: true
    avatar?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _avg?: PageAvgAggregateInputType
    _sum?: PageSumAggregateInputType
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: number
    name: string
    introduction: string
    avatar: string
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    introduction?: boolean
    avatar?: boolean
    techs?: boolean | Page$techsArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    introduction?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    introduction?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    name?: boolean
    introduction?: boolean
    avatar?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "introduction" | "avatar", ExtArgs["result"]["page"]>
  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techs?: boolean | Page$techsArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      techs: Prisma.$PageTechPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      introduction: string
      avatar: string
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
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
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    techs<T extends Page$techsArgs<ExtArgs> = {}>(args?: Subset<T, Page$techsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'Int'>
    readonly name: FieldRef<"Page", 'String'>
    readonly introduction: FieldRef<"Page", 'String'>
    readonly avatar: FieldRef<"Page", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page.techs
   */
  export type Page$techsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
    where?: PageTechWhereInput
    orderBy?: PageTechOrderByWithRelationInput | PageTechOrderByWithRelationInput[]
    cursor?: PageTechWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageTechScalarFieldEnum | PageTechScalarFieldEnum[]
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
  }


  /**
   * Model Socials
   */

  export type AggregateSocials = {
    _count: SocialsCountAggregateOutputType | null
    _avg: SocialsAvgAggregateOutputType | null
    _sum: SocialsSumAggregateOutputType | null
    _min: SocialsMinAggregateOutputType | null
    _max: SocialsMaxAggregateOutputType | null
  }

  export type SocialsAvgAggregateOutputType = {
    id: number | null
  }

  export type SocialsSumAggregateOutputType = {
    id: number | null
  }

  export type SocialsMinAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialsCountAggregateOutputType = {
    id: number
    name: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialsAvgAggregateInputType = {
    id?: true
  }

  export type SocialsSumAggregateInputType = {
    id?: true
  }

  export type SocialsMinAggregateInputType = {
    id?: true
    name?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialsMaxAggregateInputType = {
    id?: true
    name?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialsCountAggregateInputType = {
    id?: true
    name?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socials to aggregate.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socials
    **/
    _count?: true | SocialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialsMaxAggregateInputType
  }

  export type GetSocialsAggregateType<T extends SocialsAggregateArgs> = {
        [P in keyof T & keyof AggregateSocials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocials[P]>
      : GetScalarType<T[P], AggregateSocials[P]>
  }




  export type SocialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialsWhereInput
    orderBy?: SocialsOrderByWithAggregationInput | SocialsOrderByWithAggregationInput[]
    by: SocialsScalarFieldEnum[] | SocialsScalarFieldEnum
    having?: SocialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialsCountAggregateInputType | true
    _avg?: SocialsAvgAggregateInputType
    _sum?: SocialsSumAggregateInputType
    _min?: SocialsMinAggregateInputType
    _max?: SocialsMaxAggregateInputType
  }

  export type SocialsGroupByOutputType = {
    id: number
    name: string
    link: string
    createdAt: Date
    updatedAt: Date
    _count: SocialsCountAggregateOutputType | null
    _avg: SocialsAvgAggregateOutputType | null
    _sum: SocialsSumAggregateOutputType | null
    _min: SocialsMinAggregateOutputType | null
    _max: SocialsMaxAggregateOutputType | null
  }

  type GetSocialsGroupByPayload<T extends SocialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialsGroupByOutputType[P]>
            : GetScalarType<T[P], SocialsGroupByOutputType[P]>
        }
      >
    >


  export type SocialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socials"]>

  export type SocialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socials"]>

  export type SocialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socials"]>

  export type SocialsSelectScalar = {
    id?: boolean
    name?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "link" | "createdAt" | "updatedAt", ExtArgs["result"]["socials"]>

  export type $SocialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Socials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      link: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["socials"]>
    composites: {}
  }

  type SocialsGetPayload<S extends boolean | null | undefined | SocialsDefaultArgs> = $Result.GetResult<Prisma.$SocialsPayload, S>

  type SocialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialsCountAggregateInputType | true
    }

  export interface SocialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Socials'], meta: { name: 'Socials' } }
    /**
     * Find zero or one Socials that matches the filter.
     * @param {SocialsFindUniqueArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialsFindUniqueArgs>(args: SelectSubset<T, SocialsFindUniqueArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Socials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialsFindUniqueOrThrowArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialsFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsFindFirstArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialsFindFirstArgs>(args?: SelectSubset<T, SocialsFindFirstArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsFindFirstOrThrowArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialsFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socials
     * const socials = await prisma.socials.findMany()
     * 
     * // Get first 10 Socials
     * const socials = await prisma.socials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialsWithIdOnly = await prisma.socials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialsFindManyArgs>(args?: SelectSubset<T, SocialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Socials.
     * @param {SocialsCreateArgs} args - Arguments to create a Socials.
     * @example
     * // Create one Socials
     * const Socials = await prisma.socials.create({
     *   data: {
     *     // ... data to create a Socials
     *   }
     * })
     * 
     */
    create<T extends SocialsCreateArgs>(args: SelectSubset<T, SocialsCreateArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socials.
     * @param {SocialsCreateManyArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const socials = await prisma.socials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialsCreateManyArgs>(args?: SelectSubset<T, SocialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Socials and returns the data saved in the database.
     * @param {SocialsCreateManyAndReturnArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const socials = await prisma.socials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Socials and only return the `id`
     * const socialsWithIdOnly = await prisma.socials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialsCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Socials.
     * @param {SocialsDeleteArgs} args - Arguments to delete one Socials.
     * @example
     * // Delete one Socials
     * const Socials = await prisma.socials.delete({
     *   where: {
     *     // ... filter to delete one Socials
     *   }
     * })
     * 
     */
    delete<T extends SocialsDeleteArgs>(args: SelectSubset<T, SocialsDeleteArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Socials.
     * @param {SocialsUpdateArgs} args - Arguments to update one Socials.
     * @example
     * // Update one Socials
     * const socials = await prisma.socials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialsUpdateArgs>(args: SelectSubset<T, SocialsUpdateArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socials.
     * @param {SocialsDeleteManyArgs} args - Arguments to filter Socials to delete.
     * @example
     * // Delete a few Socials
     * const { count } = await prisma.socials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialsDeleteManyArgs>(args?: SelectSubset<T, SocialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socials
     * const socials = await prisma.socials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialsUpdateManyArgs>(args: SelectSubset<T, SocialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials and returns the data updated in the database.
     * @param {SocialsUpdateManyAndReturnArgs} args - Arguments to update many Socials.
     * @example
     * // Update many Socials
     * const socials = await prisma.socials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Socials and only return the `id`
     * const socialsWithIdOnly = await prisma.socials.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialsUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Socials.
     * @param {SocialsUpsertArgs} args - Arguments to update or create a Socials.
     * @example
     * // Update or create a Socials
     * const socials = await prisma.socials.upsert({
     *   create: {
     *     // ... data to create a Socials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Socials we want to update
     *   }
     * })
     */
    upsert<T extends SocialsUpsertArgs>(args: SelectSubset<T, SocialsUpsertArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsCountArgs} args - Arguments to filter Socials to count.
     * @example
     * // Count the number of Socials
     * const count = await prisma.socials.count({
     *   where: {
     *     // ... the filter for the Socials we want to count
     *   }
     * })
    **/
    count<T extends SocialsCountArgs>(
      args?: Subset<T, SocialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialsAggregateArgs>(args: Subset<T, SocialsAggregateArgs>): Prisma.PrismaPromise<GetSocialsAggregateType<T>>

    /**
     * Group by Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsGroupByArgs} args - Group by arguments.
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
      T extends SocialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialsGroupByArgs['orderBy'] }
        : { orderBy?: SocialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Socials model
   */
  readonly fields: SocialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Socials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Socials model
   */
  interface SocialsFieldRefs {
    readonly id: FieldRef<"Socials", 'Int'>
    readonly name: FieldRef<"Socials", 'String'>
    readonly link: FieldRef<"Socials", 'String'>
    readonly createdAt: FieldRef<"Socials", 'DateTime'>
    readonly updatedAt: FieldRef<"Socials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Socials findUnique
   */
  export type SocialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where: SocialsWhereUniqueInput
  }

  /**
   * Socials findUniqueOrThrow
   */
  export type SocialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where: SocialsWhereUniqueInput
  }

  /**
   * Socials findFirst
   */
  export type SocialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialsScalarFieldEnum | SocialsScalarFieldEnum[]
  }

  /**
   * Socials findFirstOrThrow
   */
  export type SocialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialsScalarFieldEnum | SocialsScalarFieldEnum[]
  }

  /**
   * Socials findMany
   */
  export type SocialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socials.
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    distinct?: SocialsScalarFieldEnum | SocialsScalarFieldEnum[]
  }

  /**
   * Socials create
   */
  export type SocialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * The data needed to create a Socials.
     */
    data: XOR<SocialsCreateInput, SocialsUncheckedCreateInput>
  }

  /**
   * Socials createMany
   */
  export type SocialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Socials.
     */
    data: SocialsCreateManyInput | SocialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Socials createManyAndReturn
   */
  export type SocialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * The data used to create many Socials.
     */
    data: SocialsCreateManyInput | SocialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Socials update
   */
  export type SocialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * The data needed to update a Socials.
     */
    data: XOR<SocialsUpdateInput, SocialsUncheckedUpdateInput>
    /**
     * Choose, which Socials to update.
     */
    where: SocialsWhereUniqueInput
  }

  /**
   * Socials updateMany
   */
  export type SocialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialsUpdateManyMutationInput, SocialsUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialsWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
  }

  /**
   * Socials updateManyAndReturn
   */
  export type SocialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialsUpdateManyMutationInput, SocialsUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialsWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
  }

  /**
   * Socials upsert
   */
  export type SocialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * The filter to search for the Socials to update in case it exists.
     */
    where: SocialsWhereUniqueInput
    /**
     * In case the Socials found by the `where` argument doesn't exist, create a new Socials with this data.
     */
    create: XOR<SocialsCreateInput, SocialsUncheckedCreateInput>
    /**
     * In case the Socials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialsUpdateInput, SocialsUncheckedUpdateInput>
  }

  /**
   * Socials delete
   */
  export type SocialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter which Socials to delete.
     */
    where: SocialsWhereUniqueInput
  }

  /**
   * Socials deleteMany
   */
  export type SocialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socials to delete
     */
    where?: SocialsWhereInput
    /**
     * Limit how many Socials to delete.
     */
    limit?: number
  }

  /**
   * Socials without action
   */
  export type SocialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    slug: string | null
    status: $Enums.PostStatus | null
    title: string | null
    body: string | null
    cover: string | null
    repo: string | null
    link: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    status: $Enums.PostStatus | null
    title: string | null
    body: string | null
    cover: string | null
    repo: string | null
    link: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    slug: number
    status: number
    title: number
    body: number
    cover: number
    repo: number
    link: number
    tags: number
    createdAt: number
    updatedAt: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    slug?: true
    status?: true
    title?: true
    body?: true
    cover?: true
    repo?: true
    link?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    slug?: true
    status?: true
    title?: true
    body?: true
    cover?: true
    repo?: true
    link?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    slug?: true
    status?: true
    title?: true
    body?: true
    cover?: true
    repo?: true
    link?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    slug: string
    status: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags: string
    createdAt: Date
    updatedAt: Date
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    status?: boolean
    title?: boolean
    body?: boolean
    cover?: boolean
    repo?: boolean
    link?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    shortDescription?: boolean | Post$shortDescriptionArgs<ExtArgs>
    techs?: boolean | Post$techsArgs<ExtArgs>
    sections?: boolean | Post$sectionsArgs<ExtArgs>
    author?: boolean | Post$authorArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    status?: boolean
    title?: boolean
    body?: boolean
    cover?: boolean
    repo?: boolean
    link?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    status?: boolean
    title?: boolean
    body?: boolean
    cover?: boolean
    repo?: boolean
    link?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    slug?: boolean
    status?: boolean
    title?: boolean
    body?: boolean
    cover?: boolean
    repo?: boolean
    link?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "status" | "title" | "body" | "cover" | "repo" | "link" | "tags" | "createdAt" | "updatedAt" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortDescription?: boolean | Post$shortDescriptionArgs<ExtArgs>
    techs?: boolean | Post$techsArgs<ExtArgs>
    sections?: boolean | Post$sectionsArgs<ExtArgs>
    author?: boolean | Post$authorArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      shortDescription: Prisma.$ShortDescriptionPayload<ExtArgs>[]
      techs: Prisma.$PostTechPayload<ExtArgs>[]
      sections: Prisma.$SectionsPayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      status: $Enums.PostStatus
      title: string
      body: string
      cover: string
      repo: string
      link: string
      tags: string
      createdAt: Date
      updatedAt: Date
      authorId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shortDescription<T extends Post$shortDescriptionArgs<ExtArgs> = {}>(args?: Subset<T, Post$shortDescriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    techs<T extends Post$techsArgs<ExtArgs> = {}>(args?: Subset<T, Post$techsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sections<T extends Post$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Post$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends Post$authorArgs<ExtArgs> = {}>(args?: Subset<T, Post$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly status: FieldRef<"Post", 'PostStatus'>
    readonly title: FieldRef<"Post", 'String'>
    readonly body: FieldRef<"Post", 'String'>
    readonly cover: FieldRef<"Post", 'String'>
    readonly repo: FieldRef<"Post", 'String'>
    readonly link: FieldRef<"Post", 'String'>
    readonly tags: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.shortDescription
   */
  export type Post$shortDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
    where?: ShortDescriptionWhereInput
    orderBy?: ShortDescriptionOrderByWithRelationInput | ShortDescriptionOrderByWithRelationInput[]
    cursor?: ShortDescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShortDescriptionScalarFieldEnum | ShortDescriptionScalarFieldEnum[]
  }

  /**
   * Post.techs
   */
  export type Post$techsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
    where?: PostTechWhereInput
    orderBy?: PostTechOrderByWithRelationInput | PostTechOrderByWithRelationInput[]
    cursor?: PostTechWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTechScalarFieldEnum | PostTechScalarFieldEnum[]
  }

  /**
   * Post.sections
   */
  export type Post$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
    where?: SectionsWhereInput
    orderBy?: SectionsOrderByWithRelationInput | SectionsOrderByWithRelationInput[]
    cursor?: SectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * Post.author
   */
  export type Post$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostTech
   */

  export type AggregatePostTech = {
    _count: PostTechCountAggregateOutputType | null
    _avg: PostTechAvgAggregateOutputType | null
    _sum: PostTechSumAggregateOutputType | null
    _min: PostTechMinAggregateOutputType | null
    _max: PostTechMaxAggregateOutputType | null
  }

  export type PostTechAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostTechSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostTechMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: number | null
  }

  export type PostTechMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: number | null
  }

  export type PostTechCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    postId: number
    _all: number
  }


  export type PostTechAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostTechSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostTechMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type PostTechMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type PostTechCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    _all?: true
  }

  export type PostTechAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTech to aggregate.
     */
    where?: PostTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTeches to fetch.
     */
    orderBy?: PostTechOrderByWithRelationInput | PostTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTeches
    **/
    _count?: true | PostTechCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostTechAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostTechSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTechMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTechMaxAggregateInputType
  }

  export type GetPostTechAggregateType<T extends PostTechAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTech]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTech[P]>
      : GetScalarType<T[P], AggregatePostTech[P]>
  }




  export type PostTechGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTechWhereInput
    orderBy?: PostTechOrderByWithAggregationInput | PostTechOrderByWithAggregationInput[]
    by: PostTechScalarFieldEnum[] | PostTechScalarFieldEnum
    having?: PostTechScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTechCountAggregateInputType | true
    _avg?: PostTechAvgAggregateInputType
    _sum?: PostTechSumAggregateInputType
    _min?: PostTechMinAggregateInputType
    _max?: PostTechMaxAggregateInputType
  }

  export type PostTechGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    postId: number
    _count: PostTechCountAggregateOutputType | null
    _avg: PostTechAvgAggregateOutputType | null
    _sum: PostTechSumAggregateOutputType | null
    _min: PostTechMinAggregateOutputType | null
    _max: PostTechMaxAggregateOutputType | null
  }

  type GetPostTechGroupByPayload<T extends PostTechGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTechGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostTechGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostTechGroupByOutputType[P]>
            : GetScalarType<T[P], PostTechGroupByOutputType[P]>
        }
      >
    >


  export type PostTechSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTech"]>

  export type PostTechSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTech"]>

  export type PostTechSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTech"]>

  export type PostTechSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
  }

  export type PostTechOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "postId", ExtArgs["result"]["postTech"]>
  export type PostTechInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostTechIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostTechIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostTechPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostTech"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      postId: number
    }, ExtArgs["result"]["postTech"]>
    composites: {}
  }

  type PostTechGetPayload<S extends boolean | null | undefined | PostTechDefaultArgs> = $Result.GetResult<Prisma.$PostTechPayload, S>

  type PostTechCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostTechFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostTechCountAggregateInputType | true
    }

  export interface PostTechDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTech'], meta: { name: 'PostTech' } }
    /**
     * Find zero or one PostTech that matches the filter.
     * @param {PostTechFindUniqueArgs} args - Arguments to find a PostTech
     * @example
     * // Get one PostTech
     * const postTech = await prisma.postTech.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTechFindUniqueArgs>(args: SelectSubset<T, PostTechFindUniqueArgs<ExtArgs>>): Prisma__PostTechClient<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostTech that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTechFindUniqueOrThrowArgs} args - Arguments to find a PostTech
     * @example
     * // Get one PostTech
     * const postTech = await prisma.postTech.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTechFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTechFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTechClient<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTech that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTechFindFirstArgs} args - Arguments to find a PostTech
     * @example
     * // Get one PostTech
     * const postTech = await prisma.postTech.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTechFindFirstArgs>(args?: SelectSubset<T, PostTechFindFirstArgs<ExtArgs>>): Prisma__PostTechClient<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTech that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTechFindFirstOrThrowArgs} args - Arguments to find a PostTech
     * @example
     * // Get one PostTech
     * const postTech = await prisma.postTech.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTechFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTechFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTechClient<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostTeches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTechFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTeches
     * const postTeches = await prisma.postTech.findMany()
     * 
     * // Get first 10 PostTeches
     * const postTeches = await prisma.postTech.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postTechWithIdOnly = await prisma.postTech.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostTechFindManyArgs>(args?: SelectSubset<T, PostTechFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostTech.
     * @param {PostTechCreateArgs} args - Arguments to create a PostTech.
     * @example
     * // Create one PostTech
     * const PostTech = await prisma.postTech.create({
     *   data: {
     *     // ... data to create a PostTech
     *   }
     * })
     * 
     */
    create<T extends PostTechCreateArgs>(args: SelectSubset<T, PostTechCreateArgs<ExtArgs>>): Prisma__PostTechClient<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostTeches.
     * @param {PostTechCreateManyArgs} args - Arguments to create many PostTeches.
     * @example
     * // Create many PostTeches
     * const postTech = await prisma.postTech.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostTechCreateManyArgs>(args?: SelectSubset<T, PostTechCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostTeches and returns the data saved in the database.
     * @param {PostTechCreateManyAndReturnArgs} args - Arguments to create many PostTeches.
     * @example
     * // Create many PostTeches
     * const postTech = await prisma.postTech.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostTeches and only return the `id`
     * const postTechWithIdOnly = await prisma.postTech.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostTechCreateManyAndReturnArgs>(args?: SelectSubset<T, PostTechCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostTech.
     * @param {PostTechDeleteArgs} args - Arguments to delete one PostTech.
     * @example
     * // Delete one PostTech
     * const PostTech = await prisma.postTech.delete({
     *   where: {
     *     // ... filter to delete one PostTech
     *   }
     * })
     * 
     */
    delete<T extends PostTechDeleteArgs>(args: SelectSubset<T, PostTechDeleteArgs<ExtArgs>>): Prisma__PostTechClient<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostTech.
     * @param {PostTechUpdateArgs} args - Arguments to update one PostTech.
     * @example
     * // Update one PostTech
     * const postTech = await prisma.postTech.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostTechUpdateArgs>(args: SelectSubset<T, PostTechUpdateArgs<ExtArgs>>): Prisma__PostTechClient<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostTeches.
     * @param {PostTechDeleteManyArgs} args - Arguments to filter PostTeches to delete.
     * @example
     * // Delete a few PostTeches
     * const { count } = await prisma.postTech.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostTechDeleteManyArgs>(args?: SelectSubset<T, PostTechDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTeches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTechUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTeches
     * const postTech = await prisma.postTech.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostTechUpdateManyArgs>(args: SelectSubset<T, PostTechUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTeches and returns the data updated in the database.
     * @param {PostTechUpdateManyAndReturnArgs} args - Arguments to update many PostTeches.
     * @example
     * // Update many PostTeches
     * const postTech = await prisma.postTech.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostTeches and only return the `id`
     * const postTechWithIdOnly = await prisma.postTech.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostTechUpdateManyAndReturnArgs>(args: SelectSubset<T, PostTechUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostTech.
     * @param {PostTechUpsertArgs} args - Arguments to update or create a PostTech.
     * @example
     * // Update or create a PostTech
     * const postTech = await prisma.postTech.upsert({
     *   create: {
     *     // ... data to create a PostTech
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTech we want to update
     *   }
     * })
     */
    upsert<T extends PostTechUpsertArgs>(args: SelectSubset<T, PostTechUpsertArgs<ExtArgs>>): Prisma__PostTechClient<$Result.GetResult<Prisma.$PostTechPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostTeches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTechCountArgs} args - Arguments to filter PostTeches to count.
     * @example
     * // Count the number of PostTeches
     * const count = await prisma.postTech.count({
     *   where: {
     *     // ... the filter for the PostTeches we want to count
     *   }
     * })
    **/
    count<T extends PostTechCountArgs>(
      args?: Subset<T, PostTechCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTechCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTechAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostTechAggregateArgs>(args: Subset<T, PostTechAggregateArgs>): Prisma.PrismaPromise<GetPostTechAggregateType<T>>

    /**
     * Group by PostTech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTechGroupByArgs} args - Group by arguments.
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
      T extends PostTechGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTechGroupByArgs['orderBy'] }
        : { orderBy?: PostTechGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostTechGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTechGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostTech model
   */
  readonly fields: PostTechFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTech.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTechClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostTech model
   */
  interface PostTechFieldRefs {
    readonly id: FieldRef<"PostTech", 'Int'>
    readonly name: FieldRef<"PostTech", 'String'>
    readonly createdAt: FieldRef<"PostTech", 'DateTime'>
    readonly updatedAt: FieldRef<"PostTech", 'DateTime'>
    readonly postId: FieldRef<"PostTech", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostTech findUnique
   */
  export type PostTechFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
    /**
     * Filter, which PostTech to fetch.
     */
    where: PostTechWhereUniqueInput
  }

  /**
   * PostTech findUniqueOrThrow
   */
  export type PostTechFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
    /**
     * Filter, which PostTech to fetch.
     */
    where: PostTechWhereUniqueInput
  }

  /**
   * PostTech findFirst
   */
  export type PostTechFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
    /**
     * Filter, which PostTech to fetch.
     */
    where?: PostTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTeches to fetch.
     */
    orderBy?: PostTechOrderByWithRelationInput | PostTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTeches.
     */
    cursor?: PostTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTeches.
     */
    distinct?: PostTechScalarFieldEnum | PostTechScalarFieldEnum[]
  }

  /**
   * PostTech findFirstOrThrow
   */
  export type PostTechFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
    /**
     * Filter, which PostTech to fetch.
     */
    where?: PostTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTeches to fetch.
     */
    orderBy?: PostTechOrderByWithRelationInput | PostTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTeches.
     */
    cursor?: PostTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTeches.
     */
    distinct?: PostTechScalarFieldEnum | PostTechScalarFieldEnum[]
  }

  /**
   * PostTech findMany
   */
  export type PostTechFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
    /**
     * Filter, which PostTeches to fetch.
     */
    where?: PostTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTeches to fetch.
     */
    orderBy?: PostTechOrderByWithRelationInput | PostTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTeches.
     */
    cursor?: PostTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTeches.
     */
    skip?: number
    distinct?: PostTechScalarFieldEnum | PostTechScalarFieldEnum[]
  }

  /**
   * PostTech create
   */
  export type PostTechCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
    /**
     * The data needed to create a PostTech.
     */
    data: XOR<PostTechCreateInput, PostTechUncheckedCreateInput>
  }

  /**
   * PostTech createMany
   */
  export type PostTechCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTeches.
     */
    data: PostTechCreateManyInput | PostTechCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostTech createManyAndReturn
   */
  export type PostTechCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * The data used to create many PostTeches.
     */
    data: PostTechCreateManyInput | PostTechCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTech update
   */
  export type PostTechUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
    /**
     * The data needed to update a PostTech.
     */
    data: XOR<PostTechUpdateInput, PostTechUncheckedUpdateInput>
    /**
     * Choose, which PostTech to update.
     */
    where: PostTechWhereUniqueInput
  }

  /**
   * PostTech updateMany
   */
  export type PostTechUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTeches.
     */
    data: XOR<PostTechUpdateManyMutationInput, PostTechUncheckedUpdateManyInput>
    /**
     * Filter which PostTeches to update
     */
    where?: PostTechWhereInput
    /**
     * Limit how many PostTeches to update.
     */
    limit?: number
  }

  /**
   * PostTech updateManyAndReturn
   */
  export type PostTechUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * The data used to update PostTeches.
     */
    data: XOR<PostTechUpdateManyMutationInput, PostTechUncheckedUpdateManyInput>
    /**
     * Filter which PostTeches to update
     */
    where?: PostTechWhereInput
    /**
     * Limit how many PostTeches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTech upsert
   */
  export type PostTechUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
    /**
     * The filter to search for the PostTech to update in case it exists.
     */
    where: PostTechWhereUniqueInput
    /**
     * In case the PostTech found by the `where` argument doesn't exist, create a new PostTech with this data.
     */
    create: XOR<PostTechCreateInput, PostTechUncheckedCreateInput>
    /**
     * In case the PostTech was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTechUpdateInput, PostTechUncheckedUpdateInput>
  }

  /**
   * PostTech delete
   */
  export type PostTechDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
    /**
     * Filter which PostTech to delete.
     */
    where: PostTechWhereUniqueInput
  }

  /**
   * PostTech deleteMany
   */
  export type PostTechDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTeches to delete
     */
    where?: PostTechWhereInput
    /**
     * Limit how many PostTeches to delete.
     */
    limit?: number
  }

  /**
   * PostTech without action
   */
  export type PostTechDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTech
     */
    select?: PostTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTech
     */
    omit?: PostTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTechInclude<ExtArgs> | null
  }


  /**
   * Model PageTech
   */

  export type AggregatePageTech = {
    _count: PageTechCountAggregateOutputType | null
    _avg: PageTechAvgAggregateOutputType | null
    _sum: PageTechSumAggregateOutputType | null
    _min: PageTechMinAggregateOutputType | null
    _max: PageTechMaxAggregateOutputType | null
  }

  export type PageTechAvgAggregateOutputType = {
    id: number | null
    pageId: number | null
  }

  export type PageTechSumAggregateOutputType = {
    id: number | null
    pageId: number | null
  }

  export type PageTechMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pageId: number | null
  }

  export type PageTechMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pageId: number | null
  }

  export type PageTechCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    pageId: number
    _all: number
  }


  export type PageTechAvgAggregateInputType = {
    id?: true
    pageId?: true
  }

  export type PageTechSumAggregateInputType = {
    id?: true
    pageId?: true
  }

  export type PageTechMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    pageId?: true
  }

  export type PageTechMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    pageId?: true
  }

  export type PageTechCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    pageId?: true
    _all?: true
  }

  export type PageTechAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageTech to aggregate.
     */
    where?: PageTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageTeches to fetch.
     */
    orderBy?: PageTechOrderByWithRelationInput | PageTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageTeches
    **/
    _count?: true | PageTechCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageTechAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageTechSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageTechMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageTechMaxAggregateInputType
  }

  export type GetPageTechAggregateType<T extends PageTechAggregateArgs> = {
        [P in keyof T & keyof AggregatePageTech]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageTech[P]>
      : GetScalarType<T[P], AggregatePageTech[P]>
  }




  export type PageTechGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageTechWhereInput
    orderBy?: PageTechOrderByWithAggregationInput | PageTechOrderByWithAggregationInput[]
    by: PageTechScalarFieldEnum[] | PageTechScalarFieldEnum
    having?: PageTechScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageTechCountAggregateInputType | true
    _avg?: PageTechAvgAggregateInputType
    _sum?: PageTechSumAggregateInputType
    _min?: PageTechMinAggregateInputType
    _max?: PageTechMaxAggregateInputType
  }

  export type PageTechGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    pageId: number
    _count: PageTechCountAggregateOutputType | null
    _avg: PageTechAvgAggregateOutputType | null
    _sum: PageTechSumAggregateOutputType | null
    _min: PageTechMinAggregateOutputType | null
    _max: PageTechMaxAggregateOutputType | null
  }

  type GetPageTechGroupByPayload<T extends PageTechGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageTechGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageTechGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageTechGroupByOutputType[P]>
            : GetScalarType<T[P], PageTechGroupByOutputType[P]>
        }
      >
    >


  export type PageTechSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pageId?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageTech"]>

  export type PageTechSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pageId?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageTech"]>

  export type PageTechSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pageId?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageTech"]>

  export type PageTechSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pageId?: boolean
  }

  export type PageTechOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "pageId", ExtArgs["result"]["pageTech"]>
  export type PageTechInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type PageTechIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type PageTechIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }

  export type $PageTechPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageTech"
    objects: {
      page: Prisma.$PagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      pageId: number
    }, ExtArgs["result"]["pageTech"]>
    composites: {}
  }

  type PageTechGetPayload<S extends boolean | null | undefined | PageTechDefaultArgs> = $Result.GetResult<Prisma.$PageTechPayload, S>

  type PageTechCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageTechFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageTechCountAggregateInputType | true
    }

  export interface PageTechDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageTech'], meta: { name: 'PageTech' } }
    /**
     * Find zero or one PageTech that matches the filter.
     * @param {PageTechFindUniqueArgs} args - Arguments to find a PageTech
     * @example
     * // Get one PageTech
     * const pageTech = await prisma.pageTech.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageTechFindUniqueArgs>(args: SelectSubset<T, PageTechFindUniqueArgs<ExtArgs>>): Prisma__PageTechClient<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageTech that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageTechFindUniqueOrThrowArgs} args - Arguments to find a PageTech
     * @example
     * // Get one PageTech
     * const pageTech = await prisma.pageTech.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageTechFindUniqueOrThrowArgs>(args: SelectSubset<T, PageTechFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageTechClient<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageTech that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageTechFindFirstArgs} args - Arguments to find a PageTech
     * @example
     * // Get one PageTech
     * const pageTech = await prisma.pageTech.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageTechFindFirstArgs>(args?: SelectSubset<T, PageTechFindFirstArgs<ExtArgs>>): Prisma__PageTechClient<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageTech that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageTechFindFirstOrThrowArgs} args - Arguments to find a PageTech
     * @example
     * // Get one PageTech
     * const pageTech = await prisma.pageTech.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageTechFindFirstOrThrowArgs>(args?: SelectSubset<T, PageTechFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageTechClient<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageTeches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageTechFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageTeches
     * const pageTeches = await prisma.pageTech.findMany()
     * 
     * // Get first 10 PageTeches
     * const pageTeches = await prisma.pageTech.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageTechWithIdOnly = await prisma.pageTech.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageTechFindManyArgs>(args?: SelectSubset<T, PageTechFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageTech.
     * @param {PageTechCreateArgs} args - Arguments to create a PageTech.
     * @example
     * // Create one PageTech
     * const PageTech = await prisma.pageTech.create({
     *   data: {
     *     // ... data to create a PageTech
     *   }
     * })
     * 
     */
    create<T extends PageTechCreateArgs>(args: SelectSubset<T, PageTechCreateArgs<ExtArgs>>): Prisma__PageTechClient<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageTeches.
     * @param {PageTechCreateManyArgs} args - Arguments to create many PageTeches.
     * @example
     * // Create many PageTeches
     * const pageTech = await prisma.pageTech.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageTechCreateManyArgs>(args?: SelectSubset<T, PageTechCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageTeches and returns the data saved in the database.
     * @param {PageTechCreateManyAndReturnArgs} args - Arguments to create many PageTeches.
     * @example
     * // Create many PageTeches
     * const pageTech = await prisma.pageTech.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageTeches and only return the `id`
     * const pageTechWithIdOnly = await prisma.pageTech.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageTechCreateManyAndReturnArgs>(args?: SelectSubset<T, PageTechCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageTech.
     * @param {PageTechDeleteArgs} args - Arguments to delete one PageTech.
     * @example
     * // Delete one PageTech
     * const PageTech = await prisma.pageTech.delete({
     *   where: {
     *     // ... filter to delete one PageTech
     *   }
     * })
     * 
     */
    delete<T extends PageTechDeleteArgs>(args: SelectSubset<T, PageTechDeleteArgs<ExtArgs>>): Prisma__PageTechClient<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageTech.
     * @param {PageTechUpdateArgs} args - Arguments to update one PageTech.
     * @example
     * // Update one PageTech
     * const pageTech = await prisma.pageTech.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageTechUpdateArgs>(args: SelectSubset<T, PageTechUpdateArgs<ExtArgs>>): Prisma__PageTechClient<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageTeches.
     * @param {PageTechDeleteManyArgs} args - Arguments to filter PageTeches to delete.
     * @example
     * // Delete a few PageTeches
     * const { count } = await prisma.pageTech.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageTechDeleteManyArgs>(args?: SelectSubset<T, PageTechDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageTeches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageTechUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageTeches
     * const pageTech = await prisma.pageTech.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageTechUpdateManyArgs>(args: SelectSubset<T, PageTechUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageTeches and returns the data updated in the database.
     * @param {PageTechUpdateManyAndReturnArgs} args - Arguments to update many PageTeches.
     * @example
     * // Update many PageTeches
     * const pageTech = await prisma.pageTech.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageTeches and only return the `id`
     * const pageTechWithIdOnly = await prisma.pageTech.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageTechUpdateManyAndReturnArgs>(args: SelectSubset<T, PageTechUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageTech.
     * @param {PageTechUpsertArgs} args - Arguments to update or create a PageTech.
     * @example
     * // Update or create a PageTech
     * const pageTech = await prisma.pageTech.upsert({
     *   create: {
     *     // ... data to create a PageTech
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageTech we want to update
     *   }
     * })
     */
    upsert<T extends PageTechUpsertArgs>(args: SelectSubset<T, PageTechUpsertArgs<ExtArgs>>): Prisma__PageTechClient<$Result.GetResult<Prisma.$PageTechPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageTeches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageTechCountArgs} args - Arguments to filter PageTeches to count.
     * @example
     * // Count the number of PageTeches
     * const count = await prisma.pageTech.count({
     *   where: {
     *     // ... the filter for the PageTeches we want to count
     *   }
     * })
    **/
    count<T extends PageTechCountArgs>(
      args?: Subset<T, PageTechCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageTechCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageTech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageTechAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageTechAggregateArgs>(args: Subset<T, PageTechAggregateArgs>): Prisma.PrismaPromise<GetPageTechAggregateType<T>>

    /**
     * Group by PageTech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageTechGroupByArgs} args - Group by arguments.
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
      T extends PageTechGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageTechGroupByArgs['orderBy'] }
        : { orderBy?: PageTechGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageTechGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageTechGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageTech model
   */
  readonly fields: PageTechFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageTech.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageTechClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PageTech model
   */
  interface PageTechFieldRefs {
    readonly id: FieldRef<"PageTech", 'Int'>
    readonly name: FieldRef<"PageTech", 'String'>
    readonly createdAt: FieldRef<"PageTech", 'DateTime'>
    readonly updatedAt: FieldRef<"PageTech", 'DateTime'>
    readonly pageId: FieldRef<"PageTech", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PageTech findUnique
   */
  export type PageTechFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
    /**
     * Filter, which PageTech to fetch.
     */
    where: PageTechWhereUniqueInput
  }

  /**
   * PageTech findUniqueOrThrow
   */
  export type PageTechFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
    /**
     * Filter, which PageTech to fetch.
     */
    where: PageTechWhereUniqueInput
  }

  /**
   * PageTech findFirst
   */
  export type PageTechFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
    /**
     * Filter, which PageTech to fetch.
     */
    where?: PageTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageTeches to fetch.
     */
    orderBy?: PageTechOrderByWithRelationInput | PageTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageTeches.
     */
    cursor?: PageTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageTeches.
     */
    distinct?: PageTechScalarFieldEnum | PageTechScalarFieldEnum[]
  }

  /**
   * PageTech findFirstOrThrow
   */
  export type PageTechFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
    /**
     * Filter, which PageTech to fetch.
     */
    where?: PageTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageTeches to fetch.
     */
    orderBy?: PageTechOrderByWithRelationInput | PageTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageTeches.
     */
    cursor?: PageTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageTeches.
     */
    distinct?: PageTechScalarFieldEnum | PageTechScalarFieldEnum[]
  }

  /**
   * PageTech findMany
   */
  export type PageTechFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
    /**
     * Filter, which PageTeches to fetch.
     */
    where?: PageTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageTeches to fetch.
     */
    orderBy?: PageTechOrderByWithRelationInput | PageTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageTeches.
     */
    cursor?: PageTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageTeches.
     */
    skip?: number
    distinct?: PageTechScalarFieldEnum | PageTechScalarFieldEnum[]
  }

  /**
   * PageTech create
   */
  export type PageTechCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
    /**
     * The data needed to create a PageTech.
     */
    data: XOR<PageTechCreateInput, PageTechUncheckedCreateInput>
  }

  /**
   * PageTech createMany
   */
  export type PageTechCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageTeches.
     */
    data: PageTechCreateManyInput | PageTechCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageTech createManyAndReturn
   */
  export type PageTechCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * The data used to create many PageTeches.
     */
    data: PageTechCreateManyInput | PageTechCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageTech update
   */
  export type PageTechUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
    /**
     * The data needed to update a PageTech.
     */
    data: XOR<PageTechUpdateInput, PageTechUncheckedUpdateInput>
    /**
     * Choose, which PageTech to update.
     */
    where: PageTechWhereUniqueInput
  }

  /**
   * PageTech updateMany
   */
  export type PageTechUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageTeches.
     */
    data: XOR<PageTechUpdateManyMutationInput, PageTechUncheckedUpdateManyInput>
    /**
     * Filter which PageTeches to update
     */
    where?: PageTechWhereInput
    /**
     * Limit how many PageTeches to update.
     */
    limit?: number
  }

  /**
   * PageTech updateManyAndReturn
   */
  export type PageTechUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * The data used to update PageTeches.
     */
    data: XOR<PageTechUpdateManyMutationInput, PageTechUncheckedUpdateManyInput>
    /**
     * Filter which PageTeches to update
     */
    where?: PageTechWhereInput
    /**
     * Limit how many PageTeches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageTech upsert
   */
  export type PageTechUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
    /**
     * The filter to search for the PageTech to update in case it exists.
     */
    where: PageTechWhereUniqueInput
    /**
     * In case the PageTech found by the `where` argument doesn't exist, create a new PageTech with this data.
     */
    create: XOR<PageTechCreateInput, PageTechUncheckedCreateInput>
    /**
     * In case the PageTech was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageTechUpdateInput, PageTechUncheckedUpdateInput>
  }

  /**
   * PageTech delete
   */
  export type PageTechDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
    /**
     * Filter which PageTech to delete.
     */
    where: PageTechWhereUniqueInput
  }

  /**
   * PageTech deleteMany
   */
  export type PageTechDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageTeches to delete
     */
    where?: PageTechWhereInput
    /**
     * Limit how many PageTeches to delete.
     */
    limit?: number
  }

  /**
   * PageTech without action
   */
  export type PageTechDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageTech
     */
    select?: PageTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageTech
     */
    omit?: PageTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageTechInclude<ExtArgs> | null
  }


  /**
   * Model Sections
   */

  export type AggregateSections = {
    _count: SectionsCountAggregateOutputType | null
    _avg: SectionsAvgAggregateOutputType | null
    _sum: SectionsSumAggregateOutputType | null
    _min: SectionsMinAggregateOutputType | null
    _max: SectionsMaxAggregateOutputType | null
  }

  export type SectionsAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type SectionsSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type SectionsMinAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: number | null
  }

  export type SectionsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: number | null
  }

  export type SectionsCountAggregateOutputType = {
    id: number
    title: number
    image: number
    createdAt: number
    updatedAt: number
    postId: number
    _all: number
  }


  export type SectionsAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type SectionsSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type SectionsMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type SectionsMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type SectionsCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    _all?: true
  }

  export type SectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to aggregate.
     */
    where?: SectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionsOrderByWithRelationInput | SectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionsMaxAggregateInputType
  }

  export type GetSectionsAggregateType<T extends SectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSections[P]>
      : GetScalarType<T[P], AggregateSections[P]>
  }




  export type SectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionsWhereInput
    orderBy?: SectionsOrderByWithAggregationInput | SectionsOrderByWithAggregationInput[]
    by: SectionsScalarFieldEnum[] | SectionsScalarFieldEnum
    having?: SectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionsCountAggregateInputType | true
    _avg?: SectionsAvgAggregateInputType
    _sum?: SectionsSumAggregateInputType
    _min?: SectionsMinAggregateInputType
    _max?: SectionsMaxAggregateInputType
  }

  export type SectionsGroupByOutputType = {
    id: number
    title: string
    image: string
    createdAt: Date
    updatedAt: Date
    postId: number
    _count: SectionsCountAggregateOutputType | null
    _avg: SectionsAvgAggregateOutputType | null
    _sum: SectionsSumAggregateOutputType | null
    _min: SectionsMinAggregateOutputType | null
    _max: SectionsMaxAggregateOutputType | null
  }

  type GetSectionsGroupByPayload<T extends SectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionsGroupByOutputType[P]>
            : GetScalarType<T[P], SectionsGroupByOutputType[P]>
        }
      >
    >


  export type SectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | Sections$postArgs<ExtArgs>
  }, ExtArgs["result"]["sections"]>

  export type SectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | Sections$postArgs<ExtArgs>
  }, ExtArgs["result"]["sections"]>

  export type SectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | Sections$postArgs<ExtArgs>
  }, ExtArgs["result"]["sections"]>

  export type SectionsSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
  }

  export type SectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "image" | "createdAt" | "updatedAt" | "postId", ExtArgs["result"]["sections"]>
  export type SectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Sections$postArgs<ExtArgs>
  }
  export type SectionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Sections$postArgs<ExtArgs>
  }
  export type SectionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Sections$postArgs<ExtArgs>
  }

  export type $SectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sections"
    objects: {
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image: string
      createdAt: Date
      updatedAt: Date
      postId: number
    }, ExtArgs["result"]["sections"]>
    composites: {}
  }

  type SectionsGetPayload<S extends boolean | null | undefined | SectionsDefaultArgs> = $Result.GetResult<Prisma.$SectionsPayload, S>

  type SectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionsCountAggregateInputType | true
    }

  export interface SectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sections'], meta: { name: 'Sections' } }
    /**
     * Find zero or one Sections that matches the filter.
     * @param {SectionsFindUniqueArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionsFindUniqueArgs>(args: SelectSubset<T, SectionsFindUniqueArgs<ExtArgs>>): Prisma__SectionsClient<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionsFindUniqueOrThrowArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionsClient<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsFindFirstArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionsFindFirstArgs>(args?: SelectSubset<T, SectionsFindFirstArgs<ExtArgs>>): Prisma__SectionsClient<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsFindFirstOrThrowArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionsClient<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.sections.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.sections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionsWithIdOnly = await prisma.sections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionsFindManyArgs>(args?: SelectSubset<T, SectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sections.
     * @param {SectionsCreateArgs} args - Arguments to create a Sections.
     * @example
     * // Create one Sections
     * const Sections = await prisma.sections.create({
     *   data: {
     *     // ... data to create a Sections
     *   }
     * })
     * 
     */
    create<T extends SectionsCreateArgs>(args: SelectSubset<T, SectionsCreateArgs<ExtArgs>>): Prisma__SectionsClient<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionsCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const sections = await prisma.sections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionsCreateManyArgs>(args?: SelectSubset<T, SectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionsCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const sections = await prisma.sections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionsWithIdOnly = await prisma.sections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sections.
     * @param {SectionsDeleteArgs} args - Arguments to delete one Sections.
     * @example
     * // Delete one Sections
     * const Sections = await prisma.sections.delete({
     *   where: {
     *     // ... filter to delete one Sections
     *   }
     * })
     * 
     */
    delete<T extends SectionsDeleteArgs>(args: SelectSubset<T, SectionsDeleteArgs<ExtArgs>>): Prisma__SectionsClient<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sections.
     * @param {SectionsUpdateArgs} args - Arguments to update one Sections.
     * @example
     * // Update one Sections
     * const sections = await prisma.sections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionsUpdateArgs>(args: SelectSubset<T, SectionsUpdateArgs<ExtArgs>>): Prisma__SectionsClient<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionsDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.sections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionsDeleteManyArgs>(args?: SelectSubset<T, SectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const sections = await prisma.sections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionsUpdateManyArgs>(args: SelectSubset<T, SectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionsUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const sections = await prisma.sections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionsWithIdOnly = await prisma.sections.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sections.
     * @param {SectionsUpsertArgs} args - Arguments to update or create a Sections.
     * @example
     * // Update or create a Sections
     * const sections = await prisma.sections.upsert({
     *   create: {
     *     // ... data to create a Sections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sections we want to update
     *   }
     * })
     */
    upsert<T extends SectionsUpsertArgs>(args: SelectSubset<T, SectionsUpsertArgs<ExtArgs>>): Prisma__SectionsClient<$Result.GetResult<Prisma.$SectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.sections.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionsCountArgs>(
      args?: Subset<T, SectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionsAggregateArgs>(args: Subset<T, SectionsAggregateArgs>): Prisma.PrismaPromise<GetSectionsAggregateType<T>>

    /**
     * Group by Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsGroupByArgs} args - Group by arguments.
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
      T extends SectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionsGroupByArgs['orderBy'] }
        : { orderBy?: SectionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sections model
   */
  readonly fields: SectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends Sections$postArgs<ExtArgs> = {}>(args?: Subset<T, Sections$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sections model
   */
  interface SectionsFieldRefs {
    readonly id: FieldRef<"Sections", 'Int'>
    readonly title: FieldRef<"Sections", 'String'>
    readonly image: FieldRef<"Sections", 'String'>
    readonly createdAt: FieldRef<"Sections", 'DateTime'>
    readonly updatedAt: FieldRef<"Sections", 'DateTime'>
    readonly postId: FieldRef<"Sections", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sections findUnique
   */
  export type SectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where: SectionsWhereUniqueInput
  }

  /**
   * Sections findUniqueOrThrow
   */
  export type SectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where: SectionsWhereUniqueInput
  }

  /**
   * Sections findFirst
   */
  export type SectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionsOrderByWithRelationInput | SectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * Sections findFirstOrThrow
   */
  export type SectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionsOrderByWithRelationInput | SectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * Sections findMany
   */
  export type SectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionsOrderByWithRelationInput | SectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * Sections create
   */
  export type SectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sections.
     */
    data: XOR<SectionsCreateInput, SectionsUncheckedCreateInput>
  }

  /**
   * Sections createMany
   */
  export type SectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionsCreateManyInput | SectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sections createManyAndReturn
   */
  export type SectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionsCreateManyInput | SectionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sections update
   */
  export type SectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sections.
     */
    data: XOR<SectionsUpdateInput, SectionsUncheckedUpdateInput>
    /**
     * Choose, which Sections to update.
     */
    where: SectionsWhereUniqueInput
  }

  /**
   * Sections updateMany
   */
  export type SectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionsUpdateManyMutationInput, SectionsUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionsWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Sections updateManyAndReturn
   */
  export type SectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionsUpdateManyMutationInput, SectionsUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionsWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sections upsert
   */
  export type SectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sections to update in case it exists.
     */
    where: SectionsWhereUniqueInput
    /**
     * In case the Sections found by the `where` argument doesn't exist, create a new Sections with this data.
     */
    create: XOR<SectionsCreateInput, SectionsUncheckedCreateInput>
    /**
     * In case the Sections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionsUpdateInput, SectionsUncheckedUpdateInput>
  }

  /**
   * Sections delete
   */
  export type SectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
    /**
     * Filter which Sections to delete.
     */
    where: SectionsWhereUniqueInput
  }

  /**
   * Sections deleteMany
   */
  export type SectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionsWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Sections.post
   */
  export type Sections$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Sections without action
   */
  export type SectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sections
     */
    select?: SectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sections
     */
    omit?: SectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionsInclude<ExtArgs> | null
  }


  /**
   * Model ShortDescription
   */

  export type AggregateShortDescription = {
    _count: ShortDescriptionCountAggregateOutputType | null
    _avg: ShortDescriptionAvgAggregateOutputType | null
    _sum: ShortDescriptionSumAggregateOutputType | null
    _min: ShortDescriptionMinAggregateOutputType | null
    _max: ShortDescriptionMaxAggregateOutputType | null
  }

  export type ShortDescriptionAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type ShortDescriptionSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type ShortDescriptionMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: number | null
  }

  export type ShortDescriptionMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: number | null
  }

  export type ShortDescriptionCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    postId: number
    _all: number
  }


  export type ShortDescriptionAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type ShortDescriptionSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type ShortDescriptionMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type ShortDescriptionMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type ShortDescriptionCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    _all?: true
  }

  export type ShortDescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortDescription to aggregate.
     */
    where?: ShortDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortDescriptions to fetch.
     */
    orderBy?: ShortDescriptionOrderByWithRelationInput | ShortDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShortDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShortDescriptions
    **/
    _count?: true | ShortDescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShortDescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShortDescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShortDescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShortDescriptionMaxAggregateInputType
  }

  export type GetShortDescriptionAggregateType<T extends ShortDescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateShortDescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShortDescription[P]>
      : GetScalarType<T[P], AggregateShortDescription[P]>
  }




  export type ShortDescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortDescriptionWhereInput
    orderBy?: ShortDescriptionOrderByWithAggregationInput | ShortDescriptionOrderByWithAggregationInput[]
    by: ShortDescriptionScalarFieldEnum[] | ShortDescriptionScalarFieldEnum
    having?: ShortDescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShortDescriptionCountAggregateInputType | true
    _avg?: ShortDescriptionAvgAggregateInputType
    _sum?: ShortDescriptionSumAggregateInputType
    _min?: ShortDescriptionMinAggregateInputType
    _max?: ShortDescriptionMaxAggregateInputType
  }

  export type ShortDescriptionGroupByOutputType = {
    id: number
    description: string
    createdAt: Date
    updatedAt: Date
    postId: number
    _count: ShortDescriptionCountAggregateOutputType | null
    _avg: ShortDescriptionAvgAggregateOutputType | null
    _sum: ShortDescriptionSumAggregateOutputType | null
    _min: ShortDescriptionMinAggregateOutputType | null
    _max: ShortDescriptionMaxAggregateOutputType | null
  }

  type GetShortDescriptionGroupByPayload<T extends ShortDescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShortDescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShortDescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShortDescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], ShortDescriptionGroupByOutputType[P]>
        }
      >
    >


  export type ShortDescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | ShortDescription$postArgs<ExtArgs>
  }, ExtArgs["result"]["shortDescription"]>

  export type ShortDescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | ShortDescription$postArgs<ExtArgs>
  }, ExtArgs["result"]["shortDescription"]>

  export type ShortDescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | ShortDescription$postArgs<ExtArgs>
  }, ExtArgs["result"]["shortDescription"]>

  export type ShortDescriptionSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
  }

  export type ShortDescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt" | "postId", ExtArgs["result"]["shortDescription"]>
  export type ShortDescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | ShortDescription$postArgs<ExtArgs>
  }
  export type ShortDescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | ShortDescription$postArgs<ExtArgs>
  }
  export type ShortDescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | ShortDescription$postArgs<ExtArgs>
  }

  export type $ShortDescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShortDescription"
    objects: {
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      updatedAt: Date
      postId: number
    }, ExtArgs["result"]["shortDescription"]>
    composites: {}
  }

  type ShortDescriptionGetPayload<S extends boolean | null | undefined | ShortDescriptionDefaultArgs> = $Result.GetResult<Prisma.$ShortDescriptionPayload, S>

  type ShortDescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShortDescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShortDescriptionCountAggregateInputType | true
    }

  export interface ShortDescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShortDescription'], meta: { name: 'ShortDescription' } }
    /**
     * Find zero or one ShortDescription that matches the filter.
     * @param {ShortDescriptionFindUniqueArgs} args - Arguments to find a ShortDescription
     * @example
     * // Get one ShortDescription
     * const shortDescription = await prisma.shortDescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShortDescriptionFindUniqueArgs>(args: SelectSubset<T, ShortDescriptionFindUniqueArgs<ExtArgs>>): Prisma__ShortDescriptionClient<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShortDescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShortDescriptionFindUniqueOrThrowArgs} args - Arguments to find a ShortDescription
     * @example
     * // Get one ShortDescription
     * const shortDescription = await prisma.shortDescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShortDescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ShortDescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShortDescriptionClient<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortDescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortDescriptionFindFirstArgs} args - Arguments to find a ShortDescription
     * @example
     * // Get one ShortDescription
     * const shortDescription = await prisma.shortDescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShortDescriptionFindFirstArgs>(args?: SelectSubset<T, ShortDescriptionFindFirstArgs<ExtArgs>>): Prisma__ShortDescriptionClient<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortDescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortDescriptionFindFirstOrThrowArgs} args - Arguments to find a ShortDescription
     * @example
     * // Get one ShortDescription
     * const shortDescription = await prisma.shortDescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShortDescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ShortDescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShortDescriptionClient<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShortDescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortDescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShortDescriptions
     * const shortDescriptions = await prisma.shortDescription.findMany()
     * 
     * // Get first 10 ShortDescriptions
     * const shortDescriptions = await prisma.shortDescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shortDescriptionWithIdOnly = await prisma.shortDescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShortDescriptionFindManyArgs>(args?: SelectSubset<T, ShortDescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShortDescription.
     * @param {ShortDescriptionCreateArgs} args - Arguments to create a ShortDescription.
     * @example
     * // Create one ShortDescription
     * const ShortDescription = await prisma.shortDescription.create({
     *   data: {
     *     // ... data to create a ShortDescription
     *   }
     * })
     * 
     */
    create<T extends ShortDescriptionCreateArgs>(args: SelectSubset<T, ShortDescriptionCreateArgs<ExtArgs>>): Prisma__ShortDescriptionClient<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShortDescriptions.
     * @param {ShortDescriptionCreateManyArgs} args - Arguments to create many ShortDescriptions.
     * @example
     * // Create many ShortDescriptions
     * const shortDescription = await prisma.shortDescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShortDescriptionCreateManyArgs>(args?: SelectSubset<T, ShortDescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShortDescriptions and returns the data saved in the database.
     * @param {ShortDescriptionCreateManyAndReturnArgs} args - Arguments to create many ShortDescriptions.
     * @example
     * // Create many ShortDescriptions
     * const shortDescription = await prisma.shortDescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShortDescriptions and only return the `id`
     * const shortDescriptionWithIdOnly = await prisma.shortDescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShortDescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ShortDescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShortDescription.
     * @param {ShortDescriptionDeleteArgs} args - Arguments to delete one ShortDescription.
     * @example
     * // Delete one ShortDescription
     * const ShortDescription = await prisma.shortDescription.delete({
     *   where: {
     *     // ... filter to delete one ShortDescription
     *   }
     * })
     * 
     */
    delete<T extends ShortDescriptionDeleteArgs>(args: SelectSubset<T, ShortDescriptionDeleteArgs<ExtArgs>>): Prisma__ShortDescriptionClient<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShortDescription.
     * @param {ShortDescriptionUpdateArgs} args - Arguments to update one ShortDescription.
     * @example
     * // Update one ShortDescription
     * const shortDescription = await prisma.shortDescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShortDescriptionUpdateArgs>(args: SelectSubset<T, ShortDescriptionUpdateArgs<ExtArgs>>): Prisma__ShortDescriptionClient<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShortDescriptions.
     * @param {ShortDescriptionDeleteManyArgs} args - Arguments to filter ShortDescriptions to delete.
     * @example
     * // Delete a few ShortDescriptions
     * const { count } = await prisma.shortDescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShortDescriptionDeleteManyArgs>(args?: SelectSubset<T, ShortDescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortDescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShortDescriptions
     * const shortDescription = await prisma.shortDescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShortDescriptionUpdateManyArgs>(args: SelectSubset<T, ShortDescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortDescriptions and returns the data updated in the database.
     * @param {ShortDescriptionUpdateManyAndReturnArgs} args - Arguments to update many ShortDescriptions.
     * @example
     * // Update many ShortDescriptions
     * const shortDescription = await prisma.shortDescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShortDescriptions and only return the `id`
     * const shortDescriptionWithIdOnly = await prisma.shortDescription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShortDescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ShortDescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShortDescription.
     * @param {ShortDescriptionUpsertArgs} args - Arguments to update or create a ShortDescription.
     * @example
     * // Update or create a ShortDescription
     * const shortDescription = await prisma.shortDescription.upsert({
     *   create: {
     *     // ... data to create a ShortDescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShortDescription we want to update
     *   }
     * })
     */
    upsert<T extends ShortDescriptionUpsertArgs>(args: SelectSubset<T, ShortDescriptionUpsertArgs<ExtArgs>>): Prisma__ShortDescriptionClient<$Result.GetResult<Prisma.$ShortDescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShortDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortDescriptionCountArgs} args - Arguments to filter ShortDescriptions to count.
     * @example
     * // Count the number of ShortDescriptions
     * const count = await prisma.shortDescription.count({
     *   where: {
     *     // ... the filter for the ShortDescriptions we want to count
     *   }
     * })
    **/
    count<T extends ShortDescriptionCountArgs>(
      args?: Subset<T, ShortDescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortDescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShortDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortDescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShortDescriptionAggregateArgs>(args: Subset<T, ShortDescriptionAggregateArgs>): Prisma.PrismaPromise<GetShortDescriptionAggregateType<T>>

    /**
     * Group by ShortDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortDescriptionGroupByArgs} args - Group by arguments.
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
      T extends ShortDescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShortDescriptionGroupByArgs['orderBy'] }
        : { orderBy?: ShortDescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShortDescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortDescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShortDescription model
   */
  readonly fields: ShortDescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShortDescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShortDescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends ShortDescription$postArgs<ExtArgs> = {}>(args?: Subset<T, ShortDescription$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShortDescription model
   */
  interface ShortDescriptionFieldRefs {
    readonly id: FieldRef<"ShortDescription", 'Int'>
    readonly description: FieldRef<"ShortDescription", 'String'>
    readonly createdAt: FieldRef<"ShortDescription", 'DateTime'>
    readonly updatedAt: FieldRef<"ShortDescription", 'DateTime'>
    readonly postId: FieldRef<"ShortDescription", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ShortDescription findUnique
   */
  export type ShortDescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ShortDescription to fetch.
     */
    where: ShortDescriptionWhereUniqueInput
  }

  /**
   * ShortDescription findUniqueOrThrow
   */
  export type ShortDescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ShortDescription to fetch.
     */
    where: ShortDescriptionWhereUniqueInput
  }

  /**
   * ShortDescription findFirst
   */
  export type ShortDescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ShortDescription to fetch.
     */
    where?: ShortDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortDescriptions to fetch.
     */
    orderBy?: ShortDescriptionOrderByWithRelationInput | ShortDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortDescriptions.
     */
    cursor?: ShortDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortDescriptions.
     */
    distinct?: ShortDescriptionScalarFieldEnum | ShortDescriptionScalarFieldEnum[]
  }

  /**
   * ShortDescription findFirstOrThrow
   */
  export type ShortDescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ShortDescription to fetch.
     */
    where?: ShortDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortDescriptions to fetch.
     */
    orderBy?: ShortDescriptionOrderByWithRelationInput | ShortDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortDescriptions.
     */
    cursor?: ShortDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortDescriptions.
     */
    distinct?: ShortDescriptionScalarFieldEnum | ShortDescriptionScalarFieldEnum[]
  }

  /**
   * ShortDescription findMany
   */
  export type ShortDescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ShortDescriptions to fetch.
     */
    where?: ShortDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortDescriptions to fetch.
     */
    orderBy?: ShortDescriptionOrderByWithRelationInput | ShortDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShortDescriptions.
     */
    cursor?: ShortDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortDescriptions.
     */
    skip?: number
    distinct?: ShortDescriptionScalarFieldEnum | ShortDescriptionScalarFieldEnum[]
  }

  /**
   * ShortDescription create
   */
  export type ShortDescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ShortDescription.
     */
    data: XOR<ShortDescriptionCreateInput, ShortDescriptionUncheckedCreateInput>
  }

  /**
   * ShortDescription createMany
   */
  export type ShortDescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShortDescriptions.
     */
    data: ShortDescriptionCreateManyInput | ShortDescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShortDescription createManyAndReturn
   */
  export type ShortDescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many ShortDescriptions.
     */
    data: ShortDescriptionCreateManyInput | ShortDescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShortDescription update
   */
  export type ShortDescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ShortDescription.
     */
    data: XOR<ShortDescriptionUpdateInput, ShortDescriptionUncheckedUpdateInput>
    /**
     * Choose, which ShortDescription to update.
     */
    where: ShortDescriptionWhereUniqueInput
  }

  /**
   * ShortDescription updateMany
   */
  export type ShortDescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShortDescriptions.
     */
    data: XOR<ShortDescriptionUpdateManyMutationInput, ShortDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which ShortDescriptions to update
     */
    where?: ShortDescriptionWhereInput
    /**
     * Limit how many ShortDescriptions to update.
     */
    limit?: number
  }

  /**
   * ShortDescription updateManyAndReturn
   */
  export type ShortDescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * The data used to update ShortDescriptions.
     */
    data: XOR<ShortDescriptionUpdateManyMutationInput, ShortDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which ShortDescriptions to update
     */
    where?: ShortDescriptionWhereInput
    /**
     * Limit how many ShortDescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShortDescription upsert
   */
  export type ShortDescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ShortDescription to update in case it exists.
     */
    where: ShortDescriptionWhereUniqueInput
    /**
     * In case the ShortDescription found by the `where` argument doesn't exist, create a new ShortDescription with this data.
     */
    create: XOR<ShortDescriptionCreateInput, ShortDescriptionUncheckedCreateInput>
    /**
     * In case the ShortDescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShortDescriptionUpdateInput, ShortDescriptionUncheckedUpdateInput>
  }

  /**
   * ShortDescription delete
   */
  export type ShortDescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
    /**
     * Filter which ShortDescription to delete.
     */
    where: ShortDescriptionWhereUniqueInput
  }

  /**
   * ShortDescription deleteMany
   */
  export type ShortDescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortDescriptions to delete
     */
    where?: ShortDescriptionWhereInput
    /**
     * Limit how many ShortDescriptions to delete.
     */
    limit?: number
  }

  /**
   * ShortDescription.post
   */
  export type ShortDescription$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * ShortDescription without action
   */
  export type ShortDescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortDescription
     */
    select?: ShortDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortDescription
     */
    omit?: ShortDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortDescriptionInclude<ExtArgs> | null
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
    status: boolean | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    status: boolean | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    status: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
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
    status?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    status?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    status?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    status: boolean
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
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
    status?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    status?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: boolean
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly status: FieldRef<"User", 'Boolean'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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


  export const PageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    introduction: 'introduction',
    avatar: 'avatar'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const SocialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialsScalarFieldEnum = (typeof SocialsScalarFieldEnum)[keyof typeof SocialsScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    status: 'status',
    title: 'title',
    body: 'body',
    cover: 'cover',
    repo: 'repo',
    link: 'link',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostTechScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    postId: 'postId'
  };

  export type PostTechScalarFieldEnum = (typeof PostTechScalarFieldEnum)[keyof typeof PostTechScalarFieldEnum]


  export const PageTechScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pageId: 'pageId'
  };

  export type PageTechScalarFieldEnum = (typeof PageTechScalarFieldEnum)[keyof typeof PageTechScalarFieldEnum]


  export const SectionsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    postId: 'postId'
  };

  export type SectionsScalarFieldEnum = (typeof SectionsScalarFieldEnum)[keyof typeof SectionsScalarFieldEnum]


  export const ShortDescriptionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    postId: 'postId'
  };

  export type ShortDescriptionScalarFieldEnum = (typeof ShortDescriptionScalarFieldEnum)[keyof typeof ShortDescriptionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    status: 'status',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostStatus[]'
   */
  export type ListEnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: IntFilter<"Page"> | number
    name?: StringFilter<"Page"> | string
    introduction?: StringFilter<"Page"> | string
    avatar?: StringFilter<"Page"> | string
    techs?: PageTechListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    introduction?: SortOrder
    avatar?: SortOrder
    techs?: PageTechOrderByRelationAggregateInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    name?: StringFilter<"Page"> | string
    introduction?: StringFilter<"Page"> | string
    avatar?: StringFilter<"Page"> | string
    techs?: PageTechListRelationFilter
  }, "id">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    introduction?: SortOrder
    avatar?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _avg?: PageAvgOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
    _sum?: PageSumOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Page"> | number
    name?: StringWithAggregatesFilter<"Page"> | string
    introduction?: StringWithAggregatesFilter<"Page"> | string
    avatar?: StringWithAggregatesFilter<"Page"> | string
  }

  export type SocialsWhereInput = {
    AND?: SocialsWhereInput | SocialsWhereInput[]
    OR?: SocialsWhereInput[]
    NOT?: SocialsWhereInput | SocialsWhereInput[]
    id?: IntFilter<"Socials"> | number
    name?: StringFilter<"Socials"> | string
    link?: StringFilter<"Socials"> | string
    createdAt?: DateTimeFilter<"Socials"> | Date | string
    updatedAt?: DateTimeFilter<"Socials"> | Date | string
  }

  export type SocialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SocialsWhereInput | SocialsWhereInput[]
    OR?: SocialsWhereInput[]
    NOT?: SocialsWhereInput | SocialsWhereInput[]
    name?: StringFilter<"Socials"> | string
    link?: StringFilter<"Socials"> | string
    createdAt?: DateTimeFilter<"Socials"> | Date | string
    updatedAt?: DateTimeFilter<"Socials"> | Date | string
  }, "id">

  export type SocialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialsCountOrderByAggregateInput
    _avg?: SocialsAvgOrderByAggregateInput
    _max?: SocialsMaxOrderByAggregateInput
    _min?: SocialsMinOrderByAggregateInput
    _sum?: SocialsSumOrderByAggregateInput
  }

  export type SocialsScalarWhereWithAggregatesInput = {
    AND?: SocialsScalarWhereWithAggregatesInput | SocialsScalarWhereWithAggregatesInput[]
    OR?: SocialsScalarWhereWithAggregatesInput[]
    NOT?: SocialsScalarWhereWithAggregatesInput | SocialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Socials"> | number
    name?: StringWithAggregatesFilter<"Socials"> | string
    link?: StringWithAggregatesFilter<"Socials"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Socials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Socials"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    slug?: StringFilter<"Post"> | string
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    cover?: StringFilter<"Post"> | string
    repo?: StringFilter<"Post"> | string
    link?: StringFilter<"Post"> | string
    tags?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    authorId?: IntFilter<"Post"> | number
    shortDescription?: ShortDescriptionListRelationFilter
    techs?: PostTechListRelationFilter
    sections?: SectionsListRelationFilter
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    title?: SortOrder
    body?: SortOrder
    cover?: SortOrder
    repo?: SortOrder
    link?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    shortDescription?: ShortDescriptionOrderByRelationAggregateInput
    techs?: PostTechOrderByRelationAggregateInput
    sections?: SectionsOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    cover?: StringFilter<"Post"> | string
    repo?: StringFilter<"Post"> | string
    link?: StringFilter<"Post"> | string
    tags?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    authorId?: IntFilter<"Post"> | number
    shortDescription?: ShortDescriptionListRelationFilter
    techs?: PostTechListRelationFilter
    sections?: SectionsListRelationFilter
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    title?: SortOrder
    body?: SortOrder
    cover?: SortOrder
    repo?: SortOrder
    link?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    slug?: StringWithAggregatesFilter<"Post"> | string
    status?: EnumPostStatusWithAggregatesFilter<"Post"> | $Enums.PostStatus
    title?: StringWithAggregatesFilter<"Post"> | string
    body?: StringWithAggregatesFilter<"Post"> | string
    cover?: StringWithAggregatesFilter<"Post"> | string
    repo?: StringWithAggregatesFilter<"Post"> | string
    link?: StringWithAggregatesFilter<"Post"> | string
    tags?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    authorId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type PostTechWhereInput = {
    AND?: PostTechWhereInput | PostTechWhereInput[]
    OR?: PostTechWhereInput[]
    NOT?: PostTechWhereInput | PostTechWhereInput[]
    id?: IntFilter<"PostTech"> | number
    name?: StringFilter<"PostTech"> | string
    createdAt?: DateTimeFilter<"PostTech"> | Date | string
    updatedAt?: DateTimeFilter<"PostTech"> | Date | string
    postId?: IntFilter<"PostTech"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostTechOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostTechWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostTechWhereInput | PostTechWhereInput[]
    OR?: PostTechWhereInput[]
    NOT?: PostTechWhereInput | PostTechWhereInput[]
    name?: StringFilter<"PostTech"> | string
    createdAt?: DateTimeFilter<"PostTech"> | Date | string
    updatedAt?: DateTimeFilter<"PostTech"> | Date | string
    postId?: IntFilter<"PostTech"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type PostTechOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    _count?: PostTechCountOrderByAggregateInput
    _avg?: PostTechAvgOrderByAggregateInput
    _max?: PostTechMaxOrderByAggregateInput
    _min?: PostTechMinOrderByAggregateInput
    _sum?: PostTechSumOrderByAggregateInput
  }

  export type PostTechScalarWhereWithAggregatesInput = {
    AND?: PostTechScalarWhereWithAggregatesInput | PostTechScalarWhereWithAggregatesInput[]
    OR?: PostTechScalarWhereWithAggregatesInput[]
    NOT?: PostTechScalarWhereWithAggregatesInput | PostTechScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostTech"> | number
    name?: StringWithAggregatesFilter<"PostTech"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostTech"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostTech"> | Date | string
    postId?: IntWithAggregatesFilter<"PostTech"> | number
  }

  export type PageTechWhereInput = {
    AND?: PageTechWhereInput | PageTechWhereInput[]
    OR?: PageTechWhereInput[]
    NOT?: PageTechWhereInput | PageTechWhereInput[]
    id?: IntFilter<"PageTech"> | number
    name?: StringFilter<"PageTech"> | string
    createdAt?: DateTimeFilter<"PageTech"> | Date | string
    updatedAt?: DateTimeFilter<"PageTech"> | Date | string
    pageId?: IntFilter<"PageTech"> | number
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }

  export type PageTechOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageId?: SortOrder
    page?: PageOrderByWithRelationInput
  }

  export type PageTechWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PageTechWhereInput | PageTechWhereInput[]
    OR?: PageTechWhereInput[]
    NOT?: PageTechWhereInput | PageTechWhereInput[]
    name?: StringFilter<"PageTech"> | string
    createdAt?: DateTimeFilter<"PageTech"> | Date | string
    updatedAt?: DateTimeFilter<"PageTech"> | Date | string
    pageId?: IntFilter<"PageTech"> | number
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }, "id">

  export type PageTechOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageId?: SortOrder
    _count?: PageTechCountOrderByAggregateInput
    _avg?: PageTechAvgOrderByAggregateInput
    _max?: PageTechMaxOrderByAggregateInput
    _min?: PageTechMinOrderByAggregateInput
    _sum?: PageTechSumOrderByAggregateInput
  }

  export type PageTechScalarWhereWithAggregatesInput = {
    AND?: PageTechScalarWhereWithAggregatesInput | PageTechScalarWhereWithAggregatesInput[]
    OR?: PageTechScalarWhereWithAggregatesInput[]
    NOT?: PageTechScalarWhereWithAggregatesInput | PageTechScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PageTech"> | number
    name?: StringWithAggregatesFilter<"PageTech"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PageTech"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PageTech"> | Date | string
    pageId?: IntWithAggregatesFilter<"PageTech"> | number
  }

  export type SectionsWhereInput = {
    AND?: SectionsWhereInput | SectionsWhereInput[]
    OR?: SectionsWhereInput[]
    NOT?: SectionsWhereInput | SectionsWhereInput[]
    id?: IntFilter<"Sections"> | number
    title?: StringFilter<"Sections"> | string
    image?: StringFilter<"Sections"> | string
    createdAt?: DateTimeFilter<"Sections"> | Date | string
    updatedAt?: DateTimeFilter<"Sections"> | Date | string
    postId?: IntFilter<"Sections"> | number
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type SectionsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type SectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SectionsWhereInput | SectionsWhereInput[]
    OR?: SectionsWhereInput[]
    NOT?: SectionsWhereInput | SectionsWhereInput[]
    title?: StringFilter<"Sections"> | string
    image?: StringFilter<"Sections"> | string
    createdAt?: DateTimeFilter<"Sections"> | Date | string
    updatedAt?: DateTimeFilter<"Sections"> | Date | string
    postId?: IntFilter<"Sections"> | number
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id">

  export type SectionsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    _count?: SectionsCountOrderByAggregateInput
    _avg?: SectionsAvgOrderByAggregateInput
    _max?: SectionsMaxOrderByAggregateInput
    _min?: SectionsMinOrderByAggregateInput
    _sum?: SectionsSumOrderByAggregateInput
  }

  export type SectionsScalarWhereWithAggregatesInput = {
    AND?: SectionsScalarWhereWithAggregatesInput | SectionsScalarWhereWithAggregatesInput[]
    OR?: SectionsScalarWhereWithAggregatesInput[]
    NOT?: SectionsScalarWhereWithAggregatesInput | SectionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sections"> | number
    title?: StringWithAggregatesFilter<"Sections"> | string
    image?: StringWithAggregatesFilter<"Sections"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sections"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sections"> | Date | string
    postId?: IntWithAggregatesFilter<"Sections"> | number
  }

  export type ShortDescriptionWhereInput = {
    AND?: ShortDescriptionWhereInput | ShortDescriptionWhereInput[]
    OR?: ShortDescriptionWhereInput[]
    NOT?: ShortDescriptionWhereInput | ShortDescriptionWhereInput[]
    id?: IntFilter<"ShortDescription"> | number
    description?: StringFilter<"ShortDescription"> | string
    createdAt?: DateTimeFilter<"ShortDescription"> | Date | string
    updatedAt?: DateTimeFilter<"ShortDescription"> | Date | string
    postId?: IntFilter<"ShortDescription"> | number
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type ShortDescriptionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type ShortDescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShortDescriptionWhereInput | ShortDescriptionWhereInput[]
    OR?: ShortDescriptionWhereInput[]
    NOT?: ShortDescriptionWhereInput | ShortDescriptionWhereInput[]
    description?: StringFilter<"ShortDescription"> | string
    createdAt?: DateTimeFilter<"ShortDescription"> | Date | string
    updatedAt?: DateTimeFilter<"ShortDescription"> | Date | string
    postId?: IntFilter<"ShortDescription"> | number
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id">

  export type ShortDescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    _count?: ShortDescriptionCountOrderByAggregateInput
    _avg?: ShortDescriptionAvgOrderByAggregateInput
    _max?: ShortDescriptionMaxOrderByAggregateInput
    _min?: ShortDescriptionMinOrderByAggregateInput
    _sum?: ShortDescriptionSumOrderByAggregateInput
  }

  export type ShortDescriptionScalarWhereWithAggregatesInput = {
    AND?: ShortDescriptionScalarWhereWithAggregatesInput | ShortDescriptionScalarWhereWithAggregatesInput[]
    OR?: ShortDescriptionScalarWhereWithAggregatesInput[]
    NOT?: ShortDescriptionScalarWhereWithAggregatesInput | ShortDescriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShortDescription"> | number
    description?: StringWithAggregatesFilter<"ShortDescription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShortDescription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShortDescription"> | Date | string
    postId?: IntWithAggregatesFilter<"ShortDescription"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    status?: BoolFilter<"User"> | boolean
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    status?: BoolFilter<"User"> | boolean
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    status?: BoolWithAggregatesFilter<"User"> | boolean
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PageCreateInput = {
    name: string
    introduction: string
    avatar: string
    techs?: PageTechCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: number
    name: string
    introduction: string
    avatar: string
    techs?: PageTechUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    techs?: PageTechUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    techs?: PageTechUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageCreateManyInput = {
    id?: number
    name: string
    introduction: string
    avatar: string
  }

  export type PageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type SocialsCreateInput = {
    name: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialsUncheckedCreateInput = {
    id?: number
    name: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialsCreateManyInput = {
    id?: number
    name: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shortDescription?: ShortDescriptionCreateNestedManyWithoutPostInput
    techs?: PostTechCreateNestedManyWithoutPostInput
    sections?: SectionsCreateNestedManyWithoutPostInput
    author?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    shortDescription?: ShortDescriptionUncheckedCreateNestedManyWithoutPostInput
    techs?: PostTechUncheckedCreateNestedManyWithoutPostInput
    sections?: SectionsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortDescription?: ShortDescriptionUpdateManyWithoutPostNestedInput
    techs?: PostTechUpdateManyWithoutPostNestedInput
    sections?: SectionsUpdateManyWithoutPostNestedInput
    author?: UserUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    shortDescription?: ShortDescriptionUncheckedUpdateManyWithoutPostNestedInput
    techs?: PostTechUncheckedUpdateManyWithoutPostNestedInput
    sections?: SectionsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostTechCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutTechsInput
  }

  export type PostTechUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
  }

  export type PostTechUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutTechsNestedInput
  }

  export type PostTechUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostTechCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
  }

  export type PostTechUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTechUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PageTechCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutTechsInput
  }

  export type PageTechUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pageId: number
  }

  export type PageTechUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutTechsNestedInput
  }

  export type PageTechUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageId?: IntFieldUpdateOperationsInput | number
  }

  export type PageTechCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pageId: number
  }

  export type PageTechUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageTechUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageId?: IntFieldUpdateOperationsInput | number
  }

  export type SectionsCreateInput = {
    title: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostCreateNestedOneWithoutSectionsInput
  }

  export type SectionsUncheckedCreateInput = {
    id?: number
    title: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
  }

  export type SectionsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutSectionsNestedInput
  }

  export type SectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type SectionsCreateManyInput = {
    id?: number
    title: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
  }

  export type SectionsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type ShortDescriptionCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostCreateNestedOneWithoutShortDescriptionInput
  }

  export type ShortDescriptionUncheckedCreateInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
  }

  export type ShortDescriptionUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutShortDescriptionNestedInput
  }

  export type ShortDescriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type ShortDescriptionCreateManyInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
  }

  export type ShortDescriptionUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortDescriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    status?: boolean
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    status?: boolean
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    status?: boolean
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PageTechListRelationFilter = {
    every?: PageTechWhereInput
    some?: PageTechWhereInput
    none?: PageTechWhereInput
  }

  export type PageTechOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    introduction?: SortOrder
    avatar?: SortOrder
  }

  export type PageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    introduction?: SortOrder
    avatar?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    introduction?: SortOrder
    avatar?: SortOrder
  }

  export type PageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SocialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SocialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type ShortDescriptionListRelationFilter = {
    every?: ShortDescriptionWhereInput
    some?: ShortDescriptionWhereInput
    none?: ShortDescriptionWhereInput
  }

  export type PostTechListRelationFilter = {
    every?: PostTechWhereInput
    some?: PostTechWhereInput
    none?: PostTechWhereInput
  }

  export type SectionsListRelationFilter = {
    every?: SectionsWhereInput
    some?: SectionsWhereInput
    none?: SectionsWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ShortDescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostTechOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    title?: SortOrder
    body?: SortOrder
    cover?: SortOrder
    repo?: SortOrder
    link?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    title?: SortOrder
    body?: SortOrder
    cover?: SortOrder
    repo?: SortOrder
    link?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    title?: SortOrder
    body?: SortOrder
    cover?: SortOrder
    repo?: SortOrder
    link?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostTechCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type PostTechAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PostTechMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type PostTechMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type PostTechSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PageScalarRelationFilter = {
    is?: PageWhereInput
    isNot?: PageWhereInput
  }

  export type PageTechCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageId?: SortOrder
  }

  export type PageTechAvgOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
  }

  export type PageTechMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageId?: SortOrder
  }

  export type PageTechMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageId?: SortOrder
  }

  export type PageTechSumOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type SectionsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type SectionsAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type SectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type SectionsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type SectionsSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type ShortDescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type ShortDescriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type ShortDescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type ShortDescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type ShortDescriptionSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PageTechCreateNestedManyWithoutPageInput = {
    create?: XOR<PageTechCreateWithoutPageInput, PageTechUncheckedCreateWithoutPageInput> | PageTechCreateWithoutPageInput[] | PageTechUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageTechCreateOrConnectWithoutPageInput | PageTechCreateOrConnectWithoutPageInput[]
    createMany?: PageTechCreateManyPageInputEnvelope
    connect?: PageTechWhereUniqueInput | PageTechWhereUniqueInput[]
  }

  export type PageTechUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<PageTechCreateWithoutPageInput, PageTechUncheckedCreateWithoutPageInput> | PageTechCreateWithoutPageInput[] | PageTechUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageTechCreateOrConnectWithoutPageInput | PageTechCreateOrConnectWithoutPageInput[]
    createMany?: PageTechCreateManyPageInputEnvelope
    connect?: PageTechWhereUniqueInput | PageTechWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PageTechUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageTechCreateWithoutPageInput, PageTechUncheckedCreateWithoutPageInput> | PageTechCreateWithoutPageInput[] | PageTechUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageTechCreateOrConnectWithoutPageInput | PageTechCreateOrConnectWithoutPageInput[]
    upsert?: PageTechUpsertWithWhereUniqueWithoutPageInput | PageTechUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageTechCreateManyPageInputEnvelope
    set?: PageTechWhereUniqueInput | PageTechWhereUniqueInput[]
    disconnect?: PageTechWhereUniqueInput | PageTechWhereUniqueInput[]
    delete?: PageTechWhereUniqueInput | PageTechWhereUniqueInput[]
    connect?: PageTechWhereUniqueInput | PageTechWhereUniqueInput[]
    update?: PageTechUpdateWithWhereUniqueWithoutPageInput | PageTechUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageTechUpdateManyWithWhereWithoutPageInput | PageTechUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageTechScalarWhereInput | PageTechScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PageTechUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageTechCreateWithoutPageInput, PageTechUncheckedCreateWithoutPageInput> | PageTechCreateWithoutPageInput[] | PageTechUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageTechCreateOrConnectWithoutPageInput | PageTechCreateOrConnectWithoutPageInput[]
    upsert?: PageTechUpsertWithWhereUniqueWithoutPageInput | PageTechUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageTechCreateManyPageInputEnvelope
    set?: PageTechWhereUniqueInput | PageTechWhereUniqueInput[]
    disconnect?: PageTechWhereUniqueInput | PageTechWhereUniqueInput[]
    delete?: PageTechWhereUniqueInput | PageTechWhereUniqueInput[]
    connect?: PageTechWhereUniqueInput | PageTechWhereUniqueInput[]
    update?: PageTechUpdateWithWhereUniqueWithoutPageInput | PageTechUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageTechUpdateManyWithWhereWithoutPageInput | PageTechUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageTechScalarWhereInput | PageTechScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShortDescriptionCreateNestedManyWithoutPostInput = {
    create?: XOR<ShortDescriptionCreateWithoutPostInput, ShortDescriptionUncheckedCreateWithoutPostInput> | ShortDescriptionCreateWithoutPostInput[] | ShortDescriptionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ShortDescriptionCreateOrConnectWithoutPostInput | ShortDescriptionCreateOrConnectWithoutPostInput[]
    createMany?: ShortDescriptionCreateManyPostInputEnvelope
    connect?: ShortDescriptionWhereUniqueInput | ShortDescriptionWhereUniqueInput[]
  }

  export type PostTechCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTechCreateWithoutPostInput, PostTechUncheckedCreateWithoutPostInput> | PostTechCreateWithoutPostInput[] | PostTechUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTechCreateOrConnectWithoutPostInput | PostTechCreateOrConnectWithoutPostInput[]
    createMany?: PostTechCreateManyPostInputEnvelope
    connect?: PostTechWhereUniqueInput | PostTechWhereUniqueInput[]
  }

  export type SectionsCreateNestedManyWithoutPostInput = {
    create?: XOR<SectionsCreateWithoutPostInput, SectionsUncheckedCreateWithoutPostInput> | SectionsCreateWithoutPostInput[] | SectionsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SectionsCreateOrConnectWithoutPostInput | SectionsCreateOrConnectWithoutPostInput[]
    createMany?: SectionsCreateManyPostInputEnvelope
    connect?: SectionsWhereUniqueInput | SectionsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ShortDescriptionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ShortDescriptionCreateWithoutPostInput, ShortDescriptionUncheckedCreateWithoutPostInput> | ShortDescriptionCreateWithoutPostInput[] | ShortDescriptionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ShortDescriptionCreateOrConnectWithoutPostInput | ShortDescriptionCreateOrConnectWithoutPostInput[]
    createMany?: ShortDescriptionCreateManyPostInputEnvelope
    connect?: ShortDescriptionWhereUniqueInput | ShortDescriptionWhereUniqueInput[]
  }

  export type PostTechUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTechCreateWithoutPostInput, PostTechUncheckedCreateWithoutPostInput> | PostTechCreateWithoutPostInput[] | PostTechUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTechCreateOrConnectWithoutPostInput | PostTechCreateOrConnectWithoutPostInput[]
    createMany?: PostTechCreateManyPostInputEnvelope
    connect?: PostTechWhereUniqueInput | PostTechWhereUniqueInput[]
  }

  export type SectionsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SectionsCreateWithoutPostInput, SectionsUncheckedCreateWithoutPostInput> | SectionsCreateWithoutPostInput[] | SectionsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SectionsCreateOrConnectWithoutPostInput | SectionsCreateOrConnectWithoutPostInput[]
    createMany?: SectionsCreateManyPostInputEnvelope
    connect?: SectionsWhereUniqueInput | SectionsWhereUniqueInput[]
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type ShortDescriptionUpdateManyWithoutPostNestedInput = {
    create?: XOR<ShortDescriptionCreateWithoutPostInput, ShortDescriptionUncheckedCreateWithoutPostInput> | ShortDescriptionCreateWithoutPostInput[] | ShortDescriptionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ShortDescriptionCreateOrConnectWithoutPostInput | ShortDescriptionCreateOrConnectWithoutPostInput[]
    upsert?: ShortDescriptionUpsertWithWhereUniqueWithoutPostInput | ShortDescriptionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ShortDescriptionCreateManyPostInputEnvelope
    set?: ShortDescriptionWhereUniqueInput | ShortDescriptionWhereUniqueInput[]
    disconnect?: ShortDescriptionWhereUniqueInput | ShortDescriptionWhereUniqueInput[]
    delete?: ShortDescriptionWhereUniqueInput | ShortDescriptionWhereUniqueInput[]
    connect?: ShortDescriptionWhereUniqueInput | ShortDescriptionWhereUniqueInput[]
    update?: ShortDescriptionUpdateWithWhereUniqueWithoutPostInput | ShortDescriptionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ShortDescriptionUpdateManyWithWhereWithoutPostInput | ShortDescriptionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ShortDescriptionScalarWhereInput | ShortDescriptionScalarWhereInput[]
  }

  export type PostTechUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTechCreateWithoutPostInput, PostTechUncheckedCreateWithoutPostInput> | PostTechCreateWithoutPostInput[] | PostTechUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTechCreateOrConnectWithoutPostInput | PostTechCreateOrConnectWithoutPostInput[]
    upsert?: PostTechUpsertWithWhereUniqueWithoutPostInput | PostTechUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTechCreateManyPostInputEnvelope
    set?: PostTechWhereUniqueInput | PostTechWhereUniqueInput[]
    disconnect?: PostTechWhereUniqueInput | PostTechWhereUniqueInput[]
    delete?: PostTechWhereUniqueInput | PostTechWhereUniqueInput[]
    connect?: PostTechWhereUniqueInput | PostTechWhereUniqueInput[]
    update?: PostTechUpdateWithWhereUniqueWithoutPostInput | PostTechUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTechUpdateManyWithWhereWithoutPostInput | PostTechUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTechScalarWhereInput | PostTechScalarWhereInput[]
  }

  export type SectionsUpdateManyWithoutPostNestedInput = {
    create?: XOR<SectionsCreateWithoutPostInput, SectionsUncheckedCreateWithoutPostInput> | SectionsCreateWithoutPostInput[] | SectionsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SectionsCreateOrConnectWithoutPostInput | SectionsCreateOrConnectWithoutPostInput[]
    upsert?: SectionsUpsertWithWhereUniqueWithoutPostInput | SectionsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SectionsCreateManyPostInputEnvelope
    set?: SectionsWhereUniqueInput | SectionsWhereUniqueInput[]
    disconnect?: SectionsWhereUniqueInput | SectionsWhereUniqueInput[]
    delete?: SectionsWhereUniqueInput | SectionsWhereUniqueInput[]
    connect?: SectionsWhereUniqueInput | SectionsWhereUniqueInput[]
    update?: SectionsUpdateWithWhereUniqueWithoutPostInput | SectionsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SectionsUpdateManyWithWhereWithoutPostInput | SectionsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SectionsScalarWhereInput | SectionsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ShortDescriptionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ShortDescriptionCreateWithoutPostInput, ShortDescriptionUncheckedCreateWithoutPostInput> | ShortDescriptionCreateWithoutPostInput[] | ShortDescriptionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ShortDescriptionCreateOrConnectWithoutPostInput | ShortDescriptionCreateOrConnectWithoutPostInput[]
    upsert?: ShortDescriptionUpsertWithWhereUniqueWithoutPostInput | ShortDescriptionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ShortDescriptionCreateManyPostInputEnvelope
    set?: ShortDescriptionWhereUniqueInput | ShortDescriptionWhereUniqueInput[]
    disconnect?: ShortDescriptionWhereUniqueInput | ShortDescriptionWhereUniqueInput[]
    delete?: ShortDescriptionWhereUniqueInput | ShortDescriptionWhereUniqueInput[]
    connect?: ShortDescriptionWhereUniqueInput | ShortDescriptionWhereUniqueInput[]
    update?: ShortDescriptionUpdateWithWhereUniqueWithoutPostInput | ShortDescriptionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ShortDescriptionUpdateManyWithWhereWithoutPostInput | ShortDescriptionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ShortDescriptionScalarWhereInput | ShortDescriptionScalarWhereInput[]
  }

  export type PostTechUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTechCreateWithoutPostInput, PostTechUncheckedCreateWithoutPostInput> | PostTechCreateWithoutPostInput[] | PostTechUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTechCreateOrConnectWithoutPostInput | PostTechCreateOrConnectWithoutPostInput[]
    upsert?: PostTechUpsertWithWhereUniqueWithoutPostInput | PostTechUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTechCreateManyPostInputEnvelope
    set?: PostTechWhereUniqueInput | PostTechWhereUniqueInput[]
    disconnect?: PostTechWhereUniqueInput | PostTechWhereUniqueInput[]
    delete?: PostTechWhereUniqueInput | PostTechWhereUniqueInput[]
    connect?: PostTechWhereUniqueInput | PostTechWhereUniqueInput[]
    update?: PostTechUpdateWithWhereUniqueWithoutPostInput | PostTechUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTechUpdateManyWithWhereWithoutPostInput | PostTechUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTechScalarWhereInput | PostTechScalarWhereInput[]
  }

  export type SectionsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SectionsCreateWithoutPostInput, SectionsUncheckedCreateWithoutPostInput> | SectionsCreateWithoutPostInput[] | SectionsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SectionsCreateOrConnectWithoutPostInput | SectionsCreateOrConnectWithoutPostInput[]
    upsert?: SectionsUpsertWithWhereUniqueWithoutPostInput | SectionsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SectionsCreateManyPostInputEnvelope
    set?: SectionsWhereUniqueInput | SectionsWhereUniqueInput[]
    disconnect?: SectionsWhereUniqueInput | SectionsWhereUniqueInput[]
    delete?: SectionsWhereUniqueInput | SectionsWhereUniqueInput[]
    connect?: SectionsWhereUniqueInput | SectionsWhereUniqueInput[]
    update?: SectionsUpdateWithWhereUniqueWithoutPostInput | SectionsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SectionsUpdateManyWithWhereWithoutPostInput | SectionsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SectionsScalarWhereInput | SectionsScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutTechsInput = {
    create?: XOR<PostCreateWithoutTechsInput, PostUncheckedCreateWithoutTechsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTechsInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutTechsNestedInput = {
    create?: XOR<PostCreateWithoutTechsInput, PostUncheckedCreateWithoutTechsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTechsInput
    upsert?: PostUpsertWithoutTechsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutTechsInput, PostUpdateWithoutTechsInput>, PostUncheckedUpdateWithoutTechsInput>
  }

  export type PageCreateNestedOneWithoutTechsInput = {
    create?: XOR<PageCreateWithoutTechsInput, PageUncheckedCreateWithoutTechsInput>
    connectOrCreate?: PageCreateOrConnectWithoutTechsInput
    connect?: PageWhereUniqueInput
  }

  export type PageUpdateOneRequiredWithoutTechsNestedInput = {
    create?: XOR<PageCreateWithoutTechsInput, PageUncheckedCreateWithoutTechsInput>
    connectOrCreate?: PageCreateOrConnectWithoutTechsInput
    upsert?: PageUpsertWithoutTechsInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutTechsInput, PageUpdateWithoutTechsInput>, PageUncheckedUpdateWithoutTechsInput>
  }

  export type PostCreateNestedOneWithoutSectionsInput = {
    create?: XOR<PostCreateWithoutSectionsInput, PostUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutSectionsInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneWithoutSectionsNestedInput = {
    create?: XOR<PostCreateWithoutSectionsInput, PostUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutSectionsInput
    upsert?: PostUpsertWithoutSectionsInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutSectionsInput, PostUpdateWithoutSectionsInput>, PostUncheckedUpdateWithoutSectionsInput>
  }

  export type PostCreateNestedOneWithoutShortDescriptionInput = {
    create?: XOR<PostCreateWithoutShortDescriptionInput, PostUncheckedCreateWithoutShortDescriptionInput>
    connectOrCreate?: PostCreateOrConnectWithoutShortDescriptionInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneWithoutShortDescriptionNestedInput = {
    create?: XOR<PostCreateWithoutShortDescriptionInput, PostUncheckedCreateWithoutShortDescriptionInput>
    connectOrCreate?: PostCreateOrConnectWithoutShortDescriptionInput
    upsert?: PostUpsertWithoutShortDescriptionInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutShortDescriptionInput, PostUpdateWithoutShortDescriptionInput>, PostUncheckedUpdateWithoutShortDescriptionInput>
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PageTechCreateWithoutPageInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageTechUncheckedCreateWithoutPageInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageTechCreateOrConnectWithoutPageInput = {
    where: PageTechWhereUniqueInput
    create: XOR<PageTechCreateWithoutPageInput, PageTechUncheckedCreateWithoutPageInput>
  }

  export type PageTechCreateManyPageInputEnvelope = {
    data: PageTechCreateManyPageInput | PageTechCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type PageTechUpsertWithWhereUniqueWithoutPageInput = {
    where: PageTechWhereUniqueInput
    update: XOR<PageTechUpdateWithoutPageInput, PageTechUncheckedUpdateWithoutPageInput>
    create: XOR<PageTechCreateWithoutPageInput, PageTechUncheckedCreateWithoutPageInput>
  }

  export type PageTechUpdateWithWhereUniqueWithoutPageInput = {
    where: PageTechWhereUniqueInput
    data: XOR<PageTechUpdateWithoutPageInput, PageTechUncheckedUpdateWithoutPageInput>
  }

  export type PageTechUpdateManyWithWhereWithoutPageInput = {
    where: PageTechScalarWhereInput
    data: XOR<PageTechUpdateManyMutationInput, PageTechUncheckedUpdateManyWithoutPageInput>
  }

  export type PageTechScalarWhereInput = {
    AND?: PageTechScalarWhereInput | PageTechScalarWhereInput[]
    OR?: PageTechScalarWhereInput[]
    NOT?: PageTechScalarWhereInput | PageTechScalarWhereInput[]
    id?: IntFilter<"PageTech"> | number
    name?: StringFilter<"PageTech"> | string
    createdAt?: DateTimeFilter<"PageTech"> | Date | string
    updatedAt?: DateTimeFilter<"PageTech"> | Date | string
    pageId?: IntFilter<"PageTech"> | number
  }

  export type ShortDescriptionCreateWithoutPostInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShortDescriptionUncheckedCreateWithoutPostInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShortDescriptionCreateOrConnectWithoutPostInput = {
    where: ShortDescriptionWhereUniqueInput
    create: XOR<ShortDescriptionCreateWithoutPostInput, ShortDescriptionUncheckedCreateWithoutPostInput>
  }

  export type ShortDescriptionCreateManyPostInputEnvelope = {
    data: ShortDescriptionCreateManyPostInput | ShortDescriptionCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostTechCreateWithoutPostInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostTechUncheckedCreateWithoutPostInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostTechCreateOrConnectWithoutPostInput = {
    where: PostTechWhereUniqueInput
    create: XOR<PostTechCreateWithoutPostInput, PostTechUncheckedCreateWithoutPostInput>
  }

  export type PostTechCreateManyPostInputEnvelope = {
    data: PostTechCreateManyPostInput | PostTechCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SectionsCreateWithoutPostInput = {
    title: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionsUncheckedCreateWithoutPostInput = {
    id?: number
    title: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionsCreateOrConnectWithoutPostInput = {
    where: SectionsWhereUniqueInput
    create: XOR<SectionsCreateWithoutPostInput, SectionsUncheckedCreateWithoutPostInput>
  }

  export type SectionsCreateManyPostInputEnvelope = {
    data: SectionsCreateManyPostInput | SectionsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPostsInput = {
    status?: boolean
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    status?: boolean
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ShortDescriptionUpsertWithWhereUniqueWithoutPostInput = {
    where: ShortDescriptionWhereUniqueInput
    update: XOR<ShortDescriptionUpdateWithoutPostInput, ShortDescriptionUncheckedUpdateWithoutPostInput>
    create: XOR<ShortDescriptionCreateWithoutPostInput, ShortDescriptionUncheckedCreateWithoutPostInput>
  }

  export type ShortDescriptionUpdateWithWhereUniqueWithoutPostInput = {
    where: ShortDescriptionWhereUniqueInput
    data: XOR<ShortDescriptionUpdateWithoutPostInput, ShortDescriptionUncheckedUpdateWithoutPostInput>
  }

  export type ShortDescriptionUpdateManyWithWhereWithoutPostInput = {
    where: ShortDescriptionScalarWhereInput
    data: XOR<ShortDescriptionUpdateManyMutationInput, ShortDescriptionUncheckedUpdateManyWithoutPostInput>
  }

  export type ShortDescriptionScalarWhereInput = {
    AND?: ShortDescriptionScalarWhereInput | ShortDescriptionScalarWhereInput[]
    OR?: ShortDescriptionScalarWhereInput[]
    NOT?: ShortDescriptionScalarWhereInput | ShortDescriptionScalarWhereInput[]
    id?: IntFilter<"ShortDescription"> | number
    description?: StringFilter<"ShortDescription"> | string
    createdAt?: DateTimeFilter<"ShortDescription"> | Date | string
    updatedAt?: DateTimeFilter<"ShortDescription"> | Date | string
    postId?: IntFilter<"ShortDescription"> | number
  }

  export type PostTechUpsertWithWhereUniqueWithoutPostInput = {
    where: PostTechWhereUniqueInput
    update: XOR<PostTechUpdateWithoutPostInput, PostTechUncheckedUpdateWithoutPostInput>
    create: XOR<PostTechCreateWithoutPostInput, PostTechUncheckedCreateWithoutPostInput>
  }

  export type PostTechUpdateWithWhereUniqueWithoutPostInput = {
    where: PostTechWhereUniqueInput
    data: XOR<PostTechUpdateWithoutPostInput, PostTechUncheckedUpdateWithoutPostInput>
  }

  export type PostTechUpdateManyWithWhereWithoutPostInput = {
    where: PostTechScalarWhereInput
    data: XOR<PostTechUpdateManyMutationInput, PostTechUncheckedUpdateManyWithoutPostInput>
  }

  export type PostTechScalarWhereInput = {
    AND?: PostTechScalarWhereInput | PostTechScalarWhereInput[]
    OR?: PostTechScalarWhereInput[]
    NOT?: PostTechScalarWhereInput | PostTechScalarWhereInput[]
    id?: IntFilter<"PostTech"> | number
    name?: StringFilter<"PostTech"> | string
    createdAt?: DateTimeFilter<"PostTech"> | Date | string
    updatedAt?: DateTimeFilter<"PostTech"> | Date | string
    postId?: IntFilter<"PostTech"> | number
  }

  export type SectionsUpsertWithWhereUniqueWithoutPostInput = {
    where: SectionsWhereUniqueInput
    update: XOR<SectionsUpdateWithoutPostInput, SectionsUncheckedUpdateWithoutPostInput>
    create: XOR<SectionsCreateWithoutPostInput, SectionsUncheckedCreateWithoutPostInput>
  }

  export type SectionsUpdateWithWhereUniqueWithoutPostInput = {
    where: SectionsWhereUniqueInput
    data: XOR<SectionsUpdateWithoutPostInput, SectionsUncheckedUpdateWithoutPostInput>
  }

  export type SectionsUpdateManyWithWhereWithoutPostInput = {
    where: SectionsScalarWhereInput
    data: XOR<SectionsUpdateManyMutationInput, SectionsUncheckedUpdateManyWithoutPostInput>
  }

  export type SectionsScalarWhereInput = {
    AND?: SectionsScalarWhereInput | SectionsScalarWhereInput[]
    OR?: SectionsScalarWhereInput[]
    NOT?: SectionsScalarWhereInput | SectionsScalarWhereInput[]
    id?: IntFilter<"Sections"> | number
    title?: StringFilter<"Sections"> | string
    image?: StringFilter<"Sections"> | string
    createdAt?: DateTimeFilter<"Sections"> | Date | string
    updatedAt?: DateTimeFilter<"Sections"> | Date | string
    postId?: IntFilter<"Sections"> | number
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutTechsInput = {
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shortDescription?: ShortDescriptionCreateNestedManyWithoutPostInput
    sections?: SectionsCreateNestedManyWithoutPostInput
    author?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutTechsInput = {
    id?: number
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    shortDescription?: ShortDescriptionUncheckedCreateNestedManyWithoutPostInput
    sections?: SectionsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTechsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTechsInput, PostUncheckedCreateWithoutTechsInput>
  }

  export type PostUpsertWithoutTechsInput = {
    update: XOR<PostUpdateWithoutTechsInput, PostUncheckedUpdateWithoutTechsInput>
    create: XOR<PostCreateWithoutTechsInput, PostUncheckedCreateWithoutTechsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutTechsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutTechsInput, PostUncheckedUpdateWithoutTechsInput>
  }

  export type PostUpdateWithoutTechsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortDescription?: ShortDescriptionUpdateManyWithoutPostNestedInput
    sections?: SectionsUpdateManyWithoutPostNestedInput
    author?: UserUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutTechsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    shortDescription?: ShortDescriptionUncheckedUpdateManyWithoutPostNestedInput
    sections?: SectionsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PageCreateWithoutTechsInput = {
    name: string
    introduction: string
    avatar: string
  }

  export type PageUncheckedCreateWithoutTechsInput = {
    id?: number
    name: string
    introduction: string
    avatar: string
  }

  export type PageCreateOrConnectWithoutTechsInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutTechsInput, PageUncheckedCreateWithoutTechsInput>
  }

  export type PageUpsertWithoutTechsInput = {
    update: XOR<PageUpdateWithoutTechsInput, PageUncheckedUpdateWithoutTechsInput>
    create: XOR<PageCreateWithoutTechsInput, PageUncheckedCreateWithoutTechsInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutTechsInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutTechsInput, PageUncheckedUpdateWithoutTechsInput>
  }

  export type PageUpdateWithoutTechsInput = {
    name?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type PageUncheckedUpdateWithoutTechsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateWithoutSectionsInput = {
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shortDescription?: ShortDescriptionCreateNestedManyWithoutPostInput
    techs?: PostTechCreateNestedManyWithoutPostInput
    author?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutSectionsInput = {
    id?: number
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    shortDescription?: ShortDescriptionUncheckedCreateNestedManyWithoutPostInput
    techs?: PostTechUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutSectionsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSectionsInput, PostUncheckedCreateWithoutSectionsInput>
  }

  export type PostUpsertWithoutSectionsInput = {
    update: XOR<PostUpdateWithoutSectionsInput, PostUncheckedUpdateWithoutSectionsInput>
    create: XOR<PostCreateWithoutSectionsInput, PostUncheckedCreateWithoutSectionsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutSectionsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutSectionsInput, PostUncheckedUpdateWithoutSectionsInput>
  }

  export type PostUpdateWithoutSectionsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortDescription?: ShortDescriptionUpdateManyWithoutPostNestedInput
    techs?: PostTechUpdateManyWithoutPostNestedInput
    author?: UserUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    shortDescription?: ShortDescriptionUncheckedUpdateManyWithoutPostNestedInput
    techs?: PostTechUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutShortDescriptionInput = {
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    techs?: PostTechCreateNestedManyWithoutPostInput
    sections?: SectionsCreateNestedManyWithoutPostInput
    author?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutShortDescriptionInput = {
    id?: number
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    techs?: PostTechUncheckedCreateNestedManyWithoutPostInput
    sections?: SectionsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutShortDescriptionInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutShortDescriptionInput, PostUncheckedCreateWithoutShortDescriptionInput>
  }

  export type PostUpsertWithoutShortDescriptionInput = {
    update: XOR<PostUpdateWithoutShortDescriptionInput, PostUncheckedUpdateWithoutShortDescriptionInput>
    create: XOR<PostCreateWithoutShortDescriptionInput, PostUncheckedCreateWithoutShortDescriptionInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutShortDescriptionInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutShortDescriptionInput, PostUncheckedUpdateWithoutShortDescriptionInput>
  }

  export type PostUpdateWithoutShortDescriptionInput = {
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techs?: PostTechUpdateManyWithoutPostNestedInput
    sections?: SectionsUpdateManyWithoutPostNestedInput
    author?: UserUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutShortDescriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    techs?: PostTechUncheckedUpdateManyWithoutPostNestedInput
    sections?: SectionsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutAuthorInput = {
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shortDescription?: ShortDescriptionCreateNestedManyWithoutPostInput
    techs?: PostTechCreateNestedManyWithoutPostInput
    sections?: SectionsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shortDescription?: ShortDescriptionUncheckedCreateNestedManyWithoutPostInput
    techs?: PostTechUncheckedCreateNestedManyWithoutPostInput
    sections?: SectionsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    slug?: StringFilter<"Post"> | string
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    cover?: StringFilter<"Post"> | string
    repo?: StringFilter<"Post"> | string
    link?: StringFilter<"Post"> | string
    tags?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    authorId?: IntFilter<"Post"> | number
  }

  export type PageTechCreateManyPageInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageTechUpdateWithoutPageInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageTechUncheckedUpdateWithoutPageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageTechUncheckedUpdateManyWithoutPageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortDescriptionCreateManyPostInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostTechCreateManyPostInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionsCreateManyPostInput = {
    id?: number
    title: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShortDescriptionUpdateWithoutPostInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortDescriptionUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortDescriptionUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTechUpdateWithoutPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTechUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTechUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionsUpdateWithoutPostInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionsUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionsUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    slug: string
    status?: $Enums.PostStatus
    title: string
    body: string
    cover: string
    repo: string
    link: string
    tags?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortDescription?: ShortDescriptionUpdateManyWithoutPostNestedInput
    techs?: PostTechUpdateManyWithoutPostNestedInput
    sections?: SectionsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortDescription?: ShortDescriptionUncheckedUpdateManyWithoutPostNestedInput
    techs?: PostTechUncheckedUpdateManyWithoutPostNestedInput
    sections?: SectionsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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