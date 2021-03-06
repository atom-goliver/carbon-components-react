import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, select, text } from '@storybook/addon-knobs';
import Tag, { types as typesList } from '../Tag';
import TagSkeleton from '../Tag/Tag.Skeleton';

const types = typesList.reduce(
  (o, type) => ({
    ...o,
    [`${type} (${type})`]: type,
  }),
  {}
);

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <div>
        <Tag
          className="some-class"
          type={select('Tag type (type)', types, 'experimental')}>
          {text('Content (children)', '')}
        </Tag>
      </div>
    ),
    {
      info: {
        text: `
            Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.
            The example below shows how the Tag component can be used. Each type has a default message describing the type,
            but a custom message can also be applied.
          `,
      },
    }
  )
  .add(
    'skeleton',
    () => (
      <div>
        <TagSkeleton />
      </div>
    ),
    {
      info: {
        text: `
          Placeholder skeleton state to use when content is loading.
          `,
      },
    }
  );
