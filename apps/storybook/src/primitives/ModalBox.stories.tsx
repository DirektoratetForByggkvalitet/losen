import type { Meta, StoryObj } from '@storybook/react';
import ModalBox from 'losen/primitives/ModalBox'; 
import { H1 } from 'losen/primitives/Heading';
import { Lead } from 'losen/primitives/Paragraphs';
import { MainButton, SecondaryButton } from 'losen/primitives/Button'; 

const meta: Meta<typeof ModalBox> = {
  component: ModalBox,
};

export default meta;
type Story = StoryObj<typeof ModalBox>;


export const Default: Story = {
  render: () => <ModalBox>
        <H1>Vil du starte på nytt?</H1>
        <Lead>
          Veiviseren husker svarene fra ditt forrige besøk.
        </Lead>
        <MainButton type="button">
          Fortsett
        </MainButton>
        <SecondaryButton type="button">
          Start på nytt
        </SecondaryButton>
      </ModalBox>
};
      