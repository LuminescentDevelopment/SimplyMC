import { component$ } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';

import {
  inlineTranslate as it,
  Speak,
  useSpeakContext,
} from 'qwik-speak';

export const onGet: RequestHandler = ({ cookie }) => {
  cookie.set('telemetry', 'false', {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  });
};

export default component$(() => {
  const ctx = useSpeakContext();
  return (
    <section class="flex mx-auto max-w-7xl px-6 justify-center min-h-[calc(100lvh-68px)]">
      <div class="my-10 space-y-3 min-h-[60px]">
        <Speak assets={['privacypolicy']}>
          <h1 class="font-bold text-gray-50 text-2xl sm:text-4xl mb-12" dangerouslySetInnerHTML={it('privacypolicy.title@@Privacy Policy for <span class="text-purple-500">SimplyMC</span>', ctx)}/>

          <p dangerouslySetInnerHTML={it('privacypolicy.optedout', ctx)} />
        </Speak>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Opt out',
  meta: [
    {
      name: 'description',
      content: 'Opt out of telemetry data',
    },
    {
      name: 'og:description',
      content: 'Opt out of telemetry data',
    },
    {
      name: 'og:image',
      content: 'https://simplymc.art/images/icon.png',
    },
  ],
};