// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: seYsnBL1P3AiXaFGNEMUUM
// Component: 0FMc41XIUA0C

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

import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: seYsnBL1P3AiXaFGNEMUUM/projectcss
import sty from "./PlasmicMenuFeature.module.css"; // plasmic-import: 0FMc41XIUA0C/css

import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: jRHPVqrBy9SV/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: HAnMzYJg5d76/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: WvR12xDIGLgz/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: 1eqoHYLc_fOB/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: fEKKJ-2F5BD1/icon
import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: JK4sPT7lqUH1/icon
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: 8GqB7Ju9fvrK/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: 5Kdxmn_uOBnI/icon

createPlasmicElementProxy;

export type PlasmicMenuFeature__VariantMembers = {};
export type PlasmicMenuFeature__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenuFeature__VariantsArgs;
export const PlasmicMenuFeature__VariantProps = new Array<VariantPropType>();

export type PlasmicMenuFeature__ArgsType = {};
type ArgPropType = keyof PlasmicMenuFeature__ArgsType;
export const PlasmicMenuFeature__ArgProps = new Array<ArgPropType>();

export type PlasmicMenuFeature__OverridesType = {
  root?: Flex__<"div">;
  btnReservation?: Flex__<"div">;
  btnAnnouncement?: Flex__<"div">;
  btnCalculation?: Flex__<"div">;
  btnOnlinepayment?: Flex__<"div">;
  btnApi?: Flex__<"div">;
  btnEhr?: Flex__<"div">;
  btnSpecialsite?: Flex__<"div">;
  btnDashboard?: Flex__<"div">;
};

export interface DefaultMenuFeatureProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenuFeature__RenderFunc(props: {
  variants: PlasmicMenuFeature__VariantsArgs;
  args: PlasmicMenuFeature__ArgsType;
  overrides: PlasmicMenuFeature__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
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
      <div
        data-plasmic-name={"btnReservation"}
        data-plasmic-override={overrides.btnReservation}
        className={classNames(projectcss.all, sty.btnReservation)}
      >
        <Icon3Icon
          className={classNames(projectcss.all, sty.svg__xpYm1)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ySbct
          )}
        >
          {"\u0646\u0648\u0628\u062a \u062f\u0647\u06cc"}
        </div>
      </div>
      <div
        data-plasmic-name={"btnAnnouncement"}
        data-plasmic-override={overrides.btnAnnouncement}
        className={classNames(projectcss.all, sty.btnAnnouncement)}
      >
        <Icon5Icon
          className={classNames(projectcss.all, sty.svg__had1)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___1JIq
          )}
        >
          {"\u0627\u0639\u0644\u0627\u0646\u0627\u062a"}
        </div>
      </div>
      <div
        data-plasmic-name={"btnCalculation"}
        data-plasmic-override={overrides.btnCalculation}
        className={classNames(projectcss.all, sty.btnCalculation)}
      >
        <Icon6Icon
          className={classNames(projectcss.all, sty.svg__zgzUs)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__pSu8H
          )}
        >
          {"\u0645\u062d\u0627\u0633\u0628\u0627\u062a"}
        </div>
      </div>
      <div
        data-plasmic-name={"btnOnlinepayment"}
        data-plasmic-override={overrides.btnOnlinepayment}
        className={classNames(projectcss.all, sty.btnOnlinepayment)}
      >
        <Icon7Icon
          className={classNames(projectcss.all, sty.svg__h09D)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___7Oc2U
          )}
        >
          {
            "\u067e\u0631\u062f\u0627\u062e\u062a \u0622\u0646\u0644\u0627\u06cc\u0646"
          }
        </div>
      </div>
      <div
        data-plasmic-name={"btnApi"}
        data-plasmic-override={overrides.btnApi}
        className={classNames(projectcss.all, sty.btnApi)}
      >
        <Icon8Icon
          className={classNames(projectcss.all, sty.svg___1HEtt)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gedTh
          )}
        >
          {
            "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0633\u0627\u06cc\u0631 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0647\u0627"
          }
        </div>
      </div>
      <div
        data-plasmic-name={"btnEhr"}
        data-plasmic-override={overrides.btnEhr}
        className={classNames(projectcss.all, sty.btnEhr)}
      >
        <Icon9Icon
          className={classNames(projectcss.all, sty.svg__tyRbB)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rAOdo
          )}
        >
          {
            "\u067e\u0631\u0648\u0646\u062f\u0647 \u0628\u06cc\u0645\u0627\u0631"
          }
        </div>
      </div>
      <div
        data-plasmic-name={"btnSpecialsite"}
        data-plasmic-override={overrides.btnSpecialsite}
        className={classNames(projectcss.all, sty.btnSpecialsite)}
      >
        <Icon12Icon
          className={classNames(projectcss.all, sty.svg__iecLz)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___94Fce
          )}
        >
          {
            "\u0633\u0627\u06cc\u062a \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u0645\u0631\u06a9\u0632"
          }
        </div>
      </div>
      <div
        data-plasmic-name={"btnDashboard"}
        data-plasmic-override={overrides.btnDashboard}
        className={classNames(projectcss.all, sty.btnDashboard)}
      >
        <Icon10Icon
          className={classNames(projectcss.all, sty.svg__aIiSf)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__vndoZ
          )}
        >
          {
            "\u062f \u0627\u0634\u0628\u0648\u0631\u062f \u06af\u0632\u0627\u0631\u0634\u0627\u062a \u0645\u062f\u06cc\u0631\u06cc\u062a\u06cc"
          }
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "btnReservation",
    "btnAnnouncement",
    "btnCalculation",
    "btnOnlinepayment",
    "btnApi",
    "btnEhr",
    "btnSpecialsite",
    "btnDashboard"
  ],
  btnReservation: ["btnReservation"],
  btnAnnouncement: ["btnAnnouncement"],
  btnCalculation: ["btnCalculation"],
  btnOnlinepayment: ["btnOnlinepayment"],
  btnApi: ["btnApi"],
  btnEhr: ["btnEhr"],
  btnSpecialsite: ["btnSpecialsite"],
  btnDashboard: ["btnDashboard"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  btnReservation: "div";
  btnAnnouncement: "div";
  btnCalculation: "div";
  btnOnlinepayment: "div";
  btnApi: "div";
  btnEhr: "div";
  btnSpecialsite: "div";
  btnDashboard: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuFeature__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuFeature__VariantsArgs;
    args?: PlasmicMenuFeature__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuFeature__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenuFeature__ArgsType,
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
          internalArgPropNames: PlasmicMenuFeature__ArgProps,
          internalVariantPropNames: PlasmicMenuFeature__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuFeature__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuFeature";
  } else {
    func.displayName = `PlasmicMenuFeature.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuFeature = Object.assign(
  // Top-level PlasmicMenuFeature renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    btnReservation: makeNodeComponent("btnReservation"),
    btnAnnouncement: makeNodeComponent("btnAnnouncement"),
    btnCalculation: makeNodeComponent("btnCalculation"),
    btnOnlinepayment: makeNodeComponent("btnOnlinepayment"),
    btnApi: makeNodeComponent("btnApi"),
    btnEhr: makeNodeComponent("btnEhr"),
    btnSpecialsite: makeNodeComponent("btnSpecialsite"),
    btnDashboard: makeNodeComponent("btnDashboard"),

    // Metadata about props expected for PlasmicMenuFeature
    internalVariantProps: PlasmicMenuFeature__VariantProps,
    internalArgProps: PlasmicMenuFeature__ArgProps
  }
);

export default PlasmicMenuFeature;
/* prettier-ignore-end */
