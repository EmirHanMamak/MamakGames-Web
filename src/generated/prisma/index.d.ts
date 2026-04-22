
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model SiteSettings
 * 
 */
export type SiteSettings = $Result.DefaultSelection<Prisma.$SiteSettingsPayload>
/**
 * Model SeoSettings
 * 
 */
export type SeoSettings = $Result.DefaultSelection<Prisma.$SeoSettingsPayload>
/**
 * Model NavigationItem
 * 
 */
export type NavigationItem = $Result.DefaultSelection<Prisma.$NavigationItemPayload>
/**
 * Model HeroSection
 * 
 */
export type HeroSection = $Result.DefaultSelection<Prisma.$HeroSectionPayload>
/**
 * Model AboutSection
 * 
 */
export type AboutSection = $Result.DefaultSelection<Prisma.$AboutSectionPayload>
/**
 * Model ServiceItem
 * 
 */
export type ServiceItem = $Result.DefaultSelection<Prisma.$ServiceItemPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GameImage
 * 
 */
export type GameImage = $Result.DefaultSelection<Prisma.$GameImagePayload>
/**
 * Model ContactInfo
 * 
 */
export type ContactInfo = $Result.DefaultSelection<Prisma.$ContactInfoPayload>
/**
 * Model ContactSubmission
 * 
 */
export type ContactSubmission = $Result.DefaultSelection<Prisma.$ContactSubmissionPayload>
/**
 * Model SocialLink
 * 
 */
export type SocialLink = $Result.DefaultSelection<Prisma.$SocialLinkPayload>
/**
 * Model FooterSettings
 * 
 */
export type FooterSettings = $Result.DefaultSelection<Prisma.$FooterSettingsPayload>
/**
 * Model PrivacyPolicy
 * 
 */
export type PrivacyPolicy = $Result.DefaultSelection<Prisma.$PrivacyPolicyPayload>
/**
 * Model TermsOfService
 * 
 */
