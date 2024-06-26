// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: seYsnBL1P3AiXaFGNEMUUM
// Component: g64VYoCfAKTS

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import TextInput from "../../TextInput"; // plasmic-import: ZdzGQGZE4mJ7/component
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import Avatar from "../../Avatar"; // plasmic-import: 3i84rYjQRrs4/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: seYsnBL1P3AiXaFGNEMUUM/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: g64VYoCfAKTS/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: 2VY19-xmXXIp/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 22TzxIplc3cE/icon
import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: mWyKgupBp1Cr/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
  section?: Flex__<"section">;
  nameInput?: Flex__<typeof TextInput>;
  button?: Flex__<typeof Button>;
  getList?: Flex__<typeof DataFetcher>;
  svg?: Flex__<"svg">;
  avatar?: Flex__<typeof Avatar>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "count",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "user",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "nameInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_fragment_design_system_css.plasmic_tokens,
            sty.root
          )}
        >
          <SideEffect
            data-plasmic-name={"sideEffect"}
            data-plasmic-override={overrides.sideEffect}
            className={classNames("__wab_instance", sty.sideEffect)}
            onMount={async () => {
              const $steps = {};

              $steps["getCurrentUser"] = true
                ? (() => {
                    const actionArgs = {
                      args: [
                        undefined,
                        "https://apigw.paziresh24.com/v1/auth/me"
                      ]
                    };
                    return $globalActions["Fragment.apiRequest"]?.apply(null, [
                      ...actionArgs.args
                    ]);
                  })()
                : undefined;
              if (
                $steps["getCurrentUser"] != null &&
                typeof $steps["getCurrentUser"] === "object" &&
                typeof $steps["getCurrentUser"].then === "function"
              ) {
                $steps["getCurrentUser"] = await $steps["getCurrentUser"];
              }

              $steps["updateUser"] =
                $steps.getCurrentUser.status == 200
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["user"]
                        },
                        operation: 0,
                        value: $steps.getCurrentUser.data.users[0]
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
              if (
                $steps["updateUser"] != null &&
                typeof $steps["updateUser"] === "object" &&
                typeof $steps["updateUser"].then === "function"
              ) {
                $steps["updateUser"] = await $steps["updateUser"];
              }

              $steps[
                "goToHttpswwwpaziresh24ComloginredirectUrlhttpspricingpaziresh24Com"
              ] =
                $steps.getCurrentUser.status != 200
                  ? (() => {
                      const actionArgs = {
                        destination:
                          "https://www.paziresh24.com/login/?redirect_url=https://pricing.paziresh24.com/"
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
              if (
                $steps[
                  "goToHttpswwwpaziresh24ComloginredirectUrlhttpspricingpaziresh24Com"
                ] != null &&
                typeof $steps[
                  "goToHttpswwwpaziresh24ComloginredirectUrlhttpspricingpaziresh24Com"
                ] === "object" &&
                typeof $steps[
                  "goToHttpswwwpaziresh24ComloginredirectUrlhttpspricingpaziresh24Com"
                ].then === "function"
              ) {
                $steps[
                  "goToHttpswwwpaziresh24ComloginredirectUrlhttpspricingpaziresh24Com"
                ] = await $steps[
                  "goToHttpswwwpaziresh24ComloginredirectUrlhttpspricingpaziresh24Com"
                ];
              }
            }}
          />

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rL9L8
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $state.user.name;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            <TextInput
              data-plasmic-name={"nameInput"}
              data-plasmic-override={overrides.nameInput}
              className={classNames("__wab_instance", sty.nameInput)}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["nameInput", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              value={
                generateStateValueProp($state, ["nameInput", "value"]) ?? ""
              }
            />

            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              children2={"\u0622\u067e\u062f\u06cc\u062a"}
              className={classNames("__wab_instance", sty.button)}
              onClick={async event => {
                const $steps = {};

                $steps["invokeGlobalAction"] = true
                  ? (() => {
                      const actionArgs = {
                        args: [
                          "PATCH",
                          (() => {
                            try {
                              return (
                                "https://apigw.paziresh24.com/v1/users/" +
                                $state.user.id
                              );
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })(),
                          undefined,
                          (() => {
                            try {
                              return {
                                name: $state.nameInput.value
                              };
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()
                        ]
                      };
                      return $globalActions["Fragment.apiRequest"]?.apply(
                        null,
                        [...actionArgs.args]
                      );
                    })()
                  : undefined;
                if (
                  $steps["invokeGlobalAction"] != null &&
                  typeof $steps["invokeGlobalAction"] === "object" &&
                  typeof $steps["invokeGlobalAction"].then === "function"
                ) {
                  $steps["invokeGlobalAction"] = await $steps[
                    "invokeGlobalAction"
                  ];
                }
              }}
            />

            <DataFetcher
              data-plasmic-name={"getList"}
              data-plasmic-override={overrides.getList}
              className={classNames("__wab_instance", sty.getList)}
              dataName={"response"}
              errorDisplay={
                <DataCtxReader__>
                  {$ctx => "Error fetching data"}
                </DataCtxReader__>
              }
              errorName={"fetchError"}
              headers={{
                "Content-Type": "application/json",
                Accept: "application/json"
              }}
              loadingDisplay={
                <DataCtxReader__>
                  {$ctx => (
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__aDnE)}
                    >
                      <Icon2Icon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__zUjoy
                        )}
                      >
                        {"\u0635\u0628\u0631 \u06a9\u0646\u06cc\u062f..."}
                      </div>
                    </Stack__>
                  )}
                </DataCtxReader__>
              }
              method={"GET"}
              noLayout={false}
              previewSpinner={false}
              url={"https://api.github.com/users/plasmicapp/repos"}
            >
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__bIblx)}
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $ctx.response;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__elbUa
                          )}
                          key={currentIndex}
                        >
                          <Avatar
                            data-plasmic-name={"avatar"}
                            data-plasmic-override={overrides.avatar}
                            className={classNames("__wab_instance", sty.avatar)}
                            src={"https://avatar.iran.liara.run/public/43"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__yctst
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.name;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </DataCtxReader__>
            </DataFetcher>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sideEffect",
    "section",
    "nameInput",
    "button",
    "getList",
    "svg",
    "avatar"
  ],
  sideEffect: ["sideEffect"],
  section: ["section", "nameInput", "button", "getList", "svg", "avatar"],
  nameInput: ["nameInput"],
  button: ["button"],
  getList: ["getList", "svg", "avatar"],
  svg: ["svg"],
  avatar: ["avatar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
  section: "section";
  nameInput: typeof TextInput;
  button: typeof Button;
  getList: typeof DataFetcher;
  svg: "svg";
  avatar: typeof Avatar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),
    section: makeNodeComponent("section"),
    nameInput: makeNodeComponent("nameInput"),
    button: makeNodeComponent("button"),
    getList: makeNodeComponent("getList"),
    svg: makeNodeComponent("svg"),
    avatar: makeNodeComponent("avatar"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
