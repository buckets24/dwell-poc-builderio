"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import Avatar from "./components/Builder/Avatar/Avatar";
import Cta from "./components/Builder/Cta";
import Hero from "./components/Builder/Hero/Hero";
import PageHeader from "./components/Builder/PageHeader";
import LocaleLinks from "./components/Builder/Links/Locales";
import FeatureCard from "./components/Builder/FeatureCard/FeatureCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const PageHeaderChildren = withChildren(PageHeader);

Builder.registerComponent(Avatar, {
  name: "Avatar",
  noWrap: true,
  inputs: [
    {
      name: "src",
      type: "string",
    },
    {
      name: "alt",
      type: "string",
    },
  ],
});

Builder.registerComponent(Cta, {
  name: "Cta",
  noWrap: true,
  inputs: [
    {
      name: "url",
      type: "string",
    },
    {
      name: "label",
      type: "string",
    },
    {
      name: "bgcolor",
      type: "string",
    },
    {
      name: "textcolor",
      type: "string",
    },
  ],
});

Builder.registerComponent(PageHeaderChildren, {
  name: "PageHeader",
  noWrap: true,
  inputs: [
    {
      name: 'logo',
      type: 'file',
      allowedFileTypes: ["image"],
      defaultValue: null,
      required: true,
      description: 'Select an image from the assets library.',
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Heading',
        options: {
          text: 'You can edit the contents of this example!',
          type: 'h4',
        },
      },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Text',
        options: {
          text: 'You can edit this too. Or duplicate it. Or delete it!',
        },
      },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Button',
        options: {
          text: 'Hello',
          type: 'outlined',
        },
      },
      responsiveStyles: {
        large: {
          marginTop: '20px',
        },
      },
    },
  ]
});

Builder.registerComponent(Hero, {
  name: "Hero",
  noWrap: true,
  inputs: [
    {
      name: 'imageSource',
      type: 'file',
      allowedFileTypes: ["image"],
      defaultValue: null,
      required: true,
      description: 'Select an image from the assets library.',
    },
  ],
});

Builder.registerComponent(LocaleLinks, {
  name: "LocaleLinks",
  noWrap: true,
  inputs: [
    {
      name: "label",
      type: "string",
    },
    {
      name: "url",
      type: "string",
    },
    {
      name: "locales",
      type: "string"
    }
  ]
})

Builder.registerComponent(FeatureCard, {
  name: "FeatureCard",
  noWrap: true,
  inputs: [
    {
      name: 'bgImage',
      type: 'file',
      allowedFileTypes: ["image"],
      defaultValue: null,
      required: true,
      description: 'Select an image from the assets library.',
    },
    {
      name: "alt",
      type: "string",
    },
    {
      name: "minWidth",
      type: "string"
    },
    {
      name: "minHeight",
      type: "string"
    },
    {
      name: "align",
      type: "string"
    },
    {
      name: "title",
      type: "string"
    },
    {
      name: "subtitle",
      type: "string"
    },
    {
      name: "textColor",
      type: "string",
    }
  ]
})