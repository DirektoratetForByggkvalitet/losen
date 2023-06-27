import type { Meta, StoryObj } from '@storybook/react';
import { Grid, ToggleButton } from 'losen/primitives';
import { Wizard } from 'losen/primitives/Wizard';

const meta: Meta<typeof Grid.Grid> = {
  component: Grid.Grid,
};

export default meta;
type Story = StoryObj<typeof Grid.Grid>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <Wizard>
          <Story />
      </Wizard>
    ),
  ],
  render: () => <Grid.Grid>
      <ToggleButton type="button">
        Vis alle steg
      </ToggleButton>
    <Grid.Nav>
      <Grid.NavSection large>Navigation</Grid.NavSection>
    </Grid.Nav>
    <Grid.FocusWrapper>
      <Grid.Main>
        <Grid.NavSection xLarge>
           Main content
        </Grid.NavSection>
      </Grid.Main>
    </Grid.FocusWrapper>
  </Grid.Grid>
};