export type TermsOfService = $Result.DefaultSelection<Prisma.$TermsOfServicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteSettings`: Exposes CRUD operations for the **SiteSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettings
    * const siteSettings = await prisma.siteSettings.findMany()
    * ```
    */
  get siteSettings(): Prisma.SiteSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seoSettings`: Exposes CRUD operations for the **SeoSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeoSettings
    * const seoSettings = await prisma.seoSettings.findMany()
    * ```
    */
  get seoSettings(): Prisma.SeoSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.navigationItem`: Exposes CRUD operations for the **NavigationItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NavigationItems
    * const navigationItems = await prisma.navigationItem.findMany()
    * ```
    */
  get navigationItem(): Prisma.NavigationItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.heroSection`: Exposes CRUD operations for the **HeroSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeroSections
    * const heroSections = await prisma.heroSection.findMany()
    * ```
    */
  get heroSection(): Prisma.HeroSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutSection`: Exposes CRUD operations for the **AboutSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutSections
    * const aboutSections = await prisma.aboutSection.findMany()
    * ```
    */
  get aboutSection(): Prisma.AboutSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceItem`: Exposes CRUD operations for the **ServiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceItems
    * const serviceItems = await prisma.serviceItem.findMany()
    * ```
    */
  get serviceItem(): Prisma.ServiceItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameImage`: Exposes CRUD operations for the **GameImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameImages
    * const gameImages = await prisma.gameImage.findMany()
    * ```
    */
  get gameImage(): Prisma.GameImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **ContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.ContactInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactSubmission`: Exposes CRUD operations for the **ContactSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactSubmissions
    * const contactSubmissions = await prisma.contactSubmission.findMany()
    * ```
    */
  get contactSubmission(): Prisma.ContactSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLink`: Exposes CRUD operations for the **SocialLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinks
    * const socialLinks = await prisma.socialLink.findMany()
    * ```
    */
  get socialLink(): Prisma.SocialLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.footerSettings`: Exposes CRUD operations for the **FooterSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FooterSettings
    * const footerSettings = await prisma.footerSettings.findMany()
    * ```
    */
  get footerSettings(): Prisma.FooterSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privacyPolicy`: Exposes CRUD operations for the **PrivacyPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivacyPolicies
    * const privacyPolicies = await prisma.privacyPolicy.findMany()
    * ```
    */
  get privacyPolicy(): Prisma.PrivacyPolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.termsOfService`: Exposes CRUD operations for the **TermsOfService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TermsOfServices
    * const termsOfServices = await prisma.termsOfService.findMany()
    * ```
    */
  get termsOfService(): Prisma.TermsOfServiceDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    AdminUser: 'AdminUser',
    SiteSettings: 'SiteSettings',
    SeoSettings: 'SeoSettings',
    NavigationItem: 'NavigationItem',
    HeroSection: 'HeroSection',
    AboutSection: 'AboutSection',
    ServiceItem: 'ServiceItem',
    Game: 'Game',
    GameImage: 'GameImage',
    ContactInfo: 'ContactInfo',
    ContactSubmission: 'ContactSubmission',
    SocialLink: 'SocialLink',
    FooterSettings: 'FooterSettings',
    PrivacyPolicy: 'PrivacyPolicy',
    TermsOfService: 'TermsOfService'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "siteSettings" | "seoSettings" | "navigationItem" | "heroSection" | "aboutSection" | "serviceItem" | "game" | "gameImage" | "contactInfo" | "contactSubmission" | "socialLink" | "footerSettings" | "privacyPolicy" | "termsOfService"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      SiteSettings: {
        payload: Prisma.$SiteSettingsPayload<ExtArgs>
        fields: Prisma.SiteSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          findMany: {
            args: Prisma.SiteSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          create: {
            args: Prisma.SiteSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          createMany: {
            args: Prisma.SiteSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          delete: {
            args: Prisma.SiteSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          update: {
            args: Prisma.SiteSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SiteSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSettings>
          }
          groupBy: {
            args: Prisma.SiteSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingsCountAggregateOutputType> | number
          }
        }
      }
      SeoSettings: {
        payload: Prisma.$SeoSettingsPayload<ExtArgs>
        fields: Prisma.SeoSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeoSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeoSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload>
          }
          findFirst: {
            args: Prisma.SeoSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeoSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload>
          }
          findMany: {
            args: Prisma.SeoSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload>[]
          }
          create: {
            args: Prisma.SeoSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload>
          }
          createMany: {
            args: Prisma.SeoSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeoSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload>[]
          }
          delete: {
            args: Prisma.SeoSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload>
          }
          update: {
            args: Prisma.SeoSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SeoSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeoSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeoSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SeoSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoSettingsPayload>
          }
          aggregate: {
            args: Prisma.SeoSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeoSettings>
          }
          groupBy: {
            args: Prisma.SeoSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeoSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeoSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SeoSettingsCountAggregateOutputType> | number
          }
        }
      }
      NavigationItem: {
        payload: Prisma.$NavigationItemPayload<ExtArgs>
        fields: Prisma.NavigationItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NavigationItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NavigationItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          findFirst: {
            args: Prisma.NavigationItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NavigationItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          findMany: {
            args: Prisma.NavigationItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>[]
          }
          create: {
            args: Prisma.NavigationItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          createMany: {
            args: Prisma.NavigationItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NavigationItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>[]
          }
          delete: {
            args: Prisma.NavigationItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          update: {
            args: Prisma.NavigationItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          deleteMany: {
            args: Prisma.NavigationItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NavigationItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NavigationItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>[]
          }
          upsert: {
            args: Prisma.NavigationItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          aggregate: {
            args: Prisma.NavigationItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNavigationItem>
          }
          groupBy: {
            args: Prisma.NavigationItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<NavigationItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.NavigationItemCountArgs<ExtArgs>
            result: $Utils.Optional<NavigationItemCountAggregateOutputType> | number
          }
        }
      }
      HeroSection: {
        payload: Prisma.$HeroSectionPayload<ExtArgs>
        fields: Prisma.HeroSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          findFirst: {
            args: Prisma.HeroSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          findMany: {
            args: Prisma.HeroSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>[]
          }
          create: {
            args: Prisma.HeroSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          createMany: {
            args: Prisma.HeroSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeroSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>[]
          }
          delete: {
            args: Prisma.HeroSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          update: {
            args: Prisma.HeroSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          deleteMany: {
            args: Prisma.HeroSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeroSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>[]
          }
          upsert: {
            args: Prisma.HeroSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          aggregate: {
            args: Prisma.HeroSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeroSection>
          }
          groupBy: {
            args: Prisma.HeroSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroSectionCountArgs<ExtArgs>
            result: $Utils.Optional<HeroSectionCountAggregateOutputType> | number
          }
        }
      }
      AboutSection: {
        payload: Prisma.$AboutSectionPayload<ExtArgs>
        fields: Prisma.AboutSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          findFirst: {
            args: Prisma.AboutSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          findMany: {
            args: Prisma.AboutSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>[]
          }
          create: {
            args: Prisma.AboutSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          createMany: {
            args: Prisma.AboutSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>[]
          }
          delete: {
            args: Prisma.AboutSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          update: {
            args: Prisma.AboutSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          deleteMany: {
            args: Prisma.AboutSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>[]
          }
          upsert: {
            args: Prisma.AboutSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          aggregate: {
            args: Prisma.AboutSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutSection>
          }
          groupBy: {
            args: Prisma.AboutSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutSectionCountArgs<ExtArgs>
            result: $Utils.Optional<AboutSectionCountAggregateOutputType> | number
          }
        }
      }
      ServiceItem: {
        payload: Prisma.$ServiceItemPayload<ExtArgs>
        fields: Prisma.ServiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          findFirst: {
            args: Prisma.ServiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          findMany: {
            args: Prisma.ServiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>[]
          }
          create: {
            args: Prisma.ServiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          createMany: {
            args: Prisma.ServiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>[]
          }
          delete: {
            args: Prisma.ServiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          update: {
            args: Prisma.ServiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          deleteMany: {
            args: Prisma.ServiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>[]
          }
          upsert: {
            args: Prisma.ServiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          aggregate: {
            args: Prisma.ServiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceItem>
          }
          groupBy: {
            args: Prisma.ServiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceItemCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GameImage: {
        payload: Prisma.$GameImagePayload<ExtArgs>
        fields: Prisma.GameImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          findFirst: {
            args: Prisma.GameImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          findMany: {
            args: Prisma.GameImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>[]
          }
          create: {
            args: Prisma.GameImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          createMany: {
            args: Prisma.GameImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>[]
          }
          delete: {
            args: Prisma.GameImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          update: {
            args: Prisma.GameImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          deleteMany: {
            args: Prisma.GameImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>[]
          }
          upsert: {
            args: Prisma.GameImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          aggregate: {
            args: Prisma.GameImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameImage>
          }
          groupBy: {
            args: Prisma.GameImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameImageCountArgs<ExtArgs>
            result: $Utils.Optional<GameImageCountAggregateOutputType> | number
          }
        }
      }
      ContactInfo: {
        payload: Prisma.$ContactInfoPayload<ExtArgs>
        fields: Prisma.ContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findMany: {
            args: Prisma.ContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          create: {
            args: Prisma.ContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          createMany: {
            args: Prisma.ContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          delete: {
            args: Prisma.ContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          update: {
            args: Prisma.ContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          upsert: {
            args: Prisma.ContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.ContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
          }
        }
      }
      ContactSubmission: {
        payload: Prisma.$ContactSubmissionPayload<ExtArgs>
        fields: Prisma.ContactSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ContactSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findMany: {
            args: Prisma.ContactSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          create: {
            args: Prisma.ContactSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          createMany: {
            args: Prisma.ContactSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ContactSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          update: {
            args: Prisma.ContactSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ContactSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ContactSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ContactSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactSubmission>
          }
          groupBy: {
            args: Prisma.ContactSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionCountAggregateOutputType> | number
          }
        }
      }
      SocialLink: {
        payload: Prisma.$SocialLinkPayload<ExtArgs>
        fields: Prisma.SocialLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findFirst: {
            args: Prisma.SocialLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findMany: {
            args: Prisma.SocialLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          create: {
            args: Prisma.SocialLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          createMany: {
            args: Prisma.SocialLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          delete: {
            args: Prisma.SocialLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          update: {
            args: Prisma.SocialLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          upsert: {
            args: Prisma.SocialLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          aggregate: {
            args: Prisma.SocialLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLink>
          }
          groupBy: {
            args: Prisma.SocialLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkCountAggregateOutputType> | number
          }
        }
      }
      FooterSettings: {
        payload: Prisma.$FooterSettingsPayload<ExtArgs>
        fields: Prisma.FooterSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FooterSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FooterSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload>
          }
          findFirst: {
            args: Prisma.FooterSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FooterSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload>
          }
          findMany: {
            args: Prisma.FooterSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload>[]
          }
          create: {
            args: Prisma.FooterSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload>
          }
          createMany: {
            args: Prisma.FooterSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FooterSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload>[]
          }
          delete: {
            args: Prisma.FooterSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload>
          }
          update: {
            args: Prisma.FooterSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload>
          }
          deleteMany: {
            args: Prisma.FooterSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FooterSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FooterSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload>[]
          }
          upsert: {
            args: Prisma.FooterSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterSettingsPayload>
          }
          aggregate: {
            args: Prisma.FooterSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFooterSettings>
          }
          groupBy: {
            args: Prisma.FooterSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FooterSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FooterSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<FooterSettingsCountAggregateOutputType> | number
          }
        }
      }
      PrivacyPolicy: {
        payload: Prisma.$PrivacyPolicyPayload<ExtArgs>
        fields: Prisma.PrivacyPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivacyPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivacyPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          findFirst: {
            args: Prisma.PrivacyPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivacyPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          findMany: {
            args: Prisma.PrivacyPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>[]
          }
          create: {
            args: Prisma.PrivacyPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          createMany: {
            args: Prisma.PrivacyPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivacyPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>[]
          }
          delete: {
            args: Prisma.PrivacyPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          update: {
            args: Prisma.PrivacyPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          deleteMany: {
            args: Prisma.PrivacyPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivacyPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivacyPolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>[]
          }
          upsert: {
            args: Prisma.PrivacyPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivacyPolicyPayload>
          }
          aggregate: {
            args: Prisma.PrivacyPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivacyPolicy>
          }
          groupBy: {
            args: Prisma.PrivacyPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivacyPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivacyPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PrivacyPolicyCountAggregateOutputType> | number
          }
        }
      }
      TermsOfService: {
        payload: Prisma.$TermsOfServicePayload<ExtArgs>
        fields: Prisma.TermsOfServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermsOfServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermsOfServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload>
          }
          findFirst: {
            args: Prisma.TermsOfServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermsOfServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload>
          }
          findMany: {
            args: Prisma.TermsOfServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload>[]
          }
          create: {
            args: Prisma.TermsOfServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload>
          }
          createMany: {
            args: Prisma.TermsOfServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TermsOfServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload>[]
          }
          delete: {
            args: Prisma.TermsOfServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload>
          }
          update: {
            args: Prisma.TermsOfServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload>
          }
          deleteMany: {
            args: Prisma.TermsOfServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermsOfServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TermsOfServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload>[]
          }
          upsert: {
            args: Prisma.TermsOfServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfServicePayload>
          }
          aggregate: {
            args: Prisma.TermsOfServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTermsOfService>
          }
          groupBy: {
            args: Prisma.TermsOfServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermsOfServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermsOfServiceCountArgs<ExtArgs>
            result: $Utils.Optional<TermsOfServiceCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    siteSettings?: SiteSettingsOmit
    seoSettings?: SeoSettingsOmit
    navigationItem?: NavigationItemOmit
    heroSection?: HeroSectionOmit
    aboutSection?: AboutSectionOmit
    serviceItem?: ServiceItemOmit
    game?: GameOmit
    gameImage?: GameImageOmit
    contactInfo?: ContactInfoOmit
    contactSubmission?: ContactSubmissionOmit
    socialLink?: SocialLinkOmit
    footerSettings?: FooterSettingsOmit
    privacyPolicy?: PrivacyPolicyOmit
    termsOfService?: TermsOfServiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    images: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | GameCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model SiteSettings
   */

  export type AggregateSiteSettings = {
    _count: SiteSettingsCountAggregateOutputType | null
    _min: SiteSettingsMinAggregateOutputType | null
    _max: SiteSettingsMaxAggregateOutputType | null
  }

  export type SiteSettingsMinAggregateOutputType = {
    id: string | null
    logoText: string | null
    loadingText: string | null
    showLoadingScreen: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteSettingsMaxAggregateOutputType = {
    id: string | null
    logoText: string | null
    loadingText: string | null
    showLoadingScreen: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteSettingsCountAggregateOutputType = {
    id: number
    logoText: number
    loadingText: number
    showLoadingScreen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteSettingsMinAggregateInputType = {
    id?: true
    logoText?: true
    loadingText?: true
    showLoadingScreen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteSettingsMaxAggregateInputType = {
    id?: true
    logoText?: true
    loadingText?: true
    showLoadingScreen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteSettingsCountAggregateInputType = {
    id?: true
    logoText?: true
    loadingText?: true
    showLoadingScreen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to aggregate.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettings
    **/
    _count?: true | SiteSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingsMaxAggregateInputType
  }

  export type GetSiteSettingsAggregateType<T extends SiteSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSettings[P]>
      : GetScalarType<T[P], AggregateSiteSettings[P]>
  }




  export type SiteSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingsWhereInput
    orderBy?: SiteSettingsOrderByWithAggregationInput | SiteSettingsOrderByWithAggregationInput[]
    by: SiteSettingsScalarFieldEnum[] | SiteSettingsScalarFieldEnum
    having?: SiteSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingsCountAggregateInputType | true
    _min?: SiteSettingsMinAggregateInputType
    _max?: SiteSettingsMaxAggregateInputType
  }

  export type SiteSettingsGroupByOutputType = {
    id: string
    logoText: string
    loadingText: string
    showLoadingScreen: boolean
    createdAt: Date
    updatedAt: Date
    _count: SiteSettingsCountAggregateOutputType | null
    _min: SiteSettingsMinAggregateOutputType | null
    _max: SiteSettingsMaxAggregateOutputType | null
  }

  type GetSiteSettingsGroupByPayload<T extends SiteSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logoText?: boolean
    loadingText?: boolean
    showLoadingScreen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSettings"]>

  export type SiteSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logoText?: boolean
    loadingText?: boolean
    showLoadingScreen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSettings"]>

  export type SiteSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logoText?: boolean
    loadingText?: boolean
    showLoadingScreen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSettings"]>

  export type SiteSettingsSelectScalar = {
    id?: boolean
    logoText?: boolean
    loadingText?: boolean
    showLoadingScreen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logoText" | "loadingText" | "showLoadingScreen" | "createdAt" | "updatedAt", ExtArgs["result"]["siteSettings"]>

  export type $SiteSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logoText: string
      loadingText: string
      showLoadingScreen: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteSettings"]>
    composites: {}
  }

  type SiteSettingsGetPayload<S extends boolean | null | undefined | SiteSettingsDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingsPayload, S>

  type SiteSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteSettingsCountAggregateInputType | true
    }

  export interface SiteSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSettings'], meta: { name: 'SiteSettings' } }
    /**
     * Find zero or one SiteSettings that matches the filter.
     * @param {SiteSettingsFindUniqueArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingsFindUniqueArgs>(args: SelectSubset<T, SiteSettingsFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteSettingsFindUniqueOrThrowArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindFirstArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingsFindFirstArgs>(args?: SelectSubset<T, SiteSettingsFindFirstArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindFirstOrThrowArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettings
     * const siteSettings = await prisma.siteSettings.findMany()
     * 
     * // Get first 10 SiteSettings
     * const siteSettings = await prisma.siteSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteSettingsFindManyArgs>(args?: SelectSubset<T, SiteSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteSettings.
     * @param {SiteSettingsCreateArgs} args - Arguments to create a SiteSettings.
     * @example
     * // Create one SiteSettings
     * const SiteSettings = await prisma.siteSettings.create({
     *   data: {
     *     // ... data to create a SiteSettings
     *   }
     * })
     * 
     */
    create<T extends SiteSettingsCreateArgs>(args: SelectSubset<T, SiteSettingsCreateArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteSettings.
     * @param {SiteSettingsCreateManyArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSettings = await prisma.siteSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingsCreateManyArgs>(args?: SelectSubset<T, SiteSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteSettings and returns the data saved in the database.
     * @param {SiteSettingsCreateManyAndReturnArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSettings = await prisma.siteSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteSettings and only return the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteSettings.
     * @param {SiteSettingsDeleteArgs} args - Arguments to delete one SiteSettings.
     * @example
     * // Delete one SiteSettings
     * const SiteSettings = await prisma.siteSettings.delete({
     *   where: {
     *     // ... filter to delete one SiteSettings
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingsDeleteArgs>(args: SelectSubset<T, SiteSettingsDeleteArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteSettings.
     * @param {SiteSettingsUpdateArgs} args - Arguments to update one SiteSettings.
     * @example
     * // Update one SiteSettings
     * const siteSettings = await prisma.siteSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingsUpdateArgs>(args: SelectSubset<T, SiteSettingsUpdateArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteSettings.
     * @param {SiteSettingsDeleteManyArgs} args - Arguments to filter SiteSettings to delete.
     * @example
     * // Delete a few SiteSettings
     * const { count } = await prisma.siteSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingsDeleteManyArgs>(args?: SelectSubset<T, SiteSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettings
     * const siteSettings = await prisma.siteSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingsUpdateManyArgs>(args: SelectSubset<T, SiteSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings and returns the data updated in the database.
     * @param {SiteSettingsUpdateManyAndReturnArgs} args - Arguments to update many SiteSettings.
     * @example
     * // Update many SiteSettings
     * const siteSettings = await prisma.siteSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteSettings and only return the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SiteSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteSettings.
     * @param {SiteSettingsUpsertArgs} args - Arguments to update or create a SiteSettings.
     * @example
     * // Update or create a SiteSettings
     * const siteSettings = await prisma.siteSettings.upsert({
     *   create: {
     *     // ... data to create a SiteSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSettings we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingsUpsertArgs>(args: SelectSubset<T, SiteSettingsUpsertArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsCountArgs} args - Arguments to filter SiteSettings to count.
     * @example
     * // Count the number of SiteSettings
     * const count = await prisma.siteSettings.count({
     *   where: {
     *     // ... the filter for the SiteSettings we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingsCountArgs>(
      args?: Subset<T, SiteSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteSettingsAggregateArgs>(args: Subset<T, SiteSettingsAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingsAggregateType<T>>

    /**
     * Group by SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsGroupByArgs} args - Group by arguments.
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
      T extends SiteSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSettings model
   */
  readonly fields: SiteSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SiteSettings model
   */
  interface SiteSettingsFieldRefs {
    readonly id: FieldRef<"SiteSettings", 'String'>
    readonly logoText: FieldRef<"SiteSettings", 'String'>
    readonly loadingText: FieldRef<"SiteSettings", 'String'>
    readonly showLoadingScreen: FieldRef<"SiteSettings", 'Boolean'>
    readonly createdAt: FieldRef<"SiteSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSettings findUnique
   */
  export type SiteSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings findUniqueOrThrow
   */
  export type SiteSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings findFirst
   */
  export type SiteSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings findFirstOrThrow
   */
  export type SiteSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings findMany
   */
  export type SiteSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings create
   */
  export type SiteSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteSettings.
     */
    data: XOR<SiteSettingsCreateInput, SiteSettingsUncheckedCreateInput>
  }

  /**
   * SiteSettings createMany
   */
  export type SiteSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingsCreateManyInput | SiteSettingsCreateManyInput[]
  }

  /**
   * SiteSettings createManyAndReturn
   */
  export type SiteSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingsCreateManyInput | SiteSettingsCreateManyInput[]
  }

  /**
   * SiteSettings update
   */
  export type SiteSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteSettings.
     */
    data: XOR<SiteSettingsUpdateInput, SiteSettingsUncheckedUpdateInput>
    /**
     * Choose, which SiteSettings to update.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings updateMany
   */
  export type SiteSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingsUpdateManyMutationInput, SiteSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingsWhereInput
    /**
     * Limit how many SiteSettings to update.
     */
    limit?: number
  }

  /**
   * SiteSettings updateManyAndReturn
   */
  export type SiteSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingsUpdateManyMutationInput, SiteSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingsWhereInput
    /**
     * Limit how many SiteSettings to update.
     */
    limit?: number
  }

  /**
   * SiteSettings upsert
   */
  export type SiteSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteSettings to update in case it exists.
     */
    where: SiteSettingsWhereUniqueInput
    /**
     * In case the SiteSettings found by the `where` argument doesn't exist, create a new SiteSettings with this data.
     */
    create: XOR<SiteSettingsCreateInput, SiteSettingsUncheckedCreateInput>
    /**
     * In case the SiteSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingsUpdateInput, SiteSettingsUncheckedUpdateInput>
  }

  /**
   * SiteSettings delete
   */
  export type SiteSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter which SiteSettings to delete.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings deleteMany
   */
  export type SiteSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to delete
     */
    where?: SiteSettingsWhereInput
    /**
     * Limit how many SiteSettings to delete.
     */
    limit?: number
  }

  /**
   * SiteSettings without action
   */
  export type SiteSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
  }


  /**
   * Model SeoSettings
   */

  export type AggregateSeoSettings = {
    _count: SeoSettingsCountAggregateOutputType | null
    _min: SeoSettingsMinAggregateOutputType | null
    _max: SeoSettingsMaxAggregateOutputType | null
  }

  export type SeoSettingsMinAggregateOutputType = {
    id: string | null
    metaTitle: string | null
    metaDescription: string | null
    ogImage: string | null
    keywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeoSettingsMaxAggregateOutputType = {
    id: string | null
    metaTitle: string | null
    metaDescription: string | null
    ogImage: string | null
    keywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeoSettingsCountAggregateOutputType = {
    id: number
    metaTitle: number
    metaDescription: number
    ogImage: number
    keywords: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeoSettingsMinAggregateInputType = {
    id?: true
    metaTitle?: true
    metaDescription?: true
    ogImage?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeoSettingsMaxAggregateInputType = {
    id?: true
    metaTitle?: true
    metaDescription?: true
    ogImage?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeoSettingsCountAggregateInputType = {
    id?: true
    metaTitle?: true
    metaDescription?: true
    ogImage?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeoSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoSettings to aggregate.
     */
    where?: SeoSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoSettings to fetch.
     */
    orderBy?: SeoSettingsOrderByWithRelationInput | SeoSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeoSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeoSettings
    **/
    _count?: true | SeoSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeoSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeoSettingsMaxAggregateInputType
  }

  export type GetSeoSettingsAggregateType<T extends SeoSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSeoSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeoSettings[P]>
      : GetScalarType<T[P], AggregateSeoSettings[P]>
  }




  export type SeoSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeoSettingsWhereInput
    orderBy?: SeoSettingsOrderByWithAggregationInput | SeoSettingsOrderByWithAggregationInput[]
    by: SeoSettingsScalarFieldEnum[] | SeoSettingsScalarFieldEnum
    having?: SeoSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeoSettingsCountAggregateInputType | true
    _min?: SeoSettingsMinAggregateInputType
    _max?: SeoSettingsMaxAggregateInputType
  }

  export type SeoSettingsGroupByOutputType = {
    id: string
    metaTitle: string
    metaDescription: string
    ogImage: string
    keywords: string
    createdAt: Date
    updatedAt: Date
    _count: SeoSettingsCountAggregateOutputType | null
    _min: SeoSettingsMinAggregateOutputType | null
    _max: SeoSettingsMaxAggregateOutputType | null
  }

  type GetSeoSettingsGroupByPayload<T extends SeoSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeoSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeoSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeoSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SeoSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SeoSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    ogImage?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seoSettings"]>

  export type SeoSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    ogImage?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seoSettings"]>

  export type SeoSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    ogImage?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seoSettings"]>

  export type SeoSettingsSelectScalar = {
    id?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    ogImage?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeoSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metaTitle" | "metaDescription" | "ogImage" | "keywords" | "createdAt" | "updatedAt", ExtArgs["result"]["seoSettings"]>

  export type $SeoSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeoSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      metaTitle: string
      metaDescription: string
      ogImage: string
      keywords: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["seoSettings"]>
    composites: {}
  }

  type SeoSettingsGetPayload<S extends boolean | null | undefined | SeoSettingsDefaultArgs> = $Result.GetResult<Prisma.$SeoSettingsPayload, S>

  type SeoSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeoSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeoSettingsCountAggregateInputType | true
    }

  export interface SeoSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeoSettings'], meta: { name: 'SeoSettings' } }
    /**
     * Find zero or one SeoSettings that matches the filter.
     * @param {SeoSettingsFindUniqueArgs} args - Arguments to find a SeoSettings
     * @example
     * // Get one SeoSettings
     * const seoSettings = await prisma.seoSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeoSettingsFindUniqueArgs>(args: SelectSubset<T, SeoSettingsFindUniqueArgs<ExtArgs>>): Prisma__SeoSettingsClient<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeoSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeoSettingsFindUniqueOrThrowArgs} args - Arguments to find a SeoSettings
     * @example
     * // Get one SeoSettings
     * const seoSettings = await prisma.seoSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeoSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SeoSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeoSettingsClient<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingsFindFirstArgs} args - Arguments to find a SeoSettings
     * @example
     * // Get one SeoSettings
     * const seoSettings = await prisma.seoSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeoSettingsFindFirstArgs>(args?: SelectSubset<T, SeoSettingsFindFirstArgs<ExtArgs>>): Prisma__SeoSettingsClient<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingsFindFirstOrThrowArgs} args - Arguments to find a SeoSettings
     * @example
     * // Get one SeoSettings
     * const seoSettings = await prisma.seoSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeoSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SeoSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeoSettingsClient<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeoSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeoSettings
     * const seoSettings = await prisma.seoSettings.findMany()
     * 
     * // Get first 10 SeoSettings
     * const seoSettings = await prisma.seoSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seoSettingsWithIdOnly = await prisma.seoSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeoSettingsFindManyArgs>(args?: SelectSubset<T, SeoSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeoSettings.
     * @param {SeoSettingsCreateArgs} args - Arguments to create a SeoSettings.
     * @example
     * // Create one SeoSettings
     * const SeoSettings = await prisma.seoSettings.create({
     *   data: {
     *     // ... data to create a SeoSettings
     *   }
     * })
     * 
     */
    create<T extends SeoSettingsCreateArgs>(args: SelectSubset<T, SeoSettingsCreateArgs<ExtArgs>>): Prisma__SeoSettingsClient<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeoSettings.
     * @param {SeoSettingsCreateManyArgs} args - Arguments to create many SeoSettings.
     * @example
     * // Create many SeoSettings
     * const seoSettings = await prisma.seoSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeoSettingsCreateManyArgs>(args?: SelectSubset<T, SeoSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeoSettings and returns the data saved in the database.
     * @param {SeoSettingsCreateManyAndReturnArgs} args - Arguments to create many SeoSettings.
     * @example
     * // Create many SeoSettings
     * const seoSettings = await prisma.seoSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeoSettings and only return the `id`
     * const seoSettingsWithIdOnly = await prisma.seoSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeoSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SeoSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeoSettings.
     * @param {SeoSettingsDeleteArgs} args - Arguments to delete one SeoSettings.
     * @example
     * // Delete one SeoSettings
     * const SeoSettings = await prisma.seoSettings.delete({
     *   where: {
     *     // ... filter to delete one SeoSettings
     *   }
     * })
     * 
     */
    delete<T extends SeoSettingsDeleteArgs>(args: SelectSubset<T, SeoSettingsDeleteArgs<ExtArgs>>): Prisma__SeoSettingsClient<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeoSettings.
     * @param {SeoSettingsUpdateArgs} args - Arguments to update one SeoSettings.
     * @example
     * // Update one SeoSettings
     * const seoSettings = await prisma.seoSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeoSettingsUpdateArgs>(args: SelectSubset<T, SeoSettingsUpdateArgs<ExtArgs>>): Prisma__SeoSettingsClient<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeoSettings.
     * @param {SeoSettingsDeleteManyArgs} args - Arguments to filter SeoSettings to delete.
     * @example
     * // Delete a few SeoSettings
     * const { count } = await prisma.seoSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeoSettingsDeleteManyArgs>(args?: SelectSubset<T, SeoSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeoSettings
     * const seoSettings = await prisma.seoSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeoSettingsUpdateManyArgs>(args: SelectSubset<T, SeoSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoSettings and returns the data updated in the database.
     * @param {SeoSettingsUpdateManyAndReturnArgs} args - Arguments to update many SeoSettings.
     * @example
     * // Update many SeoSettings
     * const seoSettings = await prisma.seoSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeoSettings and only return the `id`
     * const seoSettingsWithIdOnly = await prisma.seoSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeoSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SeoSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeoSettings.
     * @param {SeoSettingsUpsertArgs} args - Arguments to update or create a SeoSettings.
     * @example
     * // Update or create a SeoSettings
     * const seoSettings = await prisma.seoSettings.upsert({
     *   create: {
     *     // ... data to create a SeoSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeoSettings we want to update
     *   }
     * })
     */
    upsert<T extends SeoSettingsUpsertArgs>(args: SelectSubset<T, SeoSettingsUpsertArgs<ExtArgs>>): Prisma__SeoSettingsClient<$Result.GetResult<Prisma.$SeoSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeoSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingsCountArgs} args - Arguments to filter SeoSettings to count.
     * @example
     * // Count the number of SeoSettings
     * const count = await prisma.seoSettings.count({
     *   where: {
     *     // ... the filter for the SeoSettings we want to count
     *   }
     * })
    **/
    count<T extends SeoSettingsCountArgs>(
      args?: Subset<T, SeoSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeoSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeoSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeoSettingsAggregateArgs>(args: Subset<T, SeoSettingsAggregateArgs>): Prisma.PrismaPromise<GetSeoSettingsAggregateType<T>>

    /**
     * Group by SeoSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoSettingsGroupByArgs} args - Group by arguments.
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
      T extends SeoSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeoSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SeoSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeoSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeoSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeoSettings model
   */
  readonly fields: SeoSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeoSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeoSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SeoSettings model
   */
  interface SeoSettingsFieldRefs {
    readonly id: FieldRef<"SeoSettings", 'String'>
    readonly metaTitle: FieldRef<"SeoSettings", 'String'>
    readonly metaDescription: FieldRef<"SeoSettings", 'String'>
    readonly ogImage: FieldRef<"SeoSettings", 'String'>
    readonly keywords: FieldRef<"SeoSettings", 'String'>
    readonly createdAt: FieldRef<"SeoSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"SeoSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeoSettings findUnique
   */
  export type SeoSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SeoSettings to fetch.
     */
    where: SeoSettingsWhereUniqueInput
  }

  /**
   * SeoSettings findUniqueOrThrow
   */
  export type SeoSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SeoSettings to fetch.
     */
    where: SeoSettingsWhereUniqueInput
  }

  /**
   * SeoSettings findFirst
   */
  export type SeoSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SeoSettings to fetch.
     */
    where?: SeoSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoSettings to fetch.
     */
    orderBy?: SeoSettingsOrderByWithRelationInput | SeoSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoSettings.
     */
    cursor?: SeoSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoSettings.
     */
    distinct?: SeoSettingsScalarFieldEnum | SeoSettingsScalarFieldEnum[]
  }

  /**
   * SeoSettings findFirstOrThrow
   */
  export type SeoSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SeoSettings to fetch.
     */
    where?: SeoSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoSettings to fetch.
     */
    orderBy?: SeoSettingsOrderByWithRelationInput | SeoSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoSettings.
     */
    cursor?: SeoSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoSettings.
     */
    distinct?: SeoSettingsScalarFieldEnum | SeoSettingsScalarFieldEnum[]
  }

  /**
   * SeoSettings findMany
   */
  export type SeoSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SeoSettings to fetch.
     */
    where?: SeoSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoSettings to fetch.
     */
    orderBy?: SeoSettingsOrderByWithRelationInput | SeoSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeoSettings.
     */
    cursor?: SeoSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoSettings.
     */
    distinct?: SeoSettingsScalarFieldEnum | SeoSettingsScalarFieldEnum[]
  }

  /**
   * SeoSettings create
   */
  export type SeoSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SeoSettings.
     */
    data: XOR<SeoSettingsCreateInput, SeoSettingsUncheckedCreateInput>
  }

  /**
   * SeoSettings createMany
   */
  export type SeoSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeoSettings.
     */
    data: SeoSettingsCreateManyInput | SeoSettingsCreateManyInput[]
  }

  /**
   * SeoSettings createManyAndReturn
   */
  export type SeoSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SeoSettings.
     */
    data: SeoSettingsCreateManyInput | SeoSettingsCreateManyInput[]
  }

  /**
   * SeoSettings update
   */
  export type SeoSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SeoSettings.
     */
    data: XOR<SeoSettingsUpdateInput, SeoSettingsUncheckedUpdateInput>
    /**
     * Choose, which SeoSettings to update.
     */
    where: SeoSettingsWhereUniqueInput
  }

  /**
   * SeoSettings updateMany
   */
  export type SeoSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeoSettings.
     */
    data: XOR<SeoSettingsUpdateManyMutationInput, SeoSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SeoSettings to update
     */
    where?: SeoSettingsWhereInput
    /**
     * Limit how many SeoSettings to update.
     */
    limit?: number
  }

  /**
   * SeoSettings updateManyAndReturn
   */
  export type SeoSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SeoSettings.
     */
    data: XOR<SeoSettingsUpdateManyMutationInput, SeoSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SeoSettings to update
     */
    where?: SeoSettingsWhereInput
    /**
     * Limit how many SeoSettings to update.
     */
    limit?: number
  }

  /**
   * SeoSettings upsert
   */
  export type SeoSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SeoSettings to update in case it exists.
     */
    where: SeoSettingsWhereUniqueInput
    /**
     * In case the SeoSettings found by the `where` argument doesn't exist, create a new SeoSettings with this data.
     */
    create: XOR<SeoSettingsCreateInput, SeoSettingsUncheckedCreateInput>
    /**
     * In case the SeoSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeoSettingsUpdateInput, SeoSettingsUncheckedUpdateInput>
  }

  /**
   * SeoSettings delete
   */
  export type SeoSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
    /**
     * Filter which SeoSettings to delete.
     */
    where: SeoSettingsWhereUniqueInput
  }

  /**
   * SeoSettings deleteMany
   */
  export type SeoSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoSettings to delete
     */
    where?: SeoSettingsWhereInput
    /**
     * Limit how many SeoSettings to delete.
     */
    limit?: number
  }

  /**
   * SeoSettings without action
   */
  export type SeoSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoSettings
     */
    select?: SeoSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoSettings
     */
    omit?: SeoSettingsOmit<ExtArgs> | null
  }


  /**
   * Model NavigationItem
   */

  export type AggregateNavigationItem = {
    _count: NavigationItemCountAggregateOutputType | null
    _avg: NavigationItemAvgAggregateOutputType | null
    _sum: NavigationItemSumAggregateOutputType | null
    _min: NavigationItemMinAggregateOutputType | null
    _max: NavigationItemMaxAggregateOutputType | null
  }

  export type NavigationItemAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type NavigationItemSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type NavigationItemMinAggregateOutputType = {
    id: string | null
    label: string | null
    href: string | null
    sortOrder: number | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NavigationItemMaxAggregateOutputType = {
    id: string | null
    label: string | null
    href: string | null
    sortOrder: number | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NavigationItemCountAggregateOutputType = {
    id: number
    label: number
    href: number
    sortOrder: number
    visible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NavigationItemAvgAggregateInputType = {
    sortOrder?: true
  }

  export type NavigationItemSumAggregateInputType = {
    sortOrder?: true
  }

  export type NavigationItemMinAggregateInputType = {
    id?: true
    label?: true
    href?: true
    sortOrder?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NavigationItemMaxAggregateInputType = {
    id?: true
    label?: true
    href?: true
    sortOrder?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NavigationItemCountAggregateInputType = {
    id?: true
    label?: true
    href?: true
    sortOrder?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NavigationItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavigationItem to aggregate.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NavigationItems
    **/
    _count?: true | NavigationItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NavigationItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NavigationItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NavigationItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NavigationItemMaxAggregateInputType
  }

  export type GetNavigationItemAggregateType<T extends NavigationItemAggregateArgs> = {
        [P in keyof T & keyof AggregateNavigationItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNavigationItem[P]>
      : GetScalarType<T[P], AggregateNavigationItem[P]>
  }




  export type NavigationItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavigationItemWhereInput
    orderBy?: NavigationItemOrderByWithAggregationInput | NavigationItemOrderByWithAggregationInput[]
    by: NavigationItemScalarFieldEnum[] | NavigationItemScalarFieldEnum
    having?: NavigationItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NavigationItemCountAggregateInputType | true
    _avg?: NavigationItemAvgAggregateInputType
    _sum?: NavigationItemSumAggregateInputType
    _min?: NavigationItemMinAggregateInputType
    _max?: NavigationItemMaxAggregateInputType
  }

  export type NavigationItemGroupByOutputType = {
    id: string
    label: string
    href: string
    sortOrder: number
    visible: boolean
    createdAt: Date
    updatedAt: Date
    _count: NavigationItemCountAggregateOutputType | null
    _avg: NavigationItemAvgAggregateOutputType | null
    _sum: NavigationItemSumAggregateOutputType | null
    _min: NavigationItemMinAggregateOutputType | null
    _max: NavigationItemMaxAggregateOutputType | null
  }

  type GetNavigationItemGroupByPayload<T extends NavigationItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NavigationItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NavigationItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NavigationItemGroupByOutputType[P]>
            : GetScalarType<T[P], NavigationItemGroupByOutputType[P]>
        }
      >
    >


  export type NavigationItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    href?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["navigationItem"]>

  export type NavigationItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    href?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["navigationItem"]>

  export type NavigationItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    href?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["navigationItem"]>

  export type NavigationItemSelectScalar = {
    id?: boolean
    label?: boolean
    href?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NavigationItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "href" | "sortOrder" | "visible" | "createdAt" | "updatedAt", ExtArgs["result"]["navigationItem"]>

  export type $NavigationItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NavigationItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      href: string
      sortOrder: number
      visible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["navigationItem"]>
    composites: {}
  }

  type NavigationItemGetPayload<S extends boolean | null | undefined | NavigationItemDefaultArgs> = $Result.GetResult<Prisma.$NavigationItemPayload, S>

  type NavigationItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NavigationItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NavigationItemCountAggregateInputType | true
    }

  export interface NavigationItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NavigationItem'], meta: { name: 'NavigationItem' } }
    /**
     * Find zero or one NavigationItem that matches the filter.
     * @param {NavigationItemFindUniqueArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NavigationItemFindUniqueArgs>(args: SelectSubset<T, NavigationItemFindUniqueArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NavigationItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NavigationItemFindUniqueOrThrowArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NavigationItemFindUniqueOrThrowArgs>(args: SelectSubset<T, NavigationItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NavigationItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemFindFirstArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NavigationItemFindFirstArgs>(args?: SelectSubset<T, NavigationItemFindFirstArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NavigationItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemFindFirstOrThrowArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NavigationItemFindFirstOrThrowArgs>(args?: SelectSubset<T, NavigationItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NavigationItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NavigationItems
     * const navigationItems = await prisma.navigationItem.findMany()
     * 
     * // Get first 10 NavigationItems
     * const navigationItems = await prisma.navigationItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const navigationItemWithIdOnly = await prisma.navigationItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NavigationItemFindManyArgs>(args?: SelectSubset<T, NavigationItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NavigationItem.
     * @param {NavigationItemCreateArgs} args - Arguments to create a NavigationItem.
     * @example
     * // Create one NavigationItem
     * const NavigationItem = await prisma.navigationItem.create({
     *   data: {
     *     // ... data to create a NavigationItem
     *   }
     * })
     * 
     */
    create<T extends NavigationItemCreateArgs>(args: SelectSubset<T, NavigationItemCreateArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NavigationItems.
     * @param {NavigationItemCreateManyArgs} args - Arguments to create many NavigationItems.
     * @example
     * // Create many NavigationItems
     * const navigationItem = await prisma.navigationItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NavigationItemCreateManyArgs>(args?: SelectSubset<T, NavigationItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NavigationItems and returns the data saved in the database.
     * @param {NavigationItemCreateManyAndReturnArgs} args - Arguments to create many NavigationItems.
     * @example
     * // Create many NavigationItems
     * const navigationItem = await prisma.navigationItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NavigationItems and only return the `id`
     * const navigationItemWithIdOnly = await prisma.navigationItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NavigationItemCreateManyAndReturnArgs>(args?: SelectSubset<T, NavigationItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NavigationItem.
     * @param {NavigationItemDeleteArgs} args - Arguments to delete one NavigationItem.
     * @example
     * // Delete one NavigationItem
     * const NavigationItem = await prisma.navigationItem.delete({
     *   where: {
     *     // ... filter to delete one NavigationItem
     *   }
     * })
     * 
     */
    delete<T extends NavigationItemDeleteArgs>(args: SelectSubset<T, NavigationItemDeleteArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NavigationItem.
     * @param {NavigationItemUpdateArgs} args - Arguments to update one NavigationItem.
     * @example
     * // Update one NavigationItem
     * const navigationItem = await prisma.navigationItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NavigationItemUpdateArgs>(args: SelectSubset<T, NavigationItemUpdateArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NavigationItems.
     * @param {NavigationItemDeleteManyArgs} args - Arguments to filter NavigationItems to delete.
     * @example
     * // Delete a few NavigationItems
     * const { count } = await prisma.navigationItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NavigationItemDeleteManyArgs>(args?: SelectSubset<T, NavigationItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavigationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NavigationItems
     * const navigationItem = await prisma.navigationItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NavigationItemUpdateManyArgs>(args: SelectSubset<T, NavigationItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavigationItems and returns the data updated in the database.
     * @param {NavigationItemUpdateManyAndReturnArgs} args - Arguments to update many NavigationItems.
     * @example
     * // Update many NavigationItems
     * const navigationItem = await prisma.navigationItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NavigationItems and only return the `id`
     * const navigationItemWithIdOnly = await prisma.navigationItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends NavigationItemUpdateManyAndReturnArgs>(args: SelectSubset<T, NavigationItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NavigationItem.
     * @param {NavigationItemUpsertArgs} args - Arguments to update or create a NavigationItem.
     * @example
     * // Update or create a NavigationItem
     * const navigationItem = await prisma.navigationItem.upsert({
     *   create: {
     *     // ... data to create a NavigationItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NavigationItem we want to update
     *   }
     * })
     */
    upsert<T extends NavigationItemUpsertArgs>(args: SelectSubset<T, NavigationItemUpsertArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NavigationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemCountArgs} args - Arguments to filter NavigationItems to count.
     * @example
     * // Count the number of NavigationItems
     * const count = await prisma.navigationItem.count({
     *   where: {
     *     // ... the filter for the NavigationItems we want to count
     *   }
     * })
    **/
    count<T extends NavigationItemCountArgs>(
      args?: Subset<T, NavigationItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NavigationItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NavigationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NavigationItemAggregateArgs>(args: Subset<T, NavigationItemAggregateArgs>): Prisma.PrismaPromise<GetNavigationItemAggregateType<T>>

    /**
     * Group by NavigationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemGroupByArgs} args - Group by arguments.
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
      T extends NavigationItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NavigationItemGroupByArgs['orderBy'] }
        : { orderBy?: NavigationItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NavigationItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavigationItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NavigationItem model
   */
  readonly fields: NavigationItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NavigationItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NavigationItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NavigationItem model
   */
  interface NavigationItemFieldRefs {
    readonly id: FieldRef<"NavigationItem", 'String'>
    readonly label: FieldRef<"NavigationItem", 'String'>
    readonly href: FieldRef<"NavigationItem", 'String'>
    readonly sortOrder: FieldRef<"NavigationItem", 'Int'>
    readonly visible: FieldRef<"NavigationItem", 'Boolean'>
    readonly createdAt: FieldRef<"NavigationItem", 'DateTime'>
    readonly updatedAt: FieldRef<"NavigationItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NavigationItem findUnique
   */
  export type NavigationItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem findUniqueOrThrow
   */
  export type NavigationItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem findFirst
   */
  export type NavigationItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavigationItems.
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavigationItems.
     */
    distinct?: NavigationItemScalarFieldEnum | NavigationItemScalarFieldEnum[]
  }

  /**
   * NavigationItem findFirstOrThrow
   */
  export type NavigationItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavigationItems.
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavigationItems.
     */
    distinct?: NavigationItemScalarFieldEnum | NavigationItemScalarFieldEnum[]
  }

  /**
   * NavigationItem findMany
   */
  export type NavigationItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Filter, which NavigationItems to fetch.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NavigationItems.
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavigationItems.
     */
    distinct?: NavigationItemScalarFieldEnum | NavigationItemScalarFieldEnum[]
  }

  /**
   * NavigationItem create
   */
  export type NavigationItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * The data needed to create a NavigationItem.
     */
    data: XOR<NavigationItemCreateInput, NavigationItemUncheckedCreateInput>
  }

  /**
   * NavigationItem createMany
   */
  export type NavigationItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NavigationItems.
     */
    data: NavigationItemCreateManyInput | NavigationItemCreateManyInput[]
  }

  /**
   * NavigationItem createManyAndReturn
   */
  export type NavigationItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * The data used to create many NavigationItems.
     */
    data: NavigationItemCreateManyInput | NavigationItemCreateManyInput[]
  }

  /**
   * NavigationItem update
   */
  export type NavigationItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * The data needed to update a NavigationItem.
     */
    data: XOR<NavigationItemUpdateInput, NavigationItemUncheckedUpdateInput>
    /**
     * Choose, which NavigationItem to update.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem updateMany
   */
  export type NavigationItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NavigationItems.
     */
    data: XOR<NavigationItemUpdateManyMutationInput, NavigationItemUncheckedUpdateManyInput>
    /**
     * Filter which NavigationItems to update
     */
    where?: NavigationItemWhereInput
    /**
     * Limit how many NavigationItems to update.
     */
    limit?: number
  }

  /**
   * NavigationItem updateManyAndReturn
   */
  export type NavigationItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * The data used to update NavigationItems.
     */
    data: XOR<NavigationItemUpdateManyMutationInput, NavigationItemUncheckedUpdateManyInput>
    /**
     * Filter which NavigationItems to update
     */
    where?: NavigationItemWhereInput
    /**
     * Limit how many NavigationItems to update.
     */
    limit?: number
  }

  /**
   * NavigationItem upsert
   */
  export type NavigationItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * The filter to search for the NavigationItem to update in case it exists.
     */
    where: NavigationItemWhereUniqueInput
    /**
     * In case the NavigationItem found by the `where` argument doesn't exist, create a new NavigationItem with this data.
     */
    create: XOR<NavigationItemCreateInput, NavigationItemUncheckedCreateInput>
    /**
     * In case the NavigationItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NavigationItemUpdateInput, NavigationItemUncheckedUpdateInput>
  }

  /**
   * NavigationItem delete
   */
  export type NavigationItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Filter which NavigationItem to delete.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem deleteMany
   */
  export type NavigationItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavigationItems to delete
     */
    where?: NavigationItemWhereInput
    /**
     * Limit how many NavigationItems to delete.
     */
    limit?: number
  }

  /**
   * NavigationItem without action
   */
  export type NavigationItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
  }


  /**
   * Model HeroSection
   */

  export type AggregateHeroSection = {
    _count: HeroSectionCountAggregateOutputType | null
    _min: HeroSectionMinAggregateOutputType | null
    _max: HeroSectionMaxAggregateOutputType | null
  }

  export type HeroSectionMinAggregateOutputType = {
    id: string | null
    tagLine: string | null
    title: string | null
    highlightWord: string | null
    subtitle: string | null
    ctaPrimaryText: string | null
    ctaPrimaryLink: string | null
    ctaSecondaryText: string | null
    ctaSecondaryLink: string | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroSectionMaxAggregateOutputType = {
    id: string | null
    tagLine: string | null
    title: string | null
    highlightWord: string | null
    subtitle: string | null
    ctaPrimaryText: string | null
    ctaPrimaryLink: string | null
    ctaSecondaryText: string | null
    ctaSecondaryLink: string | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroSectionCountAggregateOutputType = {
    id: number
    tagLine: number
    title: number
    highlightWord: number
    subtitle: number
    ctaPrimaryText: number
    ctaPrimaryLink: number
    ctaSecondaryText: number
    ctaSecondaryLink: number
    visible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeroSectionMinAggregateInputType = {
    id?: true
    tagLine?: true
    title?: true
    highlightWord?: true
    subtitle?: true
    ctaPrimaryText?: true
    ctaPrimaryLink?: true
    ctaSecondaryText?: true
    ctaSecondaryLink?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroSectionMaxAggregateInputType = {
    id?: true
    tagLine?: true
    title?: true
    highlightWord?: true
    subtitle?: true
    ctaPrimaryText?: true
    ctaPrimaryLink?: true
    ctaSecondaryText?: true
    ctaSecondaryLink?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroSectionCountAggregateInputType = {
    id?: true
    tagLine?: true
    title?: true
    highlightWord?: true
    subtitle?: true
    ctaPrimaryText?: true
    ctaPrimaryLink?: true
    ctaSecondaryText?: true
    ctaSecondaryLink?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeroSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroSection to aggregate.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeroSections
    **/
    _count?: true | HeroSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroSectionMaxAggregateInputType
  }

  export type GetHeroSectionAggregateType<T extends HeroSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateHeroSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeroSection[P]>
      : GetScalarType<T[P], AggregateHeroSection[P]>
  }




  export type HeroSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroSectionWhereInput
    orderBy?: HeroSectionOrderByWithAggregationInput | HeroSectionOrderByWithAggregationInput[]
    by: HeroSectionScalarFieldEnum[] | HeroSectionScalarFieldEnum
    having?: HeroSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroSectionCountAggregateInputType | true
    _min?: HeroSectionMinAggregateInputType
    _max?: HeroSectionMaxAggregateInputType
  }

  export type HeroSectionGroupByOutputType = {
    id: string
    tagLine: string
    title: string
    highlightWord: string
    subtitle: string
    ctaPrimaryText: string
    ctaPrimaryLink: string
    ctaSecondaryText: string
    ctaSecondaryLink: string
    visible: boolean
    createdAt: Date
    updatedAt: Date
    _count: HeroSectionCountAggregateOutputType | null
    _min: HeroSectionMinAggregateOutputType | null
    _max: HeroSectionMaxAggregateOutputType | null
  }

  type GetHeroSectionGroupByPayload<T extends HeroSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroSectionGroupByOutputType[P]>
            : GetScalarType<T[P], HeroSectionGroupByOutputType[P]>
        }
      >
    >


  export type HeroSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagLine?: boolean
    title?: boolean
    highlightWord?: boolean
    subtitle?: boolean
    ctaPrimaryText?: boolean
    ctaPrimaryLink?: boolean
    ctaSecondaryText?: boolean
    ctaSecondaryLink?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heroSection"]>

  export type HeroSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagLine?: boolean
    title?: boolean
    highlightWord?: boolean
    subtitle?: boolean
    ctaPrimaryText?: boolean
    ctaPrimaryLink?: boolean
    ctaSecondaryText?: boolean
    ctaSecondaryLink?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heroSection"]>

  export type HeroSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagLine?: boolean
    title?: boolean
    highlightWord?: boolean
    subtitle?: boolean
    ctaPrimaryText?: boolean
    ctaPrimaryLink?: boolean
    ctaSecondaryText?: boolean
    ctaSecondaryLink?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heroSection"]>

  export type HeroSectionSelectScalar = {
    id?: boolean
    tagLine?: boolean
    title?: boolean
    highlightWord?: boolean
    subtitle?: boolean
    ctaPrimaryText?: boolean
    ctaPrimaryLink?: boolean
    ctaSecondaryText?: boolean
    ctaSecondaryLink?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HeroSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tagLine" | "title" | "highlightWord" | "subtitle" | "ctaPrimaryText" | "ctaPrimaryLink" | "ctaSecondaryText" | "ctaSecondaryLink" | "visible" | "createdAt" | "updatedAt", ExtArgs["result"]["heroSection"]>

  export type $HeroSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeroSection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tagLine: string
      title: string
      highlightWord: string
      subtitle: string
      ctaPrimaryText: string
      ctaPrimaryLink: string
      ctaSecondaryText: string
      ctaSecondaryLink: string
      visible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["heroSection"]>
    composites: {}
  }

  type HeroSectionGetPayload<S extends boolean | null | undefined | HeroSectionDefaultArgs> = $Result.GetResult<Prisma.$HeroSectionPayload, S>

  type HeroSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeroSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroSectionCountAggregateInputType | true
    }

  export interface HeroSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeroSection'], meta: { name: 'HeroSection' } }
    /**
     * Find zero or one HeroSection that matches the filter.
     * @param {HeroSectionFindUniqueArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroSectionFindUniqueArgs>(args: SelectSubset<T, HeroSectionFindUniqueArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeroSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeroSectionFindUniqueOrThrowArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeroSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindFirstArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroSectionFindFirstArgs>(args?: SelectSubset<T, HeroSectionFindFirstArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeroSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindFirstOrThrowArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeroSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeroSections
     * const heroSections = await prisma.heroSection.findMany()
     * 
     * // Get first 10 HeroSections
     * const heroSections = await prisma.heroSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroSectionWithIdOnly = await prisma.heroSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroSectionFindManyArgs>(args?: SelectSubset<T, HeroSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeroSection.
     * @param {HeroSectionCreateArgs} args - Arguments to create a HeroSection.
     * @example
     * // Create one HeroSection
     * const HeroSection = await prisma.heroSection.create({
     *   data: {
     *     // ... data to create a HeroSection
     *   }
     * })
     * 
     */
    create<T extends HeroSectionCreateArgs>(args: SelectSubset<T, HeroSectionCreateArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeroSections.
     * @param {HeroSectionCreateManyArgs} args - Arguments to create many HeroSections.
     * @example
     * // Create many HeroSections
     * const heroSection = await prisma.heroSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroSectionCreateManyArgs>(args?: SelectSubset<T, HeroSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HeroSections and returns the data saved in the database.
     * @param {HeroSectionCreateManyAndReturnArgs} args - Arguments to create many HeroSections.
     * @example
     * // Create many HeroSections
     * const heroSection = await prisma.heroSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HeroSections and only return the `id`
     * const heroSectionWithIdOnly = await prisma.heroSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeroSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, HeroSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HeroSection.
     * @param {HeroSectionDeleteArgs} args - Arguments to delete one HeroSection.
     * @example
     * // Delete one HeroSection
     * const HeroSection = await prisma.heroSection.delete({
     *   where: {
     *     // ... filter to delete one HeroSection
     *   }
     * })
     * 
     */
    delete<T extends HeroSectionDeleteArgs>(args: SelectSubset<T, HeroSectionDeleteArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeroSection.
     * @param {HeroSectionUpdateArgs} args - Arguments to update one HeroSection.
     * @example
     * // Update one HeroSection
     * const heroSection = await prisma.heroSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroSectionUpdateArgs>(args: SelectSubset<T, HeroSectionUpdateArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeroSections.
     * @param {HeroSectionDeleteManyArgs} args - Arguments to filter HeroSections to delete.
     * @example
     * // Delete a few HeroSections
     * const { count } = await prisma.heroSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroSectionDeleteManyArgs>(args?: SelectSubset<T, HeroSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeroSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeroSections
     * const heroSection = await prisma.heroSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroSectionUpdateManyArgs>(args: SelectSubset<T, HeroSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeroSections and returns the data updated in the database.
     * @param {HeroSectionUpdateManyAndReturnArgs} args - Arguments to update many HeroSections.
     * @example
     * // Update many HeroSections
     * const heroSection = await prisma.heroSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HeroSections and only return the `id`
     * const heroSectionWithIdOnly = await prisma.heroSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends HeroSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, HeroSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HeroSection.
     * @param {HeroSectionUpsertArgs} args - Arguments to update or create a HeroSection.
     * @example
     * // Update or create a HeroSection
     * const heroSection = await prisma.heroSection.upsert({
     *   create: {
     *     // ... data to create a HeroSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeroSection we want to update
     *   }
     * })
     */
    upsert<T extends HeroSectionUpsertArgs>(args: SelectSubset<T, HeroSectionUpsertArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeroSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionCountArgs} args - Arguments to filter HeroSections to count.
     * @example
     * // Count the number of HeroSections
     * const count = await prisma.heroSection.count({
     *   where: {
     *     // ... the filter for the HeroSections we want to count
     *   }
     * })
    **/
    count<T extends HeroSectionCountArgs>(
      args?: Subset<T, HeroSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeroSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeroSectionAggregateArgs>(args: Subset<T, HeroSectionAggregateArgs>): Prisma.PrismaPromise<GetHeroSectionAggregateType<T>>

    /**
     * Group by HeroSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionGroupByArgs} args - Group by arguments.
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
      T extends HeroSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroSectionGroupByArgs['orderBy'] }
        : { orderBy?: HeroSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeroSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeroSection model
   */
  readonly fields: HeroSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeroSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HeroSection model
   */
  interface HeroSectionFieldRefs {
    readonly id: FieldRef<"HeroSection", 'String'>
    readonly tagLine: FieldRef<"HeroSection", 'String'>
    readonly title: FieldRef<"HeroSection", 'String'>
    readonly highlightWord: FieldRef<"HeroSection", 'String'>
    readonly subtitle: FieldRef<"HeroSection", 'String'>
    readonly ctaPrimaryText: FieldRef<"HeroSection", 'String'>
    readonly ctaPrimaryLink: FieldRef<"HeroSection", 'String'>
    readonly ctaSecondaryText: FieldRef<"HeroSection", 'String'>
    readonly ctaSecondaryLink: FieldRef<"HeroSection", 'String'>
    readonly visible: FieldRef<"HeroSection", 'Boolean'>
    readonly createdAt: FieldRef<"HeroSection", 'DateTime'>
    readonly updatedAt: FieldRef<"HeroSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HeroSection findUnique
   */
  export type HeroSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection findUniqueOrThrow
   */
  export type HeroSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection findFirst
   */
  export type HeroSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroSections.
     */
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection findFirstOrThrow
   */
  export type HeroSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroSections.
     */
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection findMany
   */
  export type HeroSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter, which HeroSections to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroSections.
     */
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection create
   */
  export type HeroSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * The data needed to create a HeroSection.
     */
    data: XOR<HeroSectionCreateInput, HeroSectionUncheckedCreateInput>
  }

  /**
   * HeroSection createMany
   */
  export type HeroSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeroSections.
     */
    data: HeroSectionCreateManyInput | HeroSectionCreateManyInput[]
  }

  /**
   * HeroSection createManyAndReturn
   */
  export type HeroSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * The data used to create many HeroSections.
     */
    data: HeroSectionCreateManyInput | HeroSectionCreateManyInput[]
  }

  /**
   * HeroSection update
   */
  export type HeroSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * The data needed to update a HeroSection.
     */
    data: XOR<HeroSectionUpdateInput, HeroSectionUncheckedUpdateInput>
    /**
     * Choose, which HeroSection to update.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection updateMany
   */
  export type HeroSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeroSections.
     */
    data: XOR<HeroSectionUpdateManyMutationInput, HeroSectionUncheckedUpdateManyInput>
    /**
     * Filter which HeroSections to update
     */
    where?: HeroSectionWhereInput
    /**
     * Limit how many HeroSections to update.
     */
    limit?: number
  }

  /**
   * HeroSection updateManyAndReturn
   */
  export type HeroSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * The data used to update HeroSections.
     */
    data: XOR<HeroSectionUpdateManyMutationInput, HeroSectionUncheckedUpdateManyInput>
    /**
     * Filter which HeroSections to update
     */
    where?: HeroSectionWhereInput
    /**
     * Limit how many HeroSections to update.
     */
    limit?: number
  }

  /**
   * HeroSection upsert
   */
  export type HeroSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * The filter to search for the HeroSection to update in case it exists.
     */
    where: HeroSectionWhereUniqueInput
    /**
     * In case the HeroSection found by the `where` argument doesn't exist, create a new HeroSection with this data.
     */
    create: XOR<HeroSectionCreateInput, HeroSectionUncheckedCreateInput>
    /**
     * In case the HeroSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroSectionUpdateInput, HeroSectionUncheckedUpdateInput>
  }

  /**
   * HeroSection delete
   */
  export type HeroSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter which HeroSection to delete.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection deleteMany
   */
  export type HeroSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroSections to delete
     */
    where?: HeroSectionWhereInput
    /**
     * Limit how many HeroSections to delete.
     */
    limit?: number
  }

  /**
   * HeroSection without action
   */
  export type HeroSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
  }


  /**
   * Model AboutSection
   */

  export type AggregateAboutSection = {
    _count: AboutSectionCountAggregateOutputType | null
    _min: AboutSectionMinAggregateOutputType | null
    _max: AboutSectionMaxAggregateOutputType | null
  }

  export type AboutSectionMinAggregateOutputType = {
    id: string | null
    tagLine: string | null
    title: string | null
    titleHighlight: string | null
    paragraph1: string | null
    paragraph2: string | null
    founderName: string | null
    founderTitle: string | null
    founderImage: string | null
    stat1Label: string | null
    stat1Value: string | null
    stat2Label: string | null
    stat2Value: string | null
    stat3Label: string | null
    stat3Value: string | null
    stat4Label: string | null
    stat4Value: string | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutSectionMaxAggregateOutputType = {
    id: string | null
    tagLine: string | null
    title: string | null
    titleHighlight: string | null
    paragraph1: string | null
    paragraph2: string | null
    founderName: string | null
    founderTitle: string | null
    founderImage: string | null
    stat1Label: string | null
    stat1Value: string | null
    stat2Label: string | null
    stat2Value: string | null
    stat3Label: string | null
    stat3Value: string | null
    stat4Label: string | null
    stat4Value: string | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutSectionCountAggregateOutputType = {
    id: number
    tagLine: number
    title: number
    titleHighlight: number
    paragraph1: number
    paragraph2: number
    founderName: number
    founderTitle: number
    founderImage: number
    stat1Label: number
    stat1Value: number
    stat2Label: number
    stat2Value: number
    stat3Label: number
    stat3Value: number
    stat4Label: number
    stat4Value: number
    visible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutSectionMinAggregateInputType = {
    id?: true
    tagLine?: true
    title?: true
    titleHighlight?: true
    paragraph1?: true
    paragraph2?: true
    founderName?: true
    founderTitle?: true
    founderImage?: true
    stat1Label?: true
    stat1Value?: true
    stat2Label?: true
    stat2Value?: true
    stat3Label?: true
    stat3Value?: true
    stat4Label?: true
    stat4Value?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutSectionMaxAggregateInputType = {
    id?: true
    tagLine?: true
    title?: true
    titleHighlight?: true
    paragraph1?: true
    paragraph2?: true
    founderName?: true
    founderTitle?: true
    founderImage?: true
    stat1Label?: true
    stat1Value?: true
    stat2Label?: true
    stat2Value?: true
    stat3Label?: true
    stat3Value?: true
    stat4Label?: true
    stat4Value?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutSectionCountAggregateInputType = {
    id?: true
    tagLine?: true
    title?: true
    titleHighlight?: true
    paragraph1?: true
    paragraph2?: true
    founderName?: true
    founderTitle?: true
    founderImage?: true
    stat1Label?: true
    stat1Value?: true
    stat2Label?: true
    stat2Value?: true
    stat3Label?: true
    stat3Value?: true
    stat4Label?: true
    stat4Value?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutSection to aggregate.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutSections
    **/
    _count?: true | AboutSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutSectionMaxAggregateInputType
  }

  export type GetAboutSectionAggregateType<T extends AboutSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutSection[P]>
      : GetScalarType<T[P], AggregateAboutSection[P]>
  }




  export type AboutSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutSectionWhereInput
    orderBy?: AboutSectionOrderByWithAggregationInput | AboutSectionOrderByWithAggregationInput[]
    by: AboutSectionScalarFieldEnum[] | AboutSectionScalarFieldEnum
    having?: AboutSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutSectionCountAggregateInputType | true
    _min?: AboutSectionMinAggregateInputType
    _max?: AboutSectionMaxAggregateInputType
  }

  export type AboutSectionGroupByOutputType = {
    id: string
    tagLine: string
    title: string
    titleHighlight: string
    paragraph1: string
    paragraph2: string
    founderName: string
    founderTitle: string
    founderImage: string
    stat1Label: string
    stat1Value: string
    stat2Label: string
    stat2Value: string
    stat3Label: string
    stat3Value: string
    stat4Label: string
    stat4Value: string
    visible: boolean
    createdAt: Date
    updatedAt: Date
    _count: AboutSectionCountAggregateOutputType | null
    _min: AboutSectionMinAggregateOutputType | null
    _max: AboutSectionMaxAggregateOutputType | null
  }

  type GetAboutSectionGroupByPayload<T extends AboutSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutSectionGroupByOutputType[P]>
            : GetScalarType<T[P], AboutSectionGroupByOutputType[P]>
        }
      >
    >


  export type AboutSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagLine?: boolean
    title?: boolean
    titleHighlight?: boolean
    paragraph1?: boolean
    paragraph2?: boolean
    founderName?: boolean
    founderTitle?: boolean
    founderImage?: boolean
    stat1Label?: boolean
    stat1Value?: boolean
    stat2Label?: boolean
    stat2Value?: boolean
    stat3Label?: boolean
    stat3Value?: boolean
    stat4Label?: boolean
    stat4Value?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutSection"]>

  export type AboutSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagLine?: boolean
    title?: boolean
    titleHighlight?: boolean
    paragraph1?: boolean
    paragraph2?: boolean
    founderName?: boolean
    founderTitle?: boolean
    founderImage?: boolean
    stat1Label?: boolean
    stat1Value?: boolean
    stat2Label?: boolean
    stat2Value?: boolean
    stat3Label?: boolean
    stat3Value?: boolean
    stat4Label?: boolean
    stat4Value?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutSection"]>

  export type AboutSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagLine?: boolean
    title?: boolean
    titleHighlight?: boolean
    paragraph1?: boolean
    paragraph2?: boolean
    founderName?: boolean
    founderTitle?: boolean
    founderImage?: boolean
    stat1Label?: boolean
    stat1Value?: boolean
    stat2Label?: boolean
    stat2Value?: boolean
    stat3Label?: boolean
    stat3Value?: boolean
    stat4Label?: boolean
    stat4Value?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutSection"]>

  export type AboutSectionSelectScalar = {
    id?: boolean
    tagLine?: boolean
    title?: boolean
    titleHighlight?: boolean
    paragraph1?: boolean
    paragraph2?: boolean
    founderName?: boolean
    founderTitle?: boolean
    founderImage?: boolean
    stat1Label?: boolean
    stat1Value?: boolean
    stat2Label?: boolean
    stat2Value?: boolean
    stat3Label?: boolean
    stat3Value?: boolean
    stat4Label?: boolean
    stat4Value?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tagLine" | "title" | "titleHighlight" | "paragraph1" | "paragraph2" | "founderName" | "founderTitle" | "founderImage" | "stat1Label" | "stat1Value" | "stat2Label" | "stat2Value" | "stat3Label" | "stat3Value" | "stat4Label" | "stat4Value" | "visible" | "createdAt" | "updatedAt", ExtArgs["result"]["aboutSection"]>

  export type $AboutSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutSection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tagLine: string
      title: string
      titleHighlight: string
      paragraph1: string
      paragraph2: string
      founderName: string
      founderTitle: string
      founderImage: string
      stat1Label: string
      stat1Value: string
      stat2Label: string
      stat2Value: string
      stat3Label: string
      stat3Value: string
      stat4Label: string
      stat4Value: string
      visible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aboutSection"]>
    composites: {}
  }

  type AboutSectionGetPayload<S extends boolean | null | undefined | AboutSectionDefaultArgs> = $Result.GetResult<Prisma.$AboutSectionPayload, S>

  type AboutSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutSectionCountAggregateInputType | true
    }

  export interface AboutSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutSection'], meta: { name: 'AboutSection' } }
    /**
     * Find zero or one AboutSection that matches the filter.
     * @param {AboutSectionFindUniqueArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutSectionFindUniqueArgs>(args: SelectSubset<T, AboutSectionFindUniqueArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutSectionFindUniqueOrThrowArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindFirstArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutSectionFindFirstArgs>(args?: SelectSubset<T, AboutSectionFindFirstArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindFirstOrThrowArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AboutSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutSections
     * const aboutSections = await prisma.aboutSection.findMany()
     * 
     * // Get first 10 AboutSections
     * const aboutSections = await prisma.aboutSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutSectionWithIdOnly = await prisma.aboutSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutSectionFindManyArgs>(args?: SelectSubset<T, AboutSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutSection.
     * @param {AboutSectionCreateArgs} args - Arguments to create a AboutSection.
     * @example
     * // Create one AboutSection
     * const AboutSection = await prisma.aboutSection.create({
     *   data: {
     *     // ... data to create a AboutSection
     *   }
     * })
     * 
     */
    create<T extends AboutSectionCreateArgs>(args: SelectSubset<T, AboutSectionCreateArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AboutSections.
     * @param {AboutSectionCreateManyArgs} args - Arguments to create many AboutSections.
     * @example
     * // Create many AboutSections
     * const aboutSection = await prisma.aboutSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutSectionCreateManyArgs>(args?: SelectSubset<T, AboutSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutSections and returns the data saved in the database.
     * @param {AboutSectionCreateManyAndReturnArgs} args - Arguments to create many AboutSections.
     * @example
     * // Create many AboutSections
     * const aboutSection = await prisma.aboutSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutSections and only return the `id`
     * const aboutSectionWithIdOnly = await prisma.aboutSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AboutSection.
     * @param {AboutSectionDeleteArgs} args - Arguments to delete one AboutSection.
     * @example
     * // Delete one AboutSection
     * const AboutSection = await prisma.aboutSection.delete({
     *   where: {
     *     // ... filter to delete one AboutSection
     *   }
     * })
     * 
     */
    delete<T extends AboutSectionDeleteArgs>(args: SelectSubset<T, AboutSectionDeleteArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutSection.
     * @param {AboutSectionUpdateArgs} args - Arguments to update one AboutSection.
     * @example
     * // Update one AboutSection
     * const aboutSection = await prisma.aboutSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutSectionUpdateArgs>(args: SelectSubset<T, AboutSectionUpdateArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AboutSections.
     * @param {AboutSectionDeleteManyArgs} args - Arguments to filter AboutSections to delete.
     * @example
     * // Delete a few AboutSections
     * const { count } = await prisma.aboutSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutSectionDeleteManyArgs>(args?: SelectSubset<T, AboutSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutSections
     * const aboutSection = await prisma.aboutSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutSectionUpdateManyArgs>(args: SelectSubset<T, AboutSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutSections and returns the data updated in the database.
     * @param {AboutSectionUpdateManyAndReturnArgs} args - Arguments to update many AboutSections.
     * @example
     * // Update many AboutSections
     * const aboutSection = await prisma.aboutSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AboutSections and only return the `id`
     * const aboutSectionWithIdOnly = await prisma.aboutSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends AboutSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AboutSection.
     * @param {AboutSectionUpsertArgs} args - Arguments to update or create a AboutSection.
     * @example
     * // Update or create a AboutSection
     * const aboutSection = await prisma.aboutSection.upsert({
     *   create: {
     *     // ... data to create a AboutSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutSection we want to update
     *   }
     * })
     */
    upsert<T extends AboutSectionUpsertArgs>(args: SelectSubset<T, AboutSectionUpsertArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AboutSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionCountArgs} args - Arguments to filter AboutSections to count.
     * @example
     * // Count the number of AboutSections
     * const count = await prisma.aboutSection.count({
     *   where: {
     *     // ... the filter for the AboutSections we want to count
     *   }
     * })
    **/
    count<T extends AboutSectionCountArgs>(
      args?: Subset<T, AboutSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutSectionAggregateArgs>(args: Subset<T, AboutSectionAggregateArgs>): Prisma.PrismaPromise<GetAboutSectionAggregateType<T>>

    /**
     * Group by AboutSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionGroupByArgs} args - Group by arguments.
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
      T extends AboutSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutSectionGroupByArgs['orderBy'] }
        : { orderBy?: AboutSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AboutSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutSection model
   */
  readonly fields: AboutSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AboutSection model
   */
  interface AboutSectionFieldRefs {
    readonly id: FieldRef<"AboutSection", 'String'>
    readonly tagLine: FieldRef<"AboutSection", 'String'>
    readonly title: FieldRef<"AboutSection", 'String'>
    readonly titleHighlight: FieldRef<"AboutSection", 'String'>
    readonly paragraph1: FieldRef<"AboutSection", 'String'>
    readonly paragraph2: FieldRef<"AboutSection", 'String'>
    readonly founderName: FieldRef<"AboutSection", 'String'>
    readonly founderTitle: FieldRef<"AboutSection", 'String'>
    readonly founderImage: FieldRef<"AboutSection", 'String'>
    readonly stat1Label: FieldRef<"AboutSection", 'String'>
    readonly stat1Value: FieldRef<"AboutSection", 'String'>
    readonly stat2Label: FieldRef<"AboutSection", 'String'>
    readonly stat2Value: FieldRef<"AboutSection", 'String'>
    readonly stat3Label: FieldRef<"AboutSection", 'String'>
    readonly stat3Value: FieldRef<"AboutSection", 'String'>
    readonly stat4Label: FieldRef<"AboutSection", 'String'>
    readonly stat4Value: FieldRef<"AboutSection", 'String'>
    readonly visible: FieldRef<"AboutSection", 'Boolean'>
    readonly createdAt: FieldRef<"AboutSection", 'DateTime'>
    readonly updatedAt: FieldRef<"AboutSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutSection findUnique
   */
  export type AboutSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection findUniqueOrThrow
   */
  export type AboutSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection findFirst
   */
  export type AboutSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutSections.
     */
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection findFirstOrThrow
   */
  export type AboutSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutSections.
     */
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection findMany
   */
  export type AboutSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Filter, which AboutSections to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutSections.
     */
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection create
   */
  export type AboutSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * The data needed to create a AboutSection.
     */
    data: XOR<AboutSectionCreateInput, AboutSectionUncheckedCreateInput>
  }

  /**
   * AboutSection createMany
   */
  export type AboutSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutSections.
     */
    data: AboutSectionCreateManyInput | AboutSectionCreateManyInput[]
  }

  /**
   * AboutSection createManyAndReturn
   */
  export type AboutSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * The data used to create many AboutSections.
     */
    data: AboutSectionCreateManyInput | AboutSectionCreateManyInput[]
  }

  /**
   * AboutSection update
   */
  export type AboutSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * The data needed to update a AboutSection.
     */
    data: XOR<AboutSectionUpdateInput, AboutSectionUncheckedUpdateInput>
    /**
     * Choose, which AboutSection to update.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection updateMany
   */
  export type AboutSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutSections.
     */
    data: XOR<AboutSectionUpdateManyMutationInput, AboutSectionUncheckedUpdateManyInput>
    /**
     * Filter which AboutSections to update
     */
    where?: AboutSectionWhereInput
    /**
     * Limit how many AboutSections to update.
     */
    limit?: number
  }

  /**
   * AboutSection updateManyAndReturn
   */
  export type AboutSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * The data used to update AboutSections.
     */
    data: XOR<AboutSectionUpdateManyMutationInput, AboutSectionUncheckedUpdateManyInput>
    /**
     * Filter which AboutSections to update
     */
    where?: AboutSectionWhereInput
    /**
     * Limit how many AboutSections to update.
     */
    limit?: number
  }

  /**
   * AboutSection upsert
   */
  export type AboutSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * The filter to search for the AboutSection to update in case it exists.
     */
    where: AboutSectionWhereUniqueInput
    /**
     * In case the AboutSection found by the `where` argument doesn't exist, create a new AboutSection with this data.
     */
    create: XOR<AboutSectionCreateInput, AboutSectionUncheckedCreateInput>
    /**
     * In case the AboutSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutSectionUpdateInput, AboutSectionUncheckedUpdateInput>
  }

  /**
   * AboutSection delete
   */
  export type AboutSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Filter which AboutSection to delete.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection deleteMany
   */
  export type AboutSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutSections to delete
     */
    where?: AboutSectionWhereInput
    /**
     * Limit how many AboutSections to delete.
     */
    limit?: number
  }

  /**
   * AboutSection without action
   */
  export type AboutSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
  }


  /**
   * Model ServiceItem
   */

  export type AggregateServiceItem = {
    _count: ServiceItemCountAggregateOutputType | null
    _avg: ServiceItemAvgAggregateOutputType | null
    _sum: ServiceItemSumAggregateOutputType | null
    _min: ServiceItemMinAggregateOutputType | null
    _max: ServiceItemMaxAggregateOutputType | null
  }

  export type ServiceItemAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ServiceItemSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ServiceItemMinAggregateOutputType = {
    id: string | null
    icon: string | null
    title: string | null
    description: string | null
    sortOrder: number | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceItemMaxAggregateOutputType = {
    id: string | null
    icon: string | null
    title: string | null
    description: string | null
    sortOrder: number | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceItemCountAggregateOutputType = {
    id: number
    icon: number
    title: number
    description: number
    sortOrder: number
    visible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceItemAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ServiceItemSumAggregateInputType = {
    sortOrder?: true
  }

  export type ServiceItemMinAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    sortOrder?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceItemMaxAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    sortOrder?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceItemCountAggregateInputType = {
    id?: true
    icon?: true
    title?: true
    description?: true
    sortOrder?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceItem to aggregate.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceItems
    **/
    _count?: true | ServiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceItemMaxAggregateInputType
  }

  export type GetServiceItemAggregateType<T extends ServiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceItem[P]>
      : GetScalarType<T[P], AggregateServiceItem[P]>
  }




  export type ServiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceItemWhereInput
    orderBy?: ServiceItemOrderByWithAggregationInput | ServiceItemOrderByWithAggregationInput[]
    by: ServiceItemScalarFieldEnum[] | ServiceItemScalarFieldEnum
    having?: ServiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceItemCountAggregateInputType | true
    _avg?: ServiceItemAvgAggregateInputType
    _sum?: ServiceItemSumAggregateInputType
    _min?: ServiceItemMinAggregateInputType
    _max?: ServiceItemMaxAggregateInputType
  }

  export type ServiceItemGroupByOutputType = {
    id: string
    icon: string
    title: string
    description: string
    sortOrder: number
    visible: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceItemCountAggregateOutputType | null
    _avg: ServiceItemAvgAggregateOutputType | null
    _sum: ServiceItemSumAggregateOutputType | null
    _min: ServiceItemMinAggregateOutputType | null
    _max: ServiceItemMaxAggregateOutputType | null
  }

  type GetServiceItemGroupByPayload<T extends ServiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceItemGroupByOutputType[P]>
        }
      >
    >


  export type ServiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceItem"]>

  export type ServiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceItem"]>

  export type ServiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceItem"]>

  export type ServiceItemSelectScalar = {
    id?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "icon" | "title" | "description" | "sortOrder" | "visible" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceItem"]>

  export type $ServiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      icon: string
      title: string
      description: string
      sortOrder: number
      visible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceItem"]>
    composites: {}
  }

  type ServiceItemGetPayload<S extends boolean | null | undefined | ServiceItemDefaultArgs> = $Result.GetResult<Prisma.$ServiceItemPayload, S>

  type ServiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceItemCountAggregateInputType | true
    }

  export interface ServiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceItem'], meta: { name: 'ServiceItem' } }
    /**
     * Find zero or one ServiceItem that matches the filter.
     * @param {ServiceItemFindUniqueArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceItemFindUniqueArgs>(args: SelectSubset<T, ServiceItemFindUniqueArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceItemFindUniqueOrThrowArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemFindFirstArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceItemFindFirstArgs>(args?: SelectSubset<T, ServiceItemFindFirstArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemFindFirstOrThrowArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceItems
     * const serviceItems = await prisma.serviceItem.findMany()
     * 
     * // Get first 10 ServiceItems
     * const serviceItems = await prisma.serviceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceItemWithIdOnly = await prisma.serviceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceItemFindManyArgs>(args?: SelectSubset<T, ServiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceItem.
     * @param {ServiceItemCreateArgs} args - Arguments to create a ServiceItem.
     * @example
     * // Create one ServiceItem
     * const ServiceItem = await prisma.serviceItem.create({
     *   data: {
     *     // ... data to create a ServiceItem
     *   }
     * })
     * 
     */
    create<T extends ServiceItemCreateArgs>(args: SelectSubset<T, ServiceItemCreateArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceItems.
     * @param {ServiceItemCreateManyArgs} args - Arguments to create many ServiceItems.
     * @example
     * // Create many ServiceItems
     * const serviceItem = await prisma.serviceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceItemCreateManyArgs>(args?: SelectSubset<T, ServiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceItems and returns the data saved in the database.
     * @param {ServiceItemCreateManyAndReturnArgs} args - Arguments to create many ServiceItems.
     * @example
     * // Create many ServiceItems
     * const serviceItem = await prisma.serviceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceItems and only return the `id`
     * const serviceItemWithIdOnly = await prisma.serviceItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceItem.
     * @param {ServiceItemDeleteArgs} args - Arguments to delete one ServiceItem.
     * @example
     * // Delete one ServiceItem
     * const ServiceItem = await prisma.serviceItem.delete({
     *   where: {
     *     // ... filter to delete one ServiceItem
     *   }
     * })
     * 
     */
    delete<T extends ServiceItemDeleteArgs>(args: SelectSubset<T, ServiceItemDeleteArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceItem.
     * @param {ServiceItemUpdateArgs} args - Arguments to update one ServiceItem.
     * @example
     * // Update one ServiceItem
     * const serviceItem = await prisma.serviceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceItemUpdateArgs>(args: SelectSubset<T, ServiceItemUpdateArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceItems.
     * @param {ServiceItemDeleteManyArgs} args - Arguments to filter ServiceItems to delete.
     * @example
     * // Delete a few ServiceItems
     * const { count } = await prisma.serviceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceItemDeleteManyArgs>(args?: SelectSubset<T, ServiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceItems
     * const serviceItem = await prisma.serviceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceItemUpdateManyArgs>(args: SelectSubset<T, ServiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceItems and returns the data updated in the database.
     * @param {ServiceItemUpdateManyAndReturnArgs} args - Arguments to update many ServiceItems.
     * @example
     * // Update many ServiceItems
     * const serviceItem = await prisma.serviceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceItems and only return the `id`
     * const serviceItemWithIdOnly = await prisma.serviceItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceItem.
     * @param {ServiceItemUpsertArgs} args - Arguments to update or create a ServiceItem.
     * @example
     * // Update or create a ServiceItem
     * const serviceItem = await prisma.serviceItem.upsert({
     *   create: {
     *     // ... data to create a ServiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceItem we want to update
     *   }
     * })
     */
    upsert<T extends ServiceItemUpsertArgs>(args: SelectSubset<T, ServiceItemUpsertArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemCountArgs} args - Arguments to filter ServiceItems to count.
     * @example
     * // Count the number of ServiceItems
     * const count = await prisma.serviceItem.count({
     *   where: {
     *     // ... the filter for the ServiceItems we want to count
     *   }
     * })
    **/
    count<T extends ServiceItemCountArgs>(
      args?: Subset<T, ServiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceItemAggregateArgs>(args: Subset<T, ServiceItemAggregateArgs>): Prisma.PrismaPromise<GetServiceItemAggregateType<T>>

    /**
     * Group by ServiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemGroupByArgs} args - Group by arguments.
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
      T extends ServiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceItemGroupByArgs['orderBy'] }
        : { orderBy?: ServiceItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceItem model
   */
  readonly fields: ServiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ServiceItem model
   */
  interface ServiceItemFieldRefs {
    readonly id: FieldRef<"ServiceItem", 'String'>
    readonly icon: FieldRef<"ServiceItem", 'String'>
    readonly title: FieldRef<"ServiceItem", 'String'>
    readonly description: FieldRef<"ServiceItem", 'String'>
    readonly sortOrder: FieldRef<"ServiceItem", 'Int'>
    readonly visible: FieldRef<"ServiceItem", 'Boolean'>
    readonly createdAt: FieldRef<"ServiceItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceItem findUnique
   */
  export type ServiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem findUniqueOrThrow
   */
  export type ServiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem findFirst
   */
  export type ServiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceItems.
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceItems.
     */
    distinct?: ServiceItemScalarFieldEnum | ServiceItemScalarFieldEnum[]
  }

  /**
   * ServiceItem findFirstOrThrow
   */
  export type ServiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceItems.
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceItems.
     */
    distinct?: ServiceItemScalarFieldEnum | ServiceItemScalarFieldEnum[]
  }

  /**
   * ServiceItem findMany
   */
  export type ServiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Filter, which ServiceItems to fetch.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceItems.
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceItems.
     */
    distinct?: ServiceItemScalarFieldEnum | ServiceItemScalarFieldEnum[]
  }

  /**
   * ServiceItem create
   */
  export type ServiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * The data needed to create a ServiceItem.
     */
    data: XOR<ServiceItemCreateInput, ServiceItemUncheckedCreateInput>
  }

  /**
   * ServiceItem createMany
   */
  export type ServiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceItems.
     */
    data: ServiceItemCreateManyInput | ServiceItemCreateManyInput[]
  }

  /**
   * ServiceItem createManyAndReturn
   */
  export type ServiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceItems.
     */
    data: ServiceItemCreateManyInput | ServiceItemCreateManyInput[]
  }

  /**
   * ServiceItem update
   */
  export type ServiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * The data needed to update a ServiceItem.
     */
    data: XOR<ServiceItemUpdateInput, ServiceItemUncheckedUpdateInput>
    /**
     * Choose, which ServiceItem to update.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem updateMany
   */
  export type ServiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceItems.
     */
    data: XOR<ServiceItemUpdateManyMutationInput, ServiceItemUncheckedUpdateManyInput>
    /**
     * Filter which ServiceItems to update
     */
    where?: ServiceItemWhereInput
    /**
     * Limit how many ServiceItems to update.
     */
    limit?: number
  }

  /**
   * ServiceItem updateManyAndReturn
   */
  export type ServiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * The data used to update ServiceItems.
     */
    data: XOR<ServiceItemUpdateManyMutationInput, ServiceItemUncheckedUpdateManyInput>
    /**
     * Filter which ServiceItems to update
     */
    where?: ServiceItemWhereInput
    /**
     * Limit how many ServiceItems to update.
     */
    limit?: number
  }

  /**
   * ServiceItem upsert
   */
  export type ServiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * The filter to search for the ServiceItem to update in case it exists.
     */
    where: ServiceItemWhereUniqueInput
    /**
     * In case the ServiceItem found by the `where` argument doesn't exist, create a new ServiceItem with this data.
     */
    create: XOR<ServiceItemCreateInput, ServiceItemUncheckedCreateInput>
    /**
     * In case the ServiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceItemUpdateInput, ServiceItemUncheckedUpdateInput>
  }

  /**
   * ServiceItem delete
   */
  export type ServiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Filter which ServiceItem to delete.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem deleteMany
   */
  export type ServiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceItems to delete
     */
    where?: ServiceItemWhereInput
    /**
     * Limit how many ServiceItems to delete.
     */
    limit?: number
  }

  /**
   * ServiceItem without action
   */
  export type ServiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type GameSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    shortDescription: string | null
    fullDescription: string | null
    coverImage: string | null
    genre: string | null
    appStoreUrl: string | null
    googlePlayUrl: string | null
    webUrl: string | null
    steamUrl: string | null
    featured: boolean | null
    published: boolean | null
    releaseDate: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    shortDescription: string | null
    fullDescription: string | null
    coverImage: string | null
    genre: string | null
    appStoreUrl: string | null
    googlePlayUrl: string | null
    webUrl: string | null
    steamUrl: string | null
    featured: boolean | null
    published: boolean | null
    releaseDate: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    shortDescription: number
    fullDescription: number
    coverImage: number
    genre: number
    appStoreUrl: number
    googlePlayUrl: number
    webUrl: number
    steamUrl: number
    featured: number
    published: number
    releaseDate: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    sortOrder?: true
  }

  export type GameSumAggregateInputType = {
    sortOrder?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    shortDescription?: true
    fullDescription?: true
    coverImage?: true
    genre?: true
    appStoreUrl?: true
    googlePlayUrl?: true
    webUrl?: true
    steamUrl?: true
    featured?: true
    published?: true
    releaseDate?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    shortDescription?: true
    fullDescription?: true
    coverImage?: true
    genre?: true
    appStoreUrl?: true
    googlePlayUrl?: true
    webUrl?: true
    steamUrl?: true
    featured?: true
    published?: true
    releaseDate?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    shortDescription?: true
    fullDescription?: true
    coverImage?: true
    genre?: true
    appStoreUrl?: true
    googlePlayUrl?: true
    webUrl?: true
    steamUrl?: true
    featured?: true
    published?: true
    releaseDate?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    title: string
    slug: string
    shortDescription: string
    fullDescription: string
    coverImage: string
    genre: string
    appStoreUrl: string
    googlePlayUrl: string
    webUrl: string
    steamUrl: string
    featured: boolean
    published: boolean
    releaseDate: string
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    coverImage?: boolean
    genre?: boolean
    appStoreUrl?: boolean
    googlePlayUrl?: boolean
    webUrl?: boolean
    steamUrl?: boolean
    featured?: boolean
    published?: boolean
    releaseDate?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Game$imagesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    coverImage?: boolean
    genre?: boolean
    appStoreUrl?: boolean
    googlePlayUrl?: boolean
    webUrl?: boolean
    steamUrl?: boolean
    featured?: boolean
    published?: boolean
    releaseDate?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    coverImage?: boolean
    genre?: boolean
    appStoreUrl?: boolean
    googlePlayUrl?: boolean
    webUrl?: boolean
    steamUrl?: boolean
    featured?: boolean
    published?: boolean
    releaseDate?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    coverImage?: boolean
    genre?: boolean
    appStoreUrl?: boolean
    googlePlayUrl?: boolean
    webUrl?: boolean
    steamUrl?: boolean
    featured?: boolean
    published?: boolean
    releaseDate?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "shortDescription" | "fullDescription" | "coverImage" | "genre" | "appStoreUrl" | "googlePlayUrl" | "webUrl" | "steamUrl" | "featured" | "published" | "releaseDate" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Game$imagesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      images: Prisma.$GameImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      shortDescription: string
      fullDescription: string
      coverImage: string
      genre: string
      appStoreUrl: string
      googlePlayUrl: string
      webUrl: string
      steamUrl: string
      featured: boolean
      published: boolean
      releaseDate: string
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Game$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Game$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly title: FieldRef<"Game", 'String'>
    readonly slug: FieldRef<"Game", 'String'>
    readonly shortDescription: FieldRef<"Game", 'String'>
    readonly fullDescription: FieldRef<"Game", 'String'>
    readonly coverImage: FieldRef<"Game", 'String'>
    readonly genre: FieldRef<"Game", 'String'>
    readonly appStoreUrl: FieldRef<"Game", 'String'>
    readonly googlePlayUrl: FieldRef<"Game", 'String'>
    readonly webUrl: FieldRef<"Game", 'String'>
    readonly steamUrl: FieldRef<"Game", 'String'>
    readonly featured: FieldRef<"Game", 'Boolean'>
    readonly published: FieldRef<"Game", 'Boolean'>
    readonly releaseDate: FieldRef<"Game", 'String'>
    readonly sortOrder: FieldRef<"Game", 'Int'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.images
   */
  export type Game$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    where?: GameImageWhereInput
    orderBy?: GameImageOrderByWithRelationInput | GameImageOrderByWithRelationInput[]
    cursor?: GameImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameImageScalarFieldEnum | GameImageScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GameImage
   */

  export type AggregateGameImage = {
    _count: GameImageCountAggregateOutputType | null
    _avg: GameImageAvgAggregateOutputType | null
    _sum: GameImageSumAggregateOutputType | null
    _min: GameImageMinAggregateOutputType | null
    _max: GameImageMaxAggregateOutputType | null
  }

  export type GameImageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type GameImageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type GameImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    sortOrder: number | null
    gameId: string | null
    createdAt: Date | null
  }

  export type GameImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    sortOrder: number | null
    gameId: string | null
    createdAt: Date | null
  }

  export type GameImageCountAggregateOutputType = {
    id: number
    url: number
    alt: number
    sortOrder: number
    gameId: number
    createdAt: number
    _all: number
  }


  export type GameImageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type GameImageSumAggregateInputType = {
    sortOrder?: true
  }

  export type GameImageMinAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    sortOrder?: true
    gameId?: true
    createdAt?: true
  }

  export type GameImageMaxAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    sortOrder?: true
    gameId?: true
    createdAt?: true
  }

  export type GameImageCountAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    sortOrder?: true
    gameId?: true
    createdAt?: true
    _all?: true
  }

  export type GameImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameImage to aggregate.
     */
    where?: GameImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameImages to fetch.
     */
    orderBy?: GameImageOrderByWithRelationInput | GameImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameImages
    **/
    _count?: true | GameImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameImageMaxAggregateInputType
  }

  export type GetGameImageAggregateType<T extends GameImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGameImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameImage[P]>
      : GetScalarType<T[P], AggregateGameImage[P]>
  }




  export type GameImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameImageWhereInput
    orderBy?: GameImageOrderByWithAggregationInput | GameImageOrderByWithAggregationInput[]
    by: GameImageScalarFieldEnum[] | GameImageScalarFieldEnum
    having?: GameImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameImageCountAggregateInputType | true
    _avg?: GameImageAvgAggregateInputType
    _sum?: GameImageSumAggregateInputType
    _min?: GameImageMinAggregateInputType
    _max?: GameImageMaxAggregateInputType
  }

  export type GameImageGroupByOutputType = {
    id: string
    url: string
    alt: string
    sortOrder: number
    gameId: string
    createdAt: Date
    _count: GameImageCountAggregateOutputType | null
    _avg: GameImageAvgAggregateOutputType | null
    _sum: GameImageSumAggregateOutputType | null
    _min: GameImageMinAggregateOutputType | null
    _max: GameImageMaxAggregateOutputType | null
  }

  type GetGameImageGroupByPayload<T extends GameImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameImageGroupByOutputType[P]>
            : GetScalarType<T[P], GameImageGroupByOutputType[P]>
        }
      >
    >


  export type GameImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    sortOrder?: boolean
    gameId?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameImage"]>

  export type GameImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    sortOrder?: boolean
    gameId?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameImage"]>

  export type GameImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    sortOrder?: boolean
    gameId?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameImage"]>

  export type GameImageSelectScalar = {
    id?: boolean
    url?: boolean
    alt?: boolean
    sortOrder?: boolean
    gameId?: boolean
    createdAt?: boolean
  }

  export type GameImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "alt" | "sortOrder" | "gameId" | "createdAt", ExtArgs["result"]["gameImage"]>
  export type GameImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $GameImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameImage"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      alt: string
      sortOrder: number
      gameId: string
      createdAt: Date
    }, ExtArgs["result"]["gameImage"]>
    composites: {}
  }

  type GameImageGetPayload<S extends boolean | null | undefined | GameImageDefaultArgs> = $Result.GetResult<Prisma.$GameImagePayload, S>

  type GameImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameImageCountAggregateInputType | true
    }

  export interface GameImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameImage'], meta: { name: 'GameImage' } }
    /**
     * Find zero or one GameImage that matches the filter.
     * @param {GameImageFindUniqueArgs} args - Arguments to find a GameImage
     * @example
     * // Get one GameImage
     * const gameImage = await prisma.gameImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameImageFindUniqueArgs>(args: SelectSubset<T, GameImageFindUniqueArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameImageFindUniqueOrThrowArgs} args - Arguments to find a GameImage
     * @example
     * // Get one GameImage
     * const gameImage = await prisma.gameImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GameImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageFindFirstArgs} args - Arguments to find a GameImage
     * @example
     * // Get one GameImage
     * const gameImage = await prisma.gameImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameImageFindFirstArgs>(args?: SelectSubset<T, GameImageFindFirstArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageFindFirstOrThrowArgs} args - Arguments to find a GameImage
     * @example
     * // Get one GameImage
     * const gameImage = await prisma.gameImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GameImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameImages
     * const gameImages = await prisma.gameImage.findMany()
     * 
     * // Get first 10 GameImages
     * const gameImages = await prisma.gameImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameImageWithIdOnly = await prisma.gameImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameImageFindManyArgs>(args?: SelectSubset<T, GameImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameImage.
     * @param {GameImageCreateArgs} args - Arguments to create a GameImage.
     * @example
     * // Create one GameImage
     * const GameImage = await prisma.gameImage.create({
     *   data: {
     *     // ... data to create a GameImage
     *   }
     * })
     * 
     */
    create<T extends GameImageCreateArgs>(args: SelectSubset<T, GameImageCreateArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameImages.
     * @param {GameImageCreateManyArgs} args - Arguments to create many GameImages.
     * @example
     * // Create many GameImages
     * const gameImage = await prisma.gameImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameImageCreateManyArgs>(args?: SelectSubset<T, GameImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameImages and returns the data saved in the database.
     * @param {GameImageCreateManyAndReturnArgs} args - Arguments to create many GameImages.
     * @example
     * // Create many GameImages
     * const gameImage = await prisma.gameImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameImages and only return the `id`
     * const gameImageWithIdOnly = await prisma.gameImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameImageCreateManyAndReturnArgs>(args?: SelectSubset<T, GameImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameImage.
     * @param {GameImageDeleteArgs} args - Arguments to delete one GameImage.
     * @example
     * // Delete one GameImage
     * const GameImage = await prisma.gameImage.delete({
     *   where: {
     *     // ... filter to delete one GameImage
     *   }
     * })
     * 
     */
    delete<T extends GameImageDeleteArgs>(args: SelectSubset<T, GameImageDeleteArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameImage.
     * @param {GameImageUpdateArgs} args - Arguments to update one GameImage.
     * @example
     * // Update one GameImage
     * const gameImage = await prisma.gameImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameImageUpdateArgs>(args: SelectSubset<T, GameImageUpdateArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameImages.
     * @param {GameImageDeleteManyArgs} args - Arguments to filter GameImages to delete.
     * @example
     * // Delete a few GameImages
     * const { count } = await prisma.gameImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameImageDeleteManyArgs>(args?: SelectSubset<T, GameImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameImages
     * const gameImage = await prisma.gameImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameImageUpdateManyArgs>(args: SelectSubset<T, GameImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameImages and returns the data updated in the database.
     * @param {GameImageUpdateManyAndReturnArgs} args - Arguments to update many GameImages.
     * @example
     * // Update many GameImages
     * const gameImage = await prisma.gameImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameImages and only return the `id`
     * const gameImageWithIdOnly = await prisma.gameImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameImageUpdateManyAndReturnArgs>(args: SelectSubset<T, GameImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameImage.
     * @param {GameImageUpsertArgs} args - Arguments to update or create a GameImage.
     * @example
     * // Update or create a GameImage
     * const gameImage = await prisma.gameImage.upsert({
     *   create: {
     *     // ... data to create a GameImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameImage we want to update
     *   }
     * })
     */
    upsert<T extends GameImageUpsertArgs>(args: SelectSubset<T, GameImageUpsertArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageCountArgs} args - Arguments to filter GameImages to count.
     * @example
     * // Count the number of GameImages
     * const count = await prisma.gameImage.count({
     *   where: {
     *     // ... the filter for the GameImages we want to count
     *   }
     * })
    **/
    count<T extends GameImageCountArgs>(
      args?: Subset<T, GameImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameImageAggregateArgs>(args: Subset<T, GameImageAggregateArgs>): Prisma.PrismaPromise<GetGameImageAggregateType<T>>

    /**
     * Group by GameImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageGroupByArgs} args - Group by arguments.
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
      T extends GameImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameImageGroupByArgs['orderBy'] }
        : { orderBy?: GameImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameImage model
   */
  readonly fields: GameImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GameImage model
   */
  interface GameImageFieldRefs {
    readonly id: FieldRef<"GameImage", 'String'>
    readonly url: FieldRef<"GameImage", 'String'>
    readonly alt: FieldRef<"GameImage", 'String'>
    readonly sortOrder: FieldRef<"GameImage", 'Int'>
    readonly gameId: FieldRef<"GameImage", 'String'>
    readonly createdAt: FieldRef<"GameImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameImage findUnique
   */
  export type GameImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter, which GameImage to fetch.
     */
    where: GameImageWhereUniqueInput
  }

  /**
   * GameImage findUniqueOrThrow
   */
  export type GameImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter, which GameImage to fetch.
     */
    where: GameImageWhereUniqueInput
  }

  /**
   * GameImage findFirst
   */
  export type GameImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter, which GameImage to fetch.
     */
    where?: GameImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameImages to fetch.
     */
    orderBy?: GameImageOrderByWithRelationInput | GameImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameImages.
     */
    cursor?: GameImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameImages.
     */
    distinct?: GameImageScalarFieldEnum | GameImageScalarFieldEnum[]
  }

  /**
   * GameImage findFirstOrThrow
   */
  export type GameImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter, which GameImage to fetch.
     */
    where?: GameImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameImages to fetch.
     */
    orderBy?: GameImageOrderByWithRelationInput | GameImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameImages.
     */
    cursor?: GameImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameImages.
     */
    distinct?: GameImageScalarFieldEnum | GameImageScalarFieldEnum[]
  }

  /**
   * GameImage findMany
   */
  export type GameImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter, which GameImages to fetch.
     */
    where?: GameImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameImages to fetch.
     */
    orderBy?: GameImageOrderByWithRelationInput | GameImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameImages.
     */
    cursor?: GameImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameImages.
     */
    distinct?: GameImageScalarFieldEnum | GameImageScalarFieldEnum[]
  }

  /**
   * GameImage create
   */
  export type GameImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * The data needed to create a GameImage.
     */
    data: XOR<GameImageCreateInput, GameImageUncheckedCreateInput>
  }

  /**
   * GameImage createMany
   */
  export type GameImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameImages.
     */
    data: GameImageCreateManyInput | GameImageCreateManyInput[]
  }

  /**
   * GameImage createManyAndReturn
   */
  export type GameImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * The data used to create many GameImages.
     */
    data: GameImageCreateManyInput | GameImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameImage update
   */
  export type GameImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * The data needed to update a GameImage.
     */
    data: XOR<GameImageUpdateInput, GameImageUncheckedUpdateInput>
    /**
     * Choose, which GameImage to update.
     */
    where: GameImageWhereUniqueInput
  }

  /**
   * GameImage updateMany
   */
  export type GameImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameImages.
     */
    data: XOR<GameImageUpdateManyMutationInput, GameImageUncheckedUpdateManyInput>
    /**
     * Filter which GameImages to update
     */
    where?: GameImageWhereInput
    /**
     * Limit how many GameImages to update.
     */
    limit?: number
  }

  /**
   * GameImage updateManyAndReturn
   */
  export type GameImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * The data used to update GameImages.
     */
    data: XOR<GameImageUpdateManyMutationInput, GameImageUncheckedUpdateManyInput>
    /**
     * Filter which GameImages to update
     */
    where?: GameImageWhereInput
    /**
     * Limit how many GameImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameImage upsert
   */
  export type GameImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * The filter to search for the GameImage to update in case it exists.
     */
    where: GameImageWhereUniqueInput
    /**
     * In case the GameImage found by the `where` argument doesn't exist, create a new GameImage with this data.
     */
    create: XOR<GameImageCreateInput, GameImageUncheckedCreateInput>
    /**
     * In case the GameImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameImageUpdateInput, GameImageUncheckedUpdateInput>
  }

  /**
   * GameImage delete
   */
  export type GameImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter which GameImage to delete.
     */
    where: GameImageWhereUniqueInput
  }

  /**
   * GameImage deleteMany
   */
  export type GameImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameImages to delete
     */
    where?: GameImageWhereInput
    /**
     * Limit how many GameImages to delete.
     */
    limit?: number
  }

  /**
   * GameImage without action
   */
  export type GameImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameImage
     */
    omit?: GameImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
  }


  /**
   * Model ContactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: string | null
    email: string | null
    linkedin: string | null
    linkedinUrl: string | null
    website: string | null
    websiteUrl: string | null
    location: string | null
    formEnabled: boolean | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: string | null
    email: string | null
    linkedin: string | null
    linkedinUrl: string | null
    website: string | null
    websiteUrl: string | null
    location: string | null
    formEnabled: boolean | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    email: number
    linkedin: number
    linkedinUrl: number
    website: number
    websiteUrl: number
    location: number
    formEnabled: number
    visible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactInfoMinAggregateInputType = {
    id?: true
    email?: true
    linkedin?: true
    linkedinUrl?: true
    website?: true
    websiteUrl?: true
    location?: true
    formEnabled?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    email?: true
    linkedin?: true
    linkedinUrl?: true
    website?: true
    websiteUrl?: true
    location?: true
    formEnabled?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    email?: true
    linkedin?: true
    linkedinUrl?: true
    website?: true
    websiteUrl?: true
    location?: true
    formEnabled?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfo to aggregate.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type ContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoWhereInput
    orderBy?: ContactInfoOrderByWithAggregationInput | ContactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: ContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: string
    email: string
    linkedin: string
    linkedinUrl: string
    website: string
    websiteUrl: string
    location: string
    formEnabled: boolean
    visible: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends ContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    linkedin?: boolean
    linkedinUrl?: boolean
    website?: boolean
    websiteUrl?: boolean
    location?: boolean
    formEnabled?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    linkedin?: boolean
    linkedinUrl?: boolean
    website?: boolean
    websiteUrl?: boolean
    location?: boolean
    formEnabled?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    linkedin?: boolean
    linkedinUrl?: boolean
    website?: boolean
    websiteUrl?: boolean
    location?: boolean
    formEnabled?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectScalar = {
    id?: boolean
    email?: boolean
    linkedin?: boolean
    linkedinUrl?: boolean
    website?: boolean
    websiteUrl?: boolean
    location?: boolean
    formEnabled?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "linkedin" | "linkedinUrl" | "website" | "websiteUrl" | "location" | "formEnabled" | "visible" | "createdAt" | "updatedAt", ExtArgs["result"]["contactInfo"]>

  export type $ContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      linkedin: string
      linkedinUrl: string
      website: string
      websiteUrl: string
      location: string
      formEnabled: boolean
      visible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type ContactInfoGetPayload<S extends boolean | null | undefined | ContactInfoDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoPayload, S>

  type ContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface ContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfo'], meta: { name: 'ContactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {ContactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoFindUniqueArgs>(args: SelectSubset<T, ContactInfoFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoFindFirstArgs>(args?: SelectSubset<T, ContactInfoFindFirstArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoFindManyArgs>(args?: SelectSubset<T, ContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInfo.
     * @param {ContactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends ContactInfoCreateArgs>(args: SelectSubset<T, ContactInfoCreateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInfos.
     * @param {ContactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoCreateManyArgs>(args?: SelectSubset<T, ContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInfos and returns the data saved in the database.
     * @param {ContactInfoCreateManyAndReturnArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactInfo.
     * @param {ContactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoDeleteArgs>(args: SelectSubset<T, ContactInfoDeleteArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInfo.
     * @param {ContactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoUpdateArgs>(args: SelectSubset<T, ContactInfoUpdateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInfos.
     * @param {ContactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoDeleteManyArgs>(args?: SelectSubset<T, ContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoUpdateManyArgs>(args: SelectSubset<T, ContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos and returns the data updated in the database.
     * @param {ContactInfoUpdateManyAndReturnArgs} args - Arguments to update many ContactInfos.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactInfo.
     * @param {ContactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoUpsertArgs>(args: SelectSubset<T, ContactInfoUpsertArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoCountArgs>(
      args?: Subset<T, ContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoGroupByArgs} args - Group by arguments.
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
      T extends ContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfo model
   */
  readonly fields: ContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactInfo model
   */
  interface ContactInfoFieldRefs {
    readonly id: FieldRef<"ContactInfo", 'String'>
    readonly email: FieldRef<"ContactInfo", 'String'>
    readonly linkedin: FieldRef<"ContactInfo", 'String'>
    readonly linkedinUrl: FieldRef<"ContactInfo", 'String'>
    readonly website: FieldRef<"ContactInfo", 'String'>
    readonly websiteUrl: FieldRef<"ContactInfo", 'String'>
    readonly location: FieldRef<"ContactInfo", 'String'>
    readonly formEnabled: FieldRef<"ContactInfo", 'Boolean'>
    readonly visible: FieldRef<"ContactInfo", 'Boolean'>
    readonly createdAt: FieldRef<"ContactInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfo findUnique
   */
  export type ContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findUniqueOrThrow
   */
  export type ContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findFirst
   */
  export type ContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findFirstOrThrow
   */
  export type ContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findMany
   */
  export type ContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfos to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo create
   */
  export type ContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactInfo.
     */
    data: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
  }

  /**
   * ContactInfo createMany
   */
  export type ContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
  }

  /**
   * ContactInfo createManyAndReturn
   */
  export type ContactInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
  }

  /**
   * ContactInfo update
   */
  export type ContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactInfo.
     */
    data: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
    /**
     * Choose, which ContactInfo to update.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo updateMany
   */
  export type ContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo updateManyAndReturn
   */
  export type ContactInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo upsert
   */
  export type ContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactInfo to update in case it exists.
     */
    where: ContactInfoWhereUniqueInput
    /**
     * In case the ContactInfo found by the `where` argument doesn't exist, create a new ContactInfo with this data.
     */
    create: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
    /**
     * In case the ContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
  }

  /**
   * ContactInfo delete
   */
  export type ContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter which ContactInfo to delete.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo deleteMany
   */
  export type ContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfos to delete
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to delete.
     */
    limit?: number
  }

  /**
   * ContactInfo without action
   */
  export type ContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
  }


  /**
   * Model ContactSubmission
   */

  export type AggregateContactSubmission = {
    _count: ContactSubmissionCountAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  export type ContactSubmissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    projectType: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type ContactSubmissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    projectType: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type ContactSubmissionCountAggregateOutputType = {
    id: number
    name: number
    email: number
    projectType: number
    message: number
    read: number
    createdAt: number
    _all: number
  }


  export type ContactSubmissionMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    projectType?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type ContactSubmissionMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    projectType?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type ContactSubmissionCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    projectType?: true
    message?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type ContactSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmission to aggregate.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactSubmissions
    **/
    _count?: true | ContactSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type GetContactSubmissionAggregateType<T extends ContactSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateContactSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactSubmission[P]>
      : GetScalarType<T[P], AggregateContactSubmission[P]>
  }




  export type ContactSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactSubmissionWhereInput
    orderBy?: ContactSubmissionOrderByWithAggregationInput | ContactSubmissionOrderByWithAggregationInput[]
    by: ContactSubmissionScalarFieldEnum[] | ContactSubmissionScalarFieldEnum
    having?: ContactSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactSubmissionCountAggregateInputType | true
    _min?: ContactSubmissionMinAggregateInputType
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type ContactSubmissionGroupByOutputType = {
    id: string
    name: string
    email: string
    projectType: string
    message: string
    read: boolean
    createdAt: Date
    _count: ContactSubmissionCountAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  type GetContactSubmissionGroupByPayload<T extends ContactSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ContactSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    projectType?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    projectType?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    projectType?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    projectType?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type ContactSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "projectType" | "message" | "read" | "createdAt", ExtArgs["result"]["contactSubmission"]>

  export type $ContactSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      projectType: string
      message: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["contactSubmission"]>
    composites: {}
  }

  type ContactSubmissionGetPayload<S extends boolean | null | undefined | ContactSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ContactSubmissionPayload, S>

  type ContactSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactSubmissionCountAggregateInputType | true
    }

  export interface ContactSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactSubmission'], meta: { name: 'ContactSubmission' } }
    /**
     * Find zero or one ContactSubmission that matches the filter.
     * @param {ContactSubmissionFindUniqueArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactSubmissionFindUniqueArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactSubmissionFindFirstArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany()
     * 
     * // Get first 10 ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactSubmissionFindManyArgs>(args?: SelectSubset<T, ContactSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactSubmission.
     * @param {ContactSubmissionCreateArgs} args - Arguments to create a ContactSubmission.
     * @example
     * // Create one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.create({
     *   data: {
     *     // ... data to create a ContactSubmission
     *   }
     * })
     * 
     */
    create<T extends ContactSubmissionCreateArgs>(args: SelectSubset<T, ContactSubmissionCreateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactSubmissions.
     * @param {ContactSubmissionCreateManyArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactSubmissionCreateManyArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactSubmissions and returns the data saved in the database.
     * @param {ContactSubmissionCreateManyAndReturnArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactSubmission.
     * @param {ContactSubmissionDeleteArgs} args - Arguments to delete one ContactSubmission.
     * @example
     * // Delete one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.delete({
     *   where: {
     *     // ... filter to delete one ContactSubmission
     *   }
     * })
     * 
     */
    delete<T extends ContactSubmissionDeleteArgs>(args: SelectSubset<T, ContactSubmissionDeleteArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactSubmission.
     * @param {ContactSubmissionUpdateArgs} args - Arguments to update one ContactSubmission.
     * @example
     * // Update one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactSubmissionUpdateArgs>(args: SelectSubset<T, ContactSubmissionUpdateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactSubmissions.
     * @param {ContactSubmissionDeleteManyArgs} args - Arguments to filter ContactSubmissions to delete.
     * @example
     * // Delete a few ContactSubmissions
     * const { count } = await prisma.contactSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactSubmissionDeleteManyArgs>(args?: SelectSubset<T, ContactSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactSubmissionUpdateManyArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions and returns the data updated in the database.
     * @param {ContactSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ContactSubmissions.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactSubmission.
     * @param {ContactSubmissionUpsertArgs} args - Arguments to update or create a ContactSubmission.
     * @example
     * // Update or create a ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.upsert({
     *   create: {
     *     // ... data to create a ContactSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ContactSubmissionUpsertArgs>(args: SelectSubset<T, ContactSubmissionUpsertArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionCountArgs} args - Arguments to filter ContactSubmissions to count.
     * @example
     * // Count the number of ContactSubmissions
     * const count = await prisma.contactSubmission.count({
     *   where: {
     *     // ... the filter for the ContactSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ContactSubmissionCountArgs>(
      args?: Subset<T, ContactSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactSubmissionAggregateArgs>(args: Subset<T, ContactSubmissionAggregateArgs>): Prisma.PrismaPromise<GetContactSubmissionAggregateType<T>>

    /**
     * Group by ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionGroupByArgs} args - Group by arguments.
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
      T extends ContactSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ContactSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactSubmission model
   */
  readonly fields: ContactSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactSubmission model
   */
  interface ContactSubmissionFieldRefs {
    readonly id: FieldRef<"ContactSubmission", 'String'>
    readonly name: FieldRef<"ContactSubmission", 'String'>
    readonly email: FieldRef<"ContactSubmission", 'String'>
    readonly projectType: FieldRef<"ContactSubmission", 'String'>
    readonly message: FieldRef<"ContactSubmission", 'String'>
    readonly read: FieldRef<"ContactSubmission", 'Boolean'>
    readonly createdAt: FieldRef<"ContactSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactSubmission findUnique
   */
  export type ContactSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findUniqueOrThrow
   */
  export type ContactSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findFirst
   */
  export type ContactSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findFirstOrThrow
   */
  export type ContactSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findMany
   */
  export type ContactSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmissions to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission create
   */
  export type ContactSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactSubmission.
     */
    data: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
  }

  /**
   * ContactSubmission createMany
   */
  export type ContactSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
  }

  /**
   * ContactSubmission createManyAndReturn
   */
  export type ContactSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
  }

  /**
   * ContactSubmission update
   */
  export type ContactSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactSubmission.
     */
    data: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ContactSubmission to update.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission updateMany
   */
  export type ContactSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission updateManyAndReturn
   */
  export type ContactSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission upsert
   */
  export type ContactSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactSubmission to update in case it exists.
     */
    where: ContactSubmissionWhereUniqueInput
    /**
     * In case the ContactSubmission found by the `where` argument doesn't exist, create a new ContactSubmission with this data.
     */
    create: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
    /**
     * In case the ContactSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
  }

  /**
   * ContactSubmission delete
   */
  export type ContactSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter which ContactSubmission to delete.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission deleteMany
   */
  export type ContactSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmissions to delete
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ContactSubmission without action
   */
  export type ContactSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model SocialLink
   */

  export type AggregateSocialLink = {
    _count: SocialLinkCountAggregateOutputType | null
    _avg: SocialLinkAvgAggregateOutputType | null
    _sum: SocialLinkSumAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  export type SocialLinkAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type SocialLinkSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type SocialLinkMinAggregateOutputType = {
    id: string | null
    platform: string | null
    url: string | null
    icon: string | null
    sortOrder: number | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialLinkMaxAggregateOutputType = {
    id: string | null
    platform: string | null
    url: string | null
    icon: string | null
    sortOrder: number | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialLinkCountAggregateOutputType = {
    id: number
    platform: number
    url: number
    icon: number
    sortOrder: number
    visible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialLinkAvgAggregateInputType = {
    sortOrder?: true
  }

  export type SocialLinkSumAggregateInputType = {
    sortOrder?: true
  }

  export type SocialLinkMinAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    icon?: true
    sortOrder?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialLinkMaxAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    icon?: true
    sortOrder?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialLinkCountAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    icon?: true
    sortOrder?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLink to aggregate.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinks
    **/
    _count?: true | SocialLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinkMaxAggregateInputType
  }

  export type GetSocialLinkAggregateType<T extends SocialLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLink[P]>
      : GetScalarType<T[P], AggregateSocialLink[P]>
  }




  export type SocialLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithAggregationInput | SocialLinkOrderByWithAggregationInput[]
    by: SocialLinkScalarFieldEnum[] | SocialLinkScalarFieldEnum
    having?: SocialLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinkCountAggregateInputType | true
    _avg?: SocialLinkAvgAggregateInputType
    _sum?: SocialLinkSumAggregateInputType
    _min?: SocialLinkMinAggregateInputType
    _max?: SocialLinkMaxAggregateInputType
  }

  export type SocialLinkGroupByOutputType = {
    id: string
    platform: string
    url: string
    icon: string
    sortOrder: number
    visible: boolean
    createdAt: Date
    updatedAt: Date
    _count: SocialLinkCountAggregateOutputType | null
    _avg: SocialLinkAvgAggregateOutputType | null
    _sum: SocialLinkSumAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  type GetSocialLinkGroupByPayload<T extends SocialLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    icon?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    icon?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    icon?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectScalar = {
    id?: boolean
    platform?: boolean
    url?: boolean
    icon?: boolean
    sortOrder?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "url" | "icon" | "sortOrder" | "visible" | "createdAt" | "updatedAt", ExtArgs["result"]["socialLink"]>

  export type $SocialLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platform: string
      url: string
      icon: string
      sortOrder: number
      visible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["socialLink"]>
    composites: {}
  }

  type SocialLinkGetPayload<S extends boolean | null | undefined | SocialLinkDefaultArgs> = $Result.GetResult<Prisma.$SocialLinkPayload, S>

  type SocialLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialLinkCountAggregateInputType | true
    }

  export interface SocialLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLink'], meta: { name: 'SocialLink' } }
    /**
     * Find zero or one SocialLink that matches the filter.
     * @param {SocialLinkFindUniqueArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinkFindUniqueArgs>(args: SelectSubset<T, SocialLinkFindUniqueArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLinkFindUniqueOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinkFindFirstArgs>(args?: SelectSubset<T, SocialLinkFindFirstArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLink.findMany()
     * 
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinkFindManyArgs>(args?: SelectSubset<T, SocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLink.
     * @param {SocialLinkCreateArgs} args - Arguments to create a SocialLink.
     * @example
     * // Create one SocialLink
     * const SocialLink = await prisma.socialLink.create({
     *   data: {
     *     // ... data to create a SocialLink
     *   }
     * })
     * 
     */
    create<T extends SocialLinkCreateArgs>(args: SelectSubset<T, SocialLinkCreateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLinks.
     * @param {SocialLinkCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinkCreateManyArgs>(args?: SelectSubset<T, SocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLinks and returns the data saved in the database.
     * @param {SocialLinkCreateManyAndReturnArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialLink.
     * @param {SocialLinkDeleteArgs} args - Arguments to delete one SocialLink.
     * @example
     * // Delete one SocialLink
     * const SocialLink = await prisma.socialLink.delete({
     *   where: {
     *     // ... filter to delete one SocialLink
     *   }
     * })
     * 
     */
    delete<T extends SocialLinkDeleteArgs>(args: SelectSubset<T, SocialLinkDeleteArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLink.
     * @param {SocialLinkUpdateArgs} args - Arguments to update one SocialLink.
     * @example
     * // Update one SocialLink
     * const socialLink = await prisma.socialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinkUpdateArgs>(args: SelectSubset<T, SocialLinkUpdateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLinks.
     * @param {SocialLinkDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinkDeleteManyArgs>(args?: SelectSubset<T, SocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinkUpdateManyArgs>(args: SelectSubset<T, SocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks and returns the data updated in the database.
     * @param {SocialLinkUpdateManyAndReturnArgs} args - Arguments to update many SocialLinks.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialLink.
     * @param {SocialLinkUpsertArgs} args - Arguments to update or create a SocialLink.
     * @example
     * // Update or create a SocialLink
     * const socialLink = await prisma.socialLink.upsert({
     *   create: {
     *     // ... data to create a SocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLink we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinkUpsertArgs>(args: SelectSubset<T, SocialLinkUpsertArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLink.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends SocialLinkCountArgs>(
      args?: Subset<T, SocialLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialLinkAggregateArgs>(args: Subset<T, SocialLinkAggregateArgs>): Prisma.PrismaPromise<GetSocialLinkAggregateType<T>>

    /**
     * Group by SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkGroupByArgs} args - Group by arguments.
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
      T extends SocialLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinkGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLink model
   */
  readonly fields: SocialLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SocialLink model
   */
  interface SocialLinkFieldRefs {
    readonly id: FieldRef<"SocialLink", 'String'>
    readonly platform: FieldRef<"SocialLink", 'String'>
    readonly url: FieldRef<"SocialLink", 'String'>
    readonly icon: FieldRef<"SocialLink", 'String'>
    readonly sortOrder: FieldRef<"SocialLink", 'Int'>
    readonly visible: FieldRef<"SocialLink", 'Boolean'>
    readonly createdAt: FieldRef<"SocialLink", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialLink findUnique
   */
  export type SocialLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findUniqueOrThrow
   */
  export type SocialLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findFirst
   */
  export type SocialLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findFirstOrThrow
   */
  export type SocialLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findMany
   */
  export type SocialLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink create
   */
  export type SocialLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data needed to create a SocialLink.
     */
    data: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
  }

  /**
   * SocialLink createMany
   */
  export type SocialLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
  }

  /**
   * SocialLink createManyAndReturn
   */
  export type SocialLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
  }

  /**
   * SocialLink update
   */
  export type SocialLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data needed to update a SocialLink.
     */
    data: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
    /**
     * Choose, which SocialLink to update.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink updateMany
   */
  export type SocialLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLink updateManyAndReturn
   */
  export type SocialLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLink upsert
   */
  export type SocialLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The filter to search for the SocialLink to update in case it exists.
     */
    where: SocialLinkWhereUniqueInput
    /**
     * In case the SocialLink found by the `where` argument doesn't exist, create a new SocialLink with this data.
     */
    create: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
    /**
     * In case the SocialLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
  }

  /**
   * SocialLink delete
   */
  export type SocialLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter which SocialLink to delete.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink deleteMany
   */
  export type SocialLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to delete
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to delete.
     */
    limit?: number
  }

  /**
   * SocialLink without action
   */
  export type SocialLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
  }


  /**
   * Model FooterSettings
   */

  export type AggregateFooterSettings = {
    _count: FooterSettingsCountAggregateOutputType | null
    _min: FooterSettingsMinAggregateOutputType | null
    _max: FooterSettingsMaxAggregateOutputType | null
  }

  export type FooterSettingsMinAggregateOutputType = {
    id: string | null
    description: string | null
    copyrightText: string | null
    bottomText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterSettingsMaxAggregateOutputType = {
    id: string | null
    description: string | null
    copyrightText: string | null
    bottomText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterSettingsCountAggregateOutputType = {
    id: number
    description: number
    copyrightText: number
    bottomText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FooterSettingsMinAggregateInputType = {
    id?: true
    description?: true
    copyrightText?: true
    bottomText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterSettingsMaxAggregateInputType = {
    id?: true
    description?: true
    copyrightText?: true
    bottomText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterSettingsCountAggregateInputType = {
    id?: true
    description?: true
    copyrightText?: true
    bottomText?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FooterSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FooterSettings to aggregate.
     */
    where?: FooterSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterSettings to fetch.
     */
    orderBy?: FooterSettingsOrderByWithRelationInput | FooterSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FooterSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FooterSettings
    **/
    _count?: true | FooterSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FooterSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FooterSettingsMaxAggregateInputType
  }

  export type GetFooterSettingsAggregateType<T extends FooterSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateFooterSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFooterSettings[P]>
      : GetScalarType<T[P], AggregateFooterSettings[P]>
  }




  export type FooterSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FooterSettingsWhereInput
    orderBy?: FooterSettingsOrderByWithAggregationInput | FooterSettingsOrderByWithAggregationInput[]
    by: FooterSettingsScalarFieldEnum[] | FooterSettingsScalarFieldEnum
    having?: FooterSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FooterSettingsCountAggregateInputType | true
    _min?: FooterSettingsMinAggregateInputType
    _max?: FooterSettingsMaxAggregateInputType
  }

  export type FooterSettingsGroupByOutputType = {
    id: string
    description: string
    copyrightText: string
    bottomText: string
    createdAt: Date
    updatedAt: Date
    _count: FooterSettingsCountAggregateOutputType | null
    _min: FooterSettingsMinAggregateOutputType | null
    _max: FooterSettingsMaxAggregateOutputType | null
  }

  type GetFooterSettingsGroupByPayload<T extends FooterSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FooterSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FooterSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FooterSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], FooterSettingsGroupByOutputType[P]>
        }
      >
    >


  export type FooterSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    copyrightText?: boolean
    bottomText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footerSettings"]>

  export type FooterSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    copyrightText?: boolean
    bottomText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footerSettings"]>

  export type FooterSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    copyrightText?: boolean
    bottomText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footerSettings"]>

  export type FooterSettingsSelectScalar = {
    id?: boolean
    description?: boolean
    copyrightText?: boolean
    bottomText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FooterSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "copyrightText" | "bottomText" | "createdAt" | "updatedAt", ExtArgs["result"]["footerSettings"]>

  export type $FooterSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FooterSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      copyrightText: string
      bottomText: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["footerSettings"]>
    composites: {}
  }

  type FooterSettingsGetPayload<S extends boolean | null | undefined | FooterSettingsDefaultArgs> = $Result.GetResult<Prisma.$FooterSettingsPayload, S>

  type FooterSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FooterSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FooterSettingsCountAggregateInputType | true
    }

  export interface FooterSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FooterSettings'], meta: { name: 'FooterSettings' } }
    /**
     * Find zero or one FooterSettings that matches the filter.
     * @param {FooterSettingsFindUniqueArgs} args - Arguments to find a FooterSettings
     * @example
     * // Get one FooterSettings
     * const footerSettings = await prisma.footerSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FooterSettingsFindUniqueArgs>(args: SelectSubset<T, FooterSettingsFindUniqueArgs<ExtArgs>>): Prisma__FooterSettingsClient<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FooterSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FooterSettingsFindUniqueOrThrowArgs} args - Arguments to find a FooterSettings
     * @example
     * // Get one FooterSettings
     * const footerSettings = await prisma.footerSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FooterSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, FooterSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FooterSettingsClient<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FooterSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterSettingsFindFirstArgs} args - Arguments to find a FooterSettings
     * @example
     * // Get one FooterSettings
     * const footerSettings = await prisma.footerSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FooterSettingsFindFirstArgs>(args?: SelectSubset<T, FooterSettingsFindFirstArgs<ExtArgs>>): Prisma__FooterSettingsClient<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FooterSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterSettingsFindFirstOrThrowArgs} args - Arguments to find a FooterSettings
     * @example
     * // Get one FooterSettings
     * const footerSettings = await prisma.footerSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FooterSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, FooterSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FooterSettingsClient<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FooterSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FooterSettings
     * const footerSettings = await prisma.footerSettings.findMany()
     * 
     * // Get first 10 FooterSettings
     * const footerSettings = await prisma.footerSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const footerSettingsWithIdOnly = await prisma.footerSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FooterSettingsFindManyArgs>(args?: SelectSubset<T, FooterSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FooterSettings.
     * @param {FooterSettingsCreateArgs} args - Arguments to create a FooterSettings.
     * @example
     * // Create one FooterSettings
     * const FooterSettings = await prisma.footerSettings.create({
     *   data: {
     *     // ... data to create a FooterSettings
     *   }
     * })
     * 
     */
    create<T extends FooterSettingsCreateArgs>(args: SelectSubset<T, FooterSettingsCreateArgs<ExtArgs>>): Prisma__FooterSettingsClient<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FooterSettings.
     * @param {FooterSettingsCreateManyArgs} args - Arguments to create many FooterSettings.
     * @example
     * // Create many FooterSettings
     * const footerSettings = await prisma.footerSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FooterSettingsCreateManyArgs>(args?: SelectSubset<T, FooterSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FooterSettings and returns the data saved in the database.
     * @param {FooterSettingsCreateManyAndReturnArgs} args - Arguments to create many FooterSettings.
     * @example
     * // Create many FooterSettings
     * const footerSettings = await prisma.footerSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FooterSettings and only return the `id`
     * const footerSettingsWithIdOnly = await prisma.footerSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FooterSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, FooterSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FooterSettings.
     * @param {FooterSettingsDeleteArgs} args - Arguments to delete one FooterSettings.
     * @example
     * // Delete one FooterSettings
     * const FooterSettings = await prisma.footerSettings.delete({
     *   where: {
     *     // ... filter to delete one FooterSettings
     *   }
     * })
     * 
     */
    delete<T extends FooterSettingsDeleteArgs>(args: SelectSubset<T, FooterSettingsDeleteArgs<ExtArgs>>): Prisma__FooterSettingsClient<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FooterSettings.
     * @param {FooterSettingsUpdateArgs} args - Arguments to update one FooterSettings.
     * @example
     * // Update one FooterSettings
     * const footerSettings = await prisma.footerSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FooterSettingsUpdateArgs>(args: SelectSubset<T, FooterSettingsUpdateArgs<ExtArgs>>): Prisma__FooterSettingsClient<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FooterSettings.
     * @param {FooterSettingsDeleteManyArgs} args - Arguments to filter FooterSettings to delete.
     * @example
     * // Delete a few FooterSettings
     * const { count } = await prisma.footerSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FooterSettingsDeleteManyArgs>(args?: SelectSubset<T, FooterSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FooterSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FooterSettings
     * const footerSettings = await prisma.footerSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FooterSettingsUpdateManyArgs>(args: SelectSubset<T, FooterSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FooterSettings and returns the data updated in the database.
     * @param {FooterSettingsUpdateManyAndReturnArgs} args - Arguments to update many FooterSettings.
     * @example
     * // Update many FooterSettings
     * const footerSettings = await prisma.footerSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FooterSettings and only return the `id`
     * const footerSettingsWithIdOnly = await prisma.footerSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends FooterSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, FooterSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FooterSettings.
     * @param {FooterSettingsUpsertArgs} args - Arguments to update or create a FooterSettings.
     * @example
     * // Update or create a FooterSettings
     * const footerSettings = await prisma.footerSettings.upsert({
     *   create: {
     *     // ... data to create a FooterSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FooterSettings we want to update
     *   }
     * })
     */
    upsert<T extends FooterSettingsUpsertArgs>(args: SelectSubset<T, FooterSettingsUpsertArgs<ExtArgs>>): Prisma__FooterSettingsClient<$Result.GetResult<Prisma.$FooterSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FooterSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterSettingsCountArgs} args - Arguments to filter FooterSettings to count.
     * @example
     * // Count the number of FooterSettings
     * const count = await prisma.footerSettings.count({
     *   where: {
     *     // ... the filter for the FooterSettings we want to count
     *   }
     * })
    **/
    count<T extends FooterSettingsCountArgs>(
      args?: Subset<T, FooterSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FooterSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FooterSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FooterSettingsAggregateArgs>(args: Subset<T, FooterSettingsAggregateArgs>): Prisma.PrismaPromise<GetFooterSettingsAggregateType<T>>

    /**
     * Group by FooterSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterSettingsGroupByArgs} args - Group by arguments.
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
      T extends FooterSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FooterSettingsGroupByArgs['orderBy'] }
        : { orderBy?: FooterSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FooterSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFooterSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FooterSettings model
   */
  readonly fields: FooterSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FooterSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FooterSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FooterSettings model
   */
  interface FooterSettingsFieldRefs {
    readonly id: FieldRef<"FooterSettings", 'String'>
    readonly description: FieldRef<"FooterSettings", 'String'>
    readonly copyrightText: FieldRef<"FooterSettings", 'String'>
    readonly bottomText: FieldRef<"FooterSettings", 'String'>
    readonly createdAt: FieldRef<"FooterSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"FooterSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FooterSettings findUnique
   */
  export type FooterSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * Filter, which FooterSettings to fetch.
     */
    where: FooterSettingsWhereUniqueInput
  }

  /**
   * FooterSettings findUniqueOrThrow
   */
  export type FooterSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * Filter, which FooterSettings to fetch.
     */
    where: FooterSettingsWhereUniqueInput
  }

  /**
   * FooterSettings findFirst
   */
  export type FooterSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * Filter, which FooterSettings to fetch.
     */
    where?: FooterSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterSettings to fetch.
     */
    orderBy?: FooterSettingsOrderByWithRelationInput | FooterSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FooterSettings.
     */
    cursor?: FooterSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterSettings.
     */
    distinct?: FooterSettingsScalarFieldEnum | FooterSettingsScalarFieldEnum[]
  }

  /**
   * FooterSettings findFirstOrThrow
   */
  export type FooterSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * Filter, which FooterSettings to fetch.
     */
    where?: FooterSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterSettings to fetch.
     */
    orderBy?: FooterSettingsOrderByWithRelationInput | FooterSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FooterSettings.
     */
    cursor?: FooterSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterSettings.
     */
    distinct?: FooterSettingsScalarFieldEnum | FooterSettingsScalarFieldEnum[]
  }

  /**
   * FooterSettings findMany
   */
  export type FooterSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * Filter, which FooterSettings to fetch.
     */
    where?: FooterSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterSettings to fetch.
     */
    orderBy?: FooterSettingsOrderByWithRelationInput | FooterSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FooterSettings.
     */
    cursor?: FooterSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterSettings.
     */
    distinct?: FooterSettingsScalarFieldEnum | FooterSettingsScalarFieldEnum[]
  }

  /**
   * FooterSettings create
   */
  export type FooterSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a FooterSettings.
     */
    data: XOR<FooterSettingsCreateInput, FooterSettingsUncheckedCreateInput>
  }

  /**
   * FooterSettings createMany
   */
  export type FooterSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FooterSettings.
     */
    data: FooterSettingsCreateManyInput | FooterSettingsCreateManyInput[]
  }

  /**
   * FooterSettings createManyAndReturn
   */
  export type FooterSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many FooterSettings.
     */
    data: FooterSettingsCreateManyInput | FooterSettingsCreateManyInput[]
  }

  /**
   * FooterSettings update
   */
  export type FooterSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a FooterSettings.
     */
    data: XOR<FooterSettingsUpdateInput, FooterSettingsUncheckedUpdateInput>
    /**
     * Choose, which FooterSettings to update.
     */
    where: FooterSettingsWhereUniqueInput
  }

  /**
   * FooterSettings updateMany
   */
  export type FooterSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FooterSettings.
     */
    data: XOR<FooterSettingsUpdateManyMutationInput, FooterSettingsUncheckedUpdateManyInput>
    /**
     * Filter which FooterSettings to update
     */
    where?: FooterSettingsWhereInput
    /**
     * Limit how many FooterSettings to update.
     */
    limit?: number
  }

  /**
   * FooterSettings updateManyAndReturn
   */
  export type FooterSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * The data used to update FooterSettings.
     */
    data: XOR<FooterSettingsUpdateManyMutationInput, FooterSettingsUncheckedUpdateManyInput>
    /**
     * Filter which FooterSettings to update
     */
    where?: FooterSettingsWhereInput
    /**
     * Limit how many FooterSettings to update.
     */
    limit?: number
  }

  /**
   * FooterSettings upsert
   */
  export type FooterSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the FooterSettings to update in case it exists.
     */
    where: FooterSettingsWhereUniqueInput
    /**
     * In case the FooterSettings found by the `where` argument doesn't exist, create a new FooterSettings with this data.
     */
    create: XOR<FooterSettingsCreateInput, FooterSettingsUncheckedCreateInput>
    /**
     * In case the FooterSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FooterSettingsUpdateInput, FooterSettingsUncheckedUpdateInput>
  }

  /**
   * FooterSettings delete
   */
  export type FooterSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
    /**
     * Filter which FooterSettings to delete.
     */
    where: FooterSettingsWhereUniqueInput
  }

  /**
   * FooterSettings deleteMany
   */
  export type FooterSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FooterSettings to delete
     */
    where?: FooterSettingsWhereInput
    /**
     * Limit how many FooterSettings to delete.
     */
    limit?: number
  }

  /**
   * FooterSettings without action
   */
  export type FooterSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterSettings
     */
    select?: FooterSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterSettings
     */
    omit?: FooterSettingsOmit<ExtArgs> | null
  }


  /**
   * Model PrivacyPolicy
   */

  export type AggregatePrivacyPolicy = {
    _count: PrivacyPolicyCountAggregateOutputType | null
    _min: PrivacyPolicyMinAggregateOutputType | null
    _max: PrivacyPolicyMaxAggregateOutputType | null
  }

  export type PrivacyPolicyMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrivacyPolicyMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrivacyPolicyCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrivacyPolicyMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrivacyPolicyMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrivacyPolicyCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrivacyPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivacyPolicy to aggregate.
     */
    where?: PrivacyPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivacyPolicies to fetch.
     */
    orderBy?: PrivacyPolicyOrderByWithRelationInput | PrivacyPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivacyPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivacyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivacyPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivacyPolicies
    **/
    _count?: true | PrivacyPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivacyPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivacyPolicyMaxAggregateInputType
  }

  export type GetPrivacyPolicyAggregateType<T extends PrivacyPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivacyPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivacyPolicy[P]>
      : GetScalarType<T[P], AggregatePrivacyPolicy[P]>
  }




  export type PrivacyPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivacyPolicyWhereInput
    orderBy?: PrivacyPolicyOrderByWithAggregationInput | PrivacyPolicyOrderByWithAggregationInput[]
    by: PrivacyPolicyScalarFieldEnum[] | PrivacyPolicyScalarFieldEnum
    having?: PrivacyPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivacyPolicyCountAggregateInputType | true
    _min?: PrivacyPolicyMinAggregateInputType
    _max?: PrivacyPolicyMaxAggregateInputType
  }

  export type PrivacyPolicyGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: PrivacyPolicyCountAggregateOutputType | null
    _min: PrivacyPolicyMinAggregateOutputType | null
    _max: PrivacyPolicyMaxAggregateOutputType | null
  }

  type GetPrivacyPolicyGroupByPayload<T extends PrivacyPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivacyPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivacyPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivacyPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PrivacyPolicyGroupByOutputType[P]>
        }
      >
    >


  export type PrivacyPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["privacyPolicy"]>

  export type PrivacyPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["privacyPolicy"]>

  export type PrivacyPolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["privacyPolicy"]>

  export type PrivacyPolicySelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrivacyPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["privacyPolicy"]>

  export type $PrivacyPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivacyPolicy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["privacyPolicy"]>
    composites: {}
  }

  type PrivacyPolicyGetPayload<S extends boolean | null | undefined | PrivacyPolicyDefaultArgs> = $Result.GetResult<Prisma.$PrivacyPolicyPayload, S>

  type PrivacyPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivacyPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivacyPolicyCountAggregateInputType | true
    }

  export interface PrivacyPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivacyPolicy'], meta: { name: 'PrivacyPolicy' } }
    /**
     * Find zero or one PrivacyPolicy that matches the filter.
     * @param {PrivacyPolicyFindUniqueArgs} args - Arguments to find a PrivacyPolicy
     * @example
     * // Get one PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivacyPolicyFindUniqueArgs>(args: SelectSubset<T, PrivacyPolicyFindUniqueArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivacyPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivacyPolicyFindUniqueOrThrowArgs} args - Arguments to find a PrivacyPolicy
     * @example
     * // Get one PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivacyPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivacyPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivacyPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyFindFirstArgs} args - Arguments to find a PrivacyPolicy
     * @example
     * // Get one PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivacyPolicyFindFirstArgs>(args?: SelectSubset<T, PrivacyPolicyFindFirstArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivacyPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyFindFirstOrThrowArgs} args - Arguments to find a PrivacyPolicy
     * @example
     * // Get one PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivacyPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivacyPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivacyPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivacyPolicies
     * const privacyPolicies = await prisma.privacyPolicy.findMany()
     * 
     * // Get first 10 PrivacyPolicies
     * const privacyPolicies = await prisma.privacyPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privacyPolicyWithIdOnly = await prisma.privacyPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivacyPolicyFindManyArgs>(args?: SelectSubset<T, PrivacyPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivacyPolicy.
     * @param {PrivacyPolicyCreateArgs} args - Arguments to create a PrivacyPolicy.
     * @example
     * // Create one PrivacyPolicy
     * const PrivacyPolicy = await prisma.privacyPolicy.create({
     *   data: {
     *     // ... data to create a PrivacyPolicy
     *   }
     * })
     * 
     */
    create<T extends PrivacyPolicyCreateArgs>(args: SelectSubset<T, PrivacyPolicyCreateArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivacyPolicies.
     * @param {PrivacyPolicyCreateManyArgs} args - Arguments to create many PrivacyPolicies.
     * @example
     * // Create many PrivacyPolicies
     * const privacyPolicy = await prisma.privacyPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivacyPolicyCreateManyArgs>(args?: SelectSubset<T, PrivacyPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivacyPolicies and returns the data saved in the database.
     * @param {PrivacyPolicyCreateManyAndReturnArgs} args - Arguments to create many PrivacyPolicies.
     * @example
     * // Create many PrivacyPolicies
     * const privacyPolicy = await prisma.privacyPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivacyPolicies and only return the `id`
     * const privacyPolicyWithIdOnly = await prisma.privacyPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivacyPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivacyPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivacyPolicy.
     * @param {PrivacyPolicyDeleteArgs} args - Arguments to delete one PrivacyPolicy.
     * @example
     * // Delete one PrivacyPolicy
     * const PrivacyPolicy = await prisma.privacyPolicy.delete({
     *   where: {
     *     // ... filter to delete one PrivacyPolicy
     *   }
     * })
     * 
     */
    delete<T extends PrivacyPolicyDeleteArgs>(args: SelectSubset<T, PrivacyPolicyDeleteArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivacyPolicy.
     * @param {PrivacyPolicyUpdateArgs} args - Arguments to update one PrivacyPolicy.
     * @example
     * // Update one PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivacyPolicyUpdateArgs>(args: SelectSubset<T, PrivacyPolicyUpdateArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivacyPolicies.
     * @param {PrivacyPolicyDeleteManyArgs} args - Arguments to filter PrivacyPolicies to delete.
     * @example
     * // Delete a few PrivacyPolicies
     * const { count } = await prisma.privacyPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivacyPolicyDeleteManyArgs>(args?: SelectSubset<T, PrivacyPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivacyPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivacyPolicies
     * const privacyPolicy = await prisma.privacyPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivacyPolicyUpdateManyArgs>(args: SelectSubset<T, PrivacyPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivacyPolicies and returns the data updated in the database.
     * @param {PrivacyPolicyUpdateManyAndReturnArgs} args - Arguments to update many PrivacyPolicies.
     * @example
     * // Update many PrivacyPolicies
     * const privacyPolicy = await prisma.privacyPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivacyPolicies and only return the `id`
     * const privacyPolicyWithIdOnly = await prisma.privacyPolicy.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrivacyPolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivacyPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivacyPolicy.
     * @param {PrivacyPolicyUpsertArgs} args - Arguments to update or create a PrivacyPolicy.
     * @example
     * // Update or create a PrivacyPolicy
     * const privacyPolicy = await prisma.privacyPolicy.upsert({
     *   create: {
     *     // ... data to create a PrivacyPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivacyPolicy we want to update
     *   }
     * })
     */
    upsert<T extends PrivacyPolicyUpsertArgs>(args: SelectSubset<T, PrivacyPolicyUpsertArgs<ExtArgs>>): Prisma__PrivacyPolicyClient<$Result.GetResult<Prisma.$PrivacyPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivacyPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyCountArgs} args - Arguments to filter PrivacyPolicies to count.
     * @example
     * // Count the number of PrivacyPolicies
     * const count = await prisma.privacyPolicy.count({
     *   where: {
     *     // ... the filter for the PrivacyPolicies we want to count
     *   }
     * })
    **/
    count<T extends PrivacyPolicyCountArgs>(
      args?: Subset<T, PrivacyPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivacyPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivacyPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrivacyPolicyAggregateArgs>(args: Subset<T, PrivacyPolicyAggregateArgs>): Prisma.PrismaPromise<GetPrivacyPolicyAggregateType<T>>

    /**
     * Group by PrivacyPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyPolicyGroupByArgs} args - Group by arguments.
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
      T extends PrivacyPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivacyPolicyGroupByArgs['orderBy'] }
        : { orderBy?: PrivacyPolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrivacyPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivacyPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivacyPolicy model
   */
  readonly fields: PrivacyPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivacyPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivacyPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PrivacyPolicy model
   */
  interface PrivacyPolicyFieldRefs {
    readonly id: FieldRef<"PrivacyPolicy", 'String'>
    readonly content: FieldRef<"PrivacyPolicy", 'String'>
    readonly createdAt: FieldRef<"PrivacyPolicy", 'DateTime'>
    readonly updatedAt: FieldRef<"PrivacyPolicy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrivacyPolicy findUnique
   */
  export type PrivacyPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter, which PrivacyPolicy to fetch.
     */
    where: PrivacyPolicyWhereUniqueInput
  }

  /**
   * PrivacyPolicy findUniqueOrThrow
   */
  export type PrivacyPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter, which PrivacyPolicy to fetch.
     */
    where: PrivacyPolicyWhereUniqueInput
  }

  /**
   * PrivacyPolicy findFirst
   */
  export type PrivacyPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter, which PrivacyPolicy to fetch.
     */
    where?: PrivacyPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivacyPolicies to fetch.
     */
    orderBy?: PrivacyPolicyOrderByWithRelationInput | PrivacyPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivacyPolicies.
     */
    cursor?: PrivacyPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivacyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivacyPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivacyPolicies.
     */
    distinct?: PrivacyPolicyScalarFieldEnum | PrivacyPolicyScalarFieldEnum[]
  }

  /**
   * PrivacyPolicy findFirstOrThrow
   */
  export type PrivacyPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter, which PrivacyPolicy to fetch.
     */
    where?: PrivacyPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivacyPolicies to fetch.
     */
    orderBy?: PrivacyPolicyOrderByWithRelationInput | PrivacyPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivacyPolicies.
     */
    cursor?: PrivacyPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivacyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivacyPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivacyPolicies.
     */
    distinct?: PrivacyPolicyScalarFieldEnum | PrivacyPolicyScalarFieldEnum[]
  }

  /**
   * PrivacyPolicy findMany
   */
  export type PrivacyPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter, which PrivacyPolicies to fetch.
     */
    where?: PrivacyPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivacyPolicies to fetch.
     */
    orderBy?: PrivacyPolicyOrderByWithRelationInput | PrivacyPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivacyPolicies.
     */
    cursor?: PrivacyPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivacyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivacyPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivacyPolicies.
     */
    distinct?: PrivacyPolicyScalarFieldEnum | PrivacyPolicyScalarFieldEnum[]
  }

  /**
   * PrivacyPolicy create
   */
  export type PrivacyPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * The data needed to create a PrivacyPolicy.
     */
    data: XOR<PrivacyPolicyCreateInput, PrivacyPolicyUncheckedCreateInput>
  }

  /**
   * PrivacyPolicy createMany
   */
  export type PrivacyPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivacyPolicies.
     */
    data: PrivacyPolicyCreateManyInput | PrivacyPolicyCreateManyInput[]
  }

  /**
   * PrivacyPolicy createManyAndReturn
   */
  export type PrivacyPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * The data used to create many PrivacyPolicies.
     */
    data: PrivacyPolicyCreateManyInput | PrivacyPolicyCreateManyInput[]
  }

  /**
   * PrivacyPolicy update
   */
  export type PrivacyPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * The data needed to update a PrivacyPolicy.
     */
    data: XOR<PrivacyPolicyUpdateInput, PrivacyPolicyUncheckedUpdateInput>
    /**
     * Choose, which PrivacyPolicy to update.
     */
    where: PrivacyPolicyWhereUniqueInput
  }

  /**
   * PrivacyPolicy updateMany
   */
  export type PrivacyPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivacyPolicies.
     */
    data: XOR<PrivacyPolicyUpdateManyMutationInput, PrivacyPolicyUncheckedUpdateManyInput>
    /**
     * Filter which PrivacyPolicies to update
     */
    where?: PrivacyPolicyWhereInput
    /**
     * Limit how many PrivacyPolicies to update.
     */
    limit?: number
  }

  /**
   * PrivacyPolicy updateManyAndReturn
   */
  export type PrivacyPolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * The data used to update PrivacyPolicies.
     */
    data: XOR<PrivacyPolicyUpdateManyMutationInput, PrivacyPolicyUncheckedUpdateManyInput>
    /**
     * Filter which PrivacyPolicies to update
     */
    where?: PrivacyPolicyWhereInput
    /**
     * Limit how many PrivacyPolicies to update.
     */
    limit?: number
  }

  /**
   * PrivacyPolicy upsert
   */
  export type PrivacyPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * The filter to search for the PrivacyPolicy to update in case it exists.
     */
    where: PrivacyPolicyWhereUniqueInput
    /**
     * In case the PrivacyPolicy found by the `where` argument doesn't exist, create a new PrivacyPolicy with this data.
     */
    create: XOR<PrivacyPolicyCreateInput, PrivacyPolicyUncheckedCreateInput>
    /**
     * In case the PrivacyPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivacyPolicyUpdateInput, PrivacyPolicyUncheckedUpdateInput>
  }

  /**
   * PrivacyPolicy delete
   */
  export type PrivacyPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
    /**
     * Filter which PrivacyPolicy to delete.
     */
    where: PrivacyPolicyWhereUniqueInput
  }

  /**
   * PrivacyPolicy deleteMany
   */
  export type PrivacyPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivacyPolicies to delete
     */
    where?: PrivacyPolicyWhereInput
    /**
     * Limit how many PrivacyPolicies to delete.
     */
    limit?: number
  }

  /**
   * PrivacyPolicy without action
   */
  export type PrivacyPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyPolicy
     */
    select?: PrivacyPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivacyPolicy
     */
    omit?: PrivacyPolicyOmit<ExtArgs> | null
  }


  /**
   * Model TermsOfService
   */

  export type AggregateTermsOfService = {
    _count: TermsOfServiceCountAggregateOutputType | null
    _min: TermsOfServiceMinAggregateOutputType | null
    _max: TermsOfServiceMaxAggregateOutputType | null
  }

  export type TermsOfServiceMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermsOfServiceMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermsOfServiceCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TermsOfServiceMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermsOfServiceMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermsOfServiceCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TermsOfServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermsOfService to aggregate.
     */
    where?: TermsOfServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfServices to fetch.
     */
    orderBy?: TermsOfServiceOrderByWithRelationInput | TermsOfServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermsOfServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TermsOfServices
    **/
    _count?: true | TermsOfServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermsOfServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermsOfServiceMaxAggregateInputType
  }

  export type GetTermsOfServiceAggregateType<T extends TermsOfServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateTermsOfService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTermsOfService[P]>
      : GetScalarType<T[P], AggregateTermsOfService[P]>
  }




  export type TermsOfServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermsOfServiceWhereInput
    orderBy?: TermsOfServiceOrderByWithAggregationInput | TermsOfServiceOrderByWithAggregationInput[]
    by: TermsOfServiceScalarFieldEnum[] | TermsOfServiceScalarFieldEnum
    having?: TermsOfServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermsOfServiceCountAggregateInputType | true
    _min?: TermsOfServiceMinAggregateInputType
    _max?: TermsOfServiceMaxAggregateInputType
  }

  export type TermsOfServiceGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: TermsOfServiceCountAggregateOutputType | null
    _min: TermsOfServiceMinAggregateOutputType | null
    _max: TermsOfServiceMaxAggregateOutputType | null
  }

  type GetTermsOfServiceGroupByPayload<T extends TermsOfServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermsOfServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermsOfServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermsOfServiceGroupByOutputType[P]>
            : GetScalarType<T[P], TermsOfServiceGroupByOutputType[P]>
        }
      >
    >


  export type TermsOfServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["termsOfService"]>

  export type TermsOfServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["termsOfService"]>

  export type TermsOfServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["termsOfService"]>

  export type TermsOfServiceSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TermsOfServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["termsOfService"]>

  export type $TermsOfServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TermsOfService"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["termsOfService"]>
    composites: {}
  }

  type TermsOfServiceGetPayload<S extends boolean | null | undefined | TermsOfServiceDefaultArgs> = $Result.GetResult<Prisma.$TermsOfServicePayload, S>

  type TermsOfServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TermsOfServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TermsOfServiceCountAggregateInputType | true
    }

  export interface TermsOfServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TermsOfService'], meta: { name: 'TermsOfService' } }
    /**
     * Find zero or one TermsOfService that matches the filter.
     * @param {TermsOfServiceFindUniqueArgs} args - Arguments to find a TermsOfService
     * @example
     * // Get one TermsOfService
     * const termsOfService = await prisma.termsOfService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermsOfServiceFindUniqueArgs>(args: SelectSubset<T, TermsOfServiceFindUniqueArgs<ExtArgs>>): Prisma__TermsOfServiceClient<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TermsOfService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TermsOfServiceFindUniqueOrThrowArgs} args - Arguments to find a TermsOfService
     * @example
     * // Get one TermsOfService
     * const termsOfService = await prisma.termsOfService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermsOfServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, TermsOfServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermsOfServiceClient<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermsOfService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfServiceFindFirstArgs} args - Arguments to find a TermsOfService
     * @example
     * // Get one TermsOfService
     * const termsOfService = await prisma.termsOfService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermsOfServiceFindFirstArgs>(args?: SelectSubset<T, TermsOfServiceFindFirstArgs<ExtArgs>>): Prisma__TermsOfServiceClient<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermsOfService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfServiceFindFirstOrThrowArgs} args - Arguments to find a TermsOfService
     * @example
     * // Get one TermsOfService
     * const termsOfService = await prisma.termsOfService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermsOfServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, TermsOfServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermsOfServiceClient<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TermsOfServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TermsOfServices
     * const termsOfServices = await prisma.termsOfService.findMany()
     * 
     * // Get first 10 TermsOfServices
     * const termsOfServices = await prisma.termsOfService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termsOfServiceWithIdOnly = await prisma.termsOfService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermsOfServiceFindManyArgs>(args?: SelectSubset<T, TermsOfServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TermsOfService.
     * @param {TermsOfServiceCreateArgs} args - Arguments to create a TermsOfService.
     * @example
     * // Create one TermsOfService
     * const TermsOfService = await prisma.termsOfService.create({
     *   data: {
     *     // ... data to create a TermsOfService
     *   }
     * })
     * 
     */
    create<T extends TermsOfServiceCreateArgs>(args: SelectSubset<T, TermsOfServiceCreateArgs<ExtArgs>>): Prisma__TermsOfServiceClient<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TermsOfServices.
     * @param {TermsOfServiceCreateManyArgs} args - Arguments to create many TermsOfServices.
     * @example
     * // Create many TermsOfServices
     * const termsOfService = await prisma.termsOfService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermsOfServiceCreateManyArgs>(args?: SelectSubset<T, TermsOfServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TermsOfServices and returns the data saved in the database.
     * @param {TermsOfServiceCreateManyAndReturnArgs} args - Arguments to create many TermsOfServices.
     * @example
     * // Create many TermsOfServices
     * const termsOfService = await prisma.termsOfService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TermsOfServices and only return the `id`
     * const termsOfServiceWithIdOnly = await prisma.termsOfService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TermsOfServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, TermsOfServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TermsOfService.
     * @param {TermsOfServiceDeleteArgs} args - Arguments to delete one TermsOfService.
     * @example
     * // Delete one TermsOfService
     * const TermsOfService = await prisma.termsOfService.delete({
     *   where: {
     *     // ... filter to delete one TermsOfService
     *   }
     * })
     * 
     */
    delete<T extends TermsOfServiceDeleteArgs>(args: SelectSubset<T, TermsOfServiceDeleteArgs<ExtArgs>>): Prisma__TermsOfServiceClient<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TermsOfService.
     * @param {TermsOfServiceUpdateArgs} args - Arguments to update one TermsOfService.
     * @example
     * // Update one TermsOfService
     * const termsOfService = await prisma.termsOfService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermsOfServiceUpdateArgs>(args: SelectSubset<T, TermsOfServiceUpdateArgs<ExtArgs>>): Prisma__TermsOfServiceClient<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TermsOfServices.
     * @param {TermsOfServiceDeleteManyArgs} args - Arguments to filter TermsOfServices to delete.
     * @example
     * // Delete a few TermsOfServices
     * const { count } = await prisma.termsOfService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermsOfServiceDeleteManyArgs>(args?: SelectSubset<T, TermsOfServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsOfServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TermsOfServices
     * const termsOfService = await prisma.termsOfService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermsOfServiceUpdateManyArgs>(args: SelectSubset<T, TermsOfServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsOfServices and returns the data updated in the database.
     * @param {TermsOfServiceUpdateManyAndReturnArgs} args - Arguments to update many TermsOfServices.
     * @example
     * // Update many TermsOfServices
     * const termsOfService = await prisma.termsOfService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TermsOfServices and only return the `id`
     * const termsOfServiceWithIdOnly = await prisma.termsOfService.updateManyAndReturn({
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
    updateManyAndReturn<T extends TermsOfServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, TermsOfServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TermsOfService.
     * @param {TermsOfServiceUpsertArgs} args - Arguments to update or create a TermsOfService.
     * @example
     * // Update or create a TermsOfService
     * const termsOfService = await prisma.termsOfService.upsert({
     *   create: {
     *     // ... data to create a TermsOfService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TermsOfService we want to update
     *   }
     * })
     */
    upsert<T extends TermsOfServiceUpsertArgs>(args: SelectSubset<T, TermsOfServiceUpsertArgs<ExtArgs>>): Prisma__TermsOfServiceClient<$Result.GetResult<Prisma.$TermsOfServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TermsOfServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfServiceCountArgs} args - Arguments to filter TermsOfServices to count.
     * @example
     * // Count the number of TermsOfServices
     * const count = await prisma.termsOfService.count({
     *   where: {
     *     // ... the filter for the TermsOfServices we want to count
     *   }
     * })
    **/
    count<T extends TermsOfServiceCountArgs>(
      args?: Subset<T, TermsOfServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermsOfServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TermsOfService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TermsOfServiceAggregateArgs>(args: Subset<T, TermsOfServiceAggregateArgs>): Prisma.PrismaPromise<GetTermsOfServiceAggregateType<T>>

    /**
     * Group by TermsOfService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfServiceGroupByArgs} args - Group by arguments.
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
      T extends TermsOfServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermsOfServiceGroupByArgs['orderBy'] }
        : { orderBy?: TermsOfServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TermsOfServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermsOfServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TermsOfService model
   */
  readonly fields: TermsOfServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TermsOfService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermsOfServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TermsOfService model
   */
  interface TermsOfServiceFieldRefs {
    readonly id: FieldRef<"TermsOfService", 'String'>
    readonly content: FieldRef<"TermsOfService", 'String'>
    readonly createdAt: FieldRef<"TermsOfService", 'DateTime'>
    readonly updatedAt: FieldRef<"TermsOfService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TermsOfService findUnique
   */
  export type TermsOfServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * Filter, which TermsOfService to fetch.
     */
    where: TermsOfServiceWhereUniqueInput
  }

  /**
   * TermsOfService findUniqueOrThrow
   */
  export type TermsOfServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * Filter, which TermsOfService to fetch.
     */
    where: TermsOfServiceWhereUniqueInput
  }

  /**
   * TermsOfService findFirst
   */
  export type TermsOfServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * Filter, which TermsOfService to fetch.
     */
    where?: TermsOfServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfServices to fetch.
     */
    orderBy?: TermsOfServiceOrderByWithRelationInput | TermsOfServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsOfServices.
     */
    cursor?: TermsOfServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsOfServices.
     */
    distinct?: TermsOfServiceScalarFieldEnum | TermsOfServiceScalarFieldEnum[]
  }

  /**
   * TermsOfService findFirstOrThrow
   */
  export type TermsOfServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * Filter, which TermsOfService to fetch.
     */
    where?: TermsOfServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfServices to fetch.
     */
    orderBy?: TermsOfServiceOrderByWithRelationInput | TermsOfServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsOfServices.
     */
    cursor?: TermsOfServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsOfServices.
     */
    distinct?: TermsOfServiceScalarFieldEnum | TermsOfServiceScalarFieldEnum[]
  }

  /**
   * TermsOfService findMany
   */
  export type TermsOfServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * Filter, which TermsOfServices to fetch.
     */
    where?: TermsOfServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfServices to fetch.
     */
    orderBy?: TermsOfServiceOrderByWithRelationInput | TermsOfServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TermsOfServices.
     */
    cursor?: TermsOfServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsOfServices.
     */
    distinct?: TermsOfServiceScalarFieldEnum | TermsOfServiceScalarFieldEnum[]
  }

  /**
   * TermsOfService create
   */
  export type TermsOfServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a TermsOfService.
     */
    data: XOR<TermsOfServiceCreateInput, TermsOfServiceUncheckedCreateInput>
  }

  /**
   * TermsOfService createMany
   */
  export type TermsOfServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TermsOfServices.
     */
    data: TermsOfServiceCreateManyInput | TermsOfServiceCreateManyInput[]
  }

  /**
   * TermsOfService createManyAndReturn
   */
  export type TermsOfServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * The data used to create many TermsOfServices.
     */
    data: TermsOfServiceCreateManyInput | TermsOfServiceCreateManyInput[]
  }

  /**
   * TermsOfService update
   */
  export type TermsOfServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a TermsOfService.
     */
    data: XOR<TermsOfServiceUpdateInput, TermsOfServiceUncheckedUpdateInput>
    /**
     * Choose, which TermsOfService to update.
     */
    where: TermsOfServiceWhereUniqueInput
  }

  /**
   * TermsOfService updateMany
   */
  export type TermsOfServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TermsOfServices.
     */
    data: XOR<TermsOfServiceUpdateManyMutationInput, TermsOfServiceUncheckedUpdateManyInput>
    /**
     * Filter which TermsOfServices to update
     */
    where?: TermsOfServiceWhereInput
    /**
     * Limit how many TermsOfServices to update.
     */
    limit?: number
  }

  /**
   * TermsOfService updateManyAndReturn
   */
  export type TermsOfServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * The data used to update TermsOfServices.
     */
    data: XOR<TermsOfServiceUpdateManyMutationInput, TermsOfServiceUncheckedUpdateManyInput>
    /**
     * Filter which TermsOfServices to update
     */
    where?: TermsOfServiceWhereInput
    /**
     * Limit how many TermsOfServices to update.
     */
    limit?: number
  }

  /**
   * TermsOfService upsert
   */
  export type TermsOfServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the TermsOfService to update in case it exists.
     */
    where: TermsOfServiceWhereUniqueInput
    /**
     * In case the TermsOfService found by the `where` argument doesn't exist, create a new TermsOfService with this data.
     */
    create: XOR<TermsOfServiceCreateInput, TermsOfServiceUncheckedCreateInput>
    /**
     * In case the TermsOfService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermsOfServiceUpdateInput, TermsOfServiceUncheckedUpdateInput>
  }

  /**
   * TermsOfService delete
   */
  export type TermsOfServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
    /**
     * Filter which TermsOfService to delete.
     */
    where: TermsOfServiceWhereUniqueInput
  }

  /**
   * TermsOfService deleteMany
   */
  export type TermsOfServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermsOfServices to delete
     */
    where?: TermsOfServiceWhereInput
    /**
     * Limit how many TermsOfServices to delete.
     */
    limit?: number
  }

  /**
   * TermsOfService without action
   */
  export type TermsOfServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfService
     */
    select?: TermsOfServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfService
     */
    omit?: TermsOfServiceOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SiteSettingsScalarFieldEnum: {
    id: 'id',
    logoText: 'logoText',
    loadingText: 'loadingText',
    showLoadingScreen: 'showLoadingScreen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteSettingsScalarFieldEnum = (typeof SiteSettingsScalarFieldEnum)[keyof typeof SiteSettingsScalarFieldEnum]


  export const SeoSettingsScalarFieldEnum: {
    id: 'id',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    ogImage: 'ogImage',
    keywords: 'keywords',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeoSettingsScalarFieldEnum = (typeof SeoSettingsScalarFieldEnum)[keyof typeof SeoSettingsScalarFieldEnum]


  export const NavigationItemScalarFieldEnum: {
    id: 'id',
    label: 'label',
    href: 'href',
    sortOrder: 'sortOrder',
    visible: 'visible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NavigationItemScalarFieldEnum = (typeof NavigationItemScalarFieldEnum)[keyof typeof NavigationItemScalarFieldEnum]


  export const HeroSectionScalarFieldEnum: {
    id: 'id',
    tagLine: 'tagLine',
    title: 'title',
    highlightWord: 'highlightWord',
    subtitle: 'subtitle',
    ctaPrimaryText: 'ctaPrimaryText',
    ctaPrimaryLink: 'ctaPrimaryLink',
    ctaSecondaryText: 'ctaSecondaryText',
    ctaSecondaryLink: 'ctaSecondaryLink',
    visible: 'visible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeroSectionScalarFieldEnum = (typeof HeroSectionScalarFieldEnum)[keyof typeof HeroSectionScalarFieldEnum]


  export const AboutSectionScalarFieldEnum: {
    id: 'id',
    tagLine: 'tagLine',
    title: 'title',
    titleHighlight: 'titleHighlight',
    paragraph1: 'paragraph1',
    paragraph2: 'paragraph2',
    founderName: 'founderName',
    founderTitle: 'founderTitle',
    founderImage: 'founderImage',
    stat1Label: 'stat1Label',
    stat1Value: 'stat1Value',
    stat2Label: 'stat2Label',
    stat2Value: 'stat2Value',
    stat3Label: 'stat3Label',
    stat3Value: 'stat3Value',
    stat4Label: 'stat4Label',
    stat4Value: 'stat4Value',
    visible: 'visible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutSectionScalarFieldEnum = (typeof AboutSectionScalarFieldEnum)[keyof typeof AboutSectionScalarFieldEnum]


  export const ServiceItemScalarFieldEnum: {
    id: 'id',
    icon: 'icon',
    title: 'title',
    description: 'description',
    sortOrder: 'sortOrder',
    visible: 'visible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceItemScalarFieldEnum = (typeof ServiceItemScalarFieldEnum)[keyof typeof ServiceItemScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    shortDescription: 'shortDescription',
    fullDescription: 'fullDescription',
    coverImage: 'coverImage',
    genre: 'genre',
    appStoreUrl: 'appStoreUrl',
    googlePlayUrl: 'googlePlayUrl',
    webUrl: 'webUrl',
    steamUrl: 'steamUrl',
    featured: 'featured',
    published: 'published',
    releaseDate: 'releaseDate',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    alt: 'alt',
    sortOrder: 'sortOrder',
    gameId: 'gameId',
    createdAt: 'createdAt'
  };

  export type GameImageScalarFieldEnum = (typeof GameImageScalarFieldEnum)[keyof typeof GameImageScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    email: 'email',
    linkedin: 'linkedin',
    linkedinUrl: 'linkedinUrl',
    website: 'website',
    websiteUrl: 'websiteUrl',
    location: 'location',
    formEnabled: 'formEnabled',
    visible: 'visible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


  export const ContactSubmissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    projectType: 'projectType',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type ContactSubmissionScalarFieldEnum = (typeof ContactSubmissionScalarFieldEnum)[keyof typeof ContactSubmissionScalarFieldEnum]


  export const SocialLinkScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    url: 'url',
    icon: 'icon',
    sortOrder: 'sortOrder',
    visible: 'visible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum]


  export const FooterSettingsScalarFieldEnum: {
    id: 'id',
    description: 'description',
    copyrightText: 'copyrightText',
    bottomText: 'bottomText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FooterSettingsScalarFieldEnum = (typeof FooterSettingsScalarFieldEnum)[keyof typeof FooterSettingsScalarFieldEnum]


  export const PrivacyPolicyScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrivacyPolicyScalarFieldEnum = (typeof PrivacyPolicyScalarFieldEnum)[keyof typeof PrivacyPolicyScalarFieldEnum]


  export const TermsOfServiceScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TermsOfServiceScalarFieldEnum = (typeof TermsOfServiceScalarFieldEnum)[keyof typeof TermsOfServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type SiteSettingsWhereInput = {
    AND?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    OR?: SiteSettingsWhereInput[]
    NOT?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    id?: StringFilter<"SiteSettings"> | string
    logoText?: StringFilter<"SiteSettings"> | string
    loadingText?: StringFilter<"SiteSettings"> | string
    showLoadingScreen?: BoolFilter<"SiteSettings"> | boolean
    createdAt?: DateTimeFilter<"SiteSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SiteSettings"> | Date | string
  }

  export type SiteSettingsOrderByWithRelationInput = {
    id?: SortOrder
    logoText?: SortOrder
    loadingText?: SortOrder
    showLoadingScreen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    OR?: SiteSettingsWhereInput[]
    NOT?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    logoText?: StringFilter<"SiteSettings"> | string
    loadingText?: StringFilter<"SiteSettings"> | string
    showLoadingScreen?: BoolFilter<"SiteSettings"> | boolean
    createdAt?: DateTimeFilter<"SiteSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SiteSettings"> | Date | string
  }, "id">

  export type SiteSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    logoText?: SortOrder
    loadingText?: SortOrder
    showLoadingScreen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteSettingsCountOrderByAggregateInput
    _max?: SiteSettingsMaxOrderByAggregateInput
    _min?: SiteSettingsMinOrderByAggregateInput
  }

  export type SiteSettingsScalarWhereWithAggregatesInput = {
    AND?: SiteSettingsScalarWhereWithAggregatesInput | SiteSettingsScalarWhereWithAggregatesInput[]
    OR?: SiteSettingsScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingsScalarWhereWithAggregatesInput | SiteSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteSettings"> | string
    logoText?: StringWithAggregatesFilter<"SiteSettings"> | string
    loadingText?: StringWithAggregatesFilter<"SiteSettings"> | string
    showLoadingScreen?: BoolWithAggregatesFilter<"SiteSettings"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SiteSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteSettings"> | Date | string
  }

  export type SeoSettingsWhereInput = {
    AND?: SeoSettingsWhereInput | SeoSettingsWhereInput[]
    OR?: SeoSettingsWhereInput[]
    NOT?: SeoSettingsWhereInput | SeoSettingsWhereInput[]
    id?: StringFilter<"SeoSettings"> | string
    metaTitle?: StringFilter<"SeoSettings"> | string
    metaDescription?: StringFilter<"SeoSettings"> | string
    ogImage?: StringFilter<"SeoSettings"> | string
    keywords?: StringFilter<"SeoSettings"> | string
    createdAt?: DateTimeFilter<"SeoSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SeoSettings"> | Date | string
  }

  export type SeoSettingsOrderByWithRelationInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeoSettingsWhereInput | SeoSettingsWhereInput[]
    OR?: SeoSettingsWhereInput[]
    NOT?: SeoSettingsWhereInput | SeoSettingsWhereInput[]
    metaTitle?: StringFilter<"SeoSettings"> | string
    metaDescription?: StringFilter<"SeoSettings"> | string
    ogImage?: StringFilter<"SeoSettings"> | string
    keywords?: StringFilter<"SeoSettings"> | string
    createdAt?: DateTimeFilter<"SeoSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SeoSettings"> | Date | string
  }, "id">

  export type SeoSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeoSettingsCountOrderByAggregateInput
    _max?: SeoSettingsMaxOrderByAggregateInput
    _min?: SeoSettingsMinOrderByAggregateInput
  }

  export type SeoSettingsScalarWhereWithAggregatesInput = {
    AND?: SeoSettingsScalarWhereWithAggregatesInput | SeoSettingsScalarWhereWithAggregatesInput[]
    OR?: SeoSettingsScalarWhereWithAggregatesInput[]
    NOT?: SeoSettingsScalarWhereWithAggregatesInput | SeoSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeoSettings"> | string
    metaTitle?: StringWithAggregatesFilter<"SeoSettings"> | string
    metaDescription?: StringWithAggregatesFilter<"SeoSettings"> | string
    ogImage?: StringWithAggregatesFilter<"SeoSettings"> | string
    keywords?: StringWithAggregatesFilter<"SeoSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SeoSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SeoSettings"> | Date | string
  }

  export type NavigationItemWhereInput = {
    AND?: NavigationItemWhereInput | NavigationItemWhereInput[]
    OR?: NavigationItemWhereInput[]
    NOT?: NavigationItemWhereInput | NavigationItemWhereInput[]
    id?: StringFilter<"NavigationItem"> | string
    label?: StringFilter<"NavigationItem"> | string
    href?: StringFilter<"NavigationItem"> | string
    sortOrder?: IntFilter<"NavigationItem"> | number
    visible?: BoolFilter<"NavigationItem"> | boolean
    createdAt?: DateTimeFilter<"NavigationItem"> | Date | string
    updatedAt?: DateTimeFilter<"NavigationItem"> | Date | string
  }

  export type NavigationItemOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    href?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NavigationItemWhereInput | NavigationItemWhereInput[]
    OR?: NavigationItemWhereInput[]
    NOT?: NavigationItemWhereInput | NavigationItemWhereInput[]
    label?: StringFilter<"NavigationItem"> | string
    href?: StringFilter<"NavigationItem"> | string
    sortOrder?: IntFilter<"NavigationItem"> | number
    visible?: BoolFilter<"NavigationItem"> | boolean
    createdAt?: DateTimeFilter<"NavigationItem"> | Date | string
    updatedAt?: DateTimeFilter<"NavigationItem"> | Date | string
  }, "id">

  export type NavigationItemOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    href?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NavigationItemCountOrderByAggregateInput
    _avg?: NavigationItemAvgOrderByAggregateInput
    _max?: NavigationItemMaxOrderByAggregateInput
    _min?: NavigationItemMinOrderByAggregateInput
    _sum?: NavigationItemSumOrderByAggregateInput
  }

  export type NavigationItemScalarWhereWithAggregatesInput = {
    AND?: NavigationItemScalarWhereWithAggregatesInput | NavigationItemScalarWhereWithAggregatesInput[]
    OR?: NavigationItemScalarWhereWithAggregatesInput[]
    NOT?: NavigationItemScalarWhereWithAggregatesInput | NavigationItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NavigationItem"> | string
    label?: StringWithAggregatesFilter<"NavigationItem"> | string
    href?: StringWithAggregatesFilter<"NavigationItem"> | string
    sortOrder?: IntWithAggregatesFilter<"NavigationItem"> | number
    visible?: BoolWithAggregatesFilter<"NavigationItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NavigationItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NavigationItem"> | Date | string
  }

  export type HeroSectionWhereInput = {
    AND?: HeroSectionWhereInput | HeroSectionWhereInput[]
    OR?: HeroSectionWhereInput[]
    NOT?: HeroSectionWhereInput | HeroSectionWhereInput[]
    id?: StringFilter<"HeroSection"> | string
    tagLine?: StringFilter<"HeroSection"> | string
    title?: StringFilter<"HeroSection"> | string
    highlightWord?: StringFilter<"HeroSection"> | string
    subtitle?: StringFilter<"HeroSection"> | string
    ctaPrimaryText?: StringFilter<"HeroSection"> | string
    ctaPrimaryLink?: StringFilter<"HeroSection"> | string
    ctaSecondaryText?: StringFilter<"HeroSection"> | string
    ctaSecondaryLink?: StringFilter<"HeroSection"> | string
    visible?: BoolFilter<"HeroSection"> | boolean
    createdAt?: DateTimeFilter<"HeroSection"> | Date | string
    updatedAt?: DateTimeFilter<"HeroSection"> | Date | string
  }

  export type HeroSectionOrderByWithRelationInput = {
    id?: SortOrder
    tagLine?: SortOrder
    title?: SortOrder
    highlightWord?: SortOrder
    subtitle?: SortOrder
    ctaPrimaryText?: SortOrder
    ctaPrimaryLink?: SortOrder
    ctaSecondaryText?: SortOrder
    ctaSecondaryLink?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HeroSectionWhereInput | HeroSectionWhereInput[]
    OR?: HeroSectionWhereInput[]
    NOT?: HeroSectionWhereInput | HeroSectionWhereInput[]
    tagLine?: StringFilter<"HeroSection"> | string
    title?: StringFilter<"HeroSection"> | string
    highlightWord?: StringFilter<"HeroSection"> | string
    subtitle?: StringFilter<"HeroSection"> | string
    ctaPrimaryText?: StringFilter<"HeroSection"> | string
    ctaPrimaryLink?: StringFilter<"HeroSection"> | string
    ctaSecondaryText?: StringFilter<"HeroSection"> | string
    ctaSecondaryLink?: StringFilter<"HeroSection"> | string
    visible?: BoolFilter<"HeroSection"> | boolean
    createdAt?: DateTimeFilter<"HeroSection"> | Date | string
    updatedAt?: DateTimeFilter<"HeroSection"> | Date | string
  }, "id">

  export type HeroSectionOrderByWithAggregationInput = {
    id?: SortOrder
    tagLine?: SortOrder
    title?: SortOrder
    highlightWord?: SortOrder
    subtitle?: SortOrder
    ctaPrimaryText?: SortOrder
    ctaPrimaryLink?: SortOrder
    ctaSecondaryText?: SortOrder
    ctaSecondaryLink?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeroSectionCountOrderByAggregateInput
    _max?: HeroSectionMaxOrderByAggregateInput
    _min?: HeroSectionMinOrderByAggregateInput
  }

  export type HeroSectionScalarWhereWithAggregatesInput = {
    AND?: HeroSectionScalarWhereWithAggregatesInput | HeroSectionScalarWhereWithAggregatesInput[]
    OR?: HeroSectionScalarWhereWithAggregatesInput[]
    NOT?: HeroSectionScalarWhereWithAggregatesInput | HeroSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HeroSection"> | string
    tagLine?: StringWithAggregatesFilter<"HeroSection"> | string
    title?: StringWithAggregatesFilter<"HeroSection"> | string
    highlightWord?: StringWithAggregatesFilter<"HeroSection"> | string
    subtitle?: StringWithAggregatesFilter<"HeroSection"> | string
    ctaPrimaryText?: StringWithAggregatesFilter<"HeroSection"> | string
    ctaPrimaryLink?: StringWithAggregatesFilter<"HeroSection"> | string
    ctaSecondaryText?: StringWithAggregatesFilter<"HeroSection"> | string
    ctaSecondaryLink?: StringWithAggregatesFilter<"HeroSection"> | string
    visible?: BoolWithAggregatesFilter<"HeroSection"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HeroSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HeroSection"> | Date | string
  }

  export type AboutSectionWhereInput = {
    AND?: AboutSectionWhereInput | AboutSectionWhereInput[]
    OR?: AboutSectionWhereInput[]
    NOT?: AboutSectionWhereInput | AboutSectionWhereInput[]
    id?: StringFilter<"AboutSection"> | string
    tagLine?: StringFilter<"AboutSection"> | string
    title?: StringFilter<"AboutSection"> | string
    titleHighlight?: StringFilter<"AboutSection"> | string
    paragraph1?: StringFilter<"AboutSection"> | string
    paragraph2?: StringFilter<"AboutSection"> | string
    founderName?: StringFilter<"AboutSection"> | string
    founderTitle?: StringFilter<"AboutSection"> | string
    founderImage?: StringFilter<"AboutSection"> | string
    stat1Label?: StringFilter<"AboutSection"> | string
    stat1Value?: StringFilter<"AboutSection"> | string
    stat2Label?: StringFilter<"AboutSection"> | string
    stat2Value?: StringFilter<"AboutSection"> | string
    stat3Label?: StringFilter<"AboutSection"> | string
    stat3Value?: StringFilter<"AboutSection"> | string
    stat4Label?: StringFilter<"AboutSection"> | string
    stat4Value?: StringFilter<"AboutSection"> | string
    visible?: BoolFilter<"AboutSection"> | boolean
    createdAt?: DateTimeFilter<"AboutSection"> | Date | string
    updatedAt?: DateTimeFilter<"AboutSection"> | Date | string
  }

  export type AboutSectionOrderByWithRelationInput = {
    id?: SortOrder
    tagLine?: SortOrder
    title?: SortOrder
    titleHighlight?: SortOrder
    paragraph1?: SortOrder
    paragraph2?: SortOrder
    founderName?: SortOrder
    founderTitle?: SortOrder
    founderImage?: SortOrder
    stat1Label?: SortOrder
    stat1Value?: SortOrder
    stat2Label?: SortOrder
    stat2Value?: SortOrder
    stat3Label?: SortOrder
    stat3Value?: SortOrder
    stat4Label?: SortOrder
    stat4Value?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutSectionWhereInput | AboutSectionWhereInput[]
    OR?: AboutSectionWhereInput[]
    NOT?: AboutSectionWhereInput | AboutSectionWhereInput[]
    tagLine?: StringFilter<"AboutSection"> | string
    title?: StringFilter<"AboutSection"> | string
    titleHighlight?: StringFilter<"AboutSection"> | string
    paragraph1?: StringFilter<"AboutSection"> | string
    paragraph2?: StringFilter<"AboutSection"> | string
    founderName?: StringFilter<"AboutSection"> | string
    founderTitle?: StringFilter<"AboutSection"> | string
    founderImage?: StringFilter<"AboutSection"> | string
    stat1Label?: StringFilter<"AboutSection"> | string
    stat1Value?: StringFilter<"AboutSection"> | string
    stat2Label?: StringFilter<"AboutSection"> | string
    stat2Value?: StringFilter<"AboutSection"> | string
    stat3Label?: StringFilter<"AboutSection"> | string
    stat3Value?: StringFilter<"AboutSection"> | string
    stat4Label?: StringFilter<"AboutSection"> | string
    stat4Value?: StringFilter<"AboutSection"> | string
    visible?: BoolFilter<"AboutSection"> | boolean
    createdAt?: DateTimeFilter<"AboutSection"> | Date | string
    updatedAt?: DateTimeFilter<"AboutSection"> | Date | string
  }, "id">

  export type AboutSectionOrderByWithAggregationInput = {
    id?: SortOrder
    tagLine?: SortOrder
    title?: SortOrder
    titleHighlight?: SortOrder
    paragraph1?: SortOrder
    paragraph2?: SortOrder
    founderName?: SortOrder
    founderTitle?: SortOrder
    founderImage?: SortOrder
    stat1Label?: SortOrder
    stat1Value?: SortOrder
    stat2Label?: SortOrder
    stat2Value?: SortOrder
    stat3Label?: SortOrder
    stat3Value?: SortOrder
    stat4Label?: SortOrder
    stat4Value?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutSectionCountOrderByAggregateInput
    _max?: AboutSectionMaxOrderByAggregateInput
    _min?: AboutSectionMinOrderByAggregateInput
  }

  export type AboutSectionScalarWhereWithAggregatesInput = {
    AND?: AboutSectionScalarWhereWithAggregatesInput | AboutSectionScalarWhereWithAggregatesInput[]
    OR?: AboutSectionScalarWhereWithAggregatesInput[]
    NOT?: AboutSectionScalarWhereWithAggregatesInput | AboutSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutSection"> | string
    tagLine?: StringWithAggregatesFilter<"AboutSection"> | string
    title?: StringWithAggregatesFilter<"AboutSection"> | string
    titleHighlight?: StringWithAggregatesFilter<"AboutSection"> | string
    paragraph1?: StringWithAggregatesFilter<"AboutSection"> | string
    paragraph2?: StringWithAggregatesFilter<"AboutSection"> | string
    founderName?: StringWithAggregatesFilter<"AboutSection"> | string
    founderTitle?: StringWithAggregatesFilter<"AboutSection"> | string
    founderImage?: StringWithAggregatesFilter<"AboutSection"> | string
    stat1Label?: StringWithAggregatesFilter<"AboutSection"> | string
    stat1Value?: StringWithAggregatesFilter<"AboutSection"> | string
    stat2Label?: StringWithAggregatesFilter<"AboutSection"> | string
    stat2Value?: StringWithAggregatesFilter<"AboutSection"> | string
    stat3Label?: StringWithAggregatesFilter<"AboutSection"> | string
    stat3Value?: StringWithAggregatesFilter<"AboutSection"> | string
    stat4Label?: StringWithAggregatesFilter<"AboutSection"> | string
    stat4Value?: StringWithAggregatesFilter<"AboutSection"> | string
    visible?: BoolWithAggregatesFilter<"AboutSection"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AboutSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutSection"> | Date | string
  }

  export type ServiceItemWhereInput = {
    AND?: ServiceItemWhereInput | ServiceItemWhereInput[]
    OR?: ServiceItemWhereInput[]
    NOT?: ServiceItemWhereInput | ServiceItemWhereInput[]
    id?: StringFilter<"ServiceItem"> | string
    icon?: StringFilter<"ServiceItem"> | string
    title?: StringFilter<"ServiceItem"> | string
    description?: StringFilter<"ServiceItem"> | string
    sortOrder?: IntFilter<"ServiceItem"> | number
    visible?: BoolFilter<"ServiceItem"> | boolean
    createdAt?: DateTimeFilter<"ServiceItem"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceItem"> | Date | string
  }

  export type ServiceItemOrderByWithRelationInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceItemWhereInput | ServiceItemWhereInput[]
    OR?: ServiceItemWhereInput[]
    NOT?: ServiceItemWhereInput | ServiceItemWhereInput[]
    icon?: StringFilter<"ServiceItem"> | string
    title?: StringFilter<"ServiceItem"> | string
    description?: StringFilter<"ServiceItem"> | string
    sortOrder?: IntFilter<"ServiceItem"> | number
    visible?: BoolFilter<"ServiceItem"> | boolean
    createdAt?: DateTimeFilter<"ServiceItem"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceItem"> | Date | string
  }, "id">

  export type ServiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceItemCountOrderByAggregateInput
    _avg?: ServiceItemAvgOrderByAggregateInput
    _max?: ServiceItemMaxOrderByAggregateInput
    _min?: ServiceItemMinOrderByAggregateInput
    _sum?: ServiceItemSumOrderByAggregateInput
  }

  export type ServiceItemScalarWhereWithAggregatesInput = {
    AND?: ServiceItemScalarWhereWithAggregatesInput | ServiceItemScalarWhereWithAggregatesInput[]
    OR?: ServiceItemScalarWhereWithAggregatesInput[]
    NOT?: ServiceItemScalarWhereWithAggregatesInput | ServiceItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceItem"> | string
    icon?: StringWithAggregatesFilter<"ServiceItem"> | string
    title?: StringWithAggregatesFilter<"ServiceItem"> | string
    description?: StringWithAggregatesFilter<"ServiceItem"> | string
    sortOrder?: IntWithAggregatesFilter<"ServiceItem"> | number
    visible?: BoolWithAggregatesFilter<"ServiceItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ServiceItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceItem"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    title?: StringFilter<"Game"> | string
    slug?: StringFilter<"Game"> | string
    shortDescription?: StringFilter<"Game"> | string
    fullDescription?: StringFilter<"Game"> | string
    coverImage?: StringFilter<"Game"> | string
    genre?: StringFilter<"Game"> | string
    appStoreUrl?: StringFilter<"Game"> | string
    googlePlayUrl?: StringFilter<"Game"> | string
    webUrl?: StringFilter<"Game"> | string
    steamUrl?: StringFilter<"Game"> | string
    featured?: BoolFilter<"Game"> | boolean
    published?: BoolFilter<"Game"> | boolean
    releaseDate?: StringFilter<"Game"> | string
    sortOrder?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    images?: GameImageListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    coverImage?: SortOrder
    genre?: SortOrder
    appStoreUrl?: SortOrder
    googlePlayUrl?: SortOrder
    webUrl?: SortOrder
    steamUrl?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    releaseDate?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: GameImageOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    title?: StringFilter<"Game"> | string
    shortDescription?: StringFilter<"Game"> | string
    fullDescription?: StringFilter<"Game"> | string
    coverImage?: StringFilter<"Game"> | string
    genre?: StringFilter<"Game"> | string
    appStoreUrl?: StringFilter<"Game"> | string
    googlePlayUrl?: StringFilter<"Game"> | string
    webUrl?: StringFilter<"Game"> | string
    steamUrl?: StringFilter<"Game"> | string
    featured?: BoolFilter<"Game"> | boolean
    published?: BoolFilter<"Game"> | boolean
    releaseDate?: StringFilter<"Game"> | string
    sortOrder?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    images?: GameImageListRelationFilter
  }, "id" | "slug">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    coverImage?: SortOrder
    genre?: SortOrder
    appStoreUrl?: SortOrder
    googlePlayUrl?: SortOrder
    webUrl?: SortOrder
    steamUrl?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    releaseDate?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    title?: StringWithAggregatesFilter<"Game"> | string
    slug?: StringWithAggregatesFilter<"Game"> | string
    shortDescription?: StringWithAggregatesFilter<"Game"> | string
    fullDescription?: StringWithAggregatesFilter<"Game"> | string
    coverImage?: StringWithAggregatesFilter<"Game"> | string
    genre?: StringWithAggregatesFilter<"Game"> | string
    appStoreUrl?: StringWithAggregatesFilter<"Game"> | string
    googlePlayUrl?: StringWithAggregatesFilter<"Game"> | string
    webUrl?: StringWithAggregatesFilter<"Game"> | string
    steamUrl?: StringWithAggregatesFilter<"Game"> | string
    featured?: BoolWithAggregatesFilter<"Game"> | boolean
    published?: BoolWithAggregatesFilter<"Game"> | boolean
    releaseDate?: StringWithAggregatesFilter<"Game"> | string
    sortOrder?: IntWithAggregatesFilter<"Game"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type GameImageWhereInput = {
    AND?: GameImageWhereInput | GameImageWhereInput[]
    OR?: GameImageWhereInput[]
    NOT?: GameImageWhereInput | GameImageWhereInput[]
    id?: StringFilter<"GameImage"> | string
    url?: StringFilter<"GameImage"> | string
    alt?: StringFilter<"GameImage"> | string
    sortOrder?: IntFilter<"GameImage"> | number
    gameId?: StringFilter<"GameImage"> | string
    createdAt?: DateTimeFilter<"GameImage"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type GameImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sortOrder?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type GameImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameImageWhereInput | GameImageWhereInput[]
    OR?: GameImageWhereInput[]
    NOT?: GameImageWhereInput | GameImageWhereInput[]
    url?: StringFilter<"GameImage"> | string
    alt?: StringFilter<"GameImage"> | string
    sortOrder?: IntFilter<"GameImage"> | number
    gameId?: StringFilter<"GameImage"> | string
    createdAt?: DateTimeFilter<"GameImage"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type GameImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sortOrder?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    _count?: GameImageCountOrderByAggregateInput
    _avg?: GameImageAvgOrderByAggregateInput
    _max?: GameImageMaxOrderByAggregateInput
    _min?: GameImageMinOrderByAggregateInput
    _sum?: GameImageSumOrderByAggregateInput
  }

  export type GameImageScalarWhereWithAggregatesInput = {
    AND?: GameImageScalarWhereWithAggregatesInput | GameImageScalarWhereWithAggregatesInput[]
    OR?: GameImageScalarWhereWithAggregatesInput[]
    NOT?: GameImageScalarWhereWithAggregatesInput | GameImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameImage"> | string
    url?: StringWithAggregatesFilter<"GameImage"> | string
    alt?: StringWithAggregatesFilter<"GameImage"> | string
    sortOrder?: IntWithAggregatesFilter<"GameImage"> | number
    gameId?: StringWithAggregatesFilter<"GameImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GameImage"> | Date | string
  }

  export type ContactInfoWhereInput = {
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    id?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    linkedin?: StringFilter<"ContactInfo"> | string
    linkedinUrl?: StringFilter<"ContactInfo"> | string
    website?: StringFilter<"ContactInfo"> | string
    websiteUrl?: StringFilter<"ContactInfo"> | string
    location?: StringFilter<"ContactInfo"> | string
    formEnabled?: BoolFilter<"ContactInfo"> | boolean
    visible?: BoolFilter<"ContactInfo"> | boolean
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }

  export type ContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    linkedin?: SortOrder
    linkedinUrl?: SortOrder
    website?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    formEnabled?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    email?: StringFilter<"ContactInfo"> | string
    linkedin?: StringFilter<"ContactInfo"> | string
    linkedinUrl?: StringFilter<"ContactInfo"> | string
    website?: StringFilter<"ContactInfo"> | string
    websiteUrl?: StringFilter<"ContactInfo"> | string
    location?: StringFilter<"ContactInfo"> | string
    formEnabled?: BoolFilter<"ContactInfo"> | boolean
    visible?: BoolFilter<"ContactInfo"> | boolean
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }, "id">

  export type ContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    linkedin?: SortOrder
    linkedinUrl?: SortOrder
    website?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    formEnabled?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactInfoCountOrderByAggregateInput
    _max?: ContactInfoMaxOrderByAggregateInput
    _min?: ContactInfoMinOrderByAggregateInput
  }

  export type ContactInfoScalarWhereWithAggregatesInput = {
    AND?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    OR?: ContactInfoScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactInfo"> | string
    email?: StringWithAggregatesFilter<"ContactInfo"> | string
    linkedin?: StringWithAggregatesFilter<"ContactInfo"> | string
    linkedinUrl?: StringWithAggregatesFilter<"ContactInfo"> | string
    website?: StringWithAggregatesFilter<"ContactInfo"> | string
    websiteUrl?: StringWithAggregatesFilter<"ContactInfo"> | string
    location?: StringWithAggregatesFilter<"ContactInfo"> | string
    formEnabled?: BoolWithAggregatesFilter<"ContactInfo"> | boolean
    visible?: BoolWithAggregatesFilter<"ContactInfo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
  }

  export type ContactSubmissionWhereInput = {
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    id?: StringFilter<"ContactSubmission"> | string
    name?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    projectType?: StringFilter<"ContactSubmission"> | string
    message?: StringFilter<"ContactSubmission"> | string
    read?: BoolFilter<"ContactSubmission"> | boolean
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
  }

  export type ContactSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    projectType?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    name?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    projectType?: StringFilter<"ContactSubmission"> | string
    message?: StringFilter<"ContactSubmission"> | string
    read?: BoolFilter<"ContactSubmission"> | boolean
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
  }, "id">

  export type ContactSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    projectType?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: ContactSubmissionCountOrderByAggregateInput
    _max?: ContactSubmissionMaxOrderByAggregateInput
    _min?: ContactSubmissionMinOrderByAggregateInput
  }

  export type ContactSubmissionScalarWhereWithAggregatesInput = {
    AND?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    OR?: ContactSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactSubmission"> | string
    name?: StringWithAggregatesFilter<"ContactSubmission"> | string
    email?: StringWithAggregatesFilter<"ContactSubmission"> | string
    projectType?: StringWithAggregatesFilter<"ContactSubmission"> | string
    message?: StringWithAggregatesFilter<"ContactSubmission"> | string
    read?: BoolWithAggregatesFilter<"ContactSubmission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContactSubmission"> | Date | string
  }

  export type SocialLinkWhereInput = {
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    icon?: StringFilter<"SocialLink"> | string
    sortOrder?: IntFilter<"SocialLink"> | number
    visible?: BoolFilter<"SocialLink"> | boolean
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeFilter<"SocialLink"> | Date | string
  }

  export type SocialLinkOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    icon?: StringFilter<"SocialLink"> | string
    sortOrder?: IntFilter<"SocialLink"> | number
    visible?: BoolFilter<"SocialLink"> | boolean
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeFilter<"SocialLink"> | Date | string
  }, "id">

  export type SocialLinkOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialLinkCountOrderByAggregateInput
    _avg?: SocialLinkAvgOrderByAggregateInput
    _max?: SocialLinkMaxOrderByAggregateInput
    _min?: SocialLinkMinOrderByAggregateInput
    _sum?: SocialLinkSumOrderByAggregateInput
  }

  export type SocialLinkScalarWhereWithAggregatesInput = {
    AND?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    OR?: SocialLinkScalarWhereWithAggregatesInput[]
    NOT?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialLink"> | string
    platform?: StringWithAggregatesFilter<"SocialLink"> | string
    url?: StringWithAggregatesFilter<"SocialLink"> | string
    icon?: StringWithAggregatesFilter<"SocialLink"> | string
    sortOrder?: IntWithAggregatesFilter<"SocialLink"> | number
    visible?: BoolWithAggregatesFilter<"SocialLink"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
  }

  export type FooterSettingsWhereInput = {
    AND?: FooterSettingsWhereInput | FooterSettingsWhereInput[]
    OR?: FooterSettingsWhereInput[]
    NOT?: FooterSettingsWhereInput | FooterSettingsWhereInput[]
    id?: StringFilter<"FooterSettings"> | string
    description?: StringFilter<"FooterSettings"> | string
    copyrightText?: StringFilter<"FooterSettings"> | string
    bottomText?: StringFilter<"FooterSettings"> | string
    createdAt?: DateTimeFilter<"FooterSettings"> | Date | string
    updatedAt?: DateTimeFilter<"FooterSettings"> | Date | string
  }

  export type FooterSettingsOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    copyrightText?: SortOrder
    bottomText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FooterSettingsWhereInput | FooterSettingsWhereInput[]
    OR?: FooterSettingsWhereInput[]
    NOT?: FooterSettingsWhereInput | FooterSettingsWhereInput[]
    description?: StringFilter<"FooterSettings"> | string
    copyrightText?: StringFilter<"FooterSettings"> | string
    bottomText?: StringFilter<"FooterSettings"> | string
    createdAt?: DateTimeFilter<"FooterSettings"> | Date | string
    updatedAt?: DateTimeFilter<"FooterSettings"> | Date | string
  }, "id">

  export type FooterSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    copyrightText?: SortOrder
    bottomText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FooterSettingsCountOrderByAggregateInput
    _max?: FooterSettingsMaxOrderByAggregateInput
    _min?: FooterSettingsMinOrderByAggregateInput
  }

  export type FooterSettingsScalarWhereWithAggregatesInput = {
    AND?: FooterSettingsScalarWhereWithAggregatesInput | FooterSettingsScalarWhereWithAggregatesInput[]
    OR?: FooterSettingsScalarWhereWithAggregatesInput[]
    NOT?: FooterSettingsScalarWhereWithAggregatesInput | FooterSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FooterSettings"> | string
    description?: StringWithAggregatesFilter<"FooterSettings"> | string
    copyrightText?: StringWithAggregatesFilter<"FooterSettings"> | string
    bottomText?: StringWithAggregatesFilter<"FooterSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FooterSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FooterSettings"> | Date | string
  }

  export type PrivacyPolicyWhereInput = {
    AND?: PrivacyPolicyWhereInput | PrivacyPolicyWhereInput[]
    OR?: PrivacyPolicyWhereInput[]
    NOT?: PrivacyPolicyWhereInput | PrivacyPolicyWhereInput[]
    id?: StringFilter<"PrivacyPolicy"> | string
    content?: StringFilter<"PrivacyPolicy"> | string
    createdAt?: DateTimeFilter<"PrivacyPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"PrivacyPolicy"> | Date | string
  }

  export type PrivacyPolicyOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivacyPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrivacyPolicyWhereInput | PrivacyPolicyWhereInput[]
    OR?: PrivacyPolicyWhereInput[]
    NOT?: PrivacyPolicyWhereInput | PrivacyPolicyWhereInput[]
    content?: StringFilter<"PrivacyPolicy"> | string
    createdAt?: DateTimeFilter<"PrivacyPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"PrivacyPolicy"> | Date | string
  }, "id">

  export type PrivacyPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PrivacyPolicyCountOrderByAggregateInput
    _max?: PrivacyPolicyMaxOrderByAggregateInput
    _min?: PrivacyPolicyMinOrderByAggregateInput
  }

  export type PrivacyPolicyScalarWhereWithAggregatesInput = {
    AND?: PrivacyPolicyScalarWhereWithAggregatesInput | PrivacyPolicyScalarWhereWithAggregatesInput[]
    OR?: PrivacyPolicyScalarWhereWithAggregatesInput[]
    NOT?: PrivacyPolicyScalarWhereWithAggregatesInput | PrivacyPolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrivacyPolicy"> | string
    content?: StringWithAggregatesFilter<"PrivacyPolicy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PrivacyPolicy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PrivacyPolicy"> | Date | string
  }

  export type TermsOfServiceWhereInput = {
    AND?: TermsOfServiceWhereInput | TermsOfServiceWhereInput[]
    OR?: TermsOfServiceWhereInput[]
    NOT?: TermsOfServiceWhereInput | TermsOfServiceWhereInput[]
    id?: StringFilter<"TermsOfService"> | string
    content?: StringFilter<"TermsOfService"> | string
    createdAt?: DateTimeFilter<"TermsOfService"> | Date | string
    updatedAt?: DateTimeFilter<"TermsOfService"> | Date | string
  }

  export type TermsOfServiceOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermsOfServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TermsOfServiceWhereInput | TermsOfServiceWhereInput[]
    OR?: TermsOfServiceWhereInput[]
    NOT?: TermsOfServiceWhereInput | TermsOfServiceWhereInput[]
    content?: StringFilter<"TermsOfService"> | string
    createdAt?: DateTimeFilter<"TermsOfService"> | Date | string
    updatedAt?: DateTimeFilter<"TermsOfService"> | Date | string
  }, "id">

  export type TermsOfServiceOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TermsOfServiceCountOrderByAggregateInput
    _max?: TermsOfServiceMaxOrderByAggregateInput
    _min?: TermsOfServiceMinOrderByAggregateInput
  }

  export type TermsOfServiceScalarWhereWithAggregatesInput = {
    AND?: TermsOfServiceScalarWhereWithAggregatesInput | TermsOfServiceScalarWhereWithAggregatesInput[]
    OR?: TermsOfServiceScalarWhereWithAggregatesInput[]
    NOT?: TermsOfServiceScalarWhereWithAggregatesInput | TermsOfServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TermsOfService"> | string
    content?: StringWithAggregatesFilter<"TermsOfService"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TermsOfService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TermsOfService"> | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsCreateInput = {
    id?: string
    logoText?: string
    loadingText?: string
    showLoadingScreen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingsUncheckedCreateInput = {
    id?: string
    logoText?: string
    loadingText?: string
    showLoadingScreen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    loadingText?: StringFieldUpdateOperationsInput | string
    showLoadingScreen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    loadingText?: StringFieldUpdateOperationsInput | string
    showLoadingScreen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsCreateManyInput = {
    id?: string
    logoText?: string
    loadingText?: string
    showLoadingScreen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    loadingText?: StringFieldUpdateOperationsInput | string
    showLoadingScreen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    loadingText?: StringFieldUpdateOperationsInput | string
    showLoadingScreen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoSettingsCreateInput = {
    id?: string
    metaTitle?: string
    metaDescription?: string
    ogImage?: string
    keywords?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoSettingsUncheckedCreateInput = {
    id?: string
    metaTitle?: string
    metaDescription?: string
    ogImage?: string
    keywords?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: StringFieldUpdateOperationsInput | string
    metaDescription?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: StringFieldUpdateOperationsInput | string
    metaDescription?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoSettingsCreateManyInput = {
    id?: string
    metaTitle?: string
    metaDescription?: string
    ogImage?: string
    keywords?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: StringFieldUpdateOperationsInput | string
    metaDescription?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: StringFieldUpdateOperationsInput | string
    metaDescription?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemCreateInput = {
    id?: string
    label: string
    href: string
    sortOrder?: number
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavigationItemUncheckedCreateInput = {
    id?: string
    label: string
    href: string
    sortOrder?: number
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavigationItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemCreateManyInput = {
    id?: string
    label: string
    href: string
    sortOrder?: number
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavigationItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionCreateInput = {
    id?: string
    tagLine?: string
    title?: string
    highlightWord?: string
    subtitle?: string
    ctaPrimaryText?: string
    ctaPrimaryLink?: string
    ctaSecondaryText?: string
    ctaSecondaryLink?: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroSectionUncheckedCreateInput = {
    id?: string
    tagLine?: string
    title?: string
    highlightWord?: string
    subtitle?: string
    ctaPrimaryText?: string
    ctaPrimaryLink?: string
    ctaSecondaryText?: string
    ctaSecondaryLink?: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagLine?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlightWord?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    ctaPrimaryText?: StringFieldUpdateOperationsInput | string
    ctaPrimaryLink?: StringFieldUpdateOperationsInput | string
    ctaSecondaryText?: StringFieldUpdateOperationsInput | string
    ctaSecondaryLink?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagLine?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlightWord?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    ctaPrimaryText?: StringFieldUpdateOperationsInput | string
    ctaPrimaryLink?: StringFieldUpdateOperationsInput | string
    ctaSecondaryText?: StringFieldUpdateOperationsInput | string
    ctaSecondaryLink?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionCreateManyInput = {
    id?: string
    tagLine?: string
    title?: string
    highlightWord?: string
    subtitle?: string
    ctaPrimaryText?: string
    ctaPrimaryLink?: string
    ctaSecondaryText?: string
    ctaSecondaryLink?: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagLine?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlightWord?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    ctaPrimaryText?: StringFieldUpdateOperationsInput | string
    ctaPrimaryLink?: StringFieldUpdateOperationsInput | string
    ctaSecondaryText?: StringFieldUpdateOperationsInput | string
    ctaSecondaryLink?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagLine?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlightWord?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    ctaPrimaryText?: StringFieldUpdateOperationsInput | string
    ctaPrimaryLink?: StringFieldUpdateOperationsInput | string
    ctaSecondaryText?: StringFieldUpdateOperationsInput | string
    ctaSecondaryLink?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutSectionCreateInput = {
    id?: string
    tagLine?: string
    title?: string
    titleHighlight?: string
    paragraph1?: string
    paragraph2?: string
    founderName?: string
    founderTitle?: string
    founderImage?: string
    stat1Label?: string
    stat1Value?: string
    stat2Label?: string
    stat2Value?: string
    stat3Label?: string
    stat3Value?: string
    stat4Label?: string
    stat4Value?: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutSectionUncheckedCreateInput = {
    id?: string
    tagLine?: string
    title?: string
    titleHighlight?: string
    paragraph1?: string
    paragraph2?: string
    founderName?: string
    founderTitle?: string
    founderImage?: string
    stat1Label?: string
    stat1Value?: string
    stat2Label?: string
    stat2Value?: string
    stat3Label?: string
    stat3Value?: string
    stat4Label?: string
    stat4Value?: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagLine?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleHighlight?: StringFieldUpdateOperationsInput | string
    paragraph1?: StringFieldUpdateOperationsInput | string
    paragraph2?: StringFieldUpdateOperationsInput | string
    founderName?: StringFieldUpdateOperationsInput | string
    founderTitle?: StringFieldUpdateOperationsInput | string
    founderImage?: StringFieldUpdateOperationsInput | string
    stat1Label?: StringFieldUpdateOperationsInput | string
    stat1Value?: StringFieldUpdateOperationsInput | string
    stat2Label?: StringFieldUpdateOperationsInput | string
    stat2Value?: StringFieldUpdateOperationsInput | string
    stat3Label?: StringFieldUpdateOperationsInput | string
    stat3Value?: StringFieldUpdateOperationsInput | string
    stat4Label?: StringFieldUpdateOperationsInput | string
    stat4Value?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagLine?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleHighlight?: StringFieldUpdateOperationsInput | string
    paragraph1?: StringFieldUpdateOperationsInput | string
    paragraph2?: StringFieldUpdateOperationsInput | string
    founderName?: StringFieldUpdateOperationsInput | string
    founderTitle?: StringFieldUpdateOperationsInput | string
    founderImage?: StringFieldUpdateOperationsInput | string
    stat1Label?: StringFieldUpdateOperationsInput | string
    stat1Value?: StringFieldUpdateOperationsInput | string
    stat2Label?: StringFieldUpdateOperationsInput | string
    stat2Value?: StringFieldUpdateOperationsInput | string
    stat3Label?: StringFieldUpdateOperationsInput | string
    stat3Value?: StringFieldUpdateOperationsInput | string
    stat4Label?: StringFieldUpdateOperationsInput | string
    stat4Value?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutSectionCreateManyInput = {
    id?: string
    tagLine?: string
    title?: string
    titleHighlight?: string
    paragraph1?: string
    paragraph2?: string
    founderName?: string
    founderTitle?: string
    founderImage?: string
    stat1Label?: string
    stat1Value?: string
    stat2Label?: string
    stat2Value?: string
    stat3Label?: string
    stat3Value?: string
    stat4Label?: string
    stat4Value?: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagLine?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleHighlight?: StringFieldUpdateOperationsInput | string
    paragraph1?: StringFieldUpdateOperationsInput | string
    paragraph2?: StringFieldUpdateOperationsInput | string
    founderName?: StringFieldUpdateOperationsInput | string
    founderTitle?: StringFieldUpdateOperationsInput | string
    founderImage?: StringFieldUpdateOperationsInput | string
    stat1Label?: StringFieldUpdateOperationsInput | string
    stat1Value?: StringFieldUpdateOperationsInput | string
    stat2Label?: StringFieldUpdateOperationsInput | string
    stat2Value?: StringFieldUpdateOperationsInput | string
    stat3Label?: StringFieldUpdateOperationsInput | string
    stat3Value?: StringFieldUpdateOperationsInput | string
    stat4Label?: StringFieldUpdateOperationsInput | string
    stat4Value?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagLine?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleHighlight?: StringFieldUpdateOperationsInput | string
    paragraph1?: StringFieldUpdateOperationsInput | string
    paragraph2?: StringFieldUpdateOperationsInput | string
    founderName?: StringFieldUpdateOperationsInput | string
    founderTitle?: StringFieldUpdateOperationsInput | string
    founderImage?: StringFieldUpdateOperationsInput | string
    stat1Label?: StringFieldUpdateOperationsInput | string
    stat1Value?: StringFieldUpdateOperationsInput | string
    stat2Label?: StringFieldUpdateOperationsInput | string
    stat2Value?: StringFieldUpdateOperationsInput | string
    stat3Label?: StringFieldUpdateOperationsInput | string
    stat3Value?: StringFieldUpdateOperationsInput | string
    stat4Label?: StringFieldUpdateOperationsInput | string
    stat4Value?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceItemCreateInput = {
    id?: string
    icon?: string
    title: string
    description: string
    sortOrder?: number
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceItemUncheckedCreateInput = {
    id?: string
    icon?: string
    title: string
    description: string
    sortOrder?: number
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceItemCreateManyInput = {
    id?: string
    icon?: string
    title: string
    description: string
    sortOrder?: number
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    title: string
    slug: string
    shortDescription: string
    fullDescription?: string
    coverImage?: string
    genre?: string
    appStoreUrl?: string
    googlePlayUrl?: string
    webUrl?: string
    steamUrl?: string
    featured?: boolean
    published?: boolean
    releaseDate?: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: GameImageCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    shortDescription: string
    fullDescription?: string
    coverImage?: string
    genre?: string
    appStoreUrl?: string
    googlePlayUrl?: string
    webUrl?: string
    steamUrl?: string
    featured?: boolean
    published?: boolean
    releaseDate?: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: GameImageUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    appStoreUrl?: StringFieldUpdateOperationsInput | string
    googlePlayUrl?: StringFieldUpdateOperationsInput | string
    webUrl?: StringFieldUpdateOperationsInput | string
    steamUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    releaseDate?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GameImageUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    appStoreUrl?: StringFieldUpdateOperationsInput | string
    googlePlayUrl?: StringFieldUpdateOperationsInput | string
    webUrl?: StringFieldUpdateOperationsInput | string
    steamUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    releaseDate?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GameImageUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    title: string
    slug: string
    shortDescription: string
    fullDescription?: string
    coverImage?: string
    genre?: string
    appStoreUrl?: string
    googlePlayUrl?: string
    webUrl?: string
    steamUrl?: string
    featured?: boolean
    published?: boolean
    releaseDate?: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    appStoreUrl?: StringFieldUpdateOperationsInput | string
    googlePlayUrl?: StringFieldUpdateOperationsInput | string
    webUrl?: StringFieldUpdateOperationsInput | string
    steamUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    releaseDate?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    appStoreUrl?: StringFieldUpdateOperationsInput | string
    googlePlayUrl?: StringFieldUpdateOperationsInput | string
    webUrl?: StringFieldUpdateOperationsInput | string
    steamUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    releaseDate?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameImageCreateInput = {
    id?: string
    url: string
    alt?: string
    sortOrder?: number
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutImagesInput
  }

  export type GameImageUncheckedCreateInput = {
    id?: string
    url: string
    alt?: string
    sortOrder?: number
    gameId: string
    createdAt?: Date | string
  }

  export type GameImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutImagesNestedInput
  }

  export type GameImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameImageCreateManyInput = {
    id?: string
    url: string
    alt?: string
    sortOrder?: number
    gameId: string
    createdAt?: Date | string
  }

  export type GameImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateInput = {
    id?: string
    email?: string
    linkedin?: string
    linkedinUrl?: string
    website?: string
    websiteUrl?: string
    location?: string
    formEnabled?: boolean
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUncheckedCreateInput = {
    id?: string
    email?: string
    linkedin?: string
    linkedinUrl?: string
    website?: string
    websiteUrl?: string
    location?: string
    formEnabled?: boolean
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    formEnabled?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    formEnabled?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateManyInput = {
    id?: string
    email?: string
    linkedin?: string
    linkedinUrl?: string
    website?: string
    websiteUrl?: string
    location?: string
    formEnabled?: boolean
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    formEnabled?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    formEnabled?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionCreateInput = {
    id?: string
    name: string
    email: string
    projectType?: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type ContactSubmissionUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    projectType?: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type ContactSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    projectType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    projectType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionCreateManyInput = {
    id?: string
    name: string
    email: string
    projectType?: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type ContactSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    projectType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    projectType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateInput = {
    id?: string
    platform: string
    url: string
    icon?: string
    sortOrder?: number
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUncheckedCreateInput = {
    id?: string
    platform: string
    url: string
    icon?: string
    sortOrder?: number
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateManyInput = {
    id?: string
    platform: string
    url: string
    icon?: string
    sortOrder?: number
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterSettingsCreateInput = {
    id?: string
    description?: string
    copyrightText?: string
    bottomText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterSettingsUncheckedCreateInput = {
    id?: string
    description?: string
    copyrightText?: string
    bottomText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    copyrightText?: StringFieldUpdateOperationsInput | string
    bottomText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    copyrightText?: StringFieldUpdateOperationsInput | string
    bottomText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterSettingsCreateManyInput = {
    id?: string
    description?: string
    copyrightText?: string
    bottomText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    copyrightText?: StringFieldUpdateOperationsInput | string
    bottomText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    copyrightText?: StringFieldUpdateOperationsInput | string
    bottomText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivacyPolicyCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivacyPolicyUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivacyPolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivacyPolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivacyPolicyCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrivacyPolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivacyPolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsOfServiceCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermsOfServiceUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermsOfServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsOfServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsOfServiceCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermsOfServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsOfServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SiteSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    logoText?: SortOrder
    loadingText?: SortOrder
    showLoadingScreen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    logoText?: SortOrder
    loadingText?: SortOrder
    showLoadingScreen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    logoText?: SortOrder
    loadingText?: SortOrder
    showLoadingScreen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SeoSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type NavigationItemCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    href?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type NavigationItemMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    href?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    href?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemSumOrderByAggregateInput = {
    sortOrder?: SortOrder
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

  export type HeroSectionCountOrderByAggregateInput = {
    id?: SortOrder
    tagLine?: SortOrder
    title?: SortOrder
    highlightWord?: SortOrder
    subtitle?: SortOrder
    ctaPrimaryText?: SortOrder
    ctaPrimaryLink?: SortOrder
    ctaSecondaryText?: SortOrder
    ctaSecondaryLink?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    tagLine?: SortOrder
    title?: SortOrder
    highlightWord?: SortOrder
    subtitle?: SortOrder
    ctaPrimaryText?: SortOrder
    ctaPrimaryLink?: SortOrder
    ctaSecondaryText?: SortOrder
    ctaSecondaryLink?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionMinOrderByAggregateInput = {
    id?: SortOrder
    tagLine?: SortOrder
    title?: SortOrder
    highlightWord?: SortOrder
    subtitle?: SortOrder
    ctaPrimaryText?: SortOrder
    ctaPrimaryLink?: SortOrder
    ctaSecondaryText?: SortOrder
    ctaSecondaryLink?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutSectionCountOrderByAggregateInput = {
    id?: SortOrder
    tagLine?: SortOrder
    title?: SortOrder
    titleHighlight?: SortOrder
    paragraph1?: SortOrder
    paragraph2?: SortOrder
    founderName?: SortOrder
    founderTitle?: SortOrder
    founderImage?: SortOrder
    stat1Label?: SortOrder
    stat1Value?: SortOrder
    stat2Label?: SortOrder
    stat2Value?: SortOrder
    stat3Label?: SortOrder
    stat3Value?: SortOrder
    stat4Label?: SortOrder
    stat4Value?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    tagLine?: SortOrder
    title?: SortOrder
    titleHighlight?: SortOrder
    paragraph1?: SortOrder
    paragraph2?: SortOrder
    founderName?: SortOrder
    founderTitle?: SortOrder
    founderImage?: SortOrder
    stat1Label?: SortOrder
    stat1Value?: SortOrder
    stat2Label?: SortOrder
    stat2Value?: SortOrder
    stat3Label?: SortOrder
    stat3Value?: SortOrder
    stat4Label?: SortOrder
    stat4Value?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutSectionMinOrderByAggregateInput = {
    id?: SortOrder
    tagLine?: SortOrder
    title?: SortOrder
    titleHighlight?: SortOrder
    paragraph1?: SortOrder
    paragraph2?: SortOrder
    founderName?: SortOrder
    founderTitle?: SortOrder
    founderImage?: SortOrder
    stat1Label?: SortOrder
    stat1Value?: SortOrder
    stat2Label?: SortOrder
    stat2Value?: SortOrder
    stat3Label?: SortOrder
    stat3Value?: SortOrder
    stat4Label?: SortOrder
    stat4Value?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceItemAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ServiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceItemSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type GameImageListRelationFilter = {
    every?: GameImageWhereInput
    some?: GameImageWhereInput
    none?: GameImageWhereInput
  }

  export type GameImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    coverImage?: SortOrder
    genre?: SortOrder
    appStoreUrl?: SortOrder
    googlePlayUrl?: SortOrder
    webUrl?: SortOrder
    steamUrl?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    releaseDate?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    coverImage?: SortOrder
    genre?: SortOrder
    appStoreUrl?: SortOrder
    googlePlayUrl?: SortOrder
    webUrl?: SortOrder
    steamUrl?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    releaseDate?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    coverImage?: SortOrder
    genre?: SortOrder
    appStoreUrl?: SortOrder
    googlePlayUrl?: SortOrder
    webUrl?: SortOrder
    steamUrl?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    releaseDate?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type GameImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sortOrder?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
  }

  export type GameImageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type GameImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sortOrder?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
  }

  export type GameImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sortOrder?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
  }

  export type GameImageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    linkedin?: SortOrder
    linkedinUrl?: SortOrder
    website?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    formEnabled?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    linkedin?: SortOrder
    linkedinUrl?: SortOrder
    website?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    formEnabled?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    linkedin?: SortOrder
    linkedinUrl?: SortOrder
    website?: SortOrder
    websiteUrl?: SortOrder
    location?: SortOrder
    formEnabled?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    projectType?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    projectType?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    projectType?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialLinkCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinkAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type SocialLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinkMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinkSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type FooterSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    copyrightText?: SortOrder
    bottomText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    copyrightText?: SortOrder
    bottomText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    copyrightText?: SortOrder
    bottomText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivacyPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivacyPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivacyPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermsOfServiceCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermsOfServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermsOfServiceMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameImageCreateNestedManyWithoutGameInput = {
    create?: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput> | GameImageCreateWithoutGameInput[] | GameImageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameImageCreateOrConnectWithoutGameInput | GameImageCreateOrConnectWithoutGameInput[]
    createMany?: GameImageCreateManyGameInputEnvelope
    connect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
  }

  export type GameImageUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput> | GameImageCreateWithoutGameInput[] | GameImageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameImageCreateOrConnectWithoutGameInput | GameImageCreateOrConnectWithoutGameInput[]
    createMany?: GameImageCreateManyGameInputEnvelope
    connect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
  }

  export type GameImageUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput> | GameImageCreateWithoutGameInput[] | GameImageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameImageCreateOrConnectWithoutGameInput | GameImageCreateOrConnectWithoutGameInput[]
    upsert?: GameImageUpsertWithWhereUniqueWithoutGameInput | GameImageUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameImageCreateManyGameInputEnvelope
    set?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    disconnect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    delete?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    connect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    update?: GameImageUpdateWithWhereUniqueWithoutGameInput | GameImageUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameImageUpdateManyWithWhereWithoutGameInput | GameImageUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameImageScalarWhereInput | GameImageScalarWhereInput[]
  }

  export type GameImageUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput> | GameImageCreateWithoutGameInput[] | GameImageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameImageCreateOrConnectWithoutGameInput | GameImageCreateOrConnectWithoutGameInput[]
    upsert?: GameImageUpsertWithWhereUniqueWithoutGameInput | GameImageUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameImageCreateManyGameInputEnvelope
    set?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    disconnect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    delete?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    connect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    update?: GameImageUpdateWithWhereUniqueWithoutGameInput | GameImageUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameImageUpdateManyWithWhereWithoutGameInput | GameImageUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameImageScalarWhereInput | GameImageScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutImagesInput = {
    create?: XOR<GameCreateWithoutImagesInput, GameUncheckedCreateWithoutImagesInput>
    connectOrCreate?: GameCreateOrConnectWithoutImagesInput
    connect?: GameWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<GameCreateWithoutImagesInput, GameUncheckedCreateWithoutImagesInput>
    connectOrCreate?: GameCreateOrConnectWithoutImagesInput
    upsert?: GameUpsertWithoutImagesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutImagesInput, GameUpdateWithoutImagesInput>, GameUncheckedUpdateWithoutImagesInput>
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

  export type GameImageCreateWithoutGameInput = {
    id?: string
    url: string
    alt?: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type GameImageUncheckedCreateWithoutGameInput = {
    id?: string
    url: string
    alt?: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type GameImageCreateOrConnectWithoutGameInput = {
    where: GameImageWhereUniqueInput
    create: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput>
  }

  export type GameImageCreateManyGameInputEnvelope = {
    data: GameImageCreateManyGameInput | GameImageCreateManyGameInput[]
  }

  export type GameImageUpsertWithWhereUniqueWithoutGameInput = {
    where: GameImageWhereUniqueInput
    update: XOR<GameImageUpdateWithoutGameInput, GameImageUncheckedUpdateWithoutGameInput>
    create: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput>
  }

  export type GameImageUpdateWithWhereUniqueWithoutGameInput = {
    where: GameImageWhereUniqueInput
    data: XOR<GameImageUpdateWithoutGameInput, GameImageUncheckedUpdateWithoutGameInput>
  }

  export type GameImageUpdateManyWithWhereWithoutGameInput = {
    where: GameImageScalarWhereInput
    data: XOR<GameImageUpdateManyMutationInput, GameImageUncheckedUpdateManyWithoutGameInput>
  }

  export type GameImageScalarWhereInput = {
    AND?: GameImageScalarWhereInput | GameImageScalarWhereInput[]
    OR?: GameImageScalarWhereInput[]
    NOT?: GameImageScalarWhereInput | GameImageScalarWhereInput[]
    id?: StringFilter<"GameImage"> | string
    url?: StringFilter<"GameImage"> | string
    alt?: StringFilter<"GameImage"> | string
    sortOrder?: IntFilter<"GameImage"> | number
    gameId?: StringFilter<"GameImage"> | string
    createdAt?: DateTimeFilter<"GameImage"> | Date | string
  }

  export type GameCreateWithoutImagesInput = {
    id?: string
    title: string
    slug: string
    shortDescription: string
    fullDescription?: string
    coverImage?: string
    genre?: string
    appStoreUrl?: string
    googlePlayUrl?: string
    webUrl?: string
    steamUrl?: string
    featured?: boolean
    published?: boolean
    releaseDate?: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    slug: string
    shortDescription: string
    fullDescription?: string
    coverImage?: string
    genre?: string
    appStoreUrl?: string
    googlePlayUrl?: string
    webUrl?: string
    steamUrl?: string
    featured?: boolean
    published?: boolean
    releaseDate?: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutImagesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutImagesInput, GameUncheckedCreateWithoutImagesInput>
  }

  export type GameUpsertWithoutImagesInput = {
    update: XOR<GameUpdateWithoutImagesInput, GameUncheckedUpdateWithoutImagesInput>
    create: XOR<GameCreateWithoutImagesInput, GameUncheckedCreateWithoutImagesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutImagesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutImagesInput, GameUncheckedUpdateWithoutImagesInput>
  }

  export type GameUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    appStoreUrl?: StringFieldUpdateOperationsInput | string
    googlePlayUrl?: StringFieldUpdateOperationsInput | string
    webUrl?: StringFieldUpdateOperationsInput | string
    steamUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    releaseDate?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    fullDescription?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    appStoreUrl?: StringFieldUpdateOperationsInput | string
    googlePlayUrl?: StringFieldUpdateOperationsInput | string
    webUrl?: StringFieldUpdateOperationsInput | string
    steamUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    releaseDate?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameImageCreateManyGameInput = {
    id?: string
    url: string
    alt?: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type GameImageUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameImageUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameImageUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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