// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnalogClockView } from "./AnalogClockView";

export default {
  title: "AnalogClockView",
  component: AnalogClockView,
  argTypes: {
    hours: {
      control: {
        type: "range",
        min: 1,
        max: 12,
        step: 1,
      },
    },
    minutes: {
      control: {
        type: "range",
        min: 0,
        max: 59,
        step: 1,
      },
    },
    seconds: {
      control: {
        type: "range",
        min: 0,
        max: 59,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof AnalogClockView>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AnalogClockView> = (args) => (
  <AnalogClockView {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  hours: 10,
  minutes: 12,
  seconds: 35,
};
